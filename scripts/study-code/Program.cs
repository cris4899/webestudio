using System.Text.Json;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;

// Roslyn interpreta la sintaxis real: no se divide el código por un número arbitrario de líneas.
string studyRoot = Path.GetFullPath(args.Length > 0 ? args[0] : ".");
Dictionary<string, List<Part>> structure = new();
foreach (string path in Directory.EnumerateFiles(Path.Combine(studyRoot, "solutions"), "*.cs", SearchOption.AllDirectories))
{
    string relative = Path.GetRelativePath(Path.Combine(studyRoot, "solutions"), path).Replace('\\', '/');
    if (relative.Split('/').Any(segment => segment is "bin" or "obj" or ".vs")) continue;
    SyntaxNode original = CSharpSyntaxTree.ParseText(File.ReadAllText(path)).GetRoot();
    string formatted = original.NormalizeWhitespace(indentation: "    ", eol: "\n").ToFullString() + "\n";
    // Solo se cambia el espaciado: los identificadores, literales y operadores deben coincidir.
    if (!original.DescendantTokens().Select(token => token.Text).SequenceEqual(CSharpSyntaxTree.ParseText(formatted).GetRoot().DescendantTokens().Select(token => token.Text)))
        throw new InvalidOperationException("La presentación ha cambiado el código: " + relative);
    File.WriteAllText(path, formatted);
    if (!relative.StartsWith("relacion-", StringComparison.Ordinal) || relative.Contains("/Platforms/")) continue;
    SyntaxNode root = CSharpSyntaxTree.ParseText(formatted).GetRoot();
    List<Part> parts = new();
    void Add(string name, string kind, SyntaxNode node, string context = "")
    {
        string code = formatted.Substring(node.SpanStart, node.Span.Length);
        parts.Add(new(name, kind, code, context, node.GetLocation().GetLineSpan().StartLinePosition.Line + 1));
    }
    foreach (UsingDirectiveSyntax directive in root.DescendantNodes().OfType<UsingDirectiveSyntax>())
        Add(directive.Name?.ToString() ?? "namespace", "importación", directive);
    foreach (FileScopedNamespaceDeclarationSyntax declaration in root.DescendantNodes().OfType<FileScopedNamespaceDeclarationSyntax>())
        parts.Add(new(declaration.Name.ToString(), "namespace", formatted[declaration.NamespaceKeyword.SpanStart..declaration.SemicolonToken.Span.End], "Al principio del archivo, antes de declarar la clase.", declaration.GetLocation().GetLineSpan().StartLinePosition.Line + 1));
    foreach (TypeDeclarationSyntax declaration in root.DescendantNodes().OfType<TypeDeclarationSyntax>())
        parts.Add(new(declaration.Identifier.Text, "clase", formatted[declaration.SpanStart..declaration.OpenBraceToken.Span.End], "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.", declaration.GetLocation().GetLineSpan().StartLinePosition.Line + 1));
    foreach (MemberDeclarationSyntax member in root.DescendantNodes().OfType<TypeDeclarationSyntax>().SelectMany(type => type.Members))
    {
        switch (member)
        {
            case FieldDeclarationSyntax field:
                Add(string.Join(", ", field.Declaration.Variables.Select(variable => variable.Identifier.Text)), "campo", field);
                break;
            case PropertyDeclarationSyntax property:
                Add(property.Identifier.Text, "propiedad", property);
                break;
            case BaseMethodDeclarationSyntax method:
                string name = method is ConstructorDeclarationSyntax constructor ? constructor.Identifier.Text : ((MethodDeclarationSyntax)method).Identifier.Text;
                string kind = method is ConstructorDeclarationSyntax ? "constructor" : "método";
                if (method.Body is null || method.Body.Statements.Count < 2 || method.ToString().Split('\n').Length <= 12)
                {
                    Add(name, kind, method);
                    break;
                }
                int number = 0;
                for (int index=0; index<method.Body.Statements.Count; index++)
                {
                    StatementSyntax statement=method.Body.Statements[index];
                    if(statement is LocalDeclarationStatementSyntax local && local.Declaration.Variables.Count==1)
                    {
                        string variable=local.Declaration.Variables[0].Identifier.Text;
                        int last=index;
                        while(last+1<method.Body.Statements.Count && method.Body.Statements[last+1] is ExpressionStatementSyntax next && next.ToString().StartsWith(variable+".",StringComparison.Ordinal))last++;
                        if(last>index)
                        {
                            string code=formatted[statement.SpanStart..method.Body.Statements[last].Span.End];
                            parts.Add(new(name+" · "+variable,kind,code,"Dentro de "+name+": crea y configura "+variable+" antes de continuar.",statement.GetLocation().GetLineSpan().StartLinePosition.Line+1));
                            index=last;
                            continue;
                        }
                    }
                    // Un método extenso se estudia por operaciones completas, conservando sus bloques.
                    Add(name + " · operación " + (++number), kind, statement, "Dentro de " + name + ", en el orden indicado. No sustituye la declaración del método ni sus llaves.");
                }
                break;
        }
    }
    structure[relative] = parts;
}
File.WriteAllText(Path.Combine(studyRoot, ".study-cache", "csharp-parts.json"), JsonSerializer.Serialize(structure));
Console.WriteLine($"Código espaciado; {structure.Count} archivos de relaciones analizados por Roslyn.");

record Part(string Name, string Kind, string Code, string Context, int Line);

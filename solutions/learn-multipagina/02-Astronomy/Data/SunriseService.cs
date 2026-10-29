using System.Text.Json;

namespace Astronomy;
public class SunriseService
{
    const string SunriseSunsetServiceUrl = "https://api.sunrise-sunset.org";
    public async Task<(DateTime Sunrise, DateTime Sunset)> GetSunriseSunsetTimes(double latitude, double longitude)
    {
        string query = $"{SunriseSunsetServiceUrl}/json?lat={latitude}&lng={longitude}&date=today";
        HttpClient client = new HttpClient();
        client.DefaultRequestHeaders.Add("Accept", "application/json");
        string json = await client.GetStringAsync(query);
        JsonSerializerOptions options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };
        SunriseSunsetData? data = JsonSerializer.Deserialize<SunriseSunsetData>(json, options);
        return (DateTime.Parse(data.Results.Sunrise), DateTime.Parse(data.Results.Sunset));
    }

    class SunriseSunsetData
    {
#pragma warning disable 0649
        // El campo se asigna mediante deserialización JSON; se desactiva la advertencia de campo sin asignación.
        //public SunriseSunsetResults Results;
        public SunriseSunsetResults Results { get; set; }
#pragma warning restore 0649
    }

    class SunriseSunsetResults
    {
#pragma warning disable 0649
        // Los campos se asignan mediante deserialización JSON; se desactiva la advertencia de campos sin asignación.
        public string Sunrise { get; set; }
        public string Sunset { get; set; }
#pragma warning restore 0649
    }
}

namespace Astronomy;
public class LatLongService : ILatLongService
{
    public async Task<(double Latitude, double Longitude)> GetLatLong()
    {
        double latLoc = 0.0;
        double longLoc = 0.0;
        PermissionStatus status = await Permissions.RequestAsync<Permissions.LocationWhenInUse>();
        if (status == PermissionStatus.Granted)
        {
            GeolocationRequest request = new GeolocationRequest(GeolocationAccuracy.Default, TimeSpan.FromSeconds(10));
            Location? location = await Geolocation.GetLocationAsync(request);
            latLoc = location.Latitude;
            longLoc = location.Longitude;
        }

        return (latLoc, longLoc);
    }
}

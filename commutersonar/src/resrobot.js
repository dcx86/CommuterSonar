export const getGeolocation = (location, setState) => {
  fetch(`https://api.resrobot.se/v2/location.name?key=c34b3b60-fb6e-42ba-8593-1a7e611ca318&input=${location}&format=json`)
  .then(res => res.json())
  .then(data => setState(data.StopLocation[0]))
}

export const getTime = (origin, destination, setState) => {
  fetch(`https://api.resrobot.se/v2/trip?key=${process.env.REACT_APP_RESROBOT_API_KEY}&originCoordLat=${origin.lat}&originCoordLong=${origin.lon}&destCoordLat=${destination.lat}&destCoordLong=${destination.lon}&format=json`)
  .then(res => res.json())
  .then(data => setState(data.Trip[0].LegList.Leg[0].Destination));
}
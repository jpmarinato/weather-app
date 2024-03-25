export default function getWeatherConditions(wIcon) {

  var iconData; 

  switch (wIcon) {
    case "01d":
    case "01n":
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
    case "50d":
    case "50n":
        iconData = {
          icon: 'white-balance-sunny',
          umbrella: 'umbrella-closed',
          text:'no',
          backgroundColor: '#88F3BA',
        };
        break;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
    case "11d":
    case "11n":
    case "13d":
    case "13n":
      iconData = {
          icon: 'weather-pouring',
          umbrella: 'umbrella',
          text:'yes',
          backgroundColor: '#F38888',
        };
        break;
    default:
      iconData = {
        icon: 'weather-pouring',
        umbrella: 'umbrella',
        text:'yes',
        backgroundColor: '#F38888',
      };
  }

  return iconData;
};

export const fetchWeatherData = async (lat, lon) => {
    try {
      const apiKey = "00703541609ed86c9d76331553ebdb40";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
   };
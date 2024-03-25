export default function Details() {
    state = {
        isLoading: true,
        temperature: 0,
        weatherCondition: null,
        error: null
      };
    
      componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          error => {
            this.setState({
              error: 'Error Getting Weather Condtions'
            });
          }
        );
      }
    
      fetchWeather(lat, lon) {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
          .then(res => res.json())
          .then(json => {
            // console.log(json);
            this.setState({
              temperature: json.main.temp,
              weatherCondition: json.weather[0].main,
              isLoading: false
            });
          });
      }

}
import React from "react";

class Weather extends React.Component {
  constructor(){
    super();
    this.state = {weather: {}};
  }

  kToF(temp){
      return Math.round(temp * (9/5) - 459.67);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((pos) => {
      const apiKey = 'f816d7f39052e3a98b21952097a43076';
      const lon = pos.coords.longitude;
      const lat = pos.coords.latitude;
      const request = new XMLHttpRequest();

      request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}`);

      request.onload = () => {
        if(request.status >= 200 && request.status < 400){
          let parsed = JSON.parse(request.responseText);
          const temperature = this.kToF(parsed.main.temp);
          const location = parsed.name;
          const description = parsed.weather[0].description;

          this.setState({
            weather: {temperature, location, description}
          });
          console.log(this.state);
        } else {
          console.log("you effed up!!!");
        }
      };
      request.send();
    });
  }
  render(){
    return(
      <section id="weather">
        <h1>Weather</h1>
        <p className="Location">{this.state.weather.location}</p>
        <p className="Temperature">{this.state.weather.temperature}</p>
        <p className="Description">{this.state.weather.description}</p>
      </section>
    );
  }
}

export default Weather;

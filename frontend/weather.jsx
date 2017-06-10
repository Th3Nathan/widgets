import React from "react";

class Weather extends React.Component {
  constructor(){
    super();
    this.state = {};
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
          this.setState({
            temperature: this.kToF(parsed.main.temp)
          });

          this.setState({
            location: parsed.name
          });
          this.setState({
            description: parsed.weather[0].description
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
        <p className="Location">{this.state.location}</p>
        <p className="Temperature">{this.state.temperature}</p>
        <p className="Description">{this.state.description}</p>
      </section>
    );
  }
}

export default Weather;

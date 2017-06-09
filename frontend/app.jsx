import React from "react";
import Clock from "./clock";
import Weather from "./weather";

class App extends React.Component{

  render(){
    return (
      <section>
        <Clock />
        <Weather />
      </section>
    );
  }

}

export default App;

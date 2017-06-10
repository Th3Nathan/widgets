import React from "react";
import Clock from "./clock";
import Weather from "./weather";
import AutoComplete from "./autocomplete";
import names from "./widgets";

class App extends React.Component{
  render(){
    return (
      <section id="container">
        <Clock />
        <Weather />
        <AutoComplete names={names} />
      </section>
    );
  }

}

export default App;

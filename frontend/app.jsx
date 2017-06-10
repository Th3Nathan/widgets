import React from "react";
import Clock from "./clock";
import Weather from "./weather";
import AutoComplete from "./autocomplete";
import Tabs from "./tabs";


const names = ["nathan", "calvin", "michael", "Euridiche", "Orpheus", "Constantine", "Jeremiah", "Jesus", "Beethoven", "Brie", "Brieanna"];
const tabs = [
  {title: "Cool", content: "I'm a cool tagg"},
  {title: "Swagg", content: "2 Kewl 4 UR POOL"},
  {title: "Cat", content: "Gangta Katt"},
  {title: "Daug", content: "woof woof Im a KorG.I. JO"}
];

class App extends React.Component{
  render(){
    return (
      <section id="container">
        <Clock />
        <Weather />
        <AutoComplete names={names} />
        <Tabs tabs={tabs} />
      </section>
    );
  }

}

export default App;

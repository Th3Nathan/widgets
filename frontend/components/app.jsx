import React from "react";
import Clock from "./widgets/clock";
import Weather from "./widgets/weather";
import AutoComplete from "./widgets/autocomplete";
import Tabs from "./widgets/tabs";


const names = ["nathan", "calvin", "michael", "Euridiche", "Orpheus", "Constantine", "Jeremiah", "Jesus", "Beethoven", "Brie", "Brieanna"];
const tabs = [
  {title: "Cool", content: "I'm a cool tagg"},
  {title: "Swagg", content: "2 Kewl 4 UR POOL"},
  {title: "Cat", content: "Gangta Katt"},
  {title: "Daug", content: "woof woof Im a KorG.I. JO"}
];

const App = function(){
  return (
    <section id="container">
        <Clock />
        <Weather />
        <AutoComplete names={names} />
        <Tabs tabs={tabs} />
      </section>
    );
};


export default App;

import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
    this.state = {time: new Date()};
    this.interval = undefined;
  }

  render(){
    return (
      <section id="clock">
        <h1>
          Cloke
        </h1>
        <p>
          Time
        </p>
        <p>
          {this.state.time.toLocaleTimeString('en-US')}
        </p>
        <p>
          Date
        </p>
        <p>
          {this.state.time.toDateString()}
        </p>
      </section>

    );
  }

  tick(){
    this.setState(
      { time: new Date()}
    );
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      this.tick();
    }, 1000);
  }

  componenetWillUnmount(){
    this.interval.clearInterval();
  }
}
// toDateString())
// dateObj.toTimeString()

export default Clock;

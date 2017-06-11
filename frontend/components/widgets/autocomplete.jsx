import React from 'react';

class AutoComplete extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputString: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e){
    const inputString = e.target.value ? e.target.value : "";
    this.setState({ inputString });
  }

  handleClick(e){
    e.preventDefault();
    const inputString = e.currentTarget.innerText;
    this.setState({inputString});
  }

  matchedNames(){
    return this.props.names.filter((name) => {
      if (this.state.inputString.length === 0) return false;
      const inputName = this.state.inputString;
      return name.slice(0, inputName.length) === inputName;
    });
  }

  matchedList(){
    return this.matchedNames().map((name, i) => {
      return(
        <li onClick={this.handleClick} key={i}>{name}</li>
      );
    });
  }

  render(){
    const {inputString} = this.state;
    return(
      <section id="autocomplete">
        <h1>Auto Complete!</h1>
        <input onChange={this.handleInput} value={inputString}></input>
        <ul>{this.matchedList()}</ul>
      </section>
    );
  }
}

export default AutoComplete;

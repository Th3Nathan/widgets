import React from 'react';

class Tabs extends React.Component {
  constructor(tabs){
    super(tabs);
    this.state = {
      selected: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const selected = e.target.getAttribute("value");
    this.setState({selected});
  }

  allTabs(){
    return this.props.tabs.map((tab, i) => {
      return(
        <h1 onClick={this.handleClick} value={i} key={i}>{tab.title}</h1>
      );
    });
  }

  render(){
    const {selected} = this.state;
    return(
      <section id="tabs">
        <h1>Tabs!</h1>
        <div id="header">{this.allTabs()}</div>
        <article>{this.props.tabs[selected].content}</article>
      </section>
    );
  }
}

export default Tabs;

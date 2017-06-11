import React from 'react';


const Header = function({handleClick, tabs}){
  let allTabs = tabs.map((tab, i) => {
    return(
      <h1 onClick={handleClick} value={i} key={i}>{tab.title}</h1>
    );
  });
  return (
    <section>
      {allTabs}
    </section>
  );
};


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

  render(){
    const {selected} = this.state;
    return(
      <section id="tabs">
        <h1>Tabs!</h1>
        <Header handleClick={this.handleClick} tabs={this.props.tabs} />
        <article>{this.props.tabs[selected].content}</article>
      </section>
    );
  }
}

export default Tabs;

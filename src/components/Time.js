import React from "react";

export default class App extends React.Component {
  state = {
    date: "" , 
  }
 componentDidMount() {
    this.getDate();
  }
   getDate = () => {
    var date = new Date().toLocaleString()
    this.setState({ date });
    window.setInterval(() => this.getDate(), 1000)
  };
  render() {
    const { date } = this.state;
      return <div className="text-center text-danger fs-3">{date}</div>;
  }
}
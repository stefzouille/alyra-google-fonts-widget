import React from "react";



export default class App extends React.Component {
  state = {
    date: "" , 
    
   
  };

  
  componentDidMount() {
    this.getDate();
    
   
  }
     //date ok mais heure non mis a jour a mettre dans un useEffect?
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





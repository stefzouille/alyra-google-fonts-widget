
import React from "react"
import Page from './components/Page'
import Header from './components/Header'
import DateTime from './components/Time'


const ToggleModeButton = (props) => {
  const { darkMode, setDarkMode } = props;
  const handleButtonClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button onClick={handleButtonClick} className="btn btn-danger mb-4">
      Dark Mode
    </button>
  );
};


function App() {
 const [darkMode, setDarkMode] = React.useState(true);
  const modeClasses = darkMode ? "bg-dark text-white" : "bg-light";

  return (
    <section className={modeClasses}>
    <div className="App container">
       
      <Header />
      <DateTime />
      <ToggleModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      <Page />
      <footer className="p-3 text-center bg-dark text-white">With Love &amp; React for Alyra</footer>
    </div>
    </section>
  );
}
export default App;

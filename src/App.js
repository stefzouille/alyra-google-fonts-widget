import React from "react"
import Page from './components/Page'
import Header from './components/Header'
import DateTime from './components/Time'
import './components/Box.css'
import ToggleModeButton from './components/ToggleModeButton'



function App() {
 const [darkMode, setDarkMode] = React.useState(true);
  const modeClasses = darkMode ? "bg-dark text-white" : "bg-light";

  return (
    <section className={modeClasses}>


      <Header />
      <div className="App container">
        <div className="row">
          <div className="col-6 ps-4 pt-2">
            <ToggleModeButton className="col-6" darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div className="col-6">
            <DateTime className="col-6"/>
          </div>
        </div>
        <Page />
      </div>

      <div className="Box">
        <footer className="p-3 text-center">With Love &amp; React for Alyra</footer>
      </div>

    </section>
  );
}
export default App;

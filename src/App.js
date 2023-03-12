import './App.css';
import {useState} from "react"
import Standard from './components/Standard.jsx';
import Length from "./components/Length.jsx"
import Advanced from "./components/Advanced.jsx"
import Weight from './components/Weight';

function App() {
  const [ menu, setMenu ] = useState(null)      //opens menu with different options 
  const [ mod, setMod ] = useState("Standard")  //set active mode (standard, advanced, length, width)

  const handleStandard = () => {   //close menu and opens standard mode
    setMenu(null);
    setMod("Standard")
  }
  
  const handleAdvanced = () => {  
    setMenu(null); 
    setMod("Advanced") 
  }

  const handleLength = () => {
    setMenu(null); 
    setMod("Length") 
  }

  const handleWeight = () => {
    setMenu(null); 
    setMod("Weight") 
  }

  


  return (
    <div className='App' >
      <div className='header' >
        <div onClick={() => setMenu(true)} className='menu'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 style={{color: "white", fontSize: "16px" }} >{mod}</h3>
      </div>
      {menu && <div className='modalMenu' >  
        <p>Calculator</p>
        <li onClick={handleStandard} >Standard</li>
        <li onClick={handleAdvanced} >Advanced</li>
        <p>Convert</p>
        <li onClick={handleLength} >Length</li>
        <li onClick={handleWeight} >Weight</li>
      </div>}
      <div>
        {mod === "Standard" && <Standard />}
        {mod === "Advanced" && <Advanced />}
        {mod === "Length" && <Length />}
        {mod === "Weight" && <Weight />}
      </div>
    </div>
  );
}

export default App;

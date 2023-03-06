import './App.css';
import {useState} from "react"
import Standard from './components/Standard.jsx';
import Length from "./components/Length.jsx"

function App() {
  const [ menu, setMenu ] = useState(null)
  const [ mod, setMod ] = useState("Standard")

  const handleStandard = () => {
    setMenu(null);
    setMod("Standard")
  }
  
  const handleLength = () => {
    setMenu(null); 
    setMod("Length") 
  }
  


  return (
    <div className="App">
      <div className='header' >
        <div onClick={() => setMenu(true)} className='menu'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 style={{color: "white"}} >{mod}</h3>
      </div>
      {menu && <div className='modalMenu' >
        <li onClick={handleStandard} >Standard</li>
        <li>Advanced</li>
        <p>Convert</p>
        <li onClick={handleLength} >Length</li>
      </div>}
      <div>
        {mod === "Standard" && <Standard />}
        {mod === "Length" && <Length />}
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Section1 from './component/Section1';

function App() {

  const [mode, setMode] = useState("light");

  const [btnText, setBtnText] = useState("Enable Dark Mode");
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.background="black";
      document.body.style.color="white";
      setBtnText('Enable Light Mode');
    } else {
      setMode('light');
      document.body.style.background="white";
      document.body.style.color="black";
      setBtnText('Enable Dark Mode');
    }
  }

  


  return (
    <>
    <Navbar title="SIT" btnText={btnText} toggleMode={toggleMode} mode={mode}/>
    <Section1 />
    </>
  );
}

export default App;

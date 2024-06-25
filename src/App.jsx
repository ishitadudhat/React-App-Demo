import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx'
import Alert from './components/Alert.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');

  const [btnText, newBtnText] = useState('Enable Light Mode');

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      // setMyText("Enable Light Mode");
      showAlert("Dark Mode Has Been Enable", "success")
      newBtnText('Enable Dark Mode');
      // document.title="Dark Mode";

      setInterval(() => {
        document.title = "SIT - Admission"
      }, 2000);

      setInterval(() => {
        document.title = "SIT - Bsc.IT"
      }, 1500);
    } else {
      setMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      // setMyText("Enable Dark Mode");
      showAlert("Light Mode Has Been Enable", "success");
      newBtnText('Enable Light Mode');
      document.title="Light Mode";
    }
  }

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    },1500);
  }



  const router = createBrowserRouter([
    {
      path: '/Home',
      element: <>
      <Navbar title="SIT" aboutText="Contact Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
    <Alert alert={alert} />
    <TextForm heading="Enter Text to Analyse Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      </>
    },
    {
    path: '/PrivacyPolicy',
      element: <>
      <Navbar title="SIT" aboutText="Contact Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <PrivacyPolicy heading="Privacy Policy for Sahajanand Institute of Technology"/>
      </>
      }
  ])


  

  


  return (
    <>
  <RouterProvider router={router}/>
    </> 
  );
}

export default App;

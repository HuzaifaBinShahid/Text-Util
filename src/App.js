import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import lightImage from './images/light.jpg';
import darkImage from './images/dark.jpg';
import { useState } from 'react';


function App() {


  const [LightMode, setDarkMode] = useState(true);
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert ( {
       msg: message,
       type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }



  const handelModeClick = () => {
    setDarkMode(!LightMode);
    LightMode ? showAlert("Dark Mode has been Enabled" , "success"): showAlert("Light Mode has been Enabled" , "success");
  }

  let appStyle = {
    position: 'relative',
    marginTop: 0,
    padding: 0,
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1 ), rgba(0, 0, 0, 0.5)), url(${LightMode ? lightImage : darkImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: LightMode ? 'black' : 'white',
  }

  return (
    <div style={appStyle} className="App">

      <Navbar title="TextUtil" aboutText="This is a Text App" LightMode={LightMode} onModeClick={handelModeClick} />
      <Alert alert = {alert}/>
      <div className="container my-5">
        <TextForm showAlert = {showAlert}  LightMode={LightMode} heading="Enter Text To Analyze" />
      </div>

    </div>
  );
}

export default App;

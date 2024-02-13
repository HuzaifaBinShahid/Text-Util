import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import lightImage from './images/light.jpg';
import darkImage from './images/dark.jpg';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {


  const [LightMode, setDarkMode] = useState(true);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }



  const handelModeClick = () => {
    setDarkMode(!LightMode);
    LightMode ? showAlert("Dark Mode has been Enabled", "success") : showAlert("Light Mode has been Enabled", "success");
  }

  let appStyle = {
    position: 'relative',
    marginTop: 0,
    padding: 0,
    height: '120vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1 ), rgba(0, 0, 0, 0.5)), url(${LightMode ? lightImage : darkImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: LightMode ? 'black' : 'white',
  }

  return (
    <Router>
      <div style={appStyle} className="App">

        <Navbar title="TextUtil" aboutText="This is a Text App" LightMode={LightMode} onModeClick={handelModeClick} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} LightMode={LightMode} heading="Enter Text To Analyze" />} />
            <Route path = '/about' element={<About />}/>
          </Routes>

        </div>

      </div>
    </Router>
  );
}

export default App;

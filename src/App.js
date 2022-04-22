import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');//WHETEHR DARK MODE IS ENBLED OR NOT 
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert ({
      msg  : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () =>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#0f1124';
      showAlert("Dark mode has been enabled", "success")
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Router>
   <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze :" mode={mode}/>
          </Route>
    </Switch>
     </div>
    </Router>
   
   

    </>
  );
}

export default App;

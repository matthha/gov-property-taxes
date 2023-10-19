
import './Reset.css'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Splash from './components/Splash';
import Page from './components/Page';
import Footer from './components/Footer';
// Use app to load the components that we want. 
// Utilize screen state to select the right components with the right information.
import {useState} from "react";
import LeanManufacturing from './components/Screens/LeanManufacturing';
import Learn from './components/Screens/Learn';


function App() {
  const [screen, setScreen] = useState("LeanManufacturing");
  return (
    <div className="App">
      <header className="App-header">      
      </header>
      <Header />
      <Nav setScreen={setScreen} /> 
      <Page screen={screen} />
      {screen === 'Learn' && <Learn screen={screen} setScreen={setScreen}/>}
      <Footer /> 
    </div>
  );
}

export default App;

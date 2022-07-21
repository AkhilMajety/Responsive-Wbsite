
import './App.css';
import NavBar from './components/Navbar/Navbar';
import { themeContext } from "./Context";
import { useContext } from 'react';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import "./Responsive.css"


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={
      {
        
        background: darkMode? 'black':'',
        color :darkMode? 'white': '',
      }
    }
    > 
       <NavBar />
      <Intro  name="darkMode"/>
      <Services /> 
      
     
      
      
      
      
      </div>
    
  );
}

export default App;

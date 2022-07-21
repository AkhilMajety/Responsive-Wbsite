
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import React, { useContext } from "react";

import { themeContext } from "../../Context";

import {useMediaQuery} from "../Intro/demo2"





const NavBar = () => {

  
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //console.log("darkmode"+ theme )
const isRowBased = useMediaQuery('(min-width: 500px)');
  
  
  return (
    <div  className="n-wrapper" id="Navbar"
    style={{
      flexDirection : darkMode &&  !isRowBased? "column" : "row" ,
    height:  darkMode &&  !isRowBased? 'auto' : '',
    
    }} 
    >
      {/* left */}
      
      <div className="n-left">
        <div className="n-name">Akhil</div>
       
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list" >
          <ul className="n-list-ul" style={{ listStyleType: "none" ,
              
      flexDirection : darkMode &&  !isRowBased? "column" : "row" ,
        }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li>
            <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
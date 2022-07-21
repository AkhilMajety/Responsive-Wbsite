import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {useMediaQuery} from "../Intro/demo2"

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  const isRowBased = useMediaQuery('(min-width: 500px)');

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services" style={{
      flexDirection : darkMode &&  !isRowBased? "column" : "row" ,
      gap:  darkMode &&  !isRowBased? '5rem' : '',
    height:  darkMode &&  !isRowBased? '66rem' : '',
    padding : darkMode &&  !isRowBased?  '0': '',
    }} >
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        
          <button className="button s-button">Download CV</button>
    
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards" style={{
        flexDirection : darkMode &&  !isRowBased? "column" : "" ,
        gap:  darkMode &&  !isRowBased? '17rem' : '',
      display:  darkMode &&  !isRowBased? 'flex' : '',
      position:  darkMode &&  !isRowBased? 'static' : '',
      left : darkMode &&  !isRowBased? '2rem' : ''
      
      
      }}>
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        
       
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};



export default Services;
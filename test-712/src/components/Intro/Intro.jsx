import React, { useContext } from "react";
import "./Intro.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";

import {useMediaQuery} from './demo2'



const Intro = (props) => {
  // Transition
  
  
  const isRowBased = useMediaQuery('(min-width: 500px)');  //return true > 500px
  //console.log('is row '+isRowBased);
  const transition = { duration: 3, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 


  
// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 200px)' })

  return (
    <div className="Intro" id="Intro" style={{flexDirection : darkMode &&  !isRowBased? "column" : "row" ,
    gap:  darkMode &&  !isRowBased? '7rem' : '',
    height:  darkMode &&  !isRowBased? '64rem' : '',
    }
    }>
      {/* left name side */}
      
      <div className="i-left">
        <div className="i-name" id="my-content">
      
          
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          
          <span>Akhil Majety</span>

          
          <span>
          Post Graduate Engineer Trainee at Stryker
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
         
        </div>
      </div>
      {/* right image side */}
      <div className="i-right" style={{left : darkMode &&  !isRowBased? '-3rem' : '' ,
     transform : darkMode &&  !isRowBased? 'scale(0.8)' : '' }}>

      <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
    
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      
    </div>
  );
};



export default Intro;

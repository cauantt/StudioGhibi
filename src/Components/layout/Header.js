 import React from "react";
 import logo from '../../assets1/img/pngwing.svg'
 import facebook from '../../assets1/img/logo-facebook.svg'
 import instagram from '../../assets1/img/logo-instagram.svg'
 import twitter from '../../assets1/img/logo-twitter.svg'
 import google from '../../assets1/img/logo-google.svg'
 import Circle from "../Header/Circle";


function Header() {
    return (
      <div className='w-3/4 pt-5 flex justify-between items-center' >
        <img src={logo} className='h-20'></img>
        <div className="flex gap-6"> 
          <Circle img={facebook}/>
          <Circle img={instagram}/>
          <Circle img={twitter}/>
          <Circle img={google}/>
        </div>

      </div>
    );
  }
  
  export default Header;
  
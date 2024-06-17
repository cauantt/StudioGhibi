 import React from "react";
 import logo from '../../assets1/img/pngwing.svg'
 import facebook from '../../assets1/img/logo-facebook.svg'
 import instagram from '../../assets1/img/logo-instagram.svg'
 import twitter from '../../assets1/img/logo-twitter.svg'
 import google from '../../assets1/img/logo-google.svg'
 import Circle from "../Header/Circle";


function Header() {
    return (
      <div className='w-3/4  flex justify-between items-center max-lg:w-11/12 max-lg: max-w-11/12 sm:justify-center' >
        <a href="https://studioghibli.com.br/studioghibli/"><img src={logo} className='h-16'></img></a>
        <div className="flex gap-6 sm:hidden "> 
          <Circle img={facebook}/>
          <Circle img={instagram}/>
          <Circle img={twitter}/>
          <Circle img={google}/>
        </div>

      </div>
    );
  }
  
  export default Header;
  
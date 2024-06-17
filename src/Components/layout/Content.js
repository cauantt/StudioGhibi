import React from 'react'
import Header from './Header'
import ghost from "../../assets1/img/ghost.png"
import { LuPlay } from "react-icons/lu";

function Content() {
  return (

    
    <div className='flex flex-row justify-between items-center  w-3/4 max-w-11/12 h-screen lg:flex-col-reverse lg:justify-center lg:gap-20  '>
      <div className='text-white flex flex-col  items-start justify-center [width:340px] lg:[width:430px] sm:[max-width:340px] gap-7 '>
          <div className='flex flex-col gap-3 '>
              <h2 className='lg:text-base'> HAYAO MIZAKI</h2>
              <h1 className='text-5xl  font-extrabold lg:text-4xl '>A VIAGEM DE CHIHIRO</h1>
          </div>
          <div className='lg:[width:430px] sm:[max-width:330px]'>
            <p className=" font-light [width:100%] sm:[max-width:340px] ">Chihiro chega a um mundo mágico dominado por uma bruxa Aqueles que a desobedecem são transformados em animais.</p>
          </div>
          <div className='flex gap-5 justify-center items-start lg:flex-col  [width:340px]  ' >
              <button className='h-9 w-40 bg-customColor-light text-black text-xs font-semibold flex justify-center items-center gap-2 lg:[width:425px] sm:[max-width:100%] ' ><span className='text-lg'>
                <LuPlay />
              </span> <a href="https://www.netflix.com/br/title/60023642" target='_blank'>ASSISTIR AGORA</a></button>
              <button className='h-9 w-40 font-medium text-xs bg-transparent border border-customColor-light  lg:[width:425px] sm:[max-width:100%] ]'><a href="https://www.youtube.com/watch?v=SgZI655GgHk">ASSISTA O TRAILER</a></button>
          </div>
      
      </div>
     

    <img className=" [width:400px] lg:[width:300px] sm:[max-width:200px]  " src={ghost}></img>
      
    </div>
    
  )
}

export default Content

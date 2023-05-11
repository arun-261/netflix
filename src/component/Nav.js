import React,{useEffect,useState} from 'react'
import './Nav.css'

function Nav() {
    const [show,handleshow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>500?handleshow(true):handleshow(false);
        })
      },[])
      console.log(show);

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
        <img className='logo'
        src='https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png'/>
    </div>


  )
 
}

export default Nav
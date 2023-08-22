import React from 'react'
import './Css/Contactform.css'
import image5 from './Images/image5.jpg'


function Contactform() {
  return (
    <div>
        <img className='img8' src={image5} />
        
        <div className='text2'>
        <p className='heading2'>Contact</p>
       
    </div>


        <div className='form-container'>
         <h1 className='newhh'>Send a message to us!</h1>

         <form>
            <input className='input' placeholder='Name'/> <br/>
            <input className='input' placeholder='Email'/><br/>
            <input className='input' placeholder='Subject'/> <br/>
            <textarea className='inputarea' placeholder='Message' rows="4"></textarea>
         </form>
         <button>Send Message</button>
         </div>


    </div>
  )
}

export default Contactform
import React from 'react'
import './Css/Footer.css'
import facebook from './Images/facebook.jpg'
import whatsapp from './Images/whatsapp.jpg'
import linkedin from './Images/linkedin.jpg'
import twitter from './Images/twitter.jpg'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-top'>
            <div>
                <h1>Trippy</h1>
                <p>Choose Your Favourite Destination</p>
            </div>

            <div> 
                <img className='social' src={facebook} />
                <img className='social' src={whatsapp} />
                <img  className='social' src={linkedin} />
                <img className='social' src={twitter} />
                
            </div>
        </div>

        <div className='div-second'>

            <div className='footer-li'>
                <h3 className='hname'>Project</h3>

                <ul className='footer-ul'>
                    <li className='liname'>Changelog</li>
                    <li className='liname'>status</li>
                    <li className='liname'>License</li>
                    <li className='liname'>All Versions</li>
                </ul>

            </div>

            <div className='footer-li'>
                <h3 className='hname'>Project</h3>

                <ul className='footer-ul'>
                    <li className='liname'>Changelog</li>
                    <li className='liname'>status</li>
                    <li className='liname'>License</li>
                    <li className='liname'>All Versions</li>
                </ul>

            </div>

            <div className='footer-li'>
                <h3 className='hname'>Project</h3>

                <ul className='footer-ul'>
                    <li className='liname'>Changelog</li>
                    <li className='liname'>status</li>
                    <li className='liname'>License</li>
                    <li className='liname'>All Versions</li>
                </ul>

            </div>

            <div className='footer-li'>
                <h3 className='hname'>Project</h3>

                <ul className='footer-ul'>
                    <li className='liname'>Changelog</li>
                    <li className='liname'>status</li>
                    <li className='liname'>License</li>
                    <li className='liname'>All Versions</li>
                </ul>

            </div>

            


        </div>


    </div>
  )
}

export default Footer
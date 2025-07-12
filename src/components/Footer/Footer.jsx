import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt='' />
           <p>Lorem, ipsum dolor sit amet , et quam, ut  exercitationem incidunt, sit dolorem quas enim esse impedit officia molestiae quod, reiciendis ipsa doloremque cupiditate. Nam quasi possimus laborum, perferendis similique provident porro omnis alias? Cumque id magni nesciunt praesentium ut aperiam dolor quisquam voluptatum quo perferendis?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
            </div>
        </div>
           <div className="footer-content-center">
            <h2> COMPANY</h2>
            <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            </ul>
            
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
        <ul>
          <li>+12-345-234-24</li>
          <li>contact@tomato.com</li>
        </ul>
        </div>
     
      </div>
      <hr/>
      <p className='footer-copyright'>copyright 2024 @ tomato.com-All-Right-Reserved</p>
    </div>
  )
}

export default Footer

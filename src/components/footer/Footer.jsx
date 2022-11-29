import React from 'react'
import './footer.css'
import {BsLinkedin}  from 'react-icons/bs'
import {FaGithub}  from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'


const footer = () => {
  return (
   <footer>
    <a href='#' className='footer_logo'>Shafwan</a>

    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href='https://github.com/shafwan-anwer'><FaGithub/></a>
      <a href='https://www.linkedin.com/in/shafwan-anwer-17b392255/'><BsLinkedin/></a>
      <a href='https://instagram.com/_.shafwan._._?igshid=YmMyMTA2M2Y='><GrInstagram/></a>
    </div>
   </footer>
  )
}

export default footer
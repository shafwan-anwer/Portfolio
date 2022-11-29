import React from 'react'
import {BsLinkedin}  from 'react-icons/bs'
import {FaGithub}  from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/shafwan-anwer-17b392255/'><BsLinkedin/></a>
        <a href='https://github.com/shafwan-anwer'><FaGithub/></a>
        <a href='https://instagram.com/_.shafwan._._?igshid=YmMyMTA2M2Y='><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials
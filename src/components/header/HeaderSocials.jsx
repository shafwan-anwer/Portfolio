import React from 'react'
import {BsLinkedin}  from 'react-icons/bs'
import {FaGithub}  from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com'><BsLinkedin/></a>
        <a href='https://github.com'><FaGithub/></a>
        <a href='https://dribble.com'><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials
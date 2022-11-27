import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>shafwan.anwer@gmail.com</h5>
            <a href='mailto:shafwan.anwer@gmail.com'>send a message</a>
          </article>
          <article className='contact_option'>
            <BsMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>shafwan.anwer@gmail.com</h5>
            <a href='mailto:shafwan.anwer@gmail.com'>send a message</a>
          </article>
          <article className='contact_option'>
            <SiWhatsapp className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>shafwan.anwer@gmail.com</h5>
            <a href='mailto:shafwan.anwer@gmail.com'>send a message</a>
          </article>
        </div>
        {/*End of contact option*/}
        <form actions="">
          <input type="text" name="name" placeholder="'your full name" required />
          <input type="email" name="email" placeholder='your email' required />
          <textarea name='message' rows="7" placeholder="your message" required></textarea>
          <button type='suubmit' className='btn btn-primary'>send a message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
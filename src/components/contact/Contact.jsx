import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiWhatsapp} from 'react-icons/si'
import {MdCall} from 'react-icons/md'
import {useRef} from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bf4dgvf','template_y1hq2se', form.current, 'BCwJNsBeUNvCPvF-a')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

  };
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
            <MdCall className='contact_option-icon' />
            <h4>Call</h4>
            <h5>+94 0774452475</h5>
            <a href="tel:+94774452475">Make a Call</a>
          </article>
          <article className='contact_option'>
            <SiWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+94 0774452475</h5>
            <a href="https://api.whatsapp.com/send?phone=94774452475">send a message</a>
          </article>
        </div>
        {/*End of contact option*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="your full name" required />
          <input type="email" name="email" placeholder='your email' required />
          <textarea name='message' rows="7" placeholder="your message" required></textarea>
          <button type='submit' className='btn btn-primary'>send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
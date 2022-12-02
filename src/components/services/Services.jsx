import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
   <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services_container'>
        <article className='service'>
              <div className='service_head'>
                <h3>Full Stack</h3>
              </div>
                  <ul className='service_list'>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Design client-side and server-side architecture.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Work with development teams and product managers to ideate software solutions.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Build features and applications with a mobile responsive design.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Build the front-end of applications through appealing visual design.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Develop and manage well-functioning databases and applications</p>
                        </li>
                  </ul>
        </article>
        <article className='service'>
              <div className='service_head'>
                <h3>Web Development</h3>
              </div>
                  <ul className='service_list'>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Proven working experience in web programming.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Integrating data from various back-end services and databases.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Cooperate with web designers to match visual design intent.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Top-notch programming skills and in-depth knowledge of modern HTML/CSS.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Familiarity with following programming languages: PHP, SQL, NOSQL, Javascript, React</p>
                        </li>
                  </ul>
        </article>
        <article className='service'>
              <div className='service_head'>
                <h3>App Development</h3>
              </div>
                  <ul className='service_list'>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Proven experience as application developer.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Ability to program in programming language such as C/C#/C++, Java & Flutter.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Perform unit and integration testing before launch.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Evaluate existing applications to reprogram, update and add new features.</p>
                        </li>
                        <li>
                          <BiCheck className="service_list-icon"/>
                          <p>Write high quality source code to program complete applications within deadlines</p>
                        </li>
                  </ul>
        </article>
    </div>
  </section>
  )
}

export default services
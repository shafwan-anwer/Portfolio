import React from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
            <h3>Frontend Development</h3>
             <div className="experience_content">
                <article className='experience_details'>
                  <BsPatchCheckFill  className='experience_details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                 <div> <h4>CSS/SCSS</h4>
                  <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                 <div> <h4>React</h4>
                  <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
               <div>   <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div> <h4>Flutter</h4>
                  <small className='text-light'>Basic</small></div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Angular</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Angular Material</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>React Native</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
             </div>
          </div>



        <div className="experience_backend">

        <h3>Backend Development</h3>
             <div className="experience_content">
                <article className='experience_details'>
                  <BsPatchCheckFill  className='experience_details-icon'/>
                  <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                 <div> <h4>C/C#/C++</h4>
                  <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                 <div> <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
               <div><h4>SQL</h4>
                  <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>NOSQL</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
             </div>
   
        </div>
      </div>
    </section>
  )
}

export default experience
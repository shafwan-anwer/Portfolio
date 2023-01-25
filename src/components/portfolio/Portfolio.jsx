import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Ceilao Admin Panel Web',
    github: 'https://github.com/shafwan-anwer/AdminPanelweb.git',
    demo: 'http://admin-ceilao.epizy.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Ceilao Android App',
    github: 'https://github.com/ushiradineth/carApp',
    demo: 'https://github.com/ushiradineth/carApp/releases/tag/v1.0'
  },
  {
    id: 3,
    image: IMG3,
    title: 'E-Commerce Website',
    github: 'https://github.com/shafwan-anwer/smartshoppers.git',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'React Portfolio',
    github: 'https://github.com/shafwan-anwer/Portfolio',
    demo: 'https://shafwan-anwer.github.io/Portfolio/'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Detox Photography Website',
    github: '',
    demo: 'https://shafwan-anwer.github.io/photography/'
  },
  {
    id: 6,
    image: IMG2,
    title: 'Shamrock Station Website',
    github: '',
    demo: 'https://shafwan-anwer.github.io/Shamrock-Station/'
  },
  {
    id: 7,
    image: IMG3,
    title: '2Tuned Website',
    github: '',
    demo: 'https://shafwan-anwer.github.io/Tuned/'
  },
  {
    id: 8,
    image: IMG1,
    title: '',
    github: '',
    demo: ''
  },
  {
    id: 9,
    image: IMG2,
    title: 'SmartShoppers Inventory App',
    github: '',
    demo: ''
  }

]




const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
       {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id}className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
          )
        })
       }
       
  
      </div>
      </section>
  )
}

export default portfolio
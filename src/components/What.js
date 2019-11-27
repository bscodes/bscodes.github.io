import React, { useState } from 'react';
import agency from '../img/agency.png'
import article from '../img/article.png'
import coke from '../img/coke.png'
import recipe from '../img/recipe.png'
import rental from '../img/rental.png'



const What = () => {

    const [projects] = useState([
        {
            "id":   1,
            "name": 'Creative Agency',
            "img": [agency],
            "desc": "A Creative Agency website built with React and Redux. Includes team, portfolio, services pages and a contact form"
          },
          {
            "id":   2,
            "name": 'Recipe Search App',
            "img": [recipe],
            "desc": "Recipe Search App is a web app that was built with React. I used to an API for development fist time!"

          },
          {
            "id":   3,
            "name": 'Coca Cola Store',
            "img": [coke],
            "desc": "A small ecommerce application focussing on fundamentals of ReactJS. The web app consists of a Coca-Cola product page and a product shopping cart page."

          },
          {
            "id":   4,
            "name": 'Random Article',
            "img": [article],
            "desc": "Random Article is a website that was built with React Hooks as a personal project. I used to an article database for it."

          },
          {
            "id":   5,
            "name": 'Car Rental',
            "img": [rental],
            "desc": "A car rental company website frontend project with HTML & CSS and Javascript"
          }
    ])

    return(
        <>
            <section className="what mb-5 mt-5 pt-5 pr-3 pl-3">
                <div className="container text-left">
                    <div className="row">
                        <div className="column-title mt-3 mb-3">
                            <div className="col-lg-12">
                                <h1 className="column-title-text">
                                Projects
                                </h1>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                    {
                        projects.map(p => (
                            <div className="col-lg-6 col-md-6 col-sm-6" key={p.id}>
                                <div className="card mb-3">
                                    <img src={p.img} alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {p.name}
                                        </h2>
                                        <p className="card-text">
                                        {p.desc}
                                        </p>
                                        <a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mr-3">
                                            <i className="fab fa-github fa-2x"></i>
                                        </a>
                                        <a href="/" target="_blank" rel="noopener noreferrer" className="view btn btn-primary">
                                        <i className="fas fa-external-link-alt fa-2x">  <span>View</span> </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </>
    );
}

export default What;
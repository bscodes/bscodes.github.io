import React, { useState } from 'react';
import agency from '../img/agency.png'
import article from '../img/article.png'
import coke from '../img/coke.png'
import recipe from '../img/recipe.png'
import yourway from '../img/yourway.png'
import covid from '../img/covid19.png'



const What = () => {

    const [projects] = useState([
        {
            "id":   6,
            "name": 'COVID-19 Overview',
            "img": [covid],
            "github": "https://github.com/bscodes/covid-19-overview",
            "demo": "https://covidoverview.netlify.app/",
            "desc": "A dashboard to track the impact of COVID-19 global pandemic. Built with React"
        },
        {
            "id":   5,
            "name": 'yourwayinkiev.com',
            "img": [yourway],
            "github": "https://github.com/bscodes/Real-Estate",
            "demo": "https://www.yourwayinkiev.com/#/",
            "desc": "A Kiev based real estate agent website built for my costomer with React and Redux"
        },
        {
            "id":   1,
            "name": 'Creative Agency',
            "img": [agency],
            "github": "https://github.com/bscodes/react-agency-website",
            "demo": "https://bscodes.github.io/react-agency-website/#/",
            "desc": "A Creative Agency website built with React and Redux. Includes team, portfolio, services pages and a contact form"
        },
        {
            "id":   2,
            "name": 'Recipe Search App',
            "img": [recipe],
            "github": "https://github.com/bscodes/Recipe-Search-App",
            "demo": "https://bscodes.github.io/Recipe-Search-App/#/",
            "desc": "Recipe Search App is a web app that was built with React."

        },
        {
            "id":   3,
            "name": 'Coca Cola Store',
            "img": [coke],
            "github": "https://github.com/bscodes/coca-cola-app",
            "demo": "https://bscodes.github.io/coca-cola-app/#/",
            "desc": "A small ecommerce application built with ReactJS. The web app consists of a product page and a shopping cart page."

        },
        {
            "id":   4,
            "name": 'Random Article',
            "img": [article],
            "github": "https://github.com/bscodes/Random-Article-Button",
            "demo": "https://bscodes.github.io/Random-Article-Button/#/",
            "desc": "Random Article is a website that was built with React Hooks as a personal project. I used to an article database for it."

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
                                Works
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
                                        <hr className="gray-line"/>
                                        <div className="card-text-wrapper">
                                            <p className="card-text">
                                                {p.desc}
                                            </p>
                                        </div>
                                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mr-3">
                                            <i className="fab fa-github fa-2x"></i>
                                        </a>
                                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="view btn btn-primary">
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
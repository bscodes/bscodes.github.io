import React, { useState } from 'react';
import agency from '../img/agency.png'
import article from '../img/article.png'
import coke from '../img/coke.png'



const What = () => {

    const [projects] = useState([
        {
            id:   1,
            name: 'Creative Agency',
            img: [agency]
          },
          {
            id:   2,
            name: 'Random Article',
            img: [article]
          },
          {
            id:   3,
            name: 'Coca Cola Store',
            img: [coke]
          },
          {
            id:   4,
            name: 'mary',
            img: 'https://images.pexels.com/photos/2733862/pexels-photo-2733862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id:   5,
            name: 'mary',
            img: 'https://images.pexels.com/photos/2733862/pexels-photo-2733862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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
                                        Some quick example text to build on the card title and make up the bulk of the card's content
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
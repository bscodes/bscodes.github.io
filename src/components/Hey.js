import React from 'react';

const Hey = () => {
    return(
        <>
            <section className="hey mb-5 mt-5 pt-5 pr-3 pl-3">
                <div className="container text-left">
                    <div className="row">
                        <div className="column-title mt-3">
                            <div className="col-lg-12">
                                <h1 className="column-title-text">
                                Hey! I’m Bilal Sevinç.
                                </h1>
                                <h3 className="column-spot mt-4">
                                I'm a <span>front-end developer</span>, currently looking for a new role in globe.
                                <span role="img" aria-label="👨🏻‍💻 "> 👨🏻‍💻 </span>
                                </h3>
                                <div className="social-buttons pt-3">
                                    <a className="social-button" href="https://github.com/bscodes" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github fa-2x"></i>
                                    </a>
                                    <a className="social-button" href="https://twitter.com/bscoding" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter fa-2x"></i>
                                    </a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hey;
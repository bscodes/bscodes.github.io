import React from 'react';

const Me = () => {
    return(
        <>
            <section className="me mb-5 pt-2 pr-3 pl-3">
                <div className="container text-left">
                    <div className="row">
                        <div className="column-title mt-3">
                            <div className="col-lg-12">
                                <h1 className="column-title-text">
                                Contact Me
                                </h1>
                                <h3 className="column-spot mt-4">
                                Feel free to contact me about a work opportunity or general enquiry.
                                <span role="img" aria-label="postbox "> 📮 </span>
                                </h3>
                                <div className="social-buttons text-center pt-4">
                                    <a className="social-button mail-button" href="mailto:bilalresmi@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <h3 className="column-spot"> Get in touch<span role="img" aria-label="hand"> 👉 </span> <span className="mail" >bilalresmi@gmail.com</span> </h3> 
                                    </a>
                                </div>
                                <div className="social-buttons text-center pt-4">
                                    <a className="social-button" href="https://github.com/bscodes" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github fa-4x"></i>
                                    </a>
                                    <a className="social-button ml-3 mr-2" href="https://twitter.com/bscoding" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter fa-4x"></i>
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

export default Me;
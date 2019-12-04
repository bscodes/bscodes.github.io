import React from 'react';

const About = () => {
    return(
        <>
            <section className="about mb-5 pr-3 pl-3">
                <div className="container text-left">
                    <div className="row">
                        <div className="column-title mt-3">
                            <div className="col-lg-12">
                                <h1 className="column-title-text">
                                About me
                                </h1>
                                
                                <div className="skill-list pt-3">
                                    <ul className="skill-list-group list-group-flush">
                                        <li className="list-item">
                                            <h4>I'm currently working as a freelance and contractor front-end developer for about 1 year.</h4>
                                        </li>
                                        <li className="list-item">
                                            <h4>Skilled and experienced with HTML, CSS, SASS, Bootstrap JavaScript and React, and happy to learn new languages, libraries and frameworks. <span role="img" aria-label="rocket">🚀</span></h4>
                                        </li>
                                        <li className="list-item">
                                            <h4>From design to development. Learning and experimenting is in my genes.</h4>
                                        </li>
                                        <li className="list-item">
                                            <h4>As a front-end developer, I strive to develop applications that are both efficient and user-friendly. </h4>
                                        </li>
                                        <li className="list-item">
                                            <h4>Solving problems developing a minimum viable product and learning as quickly as possible to iterate.</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
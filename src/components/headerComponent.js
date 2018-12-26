import React from 'react';
import heron from '../images/heron-flying.png'; 

let HeaderComponent = () => (
    <section id="header">
        <div id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-12-medium">
                        <p>Enterprise-oriented software lifecycle engineering across the full-stack, front-end, DevOps, automated testing, and AI/data science spectrum</p>
                        <p>This website is intended to be evidence of working software I create and host in the cloud using technology frameworks such as React/Redux, Spring, AWS Lambda, and TensorFlow.</p>
                    </div>
                    <div className="col-6 col-12-medium imp-medium">
                    <div className="bordered-feature-image"><img src={heron} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default HeaderComponent
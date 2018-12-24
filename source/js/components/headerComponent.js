﻿import React, { Component } from 'react';

let HeaderComponent = () => (
    <section id="header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1><a href="index.html" id="logo">Sean Marsh Glover's Developer Portfolio</a></h1>
                            <nav id="nav">
                        <a href="index.html">Home</a>
                    </nav>

                </div>
            </div>
        </div>
        <div id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-12-medium">
                                <p>This website is intended to be evidence of working software I create and host in the cloud using technology frameworks such as React/Redux, Spring, AWS Lambda, and TensorFlow.</p>
                    </div>
                    <div className="col-6 col-12-medium imp-medium">
                                <a href="#" className="bordered-feature-image"><img src="images/heron-flying.png" alt="" /></a>

                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default HeaderComponent
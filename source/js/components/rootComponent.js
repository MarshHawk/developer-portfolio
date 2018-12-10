import React, { Component } from 'react';
import HeaderContainer from '../containers/headerContainer';
import FeaturesContainer from '../containers/featuresContainer';

let RootComponent = () => (
    <div className="main">
        <div id="page-wrapper">
            <HeaderContainer />
            <FeaturesContainer />
        </div>
    </div>
)

export default RootComponent
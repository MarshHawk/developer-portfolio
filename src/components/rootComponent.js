import React from 'react';
import HeaderContainer from '../containers/headerContainer';
import FeaturesContainer from '../containers/featuresContainer';
import MenuBar from './menuBarComponent';

let RootComponent = () => (
    <div className="main">
        <div id="page-wrapper">
            <MenuBar />
            <HeaderContainer />
            <FeaturesContainer />
        </div>
    </div>
)

export default RootComponent
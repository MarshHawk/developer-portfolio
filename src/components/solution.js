import React from 'react';
import SolutionContent from './solutionContent';
import MenuBar from './menuBarComponent';

let Solution = () => (
    <div className="main">
        <MenuBar />
        <div id="page-wrapper">
            <SolutionContent />
        </div>
    </div>
)

export default Solution


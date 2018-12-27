import React from 'react';
import CdSolutionContent from './cdSolutionContent';
import MenuBar from './menuBarComponent';

let CdSolution = () => (
    <div className="main">
        <MenuBar />
        <div id="page-wrapper">
            <CdSolutionContent />
        </div>
    </div>
)

export default CdSolution


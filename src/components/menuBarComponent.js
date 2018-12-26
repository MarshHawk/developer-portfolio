import React from 'react';
import {Link} from 'react-router-dom';

const menuBar = () => {
    return (
        <section id="header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1><Link to="/">Sean Marsh Glover's Developer Portfolio</Link></h1>
                            <nav id="nav">
                            <Link to="/">Home</Link>
                    </nav>
                </div>
            </div>
        </div>
        </section>
     );
}
 
export default menuBar;
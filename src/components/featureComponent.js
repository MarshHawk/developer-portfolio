import React from 'react';
import {Link} from 'react-router-dom';

let FeatureComponent = () => (
    <div className="col-3 col-6-medium col-12-small">
        <section>
            <h2><Link to="/solution">Automated cloud CI/CD pipeline</Link></h2>
            <p>
                Apps are deployed via AWS hosted Jenkins CI/CD pipeline following AWS best practices for containerization. Read more at the link above.
            </p>
        </section>
    </div>
)

export default FeatureComponent
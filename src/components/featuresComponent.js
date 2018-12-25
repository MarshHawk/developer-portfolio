import React from 'react';
import FeatureContainer from '../containers/featureContainer';

let FeaturesComponent = () => (
    <section id="features">
		<div className="container">
			<div className="row">
				<div className="col-3 col-6-medium col-12-small">
                    <FeatureContainer />
                </div>
            </div>
        </div>
    </section>
)

export default FeaturesComponent
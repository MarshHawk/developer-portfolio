import React from 'react';
import FeatureContainer from '../containers/featureContainer';
import CatFeature from './catFeature';

let FeaturesComponent = () => (
    <section id="features">
		<div className="container">
			<div className="row">
                    <FeatureContainer />
                    <CatFeature />
            </div>
        </div>
    </section>
)

export default FeaturesComponent
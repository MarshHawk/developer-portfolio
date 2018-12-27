import React from 'react';

let CatFeature = () => (
    <div className="col-3 col-6-medium col-12-small">
        <section>
            <h2><a href="http://cat-client.s3-website-us-east-1.amazonaws.com">Cat Suite</a></h2>
            <p>
                A suite of Spring microservices and modular frontend components that comprise a cataloging web app product. Currently just a login screen and a search button that hits a Spring API that pulls JSON Marc records from a Mongo database and displays them in a table. Users are stored in postgreSQL and authentication uses JWT.
            </p>
        </section>
    </div>
)

export default CatFeature
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import cd from '../markdown/portfolio-ci-cd.md';

export default class CdSolutionContent extends Component {
    state = { text: 'Loading' };

    componentDidMount() {
        fetch(cd)
            .then(response => response.text())
            .then(text => this.setState({ text }));
    }

  render() {
    return (
        <section id="content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <section>
                            <header>
                                <h2>Automated cloud CI/CD pipeline</h2>
                            </header>
                            <ReactMarkdown source={this.state.text} />
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
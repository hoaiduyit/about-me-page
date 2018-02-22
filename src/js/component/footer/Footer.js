import React from 'react';

class Footer extends React.Component{

    openThisProject = () => {
        return window.open("https://github.com/hoaiduyit/about-me-page");
    };

    render() {
        return (
            <div className="copyright container">
                <div className="col-sm-8">
                    <p>Copyright © 2018 Che Hoai Duy</p>
                </div>
                <div className="col-sm-2">
                    <a onClick={this.openThisProject}><p>Project source code at <li className="fa fa-github"/></p></a>
                </div>
                <div className="col-sm-2">
                    <a><p>Make with my love!!!</p></a>
                </div>
            </div>
        );
    }
}

export default Footer
import React from 'react';

class Footer extends React.Component{

    render() {
        return (
            <div className="copyright container">
                <div className="desktop col-sm-8">
                    <p>Copyright © 2018 Che Hoai Duy</p>
                </div>
                <div className="col-sm-2">
                    <a href="https://github.com/hoaiduyit/about-me-page"><p>Project source code at <li className="fa fa-github"/></p></a>
                </div>
            </div>
        );
    }
}

export default Footer
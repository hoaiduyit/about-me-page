import React from 'react';
import Slogan from './content/Slogan'
import AboutMe from './content/AboutMe'

class Body extends React.Component{

    render() {
        return (
            <div className="container">
                <Slogan/>
                <AboutMe/>
            </div>
        );
    }
}

export default Body
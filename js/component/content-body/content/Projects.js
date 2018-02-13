import React from 'react';
import AnchorWithLabel from './AnchorWithLabel';

class Projects extends React.Component{

    render() {
        return (
            <div>
                <AnchorWithLabel label="Tap Landing Page" text="My first web project, mixed between Jquery and ReactJs" url="https://tap.finance/"/>
                <AnchorWithLabel label="Merchant Web" text="This is my second project using React + Redux" url="http://portal-uat.tap.finance/merchant/"/>
            </div>
        );
    }
}

export default Projects
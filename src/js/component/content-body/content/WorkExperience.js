import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import TextWithLabel from '../../common/ui/TextWithLabel'

class WorkExperience extends React.Component{

    constructor(){
        super();
        this.state = {
            displayText1: "block",
            displayText2: "none",
            activeText1: true,
            activeText2: false
        }
    }

    onChangeView = eventKey => {
        event.preventDefault();
        if (eventKey === "1"){
            this.setState({
                displayText1: "block",
                displayText2: "none",
                activeText1: true,
                activeText2: false
            })
        } else {
            this.setState({
                displayText1: "none",
                displayText2: "block",
                activeText1: false,
                activeText2: true
            })
        }
    };

    render() {

        const text1 = "Join payment team as an intern - web developer.\n\n" +
            "Learn many thing in here. My biggest archive was studied new language: JavaScript (NodeJS, ReactJS) and HTML, and CSS to become a front-end developer.\n\n" +
            "I was involved a web project : create a landing page for a product of payment team." +
            " I had many help from team, especially from UI designer and mobile lead team to finish landing page." +
            " I finish it in 3 months, from  12 Sep 2017 to 10 Nov 2017.";

        const text2 = "Still in payment team but work as a front-end development fresher.\n\n" +
            "Join a new project web, create a website to manage product for fast-food stores." +
            " Me and one more Java developer are main developers and take responsibility for this project. This project is developing with ReactJS and Redux store.\n\n" +
            "After my first web project, I realize that mix ReactJS and Jquery are very bad, so in my second project, I only use ReactJS state and Redux store.";

        return (
            <div>
                <h1>MY WORK EXPERIENCE</h1>
                <Nav bsStyle="tabs" onSelect={e => this.onChangeView(e)}>
                    <NavItem eventKey="1" active={this.state.activeText1}>
                        <i className="fa fa-calendar"/>&nbsp;
                        MAR 2017 - DEC 2017
                    </NavItem>
                    <NavItem eventKey="2" active={this.state.activeText2}>
                        <i className="fa fa-calendar"/>&nbsp;
                        DEC 2017 - FEB 2017
                    </NavItem>
                </Nav>
                <TextWithLabel label="MYSQUAR" text={text1} display={this.state.displayText1} className="wow fadeInLeft animated"/>
                <TextWithLabel label="MYSQUAR" text={text2} display={this.state.displayText2} className="wow fadeInLeft animated"/>
            </div>
        );
    }
}

export default WorkExperience
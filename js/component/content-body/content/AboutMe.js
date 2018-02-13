import React from 'react';
import {Grid, Row, Col, Nav, NavItem} from 'react-bootstrap';
import Introduce from './Introduce'
import CodingSkill from './CodingSkill'
import SocialSkill from './SocialSkill'
import Hobbies from './Hobbies'
import WorkExperience from './WorkExperience'
import Project from './Projects'

class AboutMe extends React.Component{

    constructor(){
        super();
        this.state = {
            displayCode: "block",
            displaySocial: "none",
            displayHobbies: "none",
            activeCode: true,
            activeSocial: false,
            activeHobbies: false
        }
    }

    onChangeView = eventKey => {
        event.preventDefault();
        if (eventKey === "1"){
            this.setState({
                displayCode: "block",
                displaySocial: "none",
                displayHobbies: "none",
                activeCode: true,
                activeSocial: false,
                activeHobbies: false
            })
        } else if (eventKey === "2"){
            this.setState({
                displayCode: "none",
                displaySocial: "block",
                displayHobbies: "none",
                activeCode: false,
                activeSocial: true,
                activeHobbies: false
            })
        } else {
            this.setState({
                displayCode: "none",
                displaySocial: "none",
                displayHobbies: "block",
                activeCode: false,
                activeSocial: false,
                activeHobbies: true
            })
        }
    };

    render() {
        return (
            <div style={{paddingBottom: "50px"}}>
                <Grid>
                    <Row>
                        <Col xs={6} md={6}>
                            <Introduce/>
                        </Col>
                        <Col xs={6} md={6}>
                            <Nav bsStyle="tabs" onSelect={e => this.onChangeView(e)}>
                                <NavItem eventKey="1" active={this.state.activeCode}>
                                    Coding skill
                                </NavItem>
                                <NavItem eventKey="2" active={this.state.activeSocial}>
                                    Communicate skill
                                </NavItem>
                                <NavItem eventKey="3" active={this.state.activeHobbies}>
                                    Hobbies
                                </NavItem>
                            </Nav>
                            <CodingSkill display={this.state.displayCode} className="wow fadeInRight animated"/>
                            <SocialSkill display={this.state.displaySocial} className="wow fadeInRight animated"/>
                            <Hobbies display={this.state.displayHobbies} className="wow fadeInRight animated"/>
                        </Col>
                    </Row>
                </Grid>
                <hr style={{backgroundColor: "#fff", borderTop: "2px dotted #8c8b8b"}}/>
                <Row>
                    <Col xs={6} md={6}>
                        <WorkExperience/>
                    </Col>
                    <Col xs={6} md={6}>
                        <h1>MY PROJECTS...</h1>
                        <Project/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutMe
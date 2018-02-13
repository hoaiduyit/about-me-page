import React from 'react';
import {Thumbnail, Row, Col} from 'react-bootstrap';

class Introduce extends React.Component{

    render() {
        return (
            <div>
                <h1>
                    WHO AM I?
                </h1>
                <h2>
                    A FEW WORDS ABOUT ME
                </h2>
                <Row>
                    <Col sm={5} className="avatar">
                        <Thumbnail src="../../../images/usarmy.jpg"/>
                    </Col>
                    <Col sm={7}>
                        <p>
                            I'm Che Hoai Duy, a web front-end developer 22 years old.
                            <br/>
                            <br/>
                            My job is create or build website so that it is functional and friendly to user.
                            I'm using Jquery or ReactJs to create a new website.
                            Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use.
                            My aim is to bring across your message and identity in the most creative way.
                            <br/>
                            I'm ready to learn new things and I can resolve problem in a short time.
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Introduce
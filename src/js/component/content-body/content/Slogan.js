import React from 'react';
import {Jumbotron} from 'react-bootstrap'

class Slogan extends React.Component{

    render() {

        const style = {
            color: "white"
        };

        return (
            <div >
                <Jumbotron>
                    <h1 style={style}>
                        NEVER GIVE UP THROUGH
                    </h1>
                    <h3 style={style}>
                        Always smile when you have trouble, just like Sir Robert Baden-Powell said "A Scout is Brave" -
                        A Scout can face danger even if he is afraid. He has the courage to stand for what he thinks is right even if others laugh at or threaten him.
                    </h3>
                </Jumbotron>
            </div>
        );
    }
}

export default Slogan
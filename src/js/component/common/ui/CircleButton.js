import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonToolbar, OverlayTrigger} from 'react-bootstrap';

class CircleButton extends React.Component{

    static propTypes = {
        onClick: PropTypes.func,
        btnName: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired,
        overlay: PropTypes.object.isRequired
    };

    render() {
        const {icon, style, btnName, onClick, overlay} = this.props;
        return (
            <div>
                <ButtonToolbar>
                    <OverlayTrigger placement="bottom" overlay={overlay}>
                        <Button className={btnName} onClick={onClick} style={{outline: 0}}>
                            <i style={style} className={icon}/>
                        </Button>
                    </OverlayTrigger>
                </ButtonToolbar>
            </div>
        );
    }
}

export default CircleButton
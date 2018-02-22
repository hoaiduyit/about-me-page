import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

class CircleButton extends React.Component{

    static propTypes = {
        onClick: PropTypes.func,
        btnName: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired
    };

    render() {
        const {icon, style, btnName, onClick} = this.props;
        return (
            <div>
                <Button className={btnName} onClick={onClick}>
                    <i style={style} className={icon}/>
                </Button>
            </div>
        );
    }
}

export default CircleButton
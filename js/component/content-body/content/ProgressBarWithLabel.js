import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import PropTypes from 'prop-types';

class ProgressBarWithLabel extends React.Component{

    static propTypes = {
        text: PropTypes.string.isRequired,
        progress: PropTypes.number.isRequired
    };

    render() {

        const {text, progress} = this.props;

        return (
            <div className='form-group' style={{paddingRight: "20px"}}>
                <ProgressBar now={progress} label={text}/>
            </div>
        );
    }
}

export default ProgressBarWithLabel
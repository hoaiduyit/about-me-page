import React from 'react';
import PropTypes from 'prop-types';

class TextWithLabel extends React.Component{

    static propTypes = {
        label: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        display: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired
    };

    render() {

        const {label, text, display, className} = this.props;

        return (
            <div className={'form-group ' + className} style={{paddingTop: "20px", display: display}}>
                <label>{label}</label>
                <p style={{whiteSpace: "pre-wrap"}}>{text}</p>
            </div>
        );
    }
}

export default TextWithLabel
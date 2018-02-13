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

        const style = {
            border: "1px solid",
            borderRadius: "4px",
            paddingTop: "20px",
            display: display
        };

        return (
            <div className={'form-group ' + className} style={style}>
                <div style={{padding: "10px 10px"}}>
                    <label>{label}</label>
                    <p style={{whiteSpace: "pre-wrap"}}>{text}</p>
                </div>
            </div>
        );
    }
}

export default TextWithLabel
import React from 'react';
import PropTypes from 'prop-types';

class AnchorWithLabel extends React.Component{

    static propTypes = {
        label: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    };

    render() {

        const {label, text, url} = this.props;

        return (
            <div className={'form-group'} style={{paddingTop: "20px"}}>
                <label>{label}</label>
                <p>{text}</p>
                <a href={url}>{url}</a>
            </div>
        );
    }
}

export default AnchorWithLabel
import React from 'react';
import PropTypes from 'prop-types';
import {Thumbnail} from 'react-bootstrap';

class AnchorWithLabel extends React.Component{

    static propTypes = {
        src: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    };

    render() {

        const {src, url} = this.props;

        return (
            <div style={{padding: "0 25%"}}>
                <Thumbnail src={src} href={url}/>
            </div>
        );
    }
}

export default AnchorWithLabel
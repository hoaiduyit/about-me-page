import React from 'react';
import ProgressBarWithLabel from './ProgressBarWithLabel';
import PropTypes from 'prop-types';

class Hobbies extends React.Component{

    static propTypes = {
        display: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired
    };

    render() {

        const {display, className} = this.props;

        return (
            <div style={{display: display}} data-wow-delay="1s" className={className}>
                <h2>WHAT I'M LOVE...</h2>
                <div>
                    <ProgressBarWithLabel text="Coding" progress={100}/>
                    <ProgressBarWithLabel text="Play video-game" progress={100}/>
                    <ProgressBarWithLabel text="Read manga/comic book" progress={100}/>
                </div>
            </div>
        );
    }
}

export default Hobbies
import React from 'react';
import ProgressBarWithLabel from './ProgressBarWithLabel';
import PropTypes from 'prop-types';

class SocialSkill extends React.Component{
    static propTypes = {
        display: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired
    };

    render() {

        const {display, className} = this.props;

        return (
            <div style={{display: display}} data-wow-delay="1s" className={className}>
                <h2>MY SOCIAL SKILL...</h2>
                <div>
                    <ProgressBarWithLabel text="English" progress={65}/>
                    <ProgressBarWithLabel text="Teamwork" progress={95}/>
                    <ProgressBarWithLabel text="Communication" progress={80}/>
                </div>
            </div>
        );
    }
}

export default SocialSkill
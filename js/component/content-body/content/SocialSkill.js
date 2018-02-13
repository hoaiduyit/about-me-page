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
        const style = {
            border: "1px solid",
            borderRadius: "4px",
            paddingTop: "20px",
            display: display
        };

        return (
            <div style={style} data-wow-delay="1s" className={className}>
                <div style={{padding: "10px 10px"}}>
                    <h2>MY SOCIAL SKILL...</h2>
                    <div>
                        <ProgressBarWithLabel text="English" progress={65}/>
                        <ProgressBarWithLabel text="Teamwork" progress={95}/>
                        <ProgressBarWithLabel text="Communication" progress={80}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SocialSkill
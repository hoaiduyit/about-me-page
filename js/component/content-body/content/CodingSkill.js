import React from 'react';
import ProgressBarWithLabel from './ProgressBarWithLabel';
import PropTypes from 'prop-types';

class CodingSkill extends React.Component{

    static propTypes = {
        display: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired
    };

    render() {

        const {display, className} = this.props;

        return (
            <div style={{display: display}} data-wow-delay="1s" className={className}>
                <h2>WHAT I'M BEST...</h2>
                <div>
                    <ProgressBarWithLabel text="Java" progress={70}/>
                    <ProgressBarWithLabel text="JavaScript" progress={78}/>
                    <ProgressBarWithLabel text="ReactJs" progress={75}/>
                    <ProgressBarWithLabel text="OOP" progress={67}/>
                    <ProgressBarWithLabel text="HTML" progress={85}/>
                    <ProgressBarWithLabel text="CSS" progress={85}/>
                </div>
            </div>
        );
    }
}

export default CodingSkill
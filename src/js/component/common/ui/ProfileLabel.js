import React from 'react';
import PropTypes from 'prop-types';

class ProfileLabel extends React.Component{
    static propTypes = {
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        detail: PropTypes.string.isRequired
    };

    render() {
        const {icon, text, detail} = this.props;

        return (
            <div className="form-group">
                <div>
                    <label><i className={icon}/>&nbsp;&nbsp;{text}</label>
                    <p style={{fontSize: "17px"}}>{detail}</p>
                </div>
            </div>
        );
    }
}

export default ProfileLabel
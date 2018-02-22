import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../common/ui/ModalDialog';
import MyProfile from './content/MyProfile';

class Contact extends React.Component{

    static propTypes = {
        isShowing: PropTypes.bool.isRequired
    };

    render() {
        const {isShowing} = this.props;

        return (
            <ModalDialog title="My Contact Detail" component={<MyProfile/>} isShow={isShowing}/>
        );
    }
}

export default Contact
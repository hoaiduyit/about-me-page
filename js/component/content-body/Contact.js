import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../common/ui/ModalDialog';
import Introduce from './content/Introduce';

class Contact extends React.Component{

    static propTypes = {
        isShowing: PropTypes.bool.isRequired
    };

    render() {
        const {isShowing} = this.props;

        return (
            <ModalDialog title="My Contact Detail" component={<Introduce/>} isShow={isShowing}/>
        );
    }
}

export default Contact
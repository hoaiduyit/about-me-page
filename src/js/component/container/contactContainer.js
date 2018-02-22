import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../component/content-head/Header';
import Contact from '../../component/content-body/Contact';
import Body from '../../component/content-body/Body';
import Footer from '../../component/footer/Footer';
import * as Action from '../../redux/action/contactAction';

class ContactContainer extends React.Component{
    static propTypes = {
        contact: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };


    render() {
        const {contact, actions} = this.props;

        return (
            <div>
                <Header showModalDialog={actions.showModalDialog}/>
                <Contact isShowing={contact.isShowing}/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

let mapStateToProps = state => ({
    contact: state.contact
});

let mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Action, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactContainer)


import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem, Tooltip} from 'react-bootstrap';
import CircleButton from '../common/ui/CircleButton';

class Header extends React.Component{

    static propTypes = {
        showModalDialog: PropTypes.func.isRequired
    };

    handleShowModalDialog = () => {
        this.props.showModalDialog();
    };

    mailToMe = () => {
        const userEmail = "hoaiduy2503@gmail.com";
        return window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + userEmail);
    };

    skypeToMe = () => {
        const userSkype = "hoaiduy2503";
        const skypeLink = "skype:live:" + userSkype + "?chat";
        return window.location = skypeLink;
    };

    openGitHub = () => {
        return window.open("https://github.com/hoaiduyit")
    };

    render() {

        const style = {
            fontSize: "25px"
        };

        const styleSmall = {
            fontSize: "21px"
        };

        const profileTooltip = (
            <Tooltip id="profile">
                <strong>My Profile</strong>
            </Tooltip>
        );

        const mailToMe = (
            <Tooltip id="mailTo">
                <strong>Mail to me...</strong>
            </Tooltip>
        );

        const skypeToMe = (
            <Tooltip id="skypeTo">
                <strong>Skype to me...</strong>
            </Tooltip>
        );

        const github = (
            <Tooltip id="github">
                <strong>My GitHub</strong>
            </Tooltip>
        );

        return (
           <Navbar>
               <Nav>
                   <NavItem>
                       <CircleButton
                           icon="fa fa-user"
                           style={style}
                           btnName="circle-btn"
                           onClick={this.handleShowModalDialog}
                           overlay={profileTooltip}/>
                   </NavItem>
                   <NavItem>
                       <CircleButton
                           icon="fa fa-envelope"
                           style={style}
                           btnName="circle-btn"
                           onClick={this.mailToMe}
                           overlay={mailToMe}/>
                   </NavItem>
                   <NavItem>
                       <CircleButton
                           icon="fa fa-skype"
                           style={style}
                           btnName="circle-btn"
                           onClick={this.skypeToMe}
                           overlay={skypeToMe}/>
                   </NavItem>
               </Nav>
               <Nav pullRight>
                   <NavItem>
                       <CircleButton
                           btnName="small-circle-btn"
                           icon="fa fa-github"
                           style={styleSmall}
                           onClick={this.openGitHub}
                           overlay={github}/>
                   </NavItem>
               </Nav>
           </Navbar>
        );
    }
}

export default Header
import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import CircleButton from './circle/CircleButton'

class Header extends React.Component{

    static propTypes = {
        showModalDialog: PropTypes.func.isRequired
    };

    handleShowModalDialog = () => {
        this.props.showModalDialog();
    };

    render() {

        const style = {
            fontSize: "25px"
        };

        const styleSmall = {
            fontSize: "21px"
        };

        return (
           <Navbar>
               <Nav>
                   <NavItem>
                       <CircleButton icon="fa fa-user" style={style} btnName="circle-btn" onClick={this.handleShowModalDialog}/>
                   </NavItem>
                   <NavItem>
                       <CircleButton icon="fa fa-envelope" style={style} btnName="circle-btn"/>
                   </NavItem>
               </Nav>
               <Nav pullRight>
                   <NavItem>
                       <CircleButton btnName="small-circle-btn" icon="fa fa-github" style={styleSmall}/>
                   </NavItem>
               </Nav>
           </Navbar>
        );
    }
}

export default Header
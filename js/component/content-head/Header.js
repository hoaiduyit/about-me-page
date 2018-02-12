import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import CircleButton from './circle/CircleButton'

class Header extends React.Component{

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
                       <CircleButton icon="fa fa-user" style={style} btnName="circle-btn"/>
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
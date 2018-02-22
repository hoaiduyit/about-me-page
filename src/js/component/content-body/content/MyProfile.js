import React from 'react';
import ProfileLabel from '../../common/ui/ProfileLabel';

class MyProfile extends React.Component{


    render() {
        return (
            <div>
                <ProfileLabel icon="fa fa-birthday-cake" text="My DOB" detail="March 25, 1996"/>
                <ProfileLabel icon="fa fa-transgender" text="Gender" detail="100% man"/>
                <ProfileLabel icon="fa fa-envelope" text="My Email" detail="hoaiduy2503@gmail.com"/>
                <ProfileLabel icon="fa fa-phone" text="My Number" detail="+84 933-236-014"/>
                <ProfileLabel icon="fa fa-location-arrow" text="My Address" detail="Thu Duc district, HCMC, Vietnam"/>
            </div>
        );
    }
}

export default MyProfile
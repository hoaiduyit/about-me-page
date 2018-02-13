import React from 'react';
import Slider from 'react-slick';
import AnchorWithLabel from './AnchorWithLabel'

class Projects extends React.Component{

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true
        };
        return (
            <div>
                <Slider {...settings}>
                    <div><AnchorWithLabel src="../../../images/tap.png" url="https://tap.finance/"/></div>
                    <div><AnchorWithLabel src="../../../images/merchantweb.png" url="http://portal-uat.tap.finance/merchant/"/></div>
                </Slider>
            </div>
        );
    }
}

export default Projects
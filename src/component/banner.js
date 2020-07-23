import React, {Component} from 'react';
import { Image } from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner_one from '../images/banner_img3_1.png'
import Banner_two from '../images/banner_img4.png'
import Banner_three from '../images/banner_img3_1.png'
class Banner extends Component {
    render(){
        return (
            <div className="Banner">
               <Carousel>
                <div>
                    <img src={Banner_one} />
                    <p className="legend">
                        Legend 1 jkj lklk lkhj
                        ;l;l;l;l ghgjg bjh
                    </p>
                </div>
                <div>
                    <img src={Banner_two} />
                    <p className="legend">
                        Legend 2

                        ;l;l;l;l ghgjg bjh
                    </p>
                </div>
                <div>
                    <img src={Banner_three} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
}
export default Banner;
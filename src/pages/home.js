import React, {Component} from 'react';

import Header from '../component/header.js'
import Banner from '../component/banner.js'
import Info from '../component/info.js'
import ModalBox from '../component/modal_box.js'
class Home extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Banner/>
                <Info/>
                <ModalBox/>
                <h1>The New World</h1>
            </div>
        );
    }
}
export default Home;
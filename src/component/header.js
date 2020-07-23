import React, {Component} from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import {List} from 'semantic-ui-react'

class Header extends Component {
    render(){
        return (
            <BrowserRouter>
            <div className="header">
                <List>
                    <List.Item><Link to="#">Home</Link></List.Item>
                
                    <List.Item><Link to="#">About</Link></List.Item>
               
                    <List.Item><Link to="#">Blog</Link></List.Item>
              
                    <List.Item><Link to="#">Contact</Link></List.Item>
                </List>
            </div>
            </BrowserRouter>
        );
    }
}
export default Header;
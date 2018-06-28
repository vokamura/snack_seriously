import React, {Component} from 'react';
import '../../assets/css/stylesheet.css';
import './nav.css';
import '../../assets/css/buttons.css'
import {Link} from 'react-router-dom';
import MenuButton from './navbutton';
import Menu from './menu';

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }
    
    handleMenuClick(event) {
        this.toggleMenu();
        event.stopPropagation();
      } 

    toggleMenu() {
        const {visible} = this.state;
        this.setState({
            visible: !visible
        })
    }

    render(){
        const {visible} = this.state;
        // console.log(visible)
        return (
            <div className="navBar">
                <MenuButton handleMenuClick={this.handleMenuClick}/>
                <Menu handleMenuClick={this.handleMenuClick}
                    visible={visible}/>
                <div className="logo">Logo</div>
            </div>
        )
    }
}

export default Homepage;
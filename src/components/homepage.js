import React, {Component} from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import debounce from 'lodash/debounce';
import '../assets/css/searchbar.css'; 
import Nav from './nav/nav';


class Homepage extends Component {
    constructor(props) {
        super(props); 

        const {term} = props.match.params;

        this.setTimer=null; 
        this.state = {
            userInput: term || ''
        };
        this.handleInputChange=this.handleInputChange.bind(this); 
        // this.ajaxCalltoServerUponUserInput=this.ajaxCalltoServerUponUserInput.bind(this); 
        this.autocompleteFromUser=debounce(this.autocompleteFromUser, 1000).bind(this); 


    }


    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            userInput: value,

        })  
        this.props.history.push('/search/' + value); 
         
    }

    //   async ajaxCalltoServerUponUserInput(props){
    //     const params = this.props.match.params.term; 
    //     const response = await axios.get(`http://52.8.24.199/snackapi.php?action=getname&search=${params}`); 
    //     console.log(response); 
    // }

    autocompleteFromUser(){
            //   const params = this.props.match.params.term; 
        const {userInput}=this.state;

        axios.get(`http://52.8.24.199/snackapi.php?action=getauto&search=${userInput}`).then(function(response){
            console.log("server response for autocomplete", response); 
        });
    }


    render() {
        const userInput= this.state.userInput;  
        const params = this.props.match.params.term || '';
        return(
            <div>
                 <div className="searchBarComp">
                <input autoFocus type="text" value={userInput} onKeyUp={this.autocompleteFromUser}  onChange={this.handleInputChange} placeholder="Search snacks"/>
               <Link to = {`/MultipleResults/${params}`}> <div className="icon"> <i>&#x1F50D;</i> </div> </Link>    
                </div>
            </div>
        )
    }
}

export default Homepage;
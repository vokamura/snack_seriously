import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/contact.css';
import axios from 'axios'; 


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameCheck:{
                msg: "name",
                msgClass: "regularMsg",
                valid: false
            },
            emailCheck:{
                msg: "email address",
                msgClass: "regularMsg",
                valid: false
            },
            subjectCheck:{
                msg: "subject",
                msgClass: "regularMsg",
                valid: false
            },
            bodyCheck:{
                msg: "message",
                msgClass: "regularMsg",
                valid: false
            },
            submitMsg: {
                msg: "",
                msgClass: "regularMsg"
            },
            form:{
                name: '',
                email: '',
                subject: '',
                body: ''
            }
           
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const regexEmail = /^[A-Z0-9._%+-]{2,15}@[A-Z0-9.-]{2,15}\.[A-Z]{2,5}$/ig;
        const regexName = /^[A-Z0-9\-_. ]{4,25}$/ig;
        const regexSubject = /^[a-zA-Z0-9_!'@#$%^&*(),?. ]{4,40}$/;
        const regexBody = /^[a-zA-Z0-9-_!'@#$%^&*(),?. ]{4,1000}/;

        if(regexName.test( this.state.form.name)){
            this.setState({
                nameCheck : {msg : "valid name",
                    msgClass : "regularMsg",
                    valid: true
                }
            }, this.checkValid);
        } else {
            this.setState({
                nameCheck : {msg: "invalid name(no special characters)",
                    msgClass : "warning",
                    valid: false
                }
            })
        }

        if(regexEmail.test( this.state.form.email)){
            this.setState({
                emailCheck: {msg : "valid email address",
                    msgClass : "regularMsg",
                    valid: true
                }
            }, this.checkValid);
        } else {
            this.setState({
                emailCheck: {msg : "enter a valid email address",
                    msgClass : "warning",
                    valid: false
                }
            })
        }

        if(regexSubject.test( this.state.form.subject)){
            this.setState({
                subjectCheck: {msg : "valid subject",
                    msgClass : "regularMsg",
                    valid: true
                }
            }, this.checkValid);
        } else {
            this.setState({
                subjectCheck: {msg : "enter a valid subject",
                    msgClass : "warning",
                    valid: false
                }
            })
        }

        if(regexBody.test( this.state.form.body)){
            this.setState({
                bodyCheck : {msg : "valid message",
                    msgClass : "regularMsg",
                    valid: true
                }
            }, this.checkValid);
        } else {
            this.setState({
                bodyCheck : {msg: "invalid message",
                    msgClass : "warning",
                    valid: false
                }
            })
        }

        const {value, name} = event.target;
        const {form} = this.state;
        form[name]= value; 
        this.setState({
           form: {...form},
        })
    }

    formatPostData(data){
        const params = new URLSearchParams();
        for(let [k, v] of Object.entries(data)){
            params.append(k, v);
        }
        return params;
    }

    sendContactForm(event){
        event.preventDefault();//not sure if putting it here will break the email submit
        if(this.state.nameCheck.valid && this.state.emailCheck.valid && this.state.subjectCheck.valid && this.state.bodyCheck.valid) {
            const {form} = this.state;
            const data = this.formatPostData(form);
            axios.post(`/api/contactMailer/mail_handler.php`, data).then( (response) => {
                this.setState({
                    nameCheck:{
                        msg: "name",
                        msgClass: "regularMsg",
                        valid: false
                    },
                    emailCheck:{
                        msg: "email address",
                        msgClass: "regularMsg",
                        valid: false
                    },
                    subjectCheck:{
                        msg: "subject",
                        msgClass: "regularMsg",
                        valid: false
                    },
                    bodyCheck:{
                        msg: "message",
                        msgClass: "regularMsg",
                        valid: false
                    },
                    submitMsg: {
                        msg: "message sent!",
                        msgClass: "regularMsg"
                    },
                    form:{
                        name: '',
                        email: '',
                        subject: '',
                        body: ''
                    }});
            });
        } else {
            this.setState({submitMsg:{
                msg: "Sorry, can not submit invalid form",
                msgClass: "warning"
                }});
            this.handleInputChange(event);
        }
    }


    render() {
        const{ name, email, subject, body } = this.state.form;
        return (     
            <div> 
            <h2 className='headerForContact'> Contact Snack Seriously </h2> 
           <form className='contactForm'> 
                <div className='contactFormEmail'> 
                     <input type="text" value={name} autoComplete="off"   name='name' onChange={this.handleInputChange}/>
                </div>
                <div className={this.state.nameCheck.msgClass}>{this.state.nameCheck.msg}</div>

                <div className='contactFormEmail'> 
                    <input type="text" value={email} autoComplete="off" name='email' onChange={this.handleInputChange} /> 
                </div>
                <div className={this.state.emailCheck.msgClass}>{this.state.emailCheck.msg}</div>

                <div className='contactFormEmail'  > 
                    <input type="text" value={subject} autoComplete="off"  name="subject" onChange={this.handleInputChange}/>
                </div>
                <div className={this.state.subjectCheck.msgClass}>{this.state.subjectCheck.msg}</div>

                <div className='contactFormEmail'> 
                    <input className='textArea' value={body} autoComplete="off"  name="body" onChange={this.handleInputChange} ></input >
                </div>
               <div className={this.state.bodyCheck.msgClass}>{this.state.bodyCheck.msg}</div>

                <div className="submitButtonDiv"> 
                <button className="submitButtonContactPage"  type="submit" value="submit" onClick={this.sendContactForm.bind(this)}> Submit </button>
                </div>
                <div className={this.state.submitMsg.msgClass}>{this.state.submitMsg.msg}</div>
           </form> 
           </div> 
        )
    }
}

export default Contact; 

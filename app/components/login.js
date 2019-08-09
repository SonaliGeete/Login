import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import Header from './../components/header';
import * as constants from "./../constant"

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    changeHandler(event){
        this.setState({
            [event.target.id]: event.target.value,   
             
        });
    }

    submitHandler(event){
        event.preventDefault();
        (this.state.username===constants.USERNAME && this.state.password===constants.PASSWORD) ? this.setState({validUser: true}) : this.setState({validUser: false})
    }

   
    render(){
        return (
            <BrowserRouter>
                <Header />
                {this.state.validUser && <Redirect to='/logout' />}
                <Switch>
                    <Route exact path='/' render={()=> (<form className='login' onSubmit={this.submitHandler}>
                       <div className='center'> <p><input type='text' id='username' placeholder='Username' onChange={this.changeHandler} /></p>
                        <p><input type='password' id='password' placeholder='Password' onChange={this.changeHandler} /></p>
                        <p><input type='submit' value='Login' className='loginButton' /></p>
                        {this.state.validUser === false &&
                        <div className='messageDisplay'>{this.state.validUser ? 'You are a valid user' : 'Invalid user'}</div>
                        }
                        </div>
                    </form>)} />

                   
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Login;
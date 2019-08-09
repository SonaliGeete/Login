import React, {Component} from "react";
import * as constants from "./../constant"
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import LogOut from './../components/logout';
import Footer from './../components/footer';

class App extends Component {
    
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
            <header>
                <h2>Sign In</h2>
              </header>
              <section>
                <article>
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

                    <Route path='/logout' component={LogOut} />
                </Switch>
                 </article>
              </section>   
                
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;
import React, {Component} from "react";
import * as constants from "./../constant"
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import LogOut from './../components/logout';
import Footer from './../components/footer';


export const addition = (x, y) => x+y;
export const multiplication = (x, y) => x*y;
export const division = (x, y) => x/y;
export const substraction = (x, y) => x-y;

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
        return true;
        
    }

    submitHandler(event){
        event.preventDefault();
        (this.state.username===constants.USERNAME && this.state.password===constants.PASSWORD) ? this.setState({validUser: true}) : this.setState({validUser: false})
    }

    render(){
        return (
            <BrowserRouter>
            <header>
            {!this.state.validUser && <h2>Log In</h2>}
            {this.state.validUser && <h2>Dashboard</h2>}
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
                        <div className='messageDisplay'>{this.state.validUser ? '' : 'Invalid Credentials'}</div>
                        }
                        </div>
                    </form>)} />

                    <Route path='/logout' component={()=><LogOut name={this.state.username}/>} />
                </Switch>
                 </article>
              </section>   
                
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;
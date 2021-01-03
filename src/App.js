import React,{Component} from 'react';
import './App.css';
import Heder from './components/Layout/heder';
import {BrowserRouter} from 'react-router-dom';
import SignIn from '../src/containers/NavigationTab/SignInPage/SignInpage';
import SignUp from '../src/containers/NavigationTab/SignUpPage/SignUpPage';
import {Route,Link,Switch} from "react-router-dom";
class App extends Component {
  render(){
    return(
    <BrowserRouter>
        <div className="App">
          <Route path="/SignIn" exact component ={SignIn}></Route>
         <Route path="/SignUp" exact component ={SignUp}></Route>
        </div>
    </BrowserRouter>
    )
  }
}

export default App;

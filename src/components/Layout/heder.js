import React,{Component} from 'react';
import Aux from '../../hoc/AuxHoc';
import './heder.css';
import {Route,Link,Switch} from "react-router-dom";
import AdminDashBoard from '../../containers/NavigationTab/AdminDashBoard/AdminDashBoard'; 
import UserDashBoard from '../../containers/NavigationTab/UserDashBoard/UserDashBoard'; 

class Heder extends Component{
 render(){
    return (<Aux>
        <ul>
        <li><Link className="Link" exact to="/" >User</Link></li>
        <li><Link className="Link" to={{
                        pathname: "/AdminDashBoard",
                        search: "?sort=name",
                        hash: "#the-hash",
                        state: { fromDashboard: true }}}>Admin</Link></li>

        <li style={{float:"right"}}><Link className="Link active">About</Link></li>
        </ul>
        <Route path="/" exact component ={UserDashBoard}></Route>
         <Route path="/AdminDashBoard" exact component ={AdminDashBoard}></Route>
    </Aux>)

    }
};

export default Heder;
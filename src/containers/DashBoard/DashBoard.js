import React,{Component} from 'react';
import './DashBoard.css';
import Aux from '../../hoc/AuxHoc';
import Card from '../../components/Cards/Cards'
class DashBoard extends Component {
  render(){
    return(
     <Aux>
      <Card Name= {"FUEL LEVEL"} ScondName = {"FUEL LEVEL"} Level = {"100%"}/>
      <Card Name= {"MILEAGE"} ScondName = {"CURRENT MILEAGE"} Level = {"100%"}/>
      <Card Name= {"SPEED"} ScondName = {"CURRENT SPEED"} Level = {"100%"}/>
     </Aux>
    )
  }
}

export default DashBoard;

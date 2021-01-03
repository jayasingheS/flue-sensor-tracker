import React,{Component} from 'react';
import './UserDashBoard.css';
import Aux from '../../../hoc/AuxHoc';
import DashBoard from '../../DashBoard/DashBoard';
import Mape from '../../MapeDashBoard/Mape';
class UserDashBoard extends Component {
  render(){
    return(
     <Aux>
          <DashBoard></DashBoard>
          <Mape></Mape>
     </Aux>
    )
  }
}

export default UserDashBoard;
import React,{Component} from 'react';
import './Table.css';
import Aux from '../../hoc/AuxHoc';
class Table extends Component {
  render(){
    return(
     <Aux>
         <div className = "cardTable card-1Table">
                <table>
                <tr>
                    <th>Creation Date Time</th>
                    <th>SensorId</th>
                    <th>Creation Date</th>
                    <th>Creation Time</th>
                    <th>Longitude</th>
                    <th>Latitude </th>
                    <th>Fuel Level </th>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                    <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                    <td>$100</td>
                </tr>
                <tr>
                <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                    <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                    <td>$100</td>
                </tr>
                <tr>
                <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                    <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                    <td>$100</td>
                </tr>
                <tr>
                <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                    <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                    <td>$100</td>
                </tr>
                </table>
         </div>
     </Aux>
    )
  }
}

export default Table;

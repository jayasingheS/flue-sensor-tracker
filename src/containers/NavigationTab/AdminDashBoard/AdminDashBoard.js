import React,{Component} from 'react';
import './AdminDashBoard.css';
import Aux from '../../../hoc/AuxHoc';
import MyMapComponent  from '../../../components/GoogleMaps/GoogleMaps';
import Table from '../../../containers/DashBoardTable/Table'
class AdminDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11

    };
 

  }

  render(){
    return(
     <Aux>
     <div className="flex-containerTable">
      <Table/>
          <MyMapComponent 
          isMarkerShown={true} 
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%`,width:'100%' }} />}
            containerElement={<div style={{ height: `670px`,width:'100%' }} />}
            mapElement={<div style={{ height: `100%`,width:'100%' }} />}
          />   
      </div>  
     </Aux>
    )
  }
}

export default AdminDashBoard;
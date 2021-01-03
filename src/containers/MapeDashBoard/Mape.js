import React,{Component} from 'react';
import './Mape.css';
import Aux from '../../hoc/AuxHoc';
import { IoCaretBack } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";
import MyMapComponent from '../../components/GoogleMaps/GoogleMaps';
import Calendar from 'react-calendar';
 
class Mape extends Component {
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
       <div className="containerMain">
       <div className = "cardMape card-2Mape">
            <div className="flex-containerMape">
                <div>
                <IoCaretBack/>
                <p style={{marginBottom:"20px",padding:'100px'}}>Sat, Nov 25 2020</p>
                <IoCaretForward/>
                </div>
            </div>    
            <MyMapComponent 
                  isMarkerShown={true} 
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `90%`,width:'100%' }} />}
                    containerElement={<div style={{ height: `90%`,width:'100%' }} />}
                    mapElement={<div style={{ height: `90%`,width:'100%' }} />}
                  />             
        </div>
         <div className = "cardCalendar card-2Calendar">
            <div className="react-calenda">

                <Calendar style={{width:"100%",hight:'100%'}} />

            </div>  
         </div>
       </div>
     </Aux>
    )
  }
}

export default Mape;

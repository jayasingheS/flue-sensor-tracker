import React from 'react';
import Aux from '../../hoc/AuxHoc';
import './Cards.css';
import { FaBeer } from 'react-icons/fa';
const Card =(props)=>(

    <Aux>
        <div className = "card card-2">
        <div className="flex-container">
            <div>
            <h4>{props.Name}</h4>  
               <div>
                <svg height="200" width="200">
                    <circle cx="100" cy="100" r="70" stroke="#4356D5" strokeWidth="10" fill="#141834" />
                    <text x="90" y="105" fill="#4356D5" font-size="1.3em" font-weight = 'bold' >{props.Level}</text>
                    <line x1="100" y1="100" x2="120" y2="165" style= {{stroke: 'red',strokeWidth:4}} />
                </svg>
                <h4 style={{marginTop:"-100px", marginLeft:'30px'}}>{props.ScondName}</h4>
               </div>
               <div>
               <h4 style={{marginTop:"-30px", marginLeft:'200px'}}>Minimum</h4>
               <h4 style={{marginTop:"-30px", marginLeft:'50px'}}>Maximum</h4>
               </div>
            </div>
        </div>
         </div>
    </Aux>
);

export default Card;
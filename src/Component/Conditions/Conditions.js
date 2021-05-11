import React from 'react';
import './styles.css';
import moment from 'moment';

const conditions = (props) => {
return  (
  <div>
   {props.responseObj.cod === 200 ? 
  <div className="main" style={{justifyContent:"center"}}>
      {(typeof props.responseObj.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{props.responseObj.name}, {props.responseObj.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(props.responseObj.main.temp)}°c
            </div>
            <div className="weather">{props.responseObj.weather.[0].main}</div>
          </div>
        </div>
        ) : ('')}
  </div>
    : null 
   }
    </div>
)
}


export default conditions;

import Conditions from './Conditions/Conditions'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./Weather.css";

// const API_key = "3bbd31a478fb196093c7d01d81746ca1"
const Weather = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    console.log(city);
    let [unit, setUnit] = useState('imperial');
    const API_key = "3bbd31a478fb196093c7d01d81746ca1"
    const getForecast =async (props) => {
        const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${unit}`)
        responseObj= await api_call.json();
        console.log(responseObj.weather.[0].main);
        const cn = (typeof responseObj.main != "undefined")  ? ( (responseObj.weather.[0].main === 'Clouds') ?  ( (responseObj.weather.[0].main === 'Rain') ?  ('app rain') :'app cloud' ) : 'app warm') : 'full'
        console.log(cn);
        setResponseObj(responseObj)
   }
  return (
       <div className={
         (typeof responseObj.main != "undefined")  ? 
          ( (responseObj.weather.[0].main === 'Clouds') ?  'app cloud' :  ( (responseObj.weather.[0].main === 'Rain') ?   'app rain' :   'app warm') : 'full' ) : 'full' }>
          <div>
            <Grid>
              <h1> React Weather app</h1>
                <form className="form" onSubmit={getForecast}>
                  <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    className="textInput"
                    onChange={(e) => setCity(e.target.value)}
                  />                 
                </form>
                <button className="Button" onClick = {getForecast}>Get Forecast</button>
               <Conditions
               responseObj={responseObj}
               />
            </Grid>
          </div>
      </div>
  );
}

export default Weather

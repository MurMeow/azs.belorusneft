import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import Weather from '../../components/weather/card';
import CardPrice from '../../components/cardPrice/card';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {

    return (
      <div className="homePage flex container">

          <div className="prise">
            <p>Цены на топливо (BUN)</p>
            <CardPrice name={"АИ-92-К5"} price={"1.71"}/>
            <CardPrice name={"АИ-92-К5, BN-92"} price={"1.61"}/>
            <CardPrice name={"АИ-98-К5"} price={"1.84"}/>
            <CardPrice name={"ГАЗ ПБА"} price={"0.90"}/>
            <CardPrice name={"ДТЗ-К5 КЛАСС-2"} price={"1.87"}/>
            <CardPrice name={"ДТ-К5"} price={"1.71"}/>
          </div>

          <div className="content__azs__img"></div>

          <div className="weather">
            <p>Погода в Минске</p>
            {this.props.receivedData.fetchResults.map( (item, i)=>{
              const dateArray = item.dt_txt.split(' ')
              const date = dateArray[0];
              const time = dateArray[1];
              const temp = item.main.temp;
              const tempCelsius = Math.round(temp - 273.15) + "°C";
              if(time==="15:00:00" ){
                return(
                  <div  key={i}>
                    <Weather
                            date={date}
                      // time ={time}
                             tempCelsius ={tempCelsius}
                             phenomena = {item.weather[0].description}
                             class = {item.weather[0].icon}
                    />
                  </div>)
              }
              else{ return <div></div> }
            })
            }
          </div>

      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Home)

import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import { bindActionCreators } from 'redux'





class Weather extends React.Component  {




  render() {
    return (
      <div className="weather__card">
        <div className="date">{this.props.date}</div>
        {/*<div>{this.props.time}</div>*/}
        <div className={"content__weather--icon-"+this.props.class}></div>
        <div>{this.props.tempCelsius}</div>
        <div>{this.props.phenomena}</div>

      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store.receivedData
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (Weather)




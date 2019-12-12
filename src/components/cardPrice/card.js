import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import { bindActionCreators } from 'redux'





class CardPrice extends React.Component  {




  render() {
    return (
      <div className="price__card">
        <div className="name">{this.props.name}</div>
        <div>{this.props.price}</div>
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store.receivedData
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (CardPrice)




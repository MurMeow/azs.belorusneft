import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import { bindActionCreators } from 'redux'
import {Link} from "react-router-dom";




class FlexibleMenu extends React.Component {


  render() {
    return (
   <div className="main--flexibleMenu__container">
     <ul className="menu flex">
       <li className="main--flexibleMenu__subgroup">
         <ul>
           <li>
             <Link to={""}> главная </Link>
           </li>
           <li>
             <Link to={"/authorization/"}> вход </Link>
           </li>
           <li>
             <Link to={"/eshf/"}> ЭСЧФ </Link>
           </li>
           <li>
             <Link to={"/loyaltyProgram/"}> Программа лояльности </Link>
           </li>
           <li>
             <Link to={"/stocks/"}> Акции </Link>
           </li>
           <li>
             <Link to={"/loyaltyCard/"}> Личный кабинет </Link>
           </li>
         </ul>
       </li>
     </ul>
   </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (FlexibleMenu)

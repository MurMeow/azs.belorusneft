import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import './style.scss';


class MenuSubgroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <ul className="menuSubgroups flex">
        <li>
          <Link to={""}> Главная </Link>
        </li>
        <li>
          <Link to={"/eshf/"}> ЭСЧФ </Link>
        </li>
        <li>
          <Link to={"/loyaltyCard/"}> Карта лояльности </Link>
        </li>
        <li>
          <Link to={"/stocks/"}> Акции </Link>
        </li>
      </ul>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (MenuSubgroups)

import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import './style.scss';
import  MenuSubgroups from '../../components/menuSubgroups/menuSubgroups';
import FlexibleHeader from '../../components/flexibleHeader/flexibleHeader';
import {CloseLoyaltyCard} from '../../store/loyaltyCard/actions';
import {outIn} from  '../../store/authorization/actions';


class Header extends React.Component {


  outIn = () => {
    this.props.outIn();
    this.props.CloseLoyaltyCard()

  };

  render() {
    return (
      <header>
        <div className="header">
          <div className="menuMain container flex">
            <Link to={""}>
              <div  className="header__menu--icon-logo"></div>
            </Link>
            <ul className="icon flex">
              <li className="header__icon--choice">
              </li>
              <li className="header__icon--nationalBrand">
              </li>
              <li className="header__icon--gold">
              </li>
            </ul>
            {this.props.Authorization.authorizationSuccessful?
                <div className="header__outIn--block">
                  <Link to={"/authorization/"}>
                   <div className="header__menu--icon-iGoOut" onClick={this.outIn}>выход</div>
                  </Link>
                  <div className="header__menu__nickname">{this.props.Authorization.personalInfo.nickname}</div>
                </div>
              :
              <Link to={"/authorization/"}>
                <div  className="header__menu--icon-authorization">войти</div>
              </Link>
            }


          </div>
          <MenuSubgroups />
        </div>

        <FlexibleHeader/>
      </header>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
};

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   isOpenFacts
// }, dispatch);


export default connect(mapStateToProps, {outIn, CloseLoyaltyCard}) (Header)

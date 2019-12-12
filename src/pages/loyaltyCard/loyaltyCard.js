import React from 'react';
import {connect} from 'react-redux';
import StatisticsLoyaltyCard from '../../components/statisticsLoyaltCard/statisticsLoyaltyCard';

class LoyaltyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <div className="flex">
          <div>Карта лояльности  </div>
          <div>{" №  " + this.props.Authorization.personalInfo.nickname}</div>
        </div>
        <StatisticsLoyaltyCard />
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (LoyaltyCard)

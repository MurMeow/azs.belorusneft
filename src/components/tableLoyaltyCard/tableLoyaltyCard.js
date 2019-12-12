import React ,{Component ,Fragment} from "react";
import connect from "react-redux/es/connect/connect";
import '../style.scss'





 class TableLoyaltyCard extends Component {
   constructor(props) {
     super(props);
     this.state = {
     };
   }


  render(){
      return(
        <Fragment>
          <tr>
            <td>{this.props.date}</td>
            <td>{this.props.time}</td>
            <td>{this.props.azs}</td>
            <td>{this.props.product}</td>
            <td>{this.props.quantity}</td>
            <td>{this.props.price}</td>
            <td>{this.props.discount}</td>
            <td>{this.props.discountedAmount}</td>
          </tr>
        </Fragment>
      )

  }

}

const mapStateToProps = (store)=>{
  return store
};


export default connect(mapStateToProps) (TableLoyaltyCard)

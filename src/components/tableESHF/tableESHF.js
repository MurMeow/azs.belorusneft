import React ,{Component ,Fragment} from "react";
import connect from "react-redux/es/connect/connect";
import '../style.scss'





 class TableESHF extends Component {
   constructor(props) {
     super(props);
     this.state = {
       isOpen: true
     };
   }

   close = () => {
     this.setState({
       isOpen: false
     })
   }

  render(){
    console.log(this.props);
    if(this.state.isOpen){
      return(
        <Fragment>
          <tr>
            <td>{this.props.UNP}</td>
            <td>{this.props.check}</td>
            <td>{this.props.FIO}</td>
            <td>{this.props.tel}</td>
            <td className="button" onClick={this.close}>X</td>
          </tr>
        </Fragment>
      )
    }
    else{
      return(
        <Fragment>
          <tr></tr>
        </Fragment>
      )

    }
  }

}

const mapStateToProps = (store)=>{
  return store.ESHF
}


export default connect(mapStateToProps) (TableESHF)

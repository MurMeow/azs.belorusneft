import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {checkESHF} from '../../store/ESHF/actions'
import TableESHF from '../../components/tableESHF/tableESHF';

class Eshf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UNP: '',
      FIO: '',
      tel:'',
      check: '',
      notificationIsOpen: false
    };
  }

  handleInputChangeUNP = ({target: {value}}) => {
    this.setState({
      UNP: value
    })
  };
  handleInputChangeFIO = ({target: {value}}) => {
    this.setState({
      FIO: value
    })
  };
  handleInputChangeTel = ({target: {value}}) => {
    this.setState({
      tel: value
    })
  };
  handleInputChangeCheck = ({target: {value}}) => {
    this.setState({
      check: value
    })
  };

  notificationClose = () => {
  this.setState({
    notificationIsOpen: false
  })
}

  submitForm = () => {
    this.props.checkESHF(this.state.UNP, this.state.FIO, this.state.tel, this.state.check,);
    this.setState({
      UNP: '',
      FIO: '',
      tel:'',
      check: '',
      notificationIsOpen: true
    })
    console.log(this.props)
    setTimeout(this.notificationClose, 3000)
  }

  render() {
    if(this.props.Authorization.personalInfo.nickname==='accountant'){
      return (
        <div className="content__blank">
          <h3>ЭСЧФ в статусе ожидания</h3>
          {this.props.ESHF.empty?
            <p>Новых ЭСЧФ нет</p>
            :
            <table>
              <tr className="title">
                <td>УНП</td>
                <td>Чек</td>
                <td>ФИО</td>
                <td>Телефон</td>
              </tr>
              {this.props.ESHF.ESHF.map((item,key)=>{
                return(
                  <TableESHF key={key}
                             FIO={item.FIO}
                             UNP={item.UNP}
                             tel={item.tel}
                             check={item.check}
                  />
                )
              })}
            </table>
          }
        </div>
      );
    }
    else {
      return (
        <div className="content__blank">
          <h3>ЭСЧФ</h3>
          <form>
            <input type="text"
                   placeholder="УНП"
                   onChange={this.handleInputChangeUNP}
                   value={this.state.UNP}
            />
            <input type="text"
                   placeholder="номер чека"
                   onChange={this.handleInputChangeCheck}
                   value={this.state.check}
            />
            <input type="text"
                   placeholder="ФИО"
                   onChange={this.handleInputChangeFIO}
                   value={this.state.FIO}
            />
            <input type="text"
                   placeholder="контактный телефон: +375(__) ___-__-__ "
                   onChange={this.handleInputChangeTel}
                   value={this.state.tel}
            />
            <input type="button"
                   onClick={this.submitForm}
                   value="отправить"
                   className="button"/>
          </form>
          {this.state.notificationIsOpen?<div className="notification">ЭСЧФ отправлена</div>:<div></div>}

        </div>
      );
    }

  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps,{checkESHF}) (Eshf)

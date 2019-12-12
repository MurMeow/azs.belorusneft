import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import {checkAuthorization} from '../../store/authorization/actions';
import {OpenLoyaltyCard} from '../../store/loyaltyCard/actions';

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: ''
    };
  }

  handleInputChangeNickname = ({target: {value}}) => {
    this.setState({
      nickname: value
    })
  };



  rememberPassword = ({target: {value}}) => {
    if (this.state.nickname !== '') {
      this.setState({
        password: value
      })
    } else {
      alert("Введите nickname")
    }

  };
  registrationUser = () => {
    const nickname = this.state.nickname;
    const password = this.state.password;
    if(localStorage.getItem(nickname)===null){
      localStorage.setItem(nickname, password);
      console.log(localStorage);
      this.props.checkAuthorization(this.state.nickname);
      this.setState({
        nickname: '',
        password: ''
      })
    }else { alert('Такой пользователь уже зарегистрирован');}
  };

  checkUser = () => {
    if(localStorage.getItem(this.state.nickname)===null){
      alert('Такой пользователь не зарегистрирован')
    }
    else {
      if (localStorage.getItem(this.state.nickname) === this.state.password) {
        this.props.checkAuthorization(this.state.nickname);
        this.props.OpenLoyaltyCard();
        this.setState({
          nickname: '',
          password: ''
        })
      } else {
        alert('Неправильно введен пароль');
      }
    }
  };

  render() {
    return (
      <div className="authorizationBloc">
        <h2>Вход в личный кабинет</h2>
        <form>
          <input type="text" placeholder="номер карты лоял. или nickname"
                 onChange={this.handleInputChangeNickname}
                 value={this.state.nickname}
                 maxLength="10"/>
          <input type="password" placeholder="пароль"
                 onChange={this.rememberPassword}
                 value={this.state.password}
                 maxLength="15"/>
          <input type="button"
                 onClick={this.registrationUser}
                 value="регистрация"
                 className="button"/>
          <input type="button"
                 onClick={this.checkUser}
                 value="вход"
                 className="button"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store=> (
  store.Authorization
);

export default connect(mapStateToProps, {checkAuthorization, OpenLoyaltyCard}) (Authorization)

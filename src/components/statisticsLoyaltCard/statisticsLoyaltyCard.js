import React ,{Component ,Fragment} from "react";
import connect from "react-redux/es/connect/connect";
import './style.scss'
import TableLoyaltyCard from '../tableLoyaltyCard/tableLoyaltyCard';
import {Link} from "react-router-dom";





 class StatisticsLoyaltyCard extends Component {
   constructor(props) {
     super(props);
     this.state = {
     };
   }


  render(){
    console.log(this.props);
    return( this.props.LoyaltyCard.isOpen?
      this.props.LoyaltyCard.card.map((item,i)=>{
        if(item.number===this.props.Authorization.personalInfo.nickname){
          return(
            <div key={i} className="statistics">
              <div>{"Имя владельца карты:  "+item.name}</div>
              <div>{"Дата регистрации карты:  "+item.dateRegistration}</div>
              <div>Статистика по карте за последний месяц: </div>
              <table>
                <tbody>
                  <tr className="title">
                    <td>Дата</td>
                    <td>Время</td>
                    <td>АЗС</td>
                    <td>Товар/услуга</td>
                    <td>Кол-во</td>
                    <td>Цена за ед. руб.</td>
                    <td>Скидка %</td>
                    <td>Стоимость со скидкой</td>
                  </tr>
                {item.statistics.map((item,i)=>{
                  return(<TableLoyaltyCard key={i}
                                           date={item.date}
                                           time={item.time}
                                           azs={item.azs}
                                           product={item.product}
                                           quantity={item.quantity}
                                           price={item.price}
                                           discount={item.discount}
                                           discountedAmount={item.discountedAmount}
                  />)
                })}
                </tbody>
              </table>
            </div>
          )
        }
        else {
          return(
            <Fragment>
              {/*<div>Статистика по данной карте отсутствует</div>*/}
            </Fragment>
          )
        }
      })
   :

      <Link to={"/authorization/"}>
        <div>Для просмотра статистики войдите в личный кабинет</div>
      </Link>





)
   }


}

const mapStateToProps = (store)=>{
  return store
};


export default connect(mapStateToProps) (StatisticsLoyaltyCard)

import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import './style.scss';

class LoyaltyProgram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="content__loyalProg">
        <h2>О программе</h2>
        <p>Программа лояльности - это комплексная программа поощрения клиентов «Белоруснефть» с ежемесячным розыгрышем суперпризов, скидками, статистикой заправок и многим другим!</p>
        <a href="https://azs.belorusneft.by/sitebeloil/ru/center/azs/center/automobil/fill_efeckt/winners/november2019/" target="_blank">Результаты розыгрышей</a>
        <div>
          <h3>Декабрь 2019 г.</h3>
            <div className="flex img">
                <div className="loyaltyProgram__img1"></div>
                <div className="loyaltyProgram__img2"></div>
            </div>

        </div>
        <div className="flex">
          <p>Розыгрыши призов ноября 10.12.2019 по адресу: г. Минск, ул. Лещинского, д.4а</p>
          <a  target="_blank" href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9B%D0%B5%D1%89%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+4%D0%B0,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9091933,27.4512175,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbc52ca95ffb29:0x3a6c03e6329be9d0!8m2!3d53.9091933!4d27.4534062">(смотреть на карте).</a>
        </div>
        <div className="flex">
          <p>14:30 - </p>
          <a href="https://www.belorusneft.by/sitebeloil/.content/download/azsDoc/Rules_RG_201911.pdf"  target="_blank"> розыгрыш, правила рекламной игры</a>
          <p> "Осенний сюрприз!". </p>
        </div>
        <div className="flex">
          <p>15:00 - </p>
          <a href="https://www.belorusneft.by/sitebeloil/.content/download/azsDoc/Rules_MC_201911.pdf"  target="_blank"> розыгрыш, правила рекламной игры</a>
          <p> "Авто от Мастеркард. Ноябрь". </p>
        </div>
        <div className="flex">
          <p>Розыгрыши призов декабря 13.01.2020 по адресу: г. Минск, ул. Лещинского, д.4а</p>
          <a  target="_blank" href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9B%D0%B5%D1%89%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+4%D0%B0,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9091933,27.4512175,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbc52ca95ffb29:0x3a6c03e6329be9d0!8m2!3d53.9091933!4d27.4534062">(смотреть на карте).</a>
        </div>
        <div className="flex">
          <p>14:30 - </p>
          <a href="https://www.belorusneft.by/sitebeloil/.content/download/azsDoc/Rules_RG_201912.pdf"  target="_blank"> розыгрыш, правила рекламной игры</a>
          <p>"С Новым призом!".  </p>
        </div>
        <div className="flex">
          <p>15:00 - </p>
          <a href="https://www.belorusneft.by/sitebeloil/.content/download/azsDoc/Rules_MC_201912.pdf"  target="_blank"> розыгрыш, правила рекламной игры</a>
          <p> "Авто от Мастеркард. Декабрь". </p>
        </div>
          <div className="mastercad__block flex">
              <div className="loyaltyProgram__masterard"></div>
              <p className="text">При расчете за топливо картой MasterCard в декабре на АЗС «Белоруснефть» с применением карты лояльности (с заполненной анкетой) вы принимаете участие в розыгрыше автомобиля Kia Rio и получаете один шанс на выигрыш, не зависящий от количества и суммы приобретенного топлива.
                  Информация о номере шанса будет размещена в личном кабинете до 12.01.2020 (при согласии "Получать информацию о программе на e-mail" в анкете).  </p>
          </div>
          <div className="loyaltyProgram__points"></div>
          <div className="conditions">
              <p className="text__colorBlack_underline">Дополнительные баллы можно получить:</p>
              <p> - при покупке товаров из списка (п.6.3.3. правил рекламной игры)<span className="text__colorBlack">(5 баллов за каждые 10 копеек)</span>;</p>
              <p> - при покупке горячих напитков на основе зернового кофе, на основе пакетированного чая, на основе сбора натуральных ингредиентов, горячего шоколада<span className="text__colorBlack">(5 баллов за каждые 10 копеек)</span>;</p>
              <p> - при заправке топливом в день рождения*<span className="text__colorBlack">(3 баллов за каждые 10 копеек)</span>;</p>
              <p> - при заполнении анкеты в <Link to={"/loyaltyCard/"}> Личном кабинете</Link> <span className="text__colorBlack">(400 баллов )</span>;</p>
              <p>  - при заключении договора страхования "Зеленая карта" в пунктах продаж ЗАСО "Белнефтестрах"<span className="text__colorBlack">(500 баллов )</span>;</p>
              <p> начисляются <span className="text__colorBlack_underline">в месяце, следующем за месяцем заключения договора</span>;</p>
              <p> * начисляются при каждой покупке топлива в день рождения, по одной карте лояльности начисление производится не чаще одного раз в год.</p>
          </div>
          <p>статистика использования карты – в <Link to={"/loyaltyCard/"}> Личном кабинете</Link>.</p>
          <div className="block__discounts">
              <p><span className="text__colorBlack">Внимание!</span> Для участия в розыгрыше призов в обязательном порядке должны быть заполнены анкетные данные с указанием номера телефона и адреса электронной почты. Анкету можно заполнить в
                  <Link to={"/loyaltyCard/"}> Личном кабинете</Link>.
                  Приобретение шансов на розыгрыш возможно только после совершения как минимум одной покупки топлива на АЗС «Белоруснефть» в месяце, по итогам которого проводится розыгрыш. </p>
              <table>
                  <tbody>
                  <tr className="title">
                      <td>Стоимость приобретенных сопутствующих товаров и услуг в предыдущем месяце*, руб.</td>
                      <td>Статус в текущем месяце</td>
                      <td>Размер скидки на сопутствующие товары и услуги в текущем месяце***, %</td>
                  </tr>
                  <tr>
                      <td>30,00 - ></td>
                      <td>Золотой</td>
                      <td>5,0</td>
                  </tr>
                  <tr>
                      <td>20,00 - 29,99</td>
                      <td>Серебряный</td>
                      <td>3,0</td>
                  </tr>
                  <tr>
                      <td>0 - 19,99</td>
                      <td>Бронзовый**</td>
                      <td>1,0</td>
                  </tr>
                  </tbody>
              </table>
              <p>* кроме алкогольных, слабоалкогольных напитков, пива, табачных изделий (в т.ч. электронных сигарет) и аксессуаров к ним.</p>
              <p>** - скидка 1% (бронзовый статус) на сопутствующие товары и услуги действует с момента покупки карты и не зависит от стоимости приобретенных сопутствующих товаров и услуг в прошлом месяце </p>
              <p>*** скидка не распространяется на услуги аренды, сжиженный газ в баллонах, акционные товары, подарочные сертификаты, алкогольные, слабоалкогольные напитки, пиво, табачные изделия (в т.ч. электронные сигареты) и аксессуары к ним.</p>
              <p>Скидки по программе лояльности не суммируются.
                  Ответы на возникающие вопросы по программе лояльности ищите на странице <a href="https://azs.belorusneft.by/sitebeloil/ru/center/azs/center/automobil/fill_efeckt/faq/index.html">«Часто задаваемые вопросы»</a> .</p>

          </div>
           <div className="flex">
              <a href="https://www.belorusneft.by/sitebeloil/.content/download/azsDoc/PP_010519.pdf">Правила участия в программе лояльности   </a>
              <p>   и   </p>
              <a href="https://www.belorusneft.by/sitebeloil/.content/download/azsDoc/UP_01.07.2019.pdf">   Условия программы лояльности</a>
          </div>

      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (LoyaltyProgram)

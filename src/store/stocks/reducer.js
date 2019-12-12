
const initialState = {
  empty: false,
  stocks:[
    {img: 'stocks1',
    href: 'https://azs.belorusneft.by/sitebeloil/ru/center/azs/center/offers/applePayMastercardCoffe/',
    title: 'Горячий напиток на АЗС с Mastercard и Apple Pay',
    conditions: 'С 04.12.2019 по 29.02.2020, заехав на АЗС «Белоруснефть», можно не только заправиться, но и получить в подарок ароматный горячий напиток! Для участия в акции необходимо оплатить топливо, товары либо услуги картой «Mastercard» с помощью Apple Pay на сумму от 5 рублей.'
    },
    {img: 'stocks2',
     href: 'https://azs.belorusneft.by/sitebeloil/ru/center/azs/center/offers/kombo/',
     title: 'ЦIКАВАЕ КОМБО',
     conditions: 'Заезжая на АЗС «Белоруснефти» можно не только заправиться, но и самому вкусно «подзарядиться» ароматным горячим напитком и френч-догом на выбор по привлекательной цене — всего за 5,50 руб.! Акция распространяется на горячие напитки в стандартном стакане: кофе эспрессо, кофе американо, кофе капучино, кофе с молоком, кофе латте, кофе мокачино, горячий шоколад, кофе флэт уайт. '
    },
    {img: 'stocks3',
      href: 'https://azs.belorusneft.by/sitebeloil/ru/center/azs/center/offers/za-skidkoj-v-duty-free/',
      title: 'ЗА СКИДКОЙ В DUTY FREE',
      conditions: 'Пусть каждое Ваше путешествие начинается с приятного бонуса! Предъявите карту лояльности «Белоруснефть» в магазинах DUTY FREE «Belamarket Helen&Valery» и получите скидку 6%* на покупки в любом из магазинов сети!'
    },
    {img: 'stocks4',
      href: 'https://azs.belorusneft.by/sitebeloil/ru/center/azs/center/offers/regionalnye-akcii/minsk/belshina-5/',
      title: 'Ликвидация летних шин! (07.10.2019-31.12.2019)',
      conditions: 'С 7.10.2019 по 31.12.2019 на АЗС «Белоруснефти» города Минска и Минского района действует скидка  от 10 до 20 % на летние  автошины торговой марки «Белшина»! наличие моделей  и точную скидку уточняйте у оператора АЗС. Предложение действительно при наличии акционного товара на торговом объекте. '
    },
    {img: 'stocks5',
      href: 'https://azs.belorusneft.by/sitebeloil/ru/center/azs/center/offers/bn_bns/',
      title: 'Покупай страховку и выигрывай призы!',
      conditions: 'Заключите договор страхования "Зеленая карта" в пунктах продаж Белнефтестраха и получите 500 дополнительных баллов на действующую карту лояльности (в месяце, следующем за месяцем заключения договора). Белнефтестрах предоставляет скидки всем участникам программы лояльности по договорам добровольного страхования, участвующим в акции.'
    }
  ],
  loading: false
};

export function Stocks (state = initialState, action) {
  switch (action.type) {

    default : {
      return state
    }
  }
}
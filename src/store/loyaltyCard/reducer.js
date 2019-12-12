import {OPEN_LOYALTY_CARD_SUCCESS} from "./types";
import {CLOSE_LOYALTY_CARD_SUCCESS} from "./types";

const initialState = {
  isOpen: false,
  card: [
    {number: '8358430010',
    name: 'Ивано Иван Иванович',
    dateRegistration: '2019-12-01',
    statistics: [
       {
        date: '2019-12-08',
        time: '20:03',
        azs: '56',
        product: 'Чипсы',
        quantity: '1',
        price: '1,99',
        discount: '5',
        discountedAmount: '1,89'
      },
      {
        date: '2019-12-08',
        time: '20:03',
        azs: '56',
        product: 'Резинка Жевательная',
        quantity: '1',
        price: '1,10',
        discount: '5',
        discountedAmount: '1,04'
      },
      {
        date: '2019-12-08',
        time: '15:49',
        azs: '56',
        product: 'Салат',
        quantity: '1',
        price: '1,38',
        discount: '5',
        discountedAmount: '1,31'
      },
      {
        date: '2019-12-03',
        time: '07:40',
        azs: '56',
        product: 'Кофе Жакей',
        quantity: '1',
        price: '2,98',
        discount: '5',
        discountedAmount: '2,83'
      },
      {
        date: '2019-12-02',
        time: '18:35',
        azs: '56',
        product: 'Напиток MIRINDA',
        quantity: '1',
        price: '2,59',
        discount: '5',
        discountedAmount: '2,46'
      },
      {
        date: '2019-12-2',
        time: '09:05',
        azs: '56',
        product: 'Кофе Жакей',
        quantity: '1',
        price: '2,98',
        discount: '5',
        discountedAmount: '2,83'
      },
    ]
    },
    {number: '8358430011',
      name: 'Петров Петр Петрович',
      dateRegistration: '2019-12-03',
      statistics: [
        {
          date: '2019-12-12',
          time: '20:03',
          azs: '56',
          product: 'Колбаски',
          quantity: '1',
          price: '3,26',
          discount: '5',
          discountedAmount: '3,10'
        },
        {
          date: '2019-12-12',
          time: '20:03',
          azs: '56',
          product: 'Сигареты',
          quantity: '1',
          price: '2,40',
          discount: '0',
          discountedAmount: '2,40'
        },
        {
          date: '2019-12-09',
          time: '16:48',
          azs: '55',
          product: 'Салат',
          quantity: '1',
          price: '1,38',
          discount: '5',
          discountedAmount: '1,31'
        },
        {
          date: '2019-12-08',
          time: '17:01',
          azs: '55',
          product: 'Булочка',
          quantity: '3',
          price: '0,85',
          discount: '5',
          discountedAmount: '2,43'
        },
        {
          date: '2019-12-07',
          time: '18:35',
          azs: '55',
          product: 'Напиток MIRINDA',
          quantity: '1',
          price: '2,59',
          discount: '5',
          discountedAmount: '2,46'
        },
        {
          date: '2019-12-5',
          time: '09:05',
          azs: '56',
          product: 'Кофе Жакей',
          quantity: '1',
          price: '2,98',
          discount: '5',
          discountedAmount: '2,83'
        },
      ]
    },
    {number: '8358430012',
      name: 'Кофеман Никифор Казимирович',
      dateRegistration: '2019-12-12',
      statistics: [
        {
          date: '2019-12-12',
          time: '19:15',
          azs: '54',
          product: 'Кофе Жакей',
          quantity: '1',
          price: '2,98',
          discount: '5',
          discountedAmount: '2,83'
        },
        {
          date: '2019-12-12',
          time: '13:45',
          azs: '54',
          product: 'Кофе Жакей',
          quantity: '1',
          price: '2,98',
          discount: '5',
          discountedAmount: '2,83'
        },
        {
          date: '2019-12-12',
          time: '09:05',
          azs: '54',
          product: 'Кофе Жакей',
          quantity: '1',
          price: '2,98',
          discount: '5',
          discountedAmount: '2,83'
        }
      ]
    }
  ]
};

export function LoyaltyCard (state = initialState, action) {
  switch (action.type) {


    case OPEN_LOYALTY_CARD_SUCCESS : {

      const newState = {
        ...state,
        isOpen: true,
      };
      return newState
    }
    case CLOSE_LOYALTY_CARD_SUCCESS : {

      const newState = {
        ...state,
        isOpen: false,
      };
      return newState
    }

    default : {
      return state
    }
  }
}
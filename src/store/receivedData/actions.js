import {INFO_SW_REQUEST,
  INFO_SW_SUCCESS,
  INFO_SW_ERROR} from './types';


export const dataRequest  = ()  => async (dispatch) =>{
  dispatch({
    type: INFO_SW_REQUEST
  });

  const url = 'http://api.openweathermap.org/data/2.5/forecast?id=625144&lang=ru&APPID=e5b496332c6e8249be25e2e83ce286d8';
  const result = await fetch(url);
  const informationReceived = await result.json();

  //fetchAllData - функция которая будет делать  запрос на сервер,
  // и возвращать массив ответов
  // const fetchAllData = async(obj) => {
  //   const promises = obj.map(url => fetch(url));
  //
  //   const arrayResults = await Promise.all(promises)
  //     //на данной итерации мы преобразуем ответы promises, для чтения
  //     .then(responses => Promise.all(responses.map(
  //       r => r.json())))
  //     .then(res => {return res})
  //      return arrayResults
  // };

  // const fetchResults = await fetchAllData(obj);//плучаем результат готовый для чтения
  const weather = informationReceived.list

  try {
    dispatch({
      type: INFO_SW_SUCCESS,
      payload: {
        isOpen: true,
        fetchResults: weather
      }
    });
  } catch (err) {
    dispatch({
      type: INFO_SW_ERROR,
      payload: "Sorry, error!"
    })
  }
};
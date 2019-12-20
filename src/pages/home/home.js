import React from 'react';
import {connect} from "react-redux";
import './style.scss';
// import SimpleMap from '../../components/myGoogleMapComponent/MyGoogleMapComponent';
import { YMaps, Map, Placemark,SearchControl, ObjectManager } from 'react-yandex-maps';
import Weather from '../../components/weather/card';
import CardPrice from '../../components/cardPrice/card';

const collection = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        id: 444,
        geometry: {
            type: 'Point',
            coordinates: [53.874270, 27.555947]
        },
        properties: {
            hintContent: '№ 1',
            balloonContent: 'г.Минск, ул. Левкова, 37а'
        }
    }, {
        type: 'Feature',
        id: 222,
        geometry: {
            type: 'Point',
            coordinates: [53.842534, 27.535492]
        },
        properties: {
            hintContent: '№ 3',
            balloonContent: 'г.Минск, ул. Серова, 2'
        }
    },
        {
            type: 'Feature',
            id: 2,
            geometry: {
                type: 'Point',
                coordinates: [53.858261, 27.678064]
            },
            properties: {
                hintContent: '№ 4',
                balloonContent: 'г.Минск, Партизанский пр., 156 а'
            }
        },
        {
            type: 'Feature',
            id: 4,
            geometry: {
                type: 'Point',
                coordinates: [53.961333, 27.625306]
            },
            properties: {
                hintContent: 'М 6 (газ)',
                balloonContent: 'г.Минск, Логойский тракт, 49'
            }
        },
        {
            type: 'Feature',
            id: 6,
            geometry: {
                type: 'Point',
                coordinates: [53.938421, 27.671991]
            },
            properties: {
                hintContent: 'М 7 (газ)',
                balloonContent: 'г.Минск, пр. Независимости, 152'
            }
        },
        {
            type: 'Feature',
            id: 8,
            geometry: {
                type: 'Point',
                coordinates: [53.859292, 27.676779]
            },
            properties: {
                hintContent: 'М 8 (газ)',
                balloonContent: 'г.Минск, Партизанский пр., 156 '
            }
        },
        {
            type: 'Feature',
            id: 10,
            geometry: {
                type: 'Point',
                coordinates: [53.882592, 27.453656]
            },
            properties: {
                hintContent: '№ 9',
                balloonContent: 'г.Минск, ул. Горецкого, 10'
            }
        },
        {
            type: 'Feature',
            id: 12,
            geometry: {
                type: 'Point',
                coordinates: [53.940017, 27.571380]
            },
            properties: {
                hintContent: '№ 10',
                balloonContent: 'г.Минск, ул. Некрасова, 112'
            }
        },
        {
            type: 'Feature',
            id: 14,
            geometry: {
                type: 'Point',
                coordinates: [53.887311, 27.563960]
            },
            properties: {
                hintContent: '№ 11',
                balloonContent: 'г.Минск, ул. Маяковского, 2а'
            }
        },
        {
            type: 'Feature',
            id: 16,
            geometry: {
                type: 'Point',
                coordinates: [53.960523, 27.537999]
            },
            properties: {
                hintContent: 'М 12 (газ)',
                balloonContent: 'г.Минск, Долгиновский тракт, 172'
            }
        },
    ]}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
// componentDidMount = () => {
//     const coords = [
//         [55.75, 37.50],
//         [55.75, 37.71],
//         [55.70, 37.70]
//     ];
//     const myCollection = new YMaps.GeoObjectCollection({}, {
//         preset: 'islands#redIcon', //все метки красные
//         draggable: true // и их можно перемещать
//     });
//     for (var i = 0; i < coords.length; i++) {
//         myCollection.add(new YMaps.Placemark(coords[i]));
//     }
//     myMap.geoObjects.add(myCollection);
// }


    render() {

    return (
      <div className="homePage flex container">

          <div className="prise">
            <p>Цены на топливо (BUN)</p>
            <CardPrice name={"АИ-92-К5"} price={"1.71"}/>
            <CardPrice name={"АИ-92-К5, BN-92"} price={"1.61"}/>
            <CardPrice name={"АИ-98-К5"} price={"1.84"}/>
            <CardPrice name={"ГАЗ ПБА"} price={"0.90"}/>
            <CardPrice name={"ДТЗ-К5 КЛАСС-2"} price={"1.87"}/>
            <CardPrice name={"ДТ-К5"} price={"1.71"}/>
          </div>

          {/*<div className="content__azs__img"></div>*/}
          <div className="yMaps">
              <YMaps>
                  <div style={{ height: 'max-content', width: '100%' }}>
                      <Map defaultState={{ center: [53.9, 27.559078], zoom: 11 }}
                           style={{ height: '50vh', width: '100%' }} >
                        {/*<Placemark geometry={[53.9, 27.559078]} />*/}
                        {/*<SearchControl options={{ float: 'right' ,*/}
                        {/*    provider: 'yandex#search',*/}
                        {/*    placeholderContent: 'шоколадница'}} />*/}
                          <ObjectManager
                              options={{
                                  clusterize: true,
                                  gridSize: 32,
                              }}
                              objects={{
                                  openBalloonOnClick: true,
                                  preset: 'islands#greenDotIcon',
                              }}
                              clusters={{
                                  preset: 'islands#redClusterIcons',
                              }}
                              filter={object => object.id % 2 === 0}
                              defaultFeatures={collection}
                              modules={[
                                  'objectManager.addon.objectsBalloon',
                                  'objectManager.addon.objectsHint',
                              ]}
                          />
                      </Map>

                  </div>

              </YMaps>
          </div>

          <div className="weather">
            <p>Погода в Минске</p>
            {this.props.receivedData.fetchResults.map( (item, i)=>{
              const dateArray = item.dt_txt.split(' ')
              const date = dateArray[0];
              const time = dateArray[1];
              const temp = item.main.temp;
              const tempCelsius = Math.round(temp - 273.15) + "°C";
              if(time==="15:00:00" ){
                return(
                  <div  key={i}>
                    <Weather
                            date={date}
                      // time ={time}
                             tempCelsius ={tempCelsius}
                             phenomena = {item.weather[0].description}
                             class = {item.weather[0].icon}
                    />
                  </div>)
              }
              else{ return <div></div> }
            })
            }
          </div>
            {/*<SimpleMap/>*/}
            {/*<div>*/}
            {/*    <MyGoogleMapComponent*/}
            {/*        containerElement={*/}
            {/*            <div style={{height: `100%`}}/>*/}
            {/*        }*/}
            {/*        mapElement={*/}
            {/*    <div style={{height: `100%`}}/>*/}
            {/*}*/}
            {/*    />*/}
            {/*</div>*/}
      </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps) (Home)

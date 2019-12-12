import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import Card from '../../components/cardStocks/card';


class StocksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {

    return (
      <div className="filmsSW flex">
        {this.props.Stocks.stocks.map((key, i) => {
          return(
            <Card key={i}
                  title={key.title}
                  conditions={key.conditions}
                  href={key.href}
                  class={key.img}
            />
          )
        })
        }
      </div>
    );
  }
}


const mapStateToProps = (store)=>{
  return store
}


export default connect(mapStateToProps,) (StocksContainer)

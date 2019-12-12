import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import { bindActionCreators } from 'redux'





class Card extends React.Component  {


  render() {
    return (
   <div className="card__container">
       <div className="card">
         <div className="front">
           <h1>
             {this.props.title}
           </h1>
           <div className={this.props.class}></div>
         </div>

         <div className="back">
           <div className="content">
             <span>{this.props.conditions}</span>
             <ul className="socials">
               <li>
                 <a href={this.props.href}
                    rel="noopener noreferrer"
                    target="_blank">
                   <i className="fa fa-link"></i>
                 </a>
               </li>
             </ul>
           </div>
         </div>

       </div>
   </div>
    );
  }

}


const mapStateToProps = (store)=>{
  return store
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (Card)

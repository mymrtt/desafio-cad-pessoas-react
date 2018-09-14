import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component{
  render(){
    return(
      <ul className="list"> 
        {this.props.pessoas.map((item) => {
          return <li><Link to={`/${item.id}`} key={item.id}>{item.nome}</Link></li>;
        })}
      </ul>
    );
  }
}
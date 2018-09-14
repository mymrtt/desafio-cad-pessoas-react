import React, { Component } from 'react';

export default class Edit extends Component{
  render(){
    return(
      <div className="edit_container">
        <div className="edit_items">
          Nome:<input type="text" value="Maria Alice Ribeiro" />
          Nascimento: <input type="text" value="04/05/1985" />
        </div>
        <div className="edit_items">
          RG: <input type="text" value="1457011474" />
          CPF: <input type="text" value="024.098.456-71" />
        </div>
        <div className="edit_items">
          Endereço: <input type="text" value="Rua dos Girassóis, 765" />
          CEP: <input type="text" value="48901-190" />
        </div>
        <div className="edit_items">
          Bairro: <input type="text" value="Quidé" />
          Cidade: <input type="text" value="Juazeiro" />
          Estado: <input type="text" value="Bahia" />
        </div>
      </div>
    );
  }
}
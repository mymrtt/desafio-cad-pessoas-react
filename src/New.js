import React, { Component } from 'react';

export default class New extends Component{
  render(){
    return(
      <div className="new">
        <h2>Adicionar Nova Pessoa</h2>
        <div>
          Nome:<input type="text" name="name" />
          Nascimento: <input type="text" name="nasc" />
        </div>
        <div>
          RG: <input type="text" name="RG" />
          CPF: <input type="text" name="CPF" />
        </div>
        <div>
          Endereço: <input type="text" name="Endereço" />
          CEP: <input type="text" name="CEP" />
        </div>
        <div>
          Bairro: <input type="text" name="Bairro" />
          Cidade: <input type="text" name="Cidade" />
          Estado: <input type="text" name="Estado" />
        </div>
        <button className="button">cadastrar</button>
      </div>
    );
  }
}
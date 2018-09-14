import React, { Component } from 'react';

export default class Select extends Component{
  constructor(props){
    super(props);
    this.state = {
      pessoa: this.props.getPerson(this.props.match.params.id)
    }
  }
  componentWillReceiveProps(nextProps){
    if (this.props.match.params.id !== nextProps.match.params.id){
      this.setState({pessoa: this.props.getPerson(nextProps.match.params.id)})
    }
  }
  render(){
    return(
      <div className="select"> 
        <h2 className="titulo_select">Pessoa Selecionada</h2>
          <div className="select_row">
            <p>Nome: {this.state.pessoa.nome}</p> 
            <p>Nascimento: {this.state.pessoa.nascimento}</p>
          </div>
          <div className="select_row">
            <p>RG: {this.state.pessoa.rg}</p>
            <p>CPF: {this.state.pessoa.cpf}</p>
          </div>
          <div className="select_row">
            <p>Endereço: {this.state.pessoa.endereco}</p>
            <p>CEP: {this.state.pessoa.cep}</p>
          </div>
          <div className="select_row">
            <p>Bairro: {this.state.pessoa.bairro}</p>
            <p>Cidade: {this.state.pessoa.cidade}</p>
            <p>Estado: {this.state.pessoa.estado}</p>
          </div>
        <div className="buttons_select">
          <button className="button">adicionar nova</button>
          <button className="button">editar</button>
        </div>
      </div>
    );
  }
}
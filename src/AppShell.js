import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import "./style.css";

import Header from './Header';
import List from './List';
import New from './New';
import Select from './Select';
import Edit from './Edit';

export default class AppShell extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        pessoas: [
          {
            id: "1",
            nome: "Adriana da Silva",
            bairro: "Pedra do Lorde",
            cep: "48901-190",
            cidade: "Juazeiro",
            cpf: "056.098.120-71",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:21.910Z",
            rg: "1334081571"
          },
          { id: "2",
            nome: "Breno das Flores",
            bairro: "Bela Visão",
            cep: "48901-191",
            cidade: "Ilhéus",
            cpf: "056.098.120-72",
            endereco: "Rua Ipanema, 25",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:22.920Z",
            rg: "1334081572"
          },
          { 
            id: "3",
            nome: "Carlos Eduardo de Souza",
            bairro: "Cumuruxatiba",
            cep: "48901-192",
            cidade: "Prado",
            cpf: "056.098.120-73",
            endereco: "Rua Antônio Sérgio Carneiron, 63",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:23.920Z",
            rg: "1334081573"
          },
          { 
            id: "4",
            nome: "Juliana Cadidé",
            bairro: "Alphaville I",
            cep: "48901-193",
            cidade: "Salvador",
            cpf: "056.098.120-74",
            endereco: "Av Alphaville, 200",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:24.920Z",
            rg: "1334081574"
          },
          { 
            id: "5",
            nome: "Maria Alice Ribeiro",
            bairro: "Pedra do Lorde",
            cep: "48901-194",
            cidade: "Juazeiro",
            cpf: "056.098.120-75",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:25.920Z",
            rg: "1334081575"
          },
          { 
            id: "6",
            nome: "Maria Cicera Madalena",
            bairro: "Nova Esperança",
            cep: "48901-195",
            cidade: "Feira de Santana",
            cpf: "056.098.120-76",
            endereco: "Rua dos Bandeirantes, 10",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:26.920Z",
            rg: "1334081576"
          },
          { 
            id: "7",
            nome: "Neide Maria Ribeiro",
            bairro: "Pedra do Lorde",
            cep: "48901-196",
            cidade: "Juazeiro",
            cpf: "056.098.120-77",
            endereco: "Rua da Esperança, 100",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:27.920Z",
            rg: "1334081577"
          },
          { 
            id: "8",
            nome: "Osvaldo dos Santos",
            bairro: "Alto Maron",
            cep: "48901-197",
            cidade: "Vitória da Conquista",
            cpf: "056.098.120-78",
            endereco: "Rua da Mangueira, 560",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:28.920Z",
            rg: "1334081578"
          },
          { 
            id: "9",
            nome: "Ygo Ribeiro",
            bairro: "Antônio Geraldo",
            cep: "48901-198",
            cidade: "Barreiras",
            cpf: "056.098.120-79",
            endereco: "Rua Rua 19 de Maio, 12",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:29.920Z",
            rg: "1334081579"
          },
          { 
            id: "10",
            nome: "Valdir Papel",
            bairro: "Nossa Senhora de Fátima",
            cep: "48901-199",
            cidade: "Itabuna",
            cpf: "056.098.120-80",
            endereco: "Av Bionor Rebouças Brandão, 80",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:30.920Z",
            rg: "1334081521"
          },
          { 
            id: "11",
            nome: "Zilma de Oliveira",
            bairro: "Catu",
            cep: "48901-200",
            cidade: "Alagoinhas",
            cpf: "056.098.120-81",
            endereco: "Rua Simoes de Filho, 100",
            estado: "Bahia",
            nascimento: "2018-09-10T18:29:31.920Z",
            rg: "1334081531"
          },
        ]
      };
    this.getPerson = this.getPerson.bind(this);
  }
  
  getPerson(id){
    return this.state.pessoas.find((item) => item.id === id);
  };
  
  render(){
    return (
      <div className="body">
        <Header />
        <div className="container">
          <List pessoas={ this.state.pessoas } />
          <Switch>
            <Route path="/List" component={List} />
            <Route exact path="/:id" render={ (props) => <Select {...props} getPerson={this.getPerson} /> } />
            <Route path="/New" component={New} />
            <Route path="/Edit" component={Edit} />
          </Switch>
        </div>
      </div>
    );
  }  
}

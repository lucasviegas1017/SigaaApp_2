import { Injectable } from '@angular/core';

import { Matricula } from '../../models/matricula';

@Injectable()
export class MatriculaProvider {
  listaMatricula: Matricula[] = [];
  confirmouMatricula = false;
  

  constructor() {
    let listaMatricula = [
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0022",
            "nome" : "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "TER",
            "horaInicio": "16:00", 
            "horaFim" : "17:50"
          }, {
            "dia" : "QUI",
            "horaInicio": "16:00", 
            "horaFim" : "17:50"
          }  ]
        }
      },
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0056",
            "nome" : "SISTEMAS MICROPROCESSADOS"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "SEG",
            "horaInicio": "10:00", 
            "horaFim" : "11:50"
          }, {
            "dia" : "QUA",
            "horaInicio": "10:00", 
            "horaFim" : "11:50"
          } ]
        }
      },
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0058",
            "nome" : "LABORATÓRIO DE SISTEMAS MICROPROCESSADOS"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "SEG",
            "horaInicio": "14:00", 
            "horaFim" : "15:50"
          } ]
        }
      },
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0067",
            "nome" : "SINAIS E SISTEMAS EM TEMPO CONTÍNUO"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "TER",
            "horaInicio": "14:00", 
            "horaFim" : "15:50"
          }, {
            "dia" : "QUI",
            "horaInicio": "14:00", 
            "horaFim" : "15:50"
          } ]
        }
      },
      {
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0274",
            "nome" : "FUNDAMENTOS DE REDES"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "TER",
            "horaInicio": "10:00", 
            "horaFim" : "11:50"
          }, {
            "dia" : "QUI",
            "horaInicio": "10:00", 
            "horaFim" : "11:50"
          } ]
        }
      }
    ];

    for (let matricula of listaMatricula) {
      this.listaMatricula.push(new Matricula(matricula));
    }

  }

  query(params?: any) {
    if (!params) {
      return this.listaMatricula;
    }

    return this.listaMatricula.filter((matricula) => {
      for (let key in params) {
        let field = matricula[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return matricula;
        } else if (field == params[key]) {
          return matricula;
        }
      }
      return null;
    });
  }

  create(matricula: Matricula) {
    var matriculaAluno: Matricula = {
      turma: matricula.turma,
      status: matricula.status,
      prioridade: matricula.prioridade
    }
    this.listaMatricula.push(matriculaAluno);
  }

  delete(matricula: Matricula) {
    this.listaMatricula.splice(this.listaMatricula.indexOf(matricula), 1);
  }

  checkConfirm() {
    if(this.confirmouMatricula) {
      return false;
    }
    for(var i = 0; i < this.listaMatricula.length; i++) {
      if (this.listaMatricula[i].status == 'PreMatricula') {
        return false;
      }
    }
    return true;
  }

  setConfirmouMatricula() {
    this.confirmouMatricula = true;
  }

  getConfirmouMatricula() {
    return this.confirmouMatricula;
  }

  confirmarMatricula() {
    let i = 0;
    while(i < this.listaMatricula.length) {
      if (this.listaMatricula[i].status == undefined) {
        this.listaMatricula[i].status = 'Pedido';
        i++;
      }
      else if(this.listaMatricula[i].status == 'Confirmado') {
        this.listaMatricula[i].status = 'Matriculado';
        i++;
      }
      else if(this.listaMatricula[i].status == 'Retirado') {
        this.listaMatricula.splice(i,1);
      }
    }
    this.confirmouMatricula = true;

  }


}

import { Injectable } from '@angular/core';

import { Aluno } from '../../models/aluno';

@Injectable()
export class AlunoProvider {
  static get(): any {
    throw new Error('Method not implemented.');
  }
  static detail(username: string) {
    throw new Error('Method not implemented.');
  }
  alunos: Aluno[] = [];
  aluno: Aluno;

  constructor() {
    let alunos = [
      {
        "profilePic": "assets/img/speakers/bear.jpg",
        "nome": "lucas",
        "matricula": "190058986",
        "Engeharia": "Engeharia de redes",
      },
    ];

    for (let aluno of alunos) {
      this.alunos.push(new Aluno(aluno));
    }
  }

  search(params?: any) {
    if (!params) {
      return this.alunos;
    }

    return this.alunos.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  detail(matricula: string) {
    for(let aluno of this.alunos) {
      console.log(aluno);
      if(aluno.matricula == matricula) {
        return aluno;
      }
    }
  }

  set(aluno: Aluno) {
    this.aluno = aluno;
  }

  get() {
    return this.aluno;
  }

}
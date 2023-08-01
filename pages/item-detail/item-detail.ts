import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Matricula } from '../../models/matricula';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  matricula: Matricula;

  matriculaTitles={
    disciplina:" ",
    turma:" ",
    status:" ",
    vagasOfertadas:" ",
    vagasOcupadas:" ",
    horarios:" ",
  }

  constructor(public navCtrl: NavController, 
    navParams: NavParams, 
    translateService: TranslateService) {
    this.matricula = navParams.get('matricula');
    console.log(this.matricula);
    translateService.get(['MATRICULA_TITLE_DISCIPLINA', 'MATRICULA_TITLE_TURMA','MATRICULA_TITLE_STATUS', 'MATRICULA_TITLE_OFERTADAS','MATRICULA_TITLE_OCUPADAS', 'MATRICULA_TITLE_HORARIOS']).subscribe(values=>{
     this.matriculaTitles.disciplina=values['MATRICULA_TITLE_DISCIPLINA'];
     this.matriculaTitles.turma=values['MATRICULA_TITLE_TURMA'];
     this.matriculaTitles.status=values['MATRICULA_TITLE_STATUS'];
     this.matriculaTitles.vagasOfertadas=values['MATRICULA_TITLE_OFERTADAS'];
     this.matriculaTitles.vagasOcupadas=values['MATRICULA_TITLE_OCUPADAS'];
     this.matriculaTitles.horarios=values['MATRICULA_TITLE_HORARIOS'];
    });
    console.log(this.matriculaTitles);
  }

  alterarStatus(status:string){
 this.matricula.status=status;
 this.navCtrl.pop();
 
  }

}
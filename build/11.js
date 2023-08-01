webpackJsonp([11],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemDetailPageModule = /** @class */ (function () {
    function ItemDetailPageModule() {
    }
    ItemDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]
            ]
        })
    ], ItemDetailPageModule);
    return ItemDetailPageModule;
}());

//# sourceMappingURL=item-detail.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(navCtrl, navParams, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.matriculaTitles = {
            disciplina: " ",
            turma: " ",
            status: " ",
            vagasOfertadas: " ",
            vagasOcupadas: " ",
            horarios: " ",
        };
        this.matricula = navParams.get('matricula');
        console.log(this.matricula);
        translateService.get(['MATRICULA_TITLE_DISCIPLINA', 'MATRICULA_TITLE_TURMA', 'MATRICULA_TITLE_STATUS', 'MATRICULA_TITLE_OFERTADAS', 'MATRICULA_TITLE_OCUPADAS', 'MATRICULA_TITLE_HORARIOS']).subscribe(function (values) {
            _this.matriculaTitles.disciplina = values['MATRICULA_TITLE_DISCIPLINA'];
            _this.matriculaTitles.turma = values['MATRICULA_TITLE_TURMA'];
            _this.matriculaTitles.status = values['MATRICULA_TITLE_STATUS'];
            _this.matriculaTitles.vagasOfertadas = values['MATRICULA_TITLE_OFERTADAS'];
            _this.matriculaTitles.vagasOcupadas = values['MATRICULA_TITLE_OCUPADAS'];
            _this.matriculaTitles.horarios = values['MATRICULA_TITLE_HORARIOS'];
        });
        console.log(this.matriculaTitles);
    }
    ItemDetailPage.prototype.alterarStatus = function (status) {
        this.matricula.status = status;
        this.navCtrl.pop();
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"C:\Users\aluno\SigaaApp\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ matricula.turma.disciplina.codigo }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!--<div class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + item.profilePic + \')\'">\n  </div>-->\n\n  <div class="item-detail" padding>\n    <ion-item padding>\n      <h6>{{matricula.turma.disciplina.nome}}</h6>\n    </ion-item>\n<ion-item padding>\n    <p><b>{{matriculaTitles.turma}}:</b>{{matricula.turma.codigo}}</p>\n    <p><b>{{matriculaTitles.vagasOfertadas}}:</b>{{matricula.turma.vagasOfertadas}}</p>\n    <p><b>{{matriculaTitles.vagasOcupadas}}:</b>{{matricula.turma.vagasOcupadas}}</p>\n    <p><b>{{matriculaTitles.horarios}}:</b></p>\n  </ion-item>\n  <ion-item>\n    <p *ngFor="let horario of matricula.turma.horario">{{horario.dia+\': \'+horario.horaInicio+\'-\'+horario.horaFim}}</p>\n    <p><b>{{matriculaTitles.status}}:</b>{{matricula.status  | translate}}</p>\n  </ion-item>\n    <button ion-button>{{matriculaTitles.confirma}}</button>\n    <button ion-button color="danger">{{matriculaTitles.rejeita}}</button>\n  </div>\n  <div>\n  <ion-footer>\n    <button ion-button icon-left color="danger" (click)="alterarstatus(\'Retirado\')">\n      <ion-icon name="close-circle"></ion-icon>\n      {{ \'REJECT_BUTTON\' | translate }}\n    </button>  \n    <button ion-button icon-left color="secondary" (click)="alterarStatus(\'Confirmado\')">\n      <ion-icon name="checkmark-circle"></ion-icon>\n      {{ \'CONFIRM_BUTTON\' | translate }}\n    </button>  \n  </ion-footer>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\aluno\SigaaApp\src\pages\item-detail\item-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
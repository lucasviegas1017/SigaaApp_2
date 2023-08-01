webpackJsonp([10],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_providers_matricula__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, matriculaProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.matriculaProvider = matriculaProvider;
        this.modalCtrl = modalCtrl;
        this.currentMatricula = this.matriculaProvider.query();
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewWillEnter = function () {
        this.currentMatricula = this.matriculaProvider.query();
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    /*addItem() {
      let addModal = this.modalCtrl.create('ItemCreatePage');
      addModal.onDidDismiss(item => {
        if (item) {
          this.items.add(item);
        }
      })
      addModal.present();
    } */
    /**
     * Delete an item from the list of items.
     */
    /*deleteItem(item) {
      this.items.delete(item);
    }*/
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openMatricula = function (matricula) {
        this.navCtrl.push('ItemDetailPage', {
            matricula: matricula
        });
    };
    ListMasterPage.prototype.verificarConfirmarMatricula = function () {
        for (var _i = 0, _a = this.currentMatricula; _i < _a.length; _i++) {
            var matricula = _a[_i];
            if (matricula.status == 'PreMatricula')
                return false;
        }
        return true;
    };
    ListMasterPage.prototype.confirmarMatricula = function () {
        this.matriculaProvider.confirmarMatricula();
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"C:\Users\aluno\SigaaApp\src\pages\list-master\list-master.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n      <button ion-item text-wrap (click)="openMatricula(matricula)" *ngFor="let matricula of currentMatricula">\n        <h2>{{matricula.turma.disciplina.codigo + \'-\' + matricula.turma.disciplina.nome}}</h2>\n        <p>{{matricula.turma.codigo}}</p>\n        <p>{{matricula.status}}</p>\n        <p [ngStyle]="{color:(matricula.status==\'confirmado\'||\'matricula\')}"></p>\n       <!-- <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note-->-\n      </button>\n      <ion-item *ngIf="verificarConfirmarMatricula()">\n        <button ion-button icon-left color="secondary" (click)="confirmarMatricula()">\n          <ion-icon name="checkmark-circle"></ion-icon>\n          {{ \'CONFIRM_ALL_BUTTON\' | translate }}\n        </button>\n      </ion-item>    \n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\aluno\SigaaApp\src\pages\list-master\list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__mocks_providers_matricula__["a" /* MatriculaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
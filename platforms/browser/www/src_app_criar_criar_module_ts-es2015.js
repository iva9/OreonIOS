"use strict";
(self["webpackChunkOreon"] = self["webpackChunkOreon"] || []).push([["src_app_criar_criar_module_ts"],{

/***/ 15133:
/*!***********************************************!*\
  !*** ./src/app/criar/criar-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarPageRoutingModule": function() { return /* binding */ CriarPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _criar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar.page */ 47781);




const routes = [
    {
        path: '',
        component: _criar_page__WEBPACK_IMPORTED_MODULE_0__.CriarPage
    }
];
let CriarPageRoutingModule = class CriarPageRoutingModule {
};
CriarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarPageRoutingModule);



/***/ }),

/***/ 97711:
/*!***************************************!*\
  !*** ./src/app/criar/criar.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarPageModule": function() { return /* binding */ CriarPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _criar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-routing.module */ 15133);
/* harmony import */ var _criar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar.page */ 47781);







let CriarPageModule = class CriarPageModule {
};
CriarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _criar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_criar_page__WEBPACK_IMPORTED_MODULE_1__.CriarPage]
    })
], CriarPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_criar_criar_module_ts-es2015.js.map
(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkOreon"] = self["webpackChunkOreon"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./selective-loading-strategy.service */
      79713);
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      17500); //const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['criar-user']);


      var redirectLoggedInToItems = function redirectLoggedInToItems() {
        return (0, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.redirectLoggedInTo)(['home']);
      };

      var routes = [{
        path: '',
        redirectTo: 'criar-user',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./home/home.module */
          3467)).then(function (m) {
            return m.HomePageModule;
          });
        } //,canActivate: [AngularFireAuthGuard], data: {  preload: true } // authGuardPipe: redirectUnauthorizedToLogin

      }, {
        path: 'perfil',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_perfil_perfil_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./perfil/perfil.module */
          91320)).then(function (m) {
            return m.PerfilPageModule;
          });
        } //, canActivate: [AngularFireAuthGuard], data: {  preload : true}, //authGuardPipe: redirectUnauthorizedToLogin  ,

      }, {
        path: 'pesquisar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pesquisar_pesquisar_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pesquisar/pesquisar.module */
          46257)).then(function (m) {
            return m.PesquisarPageModule;
          });
        },
        data: {
          preload: true
        }
      }, {
        path: 'add',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./novo-evento/novo-evento.module */
          85182)).then(function (m) {
            return m.NovoEventoPageModule;
          });
        }
      }, {
        path: 'criar-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_criar-user_criar-user_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./criar-user/criar-user.module */
          7197)).then(function (m) {
            return m.CriarUserPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectLoggedInToItems
        }
      }, {
        path: 'criar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_criar_criar_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./criar/criar.module */
          97711)).then(function (m) {
            return m.CriarPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          80107)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'eventomodal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./eventomodal/eventomodal.module */
          36184)).then(function (m) {
            return m.EventomodalPageModule;
          });
        }
      }, {
        path: 'proximo-evento',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./eventos-do-usuario/proximo-evento.module */
          95323)).then(function (m) {
            return m.ProximoEventoPageModule;
          });
        }
      }, {
        path: 'editar-modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./editar-modal/editar-modal.module */
          75917)).then(function (m) {
            return m.EditarModalPageModule;
          });
        }
      }, {
        path: 'usuario-pesquisa/:uid',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./usuario-pesquisa/usuario-pesquisa.module */
          38585)).then(function (m) {
            return m.UsuarioPesquisaPageModule;
          });
        }
      }, {
        path: 'evento-pesquisa/:chave',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./evento-pesquisa/evento-pesquisa.module */
          66127)).then(function (m) {
            return m.EventoPesquisaPageModule;
          });
        }
      }, {
        path: 'share/:chave',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_share_share_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./share/share.module */
          87841)).then(function (m) {
            return m.SharePageModule;
          });
        }
      }, {
        path: 'tutorial',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./tutorial/tutorial.module */
          50222)).then(function (m) {
            return m.TutorialPageModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        providers: [_selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_0__.SimpleLoadingStrategy],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      53040);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73588);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      95680);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.page */
      62267);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(home, platform, Auth, splashScreen, statusBar, toastController, network) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.home = home;
          this.platform = platform;
          this.Auth = Auth;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.toastController = toastController;
          this.network = network;
          this.initializeApp();
          this.network.onDisconnect().subscribe(function () {
            _this.presentToast();
          });
          this.Auth.onAuthStateChanged(function (user) {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              var uid = user.uid;
              console.log("logado por aqui");

              _this.home.AuthstateLogado(user); // ...

            } else {
              _this.home.AuthstateDeslogado();

              console.log("Deslogado"); // User is signed out
              // ...
            }
          });
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.overlaysWebView(false);

              _this2.statusBar.backgroundColorByHexString('#000000');
            });
            this.splashScreen.hide();
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Sem conexão com a Internet',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _home_home_page__WEBPACK_IMPORTED_MODULE_5__.HomePage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__.Network
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_home_home_page__WEBPACK_IMPORTED_MODULE_5__.HomePage, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController, _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__.Network])], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73588);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/http */
      62750);
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/fire */
      18690);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/fire/storage */
      26776);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      17500);
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      40868);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      18659);
      /* harmony import */


      var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/google-maps */
      35127);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./firebase */
      91416);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user.service */
      92785);
      /* harmony import */


      var _perfil_perfil_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./perfil/perfil.page */
      69557);
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./login/login.page */
      66825);
      /* harmony import */


      var _home_home_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./home/home.page */
      62267);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      1331);
      /* harmony import */


      var _eventomodal_eventomodal_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./eventomodal/eventomodal.module */
      36184);
      /* harmony import */


      var _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./eventomodal/eventomodal.page */
      4268);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      95680);
      /* harmony import */


      var _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./selective-loading-strategy.service */
      79713);
      /* harmony import */


      var _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./editar-modal/editar-modal.page */
      88830);
      /* harmony import */


      var _editar_modal_editar_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./editar-modal/editar-modal.module */
      75917);
      /* harmony import */


      var _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./novo-evento/novo-evento.page */
      12403);
      /* harmony import */


      var _novo_evento_novo_evento_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./novo-evento/novo-evento.module */
      85182);
      /* harmony import */


      var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/screenshot/ngx */
      35369);
      /* harmony import */


      var _usuario_pesquisa_usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./usuario-pesquisa/usuario-pesquisa.page */
      21952);
      /* harmony import */


      var _usuario_pesquisa_usuario_pesquisa_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./usuario-pesquisa/usuario-pesquisa.module */
      38585);
      /* harmony import */


      var _home_home_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./home/home.module */
      3467);
      /* harmony import */


      var _evento_pesquisa_evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./evento-pesquisa/evento-pesquisa.page */
      2061);
      /* harmony import */


      var _evento_pesquisa_evento_pesquisa_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./evento-pesquisa/evento-pesquisa.module */
      66127);
      /* harmony import */


      var _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./criar-user/criar-user.page */
      81185);
      /* harmony import */


      var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./tutorial/tutorial.page */
      11579);
      /* harmony import */


      var _tutorial_tutorial_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./tutorial/tutorial.module */
      50222);
      /* harmony import */


      var _eventos_do_usuario_proximo_evento_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./eventos-do-usuario/proximo-evento.module */
      95323);
      /* harmony import */


      var _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./eventos-do-usuario/proximo-evento.page */
      84376);
      /* harmony import */


      var _pesquisar_pesquisar_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./pesquisar/pesquisar.page */
      67928);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      64314);
      /* harmony import */


      var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @ionic-native/background-mode/ngx */
      25998);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      34483);
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      147);

      var AppModule_1;

      var _AppModule = AppModule_1 = /*#__PURE__*/_createClass(function AppModule(injector) {
        _classCallCheck(this, AppModule);

        this.injector = injector;
        AppModule_1.injector = injector;
      });

      _AppModule.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_37__.Injector
        }];
      };

      _AppModule = AppModule_1 = (0, tslib__WEBPACK_IMPORTED_MODULE_38__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_37__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_39__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_41__.AngularFirestoreModule, _angular_fire__WEBPACK_IMPORTED_MODULE_42__.AngularFireModule.initializeApp(_firebase__WEBPACK_IMPORTED_MODULE_7__.environment.firebaseConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_43__.AngularFireStorageModule, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_44__.AngularFireAuthGuardModule, _angular_fire_database__WEBPACK_IMPORTED_MODULE_45__.AngularFireDatabaseModule, _angular_forms__WEBPACK_IMPORTED_MODULE_46__.ReactiveFormsModule, _home_home_module__WEBPACK_IMPORTED_MODULE_24__.HomePageModule, _angular_forms__WEBPACK_IMPORTED_MODULE_46__.FormsModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_47__.AngularFireAuthModule, _eventomodal_eventomodal_module__WEBPACK_IMPORTED_MODULE_13__.EventomodalPageModule, _novo_evento_novo_evento_module__WEBPACK_IMPORTED_MODULE_20__.NovoEventoPageModule, _eventos_do_usuario_proximo_evento_module__WEBPACK_IMPORTED_MODULE_30__.ProximoEventoPageModule, _editar_modal_editar_modal_module__WEBPACK_IMPORTED_MODULE_18__.EditarModalPageModule, _tutorial_tutorial_module__WEBPACK_IMPORTED_MODULE_29__.TutorialPageModule, _usuario_pesquisa_usuario_pesquisa_module__WEBPACK_IMPORTED_MODULE_23__.UsuarioPesquisaPageModule, _evento_pesquisa_evento_pesquisa_module__WEBPACK_IMPORTED_MODULE_26__.EventoPesquisaPageModule, _angular_http__WEBPACK_IMPORTED_MODULE_48__.HttpModule],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar, _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__.Network, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen, _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMaps, _user_service__WEBPACK_IMPORTED_MODULE_8__.UserService, _perfil_perfil_page__WEBPACK_IMPORTED_MODULE_9__.PerfilPage, _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_27__.CriarUserPage, _pesquisar_pesquisar_page__WEBPACK_IMPORTED_MODULE_32__.PesquisarPage, _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_19__.NovoEventoPage, _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_28__.TutorialPage, _login_login_page__WEBPACK_IMPORTED_MODULE_10__.LoginPage, _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_16__.SimpleLoadingStrategy, _home_home_page__WEBPACK_IMPORTED_MODULE_11__.HomePage, _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_17__.EditarModalPage, _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_14__.EventomodalPage, _usuario_pesquisa_usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_22__.UsuarioPesquisaPage, _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_21__.Screenshot, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__.InAppBrowser, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_33__.SocialSharing, _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_34__.BackgroundMode, _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.NavParams, _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__.ImagePicker, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_35__.Camera, _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_36__.GooglePlus, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File, _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.ActionSheetController, _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_31__.ProximoEventoPage, _evento_pesquisa_evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_25__.EventoPesquisaPage, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_49__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_38__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_37__.Injector])], _AppModule);
      /***/
    },

    /***/
    81185:
    /*!***********************************************!*\
      !*** ./src/app/criar-user/criar-user.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _ref;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CriarUserPage": function CriarUserPage() {
          return (
            /* binding */
            _CriarUserPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_criar_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./criar-user.page.html */
      51131);
      /* harmony import */


      var _criar_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./criar-user.page.scss */
      24340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _criar_criar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../criar/criar.page */
      47781);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user.service */
      92785);

      var _CriarUserPage = /*#__PURE__*/function () {
        function CriarUserPage(alert, afAuth, route, user, loadingC) {
          _classCallCheck(this, CriarUserPage);

          this.alert = alert;
          this.afAuth = afAuth;
          this.route = route;
          this.user = user;
          this.loadingC = loadingC;
          this.criar = _criar_criar_page__WEBPACK_IMPORTED_MODULE_2__.CriarPage;
        }

        _createClass(CriarUserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "home",
          value: function home() {
            this.route.navigate(['/home']);
          }
        }, {
          key: "showalert",
          value: function showalert(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alert.create({
                        header: header,
                        message: message,
                        buttons: [{
                          text: 'Re-enviar',
                          handler: function handler() {
                            _this3.enviaremaildeverific();
                          }
                        }, {
                          text: 'Ja clickei no link',
                          handler: function handler() {
                            _this3.javerifiquei();
                          }
                        }, {
                          text: 'Login em outra conta',
                          handler: function handler() {
                            _this3.user.logout();

                            _this3.route.navigate(['./login']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingC.create({
                        cssClass: 'my-custom-class',
                        message: 'Espere um momento...',
                        duration: 2000
                      });

                    case 2:
                      this.loading = _context3.sent;
                      _context3.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "javerifiquei",
          value: function javerifiquei() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var foi;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.presentLoading();
                      _context4.next = 3;
                      return this.afAuth.currentUser;

                    case 3:
                      foi = _context4.sent;
                      foi.reload();
                      setTimeout(function () {
                        console.log("RELOAD");
                        var dd = foi.emailVerified;
                        console.log(dd, "email verified na criar user");

                        if (dd == true) {
                          _this4.route.navigate(['./home']);
                        }
                      }, 3500);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "enviaremaildeverific",
          value: function enviaremaildeverific() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      _context5.sent.sendEmailVerification();

                      this.javerifiquei();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return CriarUserPage;
      }();

      _CriarUserPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
        }];
      };

      _CriarUserPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)((_ref = {
        template: "<ion-button  color=\"primary\"  [navPush]=\"criar\" style=\"padding-left:100px\">Register</ion-button>",
        selector: 'app-criar-user'
      }, _defineProperty(_ref, "template", _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_criar_user_page_html__WEBPACK_IMPORTED_MODULE_0__["default"]), _defineProperty(_ref, "styles", [_criar_user_page_scss__WEBPACK_IMPORTED_MODULE_1__]), _ref)), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth, _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController])], _CriarUserPage);
      /***/
    },

    /***/
    47781:
    /*!*************************************!*\
      !*** ./src/app/criar/criar.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CriarPage": function CriarPage() {
          return (
            /* binding */
            _CriarPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_criar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./criar.page.html */
      67838);
      /* harmony import */


      var _criar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./criar.page.scss */
      98958);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user.service */
      92785);
      /* harmony import */


      var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../tutorial/tutorial.page */
      11579);
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      147);
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase */
      38881);
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);

      var _CriarPage = /*#__PURE__*/function () {
        function CriarPage(afAuth, google, alert, route, afdatabase, firestore, user, modal, loadingC) {
          _classCallCheck(this, CriarPage);

          this.afAuth = afAuth;
          this.google = google;
          this.alert = alert;
          this.route = route;
          this.afdatabase = afdatabase;
          this.firestore = firestore;
          this.user = user;
          this.modal = modal;
          this.loadingC = loadingC;
          this.arraydenomes = new Array();
          this.username = "";
          this.abrir = false;
          this.jalogado = false;
          this.tem = false;
          this.email = "";
          this.password = "";
          this.cpassword = "";
        }

        _createClass(CriarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDataFromFire();
          }
        }, {
          key: "getDataFromFire",
          value: function getDataFromFire() {
            var _this5 = this;

            this.afdatabase.list('users').valueChanges().subscribe(function (data) {
              _this5.trataDados(data);
            });
          }
        }, {
          key: "trataDados",
          value: function trataDados(dados) {
            this.items = Object.keys(dados).map(function (i) {
              return dados[i];
            });

            for (var key in this.items) {
              this.arraydenomes.push(this.items[key].username.username);
            }
          }
        }, {
          key: "register",
          value: function register() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var todosnomes, osnomes, username, email, password, cpassword, imgUser, res, iduser;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.presentLoading();
                      todosnomes = this.items;
                      osnomes = this.username.toLowerCase();
                      username = this.username, email = this.email, password = this.password, cpassword = this.cpassword;
                      imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18";
                      username.toLowerCase();

                      if (username) {
                        _context6.next = 9;
                        break;
                      }

                      this.loadingC.dismiss();
                      return _context6.abrupt("return", this.showalert("Erro", "insira nome de usuario"));

                    case 9:
                      if (!this.arraydenomes.includes(osnomes)) {
                        _context6.next = 12;
                        break;
                      }

                      this.loadingC.dismiss();
                      return _context6.abrupt("return", this.showalert("Erro", "nome ja existente"));

                    case 12:
                      if (!(password !== cpassword)) {
                        _context6.next = 15;
                        break;
                      }

                      this.loadingC.dismiss();
                      return _context6.abrupt("return", this.showalert("Erro", "senhas diferentes"));

                    case 15:
                      _context6.prev = 15;
                      _context6.next = 18;
                      return this.afAuth.createUserWithEmailAndPassword(email, password);

                    case 18:
                      res = _context6.sent;
                      console.log(res);
                      iduser = res.user.uid;
                      this.firestore.collection("users").doc("".concat(res.user.uid)).set({
                        username: username,
                        iduser: iduser,
                        imgUser: imgUser
                      });
                      this.afdatabase.database.ref("users/".concat(res.user.uid, "/username")).set({
                        username: username,
                        iduser: iduser,
                        imgUser: imgUser
                      });
                      this.enviaremaildeverific();
                      this.user.updateProfile(imgUser, username);
                      _context6.next = 38;
                      break;

                    case 27:
                      _context6.prev = 27;
                      _context6.t0 = _context6["catch"](15);

                      if (!(_context6.t0.code == "auth/weak-password")) {
                        _context6.next = 32;
                        break;
                      }

                      this.loadingC.dismiss();
                      return _context6.abrupt("return", this.showalert("Senha Fraca", "Senha deve ter no mínimo 6 caracteres"));

                    case 32:
                      if (!(_context6.t0.code == "auth/invalid-email")) {
                        _context6.next = 35;
                        break;
                      }

                      this.loadingC.dismiss();
                      return _context6.abrupt("return", this.showalert("Erro", "Email invalido"));

                    case 35:
                      if (!(_context6.t0.code == "auth/email-already-in-use")) {
                        _context6.next = 38;
                        break;
                      }

                      this.loadingC.dismiss();
                      return _context6.abrupt("return", this.showalert("Erro", "Email ja em uso"));

                    case 38:
                      this.loadingC.dismiss();

                    case 39:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[15, 27]]);
            }));
          }
        }, {
          key: "showalert",
          value: function showalert(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alert.create({
                        header: header,
                        message: message,
                        buttons: ["Ok"]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "abriu",
          value: function abriu() {
            this.abrir = !this.abrir;
          }
        }, {
          key: "loginGooglecom",
          value: function loginGooglecom() {
            var _this6 = this;

            this.presentLoading();
            this.LoginGoogle().then(function () {
              //const res =  this.Afauth.currentUser
              _this6.mostraale();
            })["catch"](function (err) {
              _this6.showalert("erro", err);
            });
          }
        }, {
          key: "LoginGoogle",
          value: function LoginGoogle() {
            var _this7 = this;

            return this.google.login({}).then(function (result) {
              var user_data_google = result;
              return _this7.afAuth.signInWithCredential(firebase__WEBPACK_IMPORTED_MODULE_5__.auth.GoogleAuthProvider.credential(null, user_data_google.accessToken));
            });
          }
        }, {
          key: "voltar",
          value: function voltar() {
            this.route.navigate(['./criar-user']);
          }
        }, {
          key: "jalogs",
          value: function jalogs() {
            this.jalogado = true;
          }
        }, {
          key: "showmodalTutoria",
          value: function showmodalTutoria() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var modal;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.modal.create({
                        component: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_3__.TutorialPage,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context8.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.loadingC.create({
                        cssClass: 'my-custom-class',
                        message: 'Espere um momento...'
                      });

                    case 2:
                      this.loading = _context9.sent;
                      _context9.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "javerifiquei",
          value: function javerifiquei() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this8 = this;

              var foi;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.presentLoading();
                      _context10.next = 3;
                      return this.afAuth.currentUser;

                    case 3:
                      foi = _context10.sent;
                      foi.reload();
                      setTimeout(function () {
                        console.log("RELOAD");
                        var dd = foi.emailVerified;
                        console.log(dd, "email verified na criar user");

                        if (dd == true) {
                          _this8.showmodalTutoria();

                          _this8.route.navigate(['./home']);

                          _this8.showalert("Sucesso!", "Bem vindo");
                        }

                        if (dd == false) {
                          _this8.showalert("Ops!", "Tente novamente em instantes");
                        }
                      }, 3500);

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "enviaremaildeverific",
          value: function enviaremaildeverific() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      _context11.sent.sendEmailVerification();

                      this.jalogs();

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "mostraale",
          value: function mostraale() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this9 = this;

              var res;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      res = _context12.sent;
                      this.firestore.collection('users', function (ref) {
                        return ref.where('iduser', '==', "".concat(res.uid));
                      }).snapshotChanges().subscribe(function (usergg) {
                        if (usergg.length > 0) {
                          _this9.loadingC.dismiss();

                          _this9.route.navigate(['/home']);

                          _this9.showalert('', 'Conta criada com sucesso');
                        } else {
                          var username = "Usuario";
                          var imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18";
                          var iduser = res.uid; //display name ja existe

                          _this9.firestore.collection("users").doc("".concat(res.uid)).set({
                            username: username,
                            iduser: iduser,
                            imgUser: imgUser
                          });

                          _this9.afdatabase.database.ref("users/".concat(res.uid, "/username")).set({
                            username: username,
                            iduser: iduser,
                            imgUser: imgUser
                          });

                          _this9.showmodalTutorial();

                          _this9.route.navigate(['/home']);

                          _this9.loadingC.dismiss();
                        }
                      });

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "showmodalTutorial",
          value: function showmodalTutorial() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var modal;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.modal.create({
                        component: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_3__.TutorialPage,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context13.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return CriarPage;
      }();

      _CriarPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__.AngularFireDatabase
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }];
      };

      _CriarPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-criar',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_criar_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_criar_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth, _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__.AngularFireDatabase, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore, _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController])], _CriarPage);
      /***/
    },

    /***/
    45215:
    /*!*************************************************************!*\
      !*** ./src/app/editar-modal/editar-modal-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditarModalPageRoutingModule": function EditarModalPageRoutingModule() {
          return (
            /* binding */
            _EditarModalPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _editar_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editar-modal.page */
      88830);

      var routes = [{
        path: '',
        component: _editar_modal_page__WEBPACK_IMPORTED_MODULE_0__.EditarModalPage
      }];

      var _EditarModalPageRoutingModule = /*#__PURE__*/_createClass(function EditarModalPageRoutingModule() {
        _classCallCheck(this, EditarModalPageRoutingModule);
      });

      _EditarModalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditarModalPageRoutingModule);
      /***/
    },

    /***/
    75917:
    /*!*****************************************************!*\
      !*** ./src/app/editar-modal/editar-modal.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditarModalPageModule": function EditarModalPageModule() {
          return (
            /* binding */
            _EditarModalPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _editar_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editar-modal-routing.module */
      45215);
      /* harmony import */


      var _editar_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editar-modal.page */
      88830);

      var _EditarModalPageModule = /*#__PURE__*/_createClass(function EditarModalPageModule() {
        _classCallCheck(this, EditarModalPageModule);
      });

      _EditarModalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editar_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarModalPageRoutingModule],
        declarations: [_editar_modal_page__WEBPACK_IMPORTED_MODULE_1__.EditarModalPage],
        exports: [_editar_modal_page__WEBPACK_IMPORTED_MODULE_1__.EditarModalPage]
      })], _EditarModalPageModule);
      /***/
    },

    /***/
    88830:
    /*!***************************************************!*\
      !*** ./src/app/editar-modal/editar-modal.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditarModalPage": function EditarModalPage() {
          return (
            /* binding */
            _EditarModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editar_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./editar-modal.page.html */
      61143);
      /* harmony import */


      var _editar_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editar-modal.page.scss */
      94237);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/storage */
      26776);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user.service */
      92785);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      34483);
      /* harmony import */


      var _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../novo-evento/novo-evento.page */
      12403);

      var _EditarModalPage = /*#__PURE__*/function () {
        function EditarModalPage(storage, modal, auth, camera, user, firestore, alert, navparams, loadingC, firebase, route, novoe) {
          _classCallCheck(this, EditarModalPage);

          this.storage = storage;
          this.modal = modal;
          this.auth = auth;
          this.camera = camera;
          this.user = user;
          this.firestore = firestore;
          this.alert = alert;
          this.navparams = navparams;
          this.loadingC = loadingC;
          this.firebase = firebase;
          this.route = route;
          this.novoe = novoe;
          this.roda = false;
          this.selectedImage = null;
          this.newUsername = '';
          this.cidade = new Array();
          this.c = new Array();
        }

        _createClass(EditarModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.x = this.navparams.get('customid');
            this.img = "../assets/icon/profile.png";
            this.getDataFromFire();
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            var _this10 = this;

            this.camera.getPicture({
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL
            }).then(function (res) {
              return _this10.img = "data:image/jpeg;base64," + res;
            })["catch"](function (e) {
              console.log(e);
            });
            return this.img;
          }
        }, {
          key: "showPreview",
          value: function showPreview(event) {
            var _this11 = this;

            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();

              reader.onload = function (e) {
                return _this11.img = e.target.result;
              };

              reader.readAsDataURL(event.target.files[0]);
              this.selectedImage = event.target.files[0];
              this.novoe.img = event.target.files[0];
            } else {
              this.img = "../assets/icon/profile.png";
              this.selectedImage = null;
            }
          }
        }, {
          key: "writeUserData",
          value: function writeUserData() {
            this.fileButton.nativeElement.click();
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.loadingC.create({
                        cssClass: 'my-custom-class',
                        message: 'Espere um momento...',
                        duration: 2000
                      });

                    case 2:
                      this.loading = _context14.sent;
                      _context14.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "editar",
          value: function editar() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this12 = this;

              var todosnomes, osnomes, name, fileReff;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.presentLoading();
                      todosnomes = this.items;
                      osnomes = this.newUsername.toLowerCase();

                      if (!this.selectedImage && !this.newUsername) {
                        this.close();
                      }

                      if (this.selectedImage) {
                        _context15.next = 8;
                        break;
                      }

                      if (!todosnomes.some(function (nome) {
                        return nome.username.username == osnomes;
                      })) {
                        _context15.next = 7;
                        break;
                      }

                      return _context15.abrupt("return", this.showalert("Erro", "nome ja existente"));

                    case 7:
                      if (this.newUsername != '') {
                        console.log('não tem imagem');
                        this.user.updateNome(this.newUsername.toLowerCase());
                      }

                    case 8:
                      if (!this.selectedImage) {
                        _context15.next = 15;
                        break;
                      }

                      name = this.selectedImage.name;
                      fileReff = this.storage.ref(name);
                      _context15.next = 13;
                      return this.storage.upload(name, this.selectedImage);

                    case 13:
                      _context15.sent.downloadURL;
                      fileReff.getDownloadURL().subscribe(function (url) {
                        _this12.url = url;
                        console.log(_this12.url);

                        if (!_this12.newUsername) {
                          console.log('não tem nome');

                          _this12.user.updateImage(_this12.url);
                        } else {
                          _this12.user.updateProfile(_this12.url, _this12.newUsername);
                        }
                      });

                    case 15:
                      this.close();
                      this.loadingC.dismiss();

                    case 17:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "criandomodal",
          value: function criandomodal() {}
        }, {
          key: "close",
          value: function close() {
            this.modal.dismiss();
          }
        }, {
          key: "getDataFromFire",
          value: function getDataFromFire() {
            var _this13 = this;

            this.firebase.list('users').valueChanges().subscribe(function (data) {
              _this13.trataDados(data);
            });
          }
        }, {
          key: "trataDados",
          value: function trataDados(dados) {
            this.items = Object.keys(dados).map(function (i) {
              return dados[i];
            });
          }
        }, {
          key: "showalert",
          value: function showalert(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var alert;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.alert.create({
                        header: header,
                        message: message,
                        buttons: ["Ok"]
                      });

                    case 2:
                      alert = _context16.sent;
                      _context16.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "geteventos",
          value: function geteventos() {
            var _this14 = this;

            console.log("clicado");
            this.eventocidade = this.firestore.collection("eventos", function (ref) {
              return ref.where("lugar", "==", "Rio de Janeiro");
            });
            return this.eventocidade.get().subscribe(function (coisas) {
              coisas.forEach(function (b) {
                var data = b.data();
                var id = b.id;
                _this14.a = Object.assign({
                  id: id
                }, data);

                _this14.c.push(_this14.a);

                console.log(_this14.c);
              });
            });
          }
        }]);

        return EditarModalPage;
      }();

      _EditarModalPage.ctorParameters = function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
            args: [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage]
          }]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
            args: [_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService]
          }]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__.AngularFireDatabase
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_4__.NovoEventoPage
        }];
      };

      _EditarModalPage.propDecorators = {
        fileButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
          args: ['fileButton', {
            "static": false
          }]
        }]
      };
      _EditarModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-editar-modal',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editar_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editar_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera, _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController, _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__.AngularFireDatabase, _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router, _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_4__.NovoEventoPage])], _EditarModalPage);
      /***/
    },

    /***/
    15975:
    /*!*******************************************************************!*\
      !*** ./src/app/evento-pesquisa/evento-pesquisa-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventoPesquisaPageRoutingModule": function EventoPesquisaPageRoutingModule() {
          return (
            /* binding */
            _EventoPesquisaPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./evento-pesquisa.page */
      2061);

      var routes = [{
        path: '',
        component: _evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_0__.EventoPesquisaPage
      }];

      var _EventoPesquisaPageRoutingModule = /*#__PURE__*/_createClass(function EventoPesquisaPageRoutingModule() {
        _classCallCheck(this, EventoPesquisaPageRoutingModule);
      });

      _EventoPesquisaPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EventoPesquisaPageRoutingModule);
      /***/
    },

    /***/
    66127:
    /*!***********************************************************!*\
      !*** ./src/app/evento-pesquisa/evento-pesquisa.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventoPesquisaPageModule": function EventoPesquisaPageModule() {
          return (
            /* binding */
            _EventoPesquisaPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _evento_pesquisa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./evento-pesquisa-routing.module */
      15975);
      /* harmony import */


      var _evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./evento-pesquisa.page */
      2061);

      var _EventoPesquisaPageModule = /*#__PURE__*/_createClass(function EventoPesquisaPageModule() {
        _classCallCheck(this, EventoPesquisaPageModule);
      });

      _EventoPesquisaPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _evento_pesquisa_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventoPesquisaPageRoutingModule],
        declarations: [_evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_1__.EventoPesquisaPage]
      })], _EventoPesquisaPageModule);
      /***/
    },

    /***/
    2061:
    /*!*********************************************************!*\
      !*** ./src/app/evento-pesquisa/evento-pesquisa.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventoPesquisaPage": function EventoPesquisaPage() {
          return (
            /* binding */
            _EventoPesquisaPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_evento_pesquisa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./evento-pesquisa.page.html */
      92053);
      /* harmony import */


      var _evento_pesquisa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./evento-pesquisa.page.scss */
      93000);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/app */
      27694);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      1331);
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/firestore */
      33527);

      var _EventoPesquisaPage = /*#__PURE__*/function () {
        function EventoPesquisaPage(alert, route, firestore, Firebase, auth, router, iab) {
          _classCallCheck(this, EventoPesquisaPage);

          this.alert = alert;
          this.route = route;
          this.firestore = firestore;
          this.Firebase = Firebase;
          this.auth = auth;
          this.router = router;
          this.iab = iab;
          this.noAuth = true;
          this.pode = false;
          this.numcoments = 0;
          this.jadeuUP = false;
          this.comentario = "";
          this.ComentSet = {
            img: '',
            username: '',
            comentarioU: '',
            UID: ''
          };
          this.eventoID = this.route.snapshot.paramMap.get('chave');
          this.getevento(this.eventoID);
        }

        _createClass(EventoPesquisaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.auth.onAuthStateChanged(function (user) {
              if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log("logado por aqui");
                _this15.iduser = uid; // ...
              } else {
                _this15.iduser == null;
                console.log("Deslogado"); // User is signed out
                // ...
              }
            });
          }
        }, {
          key: "user",
          value: function user() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var res;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context17.sent;

                      if (res != null) {
                        this.imgus = res.photoURL;
                        this.iduser = res.uid;
                        this.nome = res.displayName;
                      }

                    case 4:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "jaUpou",
          value: function jaUpou() {
            if (this.iduser == null) {
              this.showAlertLogin();
            }

            if (this.eventodb.up.includes(this.iduser)) {
              this.jadeuUP = true;
            }
          }
        }, {
          key: "redirectUser",
          value: function redirectUser() {
            this.router.navigate(['/usuario-pesquisa/' + this.eventodb.userID[0]]);
          }
        }, {
          key: "getevento",
          value: function getevento(tt) {
            var _this16 = this;

            //refazer
            this.evento = this.firestore.collection('eventos', function (ref) {
              return ref.where('chave2', '==', "".concat(tt));
            }); // Firestore evento

            return this.evento.get().subscribe(function (coisas) {
              coisas.forEach(function (b) {
                var data = b.data();
                var id = b.id;
                moment__WEBPACK_IMPORTED_MODULE_3__.locale('pt-BR');
                _this16.m = moment__WEBPACK_IMPORTED_MODULE_3__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this16.m;
                _this16.eventodb = Object.assign({
                  id: id
                }, data);

                _this16.getComent(_this16.eventodb.id);

                _this16.lugardocomentario = _this16.Firebase.list("coments/".concat(_this16.eventodb.id), function (ref) {
                  return ref.limitToLast(75);
                });
                console.log(_this16.eventodb);
                _this16.pode = true;
              });
            });
          }
        }, {
          key: "redirectlink",
          value: function redirectlink() {
            var browser = this.iab.create("".concat(this.eventodb.ingresso), '_system', {
              location: 'no'
            });
            browser.on('loadstop').subscribe(function (event) {
              browser.insertCSS({
                code: "body{color: red;"
              });
            });
            browser.close();
          }
        }, {
          key: "redirectmap",
          value: function redirectmap() {
            var map = this.iab.create("https://www.google.com/maps/search/?api=1&query=".concat(this.eventodb.local.description), '_system');
            map.on('loadstop').subscribe(function (event) {
              map.insertCSS({
                code: "body{color: red;"
              });
            });
            map.close();
          }
        }, {
          key: "setcoment",
          value: function setcoment() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var res;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      this.user();
                      _context18.next = 3;
                      return this.auth.currentUser;

                    case 3:
                      res = _context18.sent;
                      this.ComentSet = {
                        img: this.imgus,
                        username: this.nome,
                        comentarioU: this.comentario,
                        UID: this.iduser
                      };
                      this.lugardocomentario.push(this.ComentSet);
                      this.comentario = "";

                    case 7:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "getComent",
          value: function getComent(x) {
            var _this17 = this;

            this.lugaresdocomentario = this.Firebase.list("coments/".concat(x), function (ref) {
              return ref.limitToLast(75);
            });
            console.log(x);
            this.lugaresdocomentario.valueChanges().subscribe(function (data) {
              _this17.trataDados(data);
            });
          }
        }, {
          key: "trataDados",
          value: function trataDados(dados) {
            this.coments = Object.keys(dados).map(function (i) {
              return dados[i];
            });
            this.numcoments = this.coments.length;
            this.todoscoments = this.coments;
          }
        }, {
          key: "page",
          value: function page(kdcoment) {
            this.router.navigate(['/usuario-pesquisa/' + kdcoment.UID]);
          }
        }, {
          key: "showAlertLogin",
          value: function showAlertLogin() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this18 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.alert.create({
                        header: 'Ops!',
                        message: 'Crie ou entre em uma conta para usar ups e comentários.',
                        buttons: [{
                          text: 'Criar / Entrar',
                          handler: function handler() {
                            _this18.router.navigate(['/criar-user']);
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            console.log('Confirm Okay');
                          }
                        }]
                      });

                    case 2:
                      alert = _context19.sent;
                      _context19.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "UP",
          value: function UP() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var res;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.jadeuUP = true;
                      _context20.next = 3;
                      return this.auth.currentUser;

                    case 3:
                      res = _context20.sent;

                      if (!this.eventodb.up.includes(this.iduser)) {
                        _context20.next = 8;
                        break;
                      }

                      return _context20.abrupt("return", this.showalert("Ops!", "Você ja deu UP nesse evento"));

                    case 8:
                      this.upReference = this.firestore.doc("eventos/".concat(this.eventodb.id));
                      this.upReference.update({
                        up: firebase_app__WEBPACK_IMPORTED_MODULE_2___default().firestore.FieldValue.arrayUnion(res.uid),
                        UPnum: firebase_app__WEBPACK_IMPORTED_MODULE_2___default().firestore.FieldValue.increment(1)
                      });
                      this.eventodb.UPnum += 1;

                    case 11:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "showalert",
          value: function showalert(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var alert;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.alert.create({
                        header: header,
                        message: message,
                        buttons: ["Ok"]
                      });

                    case 2:
                      alert = _context21.sent;
                      _context21.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "Compartilhar",
          value: function Compartilhar() {
            this.router.navigate(['/share/' + this.eventodb.chave2]);
          }
        }]);

        return EventoPesquisaPage;
      }();

      _EventoPesquisaPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__.AngularFireDatabase
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser
        }];
      };

      _EventoPesquisaPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-evento-pesquisa',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_evento_pesquisa_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_evento_pesquisa_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController, _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore, _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__.AngularFireDatabase, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth, _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser])], _EventoPesquisaPage);
      /***/
    },

    /***/
    90873:
    /*!***********************************!*\
      !*** ./src/app/evento.service.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventoService": function EventoService() {
          return (
            /* binding */
            _EventoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363); //import { FirebaseListObservable } from '';


      var _EventoService = /*#__PURE__*/function () {
        function EventoService(firebase, firestore, auth) {
          _classCallCheck(this, EventoService);

          this.firebase = firebase;
          this.firestore = firestore;
          this.auth = auth;
          this.dataSet = {
            nome: '',
            url: '',
            ingresso: "",
            dia: '',
            fim: '',
            local: '',
            lugar: '',
            up: [],
            userID: [],
            UPnum: 0
          };
          this.dataSet2 = {
            nome: '',
            url: '',
            ingresso: "",
            dia: '',
            fim: '',
            local: '',
            lugar: '',
            up: [],
            userID: [],
            chave2: '',
            passado: false,
            UPnum: 0
          };
          this.dataSet3 = {
            online: 'online',
            nome: '',
            url: '',
            link: '',
            dia: '',
            fim: '',
            up: [],
            userID: [],
            chave2: '',
            passado: false,
            UPnum: 0
          };
          this.dataSet4 = {
            online: 'online',
            nome: '',
            url: '',
            link: '',
            dia: '',
            fim: '',
            up: [],
            passado: false,
            userID: [],
            UPnum: 0
          };
          this.msg = 'error';
          this.eventocolection = this.firestore.collection('eventos', function (ref) {
            return ref.orderBy('up', 'desc');
          });
          this.eventocidade = this.firestore.collection('eventos', function (ref) {
            return ref.orderBy('up', 'desc').where('lugar', '==', "Brasilia");
          });
        } //this.test = this.firestore.collection<Data>('eventos' , ref => ref.where('lugar ','==' ,`${this.cidadesDoUsuario[0].item}`).orderBy('up').limit(20))


        _createClass(EventoService, [{
          key: "getImageDetailList",
          value: function getImageDetailList() {
            this.eventDetailListRealtime = this.firebase.list('eventDetails');
            this.eventDetailList = this.firestore.collection('eventos');
          }
        }, {
          key: "insertImageDetails",
          value: function insertImageDetails(nome, url, ingresso, dia, fim, local, lugar) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this19 = this;

              var res;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context22.sent;
                      this.dataSet = {
                        nome: nome,
                        url: url,
                        ingresso: ingresso,
                        dia: dia,
                        fim: fim,
                        local: local,
                        lugar: lugar,
                        up: [res.uid],
                        userID: [res.uid, res.displayName],
                        UPnum: 1
                      };
                      _context22.next = 6;
                      return this.eventDetailListRealtime.push(this.dataSet).then(function (result) {
                        console.log(result.key);
                        var chave = result.key;
                        _this19.keydb2 = chave;
                        var dataseet = _this19.dataSet;

                        _this19.firebase.database.ref("eventDetails/".concat(result.key, "/")).set({
                          chave: chave,
                          dataseet: dataseet
                        });
                      });

                    case 6:
                      this.dataSet2 = {
                        nome: nome,
                        url: url,
                        ingresso: ingresso,
                        dia: dia,
                        fim: fim,
                        local: local,
                        lugar: lugar,
                        up: [res.uid],
                        userID: [res.uid, res.displayName],
                        chave2: this.keydb2,
                        passado: false,
                        UPnum: 1
                      };
                      _context22.next = 9;
                      return this.eventDetailList.add(this.dataSet2);

                    case 9:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          } //----------------------------------------------------------------------------------------------//

        }, {
          key: "insertOnline",
          value: function insertOnline(nome, url, link, dia, fim) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var _this20 = this;

              var res;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context23.sent;
                      this.dataSet4 = {
                        online: 'online',
                        nome: nome,
                        url: url,
                        link: link,
                        dia: dia,
                        fim: fim,
                        passado: false,
                        up: [res.uid],
                        userID: [res.uid, res.displayName],
                        UPnum: 1
                      };
                      _context23.next = 6;
                      return this.eventDetailListRealtime.push(this.dataSet4).then(function (result) {
                        console.log(result.key);
                        var chave = result.key;
                        _this20.keydb2 = chave;
                        var dataseet = _this20.dataSet4;

                        _this20.firebase.database.ref("eventDetails/".concat(result.key, "/")).set({
                          chave: chave,
                          dataseet: dataseet
                        });
                      });

                    case 6:
                      this.dataSet3 = {
                        online: 'online',
                        nome: nome,
                        url: url,
                        link: link,
                        dia: dia,
                        fim: fim,
                        up: [res.uid],
                        userID: [res.uid, res.displayName],
                        chave2: this.keydb2,
                        passado: false,
                        UPnum: 1
                      };
                      _context23.next = 9;
                      return this.eventDetailList.add(this.dataSet3);

                    case 9:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "getEventos",
          value: function getEventos() {// return this.eventocolection.snapshotChanges((['added'])).pipe(
            //   map(actions => {
            //   return actions.map(a => {
            //   const data = a.payload.doc.data();
            // const id = a.payload.doc.id;
            //return { id, ...data };
            // });
            // })
            //) 
          }
        }]);

        return EventoService;
      }();

      _EventoService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase]
          }]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
        }];
      };

      _EventoService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth])], _EventoService);
      /***/
    },

    /***/
    73366:
    /*!***********************************************************!*\
      !*** ./src/app/eventomodal/eventomodal-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventomodalPageRoutingModule": function EventomodalPageRoutingModule() {
          return (
            /* binding */
            _EventomodalPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _eventomodal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./eventomodal.page */
      4268);

      var routes = [{
        path: '',
        component: _eventomodal_page__WEBPACK_IMPORTED_MODULE_0__.EventomodalPage
      }];

      var _EventomodalPageRoutingModule = /*#__PURE__*/_createClass(function EventomodalPageRoutingModule() {
        _classCallCheck(this, EventomodalPageRoutingModule);
      });

      _EventomodalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EventomodalPageRoutingModule);
      /***/
    },

    /***/
    36184:
    /*!***************************************************!*\
      !*** ./src/app/eventomodal/eventomodal.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventomodalPageModule": function EventomodalPageModule() {
          return (
            /* binding */
            _EventomodalPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _eventomodal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./eventomodal-routing.module */
      73366);
      /* harmony import */


      var _eventomodal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./eventomodal.page */
      4268);

      var _EventomodalPageModule = /*#__PURE__*/_createClass(function EventomodalPageModule() {
        _classCallCheck(this, EventomodalPageModule);
      });

      _EventomodalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _eventomodal_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventomodalPageRoutingModule],
        declarations: [_eventomodal_page__WEBPACK_IMPORTED_MODULE_1__.EventomodalPage],
        exports: [_eventomodal_page__WEBPACK_IMPORTED_MODULE_1__.EventomodalPage]
      })], _EventomodalPageModule);
      /***/
    },

    /***/
    4268:
    /*!*************************************************!*\
      !*** ./src/app/eventomodal/eventomodal.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventomodalPage": function EventomodalPage() {
          return (
            /* binding */
            _EventomodalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eventomodal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./eventomodal.page.html */
      50685);
      /* harmony import */


      var _eventomodal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./eventomodal.page.scss */
      86861);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      1331);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/app */
      27694);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);

      var _EventomodalPage = /*#__PURE__*/function () {
        function EventomodalPage(alert, router, navparams, modal, Firebase, auth, firestore, iab) {
          _classCallCheck(this, EventomodalPage);

          this.alert = alert;
          this.router = router;
          this.navparams = navparams;
          this.modal = modal;
          this.Firebase = Firebase;
          this.auth = auth;
          this.firestore = firestore;
          this.iab = iab;
          this.verdade = false;
          this.UPnum = 0;
          this.num = 30;
          this.noAuth = true;
          this.jadeuUP = false;
          this.numcoments = 0;
          this.dado = [];
          this.comentario = "";
          this.description = false;
          this.numTimesLeft = 2;
          this.ComentSet = {
            img: '',
            username: '',
            comentarioU: '',
            UID: ''
          };
        }

        _createClass(EventomodalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var res;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context24.sent;

                      if (res != null) {
                        this.iduser = res.uid;
                        this.noAuth = false;
                      }

                      this.x = this.navparams.get('customid');
                      this.lugardocomentario = this.Firebase.database.ref("coments/".concat(this.x.id));
                      this.getComent();
                      this.UPnum = this.x.UPnum;

                      if (this.x.local) {
                        this.description = true;
                      }

                      this.jaUpou();

                    case 10:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "criandomodal",
          value: function criandomodal(evento) {
            this.x = evento;
            moment__WEBPACK_IMPORTED_MODULE_3__.locale('pt-BR');
            this.m = moment__WEBPACK_IMPORTED_MODULE_3__(this.x.dia).format('ddd DD MMM');
            console.log(this.m);
            this.eventoid = evento.id;
          }
        }, {
          key: "setcoment",
          value: function setcoment() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var res;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context25.sent;

                      if (this.comentario != null && !this.comentario.trim()) {
                        this.showalert("Erro", "Digite um comentario");
                      } else {
                        this.ComentSet = {
                          img: res.photoURL,
                          username: res.displayName,
                          comentarioU: this.comentario,
                          UID: this.iduser
                        };
                        this.lugardocomentario.push(this.ComentSet);
                        this.comentario = "";
                      }

                    case 4:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "getComent",
          value: function getComent() {
            var _this21 = this;

            this.lugaresdocomentario = this.Firebase.list("coments/".concat(this.x.id), function (ref) {
              return ref.limitToFirst(_this21.num);
            });
            this.lugaresdocomentario.valueChanges().subscribe(function (data) {
              _this21.trataDados(data);
            });
          }
        }, {
          key: "UP",
          value: function UP() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var res;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      if (!(this.iduser == null)) {
                        _context26.next = 3;
                        break;
                      }

                      this.jadeuUP = true;
                      return _context26.abrupt("return", this.showAlertLogin());

                    case 3:
                      this.jadeuUP = true;
                      _context26.next = 6;
                      return this.auth.currentUser;

                    case 6:
                      res = _context26.sent;

                      if (!this.x.up.includes(this.iduser)) {
                        _context26.next = 9;
                        break;
                      }

                      return _context26.abrupt("return", this.showalert("Ops!", "Você ja deu UP nesse evento"));

                    case 9:
                      this.x.UPnum += 1;
                      this.UPnum += 1;
                      this.updateReference = this.firestore.doc("eventos/".concat(this.x.id));
                      this.updateReference.update({
                        up: firebase_app__WEBPACK_IMPORTED_MODULE_4___default().firestore.FieldValue.arrayUnion(res.uid),
                        UPnum: firebase_app__WEBPACK_IMPORTED_MODULE_4___default().firestore.FieldValue.increment(1)
                      });

                    case 13:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "jaUpou",
          value: function jaUpou() {
            if (this.x.up.includes(this.iduser)) {
              this.jadeuUP = true;
            }
          }
        }, {
          key: "comentauth",
          value: function comentauth() {
            if (this.iduser == null) {
              this.showAlertLogin();
            }
          }
        }, {
          key: "redirectmap",
          value: function redirectmap() {
            this.iab.create("https://www.google.com/maps/search/?api=1&query=".concat(this.x.local.description), '_system');
          }
        }, {
          key: "redirectlink",
          value: function redirectlink() {
            this.iab.create("".concat(this.x.ingresso), '_system');
          }
        }, {
          key: "redirectUser",
          value: function redirectUser() {
            this.close();
            this.router.navigate(['/usuario-pesquisa/' + this.x.userID[0]]);
          }
        }, {
          key: "showalert",
          value: function showalert(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var alert;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.alert.create({
                        header: header,
                        message: message,
                        buttons: ["Ok"]
                      });

                    case 2:
                      alert = _context27.sent;
                      _context27.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "trataDados",
          value: function trataDados(dados) {
            this.coments = Object.keys(dados).map(function (i) {
              return dados[i];
            }).reverse();
            this.numcoments = this.coments.length;
            this.todoscoments = this.coments;
            console.log(this.todoscoments, 'foi');
          }
        }, {
          key: "showAlertLogin",
          value: function showAlertLogin() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var _this22 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return this.alert.create({
                        header: 'Ops!',
                        message: 'Crie ou entre em uma conta para usar ups e comentários.',
                        buttons: [{
                          text: 'Criar / Entrar',
                          handler: function handler() {
                            _this22.router.navigate(['/criar-user']);

                            _this22.close();
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            console.log('Confirm Okay');
                          }
                        }]
                      });

                    case 2:
                      alert = _context28.sent;
                      _context28.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "loadcoments",
          value: function loadcoments(event) {
            this.num = this.num + 60;
            this.numTimesLeft -= 1;
            this.getComent();
            this.content.scrollToBottom();
            event.target.complete();
          }
        }, {
          key: "page",
          value: function page(kdcoment) {
            this.userIDCOMENT = kdcoment.UID;
            this.close();
            this.router.navigate(['/usuario-pesquisa/' + this.userIDCOMENT]);
          }
        }, {
          key: "close",
          value: function close() {
            this.modal.dismiss();
          }
        }, {
          key: "Compartilhar",
          value: function Compartilhar() {
            this.router.navigate(['/share/' + this.x.chave2]);
            this.close();
          }
        }]);

        return EventomodalPage;
      }();

      _EventomodalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__.AngularFireDatabase
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser
        }];
      };

      _EventomodalPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, {
            "static": true
          }]
        }]
      };
      _EventomodalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-eventomodal',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eventomodal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_eventomodal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController, _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController, _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__.AngularFireDatabase, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser])], _EventomodalPage);
      /***/
    },

    /***/
    19979:
    /*!*********************************************************************!*\
      !*** ./src/app/eventos-do-usuario/proximo-evento-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProximoEventoPageRoutingModule": function ProximoEventoPageRoutingModule() {
          return (
            /* binding */
            _ProximoEventoPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _proximo_evento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./proximo-evento.page */
      84376);

      var routes = [{
        path: '',
        component: _proximo_evento_page__WEBPACK_IMPORTED_MODULE_0__.ProximoEventoPage
      }];

      var _ProximoEventoPageRoutingModule = /*#__PURE__*/_createClass(function ProximoEventoPageRoutingModule() {
        _classCallCheck(this, ProximoEventoPageRoutingModule);
      });

      _ProximoEventoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProximoEventoPageRoutingModule);
      /***/
    },

    /***/
    95323:
    /*!*************************************************************!*\
      !*** ./src/app/eventos-do-usuario/proximo-evento.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProximoEventoPageModule": function ProximoEventoPageModule() {
          return (
            /* binding */
            _ProximoEventoPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _proximo_evento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./proximo-evento-routing.module */
      19979);
      /* harmony import */


      var _proximo_evento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./proximo-evento.page */
      84376);

      var _ProximoEventoPageModule = /*#__PURE__*/_createClass(function ProximoEventoPageModule() {
        _classCallCheck(this, ProximoEventoPageModule);
      });

      _ProximoEventoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _proximo_evento_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProximoEventoPageRoutingModule],
        declarations: [_proximo_evento_page__WEBPACK_IMPORTED_MODULE_1__.ProximoEventoPage],
        exports: [_proximo_evento_page__WEBPACK_IMPORTED_MODULE_1__.ProximoEventoPage]
      })], _ProximoEventoPageModule);
      /***/
    },

    /***/
    84376:
    /*!***********************************************************!*\
      !*** ./src/app/eventos-do-usuario/proximo-evento.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProximoEventoPage": function ProximoEventoPage() {
          return (
            /* binding */
            _ProximoEventoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_proximo_evento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./proximo-evento.page.html */
      38996);
      /* harmony import */


      var _proximo_evento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./proximo-evento.page.scss */
      68617);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      33927);

      var _ProximoEventoPage = /*#__PURE__*/function () {
        function ProximoEventoPage(auth, firestore, firebase) {
          _classCallCheck(this, ProximoEventoPage);

          this.auth = auth;
          this.firestore = firestore;
          this.firebase = firebase;
          this.criados = new Array();
          this.ups = new Array();
        }

        _createClass(ProximoEventoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var _this23 = this;

              var res;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context29.sent;
                      console.log(res.uid);
                      this.listadecriados(res.uid).subscribe(function (data) {
                        _this23.criados = data;
                      });

                    case 5:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "listadecriados",
          value: function listadecriados(cria) {
            //console.log(cria)
            this.eventocriado = this.firestore.collection('eventos', function (ref) {
              return ref.where('userID', '==', "".concat(cria));
            });
            return this.eventocriado.snapshotChanges(['added']).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                return Object.assign({}, data);
              });
            }));
          }
        }, {
          key: "delete",
          value: function _delete(evento) {
            this.firestore.collection("eventos").doc("".concat(evento.id))["delete"]().then(function () {
              console.log("Document successfully deleted!");
            });
            this.firebase.database.ref("eventDetails/".concat(evento.chave2)).remove();
            console.log(evento.id);
          }
        }]);

        return ProximoEventoPage;
      }();

      _ProximoEventoPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase
        }];
      };

      _ProximoEventoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-proximo-evento',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_proximo_evento_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_proximo_evento_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore, _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase])], _ProximoEventoPage);
      /***/
    },

    /***/
    91416:
    /*!*****************************!*\
      !*** ./src/app/firebase.ts ***!
      \*****************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });

      var _environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyDyDuNFJVPzYBLP-kEXrncANN9LyDUQeKc",
          authDomain: "oreon-4bfc2.firebaseapp.com",
          databaseURL: "https://oreon-4bfc2.firebaseio.com",
          projectId: "oreon-4bfc2",
          storageBucket: "oreon-4bfc2.appspot.com",
          messagingSenderId: "373924502179",
          appId: "1:373924502179:web:febb65430787c34e4b7d16",
          measurementId: "G-PJNS85YMGR"
        }
      };
      /***/
    },

    /***/
    3467:
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);

      var _HomePageModule = /*#__PURE__*/_createClass(function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      });

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
          path: '',
          component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
        }])],
        exports: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage],
        entryComponents: []
      })], _HomePageModule);
      /***/
    },

    /***/
    62267:
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */
      12056);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      18847);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _evento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../evento.service */
      90873);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../eventomodal/eventomodal.page */
      4268);
      /* harmony import */


      var _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../eventos-do-usuario/proximo-evento.page */
      84376);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../selective-loading-strategy.service */
      79713);
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../login/login.page */
      66825);
      /* harmony import */


      var _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../criar-user/criar-user.page */
      81185);
      /* harmony import */


      var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/background-mode/ngx */
      25998);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../user.service */
      92785);
      /* harmony import */


      var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../tutorial/tutorial.page */
      11579); //import * as firebase from 'firebase/firestore/bundle';


      var _HomePage = /*#__PURE__*/function () {
        // public keys : Array<object> = [];
        function HomePage(alertCtrl, login, UserSe, eventModal, modalCtrl, firebase, firestore, service, authh, criaruserpage, proxevent, tutorial, route, SimpleLoad, backgroundMode) {
          _classCallCheck(this, HomePage);

          this.alertCtrl = alertCtrl;
          this.login = login;
          this.UserSe = UserSe;
          this.eventModal = eventModal;
          this.modalCtrl = modalCtrl;
          this.firebase = firebase;
          this.firestore = firestore;
          this.service = service;
          this.authh = authh;
          this.criaruserpage = criaruserpage;
          this.proxevent = proxevent;
          this.tutorial = tutorial;
          this.route = route;
          this.SimpleLoad = SimpleLoad;
          this.backgroundMode = backgroundMode;
          this._cidade = "";
          this.hjdia = new Date().toISOString();
          this.proximoseventos = [];
          this.day = true;
          this.numTimesLeft = 10;
          this.num = 10;
          this.cidade2 = new Array();
          this.cidade3 = new Array();
          this.online = new Array();
          this.onlines = new Array();
          this.nacional = new Array();
          this.nacionais = new Array();
          this.cidade = new Array(); //postkey : AngularFireList<string>;

          this.Upboolean = true;
          this.escolhaNoAuth = " Cidade ";
          this.ordenarpor = false;
          this.noAuth = false;
          this.y = new Array();
          this.z = new Array();
          this.w = new Array();
          this.aloha = '';
          this.number = 0;
          console.log(this.hjdia);
          this.backgroundMode.disable(); // this.eventosSubscription = this.service.getEventos().subscribe(data => {
          //this.eventos = data;
          // for (const index in this.eventos) {
          //moment.locale('pt-BR')
          //this.m = moment(this.eventos[index].dia).format('ddd DD MMM ')
          //this.eventos[index].dia = this.m
          // }
          //})
        }

        _createClass(HomePage, [{
          key: "nextcity",
          value: function nextcity() {
            this.slides.slideNext(800);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.SimpleLoad.preloadRoute('/pesquisar');

                    case 2:
                      _context30.next = 4;
                      return this.SimpleLoad.preloadRoute('/perfil');

                    case 4:
                      console.log("did enter __________________");

                    case 5:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      this.cidade3 = new Array(); //2° da cidade

                      this.online = new Array(); //1° do online

                      this.onlines = new Array(); //2° do online

                      this.nacional = new Array(); //2° -> do nacional

                      this.nacionais = new Array(); //1° -> dos nacionais

                      this.cidade = new Array(); //1° -> cidade

                      this.showeventos(); // eventos  msm com user deslogado 

                      this.showDacidade(); // ARRUMAR BUSCA NO NACIONAL (ESTA MOSTRANDO OS EVENTOS ONLINE TB)

                    case 8:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "ss",
          value: function ss() {
            this.nextcity();
          }
        }, {
          key: "showeventos",
          value: function showeventos() {
            var _this24 = this;

            this.authh.onAuthStateChanged(function (user) {
              if (user) {
                _this24.firestore.collection("users", function (ref) {
                  return ref.where('iduser', '==', "".concat(user.uid));
                }).get().subscribe(function (using) {
                  using.forEach(function (io) {
                    var order = io.data();
                    var o = order.UP;
                    _this24.ordenarpor = o;
                    console.log(_this24.ordenarpor);

                    if (_this24.nacionais.length == 0) {
                      _this24.eventosNacional = _this24.listanacional(); //  ->  Nacional segment

                      _this24.nacionais = _this24.w;
                      console.log(_this24.nacionais, "--nacionais");

                      if (_this24.online.length == 0) {
                        _this24.eventosOnline = _this24.listaonline();
                        _this24.online = _this24.z; //  ->  online segment  
                      }
                    }
                  });
                });
              } else {
                if (_this24.nacionais.length == 0) {
                  _this24.eventosNacional = _this24.listanacional(); //  ->  Nacional segment

                  _this24.nacionais = _this24.w;
                }

                if (_this24.online.length == 0) {
                  _this24.eventosOnline = _this24.listaonline();
                  _this24.online = _this24.z; //  ->  online segment  
                }
              }
            });
          }
        }, {
          key: "showDacidade",
          value: function showDacidade() {
            var _this25 = this;

            this.authh.onAuthStateChanged(function (user) {
              if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                var res = user;
                console.log("logado por aqui");

                _this25.getcidadade(uid).subscribe(function (cit) {
                  _this25.lugar = cit;

                  if (_this25.lugar) {
                    console.log(_this25.lugar);
                    _this25.cidadesDoUsuario = _this25.lugar;

                    _this25.cidadedoUSER(_this25.cidadesDoUsuario);
                  } // -> Cidade do usuario e Cidade segment

                });

                if (res.emailVerified == false) {
                  console.log(res.emailVerified, "emailverified");

                  _this25.criaruserpage.showalert("Ops você já criou uma conta ", "Mas não clickou no link que enviamos, verifique e volte ");

                  _this25.login.enviaremaildeverific();
                } // ...

              } else {
                _this25.AuthstateDeslogado();
              }
            });
          }
        }, {
          key: "AuthstateLogado",
          value: function AuthstateLogado(user) {
            var res = user;
            this.iduser = res;
            console.log("authstatelogado", res.uid);
          }
        }, {
          key: "AuthstateDeslogado",
          value: function AuthstateDeslogado() {
            this.getDataFromFire();
            this.noAuth = true;
          }
        }, {
          key: "getDataFromFire",
          value: function getDataFromFire() {
            var _this26 = this;

            this.firebase.list('cidades').valueChanges().subscribe(function (data) {
              _this26.trataDados(data);
            });
          }
        }, {
          key: "noAuth_cidade",
          value: function noAuth_cidade(item) {
            this.abriu();
            this.mudouacidade(item);
            this.escolhaNoAuth = item;
          }
        }, {
          key: "trataDados",
          value: function trataDados(dados) {
            this.items = Object.keys(dados).map(function (i) {
              return dados[i];
            });
            this.todositems = this.items;
          }
        }, {
          key: "abriu",
          value: function abriu() {
            this.abrir = !this.abrir;
          }
        }, {
          key: "getItems",
          value: function getItems(ev) {
            // Reset items back to all of the items
            this.todositems = this.items;
            this.allitems = this.todositems;
            var val = ev.target.value;
            console.log(this.todositems);

            if (val && val.trim() != '') {
              this.todositems = lodash__WEBPACK_IMPORTED_MODULE_10___default().values(this.allitems);
              this.todositems = this.todositems.filter(function (_cidade) {
                return _cidade.lugar.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            } else {
              this.todositems = this.allitems;
            }
          }
        }, {
          key: "perfil",
          value: function perfil() {
            this.scrollTop();

            if (this.cidadesDoUsuario) {
              this.eventosdacidade.unsubscribe();
            }

            this.eventosNacional.unsubscribe();
            this.eventosOnline.unsubscribe();

            if (this.eventosdacidade2) {
              this.eventosdacidade2.unsubscribe();
            }

            if (this.eventosOnline2) {
              this.eventosOnline2.unsubscribe();
            }

            if (this.eventosNacional2) {
              this.eventosNacional2.unsubscribe();
            }

            this.route.navigate(['/perfil']);
          }
        }, {
          key: "scrollTop",
          value: function scrollTop() {
            this.content.scrollToTop(300);
          }
        }, {
          key: "dadosperfil",
          value: function dadosperfil() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var res;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.authh.currentUser;

                    case 2:
                      res = _context32.sent;

                      if (!(res != null)) {
                        _context32.next = 8;
                        break;
                      }

                      this.getcidadade(res.uid);
                      return _context32.abrupt("return", false);

                    case 8:
                      return _context32.abrupt("return", true);

                    case 9:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "getData",
          value: function getData(data) {
            var events = data.val(); //  console.log(events)
          }
        }, {
          key: "showmodal",
          value: function showmodal(zeta) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var modal;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.modalCtrl.create({
                        component: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_3__.EventomodalPage,
                        componentProps: {
                          customid: zeta
                        }
                      });

                    case 2:
                      modal = _context33.sent;
                      modal.present();
                      ;
                      this.eventModal.criandomodal(zeta);

                    case 6:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "mudouacidade",
          value: function mudouacidade(item) {
            this.cidade = [];
            this.y = [];
            this.cidade3 = [];
            console.log(this.cidade, "mudou a cidade", item);
            this.cidadedoUSER(item); //console.log(this.cidade ,"mudou a cidade", this.cidade3)
          } // função eventos de up por dia hoje  só no Oreon V2
          //  async presentActionSheet() {
          //  const actionSheet = await this.actionSheetCtrl.create({ // botão "Oreon"
          //  header: 'Filtro',
          // cssClass: 'my-custom-class',
          // buttons: [
          //  {
          //text: 'Criar Evento', // -> cirar evento 
          //icon: 'add',
          // handler: () => {
          //   this.route.navigate(['/add'])
          // }
          //}, {
          //text: 'Cancel',
          //icon: 'close',
          //role: 'cancel',
          // handler: () => {
          // console.log('Cancel clicked');
          // }
          //}]
          //});
          //await actionSheet.present();
          //}

        }, {
          key: "getcidadade",
          value: function getcidadade(user) {
            var _this27 = this;

            console.log("getcidade");
            this.userDOC = this.firestore.collection("users", function (ref) {
              return ref.where('iduser', '==', "".concat(user));
            });
            return this.userDOC.snapshotChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (actions) {
              return actions.map(function (use) {
                var data = use.payload.doc.data().cidade;
                var order = use.payload.doc.data().UP;
                _this27.ordenarpor = order;

                if (_this27.ordenarpor == null) {
                  _this27.ordenarpor = false;
                } //this.eventosNacional = this.listanacional()
                // this.nacionais = this.w
                //this.eventosOnline = this.listaonline()
                //this.online = this.z
                //console.log(this.ordenarpor ," ----------------------")
                //console.log(this.nacionais.length == 0)


                return data;
              });
            }));
          }
        }, {
          key: "cidadedoUSER",
          value: function cidadedoUSER(dados) {
            this.cidade3 = [];
            this.lugarsin = dados;

            if (this.cidade.length == 0 && this.y.length == 0) {
              this.eventosdacidade = this.listadaciadade(dados); //((data) => { // evento service -> get cidade do usuario 

              this.cidade = this.y;
            }
          }
        }, {
          key: "listadaciadade",
          value: function listadaciadade(x) {
            var _this28 = this;

            if (this.ordenarpor == true) {
              this.eventocidade = this.firestore.collection('eventos', function (ref) {
                return ref.where('lugar', '==', "".concat(x)).where('passado', '==', false).orderBy('dia', 'asc').limit(3);
              });
            }

            if (this.ordenarpor == false) {
              this.eventocidade = this.firestore.collection('eventos', function (ref) {
                return ref.where('lugar', '==', "".concat(x)).where('passado', '==', false).orderBy('UPnum', 'desc').limit(3);
              });
            }

            return this.eventocidade.get().subscribe(function (coisas) {
              coisas.forEach(function (b) {
                var data = b.data();
                var id = b.id;

                if (data.fim < _this28.hjdia) {
                  //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                  _this28.passadostate = _this28.firestore.doc("eventos/".concat(id));

                  _this28.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this28.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this28.m;
                _this28.provCid1 = Object.assign({
                  id: id
                }, data);

                _this28.y.push(_this28.provCid1);

                _this28.nextQueryAfter = b;
              });
            });
          }
        }, {
          key: "listaonline",
          value: function listaonline() {
            var _this29 = this;

            if (this.ordenarpor == true) {
              this.eventoOnline = this.firestore.collection('eventos', function (ref) {
                return ref.where('online', '==', "online").where('passado', '==', false).orderBy('dia', 'asc').limit(2);
              });
            }

            if (this.ordenarpor == false) {
              this.eventoOnline = this.firestore.collection('eventos', function (ref) {
                return ref.where('online', '==', "online").where('passado', '==', false).orderBy('UPnum', 'desc').limit(2);
              });
            }

            return this.eventoOnline.get().subscribe(function (coisas) {
              coisas.forEach(function (o) {
                var data = o.data();
                var id = o.id;

                if (data.fim < _this29.hjdia) {
                  //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                  _this29.passadostate = _this29.firestore.doc("eventos/".concat(id));

                  _this29.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this29.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this29.m;
                _this29.provOnl1 = Object.assign({
                  id: id
                }, data);

                _this29.z.push(_this29.provOnl1);

                _this29.nextQueryOnline = o;
              });
            });
          }
        }, {
          key: "tamanho",
          value: function tamanho() {
            if (this.nacionais.length == 4) {
              console.log("TAMANHO LENGHT ->", this.nacionais.length, this.nacionais);
            }

            if (this.nacionais.length == 2) {
              console.log("esse", this.iduser);
              this.getcidadade(this.iduser);
            }
          }
        }, {
          key: "listanacional",
          value: function listanacional() {
            var _this30 = this;

            console.log(this.ordenarpor, "na nacional");

            if (this.ordenarpor == true) {
              //console.log("true")
              this.eventoNacional = this.firestore.collection('eventos', function (ref) {
                return ref.where('passado', '==', false).orderBy('dia', 'asc').limit(3);
              });
            }

            if (this.ordenarpor == false) {
              //console.log("false")
              this.eventoNacional = this.firestore.collection('eventos', function (ref) {
                return ref.where('passado', '==', false).orderBy('UPnum', 'desc').limit(3);
              });
            }

            return this.eventoNacional.get().subscribe(function (coisas) {
              coisas.forEach(function (n) {
                var data = n.data();
                var id = n.id;

                if (data.fim < _this30.hjdia) {
                  console.log(data.fim, " menor que ", _this30.hjdia); // checar se data do  evento esta no futuro

                  _this30.passadostate = _this30.firestore.doc("eventos/".concat(id));

                  _this30.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this30.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this30.m;
                _this30.provNac1 = Object.assign({
                  id: id
                }, data);

                _this30.w.push(_this30.provNac1);

                _this30.nextQuerynacional = n;
              });
            });
          }
        }, {
          key: "loadcidade",
          value: function loadcidade(event) {
            var _this31 = this;

            setTimeout(function () {
              _this31.num = 2;

              if (_this31.cidade.length >= 1) {
                _this31.eventosdacidade2 = _this31.listadaciadade2(_this31.cidadesDoUsuario);
              }

              event.target.complete(); //console.log(this.cidade3, "cidade3")
            }, 2000);
          }
        }, {
          key: "loadnacional",
          value: function loadnacional(event) {
            var _this32 = this;

            setTimeout(function () {
              //console.log("chamei ele veio");
              _this32.num = 2;

              if (_this32.nacionais.length >= 1) {
                _this32.eventosNacional2 = _this32.listanacional2();
              }

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "loadOnline",
          value: function loadOnline(event) {
            var _this33 = this;

            // scroll down (Online)
            setTimeout(function () {
              //console.log();
              _this33.num = 2;

              if (_this33.online.length >= 1) {
                _this33.eventosOnline2 = _this33.listaonline2();
              }

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "listadaciadade2",
          value: function listadaciadade2(x) {
            var _this34 = this;

            if (this.ordenarpor == true) {
              this.eventocidade = this.firestore.collection('eventos', function (ref) {
                return ref.where('lugar', '==', "".concat(x)).where('passado', '==', false).orderBy('dia', 'asc').startAfter(_this34.nextQueryAfter).limit(3);
              });
            }

            if (this.ordenarpor == false) {
              this.eventocidade = this.firestore.collection('eventos', function (ref) {
                return ref.where('lugar', '==', "".concat(x)).where('passado', '==', false).orderBy('UPnum', 'desc').startAfter(_this34.nextQueryAfter).limit(3);
              });
            }

            return this.eventocidade.get().subscribe(function (city) {
              city.forEach(function (a) {
                var data = a.data();
                var id = a.id;

                if (data.fim < _this34.hjdia) {
                  //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                  _this34.passadostate = _this34.firestore.doc("eventos/".concat(id));

                  _this34.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this34.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm'); // passa data para o Português

                data.dia = _this34.m;
                _this34.nextQueryAfter = a; // ultimo evento para o infinite scroll

                _this34.conjunto = Object.assign({
                  id: id
                }, data);

                _this34.cidade3.push(_this34.conjunto);

                var numeros = _this34.cidade3; // concertar o bug da repetição 

                var uniqueAddresses = Array.from(new Set(numeros.map(function (a) {
                  return a.id;
                }))).map(function (id) {
                  return numeros.find(function (a) {
                    return a.id === id;
                  });
                }); //não repete eventos (bug)

                _this34.cidade3 = uniqueAddresses;
                return Object.assign({
                  id: id
                }, data);
              });
            });
          }
        }, {
          key: "listanacional2",
          value: function listanacional2() {
            var _this35 = this;

            //console.log("nacional chamado")
            if (this.ordenarpor == true) {
              this.eventoNacional = this.firestore.collection('eventos', function (ref) {
                return ref.where('passado', '==', false).orderBy('dia', 'asc').startAfter(_this35.nextQuerynacional).limit(3);
              });
            }

            if (this.ordenarpor == false) {
              this.eventoNacional = this.firestore.collection('eventos', function (ref) {
                return ref.where('passado', '==', false).orderBy('UPnum', 'desc').startAfter(_this35.nextQuerynacional).limit(3);
              });
            }

            return this.eventoNacional.get().subscribe(function (ncaionais2) {
              ncaionais2.forEach(function (a) {
                var data = a.data();
                var id = a.id;

                if (data.fim < _this35.hjdia) {
                  // checar se data do  evento esta no futuro
                  _this35.passadostate = _this35.firestore.doc("eventos/".concat(id));

                  _this35.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this35.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm'); // passa data para o Português

                data.dia = _this35.m;
                _this35.nextQuerynacional = a; // ultimo evento para o infinite scroll

                _this35.conjuntoNac = Object.assign({
                  id: id
                }, data);

                _this35.nacional.push(_this35.conjuntoNac);

                var numeross = _this35.nacional; // concertar o bug da repetição 

                var uniqueAddressesNac = Array.from(new Set(numeross.map(function (a) {
                  return a.id;
                }))).map(function (id) {
                  return numeross.find(function (a) {
                    return a.id === id;
                  });
                }); //não repete eventos (bug)

                _this35.nacional = uniqueAddressesNac; //console.log(this.nacional)

                return Object.assign({
                  id: id
                }, data);
              });
            });
          }
        }, {
          key: "ajuda",
          value: function ajuda() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              var modal;
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.modalCtrl.create({
                        component: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_12__.TutorialPage,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context34.sent;
                      modal.present();
                      ;

                    case 5:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "listaonline2",
          value: function listaonline2() {
            var _this36 = this;

            if (this.ordenarpor == true) {
              this.eventoOnline = this.firestore.collection('eventos', function (ref) {
                return ref.where('online', '==', 'online').where('passado', '==', false).orderBy('dia', 'asc').startAfter(_this36.nextQueryOnline).limit(3);
              });
            }

            if (this.ordenarpor == false) {
              this.eventoOnline = this.firestore.collection('eventos', function (ref) {
                return ref.where('online', '==', 'online').where('passado', '==', false).orderBy('UPnum', 'desc').startAfter(_this36.nextQueryOnline).limit(3);
              });
            }

            return this.eventoOnline.get().subscribe(function (onlines) {
              onlines.forEach(function (t) {
                var data = t.data();
                var id = t.id;

                if (data.fim < _this36.hjdia) {
                  // checar se data do  evento esta no futuro
                  _this36.passadostate = _this36.firestore.doc("eventos/".concat(id));

                  _this36.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this36.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm'); // passa data para o Português

                data.dia = _this36.m;
                _this36.nextQueryOnline = t; // ultimo evento para o infinite scroll

                _this36.conjuntoOnl = Object.assign({
                  id: id
                }, data);

                _this36.onlines.push(_this36.conjuntoOnl);

                var nume = _this36.onlines; // concertar o bug da repetição 

                var uniqueAddressesOnl = Array.from(new Set(nume.map(function (ad) {
                  return ad.id;
                }))).map(function (id) {
                  return nume.find(function (yd) {
                    return yd.id === id;
                  });
                }); //não repete eventos (bug)

                _this36.onlines = uniqueAddressesOnl;
                return Object.assign({
                  id: id
                }, data);
              });
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          } //ORDENAR SEM TAR LOGADO (DIA/UP)
          //async optionsNoAuth(){
          // const alert = await this.alertCtrl.create({
          //  cssClass: 'my-custom-class',
          // header: 'Ajuste de Listas',
          // message: 'Deseja ordenar os eventos por',
          // buttons: [
          //  {
          //   text: 'Dia',
          //  role: 'cancel',
          //   cssClass: 'secondary',
          //  handler: () => {
          //    console.log("dia")
          //   this.ordenarpor = true
          //     this.ngOnInit()           
          //  }
          //     },
          //   {
          //   text: 'Up',
          // role: 'cancel',
          //   cssClass: 'secondary',
          //     handler: () => {
          //         this.ordenarpor = true
          //   console.log("up")
          //  this.ngOnInit()
          //  }
          // }, {
          //   text: 'Cancelar',
          //    handler: () => {
          // console.log('Confirm Okay');
          // }
          // }
          // ]
          // });
          //   await alert.present();
          // }
          //hoje(x) { // refeito precisa ser 
          //this.eventodehoje = this.firestore.collection('eventos', ref => ref
          // .where('lugar', '==', `${x}`).where('passado', '==', false)
          // .where('dia', '>=', `${this.hjdia}`)
          //.orderBy('dia')
          //.orderBy('up')
          //.startAfter(this.nextQueryAfter.payload.doc)
          //.limit(1))
          // return this.eventodehoje.snapshotChanges(['added']).pipe(
          //  map(actions => {
          //  return actions.map(a => {
          //  const data = a.payload.doc.data();
          //const id = a.payload.doc.id;
          // if (data.dia < this.hjdia) {
          //  this.passadostate = this.firestore.doc(`eventos/${id}`)
          // this.passadostate.update({
          //  passado: true
          //})
          //}
          // moment.locale('pt-BR')
          //  this.m = moment(data.dia).format('ddd DD MMM ')
          //    data.dia = this.m
          //      this.nextQueryAfter = a
          //this.conjunto = { id, ...data }
          // this.cidade3.push(this.conjunto)
          //   return { id, ...data };
          //   })
          //    })
          // )
          //  }

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('_________________destruiu home ______________'); // concertando bug troca de ordem

            this.cidade3 = new Array(); //2° da cidade

            this.online = new Array(); //1° do online

            this.onlines = new Array(); //2° do online

            this.nacional = new Array(); //2° -> do nacional

            this.nacionais = new Array(); //1° -> dos nacionais

            this.cidade = new Array(); //1° -> cidade

            this.y = new Array();
            this.z = new Array();
            this.w = new Array();
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
        }, {
          type: _login_login_page__WEBPACK_IMPORTED_MODULE_7__.LoginPage
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_11__.UserService
        }, {
          type: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_3__.EventomodalPage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__.AngularFireDatabase
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestore
        }, {
          type: _evento_service__WEBPACK_IMPORTED_MODULE_2__.EventoService
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.AngularFireAuth
        }, {
          type: _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_8__.CriarUserPage
        }, {
          type: _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_4__.ProximoEventoPage
        }, {
          type: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_12__.TutorialPage
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router
        }, {
          type: _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_6__.SimpleLoadingStrategy
        }, {
          type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_9__.BackgroundMode
        }];
      };

      _HomePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChildren,
          args: ['SwipedTabsSlider']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, {
            "static": true
          }]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChildren,
          args: ['slides']
        }]
      };
      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-home',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController, _login_login_page__WEBPACK_IMPORTED_MODULE_7__.LoginPage, _user_service__WEBPACK_IMPORTED_MODULE_11__.UserService, _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_3__.EventomodalPage, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController, _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__.AngularFireDatabase, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestore, _evento_service__WEBPACK_IMPORTED_MODULE_2__.EventoService, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.AngularFireAuth, _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_8__.CriarUserPage, _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_4__.ProximoEventoPage, _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_12__.TutorialPage, _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router, _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_6__.SimpleLoadingStrategy, _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_9__.BackgroundMode])], _HomePage);
      /***/
    },

    /***/
    66825:
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */
      99403);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      59006);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user.service */
      92785);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      147);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase */
      38881);
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(afauth, alertController, router, loadingC, user, google, firestore, afdatabase) {
          _classCallCheck(this, LoginPage);

          this.afauth = afauth;
          this.alertController = alertController;
          this.router = router;
          this.loadingC = loadingC;
          this.user = user;
          this.google = google;
          this.firestore = firestore;
          this.afdatabase = afdatabase;
          this.email = "";
          this.password = "";
          this.emailrecu = "";
          this.abrir = false;
          this.temqverificar = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.next = 2;
                      return this.loadingC.create({
                        cssClass: 'my-custom-class',
                        message: 'Espere um momento...'
                      });

                    case 2:
                      this.loading = _context35.sent;
                      _context35.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "login",
          value: function login() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var email, password, res;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      this.presentLoading();
                      email = this.email, password = this.password;
                      _context36.prev = 2;
                      _context36.next = 5;
                      return this.user.login(email, password);

                    case 5:
                      res = _context36.sent;

                      if (res.user) {
                        this.user.setUser({
                          username: res.user.displayName,
                          uid: res.user.uid,
                          foto: res.user.photoURL
                        });
                        this.showalert('', 'Login com sucesso');
                        this.router.navigate(['./home']);
                        this.email = "";
                        this.password = "";
                      }

                      _context36.next = 21;
                      break;

                    case 9:
                      _context36.prev = 9;
                      _context36.t0 = _context36["catch"](2);

                      if (!(_context36.t0.code == "auth/invalid-password")) {
                        _context36.next = 14;
                        break;
                      }

                      this.loadingC.dismiss();
                      return _context36.abrupt("return", this.showalert("Erro", "Senha errada"));

                    case 14:
                      if (!(_context36.t0.code == "auth/user-not-found")) {
                        _context36.next = 19;
                        break;
                      }

                      this.loadingC.dismiss();
                      return _context36.abrupt("return", this.showalert("Erro", "Usuario não encontrado."));

                    case 19:
                      this.loadingC.dismiss();
                      return _context36.abrupt("return", this.showalert(_context36.t0.code, _context36.t0.message));

                    case 21:
                      this.loadingC.dismiss();

                    case 22:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this, [[2, 9]]);
            }));
          }
        }, {
          key: "abriu",
          value: function abriu() {
            this.abrir = !this.abrir;
          }
        }, {
          key: "voltar",
          value: function voltar() {
            this.router.navigate(['./criar-user']);
          }
        }, {
          key: "enviar",
          value: function enviar() {
            var _this37 = this;

            var auth = this.afauth;
            auth.sendPasswordResetEmail(this.emailrecu)["catch"](function (error) {
              return _this37.showalert("Erro", error);
            });
            this.showalert("Email enviado!", "cheque lixo/spam");
          }
        }, {
          key: "showalert",
          value: function showalert(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var alert;
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      _context37.next = 2;
                      return this.alertController.create({
                        header: header,
                        message: message,
                        buttons: ["Ok"]
                      });

                    case 2:
                      alert = _context37.sent;
                      _context37.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "emailverificado",
          value: function emailverificado() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              var foi;
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      _context38.next = 2;
                      return this.afauth.currentUser;

                    case 2:
                      foi = _context38.sent.emailVerified;
                      console.log(foi);

                    case 4:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "enviaremaildeverific",
          value: function enviaremaildeverific() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      _context39.next = 2;
                      return this.afauth.currentUser;

                    case 2:
                      _context39.sent.sendEmailVerification();

                      this.temqverificar = true;
                      this.emailverificado();

                    case 5:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          }
        }, {
          key: "loginGooglecom",
          value: function loginGooglecom() {
            var _this38 = this;

            this.LoginGoogle().then(function () {
              //const res =  this.Afauth.currentUser
              _this38.presentLoading();

              _this38.mostraale();
            })["catch"](function (err) {
              _this38.showalert("erro", err);
            });
          }
        }, {
          key: "LoginGoogle",
          value: function LoginGoogle() {
            var _this39 = this;

            return this.google.login({}).then(function (result) {
              var user_data_google = result;
              return _this39.afauth.signInWithCredential(firebase__WEBPACK_IMPORTED_MODULE_4__.auth.GoogleAuthProvider.credential(null, user_data_google.accesToken));
            });
          }
        }, {
          key: "mostraale",
          value: function mostraale() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              var _this40 = this;

              var res;
              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.next = 2;
                      return this.afauth.currentUser;

                    case 2:
                      res = _context40.sent;
                      this.firestore.collection('users', function (ref) {
                        return ref.where('iduser', '==', "".concat(res.uid));
                      }).snapshotChanges().subscribe(function (usergg) {
                        if (usergg.length > 0) {
                          _this40.loadingC.dismiss();

                          _this40.router.navigate(['/home']);

                          _this40.showalert('', 'Login com sucesso');
                        } else {
                          var username = "Usuario";
                          var imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18";
                          var iduser = res.uid; //display name ja existe

                          _this40.firestore.collection("users").doc("".concat(res.uid)).set({
                            username: username,
                            iduser: iduser,
                            imgUser: imgUser
                          });

                          _this40.afdatabase.database.ref("users/".concat(res.uid, "/username")).set({
                            username: username,
                            iduser: iduser,
                            imgUser: imgUser
                          });

                          _this40.router.navigate(['/home']);

                          _this40.loadingC.dismiss();
                        }
                      });

                    case 4:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__.AngularFireDatabase
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-login',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController, _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController, _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService, _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore, _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__.AngularFireDatabase])], _LoginPage); //ae

      /***/
    },

    /***/
    83690:
    /*!***********************************************************!*\
      !*** ./src/app/novo-evento/novo-evento-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NovoEventoPageRoutingModule": function NovoEventoPageRoutingModule() {
          return (
            /* binding */
            _NovoEventoPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _novo_evento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./novo-evento.page */
      12403);

      var routes = [{
        path: '',
        component: _novo_evento_page__WEBPACK_IMPORTED_MODULE_0__.NovoEventoPage
      }];

      var _NovoEventoPageRoutingModule = /*#__PURE__*/_createClass(function NovoEventoPageRoutingModule() {
        _classCallCheck(this, NovoEventoPageRoutingModule);
      });

      _NovoEventoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NovoEventoPageRoutingModule);
      /***/
    },

    /***/
    85182:
    /*!***************************************************!*\
      !*** ./src/app/novo-evento/novo-evento.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NovoEventoPageModule": function NovoEventoPageModule() {
          return (
            /* binding */
            _NovoEventoPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _novo_evento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./novo-evento-routing.module */
      83690);
      /* harmony import */


      var _novo_evento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./novo-evento.page */
      12403);

      var _NovoEventoPageModule = /*#__PURE__*/_createClass(function NovoEventoPageModule() {
        _classCallCheck(this, NovoEventoPageModule);
      });

      _NovoEventoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _novo_evento_routing_module__WEBPACK_IMPORTED_MODULE_0__.NovoEventoPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_novo_evento_page__WEBPACK_IMPORTED_MODULE_1__.NovoEventoPage]
      })], _NovoEventoPageModule);
      /***/
    },

    /***/
    12403:
    /*!*************************************************!*\
      !*** ./src/app/novo-evento/novo-evento.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NovoEventoPage": function NovoEventoPage() {
          return (
            /* binding */
            _NovoEventoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_novo_evento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./novo-evento.page.html */
      95457);
      /* harmony import */


      var _novo_evento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./novo-evento.page.scss */
      47805);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/storage */
      26776);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      71435);
      /* harmony import */


      var _evento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../evento.service */
      90873);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/google-maps */
      35127);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      34483);
      /* harmony import */


      var _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../editar-modal/editar-modal.page */
      88830);

      var _NovoEventoPage = /*#__PURE__*/function () {
        function NovoEventoPage(storage, camera, eventoService, modalCtrl, firebase, ngzone, alert, auth, loadingC) {
          _classCallCheck(this, NovoEventoPage);

          this.storage = storage;
          this.camera = camera;
          this.eventoService = eventoService;
          this.modalCtrl = modalCtrl;
          this.firebase = firebase;
          this.ngzone = ngzone;
          this.alert = alert;
          this.auth = auth;
          this.loadingC = loadingC;
          this.selectedImage = null;
          this.presenca = true;
          this.dateValue = '';
          this.dia1 = 'Início';
          this.dia2 = 'Fim';
          this.ingressoType = '';
          this.existe = false;
          this.options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          };
          this.hide = true;
          this.tipo = "Presencial";
          this.search = '';
          this.googleAutocomplete = new google.maps.places.AutocompleteService();
          this.searchResults = new Array();
        }

        _createClass(NovoEventoPage, [{
          key: "close",
          value: function close() {
            this.datetime.cancel(true);
          }
        }, {
          key: "select",
          value: function select() {
            this.datetime.confirm(true);
            console.log(this.dateValue);
          }
        }, {
          key: "next",
          value: function next() {
            this.slides.slideNext();
          }
        }, {
          key: "prev",
          value: function prev() {
            this.slides.slidePrev();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.eventoService.getImageDetailList();
            this.img = "../assets/icon/unnamed.png";
            this.getCidadeDetails();
            this.name();
          }
        }, {
          key: "getCidadeDetails",
          value: function getCidadeDetails() {
            var _this41 = this;

            this.firebase.list('cidades').valueChanges().subscribe(function (data) {
              _this41.tratacidades(data);
            });
          }
        }, {
          key: "tratacidades",
          value: function tratacidades(dados) {
            this.items = Object.keys(dados).map(function (i) {
              return dados[i];
            });
            console.log(this.items, "todas as city");
          }
        }, {
          key: "novaData",
          value: function novaData() {
            this.next();
            moment__WEBPACK_IMPORTED_MODULE_4__.locale('pt-BR');
            this.dia2 = moment__WEBPACK_IMPORTED_MODULE_4__(this.dia).format('ddd DD MMM');
          }
        }, {
          key: "Presencial",
          value: function Presencial() {
            if (this.usuario == "Usuario") {
              this.showalert("OPS!", "Mude seu nome de usuario para publicar um evento");
              return this.showmodal();
            }

            this.presenca = true;
            this.next();
          }
        }, {
          key: "Online",
          value: function Online() {
            if (this.usuario == "Usuario") {
              this.showalert("OPS!", "Mude seu nome de usuario para publicar um evento");
              return this.showmodal();
            }

            this.presenca = false;
            this.local = null;
            this.lugar = null;
            this.next();
          }
        }, {
          key: "dateChanged",
          value: function dateChanged(value) {
            this.dia = value;
            moment__WEBPACK_IMPORTED_MODULE_4__.locale('pt-BR');
            this.dia1 = moment__WEBPACK_IMPORTED_MODULE_4__(this.dia).format('ddd DD MMM HH:MM');
            console.log(value);
          }
        }, {
          key: "dateChanged2",
          value: function dateChanged2(value) {
            this.fim = value;
            moment__WEBPACK_IMPORTED_MODULE_4__.locale('pt-BR');
            this.dia2 = moment__WEBPACK_IMPORTED_MODULE_4__(this.fim).format('ddd DD MMM HH:MM');
            console.log(value);
          }
        }, {
          key: "showmodal",
          value: function showmodal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              var modal;
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return this.modalCtrl.create({
                        component: _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_6__.EditarModalPage,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context41.sent;
                      modal.present();
                      ;

                    case 5:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          }
        }, {
          key: "name",
          value: function name() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              var res;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context42.sent.displayName;
                      this.usuario = res;

                    case 4:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          }
        }, {
          key: "save",
          value: function save() {
            var _this42 = this;

            if (this.presenca == true) {
              this.presentLoading();

              if (this.nome == null) {
                return this.showalert("Erro ", "Nome do evento é Obrigatório");
              }

              if (this.selectedImage == null) {
                return this.showalert("Erro ", "Imagem do evento é Obrigatório");
              }

              if (this.dia == null) {
                return this.showalert("Erro ", "Data de ínicio do evento é Obrigatório");
              }

              if (this.fim == null) {
                return this.showalert("Erro ", "Data de fim do evento é Obrigatório");
              }

              if (this.local == null) {
                return this.showalert("Erro ", "Local do evento é Obrigatório");
              }

              if (this.ingresso == null) {
                console.log(this.ingresso);
                return this.showalert("Erro ", "Link do evento é Obrigatório, caso o evento não possua link de ingresso use o link de perfil do instagram do evento ou do produtor.");
              }

              var name = this.selectedImage.name;
              var fileRef = this.storage.ref(name);
              this.storage.upload(name, this.selectedImage).snapshotChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(function () {
                fileRef.getDownloadURL().subscribe(function (url) {
                  _this42.url = url;

                  _this42.eventoService.insertImageDetails(_this42.nome, _this42.url, _this42.ingresso, _this42.dia, _this42.fim, _this42.local, _this42.lugar);

                  if (_this42.items.some(function (cidade) {
                    return cidade.lugar == _this42.lugar;
                  })) {
                    console.log("cidade", "ja existente");

                    _this42.loading.dismiss();

                    _this42.showalert("Evento ", "Publicado com sucesso");
                  } else {
                    var lugar = _this42.lugar;

                    _this42.firebase.list('cidades').push({
                      lugar: lugar
                    });
                  }

                  ;
                });
              })).subscribe();
              this.showalert("Evento ", "Publicado com sucesso");
              this.loading.dismiss();
            }

            if (this.presenca == false) {
              this.presentLoading();

              if (this.nome == null) {
                return this.showalert("Erro ", "Nome do evento é Obrigatório");
              }

              if (this.selectedImage == null) {
                return this.showalert("Erro ", "Imagem do evento é Obrigatório");
              }

              if (this.dia == null) {
                return this.showalert("Erro ", "Data de ínicio do evento é Obrigatório");
              }

              if (this.fim == null) {
                return this.showalert("Erro ", "Data de fim do evento é Obrigatório");
              }

              if (this.link == null) {
                return this.showalert("Erro ", "Link do evento é Obrigatório");
              }

              var name = this.selectedImage.name;

              var _fileRef = this.storage.ref(name);

              this.storage.upload(name, this.selectedImage).snapshotChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(function () {
                _fileRef.getDownloadURL().subscribe(function (url) {
                  _this42.url = url;

                  _this42.eventoService.insertOnline(_this42.nome, _this42.url, _this42.link, _this42.dia, _this42.fim);

                  _this42.loading.dismiss();

                  _this42.showalert("Evento ", "Publicado com sucesso");
                });
              })).subscribe();
            }
          }
        }, {
          key: "showPreview",
          value: function showPreview(event) {
            var _this43 = this;

            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();

              reader.onload = function (e) {
                return _this43.img = e.target.result;
              };

              reader.readAsDataURL(event.target.files[0]);
              this.selectedImage = event.target.files[0];
              this.next();
            } else {
              this.img = "../assets/icon/profile.png";
              this.selectedImage = null;
            }
          }
        }, {
          key: "writeUserData",
          value: function writeUserData() {
            this.fileButton.nativeElement.click();
          }
        }, {
          key: "save2",
          value: function save2() {
            var _this44 = this;

            this.presentLoading();

            if (this.nome == null) {
              return this.showalert("Erro ", "Nome do evento é Obrigatório");
            }

            if (this.selectedImage == null) {
              return this.showalert("Erro ", "Imagem do evento é Obrigatório");
            }

            if (this.dia == null) {
              return this.showalert("Erro ", "Data de ínicio do evento é Obrigatório");
            }

            if (this.fim == null) {
              return this.showalert("Erro ", "Data de fim do evento é Obrigatório");
            }

            var name = this.selectedImage.name;
            var fileRef = this.storage.ref(name);
            this.storage.upload(name, this.selectedImage).snapshotChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(function () {
              fileRef.getDownloadURL().subscribe(function (url) {
                _this44.url = url;

                _this44.eventoService.insertOnline(_this44.nome, _this44.url, _this44.link, _this44.dia, _this44.fim);

                _this44.showalert("Evento", "Publicado com sucesso ");
              });
            })).subscribe();
            this.showalert("Evento ", "Publicado com sucesso");
            this.loading.dismiss();
          }
        }, {
          key: "searchChanged",
          value: function searchChanged() {
            var _this45 = this;

            if (!this.search.trim().length) return;
            this.googleAutocomplete.getPlacePredictions({
              input: this.search
            }, function (predictions) {
              _this45.ngzone.run(function () {
                _this45.searchResults = predictions;
              });
            });
          }
        }, {
          key: "showalert",
          value: function showalert(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              var alert;
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      _context43.next = 2;
                      return this.alert.create({
                        header: header,
                        message: message,
                        buttons: ["Ok"]
                      });

                    case 2:
                      alert = _context43.sent;
                      _context43.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));
          }
        }, {
          key: "localizou",
          value: function localizou(item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              var info;
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      this.search = "";
                      this.local = item;
                      this.destnation = item;
                      _context44.next = 5;
                      return _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__.Geocoder.geocode({
                        address: this.destnation.description
                      });

                    case 5:
                      info = _context44.sent;
                      this.lugar = info[0].subAdminArea;

                      if (info[0].adminArea == "Distrito Federal") {
                        this.lugar = "Brasília";
                      }

                      if (!(this.lugar == "Brasília")) {
                        _context44.next = 12;
                        break;
                      }

                      console.log("ok");
                      _context44.next = 22;
                      break;

                    case 12:
                      if (!(this.lugar == "Rio de Janeiro")) {
                        _context44.next = 16;
                        break;
                      }

                      console.log("ok");
                      _context44.next = 22;
                      break;

                    case 16:
                      if (!(this.lugar == "São Paulo")) {
                        _context44.next = 20;
                        break;
                      }

                      console.log("ok");
                      _context44.next = 22;
                      break;

                    case 20:
                      this.lugar, this.local = "";
                      return _context44.abrupt("return", this.showalert("Ops!", "O Oreon só esta disponivel em Brasília, Rio de Janeiro e São paulo"));

                    case 22:
                      console.log(this.lugar);
                      return _context44.abrupt("return", (this.local, this.lugar));

                    case 24:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));
          }
        }, {
          key: "load",
          value: function load() {
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__.Environment.setEnv({
              'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyClABG0SXj9mDIMW-nZBBKoIaGscHBHoyo',
              'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyClABG0SXj9mDIMW-nZBBKoIaGscHBHoyo'
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
              return regeneratorRuntime.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      _context45.next = 2;
                      return this.loadingC.create({
                        cssClass: 'my-custom-class',
                        message: 'Espere um momento...'
                      });

                    case 2:
                      this.loading = _context45.sent;
                      _context45.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45, this);
            }));
          }
        }, {
          key: "editNome",
          value: function editNome() {
            this.prev();
            this.prev();
            this.prev();
            this.prev();
          }
        }, {
          key: "editDia",
          value: function editDia() {
            this.prev();
            this.prev();
            this.prev();
          }
        }, {
          key: "editIngresso",
          value: function editIngresso() {
            this.prev();
            this.prev();
          }
        }, {
          key: "editLink",
          value: function editLink() {
            this.prev();
            this.prev();
          }
        }, {
          key: "editLocal",
          value: function editLocal() {
            this.prev();
          }
        }]);

        return NovoEventoPage;
      }();

      _NovoEventoPage.ctorParameters = function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage]
          }]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_evento_service__WEBPACK_IMPORTED_MODULE_2__.EventoService]
          }]
        }, {
          type: _evento_service__WEBPACK_IMPORTED_MODULE_2__.EventoService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__.AngularFireDatabase
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.AngularFireAuth
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }];
      };

      _NovoEventoPage.propDecorators = {
        fileButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: ['fileButton', {
            "static": false
          }]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: ['slides', {
            "static": false
          }]
        }],
        datetime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: ['iondatetime']
        }]
      };
      _NovoEventoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-novo-evento',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_novo_evento_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_novo_evento_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera, _evento_service__WEBPACK_IMPORTED_MODULE_2__.EventoService, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController, _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__.AngularFireDatabase, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.AngularFireAuth, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController])], _NovoEventoPage);
      /***/
    },

    /***/
    69557:
    /*!***************************************!*\
      !*** ./src/app/perfil/perfil.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PerfilPage": function PerfilPage() {
          return (
            /* binding */
            _PerfilPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./perfil.page.html */
      87988);
      /* harmony import */


      var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./perfil.page.scss */
      62829);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user.service */
      92785);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../eventos-do-usuario/proximo-evento.page */
      84376);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../editar-modal/editar-modal.page */
      88830);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../eventomodal/eventomodal.page */
      4268);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../tutorial/tutorial.page */
      11579);

      var _PerfilPage = /*#__PURE__*/function () {
        function PerfilPage(afd, editar, firestore, user, afAuth, proxEvento, tutorial, modalCtrl, route, actionSheetCtrl, alertController, loadingC, eventModal) {
          _classCallCheck(this, PerfilPage);

          this.afd = afd;
          this.editar = editar;
          this.firestore = firestore;
          this.user = user;
          this.afAuth = afAuth;
          this.proxEvento = proxEvento;
          this.tutorial = tutorial;
          this.modalCtrl = modalCtrl;
          this.route = route;
          this.actionSheetCtrl = actionSheetCtrl;
          this.alertController = alertController;
          this.loadingC = loadingC;
          this.eventModal = eventModal;
          this.hjdia = new Date().toISOString();
          this.item = "";
          this.cidade = "";
          this.abrir = false;
          this.perfilUP = false;
          this.escolha = "Data";
          this.criados = new Array();
          this.criados2 = new Array();
          this.ups = new Array();
          this.ups2 = new Array();
        }

        _createClass(PerfilPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
              var _this46 = this;

              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      this.dadosperfil(); //bug entrar com outra conta

                      this.afAuth.onAuthStateChanged(function (user) {
                        if (user) {
                          // User is signed in, see docs for a list of available properties
                          // https://firebase.google.com/docs/reference/js/firebase.User
                          var uid = user.uid;
                          var res = user;
                          _this46.usuario = res.uid;

                          _this46.getDataFromFire();

                          _this46.user.listadecriados(res.uid);

                          _this46.criados = _this46.user.w;

                          _this46.user.listadeup(res.uid);

                          _this46.ups = _this46.user.y;
                        } else {
                          _this46.noAuth = true;
                        }
                      });

                    case 2:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47);
            }));
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              var _this47 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      _context48.next = 2;
                      return this.actionSheetCtrl.create({
                        header: 'Configurações',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Tutorial',
                          icon: 'help',
                          handler: function handler() {
                            _this47.showmodalTutorial();
                          }
                        }, {
                          text: 'Criar Evento',
                          icon: 'add',
                          handler: function handler() {
                            _this47.route.navigate(['/add']);
                          }
                        }, {
                          text: 'Editar perfil',
                          icon: 'settings',
                          handler: function handler() {
                            _this47.showmodal();
                          }
                        }, {
                          text: 'Ordenar eventos por ' + this.escolha,
                          icon: 'options',
                          handler: function handler() {
                            _this47.orderBy();
                          }
                        }, {
                          text: 'Sair',
                          role: 'destructive',
                          icon: 'log-out',
                          handler: function handler() {
                            _this47.logout();
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context48.sent;
                      _context48.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
              return regeneratorRuntime.wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      _context49.next = 2;
                      return this.loadingC.create({
                        cssClass: 'my-custom-class',
                        message: 'Espere um momento...',
                        duration: 3000
                      });

                    case 2:
                      this.loading = _context49.sent;
                      _context49.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49, this);
            }));
          }
        }, {
          key: "modalevento",
          value: function modalevento(zeta) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
              var modal;
              return regeneratorRuntime.wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      _context50.next = 2;
                      return this.modalCtrl.create({
                        component: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_5__.EventomodalPage,
                        componentProps: {
                          customid: zeta
                        }
                      });

                    case 2:
                      modal = _context50.sent;
                      modal.present();
                      ;
                      this.eventModal.criandomodal(zeta);

                    case 6:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50, this);
            }));
          }
        }, {
          key: "orderBy",
          value: function orderBy() {
            this.user.ordenar(this.usuario, this.perfilUP);
          }
        }, {
          key: "voltar",
          value: function voltar() {
            this.route.navigate(['./home']);
          }
        }, {
          key: "showmodalTutorial",
          value: function showmodalTutorial() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
              var modal;
              return regeneratorRuntime.wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      _context51.next = 2;
                      return this.modalCtrl.create({
                        component: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__.TutorialPage,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context51.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51, this);
            }));
          }
        }, {
          key: "dadosperfil",
          value: function dadosperfil() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
              var _this48 = this;

              var res;
              return regeneratorRuntime.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      _context52.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      res = _context52.sent;

                      if (res != null) {
                        this.noAuth = false;
                        this.mainuser = this.firestore.doc("users/".concat(res.uid));
                        this.sub = this.mainuser.valueChanges().subscribe(function (usuario) {
                          _this48.perfilnome = usuario.username;
                          _this48.perfilimg = usuario.imgUser;
                          _this48.perfilUP = usuario.UP;

                          if (_this48.perfilUP == false) {
                            _this48.escolha = "Data";
                          } else {
                            _this48.escolha = "UP";
                          }
                        });
                      }

                    case 4:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, this);
            }));
          }
        }, {
          key: "showmodal",
          value: function showmodal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
              var modal;
              return regeneratorRuntime.wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      _context53.next = 2;
                      return this.modalCtrl.create({
                        component: _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_4__.EditarModalPage,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context53.sent;
                      modal.present();
                      ;
                      this.editar.criandomodal();

                    case 6:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53, this);
            }));
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.items;
            console.log(this.items);
          }
        }, {
          key: "abriu",
          value: function abriu() {
            this.abrir = !this.abrir;
          }
        }, {
          key: "getItems",
          value: function getItems(ev) {
            // Reset items back to all of the items
            this.todositems = this.items;
            this.allitems = this.todositems;
            var val = ev.target.value;
            console.log(this.todositems);

            if (val && val.trim() != '') {
              this.todositems = lodash__WEBPACK_IMPORTED_MODULE_6___default().values(this.allitems);
              this.todositems = this.todositems.filter(function (cidade) {
                return cidade.lugar.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            } else {
              this.todositems = this.allitems;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this49 = this;

            this.presentLoading();
            this.afAuth.signOut().then(function () {})["catch"](function (error) {
              console.log(error); // An error happened.
            });
            this.loadingC.dismiss();
            setTimeout(function () {
              _this49.route.navigate(['/criar-user']);
            }, 3500);
            this.ngOnDestroy();
          }
        }, {
          key: "loadups",
          value: function loadups(event) {
            var _this50 = this;

            setTimeout(function () {
              console.log();

              if (_this50.ups2.length == 0) {
                _this50.user.listadeup2(_this50.usuario);

                _this50.ups2 = _this50.user.y2;

                var uniqueUps2 = _this50.ups2.filter(function (elem, i, array) {
                  return array.indexOf(elem) === i;
                });

                _this50.ups2 = uniqueUps2;
              }

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "loadcriados",
          value: function loadcriados(event) {
            var _this51 = this;

            setTimeout(function () {
              console.log();

              if (_this51.criados2.length == 0) {
                _this51.user.listadecriados2(_this51.usuario);

                _this51.criados2 = _this51.user.w2;
              }

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "getDataFromFire",
          value: function getDataFromFire() {
            var _this52 = this;

            this.afd.list('cidades').valueChanges().subscribe(function (data) {
              _this52.trataDados(data);
            });
          }
        }, {
          key: "trataDados",
          value: function trataDados(dados) {
            this.items = Object.keys(dados).map(function (i) {
              return dados[i];
            });
            this.todositems = this.items;
          }
        }, {
          key: "meuslugares",
          value: function meuslugares(item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
              var meulugar, res;
              return regeneratorRuntime.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      // esta fazendo 4 leituras na home por cada alteração
                      meulugar = item;
                      _context54.next = 3;
                      return this.afAuth.currentUser;

                    case 3:
                      res = _context54.sent;
                      console.log(meulugar, "aki");
                      this.firestore.collection("users").doc("".concat(res.uid)).update({
                        cidade: meulugar
                      });
                      this.afd.database.ref("users/".concat(res.uid, "/cidade")).set(meulugar);
                      this.showalert("Pronto", "Cidade alterada para " + meulugar);

                    case 8:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, this);
            }));
          }
        }, {
          key: "deletaract",
          value: function deletaract(rte) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
              var _this53 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee55$(_context55) {
                while (1) {
                  switch (_context55.prev = _context55.next) {
                    case 0:
                      _context55.next = 2;
                      return this.alertController.create({
                        header: 'Excluir Evento?',
                        message: 'Esta ação não poderá ser desfeita',
                        buttons: [{
                          text: 'Cancelar',
                          handler: function handler() {}
                        }, {
                          text: 'Confirmar',
                          handler: function handler() {
                            _this53["delete"](rte);
                          }
                        }]
                      });

                    case 2:
                      alert = _context55.sent;
                      _context55.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context55.stop();
                  }
                }
              }, _callee55, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(evento) {
            this.firestore.collection("eventos").doc("".concat(evento.id))["delete"]().then(function () {
              console.log("Document successfully deleted!");
            });
            this.afd.database.ref("eventDetails/".concat(evento.chave2)).remove();
            console.log(evento.id);
            this.showalert("Excluido!", "O evento irá desaparecer em instantes.");
          }
        }, {
          key: "showalert",
          value: function showalert(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
              var alert;
              return regeneratorRuntime.wrap(function _callee56$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      _context56.next = 2;
                      return this.alertController.create({
                        header: header,
                        message: message,
                        buttons: ["Ok"]
                      });

                    case 2:
                      alert = _context56.sent;
                      _context56.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee56, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy perfil");
            this.user.w = [];
            this.user.w2 = [];
            this.user.y = [];
            this.user.w2 = [];
            this.criados = [];
            this.criados2 = [];
            this.ups = [];
            this.ups2 = [];
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee57() {
              return regeneratorRuntime.wrap(function _callee57$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                      this.user.w = [];
                      this.user.w2 = [];
                      this.user.y = [];
                      this.user.w2 = [];
                      this.criados = [];
                      this.criados2 = [];
                      this.ups = [];
                      this.ups2 = [];

                    case 8:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee57, this);
            }));
          }
        }]);

        return PerfilPage;
      }();

      _PerfilPage.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__.AngularFireDatabase
        }, {
          type: _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_4__.EditarModalPage
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth
        }, {
          type: _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_3__.ProximoEventoPage
        }, {
          type: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__.TutorialPage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
        }, {
          type: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_5__.EventomodalPage
        }];
      };

      _PerfilPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-perfil',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_9__.AngularFireDatabase, _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_4__.EditarModalPage, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore, _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth, _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_3__.ProximoEventoPage, _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__.TutorialPage, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController, _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController, _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_5__.EventomodalPage])], _PerfilPage);
      /***/
    },

    /***/
    67928:
    /*!*********************************************!*\
      !*** ./src/app/pesquisar/pesquisar.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PesquisarPage": function PesquisarPage() {
          return (
            /* binding */
            _PesquisarPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pesquisar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pesquisar.page.html */
      51673);
      /* harmony import */


      var _pesquisar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pesquisar.page.scss */
      76140);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _PesquisarPage = /*#__PURE__*/function () {
        function PesquisarPage(fd, firestore, router) {
          _classCallCheck(this, PesquisarPage);

          this.fd = fd;
          this.firestore = firestore;
          this.router = router;
          this.queryText = '';
          console.log("pré LoAD");
        }

        _createClass(PesquisarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.eventosDB();
            console.log("pré LoAD");
          }
        }, {
          key: "eventosDB",
          value: function eventosDB() {
            var _this54 = this;

            this.fd.list('eventDetails').valueChanges().subscribe(function (data) {
              _this54.trataEventos(data);
            });
          }
        }, {
          key: "trataEventos",
          value: function trataEventos(even) {
            this.eventos = Object.keys(even).map(function (i) {
              return even[i];
            });
          }
        }, {
          key: "filterEvento",
          value: function filterEvento(cid) {
            this.eventoY = this.eventos;
            this.alleventos = this.eventoY;
            var val = cid.target.value;

            if (val && val.trim() != '') {
              this.eventoY = lodash__WEBPACK_IMPORTED_MODULE_2___default().values(this.alleventos);
              this.eventoY = this.eventoY.filter(function (evento) {
                return evento.dataseet.nome.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            }
          }
        }, {
          key: "voltar",
          value: function voltar() {
            this.router.navigate(['./home']);
          }
        }, {
          key: "pesq",
          value: function pesq(evento) {
            this.eventoID = evento.chave;
            this.router.navigate(['/evento-pesquisa/' + this.eventoID]);
          }
        }]);

        return PesquisarPage;
      }();

      _PesquisarPage.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _PesquisarPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-pesquisar',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pesquisar_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pesquisar_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore, _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router])], _PesquisarPage);
      /***/
    },

    /***/
    79713:
    /*!*******************************************************!*\
      !*** ./src/app/selective-loading-strategy.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SimpleLoadingStrategy": function SimpleLoadingStrategy() {
          return (
            /* binding */
            _SimpleLoadingStrategy
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      81134);

      var _SimpleLoadingStrategy = /*#__PURE__*/function () {
        function _SimpleLoadingStrategy() {
          _classCallCheck(this, _SimpleLoadingStrategy);

          this.routesToPreload = [];
        }

        _createClass(_SimpleLoadingStrategy, [{
          key: "preload",
          value: function preload(route, load) {
            if (route.data && route.data.preload) {
              return load();
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
          }
        }, {
          key: "preloadRoute",
          value: function preloadRoute(path) {
            var _this55 = this;

            return new Promise(function (resolve) {
              if (_this55.routesToPreload && _this55.routesToPreload.length > 0) {
                var routeToPreload = _this55.routesToPreload.find(function (filterRouteToPreload) {
                  return filterRouteToPreload.routePath === path;
                });

                if (routeToPreload) {
                  routeToPreload.load();
                }
              }

              resolve();
            });
          }
        }]);

        return _SimpleLoadingStrategy;
      }();
      /***/

    },

    /***/
    45922:
    /*!*****************************************************!*\
      !*** ./src/app/tutorial/tutorial-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TutorialPageRoutingModule": function TutorialPageRoutingModule() {
          return (
            /* binding */
            _TutorialPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _tutorial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tutorial.page */
      11579);

      var routes = [{
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_0__.TutorialPage
      }];

      var _TutorialPageRoutingModule = /*#__PURE__*/_createClass(function TutorialPageRoutingModule() {
        _classCallCheck(this, TutorialPageRoutingModule);
      });

      _TutorialPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TutorialPageRoutingModule);
      /***/
    },

    /***/
    50222:
    /*!*********************************************!*\
      !*** ./src/app/tutorial/tutorial.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TutorialPageModule": function TutorialPageModule() {
          return (
            /* binding */
            _TutorialPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tutorial-routing.module */
      45922);
      /* harmony import */


      var _tutorial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tutorial.page */
      11579);

      var _TutorialPageModule = /*#__PURE__*/_createClass(function TutorialPageModule() {
        _classCallCheck(this, TutorialPageModule);
      });

      _TutorialPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__.TutorialPageRoutingModule],
        declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_1__.TutorialPage]
      })], _TutorialPageModule);
      /***/
    },

    /***/
    11579:
    /*!*******************************************!*\
      !*** ./src/app/tutorial/tutorial.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TutorialPage": function TutorialPage() {
          return (
            /* binding */
            _TutorialPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tutorial.page.html */
      5874);
      /* harmony import */


      var _tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tutorial.page.scss */
      28430);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      81864);

      var _TutorialPage = /*#__PURE__*/function () {
        function TutorialPage(modal) {
          _classCallCheck(this, TutorialPage);

          this.modal = modal;
        }

        _createClass(TutorialPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.modal.dismiss();
          }
        }]);

        return TutorialPage;
      }();

      _TutorialPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _TutorialPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tutorial',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController])], _TutorialPage);
      /***/
    },

    /***/
    92785:
    /*!*********************************!*\
      !*** ./src/app/user.service.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/app */
      27694);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);

      var _UserService = /*#__PURE__*/function () {
        function UserService(auth, firestore, router, firebase) {
          _classCallCheck(this, UserService);

          this.auth = auth;
          this.firestore = firestore;
          this.router = router;
          this.firebase = firebase;
          this.y = new Array();
          this.w = new Array();
          this.y2 = new Array();
          this.w2 = new Array();
          this.hjdia = new Date().toISOString();
        } //private editar : EditarModalPage) { }


        _createClass(UserService, [{
          key: "setUser",
          value: function setUser(user) {
            this.user = user;
          }
        }, {
          key: "getUID",
          value: function getUID() {
            return this.user.uid;
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(url, nome) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
              var username, res, iduser;
              return regeneratorRuntime.wrap(function _callee58$(_context58) {
                while (1) {
                  switch (_context58.prev = _context58.next) {
                    case 0:
                      username = nome;
                      _context58.next = 3;
                      return this.auth.currentUser;

                    case 3:
                      res = _context58.sent;
                      iduser = res.uid;
                      res.updateProfile({
                        photoURL: url,
                        displayName: nome
                      });
                      this.firestore.collection("users").doc("".concat(res.uid)).update({
                        imgUser: url,
                        username: nome
                      });
                      this.firebase.database.ref("users/".concat(res.uid, "/img")).set(url);
                      this.firebase.database.ref("users/".concat(res.uid, "/username")).set({
                        username: username,
                        iduser: iduser
                      });

                    case 9:
                    case "end":
                      return _context58.stop();
                  }
                }
              }, _callee58, this);
            }));
          }
        }, {
          key: "updateNome",
          value: function updateNome(nome) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee59() {
              var username, res, iduser;
              return regeneratorRuntime.wrap(function _callee59$(_context59) {
                while (1) {
                  switch (_context59.prev = _context59.next) {
                    case 0:
                      username = nome;
                      _context59.next = 3;
                      return this.auth.currentUser;

                    case 3:
                      res = _context59.sent;
                      iduser = res.uid;
                      res.updateProfile({
                        displayName: nome
                      });
                      this.firestore.collection("users").doc("".concat(res.uid)).update({
                        username: nome
                      });
                      this.firebase.database.ref("users/".concat(res.uid, "/username")).set({
                        username: username,
                        iduser: iduser
                      });

                    case 8:
                    case "end":
                      return _context59.stop();
                  }
                }
              }, _callee59, this);
            }));
          }
        }, {
          key: "updateImage",
          value: function updateImage(url) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
              var res, iduser;
              return regeneratorRuntime.wrap(function _callee60$(_context60) {
                while (1) {
                  switch (_context60.prev = _context60.next) {
                    case 0:
                      _context60.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context60.sent;
                      iduser = res.uid;
                      res.updateProfile({
                        photoURL: url
                      });
                      this.firestore.collection("users").doc("".concat(res.uid)).update({
                        imgUser: url
                      });
                      this.firebase.database.ref("users/".concat(res.uid, "/img")).set(url);

                    case 7:
                    case "end":
                      return _context60.stop();
                  }
                }
              }, _callee60, this);
            }));
          }
        }, {
          key: "login",
          value: function login(email, password) {
            return this.auth.signInWithEmailAndPassword(email, password);
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.auth.signOut();
          }
        }, {
          key: "denuncia",
          value: function denuncia(denunciado) {
            this.firestore.collection('users').doc("".concat(denunciado)).update({
              Denuncias: firebase_app__WEBPACK_IMPORTED_MODULE_1___default().firestore.FieldValue.increment(1)
            });
          }
        }, {
          key: "todasdenuncias",
          value: function todasdenuncias(denunciadissimo) {
            this.firestore.collection("Denuncias").doc("".concat(denunciadissimo.id)).set(denunciadissimo);
          }
        }, {
          key: "ordenar",
          value: function ordenar(escolha, up) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee61() {
              return regeneratorRuntime.wrap(function _callee61$(_context61) {
                while (1) {
                  switch (_context61.prev = _context61.next) {
                    case 0:
                      console.log(up);

                      if (up == false) {
                        console.log("TA MUDANDO");
                        this.firestore.collection("users").doc("".concat(escolha)).update({
                          UP: true
                        });
                      }

                      if (up == true) {
                        console.log("TA MUDANDO");
                        this.firestore.collection("users").doc("".concat(escolha)).update({
                          UP: false
                        });
                      }

                    case 3:
                    case "end":
                      return _context61.stop();
                  }
                }
              }, _callee61, this);
            }));
          }
        }, {
          key: "getauth",
          value: function getauth() {
            return this.auth;
          }
        }, {
          key: "listadecriados",
          value: function listadecriados(cria) {
            var _this56 = this;

            console.log(cria);
            this.eventocriado = this.firestore.collection('eventos', function (ref) {
              return ref.where('userID', 'array-contains', "".concat(cria)).orderBy("UPnum", "desc").limit(10);
            });
            this.eventocriado.get().subscribe(function (criados) {
              criados.forEach(function (evc) {
                var data = evc.data();
                var id = evc.id;

                if (data.fim < _this56.hjdia) {
                  //  console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                  _this56.passadostate = _this56.firestore.doc("eventos/".concat(id));

                  _this56.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_0__.locale('pt-BR');
                _this56.m = moment__WEBPACK_IMPORTED_MODULE_0__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this56.m;
                _this56.provCria1 = Object.assign({
                  id: id
                }, data);

                _this56.w.push(_this56.provCria1);

                _this56.nextQueryCriados = evc;
              });
            });
          }
        }, {
          key: "listadecriados2",
          value: function listadecriados2(cria2) {
            var _this57 = this;

            var lastC = this.nextQueryCriados;
            this.eventocriado2 = this.firestore.collection('eventos', function (ref) {
              return ref.where('userID', 'array-contains', "".concat(cria2)).orderBy("UPnum", "desc").startAfter(lastC).limit(3);
            });
            return this.eventocriado2.get().subscribe(function (criados) {
              criados.forEach(function (c) {
                var data = c.data();
                var id = c.id;

                if (data.fim < _this57.hjdia) {
                  //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                  _this57.passadostate = _this57.firestore.doc("eventos/".concat(id));

                  _this57.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_0__.locale('pt-BR');
                _this57.m = moment__WEBPACK_IMPORTED_MODULE_0__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this57.m;
                _this57.provCria2 = Object.assign({
                  id: id
                }, data);

                _this57.w2.push(_this57.provCria2);

                _this57.nextQueryCriados = c;
              });
            });
          }
        }, {
          key: "listadeup",
          value: function listadeup(up_us) {
            var _this58 = this;

            this.eventoup = this.firestore.collection('eventos', function (ref) {
              return ref.where('up', 'array-contains', "".concat(up_us)).orderBy("UPnum", "desc").limit(25);
            });
            return this.eventoup.get().subscribe(function (upados) {
              upados.forEach(function (up) {
                var data = up.data();
                var id = up.id;

                if (data.fim < _this58.hjdia) {
                  // checar se data do  evento esta no futuro
                  _this58.passadostate = _this58.firestore.doc("eventos/".concat(id));

                  _this58.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_0__.locale('pt-BR');
                _this58.m = moment__WEBPACK_IMPORTED_MODULE_0__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this58.m;
                _this58.provUp1 = Object.assign({
                  id: id
                }, data);

                _this58.y.push(_this58.provUp1);

                _this58.nextQueryUp = up;
              });
            });
          }
        }, {
          key: "listadeup2",
          value: function listadeup2(user) {
            var _this59 = this;

            var last = this.nextQueryUp;
            console.log(last);
            this.eventoup2 = this.firestore.collection('eventos', function (ref) {
              return ref.where('up', 'array-contains', "".concat(user)).orderBy("UPnum", "desc").startAfter(last).limit(25);
            });
            return this.eventoup2.get().subscribe(function (upei) {
              upei.forEach(function (upi) {
                var data = upi.data();
                var id = upi.id;

                if (data.fim < _this59.hjdia) {
                  console.log(data.fim, " menor que ", _this59.hjdia); // checar se data do  evento esta no futuro

                  _this59.passadostate = _this59.firestore.doc("eventos/".concat(id));

                  _this59.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_0__.locale('pt-BR');
                _this59.m = moment__WEBPACK_IMPORTED_MODULE_0__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this59.m;
                _this59.provUp2 = Object.assign({
                  id: id
                }, data);

                _this59.y2.push(_this59.provUp2);

                _this59.nextQueryUp = upi;
              });
            });
          }
        }]);

        return UserService;
      }();

      _UserService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
            args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth]
          }]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__.AngularFireDatabase
        }];
      };

      _UserService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore, _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router, _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__.AngularFireDatabase])], _UserService);
      /***/
    },

    /***/
    85342:
    /*!*********************************************************************!*\
      !*** ./src/app/usuario-pesquisa/usuario-pesquisa-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsuarioPesquisaPageRoutingModule": function UsuarioPesquisaPageRoutingModule() {
          return (
            /* binding */
            _UsuarioPesquisaPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./usuario-pesquisa.page */
      21952);

      var routes = [{
        path: '',
        component: _usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_0__.UsuarioPesquisaPage
      }];

      var _UsuarioPesquisaPageRoutingModule = /*#__PURE__*/_createClass(function UsuarioPesquisaPageRoutingModule() {
        _classCallCheck(this, UsuarioPesquisaPageRoutingModule);
      });

      _UsuarioPesquisaPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UsuarioPesquisaPageRoutingModule);
      /***/
    },

    /***/
    38585:
    /*!*************************************************************!*\
      !*** ./src/app/usuario-pesquisa/usuario-pesquisa.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsuarioPesquisaPageModule": function UsuarioPesquisaPageModule() {
          return (
            /* binding */
            _UsuarioPesquisaPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _usuario_pesquisa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./usuario-pesquisa-routing.module */
      85342);
      /* harmony import */


      var _usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./usuario-pesquisa.page */
      21952);

      var _UsuarioPesquisaPageModule = /*#__PURE__*/_createClass(function UsuarioPesquisaPageModule() {
        _classCallCheck(this, UsuarioPesquisaPageModule);
      });

      _UsuarioPesquisaPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _usuario_pesquisa_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuarioPesquisaPageRoutingModule],
        declarations: [_usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_1__.UsuarioPesquisaPage]
      })], _UsuarioPesquisaPageModule);
      /***/
    },

    /***/
    21952:
    /*!***********************************************************!*\
      !*** ./src/app/usuario-pesquisa/usuario-pesquisa.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsuarioPesquisaPage": function UsuarioPesquisaPage() {
          return (
            /* binding */
            _UsuarioPesquisaPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_usuario_pesquisa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./usuario-pesquisa.page.html */
      64846);
      /* harmony import */


      var _usuario_pesquisa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./usuario-pesquisa.page.scss */
      34108);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../eventomodal/eventomodal.page */
      4268);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      27694);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../user.service */
      92785);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

      var _UsuarioPesquisaPage = /*#__PURE__*/function () {
        function UsuarioPesquisaPage(route, firestore, auth, eventModal, modalCtrl, actionSheetCtrl, user) {
          _classCallCheck(this, UsuarioPesquisaPage);

          this.route = route;
          this.firestore = firestore;
          this.auth = auth;
          this.eventModal = eventModal;
          this.modalCtrl = modalCtrl;
          this.actionSheetCtrl = actionSheetCtrl;
          this.user = user;
          this.hjdia = new Date().toISOString();
          this.eventos = new Array();
          this.eventos2 = new Array();
          this.criados = new Array();
          this.criados2 = new Array();
          this.y = new Array();
          this.w = new Array();
          this.y2 = new Array();
          this.w2 = new Array();
        }

        _createClass(UsuarioPesquisaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this60 = this;

            this.userID = this.route.snapshot.paramMap.get('uid');
            this.getUser(this.userID).subscribe(function (data) {
              _this60.userrr = data;
              console.log(data);
            });
            console.log(this.userID);
            this.listadeup(this.userID);
            this.eventos = this.y;
            console.log(this.eventos);
            var uniqueUps = this.eventos.filter(function (elem, i, array) {
              return array.indexOf(elem) === i;
            });
            console.log(this.eventos);
            this.listadecriados(this.userID);
            this.criados = this.w;
          }
        }, {
          key: "loadups",
          value: function loadups(event) {
            var _this61 = this;

            setTimeout(function () {
              console.log();

              _this61.listadeup2(_this61.userID);

              _this61.eventos2 = _this61.y2;
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "loadcriados",
          value: function loadcriados(event) {
            var _this62 = this;

            setTimeout(function () {
              console.log();

              _this62.listadecriados2(_this62.userID);

              _this62.criados2 = _this62.w2;
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee62() {
              var _this63 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee62$(_context62) {
                while (1) {
                  switch (_context62.prev = _context62.next) {
                    case 0:
                      _context62.next = 2;
                      return this.actionSheetCtrl.create({
                        header: 'Configurações',
                        cssClass: 'my-custom-class',
                        buttons: [// text: 'ligar notificações',
                          // icon: 'notifications',
                          // handler: () => {
                          //}
                          // }
                        {
                          text: 'Denunciar',
                          icon: 'alert',
                          handler: function handler() {
                            _this63.denuncia();
                          }
                        },, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context62.sent;
                      _context62.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context62.stop();
                  }
                }
              }, _callee62, this);
            }));
          }
        }, {
          key: "getUser",
          value: function getUser(user) {
            this.userDOC = this.firestore.collection("users", function (ref) {
              return ref.where('iduser', '==', "".concat(user));
            });
            return this.userDOC.snapshotChanges(['added']).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (actions) {
              return actions.map(function (use) {
                var data = use.payload.doc.data();
                var id = use.payload.doc['id'];
                return Object.assign({
                  id: id
                }, data);
              });
            }));
          }
        }, {
          key: "showmodal",
          value: function showmodal(zeta) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
              var modal;
              return regeneratorRuntime.wrap(function _callee63$(_context63) {
                while (1) {
                  switch (_context63.prev = _context63.next) {
                    case 0:
                      _context63.next = 2;
                      return this.modalCtrl.create({
                        component: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_2__.EventomodalPage,
                        componentProps: {
                          customid: zeta
                        }
                      });

                    case 2:
                      modal = _context63.sent;
                      modal.present();
                      ;
                      this.eventModal.criandomodal(zeta);

                    case 6:
                    case "end":
                      return _context63.stop();
                  }
                }
              }, _callee63, this);
            }));
          }
        }, {
          key: "follow",
          value: function follow() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee64() {
              var res;
              return regeneratorRuntime.wrap(function _callee64$(_context64) {
                while (1) {
                  switch (_context64.prev = _context64.next) {
                    case 0:
                      _context64.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context64.sent;
                      this.followReference = this.firestore.doc("users/".concat(this.userrr[0].id));
                      this.followReference.update({
                        followed: firebase_app__WEBPACK_IMPORTED_MODULE_3___default().firestore.FieldValue.arrayUnion(res.uid)
                      });

                    case 5:
                    case "end":
                      return _context64.stop();
                  }
                }
              }, _callee64, this);
            }));
          }
        }, {
          key: "denuncia",
          value: function denuncia() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
              return regeneratorRuntime.wrap(function _callee65$(_context65) {
                while (1) {
                  switch (_context65.prev = _context65.next) {
                    case 0:
                      this.user.denuncia(this.userID);

                      if (this.userrr[0].Denuncias > 25) {
                        this.user.todasdenuncias(this.userrr[0]);
                      }

                    case 2:
                    case "end":
                      return _context65.stop();
                  }
                }
              }, _callee65, this);
            }));
          }
        }, {
          key: "unfollow",
          value: function unfollow() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
              var res;
              return regeneratorRuntime.wrap(function _callee66$(_context66) {
                while (1) {
                  switch (_context66.prev = _context66.next) {
                    case 0:
                      _context66.next = 2;
                      return this.auth.currentUser;

                    case 2:
                      res = _context66.sent;
                      this.followReference = this.firestore.doc("users/".concat(this.userrr[0].id));
                      this.followReference.update({
                        followed: firebase_app__WEBPACK_IMPORTED_MODULE_3___default().firestore.FieldValue.arrayRemove(res.uid)
                      });

                    case 5:
                    case "end":
                      return _context66.stop();
                  }
                }
              }, _callee66, this);
            }));
          }
        }, {
          key: "listadecriados",
          value: function listadecriados(cria) {
            var _this64 = this;

            //console.log(cria)
            this.eventocriado = this.firestore.collection('eventos', function (ref) {
              return ref.where('userID', 'array-contains', "".concat(cria)).orderBy("UPnum", "desc").limit(10);
            });
            this.eventocriado.get().subscribe(function (criados) {
              criados.forEach(function (Evcup) {
                var data = Evcup.data();
                var id = Evcup.id;

                if (data.fim < _this64.hjdia) {
                  console.log(data.fim, " menor que ", _this64.hjdia); // checar se data do  evento esta no futuro

                  _this64.passadostate = _this64.firestore.doc("eventos/".concat(id));

                  _this64.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this64.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this64.m;
                _this64.provCria1 = Object.assign({
                  id: id
                }, data);

                _this64.w.push(_this64.provCria1);

                _this64.nextQueryCriados = Evcup;
              });
            });
          }
        }, {
          key: "listadecriados2",
          value: function listadecriados2(cria2) {
            var _this65 = this;

            var lastC = this.nextQueryCriados;
            this.eventocriado2 = this.firestore.collection('eventos', function (ref) {
              return ref.where('userID', 'array-contains', "".concat(cria2)).orderBy("UPnum", "desc").startAfter(lastC).limit(10);
            });
            return this.eventocriado2.get().subscribe(function (criados) {
              criados.forEach(function (cRia) {
                var data = cRia.data();
                var id = cRia.id;

                if (data.fim < _this65.hjdia) {
                  //   console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                  _this65.passadostate = _this65.firestore.doc("eventos/".concat(id));

                  _this65.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this65.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this65.m;
                _this65.provCria2 = Object.assign({
                  id: id
                }, data);

                _this65.w2.push(_this65.provCria2);

                _this65.nextQueryCriados = cRia;
              });
            });
          }
        }, {
          key: "listadeup",
          value: function listadeup(up_us) {
            var _this66 = this;

            this.eventoup = this.firestore.collection('eventos', function (ref) {
              return ref.where('up', 'array-contains', "".concat(up_us)).orderBy("UPnum", "desc").limit(10);
            });
            return this.eventoup.get().subscribe(function (upados) {
              upados.forEach(function (Ups) {
                var data = Ups.data();
                var id = Ups.id;

                if (data.fim < _this66.hjdia) {
                  //   console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                  _this66.passadostate = _this66.firestore.doc("eventos/".concat(id));

                  _this66.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this66.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this66.m;
                _this66.provUp1 = Object.assign({
                  id: id
                }, data);

                _this66.y.push(_this66.provUp1);

                _this66.nextQueryUp = Ups;
                console.log("this ", _this66.nextQueryUp);
              });
            });
          }
        }, {
          key: "listadeup2",
          value: function listadeup2(user) {
            var _this67 = this;

            var last = this.nextQueryUp;
            console.log(last);
            this.eventoup2 = this.firestore.collection('eventos', function (ref) {
              return ref.where('up', 'array-contains', "".concat(user)).orderBy("UPnum", "desc").startAfter(last).limit(10);
            });
            return this.eventoup2.get().subscribe(function (upei) {
              upei.forEach(function (upi2) {
                var data = upi2.data();
                var id = upi2.id;

                if (data.fim < _this67.hjdia) {
                  //   console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                  _this67.passadostate = _this67.firestore.doc("eventos/".concat(id));

                  _this67.passadostate.update({
                    passado: true
                  });
                }

                moment__WEBPACK_IMPORTED_MODULE_5__.locale('pt-BR');
                _this67.m = moment__WEBPACK_IMPORTED_MODULE_5__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = _this67.m;
                _this67.provUp2 = Object.assign({
                  id: id
                }, data);

                _this67.y2.push(_this67.provUp2);

                _this67.nextQueryUp = upi2;
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.user.w = [];
            this.user.w2 = [];
            this.user.y = [];
            this.user.w2 = [];
          }
        }]);

        return UsuarioPesquisaPage;
      }();

      _UsuarioPesquisaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth
        }, {
          type: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_2__.EventomodalPage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }];
      };

      _UsuarioPesquisaPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-usuario-pesquisa',
        template: _Users_ivanovmachadodossantos_Documents_OreonIos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_usuario_pesquisa_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_usuario_pesquisa_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth, _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_2__.EventomodalPage, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController, _user_service__WEBPACK_IMPORTED_MODULE_4__.UserService])], _UsuarioPesquisaPage);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment2
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment2 = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-accordion_2.entry.js": [83750, "node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"],
        "./ion-action-sheet.entry.js": [90733, "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [20985, "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [93899, "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [5121, "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [52960, "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [45473, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-breadcrumb_2.entry.js": [57951, "common", "node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"],
        "./ion-button_2.entry.js": [19787, "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66165, "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [69569, "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [35119, "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [90799, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68918, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [94028, "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [98107, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [72178, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [20123, "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [18706, "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [12099, "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [84868, "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [54377, "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [15678, "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [16735, "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-picker-column-internal.entry.js": [42322, "node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"],
        "./ion-picker-internal.entry.js": [57754, "node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"],
        "./ion-popover.entry.js": [87686, "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [48555, "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [30568, "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [6231, "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [45772, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [14977, "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [42886, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [54990, "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [13810, "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [2446, "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [47619, "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [28393, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [56281, "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [35932, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [57970, "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [80298, "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [71006, "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [74783, "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [62749, "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [55404, "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [39043, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    75158:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet class=\"ff\"></ion-router-outlet>\n</ion-app>\n\n<style>\n  ion-navbar.toolbar.toolbar-ios.statusbar-padding,\n  ion-navbar.toolbar-ios ion-title.title-ios,\n  ion-toolbar.toolbar.toolbar-ios.statusbar-padding,\n  ion-toolbar.toolbar-ios ion-title.title-ios {\n    padding-top: constant(safe-area-inset-top);\n    padding-top: env(safe-area-inset-top);\n  }\n  </style>\n  ";
      /***/
    },

    /***/
    51131:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/criar-user/criar-user.page.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"aloha\">\n  <ion-title size=\"large\" class=\"title\">Oreon</ion-title>\n  </ion-toolbar>\n </ion-header> \n\n<ion-content padding class=\"ff\">\n  <div class=\"spaço\">\n    <h1 class=\"titlee\">Bem Vindo</h1>\n    <div>\n    <ion-col>\n    <ion-button  color=\"primary\"  routerLink=\"/criar\" style=\"padding-left:75px\">Criar</ion-button>\n    <ion-button color=\"primary\" routerLink=\"/login\" style=\"padding-right:75px\">Login</ion-button>\n    </ion-col>\n  </div>\n  <a class=\"later\" (click)=\"home()\">Talvez depois</a>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    67838:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/criar/criar.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">Registro</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"criar-user\" text=\"\" class=\"margin\" (click)=\"voltar()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content> \n  <ion-list *ngIf=\"!jalogado\">\n  <ion-item class=\"holder\">\n    <ion-label position=\"floating\"> Nome de Usuario :</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"username\"></ion-input>\n  </ion-item>\n\n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\">Email :</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\">Senha :</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\">Confirme senha :</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\n    </ion-item>\n\n    <ion-button  shape=\"round\" expand=\"full\" type=\"submit\" (click)=\"register()\">Criar</ion-button>\n\n    <!--\n    <p class=\"pp\">Criar com Gmail:</p>\n    <ion-button (click)=\"loginGooglecom()\" class=\"google\">\n      <ion-icon name=\"logo-google\" size=\"large\"></ion-icon>\n    </ion-button>\n    \n-->\n    </ion-list>\n    <div *ngIf=\"jalogado\">\n      <h2 class=\"p\" >Enviamos um link de verificação pro seu email confirme após clickar nele.</h2>\n      <ion-item class=\"holder2\"  lines=\"none\">\n        <ion-button size=\"default\" type=\"submit\"  (click)=\"enviaremaildeverific()\">Reenviar</ion-button>\n        <ion-button  size=\"default\" type=\"submit\"  (click)=\"javerifiquei()\">Confirmar</ion-button>\n      </ion-item>\n    </div>  \n</ion-content>";
      /***/
    },

    /***/
    61143:
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/editar-modal/editar-modal.page.html ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title (click)=\"close()\" size=\"large\" class=\"centertt\">Editar </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"center\">\n    <input type=\"file\" (change)=\"showPreview($event)\" class=\"filebtn\" #fileButton/>\n    <img class=\"imagem\"  (click)=\"takePicture()\" [src]=\"img\">\n    <ion-list class=\"margintop\" no-lines>\n      <ion-item lines=\"none\" >\n        <ion-input type=\"text\" placeholder=\"Nome de Usuario\" name=\"id\" [(ngModel)]=\"newUsername\"></ion-input>\n      </ion-item>\n      </ion-list>\n      </div>\n      <div class=\"publicar\">    \n      <ion-button shape=\"round\"  (click)=\"editar() \"  class=\"publicar\">Concluir</ion-button>\n      </div>\n</ion-content>\n";
      /***/
    },

    /***/
    92053:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/evento-pesquisa/evento-pesquisa.page.html ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title  *ngIf=\"pode\" size=\"large\" class=\"centertt\">{{ eventodb.nome }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"margin\" defaultHref=\"pesquisar\" text=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  *ngIf=\"pode\">\n  <div>\n    <ion-card class=\"card\">\n      <img class=\"imagem\" [src]=\"eventodb.url\" />\n    </ion-card>\n    <ion-list lines=\"none\">\n      <ion-item >\n        <ion-button size=\"small\"color=\"primary\"  [disabled]=\"jadeuUP\" (click)=\"UP()\" slot=\"start\">UP</ion-button>\n        {{ eventodb.UPnum }}\n    </ion-item>\n    <ion-item > \n        <ion-icon  size=\"large\" name=\"chatbubble-sharp\" slot=\"start\"></ion-icon>\n        {{ numcoments }}\n    </ion-item>\n      <ion-item>\n        <ion-icon name=\"calendar-outline\" item-start></ion-icon>\n        <h2 class=\"com\"> {{ eventodb.dia }} </h2>\n      </ion-item>\n      <ion-item (click)=\"redirectlink()\">\n        <ion-icon name=\"globe-outline\"></ion-icon>\n        <h2 class=\"com\">Link</h2>\n      </ion-item>\n      <ion-item *ngIf=\"eventodb.local\" (click)=\"redirectmap()\">\n        <ion-icon name=\"location-sharp\" size=\"large\"></ion-icon>\n        <h2 class=\"com\">{{ eventodb.local.description }}</h2>\n      </ion-item>\n      <ion-item (click)=\"redirectUser()\">\n        <ion-icon name=\"person-sharp\"></ion-icon>\n        <h2 class=\"com\">{{ eventodb.userID[1] }}</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n\n  <ion-list lines=\"none\">\n    <ion-item  no-lines>\n      <ion-input placeholder=\"Comentario:\" type=\"string\" [(ngModel)]=\"comentario\"></ion-input>\n      <ion-button color=\"primary\" (click)=\"setcoment()\"   [disabled]=\"noAuth\"> Enviar\n      </ion-button>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <div *ngFor=\"let kdcoment of coments\">\n      <ion-item id=\"output\">\n        <ion-avatar item-start>\n          <img [src]=\"kdcoment.img\">\n        </ion-avatar>\n        <h2 class=\"com\">{{ kdcoment.username }} : {{ kdcoment.comentarioU }} </h2>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    50685:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/eventomodal/eventomodal.page.html ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"x\"(click)=\"close()\" size=\"large\" class=\"centertt\">{{ x.nome }} </ion-title>\n    <ion-icon (click)=\"close()\" class=\"icon\" name=\"chevron-down-sharp\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"black\">\n  <ion-card class=\"card\">\n    <img  class=\"imag\"*ngIf=\"x\" (click)=\"close()\"[src]=\"x.url\" />\n  </ion-card>\n  <ion-list lines=\"none\" no-lines>\n    <ion-item >\n        <ion-button size=\"small\"color=\"primary\"  [disabled]=\"jadeuUP\" (click)=\"UP()\" slot=\"start\">UP</ion-button>\n        {{ UPnum }}\n    </ion-item>\n    <ion-item > \n        <ion-icon  size=\"large\" name=\"chatbubble-sharp\" slot=\"start\"></ion-icon>\n        {{ numcoments }}\n    </ion-item>\n    <ion-item *ngIf=\"x\" >\n      <ion-icon name=\"calendar-outline\" item-start></ion-icon>\n      <h2 class=\"com\"> {{ x.dia }} </h2>\n    </ion-item>\n    <ion-item *ngIf=\"x\" (click)=\"redirectlink()\" >\n      <ion-icon name=\"globe-outline\"></ion-icon>\n      <h2 class=\"com\">Link</h2>\n    </ion-item>\n    <ion-item  *ngIf=\"description\" (click)=\"redirectmap()\">\n      <ion-icon name=\"location-sharp\" size=\"large\"></ion-icon>\n      <h2 class=\"com\">{{ x.local.description }}</h2>\n    </ion-item>\n    <ion-item  *ngIf=\"x\" (click)=\"redirectUser()\">\n      <ion-icon name=\"person-sharp\"></ion-icon>\n      <h2 class=\"com\">{{ x.userID[1] }}</h2>\n    </ion-item>\n  </ion-list>\n  <ion-list (click)=\"comentauth()\" lines=\"none\">\n    <ion-item no-lines >\n      <ion-input  placeholder=\"Comentario:\" type=\"string\" [disabled]=\"noAuth\" [(ngModel)]=\"comentario\"></ion-input>\n      <ion-button color=\"primary\" (click)=\"setcoment()\" [disabled]=\"!comentario.length\"> Enviar\n      </ion-button>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <div *ngFor=\"let kdcoment of coments\" (click)=\"page(kdcoment)\">\n      <ion-item id=\"output\" >\n        <ion-avatar item-start>\n          <img [src]=\"kdcoment.img\">\n        </ion-avatar>\n        <h2 class=\"com\">{{ kdcoment.username }} : {{ kdcoment.comentarioU }} </h2>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-infinite-scroll [disabled]=\"numTimesLeft <= 0\" threshold=\"40%\" (ionInfinite)=\"loadcoments($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Carregando...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
      /***/
    },

    /***/
    38996:
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/eventos-do-usuario/proximo-evento.page.html ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header><ion-toolbar>\n  <ion-title size=\"large\" class=\"centertt\"> Eventos </ion-title>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"home\" text=\"\"></ion-back-button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n";
      /***/
    },

    /***/
    12056:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title size=\"large\" class=\"centertt\" (click)=\"ss()\">Oreon</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"fundo\" #content>\n  <ion-slides  class=\"centertt\" #slides>\n    <ion-slide *ngIf=\"cidade.length > 0 && noAuth == false\">\n      <div>\n        <a class=\"a\">{{ cidadesDoUsuario }}</a>\n        <ion-card *ngFor=\"let evento of cidade\" class=\"card\" (click)=\"showmodal(evento)\" >\n          <img class=\"imagem\" [src]=\"evento.url\" />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>\n              {{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-card *ngFor=\"let evento of cidade3\" class=\"card\"(click)=\"showmodal(evento)\">\n          <img class=\"imagem\" [src]=\"evento.url\"/>\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>\n              {{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadcidade($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n\n    <ion-slide>\n      <div>\n        <a class=\"a\" (click)=\"ss()\"> Nacional </a>\n        <ion-card *ngFor=\"let evento of nacionais \" class=\"card\"(click)=\"showmodal(evento)\">\n          <img class=\"imagem\" [src]=\"evento.url\"  />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-subtitle class=\"branco\">{{ evento.lugar }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>{{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-card *ngFor=\"let evento of nacional\" class=\"card\" (click)=\"showmodal(evento)\" >\n          <img class=\"imagem\" [src]=\"evento.url\" />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-subtitle class=\"branco\">{{ evento.lugar }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>{{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadnacional($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n\n\n\n    <ion-slide *ngIf=\"noAuth\">\n      <div class=\"noauth\">\n        <a class=\"a\" >{{ escolhaNoAuth }}</a>\n        <ion-searchbar class=\"searchbar\" placeholder=\"Escolher cidade\" (ionInput)=\"getItems($event)\" (click)=\"abriu()\"\n          [(ngModel)]=\"_cidade\" clearInput></ion-searchbar>\n        <ion-list *ngIf=\"abrir\" class=\"filtro\" lines=\"none\" no-lines>\n          <ion-item (click)=\"noAuth_cidade(item.lugar)\" *ngFor=\"let item of todositems\" class=\"filtro\">\n            {{ item.lugar }}\n          </ion-item>\n        </ion-list>\n        <ion-card *ngFor=\"let evento of cidade\" class=\"card\" (click)=\"showmodal(evento)\" >\n          <img class=\"imagem\" [src]=\"evento.url\" />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>\n              {{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-card *ngFor=\"let evento of cidade3\"   class=\"card\" (click)=\"showmodal(evento)\" >\n          <img class=\"imagem\" [src]=\"evento.url\"  />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>\n              {{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadcidade($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide> \n\n    <ion-slide *ngIf=\"online.length > 0\">\n      <div>\n        <a class=\"a\"> Online </a>\n        <ion-card *ngFor=\"let evento of online \" class=\"card\"  (click)=\"showmodal(evento)\">\n          <img class=\"imagem\" [src]=\"evento.url\" />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>{{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-card *ngFor=\"let evento of onlines\" class=\"card\" (click)=\"showmodal(evento)\">\n          <img class=\"imagem\" [src]=\"evento.url\"  />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>{{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadOnline($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n  \n  </ion-slides>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"radio-button-off-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button   routerLink=\"/perfil\"  replaceUrl=\"true\" routerDirection=\"forward\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list side=\"end\">\n      <ion-fab-button routerLink=\"/pesquisar\"  replaceUrl=\"true\" routerDirection=\"forward\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list *ngIf=\"noAuth\" side=\"top\">\n      <ion-fab-button (click)=\"ajuda()\">\n        <ion-icon name=\"help\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    99403:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title  class=\"title\">Log in</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"criar-user\" text=\"\" class=\"margin\" (click)=\"voltar()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [hidden]=\"abrir\">\n  <ion-list *ngIf=\"!temqverificar\">\n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\" >Email :</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\">senha :</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n\n    <div>\n    <p class=\"p\" (click)=\"abriu()\">Esqueci minha senha</p>\n    \n  </div>\n\n    <ion-button  shape=\"round\" expand=\"full\" type=\"submit\" (click)=\"login()\">Log in</ion-button>\n  </ion-list>\n\n  <ion-list>\n    <div *ngIf=\"temqverificar\">\n      <h2 class=\"p\" >Enviamos um e-mail de verificação pra você</h2>\n      <ion-item class=\"holder2\"  lines=\"none\">\n        <ion-button size=\"default\" type=\"submit\"  (click)=\"enviaremaildeverific()\">Re-enviar</ion-button>\n        <ion-button size=\"default\" type=\"submit\"  (click)=\"emailverificado()\">Confirmar</ion-button>\n      </ion-item>\n    </div>  \n  </ion-list>\n  <!--\n  <p class=\"p2\" >Log in com Gmail:</p>\n  <ion-button (click)=\"loginGooglecom()\" class=\"google\" >\n    <ion-icon name=\"logo-google\" size=\"large\"></ion-icon>\n  </ion-button>\n\n-->\n</ion-content>\n\n<ion-content [hidden]=\"!abrir\">\n  <div> \n    <p class=\"p\" (click)=\"abriu()\">Voltar</p>\n    <ion-item class=\"holder2\" >\n      <ion-label position=\"floating\">Email da conta :</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"emailrecu\"></ion-input>\n      <ion-button type=\"submit\"  (click)=\"enviar()\">enviar</ion-button>\n    </ion-item>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    95457:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/novo-evento/novo-evento.page.html ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title size=\"large\" class=\"centertt\">Publicar Evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"perfil\" text=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides  #slides>\n    <ion-slide >\n\n        <h2 class=\"th2\">Seu evento é <br> Presencial ou Online?</h2>\n        <ion-button class=\"btn\" expand=\"block\" shape=\"round\" (click)=\"Presencial()\"> Presencial </ion-button>\n        <ion-button expand=\"block\" shape=\"round\" (click)=\"Online()\"> Online </ion-button>\n        <h2 class=\"th2\"></h2>\n       \n    </ion-slide>  \n    <ion-slide>    \n        <h2 class=\"th2\">Banner do evento</h2>\n        <ion-card class=\"card\">\n          <input type=\"file\" (change)=\"showPreview($event)\" class=\"filebtn\" #fileButton/>\n          <img class=\"imagem\"  (click)=\"writeUserData()\" [src]=\"img\">\n        </ion-card>\n        <h2 class=\"th2\"></h2>\n    </ion-slide>\n\n    <ion-slide>\n     \n        <h2 class=\"th2\">O nome</h2>\n        <ion-list class=\"fundo\">\n          <ion-item  lines=\"none\" class=\"itemm\">\n            <ion-input  #myinput enterkeyhint=\"done\" placeholder=\"Show do Kleb\"  type=\"text\" [(ngModel)]=\"nome\" ></ion-input>\n            <ion-button  (click)=\"next()\" color=\"primary\"  [disabled]=\"!nome\"> Confirmar\n            </ion-button>\n          </ion-item>\n        </ion-list>\n  \n    </ion-slide>\n\n    <ion-slide>\n      <h2 class=\"th2\">A data</h2>\n      <ion-list lines=\"none\" >\n        <ion-item id=\"open-modal\" class=\"holder\">\n      \n          <ion-text class=\"holder\" >{{ dia1 }}</ion-text>\n        </ion-item>\n\n        <ion-item id=\"open-modal2\" class=\"holder\">\n  \n          <ion-text class=\"holder\" >{{ dia2 }}</ion-text>\n        </ion-item>\n    </ion-list>\n      <ion-button class=\"btn2\"  shape=\"round\" (click)=\"novaData()\"> Ok </ion-button>\n    </ion-slide>\n\n    <ion-modal trigger=\"open-modal\">\n      <ng-template>\n        <ion-content>\n          <ion-datetime #iondatetime size=\"cover\" \n           [value]=\"dateValue\" \n          (ionChange)=\"dateChanged(datetime.value)\"\n          showDefaultButtons=\"true\">\n           \n          </ion-datetime>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n\n\n    <ion-modal trigger=\"open-modal2\">\n      <ng-template>\n        <ion-content>\n          <ion-datetime #iondatetime size=\"cover\"\n           [value]=\"dateValue\" \n          (ionChange)=\"dateChanged2(datetime.value)\"\n          showDefaultButtons=\"true\">\n           \n          </ion-datetime>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n\n\n    <ion-slide *ngIf=\"presenca\">\n      <h2 class=\"th2\">O link </h2>\n      <ion-list class=\"fundo\">\n        <ion-item  lines=\"none\" class=\"itemm\">\n          <ion-input  #myinput enterkeyhint=\"done\" placeholder=\"Link do evento\"  type=\"url\" [(ngModel)]=\"ingresso\" ></ion-input>\n          <ion-button   color=\"primary\"(click)=\"next()\"  [disabled]=\"!ingresso\"> Confirmar\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide  *ngIf=\"!presenca\">\n      <h2 class=\"th2\">O link </h2>\n      <ion-list class=\"fundo\">\n        <ion-item  lines=\"none\" class=\"itemm\">\n          <ion-input  #myinput enterkeyhint=\"done\" placeholder=\"https:\"  type=\"url\" [(ngModel)]=\"link\" ></ion-input>\n          <ion-button   color=\"primary\"(click)=\"next()\"  [disabled]=\"!link\"> Confirmar\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n  \n    <ion-slide *ngIf=\"presenca\">\n      <ion-list lines=\"none\">\n      <ion-item *ngIf=\"local\" class=\"filtro\">\n        {{ local.description }}\n        <ion-icon (click)=\"next()\" class=\"corbot\" slot=\"end\" name=\"checkmark-circle-outline\"></ion-icon>\n      </ion-item>\n    </ion-list>\n      <ion-searchbar class=\"searchbar\" placeholder=\"Local\" (ionChange)=\"searchChanged()\" [(ngModel)]=\"search\">\n      </ion-searchbar>\n      <ion-list [hidden]=\"!search.length\" class=\"filtro\">\n        <ion-item (click)=\"localizou(result)\" *ngFor=\"let result of searchResults\" class=\"holder\">\n          {{ result.description }}\n        </ion-item>\n      \n       </ion-list> \n    </ion-slide>  \n\n    <ion-slide>\n      <ion-card class=\"card\">\n        <input type=\"file\" (change)=\"showPreview($event)\" class=\"filebtn\" #fileButton/>\n        <img class=\"imagem\"  (click)=\"writeUserData()\" [src]=\"img\">\n      </ion-card>\n      <ion-list lines=\"none\">\n        <ion-item (click)=\"editNome()\" *ngIf=\"nome\" class=\"item1\">\n          <ion-icon  name=\"checkmark-done-outline\"></ion-icon>\n          <h6 class=\"ma\">{{ nome }}</h6>\n        </ion-item>\n        <ion-item  (click)=\"editDia()\" *ngIf=\"dia2\" class=\"item1\">\n          <ion-icon  name=\"calendar-outline\" ></ion-icon>\n          <h6 class=\"ma\">{{ dia2 }}</h6>\n        </ion-item>\n        <ion-item (click)=\"editIngresso()\"  *ngIf=\"ingresso\" class=\"item1\">\n          <ion-icon name=\"globe-outline\"></ion-icon>\n          <h6 class=\"ma\">Link</h6>\n        </ion-item>\n        <ion-item (click)=\"editLink()\"  *ngIf=\"link\" class=\"item1\">\n          <ion-icon name=\"globe-outline\"></ion-icon>\n          <h6 class=\"ma\">Link</h6>\n        </ion-item>\n        <ion-item (click)=\"editLocal()\" *ngIf=\"local\" class=\"item1\">\n          <ion-icon name=\"location-sharp\" size=\"large\"></ion-icon>\n          <h6 class=\"ma\">{{ local.description }}</h6>\n        </ion-item>\n        <ion-item class=\"item1\">\n          <ion-icon  name=\"person-sharp\"></ion-icon>\n          <h6 class=\"ma\">{{ usuario }}</h6>\n        </ion-item>\n      </ion-list>  \n     \n        <ion-button expand=\"block\" shape=\"round\" (click)=\"save()\"> Publicar </ion-button>\n      \n    </ion-slide>  \n  \n  </ion-slides>\n  \n ";
      /***/
    },

    /***/
    87988:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/perfil/perfil.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\n  <ion-toolbar>\n    <ion-title *ngIf=\"perfilnome && noAuth == false\" class=\"title\" size=\"large\">{{ perfilnome }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" (click)=\"voltar()\" text=\"\" ></ion-back-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"noAuth == false\" slot=\"end\" (click)=\"presentActionSheet()\">\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"noAuth == false\">\n  <img *ngIf=\"perfilimg\" (click)=\"showmodal()\" class=\"imagem\" [src]=\"perfilimg\" />\n  <ion-searchbar class=\"searchbar\" placeholder=\"Escolher cidade\" (ionInput)=\"getItems($event)\" (click)=\"abriu()\"  [(ngModel)]=\"cidade\"\n    clearInput></ion-searchbar>\n  <ion-list *ngIf=\"cidade.length > 0 || abrir\" class=\"filtro\" lines=\"none\" no-lines>\n    <ion-item (click)=\"meuslugares(item.lugar)\" *ngFor=\"let item of todositems\" class=\"filtro\">\n      {{ item.lugar }}\n    </ion-item>\n  </ion-list>\n  <ion-slides>\n\n    <ion-slide>\n      <div>\n        <a class=\"a\">Lista de Up</a>\n        <ion-list>\n          <ion-item lines=\"none\" *ngFor=\"let evento of ups\" (click)=\"modalevento(evento)\">\n            <ion-thumbnail>\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item lines=\"none\" *ngFor=\"let evento of ups2\" (click)=\"modalevento(evento)\">\n            <ion-thumbnail>\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-infinite-scroll threshold=\"40%\" (ionInfinite)=\"loadups($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n    <ion-slide  *ngIf=\"criados.length > 0\">\n      <div>\n        <a class=\"a\">Eventos Publicados</a>\n        <ion-list>\n          <ion-item *ngFor=\"let evento of criados\" lines=\"none\">\n            <ion-thumbnail  (click)=\"modalevento(evento)\">\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\"  (click)=\"modalevento(evento)\" >{{ evento.nome }} </h2>\n            <ion-button class=\"excl\" color=\"primary\" (click)=\"deletaract(evento)\" routerDirection=\"backyard\"> Excluir\n            </ion-button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item *ngFor=\"let evento of criados2\" lines=\"none\">\n            <ion-thumbnail  (click)=\"modalevento(evento)\">\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\"  (click)=\"modalevento(evento)\" >{{ evento.nome }} </h2>\n            <ion-button class=\"excl\" color=\"primary\" (click)=\"deletaract(evento)\" routerDirection=\"backyard\"> Excluir\n            </ion-button>\n          </ion-item>\n        </ion-list>\n        <ion-infinite-scroll threshold=\"20%\" (ionInfinite)=\"loadcriados($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n\n<ion-content *ngIf=\"noAuth == true\" padding class=\"ff\">\n  <div class=\"spaço\">\n    <h1 class=\"title\">Bem Vindo</h1>\n    <div>\n    <ion-col>\n    <ion-button  color=\"primary\"  routerLink=\"/criar\" style=\"padding-left:75px\">Criar</ion-button>\n    <ion-button color=\"primary\" routerLink=\"/login\" style=\"padding-right:75px\">Login</ion-button>\n    </ion-col>\n  </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    51673:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pesquisar/pesquisar.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" text=\"\" class=\"margin\" (click)=\"voltar()\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar class=\"searchbar\" placeholder=\"Eventos\" [(ngModel)]=\"queryText\" (ionInput)=\"filterEvento($event)\" clearInput>\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item (click)=\"pesq(evento)\" no lines *ngFor=\"let evento of eventoY\">\n      <ion-thumbnail item-start>\n        <img class=\"\" [src]=\"evento.dataseet.url\">\n      </ion-thumbnail>\n      <div>\n      <h2 class=\"com\">{{ evento.dataseet.nome }}  </h2>\n      <h3 class=\"sub\">{{ evento.dataseet.lugar }}</h3>\n    </div>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    5874:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tutorial/tutorial.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">Tutorial</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content> \n  <ion-slides class=\"slide\" pager=\"true\" >\n    <ion-slide>\n      <div>\n      <img src=\"../../assets/Tutorial1.png\">\n      <img src=\"../../assets/tutorial2.jpg\">\n      <h2 class=\"p\">No texto azul deslize pro lado para checar outras listas.</h2>\n     </div>\n    </ion-slide>\n    <ion-slide>\n      <div>\n        <img src=\"../../assets/tutorial3.png\">\n        <h2 class=\"p\">Toque na imagem para abrir/fechar detalhes do evento.</h2>\n       </div>\n    </ion-slide>\n    <ion-slide >\n      <div>\n        <img class=\"slide3\" src=\"../../assets/tutorial5.png\">\n        <h2 class=\"p\">Ups determinam a posição do evento. Quanto mais Ups, mais acima nas listas.</h2>\n       </div>\n    </ion-slide>\n  </ion-slides> \n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-button shape=\"round\" expand=\"full\" type=\"submit\" (click)=\"close()\">Pular</ion-button>\n\n</ion-footer>";
      /***/
    },

    /***/
    64846:
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/usuario-pesquisa/usuario-pesquisa.page.html ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngFor=\"let user of userrr \">\n  <ion-toolbar>\n    <ion-title class=\"title\" size=\"large\">{{ user.username }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" (click)=\"presentActionSheet()\">\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img *ngFor=\"let user of userrr \" class=\"imagem\" [src]=\"user.imgUser\" />\n<h2>  </h2>\n\n  <ion-slides>\n\n    <ion-slide>\n      <div>\n        <a class=\"a\">Lista de Up</a>\n        <ion-list>\n          <ion-item lines=\"none\" *ngFor=\"let evento of eventos\" (click)=\"showmodal(evento)\">\n            <ion-thumbnail>\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item lines=\"none\" *ngFor=\"let evento of eventos2\" (click)=\"showmodal(evento)\">\n            <ion-thumbnail>\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-infinite-scroll threshold=\"40%\" (ionInfinite)=\"loadups($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n    <ion-slide *ngIf=\"criados.length > 0\">\n      <div>\n        <a class=\"a\">Eventos Publicados</a>\n        <ion-list lines=\"none\">\n          <ion-item *ngFor=\"let evento of criados\" class=\"card\" (click)=\"showmodal(evento)\" lines=\"none\">\n            <ion-thumbnail (click)=\"showmodal(evento)\">\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-list lines=\"none\">\n          <ion-item *ngFor=\"let evento of criados2\" class=\"card\" (click)=\"showmodal(evento)\" lines=\"none\">\n            <ion-thumbnail (click)=\"showmodal(evento)\">\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-infinite-scroll threshold=\"40%\" (ionInfinite)=\"loadcriados($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n\n  <ion-content>";
      /***/
    },

    /***/
    46700:
    /*!***************************************************!*\
      !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
      \***************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 62275,
        "./af.js": 62275,
        "./ar": 90857,
        "./ar-dz": 11218,
        "./ar-dz.js": 11218,
        "./ar-kw": 14754,
        "./ar-kw.js": 14754,
        "./ar-ly": 66680,
        "./ar-ly.js": 66680,
        "./ar-ma": 92178,
        "./ar-ma.js": 92178,
        "./ar-sa": 56522,
        "./ar-sa.js": 56522,
        "./ar-tn": 95682,
        "./ar-tn.js": 95682,
        "./ar.js": 90857,
        "./az": 70164,
        "./az.js": 70164,
        "./be": 79774,
        "./be.js": 79774,
        "./bg": 60947,
        "./bg.js": 60947,
        "./bm": 21832,
        "./bm.js": 21832,
        "./bn": 89650,
        "./bn-bd": 74477,
        "./bn-bd.js": 74477,
        "./bn.js": 89650,
        "./bo": 66005,
        "./bo.js": 66005,
        "./br": 98492,
        "./br.js": 98492,
        "./bs": 70534,
        "./bs.js": 70534,
        "./ca": 52061,
        "./ca.js": 52061,
        "./cs": 84737,
        "./cs.js": 84737,
        "./cv": 61167,
        "./cv.js": 61167,
        "./cy": 77996,
        "./cy.js": 77996,
        "./da": 9528,
        "./da.js": 9528,
        "./de": 14540,
        "./de-at": 49430,
        "./de-at.js": 49430,
        "./de-ch": 67978,
        "./de-ch.js": 67978,
        "./de.js": 14540,
        "./dv": 83426,
        "./dv.js": 83426,
        "./el": 6616,
        "./el.js": 6616,
        "./en-au": 63816,
        "./en-au.js": 63816,
        "./en-ca": 32162,
        "./en-ca.js": 32162,
        "./en-gb": 83305,
        "./en-gb.js": 83305,
        "./en-ie": 61954,
        "./en-ie.js": 61954,
        "./en-il": 43060,
        "./en-il.js": 43060,
        "./en-in": 59923,
        "./en-in.js": 59923,
        "./en-nz": 13540,
        "./en-nz.js": 13540,
        "./en-sg": 16505,
        "./en-sg.js": 16505,
        "./eo": 41907,
        "./eo.js": 41907,
        "./es": 86640,
        "./es-do": 41246,
        "./es-do.js": 41246,
        "./es-mx": 56131,
        "./es-mx.js": 56131,
        "./es-us": 36430,
        "./es-us.js": 36430,
        "./es.js": 86640,
        "./et": 62551,
        "./et.js": 62551,
        "./eu": 32711,
        "./eu.js": 32711,
        "./fa": 54572,
        "./fa.js": 54572,
        "./fi": 33390,
        "./fi.js": 33390,
        "./fil": 87860,
        "./fil.js": 87860,
        "./fo": 48216,
        "./fo.js": 48216,
        "./fr": 99291,
        "./fr-ca": 98527,
        "./fr-ca.js": 98527,
        "./fr-ch": 58407,
        "./fr-ch.js": 58407,
        "./fr.js": 99291,
        "./fy": 47054,
        "./fy.js": 47054,
        "./ga": 49540,
        "./ga.js": 49540,
        "./gd": 73917,
        "./gd.js": 73917,
        "./gl": 51486,
        "./gl.js": 51486,
        "./gom-deva": 56245,
        "./gom-deva.js": 56245,
        "./gom-latn": 48868,
        "./gom-latn.js": 48868,
        "./gu": 59652,
        "./gu.js": 59652,
        "./he": 89019,
        "./he.js": 89019,
        "./hi": 42040,
        "./hi.js": 42040,
        "./hr": 63402,
        "./hr.js": 63402,
        "./hu": 79322,
        "./hu.js": 79322,
        "./hy-am": 27609,
        "./hy-am.js": 27609,
        "./id": 57942,
        "./id.js": 57942,
        "./is": 98275,
        "./is.js": 98275,
        "./it": 73053,
        "./it-ch": 4378,
        "./it-ch.js": 4378,
        "./it.js": 73053,
        "./ja": 46176,
        "./ja.js": 46176,
        "./jv": 679,
        "./jv.js": 679,
        "./ka": 92726,
        "./ka.js": 92726,
        "./kk": 72953,
        "./kk.js": 72953,
        "./km": 86957,
        "./km.js": 86957,
        "./kn": 59181,
        "./kn.js": 59181,
        "./ko": 47148,
        "./ko.js": 47148,
        "./ku": 27752,
        "./ku.js": 27752,
        "./ky": 65675,
        "./ky.js": 65675,
        "./lb": 41263,
        "./lb.js": 41263,
        "./lo": 65746,
        "./lo.js": 65746,
        "./lt": 11143,
        "./lt.js": 11143,
        "./lv": 38753,
        "./lv.js": 38753,
        "./me": 44054,
        "./me.js": 44054,
        "./mi": 31573,
        "./mi.js": 31573,
        "./mk": 30202,
        "./mk.js": 30202,
        "./ml": 68523,
        "./ml.js": 68523,
        "./mn": 79794,
        "./mn.js": 79794,
        "./mr": 56681,
        "./mr.js": 56681,
        "./ms": 56975,
        "./ms-my": 39859,
        "./ms-my.js": 39859,
        "./ms.js": 56975,
        "./mt": 3691,
        "./mt.js": 3691,
        "./my": 5152,
        "./my.js": 5152,
        "./nb": 7607,
        "./nb.js": 7607,
        "./ne": 21526,
        "./ne.js": 21526,
        "./nl": 86368,
        "./nl-be": 40076,
        "./nl-be.js": 40076,
        "./nl.js": 86368,
        "./nn": 68420,
        "./nn.js": 68420,
        "./oc-lnc": 51906,
        "./oc-lnc.js": 51906,
        "./pa-in": 94504,
        "./pa-in.js": 94504,
        "./pl": 54721,
        "./pl.js": 54721,
        "./pt": 74645,
        "./pt-br": 54548,
        "./pt-br.js": 54548,
        "./pt.js": 74645,
        "./ro": 71977,
        "./ro.js": 71977,
        "./ru": 26042,
        "./ru.js": 26042,
        "./sd": 78849,
        "./sd.js": 78849,
        "./se": 27739,
        "./se.js": 27739,
        "./si": 50084,
        "./si.js": 50084,
        "./sk": 92449,
        "./sk.js": 92449,
        "./sl": 23086,
        "./sl.js": 23086,
        "./sq": 33139,
        "./sq.js": 33139,
        "./sr": 30607,
        "./sr-cyrl": 30063,
        "./sr-cyrl.js": 30063,
        "./sr.js": 30607,
        "./ss": 40131,
        "./ss.js": 40131,
        "./sv": 21665,
        "./sv.js": 21665,
        "./sw": 5642,
        "./sw.js": 5642,
        "./ta": 33622,
        "./ta.js": 33622,
        "./te": 74825,
        "./te.js": 74825,
        "./tet": 48336,
        "./tet.js": 48336,
        "./tg": 39238,
        "./tg.js": 39238,
        "./th": 99463,
        "./th.js": 99463,
        "./tk": 39986,
        "./tk.js": 39986,
        "./tl-ph": 29672,
        "./tl-ph.js": 29672,
        "./tlh": 40043,
        "./tlh.js": 40043,
        "./tr": 51212,
        "./tr.js": 51212,
        "./tzl": 50110,
        "./tzl.js": 50110,
        "./tzm": 80482,
        "./tzm-latn": 38309,
        "./tzm-latn.js": 38309,
        "./tzm.js": 80482,
        "./ug-cn": 42495,
        "./ug-cn.js": 42495,
        "./uk": 54157,
        "./uk.js": 54157,
        "./ur": 80984,
        "./ur.js": 80984,
        "./uz": 64141,
        "./uz-latn": 43662,
        "./uz-latn.js": 43662,
        "./uz.js": 64141,
        "./vi": 12607,
        "./vi.js": 12607,
        "./x-pseudo": 66460,
        "./x-pseudo.js": 66460,
        "./yo": 92948,
        "./yo.js": 92948,
        "./zh-cn": 62658,
        "./zh-cn.js": 62658,
        "./zh-hk": 39352,
        "./zh-hk.js": 39352,
        "./zh-mo": 38274,
        "./zh-mo.js": 38274,
        "./zh-tw": 98451,
        "./zh-tw.js": 98451
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    },

    /***/
    53040:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = ".ff {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZme1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSJdfQ== */";
      /***/
    },

    /***/
    24340:
    /*!*************************************************!*\
      !*** ./src/app/criar-user/criar-user.page.scss ***!
      \*************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "@charset \"UTF-8\";\n.fundo {\n  background-color: black;\n  color: white;\n}\n.title {\n  text-align: center;\n  color: white;\n  background-color: black;\n}\n.aloha {\n  background-color: black;\n}\n.titlee {\n  text-align: center;\n  color: white;\n  background-color: black;\n}\n.later {\n  color: #3388ff;\n  padding-top: 2em;\n}\n.spaço {\n  text-align: center;\n  color: white;\n  background-color: black;\n  margin-top: 25em;\n}\nion-content {\n  --ion-background-color: #000000;\n}\nion-toolbar {\n  margin-top: 0.7em;\n  --background: black;\n  --padding-top: 15px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUdGO0FBREE7RUFDRSx1QkFBQTtBQUlGO0FBRkU7RUFDTSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUtSO0FBRkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFLTjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUtKO0FBSEE7RUFDSSwrQkFBQTtBQU1KO0FBSEk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFNTiIsImZpbGUiOiJjcmlhci11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdW5kb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5hbG9oYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICAgICAgICAgICBcbn1cbiAgLnRpdGxlZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIH1cbiBcbiAgICAubGF0ZXJ7XG4gICAgICBjb2xvcjogIzMzODhmZjtcbiAgICAgIHBhZGRpbmctdG9wOiAyZW07XG4gICAgfVxuXG4uc3Bhw6dve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMjVlbTtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgICBpb24tdG9vbGJhcntcbiAgICAgIG1hcmdpbi10b3A6IDAuN2VtIDtcbiAgICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAtLXBhZGRpbmctdG9wOiAxNXB4IDtcbiAgICB9XG5cbiAgIl19 */";
      /***/
    },

    /***/
    98958:
    /*!***************************************!*\
      !*** ./src/app/criar/criar.page.scss ***!
      \***************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-toolbar {\n  --padding-top: 56px ;\n  --background: black;\n}\n\nion-content {\n  --ion-background-color: #000000;\n  --ion-color:#FFFFFF;\n}\n\nion-title {\n  --color: white;\n  size: large;\n}\n\n.holder {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:black;\n}\n\n.p {\n  color: white;\n  margin-left: 1em;\n  margin-top: 0.5em;\n  margin-right: 1em;\n  padding-bottom: 1em;\n}\n\n.google {\n  color: white;\n  padding-left: 10%;\n}\n\n.pp {\n  color: white;\n  margin-left: 2ex;\n  margin-top: 2ex;\n}\n\n.title {\n  text-align: center;\n  color: white;\n  font-size: 30px;\n}\n\n.holder2 {\n  color: #FFFFFF;\n  margin-top: -1ex;\n  --placeholder-color:#FFFFFF;\n  --placeholder-opacity: -100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNHLCtCQUFBO0VBQ0EsbUJBQUE7QUFDSDs7QUFDQztFQUNTLGNBQUE7RUFDQSxXQUFBO0FBRVY7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkM7RUFDRyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFLSiIsImZpbGUiOiJjcmlhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLXBhZGRpbmctdG9wOiA1NnB4IDtcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuICBcbmlvbi1jb250ZW50IHtcbiAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAtLWlvbi1jb2xvcjojRkZGRkZGO1xuIH1cbiBpb24tdGl0bGV7XG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgc2l6ZTogbGFyZ2U7XG4gfVxuXG4uaG9sZGVye1xuICAgIC0tY29sb3I6ICNGRkZGRkY7IFxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG59XG4ucHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5nb29nbGV7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIFxuICAgXG4gIH1cbiAgLnBwe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMmV4O1xuICAgIG1hcmdpbi10b3A6IDJleDtcbn1cbi50aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiB9XG4gLmhvbGRlcjJ7XG4gICAgY29sb3I6ICNGRkZGRkY7IFxuICAgIG1hcmdpbi10b3A6IC0xZXg7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLTEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
      /***/
    },

    /***/
    94237:
    /*!*****************************************************!*\
      !*** ./src/app/editar-modal/editar-modal.page.scss ***!
      \*****************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = ".filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em;\n}\n\nion-content {\n  --background: black;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\nion-item {\n  --placeholder-color:#FFFFFF;\n  --background:black;\n  --color: white;\n}\n\n.vertical-center {\n  text-align: center;\n  margin: auto;\n  position: absolute;\n  transform: translateX(-50%, -50%);\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.publicar {\n  text-align: center;\n}\n\n.imagem {\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n}\n\n.margintop {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUNBO0VBQ0MsbUJBQUE7QUFFRDs7QUFDRTtFQUNFLG9CQUFBO0VBQ0gsbUJBQUE7RUFDQSxjQUFBO0FBRUQ7O0FBQUE7RUFDQywyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdEOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQyxpQ0FBQTtBQUdGOztBQURFO0VBQ0Qsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFJRDs7QUFERTtFQUNELGtCQUFBO0FBSUQ7O0FBREU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNDLGVBQUE7QUFLRCIsImZpbGUiOiJlZGl0YXItbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVidG4ge1xuXHRvcGFjaXR5OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTEwMGVtO1xuXHRsZWZ0OiAtMTAwZW07XG59XG5pb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cblxuICBpb24tdG9vbGJhcntcbiAgICAtLXBhZGRpbmctdG9wOiAyNHB4IDtcblx0LS1iYWNrZ3JvdW5kOiBibGFjaztcblx0LS1jb2xvciA6IHdoaXRlO1xufVxuaW9uLWl0ZW17XG5cdC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcblx0LS1iYWNrZ3JvdW5kOmJsYWNrO1xuXHQtLWNvbG9yOiB3aGl0ZTtcbiAgXG59XG4udmVydGljYWwtY2VudGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IGF1dG87XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUsIC01MCUpO1xuICB9XG4gIC5jZW50ZXJ0dHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0Y29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLnB1YmxpY2Fye1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW1hZ2Vte1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG59XG4ubWFyZ2ludG9we1xuXHRtYXJnaW4tdG9wOiAxZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    93000:
    /*!***********************************************************!*\
      !*** ./src/app/evento-pesquisa/evento-pesquisa.page.scss ***!
      \***********************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n.margin {\n  padding-right: 1em;\n  margin-right: 1em;\n  --icon-margin-end: 1em;\n  --icon-padding-end: 1em;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\nion-content {\n  --background: black;\n}\n\n#center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: black;\n}\n\n.centertext {\n  text-align: center;\n}\n\n.centertt {\n  margin-left: 0.5em;\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.branco {\n  color: white;\n}\n\n.card {\n  align-content: center;\n  background-color: #1C1C1C;\n  color: white;\n  text-align: center;\n}\n\n.fundo {\n  background-color: black;\n  color: white;\n}\n\n.imagem {\n  height: 50%;\n  width: 100%;\n  align-content: center !important;\n  max-height: 35vh !important;\n  width: 100% !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n}\n\n.textevent {\n  color: white;\n  margin-right: 25ex;\n}\n\nion-item {\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\n.a {\n  margin-top: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.com {\n  font-size: 2ex;\n  padding-left: 1ex;\n}\n\n.inic {\n  --padding-start: 18ex;\n  letter-spacing: 0, 5ex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50by1wZXNxdWlzYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFISjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBSUU7RUFDRSxxQkFBQTtBQURKOztBQUdFO0VBRUUsb0JBQUE7RUFDRixtQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJRTtFQUNFLG1CQUFBO0FBREo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFFRTtFQUNJLGtCQUFBO0FBQ047O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0FBR0o7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7S0FBQSw0QkFBQTtBQUtKOztBQURFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUhFO0VBQ0UsY0FBQTtFQUNBLGlCQUNBO0FBS0o7O0FBSEU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBTUoiLCJmaWxlIjoiZXZlbnRvLXBlc3F1aXNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tYXJnaW57XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIC0taWNvbi1tYXJnaW4tZW5kOiAxZW07XG4gICAgLS1pY29uLXBhZGRpbmctZW5kOiAxZW07XG4gIH1cbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgaW9uLXRvb2xiYXJ7XG4gICAgXG4gICAgLS1wYWRkaW5nLXRvcDogMjRweCA7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIC0tY29sb3IgOiB3aGl0ZTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gICNjZW50ZXJ7XG4gICAgZGlzcGxheTogZmxleCw7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIC5jZW50ZXJ0ZXh0e1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jZW50ZXJ0dHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYnJhbmNve1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG4gIFxuICAuY2FyZHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUMxQztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmZ1bmRve1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaW1hZ2Vte1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDM1dmggICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICAgXG4gIH1cbiAgXG4gIC50ZXh0ZXZlbnR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMjVleDtcbiAgfVxuICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgLS1jb2xvcjojRkZGRkZGO1xufVxuICAuYXtcbiAgICBtYXJnaW4tdG9wOiAxZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICB9XG4gIFxuICAuY29te1xuICAgIGZvbnQtc2l6ZTogMmV4O1xuICAgIHBhZGRpbmctbGVmdDogXG4gICAgMWV4O1xuICB9IFxuICAuaW5pY3tcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4ZXg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAsNWV4O1xuICB9Il19 */";
      /***/
    },

    /***/
    86861:
    /*!***************************************************!*\
      !*** ./src/app/eventomodal/eventomodal.page.scss ***!
      \***************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-content {\n  --background: black;\n}\n\n.card {\n  background-color: #1C1C1C;\n  color: white;\n}\n\n.imag {\n  height: 50%;\n  width: 100%;\n  align-content: center !important;\n  max-height: 35vh !important;\n  width: 100% !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n}\n\nion-item {\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\nion-col {\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\n.p {\n  margin-bottom: -25px;\n}\n\n.black {\n  background-color: black;\n}\n\n.textevent {\n  color: white;\n  margin-right: 25ex;\n}\n\n.icon {\n  color: white;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.branco {\n  color: white;\n  text-align: center;\n}\n\n.com {\n  font-size: 2ex;\n  padding-left: 1ex;\n}\n\n.badge {\n  font-size: 2ex;\n}\n\n.inic {\n  --min-height:2em;\n  letter-spacing: 0, 5ex;\n}\n\n.icon {\n  padding-left: 46ex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50b21vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7S0FBQSw0QkFBQTtBQUdKOztBQURFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFIQTtFQUNFLG9CQUFBO0FBTUY7O0FBSkE7RUFDRSx1QkFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBUUY7O0FBTkE7RUFDRSxZQUFBO0FBU0Y7O0FBUEE7RUFDRSxvQkFBQTtFQUNGLG1CQUFBO0VBQ0EsY0FBQTtBQVVBOztBQVJBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFXRjs7QUFUQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVZDO0VBQ0UsY0FBQTtFQUNBLGlCQUNBO0FBWUg7O0FBVkE7RUFDRSxjQUFBO0FBYUY7O0FBWEE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FBY0Y7O0FBWkE7RUFDRSxrQkFBQTtBQWVGIiwiZmlsZSI6ImV2ZW50b21vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gIC5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbi5pbWFne1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDM1dmggICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAtLWNvbG9yOiNGRkZGRkY7XG59XG5pb24tY29se1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIC0tY29sb3I6I0ZGRkZGRjtcbn1cbi5we1xuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbn1cbi5ibGFja3tcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4udGV4dGV2ZW50e1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMjVleDtcbn1cbi5pY29ue1xuICBjb2xvcjp3aGl0ZTtcbn1cbmlvbi10b29sYmFye1xuICAtLXBhZGRpbmctdG9wOiAyNHB4IDtcbi0tYmFja2dyb3VuZDogYmxhY2s7XG4tLWNvbG9yIDogd2hpdGU7XG59XG4uY2VudGVydHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5icmFuY297XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiAuY29te1xuICAgZm9udC1zaXplOiAyZXg7XG4gICBwYWRkaW5nLWxlZnQ6IFxuICAgMWV4O1xuIH1cbi5iYWRnZXtcbiAgZm9udC1zaXplOiAyZXg7XG59XG4uaW5pY3tcbiAgLS1taW4taGVpZ2h0OjJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAsNWV4O1xufVxuLmljb257XG4gIHBhZGRpbmctbGVmdDogNDZleDtcbn0iXX0= */";
      /***/
    },

    /***/
    68617:
    /*!*************************************************************!*\
      !*** ./src/app/eventos-do-usuario/proximo-evento.page.scss ***!
      \*************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-content {\n  --background: black;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\nion-item {\n  --placeholder-color:#FFFFFF;\n  --background:black;\n  --color: white;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.a {\n  margin-top: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3hpbW8tZXZlbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFBO0FBQ0Q7O0FBRUU7RUFDRSxvQkFBQTtFQUNILG1CQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUNBO0VBQ0MsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRDs7QUFDQTtFQUNDLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRUQ7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSiIsImZpbGUiOiJwcm94aW1vLWV2ZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cblxuICBpb24tdG9vbGJhcntcbiAgICAtLXBhZGRpbmctdG9wOiAyNHB4IDtcblx0LS1iYWNrZ3JvdW5kOiBibGFjaztcblx0LS1jb2xvciA6IHdoaXRlO1xufVxuaW9uLWl0ZW17XG5cdC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcblx0LS1iYWNrZ3JvdW5kOmJsYWNrO1xuXHQtLWNvbG9yOiB3aGl0ZTtcbiAgXG59XG4uY2VudGVydHR7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYXtcbiAgICBtYXJnaW4tdG9wOiAxZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    18847:
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-toolbar {\n  margin-top: 0.7em;\n  --background: black;\n  --padding-top: 15px ;\n}\n\n.noauth {\n  width: 100%;\n}\n\nion-item {\n  --background: black;\n  color: white;\n}\n\n.searchbar {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#1C1C1C;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content {\n  --background: black;\n}\n\n#center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: black;\n}\n\n.centertext {\n  text-align: center;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.branco {\n  color: white;\n}\n\n.brancotitle {\n  color: white;\n  margin-bottom: 0.2em;\n}\n\n.card {\n  align-content: center;\n  background-color: #131313;\n  color: white;\n  text-align: center;\n}\n\n.fundo {\n  background-color: black;\n  color: white;\n}\n\n.imagem {\n  align-content: center;\n  max-height: 17em;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n\n.a {\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.refresh {\n  color: white;\n  --color: white;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFLRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUxBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0FBUUY7O0FBTkE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVNGOztBQU5BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQVNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gIG1hcmdpbi10b3A6IDAuN2VtIDtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgLS1wYWRkaW5nLXRvcDogMTVweCA7XG59XG5cbi5ub2F1dGh7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taXRlbXtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlYXJjaGJhcntcbiAgLS1jb2xvcjogI0ZGRkZGRjsgXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgLS1iYWNrZ3JvdW5kOiMxQzFDMUM7XG59XG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cbiNjZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXgsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uY2VudGVydGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2VudGVydHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5icmFuY297XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uYnJhbmNvdGl0bGV7XG4gIGNvbG9yOndoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbn1cbi5jYXJke1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzMTM7XG4gIGNvbG9yOndoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZnVuZG97XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaW1hZ2Vte1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDE3ZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5he1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOngtbGFyZ2U7XG59XG5cbi5yZWZyZXNoe1xuICBjb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiAiXX0= */";
      /***/
    },

    /***/
    59006:
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-toolbar {\n  --padding-top: 56px ;\n  --background: black;\n}\n\nion-content {\n  --ion-background-color: #000000;\n  --ion-color:#FFFFFF;\n}\n\nion-title {\n  --color: white;\n  size: large;\n}\n\n.holder {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:black;\n}\n\n.holder2 {\n  color: #FFFFFF;\n  margin-top: -1ex;\n  --placeholder-color:#FFFFFF;\n  --placeholder-opacity: -100%;\n}\n\n.holder3 {\n  color: #FFFFFF;\n  margin-top: -1.5ex;\n  --placeholder-color:#FFFFFF;\n  --placeholder-opacity: -100%;\n}\n\n.title {\n  text-align: center;\n  color: white;\n  font-size: 30px;\n}\n\n.p {\n  color: white;\n  margin-left: 1em;\n  margin-top: 0.5em;\n  margin-right: 1em;\n  padding-bottom: 1em;\n}\n\n.google {\n  color: white;\n  padding-left: 10%;\n}\n\n.p2 {\n  color: white;\n  margin-left: 2ex;\n  margin-top: 2ex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNHLCtCQUFBO0VBQ0EsbUJBQUE7QUFBSDs7QUFFQztFQUNTLGNBQUE7RUFDQSxXQUFBO0FBQ1Y7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQztFQUNHLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgLS1wYWRkaW5nLXRvcDogNTZweCA7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuICBcbmlvbi1jb250ZW50IHtcbiAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAtLWlvbi1jb2xvcjojRkZGRkZGO1xuIH1cbiBpb24tdGl0bGV7XG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgc2l6ZTogbGFyZ2U7XG4gfVxuLmhvbGRlcntcbiAgICAtLWNvbG9yOiAjRkZGRkZGOyBcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiNGRkZGRkY7XG4gICAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xufVxuLmhvbGRlcjJ7XG4gICAgY29sb3I6ICNGRkZGRkY7IFxuICAgIG1hcmdpbi10b3A6IC0xZXg7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLTEwMCU7XG59XG4uaG9sZGVyM3tcbiAgICBjb2xvcjogI0ZGRkZGRjsgXG4gICAgbWFyZ2luLXRvcDogLTEuNWV4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC0xMDAlO1xufVxuLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuIH1cbiAucHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5nb29nbGV7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG5cbiAgIFxufVxuXG4ucDJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyZXg7XG4gICAgbWFyZ2luLXRvcDogMmV4O1xufVxuIl19 */";
      /***/
    },

    /***/
    47805:
    /*!***************************************************!*\
      !*** ./src/app/novo-evento/novo-evento.page.scss ***!
      \***************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = ".corbot {\n  color: #3880ff;\n}\n\n.shw {\n  margin-top: -10em;\n  padding-top: -4em;\n}\n\nion-slide {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 90%;\n}\n\n.icon {\n  color: #FFFFFF;\n  margin-top: -1em;\n}\n\n.th2 {\n  color: #FFFFFF;\n  text-align: left;\n}\n\nion-content {\n  --ion-background-color: #000000;\n}\n\n.item1 {\n  margin-top: 0.1em;\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\n.itemm {\n  margin-top: 1em;\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n}\n\n.searchbar {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#1C1C1C;\n}\n\n.imag {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.ma {\n  margin-left: 1em;\n}\n\n.card {\n  max-height: 35vh;\n  align-content: center;\n  background: rgba(92, 92, 92, 0.473);\n  color: white;\n}\n\n.holder {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#000000;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.publicar {\n  text-align: center;\n}\n\nion-list {\n  --background-color: #1C1C1C;\n  --color: white;\n}\n\n.filtro {\n  --background-color:#1C1C1C;\n  --color: white;\n}\n\n.filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em;\n}\n\n.btn {\n  margin-top: 85%;\n}\n\n.btn2 {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdm8tZXZlbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7QUFBSjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsK0JBQUE7QUFFSjs7QUFDSTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRU47O0FBQUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBQUk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBR047O0FBREU7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFGQztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUtGOztBQUhDO0VBQ0UsZ0JBQUE7QUFNSDs7QUFKQztFQUNDLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7QUFPRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDQywyQkFBQTtFQUNDLGNBQUE7QUFVRjs7QUFSQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQVdGOztBQVRBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFZRDs7QUFWQTtFQUNFLGVBQUE7QUFhRjs7QUFYQTtFQUNFLGVBQUE7QUFjRiIsImZpbGUiOiJub3ZvLWV2ZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmNvcmJvdHtcbiAgICBjb2xvciA6IzM4ODBmZjtcbiAgfVxuICBcblxuICAuc2h3e1xuICAgIG1hcmdpbi10b3A6IC0xMGVtO1xuICAgIHBhZGRpbmctdG9wOiAtNGVtO1xuICB9XG4gIGlvbi1zbGlkZXsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTAlXG4gIH1cblxuICAuaWNvbntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAtMWVtO1xuICB9XG4gIC50aDJ7ICBcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO31cblxuICAgIFxuICAgIC5pdGVtMXtcbiAgICAgIG1hcmdpbi10b3A6MC4xZW07XG4gICAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAtLWNvbG9yOiNGRkZGRkY7XG4gIH1cbiAgLml0ZW1te1xuICAgIG1hcmdpbi10b3A6MWVtO1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAtLWNvbG9yOiNGRkZGRkY7XG59XG5cbiAgICBpb24tdG9vbGJhcntcbiAgICAgIC0tcGFkZGluZy10b3A6IDI0cHggO1xuICAgICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICAuc2VhcmNoYmFye1xuICAgIC0tY29sb3I6ICNGRkZGRkY7IFxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgICAtLWJhY2tncm91bmQ6IzFDMUMxQztcbiB9XG4gLmltYWd7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuIH1cbiAubWF7XG4gICBtYXJnaW4tbGVmdDogMWVtO1xuIH1cbiAuY2FyZHtcbiAgbWF4LWhlaWdodDogMzV2aCA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjs7XG4gIGJhY2tncm91bmQ6cmdiYSg5MiwgOTIsIDkyLCAwLjQ3Myk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhvbGRlcntcbiAgLS1jb2xvcjogI0ZGRkZGRjsgXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgLS1iYWNrZ3JvdW5kOiMwMDAwMDA7XG59ICBcbi5jZW50ZXJ0dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLnB1YmxpY2Fye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tbGlzdHtcbiAtLWJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuLmZpbHRyb3tcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiMxQzFDMUM7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuLmZpbGVidG4ge1xuXHRvcGFjaXR5OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTEwMGVtO1xuXHRsZWZ0OiAtMTAwZW07XG59XG4uYnRue1xuICBtYXJnaW4tdG9wOiA4NSU7XG59XG4uYnRuMntcbiAgbWFyZ2luLXRvcDogMTAlO1xufSJdfQ== */";
      /***/
    },

    /***/
    62829:
    /*!*****************************************!*\
      !*** ./src/app/perfil/perfil.page.scss ***!
      \*****************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "@charset \"UTF-8\";\n.Perfil {\n  text-align: center;\n  color: white;\n  size: large;\n}\nion-content {\n  --ion-background-color: #000000;\n}\nion-toolbar {\n  --padding-top: 15px ;\n  --background: black;\n}\nion-icon {\n  color: white;\n}\n.title {\n  text-align: center;\n  color: white;\n}\n.badge {\n  --padding-end: ;\n}\nion-item {\n  --background: black;\n  color: white;\n}\n.p {\n  color: white;\n}\n.titlee {\n  text-align: center;\n  color: white;\n  background-color: black;\n}\n.spaço {\n  text-align: center;\n  color: white;\n  background-color: black;\n  margin-top: 25em;\n}\n.searchbar {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#1C1C1C;\n}\n.excl {\n  padding-left: 1ex;\n}\n.imagem {\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n}\n.a {\n  margin-top: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n.com {\n  font-size: 3ex;\n  padding-left: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  color: white;\n  padding-bottom: 1ex;\n}\n.imag {\n  padding-top: 1ex;\n  padding-bottom: 1ex;\n}\n.sub {\n  font-size: 15px;\n  color: #5f5f5f;\n  padding-left: 2ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREE7RUFDSSwrQkFBQTtBQUlKO0FBREM7RUFDRyxvQkFBQTtFQUNBLG1CQUFBO0FBSUo7QUFGQTtFQUNFLFlBQUE7QUFLRjtBQUhBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBTUo7QUFKQTtFQUNFLGVBQUE7QUFPRjtBQUxDO0VBQ0ksbUJBQUE7RUFDQyxZQUFBO0FBUU47QUFMQztFQUNJLFlBQUE7QUFRTDtBQU5DO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFTRjtBQU5BO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVNBO0FBUEM7RUFDRyxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFVSjtBQVJDO0VBQ0UsaUJBQUE7QUFXSDtBQVRDO0VBQ0csa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBWUo7QUFUQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVlKO0FBVkU7RUFDRCxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQWFEO0FBWEU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFjSjtBQVpFO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWVOO0FBYkU7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBZ0JOIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUGVyZmlse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgc2l6ZTogbGFyZ2U7fVxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgXG4gaW9uLXRvb2xiYXJ7XG4gICAgLS1wYWRkaW5nLXRvcDogMTVweCA7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gfVxuLmJhZGdle1xuICAtLXBhZGRpbmctZW5kOiA7XG59XG4gaW9uLWl0ZW17XG4gICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICBcbiAgICB9XG4gLnB7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiB9XG4gLnRpdGxlZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uc3Bhw6dve1xudGV4dC1hbGlnbjogY2VudGVyO1xuY29sb3I6IHdoaXRlO1xuYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5tYXJnaW4tdG9wOiAyNWVtO1xufVxuIC5zZWFyY2hiYXJ7XG4gICAgLS1jb2xvcjogI0ZGRkZGRjsgXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgIC0tYmFja2dyb3VuZDojMUMxQzFDO1xuIH1cbiAuZXhjbHtcbiAgIHBhZGRpbmctbGVmdDogMWV4O1xuIH1cbiAuaW1hZ2Vte1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG59IFxuXG4uYXtcbiAgICBtYXJnaW4tdG9wOiAxZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICB9XG4gIC5jZW50ZXJ0dHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0Y29sb3I6IHdoaXRlO1xuICB9XG4gIC5jb217XG4gICAgZm9udC1zaXplOiAzZXg7XG4gICAgcGFkZGluZy1sZWZ0OiAxZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWV4O1xuICB9XG4gIC5pbWFne1xuICAgICAgcGFkZGluZy10b3A6IDFleDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxZXg7XG4gIH1cbiAgLnN1YntcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyZXg7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc3R5bGU6IFRyZWJ1Y2hldDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9Il19 */";
      /***/
    },

    /***/
    76140:
    /*!***********************************************!*\
      !*** ./src/app/pesquisar/pesquisar.page.scss ***!
      \***********************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-item {\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\nion-content {\n  --ion-background-color: #000000;\n}\n\n.searchbar {\n  margin-top: 25px;\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#1C1C1C;\n}\n\nion-toolbar {\n  --background: black;\n}\n\n.margin {\n  margin-top: 25px;\n}\n\n.com {\n  font-size: 3ex;\n  padding-left: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n}\n\n.imag {\n  padding-top: 1ex;\n  padding-bottom: 1ex;\n}\n\n.sub {\n  font-size: 15px;\n  color: #5f5f5f;\n  padding-left: 2ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n}\n\n.tec {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlc3F1aXNhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUFDO0VBQ0csbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIRTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFNTjs7QUFKRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFPTjs7QUFMRTtFQUNJLHVCQUFBO0FBUU4iLCJmaWxlIjoicGVzcXVpc2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAtLWNvbG9yOiNGRkZGRkY7XG4gIFxufVxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG4uc2VhcmNoYmFye1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgLS1jb2xvcjogI0ZGRkZGRjsgXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgIC0tYmFja2dyb3VuZDojMUMxQzFDO1xuIH1cbiBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuLm1hcmdpbntcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmNvbXtcbiAgICBmb250LXNpemU6IDNleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFleDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBUcmVidWNoZXQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmltYWd7XG4gICAgICBwYWRkaW5nLXRvcDogMWV4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDFleDtcbiAgfVxuICAuc3Vie1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDJleDtcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnRlY3tcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9Il19 */";
      /***/
    },

    /***/
    28430:
    /*!*********************************************!*\
      !*** ./src/app/tutorial/tutorial.page.scss ***!
      \*********************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-toolbar {\n  --padding-top: 1.5ex ;\n  --background: black;\n  text-align: center;\n}\n\n.p {\n  color: white;\n  margin-left: 1em;\n  margin-top: 0.5em;\n  margin-right: 1em;\n  padding-bottom: 1em;\n}\n\n.slide {\n  margin-top: 10%;\n}\n\nion-content {\n  --ion-background-color: #000000;\n  --ion-color:#FFFFFF;\n}\n\nion-footer {\n  --ion-background-color: #000000;\n  background-color: #000000;\n  text-align: center;\n}\n\nion-title {\n  --color: white;\n  size: large;\n}\n\n.corbot {\n  color: #3880ff;\n}\n\n.holder {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:black;\n}\n\n.title {\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n  text-align: center;\n  color: white;\n  background-color: black;\n}\n\n.slide3 {\n  margin-top: 40%;\n}\n\n.holder2 {\n  color: #FFFFFF;\n  margin-top: -1ex;\n  --placeholder-color:#FFFFFF;\n  --placeholder-opacity: -100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIRTtFQUNTLGNBQUE7RUFDQSxXQUFBO0FBTVg7O0FBSkU7RUFDRyxjQUFBO0FBT0w7O0FBTEM7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFRTDs7QUFOQztFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFTTDs7QUFQRztFQUNJLGVBQUE7QUFVUDs7QUFQRTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQVVIIiwiZmlsZSI6InR1dG9yaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWV4IDtcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4uc2xpZGV7XG4gICAgbWFyZ2luLXRvcDoxMCU7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvcjojRkZGRkZGO1xuICB9XG4gIGlvbi1mb290ZXJ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBpb24tdGl0bGV7XG4gICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAgICBzaXplOiBsYXJnZTtcbiAgfVxuICAuY29yYm90e1xuICAgICBjb2xvciA6IzM4ODBmZjtcbiAgIH1cbiAuaG9sZGVye1xuICAgICAtLWNvbG9yOiAjRkZGRkZGOyBcbiAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gfVxuIC50aXRsZXtcbiAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBmb250LXNpemU6eC1sYXJnZTtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gICAuc2xpZGUze1xuICAgICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgIH1cbiAgXG4gIC5ob2xkZXIye1xuICAgY29sb3I6ICNGRkZGRkY7IFxuICAgbWFyZ2luLXRvcDogLTFleDtcbiAgIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLTEwMCU7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfSJdfQ== */";
      /***/
    },

    /***/
    34108:
    /*!*************************************************************!*\
      !*** ./src/app/usuario-pesquisa/usuario-pesquisa.page.scss ***!
      \*************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-content {\n  --ion-background-color: #000000;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.branco {\n  color: white;\n}\n\n.a {\n  padding-top: 10ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.imagem {\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n}\n\n.title {\n  text-align: center;\n  color: white;\n}\n\n.card {\n  align-content: center;\n  background-color: black;\n}\n\n.com {\n  font-size: 3ex;\n  padding-left: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  color: white;\n  padding-bottom: 1ex;\n}\n\n.imag {\n  padding-top: 1ex;\n  padding-bottom: 1ex;\n}\n\nion-item {\n  --background: black;\n  color: white;\n}\n\n.sub {\n  font-size: 15px;\n  color: #5f5f5f;\n  padding-left: 2ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW8tcGVzcXVpc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0gsbUJBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVEOztBQUFFO0VBQ0UsWUFBQTtBQUdKOztBQUFFO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQztFQUNHLHFCQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFKQztFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBT0oiLCJmaWxlIjoidXN1YXJpby1wZXNxdWlzYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICBpb24tdG9vbGJhcntcbiAgICAtLXBhZGRpbmctdG9wOiAyNHB4IDtcblx0LS1iYWNrZ3JvdW5kOiBibGFjaztcblx0LS1jb2xvciA6IHdoaXRlO1xufVxuLmNlbnRlcnR0e1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHRjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmJyYW5jb3tcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxuICBcbiAgLmF7XG4gICAgcGFkZGluZy10b3A6IDEwZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICB9XG4gIC5pbWFnZW17XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cbiAgLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gfVxuIC5jYXJke1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiB9IFxuIC5jb217XG4gIGZvbnQtc2l6ZTogM2V4O1xuICBwYWRkaW5nLWxlZnQ6IDFleDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IFRyZWJ1Y2hldDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDFleDtcblxufVxuXG5cbi5pbWFne1xuICAgIHBhZGRpbmctdG9wOiAxZXg7XG4gICAgcGFkZGluZy1ib3R0b206IDFleDtcbn1cbmlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjp3aGl0ZTtcbn1cbi5zdWJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgIHBhZGRpbmctbGVmdDogMmV4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IFRyZWJ1Y2hldDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map
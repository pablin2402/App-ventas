(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\r\n  <mat-spinner *ngIf=\"appService.loading$ | async\"></mat-spinner>\r\n  <router-outlet *ngIf=\"(appService.loading$ | async) == false\"></router-outlet>\r\n\r\n    <mat-sidenav #sidenav>\r\n        <app-navbar (closeSideNavigation)=\"sidenav.close()\">\r\n\r\n        </app-navbar>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n        <app-header (SideNavigationToggle)=\"sidenav.toggle()\">\r\n\r\n        </app-header>\r\n        <app-nav-tabs></app-nav-tabs>\r\n        <main>\r\n                <router-outlet> </router-outlet>\r\n        </main>\r\n    </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/aboutus/aboutus.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/aboutus/aboutus.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-card [@fallIn]='state'>  \r\n    <mat-card-title>\r\n        Sobre Nosotros\r\n    </mat-card-title>\r\n    <mat-card-content class=\"mat-typography\">\r\n        \r\n            <p>\r\n            Online Store te ofrece una variedad de galletas de distintas marcas y tipos que son asequibles a todos los bolsillos.\r\n            </p>\r\n\r\n            <p>\r\n            Todo lo que encontrarás en esta tienda en línea, son productos que han sido seleccionados para que sean tu acompañante en las meriendas diarias y recreos de los mas pequeños.\r\n            </p>\r\n            Deseamos sean de tu agrado y ganen tu confianza para mantener una relación a largo plazo.\r\n            <br>\r\n            <br>\r\n            ¡Feliz compra! 😀\r\n            \r\n    </mat-card-content>\r\n\r\n   \r\n    </mat-card>\r\n    \r\n    \r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-book/add-book.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-book/add-book.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row mt-5\">\r\n        <div class=\"col\">\r\n          <button class=\"btn btn-primary float-right mb-3\" data-toggle=\"modal\"\r\n           data-target=\"#modalBook\" >Nuevo Libro</button>\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">#</th>\r\n                <th scope=\"col\">Titulo</th>\r\n                <th scope=\"col\">Autor</th>\r\n                <th scope=\"col\">Idioma</th>\r\n                <th scope=\"col\">Precio</th>\r\n                <th scope=\"col\">Oferta</th>\r\n                <th scope=\"col\">&nbsp;</th>\r\n                <th scope=\"col\">&nbsp;</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n\r\n              <tr *ngFor=\"let book of books; index as i\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{book.titulo}}</td>\r\n                <td>{{book.autor}}</td>\r\n                <td>{{book.idioma}}</td>\r\n                <td>{{book.precio}}</td>\r\n                <td>{{book.oferta == 1 ? 'Sí': 'No'}}</td>\r\n                \r\n              \r\n                  <td>\r\n                    <button class=\"btn btn-secondary\" data-toggle=\"modal\"\r\n                    data-target=\"#modalBook\" (click)=\"onPreUpdateBook(book)\">Actualizar</button>\r\n                  </td>\r\n               \r\n                \r\n                <td>\r\n                  <button class=\"btn btn-danger\" (click)=\"onDeleteBook(book.id)\">Eliminar</button>\r\n                </td>\r\n\r\n               \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </section>\r\n<app-modal></app-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrito-nuevo/carrito-nuevo.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrito-nuevo/carrito-nuevo.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"books\" class=\"mt-3\">\r\n  <div id=\"carrito\" class=\"mt-3\">\r\n    <div class=\"container\"[@fallIn]='state'>\r\n\r\n      <div class=\"col-sm-3 carrito\" >\r\n        \r\n        <br>\r\n        <h4 class=\"card-title\"><i class=\"fa fa-shopping-cart\"></i> Carrito de Compras</h4>\r\n        <ul class=\"list-group mb-3\">\r\n\r\n          <li routerLink=\"/galleta/{{book.id}}\" class=\"list-group-item d-flex justify-content-between lh-condensed\" *ngFor=\"let producto of carrito\">\r\n            <div>\r\n                <h6 class=\"my-0\">  {{producto.nombre}}</h6>\r\n              </div>\r\n              <span class=\"text-muted\">{{producto.precio | currency:'Bs.'}}</span>\r\n\r\n          \r\n         \r\n            \r\n          </li>\r\n        </ul>\r\n        <br>\r\n        <li class=\"list-group-item d-flex justify-content-between\">\r\n            <span>Total (INR)</span>\r\n            <strong>{{total(book)}} Bs.</strong>\r\n          </li>\r\n       \r\n        <br>\r\n        <button type=\"submit\" class=\"btn btn-block btn-outline-light btn-dark\" target=\"_blank\" (click)=\"irformcomprar(productos_carrito)\">Terminar\r\n          Compra\r\n        </button>\r\n        <br>\r\n        \r\n        <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n          <cite title=\"Source Title\"> Carrito de Compras. </cite></footer>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\r\n        <div class=\"card_book\">\r\n          <div class=\"card\" style=\"height: 32rem; \">\r\n            <div class=\"card-body text-center\">\r\n              <p>\r\n                <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.nombre}}\">\r\n              </p>\r\n              <h4 routerLink=\"/galleta/{{book.id}}\" class=\"card-title\">{{book.nombre}}</h4>\r\n              <p class=\"card-text\">\r\n                {{book.descripcioncorta }}\r\n              </p>\r\n              \r\n              <div class=\"card-footer\">\r\n\r\n                <span class=\"left\"><strong>{{ book.precio }}Bs.</strong>  </span>\r\n                <span class=\"right\">\r\n                  {{book.peso}}\r\n                </span>\r\n                <br>\r\n                <br>\r\n                <button type=\"submit\" class=\"btn btn-block btn-outline-info btn-link\" target=\"_blank\" (click)=\"addCarrito(book)\">Añadir\r\n                  al Carrito</button>\r\n              </div>\r\n              \r\n                \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <bR>\r\n  <div class=\"card-footer text-muted\">\r\n                  \r\n    © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n</div>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/compra/compra.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/compra/compra.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login\" class=\"mb-5 mt-5\">\r\n    <div class=\"container\">\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n      <div class=\"card_login\">\r\n        <div class=\"card\">\r\n            <h5 class=\"card-header\">Detalles de su compra</h5>\r\n            <div class=\"card-body text-center\">\r\n\r\n            <form [formGroup]=\"compraForm\" (ngSubmit)=\"comprar()\">\r\n        <!--NOMBRE-->\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Nombre</label>\r\n\r\n            <input type=\"text\" formControlName=\"nombre\" class=\"form-control\" placeholder=\"Ingrese su nombre\">\r\n        </div>\r\n\r\n        <div class=\"alert-danger\" *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\">\r\n            <div class=\"container-error-message\" *ngIf=\"nombre.errors.required\">\r\n                Campo requerido.\r\n            </div>\r\n        </div>\r\n        <!--CELULAR-->\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Número de Teléfono</label>\r\n\r\n        <input type=\"number\" class=\"form-control\" formControlName=\"cel\" placeholder=\"Ingrese su número telefónico\">\r\n        </div>\r\n        <div class=\"alert-danger\" *ngIf=\"cel.invalid && (cel.dirty || cel.touched)\">\r\n            <div class=\"container-error-message\" *ngIf=\"cel.errors.required\">\r\n                Campo requerido.\r\n            </div>\r\n        </div>\r\n        <!--DIRECCIÓN-->\r\n        <div class=\"form-group\">\r\n        \r\n            <label for=\"exampleInputEmail1\">Dirección</label>\r\n\r\n        <textarea formControlName=\"direccion\" class=\"form-control\" placeholder=\"Ingrese su dirección\"></textarea>\r\n        </div>\r\n        <div class=\"alert-danger\" *ngIf=\"direccion.invalid && (direccion.dirty || direccion.touched)\">\r\n            <div class=\"container-error-message\" *ngIf=\"direccion.errors.required\">\r\n                Campo requerido.\r\n            </div>\r\n            <div class=\"container-error-message\" *ngIf=\"direccion.errors.minlength\">\r\n                Dirección debe contener al menos 10 caracteres.\r\n            </div>\r\n        </div>\r\n        <div id=\"carritoc\">\r\n            <h2> Productos:</h2>\r\n            <ul>\r\n                <li class=\"list-group-item\" *ngFor=\"let carritoc of carritoc\">\r\n                    {{carritoc}}\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n        <h2> Precio total: {{ptotal}} Bs.</h2>\r\n\r\n        <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" mat-raised-button color=\"primary\"  [disabled]=\"!compraForm.valid\">\r\n                Realizar compra\r\n        </button>\r\n        <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n            <cite title=\"Source Title\">Detalles de su compra</cite></footer>\r\n    </form>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/configuraciones/configuraciones.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/configuraciones/configuraciones.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login\" class=\"mb-5 mt-5\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n              <div class=\"card_login\">\n                <div class=\"card\">\n                  <div class=\"card-body text-center\">\n                    <form #formLogin=\"ngForm\" (submit)=\"onLogin()\">\n                      <h1 class=\"h3 mb-3 font-weight-normal\" *ngIf=\"!isError\">Iniciar Sesión</h1>\n                      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                        Something is wrong!\n                      </div>\n                      <div class=\"form-group\">\n                        <input [(ngModel)]=\"email\" type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n                      </div>\n                      <div class=\"form-group\">\n                        <input [(ngModel)]=\"password\" type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                      </div>\n                      <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Login</button>\n                      <div class=\"form-group\">\n                        <a routerLink=\"/user/register\" class=\"form-control login-user\">¿Eres nuevo?</a>\n                      </div>\n                      <div class=\"form-group\">\n                        <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\">\n                          <span class=\"fa fa-facebook\"></span>\n                          FACEBOOK\n                        </button>\n                        <button class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\">\n                          <span class=\"fa fa-google\"></span>\n                          GOOGLE\n                        </button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacto/contacto.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacto/contacto.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login\" class=\"mb-5 mt-5\">\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n     <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n        <div class=\"card_login\"[@fallIn]='state'>\r\n             <div class=\"card\">\r\n                    <h5 class=\"card-header\">Envienos un mensaje</h5>\r\n\r\n               <div class=\"card-body text-center\">\r\n                    <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSaveForm()\">\r\n                        <div class=\"form-group\">     \r\n                                <label for=\"exampleInputEmail1\">Nombre</label>\r\n      \r\n                             <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Ingrese su nombre\">\r\n                        </div>            \r\n                        <div class=\"alert-danger\" *ngIf=\"name.invalid && (name.dirty || name.touched)\">\r\n                             <div class=\"container-error-message\" *ngIf=\"name.errors.required\">\r\n                                            Campo requerido.\r\n                             </div>\r\n\r\n                       </div>\r\n\r\n                        <div class=\"form-group\">\r\n                                <label for=\"exampleInputEmail1\">Correo Electrónico</label>\r\n\r\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Ingrese su email\">\r\n                        </div>\r\n        \r\n        <div class=\"alert-danger\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n            <div class=\"container-error-message\" *ngIf=\"email.errors.required\">\r\n                Campo requerido.\r\n            </div>\r\n\r\n            <div class=\"container-error-message\" *ngIf=\"(email.dirty || email.touched) && email.invalid && email.errors.pattern\">\r\n                Tiene que ser una dirección válida de correo electrónico.\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Mensaje</label>\r\n\r\n                <input type=\"text\" formControlName=\"message\" class=\"form-control\" placeholder=\"Ingrese su mensaje\">\r\n        </div>\r\n\r\n        <div class=\"alert-danger\" *ngIf=\"message.invalid && (message.dirty || message.touched)\">\r\n            <div class=\"container-error-message\" *ngIf=\"message.errors.required\">\r\n                Campo requerido.\r\n            </div>\r\n            <div class=\"container-error-message\" *ngIf=\"message.errors.minlength\">\r\n                    El mensaje debe tener 10 carácteres.\r\n            </div>\r\n        </div>\r\n       \r\n        <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" mat-raised-button color=\"primary\"  [disabled]=\"!contactForm.valid\">Send</button>\r\n        <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n                <cite title=\"Source Title\">Atención al cliente</cite></footer>\r\n    </form>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-book/details-book.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-book/details-book.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-center\">\r\n    <div class=\"card-body\">\r\n        \r\n      <div class=\"row no-gutters\">\r\n          <div class=\"col-md-4\">\r\n            <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\r\n        </div>\r\n           <div class=\"col-md-8\">\r\n              <div class=\"card-body\">\r\n                <div class=\"jumbotron\">\r\n                        <h4 class=\"display-4\">{{book.titulo}}</h4>\r\n                        \r\n                        <p class=\"lead\">de {{book.autor}}</p>\r\n                        <hr class=\"my-4\"> \r\n                </div>\r\n                <div class=\"card border-warning mb-3\" style=\"max-width: 18rem;\">\r\n                        <div class=\"card-header\">Precio</div>\r\n                          <p class=\"card-text\">{{book.precio}} Bs.</p>\r\n                  </div>\r\n              </div>\r\n                   <p class=\"card-text\">\r\n                      \r\n                      {{book.descripcion}}\r\n                     \r\n                  </p>\r\n                  <iframe width=\"420\" height=\"345\" src=\"https://www.youtube.com/embed/tgbNymZ7vqY\">\r\n                  </iframe>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"jumbotron\">\r\n              <h4 class=\"card-title\" >Descripción del Producto</h4>\r\n              \r\n              <p class=\"lead\"> {{book.descripcion}}</p>\r\n                <hr class=\"my-4\">\r\n                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n              </div>\r\n            <div class=\"card-footer text-muted\">\r\n                <div class=\"spinner-border\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                  </div>\r\n                © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n            </div>\r\n        </div>\r\n\r\n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-cookie/details-cookie.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-cookie/details-cookie.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"card text-center \">\r\n          \r\n  <img src=\"{{books.fondo}}\" class=\"card-img-top img-thumbnail rounded \" >\r\n\r\n    <div class=\"card-body\">\r\n          \r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col-md-4\">\r\n                    <img class=\"img-fluid\" src=\"{{books.imagen}}\" alt=\"{{books.nombre}}\">\r\n            </div>\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"card-body\">\r\n                     \r\n                      <h4 class=\"display-1\">{{books.nombre}}</h4>\r\n                      <p class=\"lead\">\r\n                        de {{books.marca}}\r\n                      </p>\r\n                     \r\n                      <mat-divider></mat-divider>\r\n                      <p></p>\r\n                      <div class=\"card border-warning mb-3\" style=\"max-width: 18rem;\">\r\n                          <div class=\"card-header\">Precio</div>\r\n                            <p class=\"card-text\">{{books.precio}} Bs.</p>\r\n                          </div>\r\n                        </div>\r\n                    <h4 >Descripción</h4>\r\n\r\n                    <p class=\"card-text\">\r\n                        \r\n                        {{books.descripcion}}\r\n\r\n                    </p>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"jumbotron\">\r\n                <h4 class=\"card-title\" >Ingredientes</h4>\r\n                \r\n                <p class=\"lead\"> {{books.ingredientes}}</p>\r\n                  <hr class=\"my-4\">\r\n                  <h5 class=\"card-title\" >Alérgenos</h5>\r\n                  \r\n                  <p>{{books.Alergenos}}</p>\r\n\r\n                </div>\r\n              <div class=\"card-footer text-muted\">\r\n                  \r\n                  © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n              </div>\r\n   \r\n            </div>\r\n  \r\n         ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("© 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-3\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Card title</h5>\r\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\"\r\n      [latitude]=\"lat\"\r\n      [longitude]=\"lng\"\r\n      [zoom]=\"zoom\"\r\n      [disableDefaultUI]=\"false\"\r\n      [zoomControl]=\"false\"\r\n      (mapClick)=\"mapClicked($event)\"\r\n      >\r\n        <agm-marker\r\n        *ngFor=\"let m of markers; let i = index\"\r\n        (markerClick)=\"clickedMarker(m.label, i)\"\r\n        [latitude]=\"m.lat\"\r\n        [longitude]=\"m.lng\"\r\n        [label]=\"m.label\"\r\n        [markerDraggable]=\"m.draggable\"\r\n        (dragEnd)=\"markerDragEnd(m, $event)\"\r\n        [iconUrl]=\"m.iconUrl\"\r\n        >\r\n          <agm-info-window>\r\n           <strong>{{m.label}}</strong>\r\n           {{m.lat}}\r\n           {{m.lng}}\r\n  \r\n          </agm-info-window>\r\n        </agm-marker>\r\n      </agm-map>\r\n    </div>\r\n  </div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <!-- BOTON DE DESPLAZAMIENTE ANGULAR MATERIAL -->\r\n  <div>\r\n    <button mat-icon-button (click)=\"onToggleOpenSideNav()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\r\n    <!-- TITULO DE LA APP -->\r\n    <a class=\"navbar-brand\" href=\"#\">{{app_name}}</a>\r\n    <!-- {%FOOTER_LINK} -->\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n        <a class=\"nav-link\" routerLink=\"/user/register\">\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n  \r\n\r\n    <ul class=\"navbar-nav ml-auto\">\r\n\r\n            <!--REGISTRATE ETIQUETA-->\r\n            <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n              <a class=\"nav-link\" routerLink=\"/registro\">\r\n                <i class=\"fa fa-user mr-1\"></i> Registrate\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\" *ngIf=\"isLogged\">\r\n              <a class=\"nav-link\" aria-hidden=\"true\" (click)=\"openDialog()\">\r\n                \r\n                <i class=\"fa fa-user mr-1\"></i>Mi Perfil\r\n              </a>\r\n            </li>\r\n\r\n      <li class=\"nav-item \" *ngIf=\"isLogged\">\r\n        <a class=\"nav-link\" (click)=\"open()\">\r\n          Sobre nosotros\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">\r\n            Identificate\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\r\n        <a href=\"#\" class=\"nav-link\" (click)=\"onLogout()\">\r\n          Salir\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"bd-example\" >\r\n  <div id=\"carouselExampleCaptions\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <!-- FALTA PONER PARA OFERTAS-->\r\n        <img routerLink=\"/cookies\" src=\"/assets/img/mo.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n            <h5>Él sabe cuál comerse y a qué hora!</h5>\r\n            <p>Y tú, ¿Ya compraste las tuyas?</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"/assets/img/mo2.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h5>El sabe cuál comerse y a qué hora</h5>\r\n          <p>Y tú, ¿Ya compraste las tuyas?</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"http://www.arluy.com/wp-content/uploads/2017/10/banner_cookies_PRODUCTOS-COOKIES.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n         \r\n        </div>\r\n      </div>\r\n  <div class=\"bd-example\" *ngFor=\"let book of books\">\r\n            <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\r\n              <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\r\n              </ol>\r\n              <div class=\"carousel-inner\" >\r\n                <div class=\"carousel-item active\">\r\n                  <!-- FALTA PONER PARA OFERTAS-->\r\n                  <img  routerLink=\"/cookies\" src=\"https://firebasestorage.googleapis.com/v0/b/ventaproductos-5e03c.appspot.com/o/mo.jpg?alt=media&token=22bd4d8e-e9f9-4344-ae7a-741e8594e099\" class=\"d-block w-100\" alt=\"...\">\r\n\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>El sabe cual comerse y a que hora</h5>\r\n                    <p>Y tú¿Ya compraste las tuyas?</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                  <img src=\"http://www.arluy.com/wp-content/uploads/2017/10/banner_cookies_PRODUCTOS-COOKIES.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>Nintendo</h5>\r\n                    <p></p>\r\n                  </div>\r\n                </div>\r\n               \r\n              </div>\r\n              <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n              </a>\r\n              <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n      </div>\r\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>\r\n    <app-listcookies></app-listcookies>\r\n    <div class=\"card bg-dark text-white\">\r\n      <img class=\"card-img\" src=\"http://www.arluy.com/wp-content/uploads/2017/11/banner_CHOCOLATES_PRODUCTOS-MINI-GALLETAS-copia.jpg\" alt=\"Card image\">\r\n      <div class=\"card-img-overlay\">\r\n       \r\n      </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div class=\"card bg-dark text-white\">\r\n      <img class=\"card-img\" src=\"http://www.arluy.com/wp-content/uploads/2017/11/banner-productos-saladas.jpg\" alt=\"Card image\">\r\n      <div class=\"card-img-overlay\">\r\n       \r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer text-muted\">\r\n                  \r\n      © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n  </div>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listcookies/listcookies.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listcookies/listcookies.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <!--div class=\"wrapper\">\r\n  <mat-form-field [floatLabel]=\"'never'\"\r\n                  class=\"search-bar\"\r\n                  color=\"accent\">\r\n    <input type=\"search\"\r\n           placeholder=\"Search product...\"\r\n           [ngModel]=\"searchText\"\r\n           (ngModelChange)=\"onSearch($event)\"\r\n           matInput>\r\n  </mat-form-field>\r\n</div-->\r\n\r\n      <section id=\"books\" class=\"mt-5\">\r\n          <div class=\"container\">\r\n            <div class=\"card bg-dark text-white\">\r\n              <img class=\"card-img\" src=\"http://www.arluy.com/wp-content/uploads/2018/09/banner_ARLUY_PRODUCTOS-MARCA.jpg\" alt=\"Card image\">\r\n              <div class=\"card-img-overlay\">\r\n               \r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\r\n                <div class=\"card_book card-deck\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-body text-center\">\r\n                      <p>\r\n                        <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.nombre}}\"routerLink=\"/galleta/{{book.id}}\">\r\n                      </p>\r\n                      <h4 routerLink=\"/galleta/{{book.id}}\" class=\"card-title\">{{book.nombre}}</h4>\r\n                      <p class=\"card-text\" routerLink=\"/galleta/{{book.id}}\">\r\n                        {{book.descripcioncorta}}\r\n                      </p>\r\n                      \r\n                      <div class=\"card-footer\">\r\n\r\n                        <span class=\"left\"><strong>{{ book.precio }} Bs.</strong>  </span>\r\n                        <span class=\"right\">\r\n                          {{book.peso}}\r\n                        </span>\r\n\r\n                      <!--<button type=\"submit\" class=\"btn btn-block btn-primary\" target=\"_blank\" (click)=\"addCarrito(book)\">Buy</button>-->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            \r\n            \r\n            \r\n\r\n\r\n            <mat-paginator [length]=\"100\"\r\n            [pageSize]=\"10\"\r\n            [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n            </mat-paginator>\r\n\r\n          </div>\r\n        </section>\r\n        <br><br>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listcookies/uno.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listcookies/uno.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"example-pizza-party\">\r\n    Pizza party!!! 🍕\r\n  </span>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login\" class=\"mb-5 mt-5\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n        <div class=\"card_login\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body text-center\">\r\n              <form #formLogin=\"ngForm\" (submit)=\"onLogin()\">\r\n                \r\n                <h1 class=\"h3 mb-3 font-weight-normal\" *ngIf=\"!isError\">Iniciar Sesión</h1>\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                  Something is wrong!\r\n                </div>\r\n                <!--EMAIL-->\r\n                <div class=\"form-group\">\r\n\r\n                  <input [(ngModel)]=\"email\" type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required>\r\n                </div>\r\n                <div class=\"alert-danger\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n                  <div class=\"container-error-message\" *ngIf=\"email.errors.required\">\r\n                    Campo requerido.\r\n                  </div>\r\n                </div>\r\n                <!--PASSWORD-->\r\n                <div class=\"form-group\">\r\n                  <input [(ngModel)]=\"password\" type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n                </div>\r\n\r\n                <div class=\"alert-danger\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n                  <div class=\"container-error-message\" *ngIf=\"password.errors.required\">\r\n                    Campo requerido.\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" mat-raised-button color=\"primary\">\r\n                  Login\r\n                </button>\r\n\r\n                <div class=\"form-group\">\r\n                  <a routerLink=\"/registro\" class=\"form-control login-user\">¿Eres nuevo?</a>\r\n                </div>\r\n                <div class=\"form-group\">\r\n\r\n                  <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\">\r\n                    <span class=\"fa fa-facebook\"></span>\r\n                    FACEBOOK\r\n                  </button>\r\n\r\n                  <button href=\"#\" class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\">\r\n                    <span class=\"fa fa-google\"></span>\r\n                    GOOGLE\r\n                  </button>\r\n\r\n                </div>\r\n                <a href=\"\" (click)=\"onLogout()\">Salir</a>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \r\n<script>\r\n  //<![CDATA[\r\n document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';\r\n  //]]>\r\n </script>\r\n<div class=\"modal fade\" id=\"modalBook\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">New message</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Recipient:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"recipient-name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"message-text\" class=\"col-form-label\">Message:</label>\r\n            <textarea class=\"form-control\" id=\"message-text\"></textarea>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Send message</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-tabs/nav-tabs.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-tabs/nav-tabs.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navtabs-container\">\r\n   <nav mat-tab-nav-bar  mat-align-tabs=\"center\" fxFlex fxLayout fxLayoutAlign=\"center center\" style=\"background-color:#bde5ce;\">\r\n\r\n    <a mat-tab-link routerLink=\"/\"\r\n    routerLinkActive #home=\"routerLinkActive\"\r\n    [active]=\"home.isActive\" class=\"text-center\" aria-hidden=\"true\">\r\n     Inicio\r\n    </a>\r\n\r\n    <a mat-tab-link routerLink=\"/cookies\"\r\n    routerLinkActive #configuraciones=\"routerLinkActive\"\r\n\r\n    [active]=\"configuraciones.isActive\" class=\"text-center\" aria-hidden=\"true\"> \r\n      Nuestros Productos\r\n    </a>\r\n    \r\n    <a mat-tab-link routerLink=\"/carritoNuevo\"\r\n    routerLinkActive #configuraciones=\"routerLinkActive\"\r\n    [active]=\"configuraciones.isActive\" class=\"text-center\">\r\n      Carrito \r\n    </a>\r\n    <a mat-tab-link routerLink=\"/contacto\"\r\n    routerLinkActive #contacto=\"routerLinkActive\"\r\n    [active]=\"contacto.isActive\" class=\"text-center\" aria-hidden=\"true\">\r\n      Contacto\r\n    </a>\r\n  \r\n  </nav>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list class=\"sidenav-list\">\r\n    <a mat-list-item routerLink=\"/home\"(click)=\"onToggleClose()\">\r\n        <mat-icon>house</mat-icon>\r\n        <span>Inicio</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/cookies\"(click)=\"onToggleClose()\">\r\n        <mat-icon>products</mat-icon>\r\n        <span>Galletas</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/carritoNuevo\"(click)=\"onToggleClose()\">\r\n        <mat-icon>products</mat-icon>\r\n        <span>Carrito</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/aboutus\"(click)=\"onToggleClose()\">\r\n        <mat-icon>products</mat-icon>\r\n        <span>Sobre Nosotros</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/contacto\"(click)=\"onToggleClose()\">\r\n        <mat-icon>products</mat-icon>\r\n        <span>Atención al Cliente</span>\r\n    </a>\r\n    \r\n\r\n\r\n</mat-nav-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"profile\" class=\"container\">\r\n    <div class=\"row mt-5\">\r\n\r\n      <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\r\n\r\n        <div class=\"row user-details\">\r\n          <div class=\"col-12\">\r\n            \r\n\r\n            <h2 class=\"card-title\">Mi Perfil</h2>\r\n            <h3></h3>\r\n            <h4></h4>\r\n            <img src=\"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg\" class=\"card-img-top rounded-circle img-thumbnail\" >\r\n\r\n\r\n            <h5 *ngIf=\"providerId != 'password'\">{{user.name}}</h5>\r\n\r\n            <p class=\"card-text\">\r\n              {{user.email}}\r\n            </p>\r\n  \r\n            <hr>\r\n            <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n                <cite title=\"Source Title\">Mi Perfil.</cite></footer>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/registro.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/registro.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"register\" class=\"mb-5 mt-5\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n        <div class=\"card_register\">\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-body text-center\">\r\n              <form #formRegister=\"ngForm\" (ngSubmit)=\"onAddUser()\">\r\n                <!--FUENTE DEL REGISTRO-->\r\n                <h1 class=\"h3 mb-3 font-weight-normal\">Registro</h1>\r\n                \r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                  {{msgError}}\r\n                </div>\r\n\r\n                 \r\n                <div class=\"form-group\">\r\n                  <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" \r\n                  [(ngModel)]=\"email\" required minlength=\"8\">\r\n                </div>\r\n                 \r\n                <div class=\"alert alert-danger\"  *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"container-error-message\" *ngIf=\"email.errors.required\">\r\n                              Campo requerido.\r\n                       </div>\r\n                      </div>\r\n                      <div class=\"container-error-message\" *ngIf=\"(email.dirty || email.touched) && email.invalid && email.errors.pattern\">\r\n                          Debe ser un correo\r\n                      </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                  <input type=\"password\" name=\"password\" class=\"form-control\" aria-describedby=\"passwordHelpBlock\" placeholder=\"Password\" [(ngModel)]=\"password\" required minlength=\"5\"\r\n                    maxlength=\"10\">\r\n                    <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\r\n                        La contraseña debe tener mínimo 8 caracteres de longitud.\r\n                      </small>\r\n                </div>\r\n                \r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.touched && !password.valid\">\r\n                  <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                  <div *ngIf=\"password.errors.minlength\">Password must be at least 5 characters</div>\r\n                </div>\r\n                \r\n               \r\n                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Registro</button>\r\n                <div class=\"form-group\">\r\n                   <a routerLink=\"/login\" class=\"form-control login-user\">¿Tienes una cuenta? Registrate</a>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                 \r\n                  <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\">\r\n                    <span class=\"fa fa-facebook\"></span>\r\n                    FACEBOOK\r\n                  </button>\r\n\r\n                  <button href=\"#\" class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\">\r\n                    <span class=\"fa fa-google\"></span>\r\n                    GOOGLE\r\n                  </button>\r\n\r\n                </div>\r\n              </form>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_configuraciones_configuraciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/configuraciones/configuraciones.component */ "./src/app/components/configuraciones/configuraciones.component.ts");
/* harmony import */ var _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-book/add-book.component */ "./src/app/components/add-book/add-book.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav-tabs/nav-tabs.component */ "./src/app/components/nav-tabs/nav-tabs.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_compra_compra_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/compra/compra.component */ "./src/app/components/compra/compra.component.ts");
/* harmony import */ var _components_carrito_nuevo_carrito_nuevo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/carrito-nuevo/carrito-nuevo.component */ "./src/app/components/carrito-nuevo/carrito-nuevo.component.ts");
/* harmony import */ var _components_listcookies_listcookies_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/listcookies/listcookies.component */ "./src/app/components/listcookies/listcookies.component.ts");
/* harmony import */ var _components_details_cookie_details_cookie_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/details-cookie/details-cookie.component */ "./src/app/components/details-cookie/details-cookie.component.ts");























const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'aboutus', component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutusComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'header', component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"] },
    { path: 'footer', component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    //CAN ACTIVATE SIRVE PARA BLOQUEAR FRAMES
    //ADMIN
    { path: 'configuraciones', component: _components_configuraciones_configuraciones_component__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'addbook', component: _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_8__["AddBookComponent"] },
    { path: 'navbar', component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'registro', component: _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_13__["RegistroComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"] },
    { path: 'google', component: _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_17__["GoogleMapComponent"] },
    { path: 'cookies', component: _components_listcookies_listcookies_component__WEBPACK_IMPORTED_MODULE_21__["ListcookiesComponent"] },
    { path: 'galleta/:id', component: _components_details_cookie_details_cookie_component__WEBPACK_IMPORTED_MODULE_22__["DetailsCookieComponent"] },
    { path: 'book/:id', component: _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_15__["DetailsBookComponent"] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_18__["ContactoComponent"] },
    { path: 'comprar', component: _components_compra_compra_component__WEBPACK_IMPORTED_MODULE_19__["CompraComponent"] },
    { path: 'carritoNuevo', component: _components_carrito_nuevo_carrito_nuevo_component__WEBPACK_IMPORTED_MODULE_20__["CarritoNuevoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_18__["ContactoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'cookies', component: _components_listcookies_listcookies_component__WEBPACK_IMPORTED_MODULE_21__["ListcookiesComponent"] },
    { path: 'galleta/:id', component: _components_details_cookie_details_cookie_component__WEBPACK_IMPORTED_MODULE_22__["DetailsCookieComponent"] },
    { path: 'book/:id', component: _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_15__["DetailsBookComponent"] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_18__["ContactoComponent"] },
    { path: 'comprar', component: _components_compra_compra_component__WEBPACK_IMPORTED_MODULE_19__["CompraComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'carritoNuevo', component: _components_carrito_nuevo_carrito_nuevo_component__WEBPACK_IMPORTED_MODULE_20__["CarritoNuevoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_18__["ContactoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'bar', component: _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_11__["NavTabsComponent"] },
    { path: '**', redirectTo: '/aboutus', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container,\r\nmat-sidenav-content,\r\nmat-sidenav{\r\n    height: 100%;\r\n}\r\nmat-sidenav{\r\n    width: 250px;\r\n}\r\nmat-spinner\r\n{\r\n  margin: 20% auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lcixcclxubWF0LXNpZGVuYXYtY29udGVudCxcclxubWF0LXNpZGVuYXZ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxubWF0LXNpZGVuYXZ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxubWF0LXNwaW5uZXJcclxue1xyXG4gIG1hcmdpbjogMjAlIGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/app.service */ "./src/app/common/app.service.ts");



let AppComponent = class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.title = 'COMPRA Y VENTA';
    }
};
AppComponent.ctorParameters = () => [
    { type: _common_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _custommaterial_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custommaterial.module */ "./src/app/custommaterial.module.ts");
/* harmony import */ var _components_configuraciones_configuraciones_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/configuraciones/configuraciones.component */ "./src/app/components/configuraciones/configuraciones.component.ts");
/* harmony import */ var _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-book/add-book.component */ "./src/app/components/add-book/add-book.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/nav-tabs/nav-tabs.component */ "./src/app/components/nav-tabs/nav-tabs.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
/* harmony import */ var _components_compra_compra_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/compra/compra.component */ "./src/app/components/compra/compra.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _components_listcookies_listcookies_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/listcookies/listcookies.component */ "./src/app/components/listcookies/listcookies.component.ts");
/* harmony import */ var _components_details_cookie_details_cookie_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/details-cookie/details-cookie.component */ "./src/app/components/details-cookie/details-cookie.component.ts");
/* harmony import */ var _components_carrito_nuevo_carrito_nuevo_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/carrito-nuevo/carrito-nuevo.component */ "./src/app/components/carrito-nuevo/carrito-nuevo.component.ts");








//Components



















//FIREBASE CONFIGURACION
const firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_27__["environment"].firebaseConfig;










const MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_listcookies_listcookies_component__WEBPACK_IMPORTED_MODULE_34__["ListcookiesComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _components_details_cookie_details_cookie_component__WEBPACK_IMPORTED_MODULE_35__["DetailsCookieComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _components_configuraciones_configuraciones_component__WEBPACK_IMPORTED_MODULE_15__["ConfiguracionesComponent"],
            _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_16__["AddBookComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_19__["GoogleMapComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
            _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_25__["DetailsBookComponent"],
            _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_22__["RegistroComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
            _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_21__["NavTabsComponent"],
            _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_13__["AboutusComponent"],
            _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_20__["ContactoComponent"],
            _components_compra_compra_component__WEBPACK_IMPORTED_MODULE_26__["CompraComponent"],
            _components_carrito_nuevo_carrito_nuevo_component__WEBPACK_IMPORTED_MODULE_36__["CarritoNuevoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _custommaterial_module__WEBPACK_IMPORTED_MODULE_14__["CustommaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
            MaterialComponents,
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_27__["environment"].firebaseConfig),
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_33__["AngularFirestoreModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_31__["AngularFireDatabaseModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDmPQrfklKHKfqwIOuQZ92Q7G0TW0AYZG8'
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            MaterialComponents
        ],
        providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__["AngularFirestore"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/app.service.ts":
/*!***************************************!*\
  !*** ./src/app/common/app.service.ts ***!
  \***************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");




let AppService = class AppService {
    constructor() {
        //Preloader
        this.loading$ = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
    }
    fireLoader() {
        this.loading$ = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
    }
    stopLoader() {
        this.loading$ = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(false);
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppService);



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.animation */ "./src/app/components/aboutus/router.animation.ts");



let AboutusComponent = class AboutusComponent {
    constructor() {
        this.state = '';
    }
    ngOnInit() {
    }
};
AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aboutus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/aboutus/aboutus.component.html")).default,
        animations: [Object(_router_animation__WEBPACK_IMPORTED_MODULE_2__["moveIn"])(), Object(_router_animation__WEBPACK_IMPORTED_MODULE_2__["fallIn"])()],
        host: { '[@moveIn': '' },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aboutus.component.css */ "./src/app/components/aboutus/aboutus.component.css")).default]
    })
], AboutusComponent);



/***/ }),

/***/ "./src/app/components/aboutus/router.animation.ts":
/*!********************************************************!*\
  !*** ./src/app/components/aboutus/router.animation.ts ***!
  \********************************************************/
/*! exports provided: moveIn, fallIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveIn", function() { return moveIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallIn", function() { return fallIn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function moveIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('moveIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.6s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fallIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.4s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/components/add-book/add-book.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-book/add-book.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWJvb2svYWRkLWJvb2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/add-book/add-book.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-book/add-book.component.ts ***!
  \***********************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");



let AddBookComponent = class AddBookComponent {
    constructor(dataApi) {
        this.dataApi = dataApi;
    }
    ngOnInit() {
        this.getListBooks();
    }
    getListBooks() {
        this.dataApi.getAllBooks()
            .subscribe(books => {
            this.books = books;
        });
    }
    onDeleteBook(idBook) {
        const confirmacion = confirm('¿Estás seguro que deseas eliminar el producto?');
        if (confirmacion) {
            this.dataApi.deleteBook(idBook);
        }
    }
    onPreUpdateBook(book) {
        //this.dataApi.selectedBook=Object.assign({},book);
        console.log('BOOK', book);
    }
};
AddBookComponent.ctorParameters = () => [
    { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] }
];
AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-book/add-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-book.component.css */ "./src/app/components/add-book/add-book.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]])
], AddBookComponent);



/***/ }),

/***/ "./src/app/components/carrito-nuevo/carrito-nuevo.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/carrito-nuevo/carrito-nuevo.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n    margin-right: 12px;\r\n  }\r\n  \r\n.carrito{\r\n    \r\n   \r\n    height: auto;\r\n    /* background: #61c0c081;*/\r\n    background: #bde5ce;\r\n    border-color: #aca9a998;\r\n    border: 1px solid;\r\n    align-content: flex-end;\r\n    float: right;\r\n    \r\n   \r\n}\r\n  \r\n.books{\r\n    float: left;\r\n    width: 100px;\r\n    height: auto;\r\n     margin-right: 50%;\r\n}\r\n  \r\nsection {   \r\n     overflow:hidden; }\r\n  \r\n.carrito h5{\r\n    text-align: right;\r\n}\r\n  \r\n.example-card {\r\n    max-width: 1000px;\r\n  }\r\n  \r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJyaXRvLW51ZXZvL2NhcnJpdG8tbnVldm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQjs7QUFFRjs7O0lBR0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTs7O0FBR2hCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0tBQ1gsaUJBQWlCO0FBQ3RCOztBQUNBO0tBQ0ssZUFBZSxFQUFFOztBQUV0QjtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fycml0by1udWV2by9jYXJyaXRvLW51ZXZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4uY2Fycml0b3tcclxuICAgIFxyXG4gICBcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIGJhY2tncm91bmQ6ICM2MWMwYzA4MTsqL1xyXG4gICAgYmFja2dyb3VuZDogI2JkZTVjZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2FjYTlhOTk4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIFxyXG4gICBcclxufVxyXG4uYm9va3N7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgICBtYXJnaW4tcmlnaHQ6IDUwJTtcclxufVxyXG5zZWN0aW9uIHsgICBcclxuICAgICBvdmVyZmxvdzpoaWRkZW47IH0gXHJcblxyXG4uY2Fycml0byBoNXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/carrito-nuevo/carrito-nuevo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/carrito-nuevo/carrito-nuevo.component.ts ***!
  \*********************************************************************/
/*! exports provided: CarritoNuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoNuevoComponent", function() { return CarritoNuevoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_compra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/compra.service */ "./src/app/services/compra.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _router_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../router.animation */ "./src/app/router.animation.ts");







let CarritoNuevoComponent = class CarritoNuevoComponent {
    constructor(_snackBar, dataApis, dbData, router) {
        this._snackBar = _snackBar;
        this.dataApis = dataApis;
        this.dbData = dbData;
        this.router = router;
        this.state = '';
        this.books = [];
        this.carrito = [];
        this.book = '';
        this.productos_carrito = [];
        this.precio_total = 0;
    }
    ngOnInit() {
        this.dataApis.getAllBooks().subscribe(books => {
            console.log('BOOKS', books);
            this.books = books;
        });
    }
    addCarrito(producto) {
        this.carrito.push(producto);
        this.productos_carrito.push(producto.nombre);
        console.log('PRODUCTOS EN CARRITO', producto.nombre);
    }
    total(producto) {
        var total = 0;
        for (producto of this.carrito) {
            total += parseInt(producto.precio);
            //console.log('precio prod', producto.precio);
            //console.log('total', total);
            this.precio_total = total;
        }
        return total;
    }
    irformcomprar(productos_c) {
        console.log('CARRITO', this.productos_carrito);
        this.dbData.saveData(productos_c, this.precio_total);
        this.router.navigate(['/comprar']);
    }
};
CarritoNuevoComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _services_compra_service__WEBPACK_IMPORTED_MODULE_4__["CompraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CarritoNuevoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrito-nuevo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carrito-nuevo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrito-nuevo/carrito-nuevo.component.html")).default,
        animations: [Object(_router_animation__WEBPACK_IMPORTED_MODULE_6__["moveIn"])(), Object(_router_animation__WEBPACK_IMPORTED_MODULE_6__["fallIn"])()],
        host: { '[@moveIn': '' },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carrito-nuevo.component.css */ "./src/app/components/carrito-nuevo/carrito-nuevo.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _services_compra_service__WEBPACK_IMPORTED_MODULE_4__["CompraService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CarritoNuevoComponent);



/***/ }),

/***/ "./src/app/components/compra/compra.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/compra/compra.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-container {\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n    max-width: 500px;\r\n    padding: 16px;\r\n    margin: 10px auto;\r\n    background: #f7f7f7;\r\n  }\r\n  \r\n  .form-container h1 {\r\n    background: #2a977e;\r\n    padding: 20px 0;\r\n    font-size: 140%;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    color: #fff;\r\n    margin: -16px -16px 16px -16px;\r\n  }\r\n  \r\n  .form-container h2 {\r\n    background: #d5e0de;\r\n    padding: 20px 0;\r\n    font-size: 140%;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    color: rgb(68, 70, 70);\r\n    margin: -16px -16px 16px -16px;\r\n  }\r\n  \r\n  .form-container input[type=\"text\"],\r\n  .form-container input[type=\"email\"],\r\n  .form-container textarea {\r\n    transition: all 0, 30s ease-in-out;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    background: #fff;\r\n    margin-bottom: 4%;\r\n    border: 1px solid #ccc;\r\n    padding: 3%;\r\n    color: #555;\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  .form-container input[type=\"text\"]:focus,\r\n  .form-container input[type=\"email\"]:focus,\r\n  .form-container textarea:focus {\r\n    box-shadow: 0 0 5px #43d1af;\r\n    padding: 3%;\r\n    border: 1px solid #43d1af;\r\n  }\r\n  \r\n  .form-container .btn-comprar {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    padding: 3%;\r\n    background: #30af92;\r\n    border-bottom: 2px solid #30c29e;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n    border-left-style: none;\r\n    color: #fff;\r\n    font-size: 25px;\r\n  }\r\n  \r\n  .form-container .btn-send:hover:not([disabled]) {\r\n    background: #2ebc99;\r\n  }\r\n  \r\n  .alert-danger {\r\n    color: #721c24;\r\n    background: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .container-error-message {\r\n    padding: 3px;\r\n  }\r\n  \r\n  .datos{\r\n    width: auto; /*900px*/\r\n    height: auto; \r\n    overflow: hidden;\r\n    border: 0px solid;\r\n   /* margin-top: 15px;*/\r\n   margin: 0 30px;\r\n   text-align: justify;\r\n    display:flex;\r\n    color: rgb(10, 10, 10);\r\n    background: #145c4a;\r\n    border-color: #145c4a;\r\n    /*margin-bottom: 5px;*/\r\n    align-items: center;\r\n    align-content: center;\r\n    \r\n  }\r\n  \r\n  .boton{\r\n    height: auto;\r\n    width: 50px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wcmEvY29tcHJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEJBQThCO0VBQ2hDOztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsOEJBQThCO0VBQ2hDOztFQUVBOzs7SUFJRSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUViLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFdBQVc7SUFDWCxzQ0FBc0M7RUFDeEM7O0VBRUE7OztJQUlFLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBO0lBRUUsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0dBQ2xCLHFCQUFxQjtHQUNyQixjQUFjO0dBQ2QsbUJBQW1CO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHFCQUFxQjs7RUFFdkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wcmEvY29tcHJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gICAgZm9udDogOTUlIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVyIGgxIHtcclxuICAgIGJhY2tncm91bmQ6ICMyYTk3N2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDE0MCU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IC0xNnB4IC0xNnB4IDE2cHggLTE2cHg7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciBoMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDVlMGRlO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoNjgsIDcwLCA3MCk7XHJcbiAgICBtYXJnaW46IC0xNnB4IC0xNnB4IDE2cHggLTE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLCAzMHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMCwgMzBzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udDogOTUlIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggIzQzZDFhZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzQzZDFhZjtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQzZDFhZjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVyIC5idG4tY29tcHJhciB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJhY2tncm91bmQ6ICMzMGFmOTI7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMwYzI5ZTtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250YWluZXIgLmJ0bi1zZW5kOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmViYzk5O1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lci1lcnJvci1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcblxyXG4gIC5kYXRvc3tcclxuICAgIHdpZHRoOiBhdXRvOyAvKjkwMHB4Ki9cclxuICAgIGhlaWdodDogYXV0bzsgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQ7XHJcbiAgIC8qIG1hcmdpbi10b3A6IDE1cHg7Ki9cclxuICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gICAgYmFja2dyb3VuZDogIzE0NWM0YTtcclxuICAgIGJvcmRlci1jb2xvcjogIzE0NWM0YTtcclxuICAgIC8qbWFyZ2luLWJvdHRvbTogNXB4OyovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuYm90b257XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/compra/compra.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/compra/compra.component.ts ***!
  \*******************************************************/
/*! exports provided: CompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraComponent", function() { return CompraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_compra_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/compra.service */ "./src/app/services/compra.service.ts");




let CompraComponent = class CompraComponent {
    constructor(dbData) {
        this.dbData = dbData;
        this.compraForm = this.createFormGroup();
        this.carritoc = dbData.getCarrito();
        this.ptotal = dbData.getPrecioTotal();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]),
            cel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]),
        });
    }
    ngOnInit() {
    }
    onResetForm() {
        this.compraForm.reset();
    }
    comprar() {
        if (this.compraForm.valid) {
            this.dbData.saveCompra(this.compraForm.value, this.carritoc, this.ptotal);
            this.onResetForm();
            console.log('Valid');
        }
        else {
            console.log('Not Valid');
        }
    }
    get nombre() { return this.compraForm.get('nombre'); }
    get cel() { return this.compraForm.get('cel'); }
    get direccion() { return this.compraForm.get('direccion'); }
};
CompraComponent.ctorParameters = () => [
    { type: _services_compra_service__WEBPACK_IMPORTED_MODULE_3__["CompraService"] }
];
CompraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compra',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./compra.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/compra/compra.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./compra.component.css */ "./src/app/components/compra/compra.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_compra_service__WEBPACK_IMPORTED_MODULE_3__["CompraService"]])
], CompraComponent);



/***/ }),

/***/ "./src/app/components/configuraciones/configuraciones.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/configuraciones/configuraciones.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control.login-user {\r\n    border: 0 solid #fff !important;\r\n  }\r\n  .btn-social{\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color: #fff;\r\n    border-color: rgba(0,0,0,0.2);\r\n  }\r\n  .btn-facebook{\r\n    background: #3b5998;\r\n  }\r\n  .btn-google{\r\n    background: #dd4b39;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maWd1cmFjaW9uZXMvY29uZmlndXJhY2lvbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbmZpZ3VyYWNpb25lcy9jb25maWd1cmFjaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubG9naW4tdXNlciB7XHJcbiAgICBib3JkZXI6IDAgc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuLXNvY2lhbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWZhY2Vib29re1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICB9XHJcbiAgLmJ0bi1nb29nbGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/configuraciones/configuraciones.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/configuraciones/configuraciones.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConfiguracionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionesComponent", function() { return ConfiguracionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfiguracionesComponent = class ConfiguracionesComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ConfiguracionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuraciones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./configuraciones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/configuraciones/configuraciones.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./configuraciones.component.css */ "./src/app/components/configuraciones/configuraciones.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConfiguracionesComponent);



/***/ }),

/***/ "./src/app/components/contacto/contacto.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-container {\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n    max-width: 500px;\r\n    padding: 16px;\r\n    margin: 10px auto;\r\n    background: #f7f7f7;\r\n  }\r\n  \r\n  .form-container h1 {\r\n    background: #43d1af;\r\n    padding: 20px 0;\r\n    font-size: 140%;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    color: #fff;\r\n    margin: -16px -16px 16px -16px;\r\n  }\r\n  \r\n  .form-container input[type=\"text\"],\r\n  .form-container input[type=\"email\"],\r\n  .form-container textarea {\r\n    transition: all 0, 30s ease-in-out;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    background: #fff;\r\n    margin-bottom: 4%;\r\n    border: 1px solid #ccc;\r\n    padding: 3%;\r\n    color: #555;\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  .form-container input[type=\"text\"]:focus,\r\n  .form-container input[type=\"email\"]:focus,\r\n  .form-container textarea:focus {\r\n    box-shadow: 0 0 5px #43d1af;\r\n    padding: 3%;\r\n    border: 1px solid #43d1af;\r\n  }\r\n  \r\n  .form-container .btn-send {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    padding: 3%;\r\n    background: #43d1af;\r\n    border-bottom: 2px solid #30c29e;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n    border-left-style: none;\r\n    color: #fff;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .form-container .btn-send:hover:not([disabled]) {\r\n    background: #2ebc99;\r\n  }\r\n  \r\n  .alert-danger {\r\n    color: #721c24;\r\n    background: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .container-error-message {\r\n    padding: 3px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDhCQUE4QjtFQUNoQzs7RUFFQTs7O0lBSUUsa0NBQWtDO0lBQ2xDLGFBQWE7SUFFYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0NBQXNDO0VBQ3hDOztFQUVBOzs7SUFJRSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUVFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gICAgZm9udDogOTUlIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVyIGgxIHtcclxuICAgIGJhY2tncm91bmQ6ICM0M2QxYWY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDE0MCU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IC0xNnB4IC0xNnB4IDE2cHggLTE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLCAzMHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMCwgMzBzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udDogOTUlIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggIzQzZDFhZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzQzZDFhZjtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQzZDFhZjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVyIC5idG4tc2VuZCB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJhY2tncm91bmQ6ICM0M2QxYWY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMwYzI5ZTtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250YWluZXIgLmJ0bi1zZW5kOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmViYzk5O1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lci1lcnJvci1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_contacto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contacto.service */ "./src/app/services/contacto.service.ts");
/* harmony import */ var _router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router.animation */ "./src/app/router.animation.ts");





let ContactoComponent = class ContactoComponent {
    constructor(dbData) {
        this.dbData = dbData;
        this.state = '';
        this.contactForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)])
        });
    }
    ngOnInit() {
    }
    onResetForm() {
        this.contactForm.reset();
    }
    onSaveForm() {
        if (this.contactForm.valid) {
            this.dbData.saveMessage(this.contactForm.value);
            this.onResetForm();
            console.log('Valid');
        }
        else {
            console.log('Not Valid');
        }
    }
    get name() {
        return this.contactForm.get('name');
    }
    get email() {
        return this.contactForm.get('email');
    }
    get message() {
        return this.contactForm.get('message');
    }
};
ContactoComponent.ctorParameters = () => [
    { type: _services_contacto_service__WEBPACK_IMPORTED_MODULE_3__["ContactoService"] }
];
ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacto/contacto.component.html")).default,
        animations: [Object(_router_animation__WEBPACK_IMPORTED_MODULE_4__["moveIn"])(), Object(_router_animation__WEBPACK_IMPORTED_MODULE_4__["fallIn"])()],
        host: { '[@moveIn': '' },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacto.component.css */ "./src/app/components/contacto/contacto.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contacto_service__WEBPACK_IMPORTED_MODULE_3__["ContactoService"]])
], ContactoComponent);



/***/ }),

/***/ "./src/app/components/details-book/details-book.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/details-book/details-book.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy1ib29rL2RldGFpbHMtYm9vay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/details-book/details-book.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/details-book/details-book.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsBookComponent", function() { return DetailsBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetailsBookComponent = class DetailsBookComponent {
    constructor(dataApi, route) {
        this.dataApi = dataApi;
        this.route = route;
        this.book = {};
    }
    ngOnInit() {
        const idBook = this.route.snapshot.params['id'];
        this.getDetails(idBook);
    }
    getDetails(idBook) {
        this.dataApi.getOneBook(idBook).subscribe(book => {
            this.book = book;
        });
    }
};
DetailsBookComponent.ctorParameters = () => [
    { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetailsBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-book/details-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-book.component.css */ "./src/app/components/details-book/details-book.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DetailsBookComponent);



/***/ }),

/***/ "./src/app/components/details-cookie/details-cookie.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/details-cookie/details-cookie.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy1jb29raWUvZGV0YWlscy1jb29raWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/details-cookie/details-cookie.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/details-cookie/details-cookie.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetailsCookieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCookieComponent", function() { return DetailsCookieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");





let DetailsCookieComponent = class DetailsCookieComponent {
    constructor(dialog, dataApi, route) {
        this.dialog = dialog;
        this.dataApi = dataApi;
        this.route = route;
        this.books = {};
    }
    ngOnInit() {
        const idBook = this.route.snapshot.params['id'];
        this.getDetails(idBook);
    }
    getDetails(idBook) {
        this.dataApi.getOneBook(idBook).subscribe(books => {
            this.books = books;
        });
    }
};
DetailsCookieComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetailsCookieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-cookie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-cookie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-cookie/details-cookie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-cookie.component.css */ "./src/app/components/details-cookie/details-cookie.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DetailsCookieComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/google-map/google-map.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    height: 300px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb29nbGUtbWFwL2dvb2dsZS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ29vZ2xlLW1hcC9nb29nbGUtbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/google-map/google-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.ts ***!
  \***************************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_geo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/geo.service */ "./src/app/geo.service.ts");



let GoogleMapComponent = class GoogleMapComponent {
    //zoom:number=16;
    //markers:any;
    constructor(geo) {
        this.geo = geo;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.contador = 4;
        this.zoom = 6;
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'A',
                draggable: true,
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B',
                draggable: false,
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C',
                draggable: true,
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            }
        ];
    }
    ngOnInit() {
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    mapClicked($event) {
        this.markers.push({
            label: this.contador.toString(),
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
        });
        this.contador++;
    }
    markerDragEnd(m, $event) {
        console.log('dragEnd', m, $event);
        this.markers.push({
            label: m.label,
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
        });
    }
};
GoogleMapComponent.ctorParameters = () => [
    { type: src_app_geo_service__WEBPACK_IMPORTED_MODULE_2__["GeoService"] }
];
GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-map.component.css */ "./src/app/components/google-map/google-map.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_geo_service__WEBPACK_IMPORTED_MODULE_2__["GeoService"]])
], GoogleMapComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  li{\r\n    list-style: none;\r\n}\r\n  \r\n  .logo-container{\r\n  width: 100%;\r\n  margin-right: 40px;\r\n\r\n}\r\n  \r\n  .logo{\r\n  width: 50px;\r\n  height: 55px;\r\n}\r\n  \r\n  mat-toolbar{\r\n  height: 96px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSxnQkFBZ0I7QUFDcEI7O0VBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztBQUVwQjs7RUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0VBQ0E7RUFDRSxZQUFZOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmxvZ28tY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuXHJcbn1cclxuLmxvZ297XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcbm1hdC10b29sYmFye1xyXG4gIGhlaWdodDogOTZweDtcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/components/services/backend.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var src_app_components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");








let HeaderComponent = class HeaderComponent {
    constructor(auth, _backendservice, authService, afsAuth, dialog) {
        this.auth = auth;
        this._backendservice = _backendservice;
        this.authService = authService;
        this.afsAuth = afsAuth;
        this.dialog = dialog;
        //NOMBRE APP
        this.app_name = "Tienda";
        //condicion para hacer aparecer etiquetas
        this.isLogged = false;
        this.SideNavigationToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.counter = 0;
        this.userStatusColor = "warm";
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    open() {
        const dialogRef = this.dialog.open(src_app_components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    ngOnInit() {
        this.getCurrentUser();
    }
    onToggleOpenSideNav() {
        this.SideNavigationToggle.emit();
    }
    getCurrentUser() {
        this.authService.isAuth().subscribe(auth => {
            if (auth) {
                console.log('user logged');
                this.isLogged = true;
            }
            else {
                console.log('NOT user logged');
                this.isLogged = false;
            }
        });
    }
    onLogout() {
        this.afsAuth.auth.signOut();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "SideNavigationToggle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HeaderComponent.prototype, "pageTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HeaderComponent.prototype, "iconTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HeaderComponent.prototype, "helpTitle", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".containers{\r\n    height:100vh;\r\n    background: url(/assets/img/sw.png) no-repeat;\r\n    flex: 1 0.5 auto;\r\n}\r\n.book-now-container{\r\npadding: 35px 115px;\r\n}\r\n.book-now-button{\r\n    width: 170px;\r\n    color: white;\r\n    border: 1px solid white;\r\n    text-transform: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyc3tcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9zdy5wbmcpIG5vLXJlcGVhdDtcclxuICAgIGZsZXg6IDEgMC41IGF1dG87XHJcbn1cclxuLmJvb2stbm93LWNvbnRhaW5lcntcclxucGFkZGluZzogMzVweCAxMTVweDtcclxufVxyXG4uYm9vay1ub3ctYnV0dG9ue1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(dataApi, router) {
        this.dataApi = dataApi;
        this.router = router;
        this.books = [];
        this.book = '';
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/listcookies/listcookies.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/listcookies/listcookies.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGNvb2tpZXMvbGlzdGNvb2tpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/listcookies/listcookies.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/listcookies/listcookies.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListcookiesComponent, PizzaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcookiesComponent", function() { return ListcookiesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function() { return PizzaPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");





let ListcookiesComponent = class ListcookiesComponent {
    constructor(dataApis, router, _snackBar) {
        this.dataApis = dataApis;
        this.router = router;
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.books = [];
        this.carrito = [];
        this.book = '';
    }
    ngOnInit() {
        this.dataApis.getAllBooks().subscribe(books => {
            console.log('BOOKS', books);
            this.books = books;
        });
    }
    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
    onSearch(searchText) {
        this.search.emit(searchText);
    }
};
ListcookiesComponent.ctorParameters = () => [
    { type: _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ListcookiesComponent.prototype, "searchText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ListcookiesComponent.prototype, "search", void 0);
ListcookiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcookies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listcookies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listcookies/listcookies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listcookies.component.css */ "./src/app/components/listcookies/listcookies.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], ListcookiesComponent);

let PizzaPartyComponent = class PizzaPartyComponent {
};
PizzaPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'snack-bar-component-example-snack',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uno.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listcookies/uno.html")).default,
        styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
    })
], PizzaPartyComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control.login-user {\r\n    border: 0 solid #fff !important;\r\n  }\r\n  .btn-social{\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color: #fff;\r\n    border-color: rgba(0,0,0,0.2);\r\n  }\r\n  .btn-facebook{\r\n    background: #3b5998;\r\n  }\r\n  .btn-google{\r\n    background: #dd4b39;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcclxuICAgIGJvcmRlcjogMCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG4tc29jaWFse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZmFjZWJvb2t7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG4gIH1cclxuICAuYnRuLWdvb2dsZXtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(afAuth, router, auth, afs) {
        this.afAuth = afAuth;
        this.router = router;
        this.auth = auth;
        this.afs = afs;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    onLogin() {
        this.auth.loginEmailUser(this.email, this.password)
            .then((res) => {
            this.onLoginRedirect();
            //  this.appService.stopLoader();
        }).catch(err => console.log('err', err.message));
    }
    onLoginGoogle() {
        //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        this.auth.loginGoogleUser()
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    onLoginFacebook() {
        this.auth.loginFacebookUser()
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    onLogout() {
        this.auth.logoutUser();
    }
    onLoginRedirect() {
        this.router.navigate(['/home']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");



let ModalComponent = class ModalComponent {
    constructor(dataApi) {
        this.dataApi = dataApi;
    }
    ngOnInit() {
    }
    onSaveBook(bookForm) {
        this.dataApi.addBook(bookForm.value);
    }
};
ModalComponent.ctorParameters = () => [
    { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/components/nav-tabs/nav-tabs.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/nav-tabs/nav-tabs.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-flex {\r\n    flex: 1 0.5 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtdGFicy9uYXYtdGFicy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYtdGFicy9uYXYtdGFicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItZmxleCB7XHJcbiAgICBmbGV4OiAxIDAuNSBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/nav-tabs/nav-tabs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-tabs/nav-tabs.component.ts ***!
  \***********************************************************/
/*! exports provided: NavTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTabsComponent", function() { return NavTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavTabsComponent = class NavTabsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
NavTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-tabs/nav-tabs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-tabs.component.css */ "./src/app/components/nav-tabs/nav-tabs.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavTabsComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li{\r\n    list-style: none;\r\n}\r\n.sidenav-list span{\r\n    padding-left: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zaWRlbmF2LWxpc3Qgc3BhbntcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.closeSideNavigation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onToggleClose() {
        this.closeSideNavigation.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavbarComponent.prototype, "closeSideNavigation", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
        this.user = {
            displayName: '',
            email: '',
        };
        this.providerId = 'null';
    }
    ngOnInit() {
        this.authService.isAuth().subscribe(user => {
            if (user) {
                this.user.displayName = user.displayName;
                this.user.email = user.email;
                this.providerId = user.providerData[0].providerId;
                console.log('USER', user);
            }
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/registro/registro.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/registro/registro.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control.login-user {\r\n    border: 0px solid #fff !important;\r\n  }\r\n  .btn-social{\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color: #fff;\r\n    border-color: rgba(0,0,0,0.2);\r\n  }\r\n  .btn-facebook{\r\n    background: #3b5998;\r\n  }\r\n  .btn-google{\r\n    background: #dd4b39;\r\n  }\r\n  .btn-googles{\r\n    background: #6fb1b4;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuLXNvY2lhbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWZhY2Vib29re1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICB9XHJcbiAgLmJ0bi1nb29nbGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG4gIH1cclxuICAuYnRuLWdvb2dsZXN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmZiMWI0O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/registro/registro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/registro/registro.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let RegistroComponent = class RegistroComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
        });
    }
    ngOnInit() {
    }
    onAddUser() {
        this.authService.registerUser(this.email, this.password)
            .then((res) => {
            this.router.navigate(['/home']);
        }).catch(err => console.log('err', err.message));
    }
    onLoginGoogle() {
        //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        this.authService.loginGoogleUser()
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    onLoginFacebook() {
        this.authService.loginFacebookUser()
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    onLogout() {
        this.authService.logoutUser();
    }
    onLoginRedirect() {
        this.router.navigate(['/home']);
    }
};
RegistroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/registro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registro.component.css */ "./src/app/components/registro/registro.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], RegistroComponent);



/***/ }),

/***/ "./src/app/components/services/backend.service.ts":
/*!********************************************************!*\
  !*** ./src/app/components/services/backend.service.ts ***!
  \********************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let BackendService = class BackendService {
    constructor() {
    }
    getConfig() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].social;
    }
    getCartTotal() {
        let fakeresponse = "10";
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            setTimeout(() => {
                observer.next(fakeresponse);
            }, 2000);
        });
    }
    getUserStatus() {
        let fakeresponse = true;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            setTimeout(() => {
                observer.next(fakeresponse);
            }, 2000);
        });
    }
};
BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BackendService);



/***/ }),

/***/ "./src/app/custommaterial.module.ts":
/*!******************************************!*\
  !*** ./src/app/custommaterial.module.ts ***!
  \******************************************/
/*! exports provided: CustommaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustommaterialModule", function() { return CustommaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



//import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';




let CustommaterialModule = class CustommaterialModule {
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('more_vert', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert.svg'));
        iconRegistry.addSvgIcon('fb', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg'));
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon('git', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
        iconRegistry.addSvgIcon('dashboard-black', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-black.svg'));
        iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
        iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
        iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
        iconRegistry.addSvgIcon('account_circle', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle.svg'));
        iconRegistry.addSvgIcon('event', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/event.svg'));
        iconRegistry.addSvgIcon('track_changes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/track_changes.svg'));
        iconRegistry.addSvgIcon('language', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/language.svg'));
        iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
        iconRegistry.addSvgIcon('book', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
        iconRegistry.addSvgIcon('business', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/business.svg'));
        iconRegistry.addSvgIcon('place', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
        iconRegistry.addSvgIcon('code', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/code.svg'));
        iconRegistry.addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
        iconRegistry.addSvgIcon('clear', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clear.svg'));
        iconRegistry.addSvgIcon('vpn', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vpn.svg'));
        iconRegistry.addSvgIcon('new', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/new.svg'));
        iconRegistry.addSvgIcon('cloud', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg'));
        iconRegistry.addSvgIcon('backspace', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
        iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
        iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
        iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
        iconRegistry.addSvgIcon('cached', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cached.svg'));
        iconRegistry.addSvgIcon('create', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg'));
        iconRegistry.addSvgIcon('employee', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
        iconRegistry.addSvgIcon('employer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'));
        iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
        iconRegistry.addSvgIcon('equalizer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
        iconRegistry.addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security.svg'));
        iconRegistry.addSvgIcon('radio_on', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_on.svg'));
        iconRegistry.addSvgIcon('radio_off', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_off.svg'));
        iconRegistry.addSvgIcon('salary', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salary.svg'));
        iconRegistry.addSvgIcon('drop_down', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/drop_down.svg'));
    }
};
CustommaterialModule.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
CustommaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"]
        ],
        exports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"]
        ],
        declarations: []
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
], CustommaterialModule);



/***/ }),

/***/ "./src/app/geo.service.ts":
/*!********************************!*\
  !*** ./src/app/geo.service.ts ***!
  \********************************/
/*! exports provided: GeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoService", function() { return GeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm2015/BehaviorSubject.js");




let GeoService = class GeoService {
    constructor(db) {
        this.db = db;
        this.hits = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.dbRef = this.db.list('/locations');
        // this.geoFire = new GeoFire(this.dbRef.$ref); 
    }
    setLocation(key, coords) {
        this.geoFire.set(key, coords)
            .then(_ => console.log('/locacion '))
            .catch(err => console.log(err));
    }
    getLocations(radius, coords) {
        this.geoFire.query({
            center: coords
        })
            .on('key_entered', (key, location, distance) => {
            let hit = {
                location: location,
                distance: distance
            };
            let currentHits = this.hits.value;
            currentHits.push(hit);
            this.hits.next(currentHits);
        });
    }
};
GeoService.ctorParameters = () => [
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
GeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
], GeoService);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm2015/add/operator/take.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");









let AuthGuard = class AuthGuard {
    constructor(afsAuth, router, auth) {
        this.afsAuth = afsAuth;
        this.router = router;
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.afsAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(authState => !!authState))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(auth => {
            if (!auth) {
                this.router.navigate(['/login']);
            }
        }));
    }
    canActivateChild(next, state) {
        return true;
    }
    canLoad(route, segments) {
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/router.animation.ts":
/*!*************************************!*\
  !*** ./src/app/router.animation.ts ***!
  \*************************************/
/*! exports provided: moveIn, fallIn, moveInLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveIn", function() { return moveIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallIn", function() { return fallIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveInLeft", function() { return moveInLeft; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function moveIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('moveIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.6s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fallIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.4s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('moveInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.6s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);











let AuthService = class AuthService {
    constructor(afsAuth, afs, router) {
        this.afsAuth = afsAuth;
        this.afs = afs;
        this.router = router;
        this.User = this.afsAuth.authState.switchMap(user => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            }
        });
    }
    registerUser(email, pass) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    loginEmailUser(email, pass) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    logoutUser() {
        return this.afsAuth.auth.signOut();
    }
    loginFacebookUser() {
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider());
    }
    loginGoogleUser() {
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());
    }
    isAuth() {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(auth => auth));
    }
    /////////
    oAuthLogin(provider) {
        return this.afsAuth.auth.signInWithPopup(provider).then(credentials => {
            const user = credentials.user;
            this.afs.collection('users', ref => ref.where('email', '==', user.email)).valueChanges().subscribe(data => {
                if (!data.length) {
                    const newUser = {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        /*psw : user.psw,*/
                        role: 'cliente'
                    };
                    this.afs.collection('users').doc(user.uid).set(newUser).then(() => {
                        this.router.navigate(['/homme']);
                        return;
                    });
                }
                this.router.navigate(['/home']);
            });
        });
    }
    googleLogin() {
        const provider = new firebase__WEBPACK_IMPORTED_MODULE_10__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }
    emailAndPassword(email, password) {
        return this.afsAuth.auth.signInWithEmailAndPassword(email.value, password.value);
    }
    signUp(email, password) {
        return this.afsAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    signOut() {
        this.afsAuth.auth.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/compra.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/compra.service.ts ***!
  \********************************************/
/*! exports provided: CompraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraService", function() { return CompraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let CompraService = class CompraService {
    //
    constructor(afs) {
        this.afs = afs;
        //
        this.sharingData = {};
        this.datoscompraCollection = afs.collection('compras');
    }
    saveCompra(newCompra, carrito, total) {
        newCompra.carrito = carrito;
        newCompra.preciototal = total;
        this.datoscompraCollection.add(newCompra);
    }
    saveData(carritoser, preciot) {
        //console.log('saveData() called'+ carritoser+ this.sharingData.carrito);
        this.sharingData.carrito = carritoser;
        console.log('precio total enviar', preciot);
        this.sharingData.preciototal = preciot;
    }
    getCarrito() {
        console.log('getData() called');
        return this.sharingData.carrito;
    }
    getPrecioTotal() {
        return this.sharingData.preciototal;
    }
};
CompraService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CompraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], CompraService);



/***/ }),

/***/ "./src/app/services/contacto.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contacto.service.ts ***!
  \**********************************************/
/*! exports provided: ContactoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoService", function() { return ContactoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let ContactoService = class ContactoService {
    constructor(afs) {
        this.afs = afs;
        this.contactCollection = afs.collection('contacts');
    }
    saveMessage(newContact) {
        this.contactCollection.add(newContact);
    }
};
ContactoService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ContactoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], ContactoService);



/***/ }),

/***/ "./src/app/services/cookie.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cookie.service.ts ***!
  \********************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CookieService = class CookieService {
    constructor(afs) {
        this.afs = afs;
        this.selectedBook = {};
        this.booksCollection = afs.collection('galletas');
        this.books = this.booksCollection.valueChanges();
    }
    getAllBooks() {
        return this.books = this.booksCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    getOneBook(idBook) {
        this.bookDoc = this.afs.doc(`galletas/${idBook}`);
        return this.book = this.bookDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(action => {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                const data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
    }
    addBook(book) {
        this.booksCollection.add(book);
    }
    updateBook(book) {
        let idBook = book.id;
        this.bookDoc = this.afs.doc(`books/${idBook}`);
        this.bookDoc.update(book);
    }
    deleteBook(idBook) {
        this.bookDoc = this.afs.doc(`books/${idBook}`);
        this.bookDoc.delete();
    }
    getProducto() {
        return this.producto = this.booksCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data.nombre;
            });
        }));
    }
    getPrecio() {
        return this.precio = this.booksCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data.precio;
            });
        }));
    }
};
CookieService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], CookieService);



/***/ }),

/***/ "./src/app/services/data-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/data-api.service.ts ***!
  \**********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DataApiService = class DataApiService {
    constructor(afs) {
        this.afs = afs;
        this.selectedBook = {};
        this.booksCollection = afs.collection('books');
        this.books = this.booksCollection.valueChanges();
    }
    getAllBooks() {
        return this.books = this.booksCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    getOneBook(idBook) {
        this.bookDoc = this.afs.doc(`books/${idBook}`);
        return this.book = this.bookDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(action => {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                const data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
    }
    addBook(book) {
        this.booksCollection.add(book);
    }
    updateBook(book) {
        let idBook = book.id;
        this.bookDoc = this.afs.doc(`books/${idBook}`);
        this.bookDoc.update(book);
    }
    deleteBook(idBook) {
        this.bookDoc = this.afs.doc(`books/${idBook}`);
        this.bookDoc.delete();
    }
};
DataApiService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
DataApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], DataApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    social: {
        linkedin: 'https://www.linkedin.com/uas/login?_l=es',
        github: 'https://github.com/pablin2402',
        fblink: 'https://www.facebook.com/'
    },
    firebaseConfig: {
        apiKey: "AIzaSyAzVT1fQaGuijaxX6E2tciN0OmXiRhJm-8",
        authDomain: "ventaproductos-5e03c.firebaseapp.com",
        databaseURL: "https://ventaproductos-5e03c.firebaseio.com",
        projectId: "ventaproductos-5e03c",
        storageBucket: "ventaproductos-5e03c.appspot.com",
        messagingSenderId: "714964605525",
        appId: "1:714964605525:web:608c6a8975cbde711192dc",
        measurementId: "G-Y3GHYT9Q41"
    },
    googleMapsKey: 'AIzaSyDmPQrfklKHKfqwIOuQZ92Q7G0TW0AYZG8'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\PABLO\UPB\CUARTO SEMESTRE\INGENIERIA DE SOFTWARE\PROYECTOFINAL\Prueba\proyecto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
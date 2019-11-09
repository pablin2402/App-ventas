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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\r\n    <app-login></app-login>\r\n    <mat-sidenav #sidenav>\r\n        <app-navbar (closeSideNavigation)=\"sidenav.close()\">\r\n\r\n        </app-navbar>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n        <app-header (SideNavigationToggle)=\"sidenav.toggle()\">\r\n\r\n        </app-header>\r\n        <main>\r\n            <router-outlet> </router-outlet>         \r\n        </main>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/aboutus/aboutus.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/aboutus/aboutus.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-card [@fallIn]='state'>  \r\n    <mat-card-title>\r\n        Página del Administrador\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        \r\n        \r\n           \r\n            <p>Está es la página de Administrador.</p>\r\n            <p>En ella tendrás poder total de la página web.</p>\r\n            <p>Por motivos de seguridad, tendrás que acceder con tu cuenta y contraseña a cada página que desees entrar.</p>\r\n           <p>Saludos.</p>\r\n            <p>Equipo de desarrollo \"Dev - Thinking\".</p>\r\n    </mat-card-content>\r\n    </mat-card>\r\n    \r\n    \r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-book/add-book.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-book/add-book.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row mt-5\">\r\n        <div class=\"col\">\r\n          <button class=\"btn btn-primary float-right mb-3\" data-toggle=\"modal\"\r\n          routerLink=\"/add\">Nueva Galleta</button>\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">#</th>\r\n                <th scope=\"col\">Título</th>\r\n                <th scope=\"col\">Descripción</th>\r\n                <th scope=\"col\">Ingredientes</th>\r\n                <th scope=\"col\">Precio</th>\r\n                <th scope=\"col\">Oferta</th>\r\n                <th scope=\"col\">Alérgenos</th>\r\n                <th scope=\"col\">Marca</th>\r\n                <th scope=\"col\">Peso</th>\r\n                <th scope=\"col\">Fondo</th>\r\n\r\n                <th scope=\"col\">&nbsp;</th>\r\n                <th scope=\"col\">&nbsp;</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n\r\n              <tr *ngFor=\"let book of books; index as i\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{book.nombre}}</td>\r\n                <td>{{book.descripcion}}</td>\r\n                <td>{{book.ingredientes}}</td>\r\n                <td>{{book.precio}}</td>\r\n                <td>{{book.oferta == 1 ? 'Sí': 'No'}}</td>\r\n                <td>{{book.Alergenos}}</td>\r\n                <td>{{book.marca}}</td>\r\n                <td>{{book.peso}}</td>\r\n                <td>{{book.fondo}}</td>\r\n\r\n\r\n                \r\n                  <td>\r\n                    <button class=\"btn btn-secondary\"\r\n                   (click)=\"onPreUpdateBook(book)\"routerLink=\"/uploadbook\">Actualizar</button>\r\n                  </td>\r\n               \r\n                \r\n                <td>\r\n                  <button class=\"btn btn-danger\" (click)=\"onDeleteBook(book.id)\">Eliminar</button>\r\n                </td>\r\n\r\n               \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/addcookie/addcookie.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/addcookie/addcookie.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"register\" class=\"mb-5 mt-5\">\r\n\r\n  <div class=\"container\">\r\n     \r\n          <div class=\"card_register\">\r\n  \r\n            <div class=\"card\">\r\n  \r\n                    <h5 class=\"card-header\">Registrar Galletas</h5>\r\n                    <div class=\"card-body\">    \r\n\r\n                \r\n                <form [formGroup]=\"contactsForm\" (ngSubmit)=\"onSaveForm()\">\r\n                \r\n                  <div class=\"form-group\">\r\n                    \r\n                      <label for=\"nombre\">Nombre </label>\r\n\r\n                       <input type=\"text\" formControlName=\"nombre\" placeholder=\"Nombre Galleta\" class=\"form-control\">\r\n                       \r\n                       <div class=\"alert-danger\" *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\">\r\n                        <div class=\"container-error-message\" *ngIf=\"nombre.errors.required\">\r\n                          Nombre es obligatorio\r\n                        </div>\r\n                       \r\n                      </div>\r\n\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                      <div class=\"form-group col-md-6\">\r\n                          <label for=\"peso\">Peso</label>\r\n\r\n                           <input type=\"text\" formControlName=\"peso\" name=\"peso\" class=\"form-control\" placeholder=\" 0.0 g\">\r\n                           \r\n                           <div class=\"alert-danger\" *ngIf=\"peso.invalid && (peso.dirty || peso.touched)\">\r\n                               <div class=\"container-error-message\" *ngIf=\"peso.errors.required\">\r\n                                  El peso es obligatorio\r\n                                </div>\r\n                                \r\n                          </div>\r\n\r\n                      </div>\r\n                      <div class=\"form-group col-md-6\">\r\n                          <label for=\"oferta\">Marca</label>\r\n\r\n                           <input type=\"texto\" formControlName=\"marca\" name=\"marca\" class=\"form-control\" placeholder=\" Marca \">\r\n                           <div class=\"alert-danger\" *ngIf=\"marca.invalid && (marca.dirty || marca.touched)\">\r\n                              <div class=\"container-error-message\" *ngIf=\"marca.errors.required\">\r\n                              La marca es obligatoria\r\n                              </div>\r\n                            \r\n                            </div>\r\n                  </div> \r\n                </div>\r\n\r\n                  <div class=\"form-row\">\r\n                      <div class=\"form-group col-md-6\">\r\n                          <label for=\"oferta\">Oferta</label>\r\n\r\n                             <select type=\"text\" formControlName=\"oferta\" name=\"oferta\" class=\"form-control\" placeholder=\"Oferta\">\r\n                              <option value=\"1\">Sí</option>\r\n                              <option value=\"0\">No</option>\r\n                              </select>\r\n                              <div class=\"alert-danger\" *ngIf=\"oferta.invalid && (oferta.dirty || oferta.touched)\">\r\n                                <div class=\"container-error-message\" *ngIf=\"oferta.errors.required\">\r\n                                   La seleccion oferta es obligatoria\r\n                                 </div>\r\n                                 \r\n                           </div>\r\n                      </div>\r\n                      <div class=\"form-group col-md-6\">\r\n                          <label for=\"oferta\">Imagen de Portada</label>\r\n                          <input type=\"search\" formControlName=\"portada\" name=\"portada\" class=\"form-control\" placeholder=\" Imagen de Portada \">                                                <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\r\n                          <small id=\"emailHelp\" class=\"form-text text-muted\">La Imagen de Portada debe ser el link de una imagen de 400 x 400.</small>\r\n\r\n                          <small id=\"emailHelp\" class=\"form-text text-muted\">Esta imagen será mostrada en la lista general de productos.</small>\r\n\r\n                          <div class=\"alert-danger\" *ngIf=\"portada.invalid && (portada.dirty || portada.touched)\">\r\n                            <div class=\"container-error-message\" *ngIf=\"portada.errors.required\">\r\n                               La Imagen de Portada es obligatoria.\r\n                             </div>\r\n                             <div class=\"container-error-message\" *ngIf=\"portada.errors.minlength\">\r\n                              La imagen debe ser un link 10.\r\n                           </div>\r\n                           \r\n                       </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                     \r\n                  <div class=\"form-row\">\r\n                      <div class=\"form-group col-md-6\">\r\n                          <label for=\"oferta\">Fondo de la pantalla Productos</label>\r\n\r\n                          <input type=\"search\" formControlName=\"fondo\" name=\"fondo\" class=\"form-control\" placeholder=\" Fondo de la pantalla Productos \">                                                <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\r\n                          <small id=\"emailHelp\" class=\"form-text text-muted\">La Imagen debe ser el link de una imagen de 2000 x 1000.</small>\r\n\r\n                              <div class=\"alert-danger\" *ngIf=\"fondo.invalid && (fondo.dirty || fondo.touched)\">\r\n                                <div class=\"container-error-message\" *ngIf=\"fondo.errors.required\">\r\n                                  Este campo es obligatorio.\r\n                                 </div>\r\n                                 \r\n                           </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group col-md-6\">\r\n                          <label for=\"oferta\">Imagen de Portada</label>\r\n                          <input type=\"search\" formControlName=\"imagen\" name=\"imagen\" class=\"form-control\" placeholder=\" Imagen del Producto \">                                                <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\r\n                          <small id=\"emailHelp\" class=\"form-text text-muted\">La Imagen debe ser el link de una imagen de 700 x 700.</small>\r\n\r\n                          <small id=\"emailHelp\" class=\"form-text text-muted\">Esta imagen será mostrada al lado derecho de los datos completos de cada producto.</small>\r\n\r\n                          <div class=\"alert-danger\" *ngIf=\"imagen.invalid && (imagen.dirty || imagen.touched)\">\r\n                            <div class=\"container-error-message\" *ngIf=\"imagen.errors.required\">\r\n                              Este campo es obligatorio\r\n                             </div>\r\n                             <div class=\"container-error-message\" *ngIf=\"imagen.errors.minlength\">\r\n                              La imagen debe ser un link 10.\r\n                           </div>\r\n                           \r\n                       </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"form-group\">\r\n                      <label for=\"descripcion\">Descripción del Producto</label>\r\n\r\n                      <textarea formControlName=\"descripcion\" placeholder=\"Descripción del Producto\"class=\"form-control\"></textarea>\r\n                      <div class=\"alert-danger\" *ngIf=\"descripcion.invalid && (descripcion.dirty || descripcion.touched)\">\r\n                        <div class=\"container-error-message\" *ngIf=\"descripcion.errors.required\">\r\n                            La descripción del Producto es obligatoria.\r\n                        </div>\r\n                         <div class=\"container-error-message\" *ngIf=\"descripcion.errors.minlength\">\r\n                            La descripción mínimamente debe tener 40 caracteres.\r\n                         </div>\r\n                         <div class=\"container-error-message\" *ngIf=\"descripcion.errors.maxLength\">\r\n                          La descripción  debe tener menos de 100 caracteres.\r\n                       </div>\r\n                   </div>\r\n                    </div>\r\n                  <div class=\"form-group\">\r\n                      <label for=\"descripcioncorta\">Descripción Corta</label>\r\n\r\n                    <textarea formControlName=\"descripcioncorta\" placeholder=\"Descripción Corta\"class=\"form-control\"></textarea>\r\n                    <div class=\"alert-danger\" *ngIf=\"descripcioncorta.invalid && (descripcioncorta.dirty || descripcioncorta.touched)\">\r\n                      <div class=\"container-error-message\" *ngIf=\"descripcioncorta.errors.required\">\r\n                          La descripción corta del Producto es obligatoria.\r\n                      </div>\r\n                       <div class=\"container-error-message\" *ngIf=\"descripcioncorta.errors.minlength\">\r\n                          La descripción mínimamente debe tener 10 caracteres.\r\n                       </div>\r\n                       <div class=\"container-error-message\" *ngIf=\"descripcioncorta.errors.maxLength\">\r\n                        La descripción mínimamente debe tener menos de 30 caracteres.\r\n                     </div>\r\n                 </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label for=\"ingredientes\">Ingredientes</label>\r\n\r\n                    <textarea formControlName=\"ingredientes\" placeholder=\"Ingredientes\"class=\"form-control\"></textarea>\r\n                    <div class=\"alert-danger\" *ngIf=\"ingredientes.invalid && (ingredientes.dirty || ingredientes.touched)\">\r\n                      <div class=\"container-error-message\" *ngIf=\"ingredientes.errors.required\">\r\n                          El producto debe tener los ingredientes detallados.\r\n                      </div>\r\n                      <div class=\"container-error-message\" *ngIf=\"ingredientes.errors.minlength\">\r\n                        Los ingredientes deben tener 10 caracteres.\r\n                     </div>\r\n                      \r\n                 </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label for=\"Alergenos\">Alérgenos</label>\r\n\r\n                    <textarea formControlName=\"Alergenos\" placeholder=\"Alérgenos\"class=\"form-control\"></textarea>\r\n                  </div>\r\n                <div class=\"form-group \">\r\n                    <label for=\"oferta\">Precio</label>\r\n                    <input type=\"number\" formControlName=\"precio\" name=\"portada\" class=\"form-control\" placeholder=\" 0.00 Bs.\">\r\n                    \r\n                    <div class=\"alert-danger\" *ngIf=\"precio.invalid && (precio.dirty || precio.touched)\">\r\n                      <div class=\"container-error-message\" *ngIf=\"precio.errors.required\">\r\n                         El precio es obligatorio\r\n                       </div>\r\n                       \r\n                     \r\n                   </div>\r\n              </div>\r\n\r\n                  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\"routerLink=\"/addbook\">Salir</button>\r\n\r\n                  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!contactsForm.valid\"  >Guardar</button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacto/contacto.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacto/contacto.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"register\" class=\"mb-5 mt-5\">\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n        <div class=\"card_register\">\r\n\r\n          <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n\r\n              <h1 class=\"h3 mb-3 font-weight-normal\"> Envienos un Mensaje</h1>\r\n              <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSaveForm()\">\r\n                  <div class=\"form-group\">\r\n                     <input type=\"text\" formControlName=\"name\" placeholder=\"Ingrese su nombre\" class=\"form-control\">\r\n            \r\n                  </div>\r\n\r\n                     <div class=\"alert-danger\" *ngIf=\"name.invalid && (name.dirty || name.touched)\">\r\n                        <div class=\"form-group\">\r\n                           <div class=\"container-error-message\" *ngIf=\"name.errors.required\">\r\n                               Campo requerido.\r\n                           </div>\r\n                        </div>\r\n        \r\n                     </div>\r\n                     <div class=\"form-group\">\r\n                           <input type=\"email\" formControlName=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Ingrese su email\">\r\n                     </div>\r\n\r\n                    <div class=\"alert-danger\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"container-error-message\" *ngIf=\"email.errors.required\">\r\n                            Campo requerido.\r\n                        </div>\r\n                       </div>\r\n        \r\n        <div class=\"container-error-message\" *ngIf=\"(email.dirty || email.touched) && email.invalid && email.errors.pattern\">\r\n            Debe ser un correo\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n      <textarea formControlName=\"message\" placeholder=\"Ingrese su mensaje\"class=\"form-control\"></textarea>\r\n      </div>\r\n      <div class=\"alert-danger\" *ngIf=\"message.invalid && (message.dirty || message.touched)\">\r\n          <div class=\"form-group\">\r\n               <div class=\"container-error-message\" *ngIf=\"message.errors.required\">\r\n                   Campo requerido.\r\n              </div>\r\n          </div>\r\n        <div class=\"container-error-message\" *ngIf=\"message.errors.minlength\">\r\n            Tu mensaje debe tener por lo menos 10 caracteres.\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\"  [disabled]=\"!contactForm.valid\">Send</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-book/details-book.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-book/details-book.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"card text-center\">\r\n    <div class=\"card-body\">\r\n        \r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-md-4\">\r\n            <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\r\n        </div>\r\n           <div class=\"col-md-8\">\r\n              <div class=\"card-body\">\r\n                <div class=\"jumbotron\">\r\n                        <h4 class=\"display-4\">{{book.titulo}}</h4>\r\n                        \r\n                        <p class=\"lead\">de {{book.autor}}</p>\r\n                        <hr class=\"my-4\"> \r\n                </div>\r\n                <div class=\"card border-warning mb-3\" style=\"max-width: 18rem;\">\r\n                        <div class=\"card-header\">Precio</div>\r\n                          <p class=\"card-text\">{{book.precio}} Bs.</p>\r\n                  </div>\r\n              </div>\r\n                   <p class=\"card-text\">\r\n                      \r\n                      {{book.descripcion}}\r\n                    \r\n                  </p>\r\n                  <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"jumbotron\">\r\n              <h4 class=\"card-title\" >Descripción del Producto</h4>\r\n              \r\n              <p class=\"lead\"> {{book.descripcion}}</p>\r\n                <hr class=\"my-4\">\r\n                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n                <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n              </div>\r\n            <div class=\"card-footer text-muted\">\r\n                <div class=\"spinner-border\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                  </div>\r\n                © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n            </div>\r\n        </div>\r\n\r\n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-cookie/details-cookie.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-cookie/details-cookie.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-center\">\r\n          \r\n\r\n    <div class=\"card-body\">\r\n          \r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col-md-4\">\r\n                    <img class=\"img-fluid\" src=\"{{books.portada}}\" alt=\"{{books.nombre}}\">\r\n            </div>\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"card-body\">\r\n                      <div class=\"jumbotron\">\r\n                          <h4 class=\"display-4\">{{books.nombre}}</h4>\r\n                          \r\n                          <p class=\"lead\">de {{books.marca}}</p>\r\n                          <hr class=\"my-4\"> \r\n                      </div>\r\n                      <div class=\"card border-warning mb-3\" style=\"max-width: 18rem;\">\r\n                          <div class=\"card-header\">Precio</div>\r\n                            <p class=\"card-text\">{{books.precio}} Bs.</p>\r\n                          </div>\r\n                        </div>\r\n                     <p class=\"card-text\">\r\n                        \r\n                        {{books.descripcion}}\r\n                      \r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"jumbotron\">\r\n                <h4 class=\"card-title\" >Ingredientes</h4>\r\n                \r\n                <p class=\"lead\"> {{books.ingredientes}}</p>\r\n                  <hr class=\"my-4\">\r\n                  <h5 class=\"card-title\" >Alérgenos</h5>\r\n                  \r\n                  <p>{{books.Alergenos}}</p>\r\n                </div>\r\n              <div class=\"card-footer text-muted\">\r\n                  \r\n                  © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n              </div>\r\n          </div>\r\n  \r\n          ");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-3\">\r\n    <div class=\"card-body\">\r\n        <h5 class=\"card-header\">Mapa de Vendedores y Distribuidores</h5>\r\n\r\n                  <agm-map [latitude]=\"lat\" [longitude]=\"lng\"\r\n                  [latitude]=\"lat\"\r\n                  [longitude]=\"lng\"\r\n                  [zoom]=\"zoom\"\r\n                  [disableDefaultUI]=\"false\"\r\n                  [zoomControl]=\"false\"\r\n                  (mapClick)=\"mapClicked($event)\"\r\n                      >\r\n                        <agm-marker\r\n                        *ngFor=\"let m of markers; let i = index\"\r\n                        (markerClick)=\"clickedMarker(m.label, i)\"\r\n                        [latitude]=\"m.lat\"\r\n                        [longitude]=\"m.lng\"\r\n                        [label]=\"m.label\"\r\n                        [iconUrl]=\"m.iconUrl\"\r\n                        (dragEnd)=\"markerDragEnd(m, $event)\"\r\n\r\n                        >\r\n                        <agm-info-window>\r\n                                <strong>{{m.label}}</strong>\r\n                                {{m.lat}}\r\n                                {{m.lng}}\r\n                       \r\n                               </agm-info-window>\r\n                         </agm-marker>\r\n                  \r\n                   </agm-map>\r\n\r\n     <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.</footer>\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <!-- BOTON DE DESPLAZAMIENTE ANGULAR MATERIAL -->\r\n    <div>\r\n        <button mat-icon-button (click)=\"onToggleOpenSideNav()\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\r\n      <!-- TITULO DE LA APP -->\r\n      <a class=\"navbar-brand\" href=\"#\">{{app_name}}</a>\r\n      <!-- {%FOOTER_LINK} -->\r\n      <ul class=\"navbar-nav mr-auto\">\r\n          \r\n      </ul>\r\n      \r\n      \r\n \r\n      <ul class=\"navbar-nav ml-auto\">\r\n          \r\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n         \r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\r\n          <a class=\"nav-link\" routerLink=\"/profile\">Perfil</a>\r\n        </li>\r\n       \r\n        <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Ingresar\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\r\n          <a href=\"#\" class=\"nav-link\" (click)=\"onLogout()\">Salir \r\n          </a>\r\n        </li>\r\n      </ul>\r\n  \r\n      \r\n     \r\n\r\n    </div>\r\n  </nav>\r\n\r\n\r\n\r\n\r\n\r\n\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div class=\"bd-example\" *ngFor=\"let book of books\">\r\n            <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\r\n              <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\r\n              </ol>\r\n              <div class=\"carousel-inner\" >\r\n                <div class=\"carousel-item active\">\r\n                  <!-- FALTA PONER PARA OFERTAS-->\r\n                  <img  routerLink=\"/cookies\" src=\"https://firebasestorage.googleapis.com/v0/b/ventaproductos-5e03c.appspot.com/o/mo.jpg?alt=media&token=22bd4d8e-e9f9-4344-ae7a-741e8594e099\" class=\"d-block w-100\" alt=\"...\">\r\n\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>El sabe cual comerse y a que hora</h5>\r\n                    <p>Y tú¿Ya compraste las tuyas?</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                  <img src=\"/assets/img/s.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h5>Nintendo</h5>\r\n                    <p>{{book.titulo}}</p>\r\n                  </div>\r\n                </div>\r\n               \r\n              </div>\r\n              <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n              </a>\r\n              <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n          <section id=\"books\" class=\"mt-5\">\r\n              <div class=\"container\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\r\n                    <div class=\"card_book\">\r\n                      <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                          <p>\r\n                            <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\r\n                          </p>\r\n                          <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\r\n                          <p class=\"card-text\">\r\n                            {{book.descripcion }}\r\n                          </p>\r\n                          <div class=\"container-precio-idioma\">\r\n                            <p class=\"badge badge-info\">\r\n                              {{book.precio}}€\r\n                            </p>\r\n                            <p class=\"badge badge-info\">\r\n                              {{book.idioma}}\r\n                            </p>\r\n                          </div>\r\n                            <!-- <button type=\"submit\" class=\"btn btn-block btn-primary\" target=\"_blank\">Comprar</button>-->\r\n                            <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listcookies/listcookies.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listcookies/listcookies.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n \r\n      <section id=\"books\" class=\"mt-5\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\r\n                <div class=\"card_book\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-body text-center\">\r\n                      <p>\r\n                        <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.nombre}}\">\r\n                      </p>\r\n                      <h4 routerLink=\"/galleta/{{book.id}}\" class=\"card-title\">{{book.nombre}}</h4>\r\n                      <p class=\"card-text\">\r\n                        {{book.descripcioncorta }}\r\n                      </p>\r\n                      <div class=\"container-precio-idioma\">\r\n                        <p class=\"badge badge-info\">\r\n                          {{book.precio}} Bs.\r\n                        </p>\r\n                        \r\n                        <p class=\"badge badge-info\">\r\n                          {{book.peso}}\r\n                        </p>\r\n                      </div>\r\n                        <!-- <button type=\"submit\" class=\"btn btn-block btn-primary\" target=\"_blank\">Comprar</button>-->\r\n                      <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login\" class=\"mb-5 mt-5\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n              <div class=\"card_login\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body text-center\">\r\n                    <form #formLogin=\"ngForm\" (submit)=\"onLogin()\">\r\n                      <h1 class=\"h3 mb-3 font-weight-normal\" >Iniciar Sesión</h1>\r\n                     \r\n                      <div class=\"form-group\">\r\n                        <input [(ngModel)]=\"email\" \r\n                        type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Correo Electrónico\" required>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <input [(ngModel)]=\"password\" \r\n                        type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Contraseña\" required>\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Ingresar</button>\r\n                     \r\n                      \r\n                      <!--a href=\"\" (click)=\"onLogout()\">Salir</a-->\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-tabs/nav-tabs.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-tabs/nav-tabs.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navtabs-container\">\r\n   <nav mat-tab-nav-bar  mat-align-tabs=\"center\" fxFlex fxLayout fxLayoutAlign=\"center center\" style=\"background-color:#bde5ce;\">\r\n    \r\n    <a mat-tab-link routerLink=\"/\"\r\n    routerLinkActive #home=\"routerLinkActive\"\r\n    [active]=\"home.isActive\"> \r\n    Home\r\n    </a>\r\n\r\n    <a mat-tab-link routerLink=\"/addbook\"\r\n    routerLinkActive #configuraciones=\"routerLinkActive\"\r\n    [active]=\"configuraciones.isActive\"> \r\n    Listar Productos\r\n    </a>\r\n    <a mat-tab-link routerLink=\"/cookies\"\r\n    routerLinkActive #configuraciones=\"routerLinkActive\"\r\n    [active]=\"configuraciones.isActive\"> \r\n      Nuestro Productos\r\n    </a>\r\n\r\n    <a mat-tab-link routerLink=\"/registro\"\r\n    routerLinkActive #configuraciones=\"routerLinkActive\"\r\n    [active]=\"configuraciones.isActive\"> \r\n    Registro\r\n    </a>\r\n    <a mat-tab-link routerLink=\"/contacto\"\r\n    routerLinkActive #contacto=\"routerLinkActive\"\r\n    [active]=\"contacto.isActive\"> \r\n    Contacto\r\n    </a>\r\n  </nav>\r\n \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list class=\"sidenav-list\">\r\n    <a mat-list-item routerLink=\"/addbook\"(click)=\"onToggleClose()\"> \r\n        <mat-icon>shop</mat-icon>\r\n        <span> Productos</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/google\"(click)=\"onToggleClose()\"> \r\n        <mat-icon>map</mat-icon>\r\n        <span>Mapas</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/list\"(click)=\"onToggleClose()\"> \r\n        <mat-icon>assignment_ind</mat-icon>\r\n        <span>Vendedores</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/dist\"(click)=\"onToggleClose()\"> \r\n        <mat-icon>contacts</mat-icon>\r\n        <span>Distribuidores</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/carrito\"(click)=\"onToggleClose()\"> \r\n        <mat-icon>shopping_cart</mat-icon>\r\n        <span>Ventas</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/contactos\"(click)=\"onToggleClose()\"> \r\n        <mat-icon>help</mat-icon>\r\n        <span>Asistencia al usuario</span>\r\n    </a>\r\n\r\n</mat-nav-list>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"profile\" class=\"container\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\r\n        </div>\r\n        <div class=\"row user-details\">\r\n          <div class=\"col-12\">\r\n            <h2>Mi Perfil</h2>\r\n            <h3></h3>\r\n            <h4></h4>\r\n\r\n            <h5 *ngIf=\"providerId != 'password'\">{{user.name}}</h5>\r\n            <p>\r\n              {{user.email}}\r\n            </p>\r\n  \r\n            <hr>\r\n            <!--span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores suscipit itaque minima quae.</span-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/uploadbook/uploadbook.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/uploadbook/uploadbook.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"register\" class=\"mb-5 mt-5\">\n\n        <div class=\"container\">\n           \n                <div class=\"card_register\">\n        \n                  <div class=\"card\">\n        \n                          <h5 class=\"card-header\">Actualizar Galletas</h5>\n                          <div class=\"card-body\">    \n      \n                      \n                      <form (ngSubmit)=\"onSaveBook(formBook)\" #formBook=\"ngForm\">\n                      \n                            <div class=\"form-group\">\n                                       \n\n                                    <input name=\"id\" type=\"hidden\" [(ngModel)]=\"this.dataApi.selectedBook.id\" placeholder=\"id\" class=\"form-control\">\n                                    \n                                \n                            </div>\n                            <div class=\"form-group\">\n                            \n                                <label for=\"nombre\">Nombre </label>\n        \n                                <input type=\"text\"  name=\"nombre\" placeholder=\"Nombre Galleta\" class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.nombre\">\n                                \n                                \n                                \n                            </div>\n      \n                        \n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"peso\">Peso</label>\n      \n                                 <input type=\"text\"  name=\"peso\" class=\"form-control\" placeholder=\" 0.0 g\" [(ngModel)]=\"this.dataApi.selectedBook.peso\">\n                                 \n      \n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"oferta\">Marca</label>\n      \n                                 <input type=\"texto\" name=\"marca\" class=\"form-control\" placeholder=\" Marca \" [(ngModel)]=\"this.dataApi.selectedBook.marca\">\n                                 \n                            </div>\n                        </div> \n                      \n      \n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"oferta\">Oferta</label>\n      \n                                   <select type=\"text\"  name=\"oferta\" class=\"form-control\" placeholder=\"Oferta\" [(ngModel)]=\"this.dataApi.selectedBook.oferta\">\n                                    <option value=\"1\">Sí</option>\n                                    <option value=\"0\">No</option>\n                                    </select>\n                                    \n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"oferta\">Imagen de Portada</label>\n                                <input type=\"search\"  name=\"portada\" class=\"form-control\" placeholder=\" Imagen de Portada \" [(ngModel)]=\"this.dataApi.selectedBook.portada\">                                                <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">La Imagen de Portada debe ser el link de una imagen de 400 x 400.</small>\n      \n                                <small id=\"emailHelp\" class=\"form-text text-muted\">Esta imagen será mostrada en la lista general de productos.</small>\n      \n                               \n                            </div>\n                        </div>\n        \n                           \n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"oferta\">Fondo de la pantalla Productos</label>\n      \n                                <input type=\"search\" name=\"fondo\" class=\"form-control\" placeholder=\" Fondo de la pantalla Productos \" [(ngModel)]=\"this.dataApi.selectedBook.fondo\">                                                <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">La Imagen debe ser el link de una imagen de 2000 x 1000.</small>\n      \n                            </div>\n      \n                            <div class=\"form-group col-md-6\">\n                                <label for=\"oferta\">Imagen de Portada</label>\n                                <input type=\"search\"  name=\"imagen\" class=\"form-control\" placeholder=\" Imagen del Producto \" [(ngModel)]=\"this.dataApi.selectedBook.imagen\">                                                <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">La Imagen debe ser el link de una imagen de 700 x 700.</small>\n      \n                                <small id=\"emailHelp\" class=\"form-text text-muted\">Esta imagen será mostrada al lado derecho de los datos completos de cada producto.</small>\n      \n                               \n                            </div>\n                        </div>\n        \n                        <div class=\"form-group\">\n                            <label for=\"descripcion\">Descripcion del Producto</label>\n      \n                            <textarea  name=\"descripcion\" placeholder=\"Descripcion\"class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.descripcion\"></textarea>\n                          \n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"descripcioncorta\">Descripcion Corta</label>\n      \n                          <textarea name=\"descripcioncorta\" placeholder=\"Descripcion Corta\"class=\"form-control\"[(ngModel)]=\"this.dataApi.selectedBook.descripcioncorta\"></textarea>\n                        \n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"ingredientes\">Ingredientes</label>\n      \n                          <textarea  placeholder=\"Ingredientes\" name=\"ingredientes\" class=\"form-control\"[(ngModel)]=\"this.dataApi.selectedBook.ingredientes\"></textarea>\n                         \n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"Alergenos\">Alergenos</label>\n      \n                          <textarea  name=\"Alergenos\" placeholder=\"Alergenos\"class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.Alergenos\"></textarea>\n                        </div>\n                      <div class=\"form-group \">\n                          <label for=\"oferta\">Precio</label>\n                          <input type=\"number\"  name=\"precio\" class=\"form-control\" placeholder=\" 0.00 Bs.\"[(ngModel)]=\"this.dataApi.selectedBook.precio\">\n                          \n                         \n                             \n                           \n                    </div>\n\n\n                        \n      \n                        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\"   >Guardar</button>\n                        <BR>\n                        <br>\n                        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\"routerLink=\"/addbook\">Salir</button>\n                    </form>\n          </div>\n      \n        </div>\n        </div>\n        </div>\n        </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/listcontacts/listcontacts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/listcontacts/listcontacts.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row mt-5\">\n        <div class=\"col\">          \n            <h2 class=\"card-header\">Atención al Cliente</h2>\n          <br>\n    \n\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Correo Electrónico</th>\n                <th scope=\"col\">Mensaje</th>\n                <th scope=\"col\">Nombre</th>\n               \n              </tr>\n            </thead>\n            <tbody>\n    \n              <tr *ngFor=\"let book of books; index as i\">\n                <th scope=\"row\">{{i+1}}</th>\n                <td>{{book.email}}</td>\n                <td>{{book.message}}</td>\n                <td>{{book.name}}</td>\n              \n                \n    \n    \n                \n                 \n    \n               \n              </tr>\n            </tbody>\n          </table>\n        </div>\n       \n      </section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribuidores/actualizar/actualizar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribuidores/actualizar/actualizar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"register\" class=\"mb-5 mt-5\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n        \n              <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n                <div class=\"card_register\">\n        \n                  <div class=\"card\">\n                        <h5 class=\"card-header\">Actualizar Distribuidores</h5>\n\n                    <div class=\"card-body text-center\">\n        \n                      \n                      <form (ngSubmit)=\"onSaveBook(formBook)\" #formBook=\"ngForm\">\n                      \n                            <div class=\"form-group\">\n                                       \n\n                                    <input name=\"id\"type=\"hidden\" [(ngModel)]=\"this.dataApi.selectedBook.id\" placeholder=\"Distribuidor\" class=\"form-control\">\n                                    \n                                \n                                  </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Nombre</label>\n       \n                          <input type=\"text\" name=\"nombre\" placeholder=\"Ingrese su nombre\" class=\"form-control\"  [(ngModel)]=\"this.dataApi.selectedBook.nombre\" >\n                            \n                        </div>\n        \n                            \n    \n                        <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Correo Electrónico</label>\n             \n                          <input type=\"email\" name=\"correo\" id =\"email\" [(ngModel)]=\"this.dataApi.selectedBook.correo\"  class=\"form-control\" placeholder=\"Ingrese su dirección de correo electrónico\">\n                          <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\n       \n                        </div>\n        \n                           \n                        \n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">País de Origen</label>\n    \n                            <input type=\"text\"  [(ngModel)]=\"this.dataApi.selectedBook.pais\"  name=\"pais\" class=\"form-control\" placeholder=\"Ingrese Pais de Origen\">\n                          \n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">Teléfono</label>\n    \n                            <input type=\"number\" [(ngModel)]=\"this.dataApi.selectedBook.telefono\"   name=\"telefono\" class=\"form-control\" placeholder=\"Ingrese número de teléfono\">\n                           \n                            \n                         </div>\n                        \n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">Latitud</label>\n    \n                            <input type=\"number\"  [(ngModel)]=\"this.dataApi.selectedBook.latitud\" name=\"latitud\" class=\"form-control\" placeholder=\"Latitud\">\n                            \n                        </div>\n    \n                 <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Longitud</label>\n    \n                    <input type=\"number\"   [(ngModel)]=\"this.dataApi.selectedBook.longitud\" name=\"longitud\" class=\"form-control\" placeholder=\"Longitud\">\n                \n                 </div>\n    \n    \n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"reset\"  >Limpiar</button>\n    \n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" routerLink=\"/dist\"  >Cerrar</button>\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\"  >Guardar</button>\n            \n              </form>\n          </div>\n        </div>\n        </div>\n        </div>\n        </div>\n        </div>\n        </section>\n    \n    \n        <div class=\"card mb-3\">\n          <div class=\"card-body\">\n              <h5 class=\"card-header\">Mapa de Vendedores y Distribuidores</h5>\n      \n                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\"\n                        [latitude]=\"lat\"\n                        [longitude]=\"lng\"\n                        [zoom]=\"zoom\"\n                        [disableDefaultUI]=\"false\"\n                        [zoomControl]=\"false\"\n                        (mapClick)=\"mapClicked($event)\"\n                            >\n                              <agm-marker\n                              *ngFor=\"let m of markers; let i = index\"\n                              (markerClick)=\"clickedMarker(m.label, i)\"\n                              [latitude]=\"m.lat\"\n                              [longitude]=\"m.lng\"\n                              [label]=\"m.label\"\n                              [iconUrl]=\"m.iconUrl\"\n                              (dragEnd)=\"markerDragEnd(m, $event)\"\n      \n                              >\n                              <agm-info-window>\n                                      <strong>Latitud: </strong>{{m.lat}}\n                                       <strong>Longitud: </strong>{{m.lng}}\n                             \n                                     </agm-info-window>\n                               </agm-marker>\n                        \n                         </agm-map>\n      \n           <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.</footer>\n      \n      </div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribuidores/adddis/adddis.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribuidores/adddis/adddis.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"register\" class=\"mb-5 mt-5\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n    \r\n          <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n            <div class=\"card_register\">\r\n    \r\n              <div class=\"card\">\r\n                  <div class=\"card-body text-center\">\r\n    \r\n                  <h1 class=\"h3 mb-3 font-weight-normal\"> Registrar Distribuidores</h1>\r\n                  \r\n                  <form [formGroup]=\"contacForm\" (ngSubmit)=\"onSaveForm()\">\r\n                  \r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">Nombre</label>\r\n   \r\n                      <input type=\"text\" formControlName=\"nombre\" placeholder=\"Ingrese su nombre\" class=\"form-control\">\r\n                         <div class=\"alert-danger\" *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\">\r\n                            <div class=\"container-error-message\" *ngIf=\"nombre.errors.required\">\r\n                              Nombre es obligatorio\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n    \r\n                        \r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">Correo Electrónico</label>\r\n         \r\n                      <input type=\"email\" formControlName=\"correo\" name=\"email\" id =\"email\" class=\"form-control\" placeholder=\"Ingrese su dirección de correo electrónico\">\r\n                      <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\r\n   \r\n                            <div class=\"alert-danger\" *ngIf=\"correo.invalid && (correo.dirty || correo.touched)\">\r\n                                    <div class=\"container-error-message\" *ngIf=\"correo.errors.required\">\r\n                                    Su correo es obligatorio\r\n                                    </div>\r\n                                    <div class=\"container-error-message\" *ngIf=\"correo.errors.minlength\">\r\n                                    Debe ser un correo válido\r\n                                    </div>\r\n                            </div>\r\n                    </div>\r\n    \r\n                       \r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">País de Origen</label>\r\n\r\n                        <input type=\"text\" formControlName=\"pais\" name=\"pais\" class=\"form-control\" placeholder=\"Ingrese Pais de Origen\">\r\n                        <div class=\"alert-danger\" *ngIf=\"pais.invalid && (pais.dirty || pais.touched)\">\r\n                            <div class=\"container-error-message\" *ngIf=\"pais.errors.required\">\r\n                              Pais de Origen es de caracter obligatorio\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">Teléfono</label>\r\n\r\n                        <input type=\"number\" formControlName=\"telefono\" name=\"telefono\" class=\"form-control\" placeholder=\"Ingrese número de teléfono\">\r\n                        <div class=\"alert-danger\" *ngIf=\"telefono.invalid && (telefono.dirty || telefono.touched)\">\r\n                            <div class=\"container-error-message\" *ngIf=\"telefono.errors.required\">\r\n                              Teléfono es de cáracter obligatorio\r\n                            </div>\r\n                            <div class=\"container-error-message\" *ngIf=\"telefono.errors.minlength\">\r\n                                El telefono debe tener 7 caracteres\r\n                             </div>\r\n                        </div>\r\n                     </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">Latitud</label>\r\n\r\n                        <input type=\"number\" formControlName=\"latitud\" name=\"latitud\" class=\"form-control\" placeholder=\"Latitud\">\r\n                        <div class=\"alert-danger\" *ngIf=\"latitud.invalid && (latitud.dirty || latitud.touched)\">\r\n                            <div class=\"container-error-message\" *ngIf=\"latitud.errors.required\">\r\n                              La latitud es obligatoria.\r\n                            </div>\r\n                           \r\n                        </div>\r\n                    </div>\r\n\r\n             <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Longitud</label>\r\n\r\n                <input type=\"number\" formControlName=\"longitud\" name=\"longitud\" class=\"form-control\" placeholder=\"Longitud\">\r\n                <div class=\"alert-danger\" *ngIf=\"longitud.invalid && (longitud.dirty || longitud.touched)\">\r\n                    <div class=\"container-error-message\" *ngIf=\"longitud.errors.required\">\r\n                      La longitud es obligatoria.\r\n                    </div>\r\n                </div>\r\n             </div>\r\n\r\n\r\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"reset\"  >Limpiar</button>\r\n\r\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" routerLink=\"/dist\"  >Cerrar</button>\r\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!contacForm.valid\" >Guardar</button>\r\n        \r\n          </form>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </section>\r\n\r\n\r\n    <div class=\"card mb-3\">\r\n      <div class=\"card-body\">\r\n          <h5 class=\"card-header\">Mapa de Vendedores y Distribuidores</h5>\r\n  \r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\"\r\n                    [latitude]=\"lat\"\r\n                    [longitude]=\"lng\"\r\n                    [zoom]=\"zoom\"\r\n                    [disableDefaultUI]=\"false\"\r\n                    [zoomControl]=\"false\"\r\n                    (mapClick)=\"mapClicked($event)\"\r\n                        >\r\n                          <agm-marker\r\n                          *ngFor=\"let m of markers; let i = index\"\r\n                          (markerClick)=\"clickedMarker(m.label, i)\"\r\n                          [latitude]=\"m.lat\"\r\n                          [longitude]=\"m.lng\"\r\n                          [label]=\"m.label\"\r\n                          [iconUrl]=\"m.iconUrl\"\r\n                          (dragEnd)=\"markerDragEnd(m, $event)\"\r\n  \r\n                          >\r\n                          <agm-info-window>\r\n                                  <strong>Latitud: </strong>{{m.lat}}\r\n                                   <strong>Longitud: </strong>{{m.lng}}\r\n                         \r\n                                 </agm-info-window>\r\n                           </agm-marker>\r\n                    \r\n                     </agm-map>\r\n  \r\n       <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.</footer>\r\n  \r\n  </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribuidores/listdistribuidores/listdistribuidores.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribuidores/listdistribuidores/listdistribuidores.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row mt-5\">\r\n    <div class=\"col\">          \r\n        <h2 class=\"card-header\">Distribuidores</h2>\r\n      <br>\r\n\r\n      <button class=\"btn btn-primary float-right mb-3\" \r\n      routerLink=\"/distribuidores\">Nuevo Distribuidor</button>\r\n      <br>\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Nombre</th>\r\n            <th scope=\"col\">Correo Electrónico</th>\r\n            <th scope=\"col\">País</th>\r\n            <th scope=\"col\">Teléfono</th>\r\n            <th scope=\"col\">Longitud</th>\r\n            <th scope=\"col\">Latitud</th>\r\n           \r\n            <th scope=\"col\">&nbsp;</th>\r\n            <th scope=\"col\">&nbsp;</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n          <tr *ngFor=\"let book of books; index as i\">\r\n            <th scope=\"row\">{{i+1}}</th>\r\n            <td>{{book.nombre}}</td>\r\n            <td>{{book.correo}}</td>\r\n            <td>{{book.pais}}</td>\r\n            <td>{{book.telefono}}</td>\r\n            <td>{{book.longitud}}</td>\r\n            <td>{{book.latitud}}</td>\r\n            \r\n\r\n\r\n            \r\n              <td>\r\n                <button class=\"btn btn-secondary\"(click)=\"onPreUpdateBook(book)\"routerLink=\"/actualizar\">Actualizar</button>\r\n              </td>\r\n           \r\n            \r\n            <td>\r\n              <button class=\"btn btn-danger\" (click)=\"onDeleteBook(book.id)\">Eliminar</button>\r\n            </td>\r\n\r\n           \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n   \r\n  </section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/workers/addworkers/addworkers.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workers/addworkers/addworkers.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n    <div class=\"container\">\r\n        \r\n            <div class=\"card_register\">\r\n    \r\n              <div class=\"card\">\r\n                <h5 class=\"card-header\">Registrar Vendedores</h5>\r\n                <div class=\"card-body\">    \r\n                  \r\n                  <form [formGroup]=\"contactsForm\" (ngSubmit)=\"onSaveForm()\">\r\n                  \r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-6\">\r\n\r\n                              <label for=\"exampleInputEmail1\">Nombre</label>\r\n      \r\n                            <input type=\"text\" formControlName=\"nombre\" placeholder=\"Ingrese su nombre\" class=\"form-control\">\r\n                              <div class=\"alert-danger\" *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\">\r\n                                        <div class=\"container-error-message\" *ngIf=\"nombre.errors.required\">\r\n                                              Nombre es obligatorio\r\n                                        </div>\r\n                              </div>\r\n                         </div>\r\n                         <div class=\"form-group col-md-6\">\r\n                            <label for=\"exampleInputEmail1\">Apellido</label>\r\n\r\n                            <input type=\"text\" formControlName=\"apellido\" name=\"apellido\" class=\"form-control\" placeholder=\"Ingrese su Apellido\">\r\n                            <div class=\"alert-danger\" *ngIf=\"apellido.invalid && (apellido.dirty || apellido.touched)\">\r\n                                 <div class=\"container-error-message\" *ngIf=\"apellido.errors.required\">\r\n                                       Apellido es obligatorio\r\n                                  </div>\r\n                            </div>\r\n                         </div>\r\n                    </div>     \r\n\r\n    \r\n                      \r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-6\">\r\n\r\n                      \r\n                              <label for=\"exampleInputEmail1\">Cédula de Identidad</label>\r\n        \r\n                                <input type=\"number\" formControlName=\"ci\" name=\"ci\" class=\"form-control\" placeholder=\"Cédula de Identidad\">\r\n                                    <div class=\"alert-danger\" *ngIf=\"ci.invalid && (ci.dirty || ci.touched)\">\r\n                                            <div class=\"container-error-message\" *ngIf=\"ci.errors.required\">\r\n                                                La Cédula de Identidad es obligatoria.\r\n                                            </div>\r\n                                    </div>\r\n                          </div>\r\n                          <div class=\"form-group col-md-6\">\r\n                              <label for=\"exampleInputEmail1\">Teléfono</label>\r\n\r\n                              <input type=\"number\" formControlName=\"telefono\" name=\"telefono\" class=\"form-control\" placeholder=\"Ingrese número de teléfono\">\r\n                              <div class=\"alert-danger\" *ngIf=\"telefono.invalid && (telefono.dirty || telefono.touched)\">\r\n                                    <div class=\"container-error-message\" *ngIf=\"telefono.errors.required\">\r\n                                       Teléfono es de cáracter obligatorio\r\n                                    </div>\r\n                                    <div class=\"container-error-message\" *ngIf=\"telefono.errors.minlength\">\r\n                                      El telefono debe tener 7 caracteres\r\n                                    </div>\r\n                              </div>\r\n                          </div>\r\n                    </div>\r\n   \r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">Dirección de Correo Electrónico</label>\r\n\r\n                      <input type=\"email\" formControlName=\"correo\" name=\"email\" class=\"form-control\" placeholder=\"Ingrese su Correo Electrónico\">\r\n                      <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\r\n       \r\n                      <div class=\"alert-danger\" *ngIf=\"correo.invalid && (correo.dirty || correo.touched)\">\r\n                                     <div class=\"container-error-message\" *ngIf=\"correo.errors.required\">\r\n                                         La dirección de correo electrónico es obligatoria.\r\n                                     </div>\r\n                      </div>\r\n                    \r\n                    </div>\r\n    \r\n                       \r\n                   \r\n                 \r\n\r\n                  <div class=\"form-row\">\r\n                      <div class=\"form-group col-md-6\">\r\n                            <label for=\"exampleInputEmail1\">Latitud</label>\r\n\r\n                          <input type=\"number\" formControlName=\"latitud\" name=\"latitud\" class=\"form-control\" placeholder=\"Latitud\">\r\n                              <div class=\"alert-danger\" *ngIf=\"latitud.invalid && (latitud.dirty || latitud.touched)\">\r\n                                  <div class=\"container-error-message\" *ngIf=\"latitud.errors.required\">\r\n                                      La latitud es obligatoria.\r\n                                  </div>\r\n                            \r\n                              </div>\r\n\r\n                       </div>\r\n\r\n                       <div class=\"form-group col-md-6\">\r\n\r\n                          <label for=\"exampleInputEmail1\">Longitud</label>\r\n\r\n                            <input type=\"number\" formControlName=\"longitud\" name=\"longitud\" class=\"form-control\" placeholder=\"Longitud\">\r\n                                <div class=\"alert-danger\" *ngIf=\"longitud.invalid && (longitud.dirty || longitud.touched)\">\r\n                                        <div class=\"container-error-message\" *ngIf=\"longitud.errors.required\">\r\n                                            La longitud es obligatoria.\r\n                                        </div>\r\n                                </div>\r\n                       </div>\r\n                    </div>\r\n\r\n\r\n                  \r\n              \r\n             \r\n\r\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"reset\"  >Limpiar</button>\r\n\r\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\"  routerLink=\"/list\" >Cerrar</button>\r\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!contactsForm.valid\" >Guardar</button>        </form>\r\n                <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\r\n                <cite title=\"Source Title\">Registrar Vendedores</cite></footer>\r\n\r\n                </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n \r\n\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Vendedores</h5>\r\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\"\r\n          [latitude]=\"lat\"\r\n          [longitude]=\"lng\"\r\n          [zoom]=\"zoom\"\r\n          [disableDefaultUI]=\"false\"\r\n          [zoomControl]=\"false\"\r\n          (mapClick)=\"mapClicked($event)\"\r\n          >\r\n            <agm-marker\r\n            *ngFor=\"let m of markers; let i = index\"\r\n            (markerClick)=\"clickedMarker(m.label, i)\"\r\n            [latitude]=\"m.lat\"\r\n            [longitude]=\"m.lng\"\r\n            [label]=\"m.label\"\r\n            [markerDraggable]=\"m.draggable\"\r\n            (dragEnd)=\"markerDragEnd(m, $event)\"\r\n            [iconUrl]=\"m.iconUrl\"\r\n            >\r\n              <agm-info-window>\r\n               \r\n               <strong>Latitud:</strong>{{m.lat}}\r\n               <strong>Longitud: </strong>{{m.lng}}\r\n      \r\n              </agm-info-window>\r\n            </agm-marker>\r\n          </agm-map>\r\n        </div>\r\n      </div>\r\n        \r\n    \r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/workers/asignardist/asignardist.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workers/asignardist/asignardist.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"container\">\n       \n            <div class=\"card_register\">\n    \n              <div class=\"card\">\n                <h5 class=\"card-header\">Asignar Vendedor a Distribuidor</h5>\n\n                <div class=\"card-body text-center\">\n    \n                  \n                  <form [formGroup]=\"contacForm\" (ngSubmit)=\"onSaveForm()\" #formBook=\"ngForm\" >\n                    <!--ETIQUETA OCULTAR ID -->\n                    <h5 > Datos del Vendedor</h5>\n                    <br>\n                    <br>\n\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Id Vendedor</label>\n\n                          <input type=\"text\" formControlName=\"uid\" [(ngModel)]=\"this.dataApi.selectedBook.id\" placeholder=\"Id\" class=\"form-control\">\n                             \n                      </div>\n\n                      <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                                <label for=\"exampleInputEmail1\">Nombre del Vendedor</label>\n                  \n                                <input type=\"text\" formControlName=\"vendedor\" name=\"vendedor\" id =\"email\" class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.nombre\"placeholder=\"Ingrese el vendedor\">\n            \n                                      <div class=\"alert-danger\" *ngIf=\"vendedor.invalid && (vendedor.dirty || vendedor.touched)\">\n                                              <div class=\"container-error-message\" *ngIf=\"vendedor.errors.required\">\n                                                  El vendedor es obligatorio.\n                                              </div>\n                                            \n                                      </div>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n\n                                <label for=\"exampleInputEmail1\">Fecha de Asignación</label>\n\n                                <input type=\"date\" formControlName=\"fecha\" name=\"fecha\" class=\"form-control\" placeholder=\"Ingrese la fecha\">\n                                <div class=\"alert-danger\" *ngIf=\"fecha.invalid && (fecha.dirty || fecha.touched)\">\n                                    <div class=\"container-error-message\" *ngIf=\"fecha.errors.required\">\n                                        La fecha es de carácter obligatorio\n                                    </div>\n                                </div>\n                            </div>    \n\n                      </div>      \n                      <div class=\"dropdown-divider\"></div>\n                      <br>\n                      <h5> Datos del Distribuidor</h5>\n                     \n                         <br>\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Nombre del Distribuidor</label>\n   \n                      <input type=\"text\" formControlName=\"distribuidor\" placeholder=\"Distribuidor\" class=\"form-control\">\n                         <div class=\"alert-danger\" *ngIf=\"distribuidor.invalid && (distribuidor.dirty || distribuidor.touched)\">\n                            <div class=\"container-error-message\" *ngIf=\"distribuidor.errors.required\">\n                             Distribuidor es obligatorio\n                            </div>\n                        </div>\n                    </div>\n    \n                        \n\n                   \n                    \n                   \n\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n\n                              <label for=\"exampleInputEmail1\">Latitud</label>\n\n                              <input type=\"text\" formControlName=\"latituddistribuidor\" name=\"latituddistribuidor\" class=\"form-control\" placeholder=\"Ingrese la latitud del Distribuidor\">\n                              <div class=\"alert-danger\" *ngIf=\"latituddistribuidor.invalid && (latituddistribuidor.dirty || latituddistribuidor.touched)\">\n                                  <div class=\"container-error-message\" *ngIf=\"latituddistribuidor.errors.required\">\n                                     Es obligatorio ingresar la latitud.\n                                  </div>\n                              </div>\n                          </div>\n                            <div class=\"form-group col-md-6\">\n\n                                    <label for=\"exampleInputEmail1\">Longitud</label>\n\n                                    <input type=\"text\" formControlName=\"longituddistribuidor\" name=\"longituddistribuidor\" class=\"form-control\" placeholder=\"Ingrese la longitud del Distribuidor\">\n                                  \n                                    <div class=\"alert-danger\" *ngIf=\"longituddistribuidor.invalid && (longituddistribuidor.dirty || longituddistribuidor.touched)\">\n                                        <div class=\"container-error-message\" *ngIf=\"longituddistribuidor.errors.required\">\n                                            Es obligatorio ingresar la longitud.\n                                        </div>\n                                    </div>\n                            </div>        \n                </div>\n\n                    \n                   \n             \n\n\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"reset\"  >Limpiar</button>\n\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" routerLink=\"/dist\"  >Cerrar</button>\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!contacForm.valid\" >Guardar</button>\n        \n          </form>\n      </div>\n    </div>\n   \n    </div>\n    </div>\n\n\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n          <h5 class=\"card-header\">Mapa de Vendedores y Distribuidores</h5>\n  \n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\"\n                    [latitude]=\"lat\"\n                    [longitude]=\"lng\"\n                    [zoom]=\"zoom\"\n                    [disableDefaultUI]=\"false\"\n                    [zoomControl]=\"false\"\n                    (mapClick)=\"mapClicked($event)\"\n                        >\n                          <agm-marker\n                          *ngFor=\"let m of markers; let i = index\"\n                          (markerClick)=\"clickedMarker(m.label, i)\"\n                          [latitude]=\"m.lat\"\n                          [longitude]=\"m.lng\"\n                          [label]=\"m.label\"\n                          [iconUrl]=\"m.iconUrl\"\n                          (dragEnd)=\"markerDragEnd(m, $event)\"\n  \n                          >\n                          <agm-info-window>\n                              <strong>{{m.label}}</strong>\n                              <br>\n                                  <br>\n                              <strong>Latitud: </strong>{{m.lat}}\n                              <br>\n                              <strong>Longitud: </strong>{{m.lng}}\n                     \n                             </agm-info-window>\n                       </agm-marker>\n                    \n                     </agm-map>\n  \n       <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.</footer>\n  \n  </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/workers/listworkers/listworkers.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workers/listworkers/listworkers.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row mt-5\">\r\n    <div class=\"col\">\r\n      <h2 class=\"card-header\">Vendedores</h2>\r\n      <br>\r\n\r\n      <div class=\"form-group\">\r\n      \r\n        <button class=\"btn btn-primary float-right mb-3\" routerLink=\"/workers\">Nuevo Vendedor</button>\r\n      \r\n      </div>\r\n\r\n      <table class=\"table table-hover\">\r\n        <thead>   \r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Id</th>\r\n\r\n            <th scope=\"col\">Nombre</th>\r\n            <th scope=\"col\">Apellido</th>\r\n            <th scope=\"col\">Correo Electrónico</th>\r\n            <th scope=\"col\">Teléfono</th>\r\n            <th scope=\"col\">Longitud</th>\r\n            <th scope=\"col\">Latitud</th>\r\n            \r\n            <th scope=\"col\">&nbsp;</th>\r\n            <th scope=\"col\">&nbsp;</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n          <tr *ngFor=\"let book of books; index as i\">\r\n            <th scope=\"row\">{{i+1}}</th>\r\n            <td>{{book.id}}</td>\r\n\r\n            <td>{{book.nombre}}</td>\r\n            <td>{{book.apellido}}</td>\r\n            <td>{{book.email}}</td>\r\n            <td>{{book.telf}}</td>\r\n            <td>{{book.longitud}}</td>\r\n            <td>{{book.latitud}}</td>\r\n            \r\n\r\n              <td>\r\n                <button type=\"button\"class=\"btn btn-primary float-right mb-3\"  routerLink=\"/asignar\" (click)=\"onPreUpdateBook(book)\" >Asignar Distribuidor</button>\r\n\r\n              </td>\r\n              <td>\r\n                <button class=\"btn btn-secondary\" \r\n                (click)=\"onPreUpdateBook(book)\" routerLink=\"/uploadw\">Actualizar</button>\r\n              </td>\r\n           \r\n            \r\n            <td>\r\n              <button class=\"btn btn-danger\" (click)=\"onDeleteBook(book.id)\">Eliminar</button>\r\n            </td>\r\n\r\n           \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </section>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/workers/uploadworkers/uploadworkers.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workers/uploadworkers/uploadworkers.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"register\" class=\"mb-5 mt-5\">\n\n    <div class=\"container\">\n      \n               \n                <div class=\"card_register\">\n        \n                  <div class=\"card\">\n                  \n                    <h5 class=\"card-header\">Actualizar Vendedores</h5>\n                  \n                    <div class=\"card-body\">    \n                      \n                      <form  (ngSubmit)=\"onSaveBook(formBook)\" #formBook=\"ngForm\">\n                      \n\n                                         <div class=\"form-group\">\n                                       \n\n                                            <input name=\"id\"type=\"hidden\" [(ngModel)]=\"this.dataApi.selectedBook.id\" placeholder=\"Distribuidor\" class=\"form-control\">\n                                            \n                                        \n                                          </div>\n                                    <div class=\"form-row\">\n\n                                         <div class=\"form-group col-md-6\">\n                                       \n                                            <label for=\"exampleInputEmail1\">Nombre</label>\n                    \n                                            <input type=\"text\"  name=\"nombre\" [(ngModel)]=\"this.dataApi.selectedBook.nombre\"placeholder=\"Ingrese su nombre\" class=\"form-control\">\n                                            \n                                        </div>\n                        \n                                        <div class=\"form-group col-md-6\">\n                                            <label for=\"exampleInputEmail1\">Apellido</label>\n                    \n                                            <input type=\"text\"  name=\"apellido\" class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.apellido\"  placeholder=\"Ingrese su Apellido\">\n                                        \n                                        </div>\n                                    </div>                                            \n                                    <div class=\"form-row\">\n                                            <div class=\"form-group col-md-6\">\n                                                 <label for=\"exampleInputEmail1\">Cédula de Identidad</label>\n                    \n                                                  <input type=\"number\" [(ngModel)]=\"this.dataApi.selectedBook.ci\" name=\"ci\" class=\"form-control\" placeholder=\"Cédula de Identidad\">\n                                             </div>\n                                             <div class=\"form-group col-md-6\">\n                                                    <label for=\"exampleInputEmail1\">Teléfono</label>\n                    \n                                                    <input type=\"number\"  name=\"telf\" [(ngModel)]=\"this.dataApi.selectedBook.telf\" class=\"form-control\" placeholder=\"Ingrese número de telefono\">\n                                             </div>   \n                                     </div>\n                    \n                    \n                                        <div class=\"form-group\">\n                                                <label for=\"exampleInputEmail1\">Dirección de Correo Electrónico</label>\n                            \n                                                <input type=\"email\"  [(ngModel)]=\"this.dataApi.selectedBook.email\"name=\"email\" class=\"form-control\" placeholder=\"Ingrese su email\">\n                                                <small id=\"emailHelp\" class=\"form-text text-muted\">No compartiremos tu dirección de correo electrónico con nadie.</small>\n                                \n                                        \n                                        \n                                        </div>\n                        \n                                        \n                                   \n                    \n                                    <div class=\"form-row\">\n                                            <div class=\"form-group col-md-6\">\n\n                                        \n                                                    <label for=\"exampleInputEmail1\">Latitud</label>\n                            \n                                                    <input type=\"number\"  name=\"latitud\" class=\"form-control\"[(ngModel)]=\"this.dataApi.selectedBook.latitud\" placeholder=\"Latitud\">\n                                            </div>\n                                            <div class=\"form-group col-md-6\">\n                                                    <label for=\"exampleInputEmail1\">Longitud</label>\n                    \n                                                    <input type=\"number\" [(ngModel)]=\"this.dataApi.selectedBook.longitud\" name=\"longitud\" class=\"form-control\" placeholder=\"Longitud\">\n                                            </div>\n\n                                    </div>\n                    \n                                    \n    \n    \n                      \n                  \n                 \n    \n                                        <button class=\"btn btn-lg btn-primary btn-block\" type=\"reset\"  >Limpiar</button>\n                        \n                                        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\"  >Guardar</button>  \n                                        <br>\n                                        <br>\n                                        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\"  routerLink=\"/list\" >Cerrar</button>\n   \n                        </form>\n                                       \n                        \n                        <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.\n                                <cite title=\"Source Title\">Actualizar Vendedores</cite>\n                        </footer>\n                        \n                                        </div>\n                              </div>\n                           </div>\n                    \n          </div>\n</section>\n    \n        <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-header\">Mapa de Vendedores y Distribuidores</h5>\n            \n                              <agm-map [latitude]=\"lat\" [longitude]=\"lng\"\n                              [latitude]=\"lat\"\n                              [longitude]=\"lng\"\n                              [zoom]=\"zoom\"\n                              [disableDefaultUI]=\"false\"\n                              [zoomControl]=\"false\"\n                              (mapClick)=\"mapClicked($event)\"\n                                  >\n                                    <agm-marker\n                                    *ngFor=\"let m of markers; let i = index\"\n                                    (markerClick)=\"clickedMarker(m.label, i)\"\n                                    [latitude]=\"m.lat\"\n                                    [longitude]=\"m.lng\"\n                                    [label]=\"m.label\"\n                                    [iconUrl]=\"m.iconUrl\"\n                                    (dragEnd)=\"markerDragEnd(m, $event)\"\n            \n                                    >\n                                    <agm-info-window>\n                                            <strong>{{m.label}}</strong>\n                                            <br>\n                                                <br>\n                                            <strong>Latitud: </strong>{{m.lat}}\n                                            <br>\n                                            <strong>Longitud: </strong>{{m.lng}}\n                                   \n                                           </agm-info-window>\n                                     </agm-marker>\n                              \n                               </agm-map>\n            \n                 <footer class=\"blockquote-footer\"> © 2019, Dev-Thinking.com, Inc. o afiliados. Todos los derechos reservados.</footer>\n            \n            </div>\n            </div>\n            \n        \n        ");

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
/* harmony import */ var _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-book/add-book.component */ "./src/app/components/add-book/add-book.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav-tabs/nav-tabs.component */ "./src/app/components/nav-tabs/nav-tabs.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_listcookies_listcookies_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/listcookies/listcookies.component */ "./src/app/components/listcookies/listcookies.component.ts");
/* harmony import */ var _components_details_cookie_details_cookie_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/details-cookie/details-cookie.component */ "./src/app/components/details-cookie/details-cookie.component.ts");
/* harmony import */ var _components_addcookie_addcookie_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/addcookie/addcookie.component */ "./src/app/components/addcookie/addcookie.component.ts");
/* harmony import */ var _workers_addworkers_addworkers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./workers/addworkers/addworkers.component */ "./src/app/workers/addworkers/addworkers.component.ts");
/* harmony import */ var _distribuidores_adddis_adddis_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./distribuidores/adddis/adddis.component */ "./src/app/distribuidores/adddis/adddis.component.ts");
/* harmony import */ var _workers_listworkers_listworkers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./workers/listworkers/listworkers.component */ "./src/app/workers/listworkers/listworkers.component.ts");
/* harmony import */ var _distribuidores_listdistribuidores_listdistribuidores_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./distribuidores/listdistribuidores/listdistribuidores.component */ "./src/app/distribuidores/listdistribuidores/listdistribuidores.component.ts");
/* harmony import */ var _workers_asignardist_asignardist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./workers/asignardist/asignardist.component */ "./src/app/workers/asignardist/asignardist.component.ts");
/* harmony import */ var _contacts_listcontacts_listcontacts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contacts/listcontacts/listcontacts.component */ "./src/app/contacts/listcontacts/listcontacts.component.ts");
/* harmony import */ var _workers_uploadworkers_uploadworkers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./workers/uploadworkers/uploadworkers.component */ "./src/app/workers/uploadworkers/uploadworkers.component.ts");
/* harmony import */ var _components_uploadbook_uploadbook_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/uploadbook/uploadbook.component */ "./src/app/components/uploadbook/uploadbook.component.ts");
/* harmony import */ var _distribuidores_actualizar_actualizar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./distribuidores/actualizar/actualizar.component */ "./src/app/distribuidores/actualizar/actualizar.component.ts");





























const routes = [
    { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
    { path: 'aboutus', component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutusComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'header', component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"] },
    { path: 'footer', component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"] },
    { path: 'workers', component: _workers_addworkers_addworkers_component__WEBPACK_IMPORTED_MODULE_20__["AddworkersComponent"] },
    { path: 'contactos', component: _contacts_listcontacts_listcontacts_component__WEBPACK_IMPORTED_MODULE_25__["ListcontactsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    //CAN ACTIVATE SIRVE PARA BLOQUEAR FRAMES
    //ADMIN
    { path: 'addbook', component: _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_7__["AddBookComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'dist', component: _distribuidores_listdistribuidores_listdistribuidores_component__WEBPACK_IMPORTED_MODULE_23__["ListdistribuidoresComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'uploadw', component: _workers_uploadworkers_uploadworkers_component__WEBPACK_IMPORTED_MODULE_26__["UploadworkersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'navbar', component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"] },
    { path: 'list', component: _workers_listworkers_listworkers_component__WEBPACK_IMPORTED_MODULE_22__["ListworkersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'asignar', component: _workers_asignardist_asignardist_component__WEBPACK_IMPORTED_MODULE_24__["AsignardistComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'uploadbook', component: _components_uploadbook_uploadbook_component__WEBPACK_IMPORTED_MODULE_27__["UploadbookComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'actualizar', component: _distribuidores_actualizar_actualizar_component__WEBPACK_IMPORTED_MODULE_28__["ActualizarComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] },
    { path: 'google', component: _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_15__["GoogleMapComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'cookies', component: _components_listcookies_listcookies_component__WEBPACK_IMPORTED_MODULE_17__["ListcookiesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'galleta/:id', component: _components_details_cookie_details_cookie_component__WEBPACK_IMPORTED_MODULE_18__["DetailsCookieComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'add', component: _components_addcookie_addcookie_component__WEBPACK_IMPORTED_MODULE_19__["AddcookieComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'distribuidores', component: _distribuidores_adddis_adddis_component__WEBPACK_IMPORTED_MODULE_21__["AdddisComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'book/:id', component: _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_13__["DetailsBookComponent"] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_16__["ContactoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'bar', component: _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_10__["NavTabsComponent"] },
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
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container,\r\nmat-sidenav-content,\r\nmat-sidenav{\r\n    height: 100%;\r\n}\r\nmat-sidenav{\r\n    width: 250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQsXHJcbm1hdC1zaWRlbmF2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm1hdC1zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59Il19 */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'proyecto';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _custommaterial_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custommaterial.module */ "./src/app/custommaterial.module.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-book/add-book.component */ "./src/app/components/add-book/add-book.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/nav-tabs/nav-tabs.component */ "./src/app/components/nav-tabs/nav-tabs.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_listcookies_listcookies_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/listcookies/listcookies.component */ "./src/app/components/listcookies/listcookies.component.ts");
/* harmony import */ var _components_details_cookie_details_cookie_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/details-cookie/details-cookie.component */ "./src/app/components/details-cookie/details-cookie.component.ts");
/* harmony import */ var _components_addcookie_addcookie_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/addcookie/addcookie.component */ "./src/app/components/addcookie/addcookie.component.ts");
/* harmony import */ var _workers_addworkers_addworkers_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./workers/addworkers/addworkers.component */ "./src/app/workers/addworkers/addworkers.component.ts");
/* harmony import */ var _distribuidores_adddis_adddis_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./distribuidores/adddis/adddis.component */ "./src/app/distribuidores/adddis/adddis.component.ts");
/* harmony import */ var _workers_listworkers_listworkers_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./workers/listworkers/listworkers.component */ "./src/app/workers/listworkers/listworkers.component.ts");
/* harmony import */ var _distribuidores_listdistribuidores_listdistribuidores_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./distribuidores/listdistribuidores/listdistribuidores.component */ "./src/app/distribuidores/listdistribuidores/listdistribuidores.component.ts");
/* harmony import */ var _workers_asignardist_asignardist_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./workers/asignardist/asignardist.component */ "./src/app/workers/asignardist/asignardist.component.ts");
/* harmony import */ var _contacts_listcontacts_listcontacts_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./contacts/listcontacts/listcontacts.component */ "./src/app/contacts/listcontacts/listcontacts.component.ts");
/* harmony import */ var _workers_uploadworkers_uploadworkers_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./workers/uploadworkers/uploadworkers.component */ "./src/app/workers/uploadworkers/uploadworkers.component.ts");
/* harmony import */ var _components_uploadbook_uploadbook_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/uploadbook/uploadbook.component */ "./src/app/components/uploadbook/uploadbook.component.ts");
/* harmony import */ var _distribuidores_actualizar_actualizar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./distribuidores/actualizar/actualizar.component */ "./src/app/distribuidores/actualizar/actualizar.component.ts");























//FIREBASE CONFIGURACION 
const firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig;





















const MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_listcookies_listcookies_component__WEBPACK_IMPORTED_MODULE_31__["ListcookiesComponent"],
            _workers_asignardist_asignardist_component__WEBPACK_IMPORTED_MODULE_38__["AsignardistComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _workers_addworkers_addworkers_component__WEBPACK_IMPORTED_MODULE_34__["AddworkersComponent"],
            _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
            _components_addcookie_addcookie_component__WEBPACK_IMPORTED_MODULE_33__["AddcookieComponent"],
            _components_details_cookie_details_cookie_component__WEBPACK_IMPORTED_MODULE_32__["DetailsCookieComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_15__["AddBookComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
            _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_29__["GoogleMapComponent"],
            _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_28__["DetailsBookComponent"],
            _workers_uploadworkers_uploadworkers_component__WEBPACK_IMPORTED_MODULE_40__["UploadworkersComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            _contacts_listcontacts_listcontacts_component__WEBPACK_IMPORTED_MODULE_39__["ListcontactsComponent"],
            _distribuidores_adddis_adddis_component__WEBPACK_IMPORTED_MODULE_35__["AdddisComponent"],
            _components_uploadbook_uploadbook_component__WEBPACK_IMPORTED_MODULE_41__["UploadbookComponent"],
            _distribuidores_actualizar_actualizar_component__WEBPACK_IMPORTED_MODULE_42__["ActualizarComponent"],
            _workers_listworkers_listworkers_component__WEBPACK_IMPORTED_MODULE_36__["ListworkersComponent"],
            _distribuidores_listdistribuidores_listdistribuidores_component__WEBPACK_IMPORTED_MODULE_37__["ListdistribuidoresComponent"],
            _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_24__["NavTabsComponent"],
            _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"],
            _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_30__["ContactoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _custommaterial_module__WEBPACK_IMPORTED_MODULE_9__["CustommaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            MaterialComponents,
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDmPQrfklKHKfqwIOuQZ92Q7G0TW0AYZG8'
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            MaterialComponents
        ],
        providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["AngularFirestore"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hZGQtYm9vay9hZGQtYm9vay5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");



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
        this.dataApi.selectedBook = Object.assign({}, book);
    }
};
AddBookComponent.ctorParameters = () => [
    { type: _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-book/add-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-book.component.css */ "./src/app/components/add-book/add-book.component.css")).default]
    })
], AddBookComponent);



/***/ }),

/***/ "./src/app/components/addcookie/addcookie.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/addcookie/addcookie.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-container {\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n    max-width: 500px;\r\n    padding: 16px;\r\n    margin: 10px auto;\r\n    background: #f7f7f7;\r\n  }\r\n  \r\n  .form-container h1 {\r\n    background: #43d1af;\r\n    padding: 20px 0;\r\n    font-size: 140%;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    color: #fff;\r\n    margin: -16px -16px 16px -16px;\r\n  }\r\n  \r\n  .form-container input[type=\"text\"],\r\n  .form-container input[type=\"email\"],\r\n  .form-container textarea {\r\n    transition: all 0, 30s ease-in-out;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    background: #fff;\r\n    margin-bottom: 4%;\r\n    border: 1px solid #ccc;\r\n    padding: 3%;\r\n    color: #555;\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  .form-container input[type=\"text\"]:focus,\r\n  .form-container input[type=\"email\"]:focus,\r\n  .form-container textarea:focus {\r\n    box-shadow: 0 0 5px #43d1af;\r\n    padding: 3%;\r\n    border: 1px solid #43d1af;\r\n  }\r\n  \r\n  .form-container .btn-send {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    padding: 3%;\r\n    background: #43d1af;\r\n    border-bottom: 2px solid #30c29e;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n    border-left-style: none;\r\n    color: #fff;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .form-container .btn-send:hover:not([disabled]) {\r\n    background: #2ebc99;\r\n  }\r\n  \r\n  .alert-danger {\r\n    color: #721c24;\r\n    background: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .container-error-message {\r\n    padding: 3px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkZGNvb2tpZS9hZGRjb29raWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw4QkFBOEI7RUFDaEM7O0VBRUE7OztJQUlFLGtDQUFrQztJQUNsQyxhQUFhO0lBRWIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLHNDQUFzQztFQUN4Qzs7RUFFQTs7O0lBSUUsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFFRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkZGNvb2tpZS9hZGRjb29raWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBmb250OiA5NSUgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250YWluZXIgaDEge1xyXG4gICAgYmFja2dyb3VuZDogIzQzZDFhZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogLTE2cHggLTE2cHggMTZweCAtMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAsIDMwcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLCAzMHMgZWFzZS1pbi1vdXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250OiA5NSUgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiAgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhOmZvY3VzIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAjNDNkMWFmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjNDNkMWFmO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDNkMWFmO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250YWluZXIgLmJ0bi1zZW5kIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYmFja2dyb3VuZDogIzQzZDFhZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzBjMjllO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciAuYnRuLXNlbmQ6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZWJjOTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbGVydC1kYW5nZXIge1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyLWVycm9yLW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/addcookie/addcookie.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/addcookie/addcookie.component.ts ***!
  \*************************************************************/
/*! exports provided: AddcookieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcookieComponent", function() { return AddcookieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let AddcookieComponent = class AddcookieComponent {
    constructor(dbData) {
        this.dbData = dbData;
        this.contactsForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Alergenos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(40)]),
            descripcioncorta: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            ingredientes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            oferta: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]),
            peso: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            portada: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            //-------------------------------------------------------------------------------------------------
            fondo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            imagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            precio: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)])
        });
    }
    ngOnInit() {
    }
    onResetForm() {
        this.contactsForm.reset();
    }
    //Manda los datos a firecloud, revisando si todos los campos cumples con los requerimientos dados anteriormente.
    onSaveForm() {
        if (this.contactsForm.valid) {
            this.dbData.saveMessage(this.contactsForm.value);
            this.onResetForm();
            console.log('Valid');
        }
        else {
            console.log('Not Valid');
        }
    }
    get nombre() { return this.contactsForm.get('nombre'); }
    get fondo() { return this.contactsForm.get('fondo'); }
    get imagen() { return this.contactsForm.get('imagen'); }
    get marca() { return this.contactsForm.get('marca'); }
    get peso() { return this.contactsForm.get('peso'); }
    get oferta() { return this.contactsForm.get('oferta'); }
    get portada() { return this.contactsForm.get('portada'); }
    get descripcion() { return this.contactsForm.get('descripcion'); }
    get descripcioncorta() { return this.contactsForm.get('descripcioncorta'); }
    get ingredientes() { return this.contactsForm.get('ingredientes'); }
    get Alergenos() { return this.contactsForm.get('Alergenos'); }
    get precio() { return this.contactsForm.get('precio'); }
};
AddcookieComponent.ctorParameters = () => [
    { type: _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
AddcookieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcookie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addcookie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/addcookie/addcookie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addcookie.component.css */ "./src/app/components/addcookie/addcookie.component.css")).default]
    })
], AddcookieComponent);



/***/ }),

/***/ "./src/app/components/contacto/contacto.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-container {\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n    max-width: 500px;\r\n    padding: 16px;\r\n    margin: 10px auto;\r\n    background: #f7f7f7;\r\n  }\r\n  \r\n  .form-container h1 {\r\n    background: #43d1af;\r\n    padding: 20px 0;\r\n    font-size: 140%;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    color: #fff;\r\n    margin: -16px -16px 16px -16px;\r\n  }\r\n  \r\n  .form-container input[type=\"text\"],\r\n  .form-container input[type=\"email\"],\r\n  .form-container textarea {\r\n    transition: all 0, 30s ease-in-out;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    background: #fff;\r\n    margin-bottom: 4%;\r\n    border: 1px solid #ccc;\r\n    padding: 3%;\r\n    color: #555;\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  .form-container input[type=\"text\"]:focus,\r\n  .form-container input[type=\"email\"]:focus,\r\n  .form-container textarea:focus {\r\n    box-shadow: 0 0 5px #43d1af;\r\n    padding: 3%;\r\n    border: 1px solid #43d1af;\r\n  }\r\n  \r\n  .form-container .btn-send {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    padding: 3%;\r\n    background: #43d1af;\r\n    border-bottom: 2px solid #30c29e;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n    border-left-style: none;\r\n    color: #fff;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .form-container .btn-send:hover:not([disabled]) {\r\n    background: #2ebc99;\r\n  }\r\n  \r\n  .alert-danger {\r\n    color: #721c24;\r\n    background: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .container-error-message {\r\n    padding: 3px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEJBQThCO0VBQ2hDOztFQUVBOzs7SUFJRSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUViLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFdBQVc7SUFDWCxzQ0FBc0M7RUFDeEM7O0VBRUE7OztJQUlFLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBO0lBRUUsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGZvbnQ6IDk1JSBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciBoMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNkMWFmO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAtMTZweCAtMTZweCAxNnB4IC0xNnB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAuZm9ybS1jb250YWluZXIgdGV4dGFyZWEge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMCwgMzBzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAsIDMwcyBlYXNlLWluLW91dDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQ6IDk1JSBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuICAuZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4ICM0M2QxYWY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM0M2QxYWY7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0M2QxYWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciAuYnRuLXNlbmQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNkMWFmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMGMyOWU7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVyIC5idG4tc2VuZDpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gICAgYmFja2dyb3VuZDogIzJlYmM5OTtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgfSJdfQ== */");

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




let ContactoComponent = class ContactoComponent {
    constructor(dbData) {
        this.dbData = dbData;
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
    get name() { return this.contactForm.get('name'); }
    get email() { return this.contactForm.get('email'); }
    get message() { return this.contactForm.get('message'); }
};
ContactoComponent.ctorParameters = () => [
    { type: _services_contacto_service__WEBPACK_IMPORTED_MODULE_3__["ContactoService"] }
];
ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacto/contacto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacto.component.css */ "./src/app/components/contacto/contacto.component.css")).default]
    })
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9kZXRhaWxzLWJvb2svZGV0YWlscy1ib29rLmNvbXBvbmVudC5jc3MifQ== */");

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
    })
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9kZXRhaWxzLWNvb2tpZS9kZXRhaWxzLWNvb2tpZS5jb21wb25lbnQuY3NzIn0= */");

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




let DetailsCookieComponent = class DetailsCookieComponent {
    constructor(dataApi, route) {
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
    { type: _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetailsCookieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-cookie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-cookie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-cookie/details-cookie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-cookie.component.css */ "./src/app/components/details-cookie/details-cookie.component.css")).default]
    })
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

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
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
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
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    height: 600px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gIH0iXX0= */");

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
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../crud.service */ "./src/app/crud.service.ts");



let GoogleMapComponent = class GoogleMapComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.lat = -17.393851495957517;
        this.lng = -66.15186435643;
        this.zoom = 14;
        this.contador = 4;
        this.markers = [
            {
                lat: -17.393851495957517,
                lng: -66.234564,
                draggable: true,
                label: 'Administrator',
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
            }
        ];
    }
    ngOnInit() {
        this.crudService.read_Proveedores().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkersv(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
        this.crudService.read_Vendedor().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkers(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
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
    crearmarkers(a, b, c) {
        this.markers.push({
            label: a,
            draggable: true,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
    }
    crearmarkersv(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            draggable: true,
            iconUrl: 'http://maps.google.com/mapfiles/arrow.png'
        });
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
};
GoogleMapComponent.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-map.component.css */ "./src/app/components/google-map/google-map.component.css")).default]
    })
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
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  li{\r\n    list-style: none;\r\n}\r\n  \r\n  .logo-container{\r\n  width: 100%;\r\n  margin-right: 40px;\r\n\r\n}\r\n  \r\n  .logo{\r\n  width: 50px;\r\n  height: 55px;\r\n}\r\n  \r\n  mat-toolbar{\r\n  height: 96px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLGdCQUFnQjtBQUNwQjs7RUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCOztFQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7RUFDQTtFQUNFLFlBQVk7O0FBRWQiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgbGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5sb2dvLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcblxyXG59XHJcbi5sb2dve1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTVweDtcclxufVxyXG5tYXQtdG9vbGJhcntcclxuICBoZWlnaHQ6IDk2cHg7XHJcblxyXG59Il19 */");

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





let HeaderComponent = class HeaderComponent {
    constructor(_backendservice, authService, afsAuth) {
        this._backendservice = _backendservice;
        this.authService = authService;
        this.afsAuth = afsAuth;
        //NOMBRE APP
        this.app_name = "Administrador";
        //condicion para hacer aparecer etiquetas
        this.isLogged = false;
        this.SideNavigationToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.counter = 0;
        this.userStatusColor = "warm";
    }
    ngOnInit() {
        /*
        this.counter=0;
        this.configData= this._backendservice.getConfig();
        this._backendservice.getCartTotal().subscribe(
          (res) => {
            this.counter=res;
          }
        );
         this._backendservice.getUserStatus().subscribe(
          (res) => {
            this.userStatusColor = res ? "primary": "warm";
          }
        );
    */
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
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "SideNavigationToggle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "pageTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "iconTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "helpTitle", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
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
/* harmony default export */ __webpack_exports__["default"] = (".containers{\r\n    height:100vh;\r\n    background: url(/assets/img/sw.png) no-repeat;\r\n    flex: 1 0.5 auto;\r\n}\r\n.book-now-container{\r\npadding: 35px 115px;\r\n}\r\n.book-now-button{\r\n    width: 170px;\r\n    color: white;\r\n    border: 1px solid white;\r\n    text-transform: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDZDQUE2QztJQUM3QyxnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcnN7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvc3cucG5nKSBuby1yZXBlYXQ7XHJcbiAgICBmbGV4OiAxIDAuNSBhdXRvO1xyXG59XHJcbi5ib29rLW5vdy1jb250YWluZXJ7XHJcbnBhZGRpbmc6IDM1cHggMTE1cHg7XHJcbn1cclxuLmJvb2stbm93LWJ1dHRvbntcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */");

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



let HomeComponent = class HomeComponent {
    constructor(dataApi) {
        this.dataApi = dataApi;
        this.books = [];
        this.book = '';
    }
    ngOnInit() {
        this.dataApi.getAllBooks().subscribe(books => {
            console.log('BOOKS', books);
            this.books = books;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9saXN0Y29va2llcy9saXN0Y29va2llcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/listcookies/listcookies.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/listcookies/listcookies.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListcookiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcookiesComponent", function() { return ListcookiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");



let ListcookiesComponent = class ListcookiesComponent {
    constructor(dataApis) {
        this.dataApis = dataApis;
        this.books = [];
        this.book = '';
    }
    ngOnInit() {
        this.dataApis.getAllBooks().subscribe(books => {
            console.log('BOOKS', books);
            this.books = books;
        });
    }
};
ListcookiesComponent.ctorParameters = () => [
    { type: _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
ListcookiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcookies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listcookies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listcookies/listcookies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listcookies.component.css */ "./src/app/components/listcookies/listcookies.component.css")).default]
    })
], ListcookiesComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control.login-user {\r\n    border: 0 solid #fff !important;\r\n  }\r\n  .btn-social{\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color: #fff;\r\n    border-color: rgba(0,0,0,0.2);\r\n  }\r\n  .btn-facebook{\r\n    background: #3b5998;\r\n  }\r\n  .btn-google{\r\n    background: #dd4b39;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjtFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubG9naW4tdXNlciB7XHJcbiAgICBib3JkZXI6IDAgc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuLXNvY2lhbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWZhY2Vib29re1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICB9XHJcbiAgLmJ0bi1nb29nbGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG4gIH0iXX0= */");

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





let LoginComponent = class LoginComponent {
    constructor(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    onLogin() {
        this.authService.loginEmailUser(this.email, this.password)
            .then((res) => {
            this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
    }
    onLogout() {
        this.authService.logoutUser();
    }
    onLoginRedirect() {
        this.router.navigate(['/aboutus']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/nav-tabs/nav-tabs.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/nav-tabs/nav-tabs.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-flex {\r\n    flex: 1 0.5 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25hdi10YWJzL25hdi10YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbmF2LXRhYnMvbmF2LXRhYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWZsZXgge1xyXG4gICAgZmxleDogMSAwLjUgYXV0bztcclxufSJdfQ== */");

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
    constructor() { }
    ngOnInit() {
    }
};
NavTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-tabs/nav-tabs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-tabs.component.css */ "./src/app/components/nav-tabs/nav-tabs.component.css")).default]
    })
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
/* harmony default export */ __webpack_exports__["default"] = ("li{\r\n    list-style: none;\r\n}\r\n.sidenav-list span{\r\n    padding-left: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc2lkZW5hdi1saXN0IHNwYW57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufSJdfQ== */");

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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavbarComponent.prototype, "closeSideNavigation", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

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
            name: '',
            email: '',
        };
        this.providerId = 'null';
    }
    ngOnInit() {
        this.authService.isAuth().subscribe(user => {
            if (user) {
                this.user.name = user.displayName;
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
    })
], ProfileComponent);



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
    constructor() { }
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
    })
], BackendService);



/***/ }),

/***/ "./src/app/components/uploadbook/uploadbook.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/uploadbook/uploadbook.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy91cGxvYWRib29rL3VwbG9hZGJvb2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/uploadbook/uploadbook.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/uploadbook/uploadbook.component.ts ***!
  \***************************************************************/
/*! exports provided: UploadbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadbookComponent", function() { return UploadbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");



let UploadbookComponent = class UploadbookComponent {
    constructor(dataApi) {
        this.dataApi = dataApi;
    }
    ngOnInit() {
    }
    onSaveBook(bookForm) {
        // Update
        this.dataApi.updateBook(bookForm.value);
    }
};
UploadbookComponent.ctorParameters = () => [
    { type: _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadbookComponent.prototype, "userUid", void 0);
UploadbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uploadbook',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uploadbook.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/uploadbook/uploadbook.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uploadbook.component.css */ "./src/app/components/uploadbook/uploadbook.component.css")).default]
    })
], UploadbookComponent);



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/contacts/listcontacts/listcontacts.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/listcontacts/listcontacts.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29udGFjdHMvbGlzdGNvbnRhY3RzL2xpc3Rjb250YWN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contacts/listcontacts/listcontacts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/listcontacts/listcontacts.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListcontactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcontactsComponent", function() { return ListcontactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contacto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contacto.service */ "./src/app/services/contacto.service.ts");



let ListcontactsComponent = class ListcontactsComponent {
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
    onPreUpdateBook(book) {
        //this.dataApi.selectedBook=Object.assign({},book);
        console.log('BOOK', book);
        this.dataApi.selectedBook = Object.assign({}, book);
    }
};
ListcontactsComponent.ctorParameters = () => [
    { type: _services_contacto_service__WEBPACK_IMPORTED_MODULE_2__["ContactoService"] }
];
ListcontactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcontacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listcontacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/listcontacts/listcontacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listcontacts.component.css */ "./src/app/contacts/listcontacts/listcontacts.component.css")).default]
    })
], ListcontactsComponent);



/***/ }),

/***/ "./src/app/crud.service.ts":
/*!*********************************!*\
  !*** ./src/app/crud.service.ts ***!
  \*********************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let CrudService = class CrudService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    create_NewProducto(record) {
        return this.firestore.collection('Productos').add(record);
    }
    read_Proveedores() {
        return this.firestore.collection('distribuidores').snapshotChanges();
    }
    update_Proveedor(recordID, record) {
        this.firestore.doc('Proveedores/' + recordID).update(record);
    }
    read_Vendedor() {
        return this.firestore.collection('vendedores').snapshotChanges();
    }
};
CrudService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CrudService);



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
    })
], CustommaterialModule);



/***/ }),

/***/ "./src/app/distribuidores/actualizar/actualizar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/distribuidores/actualizar/actualizar.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    height: 600px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXN0cmlidWlkb3Jlcy9hY3R1YWxpemFyL2FjdHVhbGl6YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJhcHAvZGlzdHJpYnVpZG9yZXMvYWN0dWFsaXphci9hY3R1YWxpemFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/distribuidores/actualizar/actualizar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/distribuidores/actualizar/actualizar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActualizarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarComponent", function() { return ActualizarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../crud.service */ "./src/app/crud.service.ts");
/* harmony import */ var _services_worker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/worker.service */ "./src/app/services/worker.service.ts");
/* harmony import */ var _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/distribuidor.service */ "./src/app/services/distribuidor.service.ts");





let ActualizarComponent = class ActualizarComponent {
    constructor(dataApi, crudService, dataAp) {
        this.dataApi = dataApi;
        this.crudService = crudService;
        this.dataAp = dataAp;
        this.lat = -17.393851495957517;
        this.lng = -66.15186435643;
        this.zoom = 14;
        this.contador = 4;
        this.markers = [
            {
                lat: -17.393851495957517,
                lng: -66.234564,
                draggable: true,
                label: 'Administrator',
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
            }
        ];
    }
    ngOnInit() {
        this.crudService.read_Proveedores().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkersv(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
        this.crudService.read_Vendedor().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkers(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
    }
    onSaveBook(bookForm) {
        // Update
        this.dataApi.updateBook(bookForm.value);
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
    crearmarkers(a, b, c) {
        this.markers.push({
            label: a,
            draggable: true,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
    }
    crearmarkersv(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            draggable: true,
            iconUrl: 'http://maps.google.com/mapfiles/arrow.png'
        });
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
};
ActualizarComponent.ctorParameters = () => [
    { type: _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_4__["DistribuidorService"] },
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] },
    { type: _services_worker_service__WEBPACK_IMPORTED_MODULE_3__["WorkerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ActualizarComponent.prototype, "userUid", void 0);
ActualizarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actualizar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actualizar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribuidores/actualizar/actualizar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actualizar.component.css */ "./src/app/distribuidores/actualizar/actualizar.component.css")).default]
    })
], ActualizarComponent);



/***/ }),

/***/ "./src/app/distribuidores/adddis/adddis.component.css":
/*!************************************************************!*\
  !*** ./src/app/distribuidores/adddis/adddis.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-container {\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n    max-width: 500px;\r\n    padding: 16px;\r\n    margin: 10px auto;\r\n    background: #f7f7f7;\r\n  }\r\n  agm-map {\r\n    height: 600px;\r\n  }\r\n  .form-container h1 {\r\n    background: #43d1af;\r\n    padding: 20px 0;\r\n    font-size: 140%;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    color: #fff;\r\n    margin: -16px -16px 16px -16px;\r\n  }\r\n  .form-container input[type=\"text\"],\r\n  .form-container input[type=\"email\"],\r\n  .form-container textarea {\r\n    transition: all 0, 30s ease-in-out;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    background: #fff;\r\n    margin-bottom: 4%;\r\n    border: 1px solid #ccc;\r\n    padding: 3%;\r\n    color: #555;\r\n    font: 95% Arial, Helvetica, sans-serif;\r\n  }\r\n  .form-container input[type=\"text\"]:focus,\r\n  .form-container input[type=\"email\"]:focus,\r\n  .form-container textarea:focus {\r\n    box-shadow: 0 0 5px #43d1af;\r\n    padding: 3%;\r\n    border: 1px solid #43d1af;\r\n  }\r\n  .form-container .btn-send {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    padding: 3%;\r\n    background: #43d1af;\r\n    border-bottom: 2px solid #30c29e;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n    border-left-style: none;\r\n    color: #fff;\r\n    font-size: 15px;\r\n  }\r\n  .form-container .btn-send:hover:not([disabled]) {\r\n    background: #2ebc99;\r\n  }\r\n  .alert-danger {\r\n    color: #721c24;\r\n    background: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    margin-bottom: 5px;\r\n  }\r\n  .container-error-message {\r\n    padding: 3px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXN0cmlidWlkb3Jlcy9hZGRkaXMvYWRkZGlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDhCQUE4QjtFQUNoQztFQUVBOzs7SUFJRSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUViLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFdBQVc7SUFDWCxzQ0FBc0M7RUFDeEM7RUFFQTs7O0lBSUUsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7RUFFQTtJQUVFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoiYXBwL2Rpc3RyaWJ1aWRvcmVzL2FkZGRpcy9hZGRkaXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBmb250OiA5NSUgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIH1cclxuICBhZ20tbWFwIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciBoMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNkMWFmO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAtMTZweCAtMTZweCAxNnB4IC0xNnB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAuZm9ybS1jb250YWluZXIgdGV4dGFyZWEge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMCwgMzBzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAsIDMwcyBlYXNlLWluLW91dDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQ6IDk1JSBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuICAuZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4ICM0M2QxYWY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM0M2QxYWY7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0M2QxYWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciAuYnRuLXNlbmQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNkMWFmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMGMyOWU7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVyIC5idG4tc2VuZDpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gICAgYmFja2dyb3VuZDogIzJlYmM5OTtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/distribuidores/adddis/adddis.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/distribuidores/adddis/adddis.component.ts ***!
  \***********************************************************/
/*! exports provided: AdddisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddisComponent", function() { return AdddisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/distribuidor.service */ "./src/app/services/distribuidor.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../crud.service */ "./src/app/crud.service.ts");
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../toastr.service */ "./src/app/toastr.service.ts");






let AdddisComponent = class AdddisComponent {
    constructor(dbData, crudService, toastrService) {
        this.dbData = dbData;
        this.crudService = crudService;
        this.toastrService = toastrService;
        this.lat = -17.393851495957517;
        this.lng = -66.15186435643;
        this.zoom = 14;
        this.contador = 4;
        this.markers = [
            {
                lat: -17.393851495957517,
                lng: -66.234564,
                draggable: true,
                label: 'Administrator',
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
            }
        ];
        this.contacForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            latitud: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]),
            longitud: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(9)])
        });
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
    crearmarkers(a, b, c) {
        this.markers.push({
            label: a,
            draggable: true,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
    }
    crearmarkersv(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            draggable: true,
            iconUrl: 'http://maps.google.com/mapfiles/arrow.png'
        });
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    ngOnInit() {
        this.crudService.read_Proveedores().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkersv(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
        this.crudService.read_Vendedor().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkers(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
    }
    onResetForm() {
        this.contacForm.reset();
    }
    onSaveForm() {
        if (this.contacForm.valid) {
            this.dbData.saveMessage(this.contacForm.value);
            this.onResetForm();
            // this.toastrService.wait('Adding Product to Cart', 'Product Adding to the cart');
            console.log('Valid');
        }
        else {
            console.log('Not Valid');
        }
    }
    get correo() { return this.contacForm.get('correo'); }
    get nombre() { return this.contacForm.get('nombre'); }
    get pais() { return this.contacForm.get('pais'); }
    get longitud() { return this.contacForm.get('longitud'); }
    get latitud() { return this.contacForm.get('latitud'); }
    get telefono() { return this.contacForm.get('telefono'); }
};
AdddisComponent.ctorParameters = () => [
    { type: _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_2__["DistribuidorService"] },
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
AdddisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adddis',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adddis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribuidores/adddis/adddis.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adddis.component.css */ "./src/app/distribuidores/adddis/adddis.component.css")).default]
    })
], AdddisComponent);



/***/ }),

/***/ "./src/app/distribuidores/listdistribuidores/listdistribuidores.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/distribuidores/listdistribuidores/listdistribuidores.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGlzdHJpYnVpZG9yZXMvbGlzdGRpc3RyaWJ1aWRvcmVzL2xpc3RkaXN0cmlidWlkb3Jlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/distribuidores/listdistribuidores/listdistribuidores.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/distribuidores/listdistribuidores/listdistribuidores.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListdistribuidoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListdistribuidoresComponent", function() { return ListdistribuidoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/distribuidor.service */ "./src/app/services/distribuidor.service.ts");



let ListdistribuidoresComponent = class ListdistribuidoresComponent {
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
        this.dataApi.selectedBook = Object.assign({}, book);
    }
};
ListdistribuidoresComponent.ctorParameters = () => [
    { type: _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_2__["DistribuidorService"] }
];
ListdistribuidoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listdistribuidores',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listdistribuidores.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribuidores/listdistribuidores/listdistribuidores.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listdistribuidores.component.css */ "./src/app/distribuidores/listdistribuidores/listdistribuidores.component.css")).default]
    })
], ListdistribuidoresComponent);



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





let AuthGuard = class AuthGuard {
    constructor(afsAuth, router) {
        this.afsAuth = afsAuth;
        this.router = router;
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/services/asignar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/asignar.service.ts ***!
  \*********************************************/
/*! exports provided: AsignarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarService", function() { return AsignarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let AsignarService = class AsignarService {
    constructor(afs) {
        this.afs = afs;
        this.selectedBook = {};
        this.booksCollection = afs.collection('asignarvendedor');
        this.books = this.booksCollection.valueChanges();
    }
    deleteBook(idBook) {
        this.bookDoc = this.afs.doc(`asignarvendedor/${idBook}`);
        this.bookDoc.delete();
    }
    saveMessage(newContact) {
        this.booksCollection.add(newContact);
    }
    addBook(book) {
        this.booksCollection.add(book);
    }
    updateBook(book) {
        let idBook = book.uid;
        this.bookDoc = this.afs.doc(`asignarvendedor/${idBook}`);
        this.bookDoc.update(book);
    }
};
AsignarService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
AsignarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AsignarService);



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





let AuthService = class AuthService {
    constructor(afsAuth) {
        this.afsAuth = afsAuth;
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
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider());
    }
    loginGoogleUser() {
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
    }
    isAuth() {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(auth => auth));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ContactoService = class ContactoService {
    constructor(afs) {
        this.afs = afs;
        this.selectedBook = {};
        this.booksCollection = afs.collection('contacts');
        this.books = this.booksCollection.valueChanges();
    }
    saveMessage(newContact) {
        this.booksCollection.add(newContact);
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
};
ContactoService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ContactoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
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
        this.contactCollection = afs.collection('galletas');
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
        this.bookDoc = this.afs.doc(`galletas/${idBook}`);
        this.bookDoc.update(book);
    }
    deleteBook(idBook) {
        this.bookDoc = this.afs.doc(`galletas/${idBook}`);
        this.bookDoc.delete();
    }
    saveMessage(newContact) {
        this.contactCollection.add(newContact);
    }
};
CookieService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
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
    })
], DataApiService);



/***/ }),

/***/ "./src/app/services/distribuidor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/distribuidor.service.ts ***!
  \**************************************************/
/*! exports provided: DistribuidorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuidorService", function() { return DistribuidorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DistribuidorService = class DistribuidorService {
    constructor(afs) {
        this.afs = afs;
        this.selectedBook = {};
        this.booksCollection = afs.collection('distribuidores');
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
    updateBook(book) {
        let idBook = book.id;
        this.bookDoc = this.afs.doc(`distribuidores/${idBook}`);
        this.bookDoc.update(book);
    }
    deleteBook(idBook) {
        this.bookDoc = this.afs.doc(`distribuidores/${idBook}`);
        this.bookDoc.delete();
    }
    saveMessage(newContact) {
        this.booksCollection.add(newContact);
    }
};
DistribuidorService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
DistribuidorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DistribuidorService);



/***/ }),

/***/ "./src/app/services/worker.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/worker.service.ts ***!
  \********************************************/
/*! exports provided: WorkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerService", function() { return WorkerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let WorkerService = class WorkerService {
    constructor(afs) {
        this.afs = afs;
        this.selectedBook = {
            id: null
        };
        this.booksCollection = afs.collection('vendedores');
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
    saveMessage(newContact) {
        this.booksCollection.add(newContact);
    }
    deleteBook(idBook) {
        this.bookDoc = this.afs.doc(`vendedores/${idBook}`);
        this.bookDoc.delete();
    }
    updateBook(book) {
        let idBook = book.id;
        this.bookDoc = this.afs.doc(`vendedores/${idBook}`);
        this.bookDoc.update(book);
    }
};
WorkerService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
WorkerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WorkerService);



/***/ }),

/***/ "./src/app/toastr.service.ts":
/*!***********************************!*\
  !*** ./src/app/toastr.service.ts ***!
  \***********************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToastrService = class ToastrService {
    constructor() { }
    success(title, msg) {
        toastr.success(msg, title);
    }
    info(title, msg) {
        toastr.info(msg, title);
    }
    warning(title, msg) {
        toastr.warning(msg, title);
    }
    error(title, msg) {
        toastr.error(msg, title);
    }
    wait(title, msg) {
        toastr.info(msg, title, { timeOut: 3000 });
    }
};
ToastrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastrService);



/***/ }),

/***/ "./src/app/workers/addworkers/addworkers.component.css":
/*!*************************************************************!*\
  !*** ./src/app/workers/addworkers/addworkers.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    height: 600px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93b3JrZXJzL2FkZHdvcmtlcnMvYWRkd29ya2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmIiwiZmlsZSI6ImFwcC93b3JrZXJzL2FkZHdvcmtlcnMvYWRkd29ya2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/workers/addworkers/addworkers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/workers/addworkers/addworkers.component.ts ***!
  \************************************************************/
/*! exports provided: AddworkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddworkersComponent", function() { return AddworkersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_worker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/worker.service */ "./src/app/services/worker.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../crud.service */ "./src/app/crud.service.ts");





let AddworkersComponent = class AddworkersComponent {
    constructor(dbData, crudService) {
        this.dbData = dbData;
        this.crudService = crudService;
        this.lat = -17.393851495957517;
        this.lng = -66.15186435643;
        this.zoom = 14;
        this.contador = 4;
        this.markers = [
            {
                lat: -17.393851495957517,
                lng: -66.234564,
                draggable: true,
                label: 'Administrator',
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
            }
        ];
        this.contactsForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            latitud: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            ci: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            longitud: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(9)])
        });
    }
    ngOnInit() {
        this.crudService.read_Proveedores().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkersv(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
        this.crudService.read_Vendedor().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkers(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
    }
    onResetForm() {
        this.contactsForm.reset();
    }
    onSaveForm() {
        if (this.contactsForm.valid) {
            this.dbData.saveMessage(this.contactsForm.value);
            this.onResetForm();
            console.log('Valid');
        }
        else {
            console.log('Not Valid');
        }
    }
    //UBICACION ACTUAL
    getUserLocation() {
        /// locate the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
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
    crearmarkers(a, b, c) {
        this.markers.push({
            label: a,
            draggable: true,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
    }
    crearmarkersv(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            draggable: true,
            iconUrl: 'http://maps.google.com/mapfiles/arrow.png'
        });
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    get nombre() { return this.contactsForm.get('nombre'); }
    get correo() { return this.contactsForm.get('correo'); }
    get ci() { return this.contactsForm.get('ci'); }
    get apellido() { return this.contactsForm.get('apellido'); }
    get latitud() { return this.contactsForm.get('latitud'); }
    get longitud() { return this.contactsForm.get('longitud'); }
    get telefono() { return this.contactsForm.get('telefono'); }
};
AddworkersComponent.ctorParameters = () => [
    { type: _services_worker_service__WEBPACK_IMPORTED_MODULE_2__["WorkerService"] },
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
AddworkersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addworkers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addworkers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/workers/addworkers/addworkers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addworkers.component.css */ "./src/app/workers/addworkers/addworkers.component.css")).default]
    })
], AddworkersComponent);



/***/ }),

/***/ "./src/app/workers/asignardist/asignardist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/workers/asignardist/asignardist.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    height: 600px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93b3JrZXJzL2FzaWduYXJkaXN0L2FzaWduYXJkaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2YiLCJmaWxlIjoiYXBwL3dvcmtlcnMvYXNpZ25hcmRpc3QvYXNpZ25hcmRpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/workers/asignardist/asignardist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/workers/asignardist/asignardist.component.ts ***!
  \**************************************************************/
/*! exports provided: AsignardistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignardistComponent", function() { return AsignardistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_asignar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/asignar.service */ "./src/app/services/asignar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../crud.service */ "./src/app/crud.service.ts");
/* harmony import */ var _services_worker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/worker.service */ "./src/app/services/worker.service.ts");
/* harmony import */ var _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/distribuidor.service */ "./src/app/services/distribuidor.service.ts");







let AsignardistComponent = class AsignardistComponent {
    constructor(dbData, dataApi, crudService, db) {
        this.dbData = dbData;
        this.dataApi = dataApi;
        this.crudService = crudService;
        this.db = db;
        this.lat = -17.393851495957517;
        this.lng = -66.15186435643;
        this.zoom = 14;
        this.contador = 4;
        this.markers = [
            {
                lat: -17.393851495957517,
                lng: -66.234564,
                draggable: true,
                label: 'Administrator',
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
            }
        ];
        this.contacForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            uid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            distribuidor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            vendedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            latituddistribuidor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            longituddistribuidor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)])
        });
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
    crearmarkers(a, b, c) {
        this.markers.push({
            label: a,
            draggable: true,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
    }
    crearmarkersv(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            draggable: true,
            iconUrl: 'http://maps.google.com/mapfiles/arrow.png'
        });
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    ngOnInit() {
        this.crudService.read_Proveedores().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkersv(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
        this.crudService.read_Vendedor().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkers(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
    }
    onResetForm() {
        this.contacForm.reset();
    }
    onSaveBook(bookForm) {
        if (bookForm.value.id == null) {
            // New 
            bookForm.value.userUid = this.userUid;
            this.db.addBook(bookForm.value);
        }
        else {
            // Update
            this.db.updateBook(bookForm.value);
        }
        bookForm.resetForm();
    }
    onSaveForm() {
        if (this.contacForm.valid) {
            this.db.saveMessage(this.contacForm.value);
            this.onResetForm();
            // this.toastrService.wait('Adding Product to Cart', 'Product Adding to the cart');
            console.log('Valid');
        }
        else {
            console.log('Not Valid');
        }
    }
    get uid() { return this.contacForm.get('uid'); }
    get distribuidor() { return this.contacForm.get('distribuidor'); }
    get vendedor() { return this.contacForm.get('vendedor'); }
    get fecha() { return this.contacForm.get('fecha'); }
    get latituddistribuidor() { return this.contacForm.get('latituddistribuidor'); }
    get longituddistribuidor() { return this.contacForm.get('longituddistribuidor'); }
};
AsignardistComponent.ctorParameters = () => [
    { type: _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_6__["DistribuidorService"] },
    { type: _services_worker_service__WEBPACK_IMPORTED_MODULE_5__["WorkerService"] },
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _services_asignar_service__WEBPACK_IMPORTED_MODULE_2__["AsignarService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AsignardistComponent.prototype, "userUid", void 0);
AsignardistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asignardist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asignardist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/workers/asignardist/asignardist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asignardist.component.css */ "./src/app/workers/asignardist/asignardist.component.css")).default]
    })
], AsignardistComponent);



/***/ }),

/***/ "./src/app/workers/listworkers/listworkers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/workers/listworkers/listworkers.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvd29ya2Vycy9saXN0d29ya2Vycy9saXN0d29ya2Vycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/workers/listworkers/listworkers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/workers/listworkers/listworkers.component.ts ***!
  \**************************************************************/
/*! exports provided: ListworkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListworkersComponent", function() { return ListworkersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_worker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/worker.service */ "./src/app/services/worker.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");




let ListworkersComponent = class ListworkersComponent {
    constructor(dataApi, dialog) {
        this.dataApi = dataApi;
        this.dialog = dialog;
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
        this.dataApi.selectedBook = Object.assign({}, book);
    }
};
ListworkersComponent.ctorParameters = () => [
    { type: _services_worker_service__WEBPACK_IMPORTED_MODULE_2__["WorkerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
ListworkersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listworkers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listworkers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/workers/listworkers/listworkers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listworkers.component.css */ "./src/app/workers/listworkers/listworkers.component.css")).default]
    })
], ListworkersComponent);



/***/ }),

/***/ "./src/app/workers/uploadworkers/uploadworkers.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/workers/uploadworkers/uploadworkers.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\nagm-map {\r\n    height: 600px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93b3JrZXJzL3VwbG9hZHdvcmtlcnMvdXBsb2Fkd29ya2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxhQUFhO0VBQ2YiLCJmaWxlIjoiYXBwL3dvcmtlcnMvdXBsb2Fkd29ya2Vycy91cGxvYWR3b3JrZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/workers/uploadworkers/uploadworkers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/workers/uploadworkers/uploadworkers.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadworkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadworkersComponent", function() { return UploadworkersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_worker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/worker.service */ "./src/app/services/worker.service.ts");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../crud.service */ "./src/app/crud.service.ts");
/* harmony import */ var _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/distribuidor.service */ "./src/app/services/distribuidor.service.ts");





let UploadworkersComponent = class UploadworkersComponent {
    constructor(dbData, dataApi, crudService) {
        this.dbData = dbData;
        this.dataApi = dataApi;
        this.crudService = crudService;
        //COPIAR MAPAS
        this.lat = -17.393851495957517;
        this.lng = -66.15186435643;
        this.zoom = 14;
        this.contador = 4;
        this.markers = [
            {
                lat: -17.393851495957517,
                lng: -66.234564,
                draggable: true,
                label: 'Administrator',
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
            }
        ];
    }
    ngOnInit() {
        this.crudService.read_Proveedores().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkersv(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
        this.crudService.read_Vendedor().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkers(e.payload.doc.data()['nombre'], e.payload.doc.data()['latitud'], e.payload.doc.data()['longitud']);
            });
        });
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
    crearmarkers(a, b, c) {
        this.markers.push({
            label: a,
            draggable: true,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
    }
    crearmarkersv(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            draggable: true,
            iconUrl: 'http://maps.google.com/mapfiles/arrow.png'
        });
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    //MAPAS FINAL
    onSaveBook(bookForm) {
        // Update
        this.dataApi.updateBook(bookForm.value);
    }
};
UploadworkersComponent.ctorParameters = () => [
    { type: _services_distribuidor_service__WEBPACK_IMPORTED_MODULE_4__["DistribuidorService"] },
    { type: _services_worker_service__WEBPACK_IMPORTED_MODULE_2__["WorkerService"] },
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadworkersComponent.prototype, "userUid", void 0);
UploadworkersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uploadworkers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uploadworkers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/workers/uploadworkers/uploadworkers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uploadworkers.component.css */ "./src/app/workers/uploadworkers/uploadworkers.component.css")).default]
    })
], UploadworkersComponent);



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

module.exports = __webpack_require__(/*! A:\PABLO\UPB\CUARTO SEMESTRE\INGENIERIA DE SOFTWARE\PF ADMIN\Prueba\proyecto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
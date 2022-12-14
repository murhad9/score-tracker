(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\score-tracker\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KuSy":
/*!*************************************************!*\
  !*** ./src/app/services/score-reset.service.ts ***!
  \*************************************************/
/*! exports provided: ScoreResetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreResetService", function() { return ScoreResetService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/confirm-modal/confirm-modal.component */ "TL7l");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class ScoreResetService {
    constructor(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.resetScoreSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.resetScoreObj$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this.resetScoreObj$ = this.resetScoreSubject.asObservable();
    }
    endGame(modalTitle) {
        const dialogRef = this.dialog.open(_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmModalComponent"], {
            data: { title: modalTitle }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'yes') {
                // If end game, add another modal with sorted list of players with highest points
                this.resetScoreSubject.next();
                if (modalTitle === _constants__WEBPACK_IMPORTED_MODULE_2__["TITLE_RESET_SCORE"]) {
                    this.snackBar.open(_constants__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_RESET_SCORE"], 'Close', {
                        duration: 3000
                    });
                }
            }
        });
    }
}
ScoreResetService.??fac = function ScoreResetService_Factory(t) { return new (t || ScoreResetService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
ScoreResetService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ScoreResetService, factory: ScoreResetService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_score_reset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/score-reset.service */ "KuSy");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_team_score_team_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/team-score/team-score.component */ "cX3p");







class AppComponent {
    constructor(dialog, scoreReset) {
        this.dialog = dialog;
        this.scoreReset = scoreReset;
        this.END_GAME = _constants__WEBPACK_IMPORTED_MODULE_0__["TITLE_END_GAME"];
        this.RESET_SCORE = _constants__WEBPACK_IMPORTED_MODULE_0__["TITLE_RESET_SCORE"];
        this.teamLayout = 'row';
        this.defaultTeam = [
            { id: Math.random(), name: 'Player 1', score: 0 },
        ];
        this.defaultTeam2 = [
            { id: Math.random(), name: 'Player 1', score: 0 },
        ];
        this.firstTeam = 'Team 1';
        this.secondTeam = 'Team 2';
    }
    onResize() {
        this.teamLayout = window.innerWidth < _constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_WIDTH"] ? 'column' : 'row';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_score_reset_service__WEBPACK_IMPORTED_MODULE_3__["ScoreResetService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resolveWindow"]);
    } }, decls: 12, vars: 5, consts: [[1, "score-container"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutGap", "10px"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["fxLayoutAlign", "space-between", 3, "fxLayout"], [3, "team", "teamName"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Score-tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.scoreReset.endGame(ctx.RESET_SCORE); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Reset scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.scoreReset.endGame(ctx.END_GAME); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "End game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "app-team-score", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "app-team-score", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("fxLayout", ctx.teamLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("team", ctx.defaultTeam)("teamName", ctx.firstTeam);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("team", ctx.defaultTeam2)("teamName", ctx.secondTeam);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _components_team_score_team_score_component__WEBPACK_IMPORTED_MODULE_6__["TeamScoreComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TL7l":
/*!*********************************************************************!*\
  !*** ./src/app/components/confirm-modal/confirm-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ConfirmModalComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
ConfirmModalComponent.??fac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ConfirmModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ConfirmModalComponent, selectors: [["app-confirm-modal"]], decls: 7, vars: 1, consts: [["mat-dialog-title", "", 2, "text-align", "center"], ["mat-button", "", "mat-dialog-close", "yes"], ["mat-button", "", "mat-dialog-close", "no"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.title);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_team_score_team_score_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/team-score/team-score.component */ "cX3p");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ "TL7l");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_team_score_team_score_component__WEBPACK_IMPORTED_MODULE_2__["TeamScoreComponent"],
        _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]] }); })();


/***/ }),

/***/ "cX3p":
/*!***************************************************************!*\
  !*** ./src/app/components/team-score/team-score.component.ts ***!
  \***************************************************************/
/*! exports provided: TeamScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamScoreComponent", function() { return TeamScoreComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_score_reset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/score-reset.service */ "KuSy");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function TeamScoreComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function TeamScoreComponent_div_8_Template_input_ngModelChange_3_listener($event) { const player_r2 = ctx.$implicit; return player_r2.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TeamScoreComponent_div_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const indexOfArray_r3 = ctx.index; const player_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r5.deletePlayer(indexOfArray_r3, player_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TeamScoreComponent_div_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const indexOfArray_r3 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r7.updatePoints(indexOfArray_r3, 10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "keyboard_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TeamScoreComponent_div_8_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const indexOfArray_r3 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r8.updatePoints(indexOfArray_r3, -10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const player_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", player_r2.name)("value", player_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](player_r2.score);
} }
function TeamScoreComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" Team score: ", ctx_r1.calculateScore(), " ");
} }
const listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })))], { optional: true }),
    ]),
]);
class TeamScoreComponent {
    constructor(scoreReset) {
        this.scoreReset = scoreReset;
        this.teamName = 'Team';
        this.totalScore = 0;
        this.scoreReset.resetScoreObj$.subscribe(() => {
            this.team.forEach(player => {
                player.score = 0;
            });
            this.totalScore = 0;
        });
    }
    ngOnInit() {
    }
    calculateScore() {
        return this.team.reduce((sum, player) => {
            return sum + player.score;
        }, 0);
    }
    updatePoints(index, points) {
        let scoreCounter = 0;
        const ADD_POINT = points > 0 ? 1 : -1; // Increment or decrement score
        const MAX_POINTS = 10;
        const INTERVAL = 30;
        const scorePoints = window.setInterval(() => {
            scoreCounter++;
            this.team[index].score += ADD_POINT;
            if (scoreCounter === MAX_POINTS) {
                clearInterval(scorePoints);
            }
        }, INTERVAL);
    }
    addPlayer() {
        const player = { id: Math.random(), name: 'Player ' + (this.team.length + 1), score: 0 };
        this.team.push(player);
    }
    deletePlayer(index, playerToRemove) {
        this.team.find(player => player.id === playerToRemove.id);
        this.team.splice(index, 1);
        this.totalScore -= playerToRemove.score;
    }
}
TeamScoreComponent.??fac = function TeamScoreComponent_Factory(t) { return new (t || TeamScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_score_reset_service__WEBPACK_IMPORTED_MODULE_2__["ScoreResetService"])); };
TeamScoreComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: TeamScoreComponent, selectors: [["app-team-score"]], inputs: { team: "team", teamName: "teamName" }, decls: 10, vars: 4, consts: [["id", "container"], ["id", "header", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px"], ["mat-icon-button", "", "matTooltip", "Add player", 3, "click"], ["fxLayout", "row wrap", "fxLayoutGap", "10px"], [4, "ngFor", "ngForOf"], ["style", " text-align: center;", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["matInput", "", 2, "text-align", "center", 3, "ngModel", "value", "ngModelChange"], ["mat-icon-button", "", "matTooltip", "Delete player", 3, "click"], [1, "deleteIcon"], ["mat-icon-button", "", 3, "click"], [2, "text-align", "center"]], template: function TeamScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TeamScoreComponent_Template_button_click_4_listener() { return ctx.addPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, TeamScoreComponent_div_8_Template, 16, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, TeamScoreComponent_p_9_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.teamName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@listAnimation", ctx.team.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.team.length > 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["#container[_ngcontent-%COMP%] {\r\n    width: 490px;\r\n    height: max-content;\r\n\r\n}\r\n\r\n.team[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n}\r\n\r\nmat-form-field.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 1px;\r\n  }\r\n\r\n.deleteIcon[_ngcontent-%COMP%] {\r\n    color:red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tc2NvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztFQUNoQjs7QUFFRjtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJ0ZWFtLXNjb3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0OTBweDtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4udGVhbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxcHg7XHJcbiAgfVxyXG5cclxuLmRlbGV0ZUljb24ge1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbiJdfQ== */"], data: { animation: [listAnimation] } });


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: TITLE_END_GAME, TITLE_RESET_SCORE, MESSAGE_RESET_SCORE, PAGE_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_END_GAME", function() { return TITLE_END_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_RESET_SCORE", function() { return TITLE_RESET_SCORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_RESET_SCORE", function() { return MESSAGE_RESET_SCORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_WIDTH", function() { return PAGE_WIDTH; });
const TITLE_END_GAME = 'End game ?';
const TITLE_RESET_SCORE = 'Reset scores?';
const MESSAGE_RESET_SCORE = 'Scores reset';
const PAGE_WIDTH = 958;


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
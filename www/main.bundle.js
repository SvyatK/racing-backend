webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
        var initParams = {
            appId: '396487237479561',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_login_login__ = __webpack_require__("./src/views/login/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_auth_delegate__ = __webpack_require__("./src/services/http/auth.delegate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_api_http_service__ = __webpack_require__("./src/services/http/api-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_car_service__ = __webpack_require__("./src/services/car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_car_delegate__ = __webpack_require__("./src/services/http/car.delegate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_gameplay_service__ = __webpack_require__("./src/services/gameplay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_control_service__ = __webpack_require__("./src/services/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_socket_service__ = __webpack_require__("./src/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_model_loader_service__ = __webpack_require__("./src/services/model-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_http_auth_request_options__ = __webpack_require__("./src/services/http/auth-request-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_menu_menu__ = __webpack_require__("./src/views/menu/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_carSelection_carSelection__ = __webpack_require__("./src/views/carSelection/carSelection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_gameplay_gameplay__ = __webpack_require__("./src/views/gameplay/gameplay.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_stage_3d_stage_3d__ = __webpack_require__("./src/components/stage-3d/stage-3d.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_http_lobby_delegate__ = __webpack_require__("./src/services/http/lobby.delegate.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_18__views_menu_menu__["a" /* MenuView */] },
    { path: 'selectCars', component: __WEBPACK_IMPORTED_MODULE_19__views_carSelection_carSelection__["a" /* CarSelectionView */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_20__views_gameplay_gameplay__["a" /* GameplayView */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__views_login_login__["a" /* LoginView */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__views_login_login__["a" /* LoginView */],
                __WEBPACK_IMPORTED_MODULE_18__views_menu_menu__["a" /* MenuView */],
                __WEBPACK_IMPORTED_MODULE_19__views_carSelection_carSelection__["a" /* CarSelectionView */],
                __WEBPACK_IMPORTED_MODULE_20__views_gameplay_gameplay__["a" /* GameplayView */],
                __WEBPACK_IMPORTED_MODULE_21__components_stage_3d_stage_3d__["a" /* Stage_3dComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_12_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__views_login_login__["a" /* LoginView */], __WEBPACK_IMPORTED_MODULE_18__views_menu_menu__["a" /* MenuView */], __WEBPACK_IMPORTED_MODULE_19__views_carSelection_carSelection__["a" /* CarSelectionView */], __WEBPACK_IMPORTED_MODULE_20__views_gameplay_gameplay__["a" /* GameplayView */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_8__services_http_auth_delegate__["a" /* AuthDelegate */],
                __WEBPACK_IMPORTED_MODULE_9__services_http_api_http_service__["a" /* ApiHttpService */],
                __WEBPACK_IMPORTED_MODULE_10__services_car_service__["a" /* CarService */],
                __WEBPACK_IMPORTED_MODULE_11__services_http_car_delegate__["a" /* CarDelegate */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_facebook__["b" /* FacebookService */],
                __WEBPACK_IMPORTED_MODULE_13__services_gameplay_service__["a" /* GameplayService */],
                __WEBPACK_IMPORTED_MODULE_14__services_control_service__["a" /* ControlService */],
                __WEBPACK_IMPORTED_MODULE_15__services_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_16__services_model_loader_service__["a" /* ModelLoaderService */],
                __WEBPACK_IMPORTED_MODULE_22__services_http_lobby_delegate__["a" /* LobbyDelegate */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */],
                    useClass: __WEBPACK_IMPORTED_MODULE_17__services_http_auth_request_options__["a" /* AuthRequestOptions */]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/control/base-step-control-texture.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Graphics = PIXI.Graphics;
var BaseStepControlTexture = /** @class */ (function (_super) {
    __extends(BaseStepControlTexture, _super);
    function BaseStepControlTexture(pixelsInUnit, relativeCarOffset) {
        if (pixelsInUnit === void 0) { pixelsInUnit = 1; }
        if (relativeCarOffset === void 0) { relativeCarOffset = 0.2; }
        var _this = _super.call(this) || this;
        _this.strokeColor = 0x427df4;
        _this.areaFillColor = 0x41a3f4;
        _this.areaFillColorAlpha = 0.3;
        _this._pixelsInUnit = pixelsInUnit;
        _this.areaWidth = BaseStepControlTexture.BASE_TEXTURE_WIDTH;
        _this.areaHeight = BaseStepControlTexture.BASE_TEXTURE_HEIGHT;
        _this.relativeCarOffset = relativeCarOffset;
        _this.carOffset = BaseStepControlTexture.BASE_TEXTURE_WIDTH * relativeCarOffset;
        _this.outerStrokeWeight = Math.round(BaseStepControlTexture.BASE_OUTER_STROKE_WEIGHT);
        _this.innerStrokeWeight = Math.round(BaseStepControlTexture.BASE_INNER_STROKE_WEIGHT);
        return _this;
    }
    Object.defineProperty(BaseStepControlTexture.prototype, "pixelsInUnit", {
        get: function () {
            return this._pixelsInUnit;
        },
        set: function (value) {
            if (this._pixelsInUnit === value) {
                return;
            }
            this._pixelsInUnit = value;
            if (this.visible) {
                this.redraw();
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseStepControlTexture.prototype.redraw = function () { };
    BaseStepControlTexture.BASE_TEXTURE_WIDTH = 1024;
    BaseStepControlTexture.BASE_TEXTURE_HEIGHT = 512;
    BaseStepControlTexture.BASE_OUTER_STROKE_WEIGHT = 3;
    BaseStepControlTexture.BASE_INNER_STROKE_WEIGHT = 1;
    return BaseStepControlTexture;
}(Graphics));
/* harmony default export */ __webpack_exports__["a"] = (BaseStepControlTexture);


/***/ }),

/***/ "./src/components/control/next-position-arc.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__ = __webpack_require__("./src/utils/geom.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_step_control_texture__ = __webpack_require__("./src/components/control/base-step-control-texture.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = PIXI.Point;


var NextPositionArc = /** @class */ (function (_super) {
    __extends(NextPositionArc, _super);
    function NextPositionArc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextPositionArc.prototype.draw = function (trajectory) {
        this.currentTrajectory = trajectory;
        this.drawInner();
    };
    NextPositionArc.prototype.redraw = function () {
        _super.prototype.redraw.call(this);
        this.drawInner();
    };
    NextPositionArc.prototype.drawInner = function () {
        if (!this.currentTrajectory) {
            return;
        }
        var trajectory = this.currentTrajectory.clone();
        trajectory.l *= this.pixelsInUnit;
        trajectory.c /= this.pixelsInUnit;
        var startPoint = new Point(this.carOffset, this.areaHeight / 2);
        var endPoint = new Point(trajectory.position.x + this.carOffset, -trajectory.position.y + this.areaHeight / 2);
        this.clear();
        this.lineStyle(this.outerStrokeWeight, this.strokeColor);
        if (Math.abs(trajectory.c) < 0.00001) {
            this.moveTo(startPoint.x, startPoint.y);
            this.lineTo(endPoint.x, endPoint.y);
        }
        else {
            var arcCenter = new Point(this.carOffset, -trajectory.arcCenter.y + this.areaHeight / 2);
            this.arc(arcCenter.x, arcCenter.y, trajectory.arcRadius, __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["b" /* PolarPoint */].fromCartesian(startPoint, arcCenter).theta, __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["b" /* PolarPoint */].fromCartesian(endPoint, arcCenter).theta, trajectory.l > 0 ? trajectory.c > 0 : trajectory.c < 0);
        }
    };
    return NextPositionArc;
}(__WEBPACK_IMPORTED_MODULE_1__base_step_control_texture__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (NextPositionArc);


/***/ }),

/***/ "./src/components/control/next-position-area.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__ = __webpack_require__("./src/utils/geom.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_step_trajectory_model__ = __webpack_require__("./src/models/step-trajectory.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_step_control_texture__ = __webpack_require__("./src/components/control/base-step-control-texture.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = PIXI.Point;



var NextPositionArea = /** @class */ (function (_super) {
    __extends(NextPositionArea, _super);
    function NextPositionArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextPositionArea.prototype.redraw = function () {
        _super.prototype.redraw.call(this);
        this.drawInner();
    };
    NextPositionArea.prototype.draw = function (minDistance, maxDistance, momentumDistance, maxCurvature) {
        this.currentData = {
            minDistance: minDistance,
            maxDistance: maxDistance,
            momentumDistance: momentumDistance,
            maxCurvature: maxCurvature
        };
        this.drawInner();
    };
    NextPositionArea.prototype.drawInner = function () {
        if (!this.currentData) {
            return;
        }
        var minDistance = this.currentData.minDistance;
        var maxDistance = this.currentData.maxDistance;
        var momentumDistance = this.currentData.momentumDistance;
        var maxCurvature = this.currentData.maxCurvature;
        minDistance *= this.pixelsInUnit;
        maxDistance *= this.pixelsInUnit;
        momentumDistance *= this.pixelsInUnit;
        maxCurvature /= this.pixelsInUnit;
        var leftBottom = new __WEBPACK_IMPORTED_MODULE_1__models_step_trajectory_model__["a" /* default */](minDistance, maxCurvature).position;
        var rightBottom = new __WEBPACK_IMPORTED_MODULE_1__models_step_trajectory_model__["a" /* default */](minDistance, -maxCurvature).position;
        var leftTop = new __WEBPACK_IMPORTED_MODULE_1__models_step_trajectory_model__["a" /* default */](maxDistance, maxCurvature).position;
        var rightTop = new __WEBPACK_IMPORTED_MODULE_1__models_step_trajectory_model__["a" /* default */](maxDistance, -maxCurvature).position;
        this.clear();
        this.lineStyle(this.outerStrokeWeight, this.strokeColor, 1);
        this.beginFill(this.areaFillColor, this.areaFillColorAlpha);
        this.moveTo(leftBottom.x + this.carOffset, leftBottom.y + this.areaHeight / 2);
        if (!leftBottom.equals(rightBottom)) {
            this.drawCardioid(minDistance, maxCurvature, -maxCurvature);
        }
        this.arc(this.carOffset, -(1 / maxCurvature) + this.areaHeight / 2, 1 / maxCurvature, __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["b" /* PolarPoint */].fromCartesian(rightBottom, new Point(0, -1 / maxCurvature)).theta, __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["b" /* PolarPoint */].fromCartesian(rightTop, new Point(0, -1 / maxCurvature)).theta, true);
        this.drawCardioid(maxDistance, -maxCurvature, maxCurvature);
        this.arc(this.carOffset, 1 / maxCurvature + this.areaHeight / 2, 1 / maxCurvature, __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["b" /* PolarPoint */].fromCartesian(leftTop, new Point(0, 1 / maxCurvature)).theta, __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["b" /* PolarPoint */].fromCartesian(leftBottom, new Point(0, 1 / maxCurvature)).theta, true);
        this.endFill();
        this.lineStyle(this.innerStrokeWeight, this.strokeColor, 1);
        this.drawCardioid(momentumDistance, -maxCurvature, maxCurvature, true);
    };
    NextPositionArea.prototype.drawCardioid = function (distance, startCurvature, endCurvature, isIndepended, center) {
        var _this = this;
        if (isIndepended === void 0) { isIndepended = false; }
        if (center === void 0) { center = new Point(this.carOffset, this.areaHeight / 2); }
        this.getCardiodPathPoints(distance, startCurvature, endCurvature, 16)
            .forEach(function (point, index) {
            if (index === 0) {
                if (isIndepended) {
                    _this.moveTo(point.x + center.x, point.y + center.y);
                }
                return;
            }
            _this.lineTo(point.x + center.x, point.y + center.y);
        });
    };
    NextPositionArea.prototype.getCardiodPathPoints = function (l, minC, maxC, segs) {
        if (segs === void 0) { segs = 32; }
        var curvatures = [];
        var cStep = (maxC - minC) / segs;
        for (var i = 0; i <= segs; i++) {
            curvatures.push(minC + i * cStep);
        }
        return curvatures.map(function (c) { return new __WEBPACK_IMPORTED_MODULE_1__models_step_trajectory_model__["a" /* default */](l, c).position; });
    };
    return NextPositionArea;
}(__WEBPACK_IMPORTED_MODULE_2__base_step_control_texture__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (NextPositionArea);


/***/ }),

/***/ "./src/components/stage-3d/stage-3d.html":
/***/ (function(module, exports) {

module.exports = "<canvas #worldCanvas class=\"full-screen\"></canvas>\n<canvas #controlCanvas class=\"full-screen\"></canvas>\n"

/***/ }),

/***/ "./src/components/stage-3d/stage-3d.scss":
/***/ (function(module, exports) {

module.exports = "stage-3d {\n  width: 100%;\n  height: 100%; }\n\n.full-screen {\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n"

/***/ }),

/***/ "./src/components/stage-3d/stage-3d.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stage_3dComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_orbit_controls__ = __webpack_require__("./node_modules/three-orbit-controls/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_orbit_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three_orbit_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_sky__ = __webpack_require__("./node_modules/three-sky/Sky.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_sky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_three_sky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_control_service__ = __webpack_require__("./src/services/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three_full__ = __webpack_require__("./node_modules/three-full/builds/Three.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




 // TODO cleanup such dependencies; looks like three-full can solve all these problems


var OrbitControls = __WEBPACK_IMPORTED_MODULE_2_three_orbit_controls__(__WEBPACK_IMPORTED_MODULE_1_three__);
var Stage_3dComponent = /** @class */ (function () {
    function Stage_3dComponent(controlService) {
        var _this = this;
        this.controlService = controlService;
        this.isOrbitControlEnabled = false;
        this.fieldOfView = 45;
        this.nearClippingPane = 1;
        this.farClippingPane = 10000;
        // FIXME magic number. With this camera distance + fov we will get the same element positioning, like in old 2d version
        // maybe it will be dynamic
        this.cameraDistance = 64;
        // TODO that's must be in map metadata
        this.sunLightPhi = 0.9;
        this.sunLightTheta = 2.5;
        this.seaLevel = 58;
        controlService.cameraDistanceSubject
            .subscribe((function (value) {
            _this.cameraDistance = value;
            if (_this.sunDirectLight) {
                var d = _this.cameraDistance * 1.5;
                _this.sunDirectLight.shadow.camera.bottom = -d;
                _this.sunDirectLight.shadow.camera.top = d;
                _this.sunDirectLight.shadow.camera.left = -d;
                _this.sunDirectLight.shadow.camera.right = d;
                // FIXME 4 is hardcode. Calculate by angle instead;
                _this.sunDirectLight.shadow.camera.far = _this.cameraDistance * 4;
            }
        }));
    }
    Object.defineProperty(Stage_3dComponent.prototype, "worldCanvas", {
        get: function () {
            return this.worldCanvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage_3dComponent.prototype, "controlCanvas", {
        get: function () {
            return this.controlCanvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Stage_3dComponent.prototype.animateCamera = function () {
        if (!this.camera || !this.car || !this.car.mesh) {
            return;
        }
        this.camera.position.x = this.car.mesh.position.x + Math.cos(this.car.rotation) * this.car.speed / 2;
        this.camera.position.y = this.car.mesh.position.y + Math.sin(this.car.rotation) * this.car.speed / 2;
        this.camera.position.z = this.cameraDistance;
        if (this.isOrbitControlEnabled) {
            this.camera.position.y -= 0.5;
        }
        this.camera.up = this.isOrbitControlEnabled ? new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 1) : new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 1, 0);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.car.mesh.position.x + Math.cos(this.car.rotation) * this.car.speed / 2, this.car.mesh.position.y + Math.sin(this.car.rotation) * this.car.speed / 2, this.car.mesh.position.z));
        this.sunDirectLight.position.set(this.car.mesh.position.x + this.cameraDistance * Math.cos(this.sunLightTheta) * Math.sin(this.sunLightPhi), this.car.mesh.position.y + this.cameraDistance * Math.sin(this.sunLightTheta) * Math.sin(this.sunLightPhi), this.car.mesh.position.z + this.cameraDistance * Math.cos(this.sunLightPhi));
        this.sunDirectLight.target.position.set(this.car.mesh.position.x, this.car.mesh.position.y, this.car.mesh.position.z);
        if (this.isOrbitControlEnabled && this.orbitControls) {
            this.orbitControls.update();
        }
    };
    Stage_3dComponent.prototype.resizeCanvas = function (newWidth, newHeight) {
        this.worldCanvas.width = newWidth;
        this.worldCanvas.height = newHeight;
        this.controlCanvas.width = newWidth;
        this.controlCanvas.height = newHeight;
        this.camera.aspect = this.worldCanvas.width / this.worldCanvas.height;
        this.camera.updateProjectionMatrix();
        if (this.worldRenderer) {
            this.worldRenderer.setSize(this.worldCanvas.width, this.worldCanvas.height);
        }
        if (this.controlRenderer) {
            this.controlRenderer.setSize(this.controlCanvas.width, this.controlCanvas.height);
        }
        if (this.isOrbitControlEnabled && this.orbitControls) {
            this.orbitControls.update();
        }
    };
    Stage_3dComponent.prototype.addCar = function (car, track) {
        if (track === void 0) { track = false; }
        if (track) {
            this.car = car;
        }
        this.scene.add(car.mesh);
    };
    Stage_3dComponent.prototype.addMap = function (map, castShadows) {
        map.traverse(function (child) {
            if (child instanceof __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]) {
                child.castShadow = castShadows;
                child.receiveShadow = castShadows;
            }
        });
        this.scene.add(map);
    };
    Stage_3dComponent.prototype.addControlElement = function (element) {
        this.controlScene.add(element);
    };
    Stage_3dComponent.prototype.createScene = function () {
        /* Scene */
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.controlScene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        /* Camera */
        var aspectRatio = this.worldCanvas.width / this.worldCanvas.height;
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
        if (this.isOrbitControlEnabled) {
            this.orbitControls = new OrbitControls(this.camera);
        }
        this.sunAmbientLight = new __WEBPACK_IMPORTED_MODULE_1_three__["HemisphereLight"](0xbbbbff, 0x8890a0, 0.85);
        this.sunAmbientLight.position.set(0, 0, 1);
        this.scene.add(this.sunAmbientLight);
        this.sunDirectLight = new __WEBPACK_IMPORTED_MODULE_1_three__["DirectionalLight"](0xffffff, 1.5);
        this.sunDirectLight.castShadow = true;
        var d = this.cameraDistance * 1.5;
        this.sunDirectLight.shadow.camera.bottom = -d;
        this.sunDirectLight.shadow.camera.top = d;
        this.sunDirectLight.shadow.camera.left = -d;
        this.sunDirectLight.shadow.camera.right = d;
        this.sunDirectLight.shadow.mapSize.width = 2048;
        this.sunDirectLight.shadow.mapSize.height = 2048;
        this.sunDirectLight.shadow.camera.near = 0;
        // FIXME 4 is hardcode. Calculate by angle instead;
        this.sunDirectLight.shadow.camera.far = this.cameraDistance * 4;
        this.scene.add(this.sunDirectLight);
        this.scene.add(this.sunDirectLight.target);
        console.log(this.sunDirectLight);
        var skyPosition = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](Math.cos(this.sunLightTheta) * Math.sin(this.sunLightPhi), Math.sin(this.sunLightTheta) * Math.sin(this.sunLightPhi), Math.cos(this.sunLightPhi));
        // skybox
        this.sky = new __WEBPACK_IMPORTED_MODULE_3_three_sky__();
        this.sky.scale.setScalar(8000);
        this.sky.up = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 1);
        // AG: cool hack here to rotate sky so "z" goes up instead of "y"
        this.sky.material.fragmentShader = this.sky.material.fragmentShader.replace('const vec3 up = vec3( 0.0, 1.0, 0.0 );', 'const vec3 up = vec3( 0.0, 0.0, 1.0 );');
        this.sky.material.vertexShader = this.sky.material.vertexShader.replace('const vec3 up = vec3( 0.0, 1.0, 0.0 );', 'const vec3 up = vec3( 0.0, 0.0, 1.0 );');
        this.sky.material.uniforms.turbidity.value = 10;
        this.sky.material.uniforms.rayleigh.value = 2;
        this.sky.material.uniforms.luminance.value = 1;
        this.sky.material.uniforms.mieCoefficient.value = 0.005;
        this.sky.material.uniforms.mieDirectionalG.value = 0.8;
        this.sky.material.uniforms.sunPosition.value = skyPosition.clone();
        this.scene.add(this.sky);
        // ocean
        this.water = new __WEBPACK_IMPORTED_MODULE_5_three_full__["a" /* Water */](new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneBufferGeometry"](10000, 10000), {
            textureWidth: 128,
            textureHeight: 128,
            waterNormals: new __WEBPACK_IMPORTED_MODULE_1_three__["TextureLoader"]().load('assets/models/maps/common/textures/waternormals.jpg', function (texture) {
                texture.wrapS = texture.wrapT = __WEBPACK_IMPORTED_MODULE_1_three__["RepeatWrapping"];
            }),
            alpha: 1.0,
            sunDirection: skyPosition.clone(),
            sunColor: 0xffffff,
            waterColor: 0x003435,
            distortionScale: 3.7
        });
        this.water.material.uniforms.size.value = 3;
        this.water.position.z = -this.seaLevel;
        // AG: cool hack here to rotate water shader so "z" goes up instead of "y"
        this.water.material.fragmentShader = this.water.material.fragmentShader.replace('getNoise( worldPosition.xz * size );', 'getNoise( worldPosition.xy * size );');
        this.water.material.fragmentShader = this.water.material.fragmentShader.replace('vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );', 'vec3 surfaceNormal = normalize( noise.xyz * vec3( 1.5, 1.0, 1.5 ) );');
        this.water.material.fragmentShader = this.water.material.fragmentShader.replace('vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;', 'vec2 distortion = surfaceNormal.xy * ( 0.001 + 1.0 / distance ) * distortionScale;');
        this.scene.add(this.water);
    };
    Stage_3dComponent.prototype.initCanvases = function () {
        this.worldRenderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({
            canvas: this.worldCanvas,
            antialias: true,
            transparent: true
        });
        this.worldRenderer.shadowMap.enabled = true;
        this.worldRenderer.shadowMapType = __WEBPACK_IMPORTED_MODULE_1_three__["PCFSoftShadowMap"];
        this.worldRenderer.setPixelRatio(devicePixelRatio);
        this.worldRenderer.setSize(this.worldCanvas.width, this.worldCanvas.height);
        this.controlRenderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({
            canvas: this.controlCanvas,
            antialias: true,
            alpha: true
        });
        this.controlRenderer.setPixelRatio(devicePixelRatio);
        this.controlRenderer.setSize(this.controlCanvas.width, this.controlCanvas.height);
    };
    Stage_3dComponent.prototype.startRenderingLoop = function () {
        var component = this;
        (function render() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    component.animateCamera();
                    component.controlService.adjustControlPositions();
                    component.water.material.uniforms.time.value += 1.0 / 60.0;
                    component.worldRenderer.clear();
                    component.worldRenderer.render(component.scene, component.camera);
                    component.controlRenderer.clear();
                    component.controlRenderer.render(component.controlScene, component.camera);
                    requestAnimationFrame(render);
                    return [2 /*return*/];
                });
            });
        }());
    };
    Stage_3dComponent.prototype.ngAfterViewInit = function () {
        this.resizeCanvas(window.innerWidth, window.innerHeight);
        this.initCanvases();
        this.startRenderingLoop();
    };
    Stage_3dComponent.prototype.ngOnInit = function () {
        this.createScene();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Stage_3dComponent.prototype, "isOrbitControlEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('worldCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Stage_3dComponent.prototype, "worldCanvasRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('controlCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Stage_3dComponent.prototype, "controlCanvasRef", void 0);
    Stage_3dComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stage-3d',
            template: __webpack_require__("./src/components/stage-3d/stage-3d.html"),
            styles: [__webpack_require__("./src/components/stage-3d/stage-3d.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_control_service__["a" /* ControlService */]])
    ], Stage_3dComponent);
    return Stage_3dComponent;
}());



/***/ }),

/***/ "./src/consts/app.consts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var AppConsts = /** @class */ (function () {
    function AppConsts() {
    }
    AppConsts.BACKEND_URL = 'https://racing-demo-dev.pp.ua';
    AppConsts.FPS = 60;
    AppConsts.MOVE_TIMEOUT = 5000;
    return AppConsts;
}());
/* harmony default export */ __webpack_exports__["a"] = (AppConsts);


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "./src/models/car-characteristics.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CarCharacteristicsModel = /** @class */ (function () {
    function CarCharacteristicsModel() {
    }
    // TODO must be more complicated formula in future, this is strongly simplified
    CarCharacteristicsModel.prototype.getEngineForce = function () {
        return this.engineForce;
    };
    // TODO must be more complicated formula in future, this is strongly simplified
    CarCharacteristicsModel.prototype.getBrakingForce = function () {
        return this.brakingForce;
    };
    // TODO must be more complicated formula in future, this is strongly simplified
    CarCharacteristicsModel.prototype.getSteeringMaxCurvature = function (velocity) {
        return 1 / (CarCharacteristicsModel.DORMANT_TURN_RADIUS + Math.pow(velocity, 2) / this.steeringFactor);
    };
    CarCharacteristicsModel.prototype.getDragForce = function (velocity) {
        return this.dragConstant * Math.pow(velocity, 2);
    };
    CarCharacteristicsModel.prototype.getWheelFrictionForce = function (velocity) {
        return this.wheelFrictionConstant * Math.abs(velocity);
    };
    CarCharacteristicsModel.prototype.getMaxAcceleration = function (velocity) {
        return (this.getEngineForce() - this.getDragForce(velocity) - this.getWheelFrictionForce(velocity)) / this.mass;
    };
    CarCharacteristicsModel.prototype.getMaxDeceleration = function (velocity) {
        return (this.getBrakingForce() + this.getDragForce(velocity) + this.getWheelFrictionForce(velocity)) / this.mass;
    };
    CarCharacteristicsModel.fromDTO = function (carDTO) {
        var output = new CarCharacteristicsModel();
        output.steeringFactor = carDTO.steering;
        output.dragConstant = carDTO.dragConstant;
        output.wheelFrictionConstant = carDTO.wheelFrictionConstant;
        output.engineForce = carDTO.engineForce;
        output.brakingForce = carDTO.brakingForce;
        output.mass = carDTO.mass;
        return output;
    };
    // TODO this must be one more car characteristic, u-turn radius on minimal speed. Set to 5.5 meters for now
    CarCharacteristicsModel.DORMANT_TURN_RADIUS = 5.5;
    return CarCharacteristicsModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (CarCharacteristicsModel);


/***/ }),

/***/ "./src/models/car.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_characteristics_model__ = __webpack_require__("./src/models/car-characteristics.model.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};



var Point = PIXI.Point;
var Car = /** @class */ (function () {
    function Car(id, model, characteristics, x, y, rotation, speed) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (rotation === void 0) { rotation = 0; }
        if (speed === void 0) { speed = 0; }
        this.id = id;
        this.model = model;
        this.characteristics = characteristics;
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.speed = speed;
        this.ready = false;
    }
    Car.prototype.initMesh = function (modelLoaderService, castShadows) {
        if (castShadows === void 0) { castShadows = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, modelLoaderService.loadCar('BMW_M3_MW' /*this.model*/)];
                    case 1:
                        _a.mesh = _b.sent();
                        this.mesh.position.x = this.x;
                        this.mesh.position.y = this.y;
                        this.mesh.position.z = 0;
                        this.mesh.rotation.z = this.rotation;
                        this.mesh.traverse(function (child) {
                            if (child instanceof __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]) {
                                child.castShadow = castShadows;
                                child.receiveShadow = castShadows;
                            }
                        });
                        this.ready = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Car.prototype.setX = function (value) {
        if (value == this.x) {
            return;
        }
        this.x = value;
        if (this.ready) {
            this.mesh.position.x = this.x;
        }
    };
    Car.prototype.setY = function (value) {
        if (value == this.y) {
            return;
        }
        this.y = value;
        if (this.ready) {
            this.mesh.position.y = this.y;
        }
    };
    Car.prototype.getPosition = function () {
        return new Point(this.x, this.y);
    };
    Car.prototype.setPosition = function (value) {
        if (this.x == value.x && this.y == value.y) {
            return;
        }
        this.x = value.x;
        this.y = value.y;
        if (this.ready) {
            this.mesh.position.set(value.x, value.y, 0);
        }
    };
    Car.prototype.setRotation = function (value) {
        if (value == this.rotation) {
            return;
        }
        this.rotation = value;
        if (this.ready) {
            this.mesh.rotation.z = this.rotation;
        }
    };
    Car.prototype.clone = function () {
        return new Car((this.id + 1) * 5, this.model, this.characteristics, this.x, this.y, this.rotation);
    };
    Car.fromDTO = function (carDTO) {
        return new Car(Math.round(Math.random() * 1000), 'BMW_M3_MW', __WEBPACK_IMPORTED_MODULE_2__car_characteristics_model__["a" /* default */].fromDTO(carDTO));
    };
    return Car;
}());
/* harmony default export */ __webpack_exports__["a"] = (Car);


/***/ }),

/***/ "./src/models/map-checkpoint.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Point = PIXI.Point;
var MapCheckpointModel = /** @class */ (function () {
    function MapCheckpointModel() {
    }
    MapCheckpointModel.prototype.getPosition = function () {
        return new Point(this.x, this.y);
    };
    MapCheckpointModel.fromDummyObject = function (object) {
        var result = new MapCheckpointModel();
        var matchResult = object.colladaId.match(this.NODE_NAME_REGEX);
        if (!matchResult) {
            throw new Error('Invalid checkpoint dummy');
        }
        result.x = object.position.x;
        result.y = object.position.y;
        result.radius = +matchResult[2];
        return result;
    };
    MapCheckpointModel.NODE_NAME_REGEX = /^node-maphelper_checkpoint_(\d+)_r(\d+)$/;
    return MapCheckpointModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (MapCheckpointModel);


/***/ }),

/***/ "./src/models/map-data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var MapDataModel = /** @class */ (function () {
    function MapDataModel(scene, checkpoints, polygon, startPositions) {
        this.scene = scene;
        this.checkpoints = checkpoints;
        this.polygon = polygon;
        this.startPositions = startPositions;
    }
    return MapDataModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (MapDataModel);


/***/ }),

/***/ "./src/models/map-polygon.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__ = __webpack_require__("./src/utils/geom.utils.ts");

var MapPolygonModel = /** @class */ (function () {
    function MapPolygonModel() {
        this.outerPolygon = [
            [-2048, -2048],
            [2048, -2048],
            [2048, 2048],
            [-2048, 2048]
        ];
        this.innerPolygons = [];
    }
    MapPolygonModel.prototype.isContainingPoint = function (point) {
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["a" /* GeomUtils */].isPointInsidePolygon(point, this.outerPolygon)) {
            return false;
        }
        for (var _i = 0, _a = this.innerPolygons; _i < _a.length; _i++) {
            var innerPolygon = _a[_i];
            if (__WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["a" /* GeomUtils */].isPointInsidePolygon(point, innerPolygon)) {
                return false;
            }
        }
        return true;
    };
    // TODO find an elegant way to do it. True hardcore is here
    MapPolygonModel.prototype.getLinePolygonIntersection = function (point1, point2) {
        var innerPoint = this.isContainingPoint(point1) ? point1 : point2;
        var outerPoint = innerPoint === point1 ? point2 : point1;
        while (__WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["a" /* GeomUtils */].getDistanceBetweenPoints(innerPoint, outerPoint) > 0.05) {
            var middlePoint = __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["a" /* GeomUtils */].getMiddlePoint(innerPoint, outerPoint);
            if (this.isContainingPoint(middlePoint)) {
                innerPoint = middlePoint;
            }
            else {
                outerPoint = middlePoint;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["a" /* GeomUtils */].getMiddlePoint(innerPoint, outerPoint);
    };
    MapPolygonModel.fromDummyObject = function (object) {
        return new MapPolygonModel;
    };
    return MapPolygonModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (MapPolygonModel);


/***/ }),

/***/ "./src/models/player-position.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var PlayerPositionModel = /** @class */ (function () {
    function PlayerPositionModel(position, rotation) {
        this.position = position;
        this.rotation = rotation;
    }
    return PlayerPositionModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (PlayerPositionModel);


/***/ }),

/***/ "./src/models/step-trajectory.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__ = __webpack_require__("./src/utils/geom.utils.ts");

var Point = PIXI.Point;
var StepTrajectoryModel = /** @class */ (function () {
    function StepTrajectoryModel(l, c) {
        this.l = l;
        this.c = c;
    }
    Object.defineProperty(StepTrajectoryModel.prototype, "arcRadius", {
        get: function () {
            return 1 / Math.abs(this.c);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepTrajectoryModel.prototype, "arcCenter", {
        get: function () {
            return new Point(0, (this.c > 0) ? this.arcRadius : -this.arcRadius);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepTrajectoryModel.prototype, "pointerRotation", {
        get: function () {
            return this.l * this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepTrajectoryModel.prototype, "position", {
        get: function () {
            // TODO optimize maybe
            return this.polarPosition.cartesianPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepTrajectoryModel.prototype, "polarPosition", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["b" /* PolarPoint */]((this.c === 0) ? this.l : (2 / this.c) * Math.sin(this.l * this.c / 2), (this.l * this.c) / 2);
        },
        enumerable: true,
        configurable: true
    });
    StepTrajectoryModel.prototype.breakToSegments = function (segsCount) {
        if (segsCount === void 0) { segsCount = Math.ceil(Math.abs(this.l) / 2); }
        if (this.l === 0) {
            return [new Point()];
        }
        var result = [];
        var step = this.l / segsCount;
        for (var i = 1; i <= segsCount; i++) {
            // FIXME too inefficient
            result.push((new StepTrajectoryModel(i * step, this.c).position));
        }
        return result;
    };
    StepTrajectoryModel.prototype.clone = function () {
        return new StepTrajectoryModel(this.l, this.c);
    };
    StepTrajectoryModel.fromPolarPosition = function (pos) {
        if (pos.theta > Math.PI / 2 || pos.theta < -Math.PI / 2) {
            pos.theta -= Math.PI * Math.sign(pos.theta);
            pos.r = -pos.r;
        }
        return new StepTrajectoryModel(pos.theta * pos.r / Math.sin(pos.theta), 2 * Math.sin(pos.theta) / pos.r);
    };
    StepTrajectoryModel.fromCartesianPosition = function (pos) {
        // TODO optimize maybe
        return StepTrajectoryModel.fromPolarPosition(__WEBPACK_IMPORTED_MODULE_0__utils_geom_utils__["b" /* PolarPoint */].fromCartesian(pos));
    };
    return StepTrajectoryModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (StepTrajectoryModel);


/***/ }),

/***/ "./src/services/car.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_car_delegate__ = __webpack_require__("./src/services/http/car.delegate.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = /** @class */ (function () {
    function CarService(carDelegate) {
        this.carDelegate = carDelegate;
    }
    CarService.prototype.loadCars = function () {
        return this.carDelegate.getAllCars();
    };
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_car_delegate__["a" /* CarDelegate */]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/services/control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__ = __webpack_require__("./src/utils/math.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_step_trajectory_model__ = __webpack_require__("./src/models/step-trajectory.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_control_next_position_area__ = __webpack_require__("./src/components/control/next-position-area.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_control_next_position_arc__ = __webpack_require__("./src/components/control/next-position-arc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__consts_app_consts__ = __webpack_require__("./src/consts/app.consts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_cinematics_utils__ = __webpack_require__("./src/utils/cinematics.utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};











var Point = __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Point"];
var ControlService = /** @class */ (function () {
    function ControlService() {
        this.mousePosition = new Point();
        this.currentStepMinDistance = 0;
        this.currentStepMaxDistance = 0;
        this.currentStepMomentumDistance = 0;
        this.currentStepMaxCurvature = 0;
        this.cameraDistance = 64;
        this.cameraDistanceSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.trajectorySelected = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.isInSelectionState = false;
        // canvas texture
        this.nextStepArea = new __WEBPACK_IMPORTED_MODULE_6__components_control_next_position_area__["a" /* default */](1024 / this.controlPlaneLength);
        this.nextStepArc = new __WEBPACK_IMPORTED_MODULE_7__components_control_next_position_arc__["a" /* default */](1024 / this.controlPlaneLength);
        this.controlPlaneTextureRenderer = __WEBPACK_IMPORTED_MODULE_2_pixi_js__["autoDetectRenderer"](this.nextStepArea.areaWidth, this.nextStepArea.areaHeight, {
            antialias: true,
            resolution: 1,
            transparent: true
        });
        this.controlPlaneTextureStage = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Container"]();
        this.controlPlaneTextureStage.addChild(this.nextStepArea);
        this.controlPlaneTextureStage.addChild(this.nextStepArc);
        this.controlPlaneTexture = new __WEBPACK_IMPORTED_MODULE_1_three__["Texture"](this.controlPlaneTextureRenderer.view);
        // creating control plane
        this.controlPlane = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneGeometry"](this.controlPlaneLength, this.controlPlaneWidth, 1, 1), new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            map: this.controlPlaneTexture,
            side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"],
            transparent: true,
            depthWrite: false
        }));
        // moving plane pivot to the center of car (on the edge of plane)
        this.controlPlane.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_1_three__["Matrix4"]().makeTranslation(this.controlPlaneLength * (0.5 - this.nextStepArc.relativeCarOffset), 0, 0));
        // creating control sphere
        this.controlSphere = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](0.5), new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.nextStepArc.strokeColor,
            side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"],
            transparent: true,
            opacity: 1
        }));
        this.controlSphere.visible = false;
    }
    Object.defineProperty(ControlService.prototype, "controlPlaneWidth", {
        get: function () {
            return this.cameraDistance * 0.6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlService.prototype, "controlPlaneLength", {
        get: function () {
            return this.cameraDistance * 1.2;
        },
        enumerable: true,
        configurable: true
    });
    ControlService.prototype.initControls = function (stage3d, car) {
        var _this = this;
        this.canvas = stage3d.controlCanvas;
        this.stage3d = stage3d;
        this.car = car;
        // putting controls on stage
        stage3d.addControlElement(this.controlPlane);
        stage3d.addControlElement(this.controlSphere);
        // TODO cleanup if we already had canvas (second initControls call)
        this.canvas.addEventListener('mousemove', function (event) {
            _this.onCanvasMouseMove(event);
        });
        this.canvas.addEventListener('click', function (event) {
            _this.onCanvasMouseClick(event);
        });
        this.updateTrajectorySelector();
        this.updateCameraDistance();
    };
    ControlService.prototype.adjustControlPositions = function () {
        if (!this.car || !this.car.mesh || !this.controlPlane) {
            return;
        }
        this.controlPlane.position.set(this.car.mesh.position.x, this.car.mesh.position.y, this.car.mesh.position.z);
        this.controlPlane.rotation.set(this.car.mesh.rotation.x, this.car.mesh.rotation.y, this.car.mesh.rotation.z);
    };
    ControlService.prototype.askForSelectedPosition = function (minDistance, maxDistance, momentumDistance, maxSteeringCurvature) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var clickSubscription, safeTimeout;
            return __generator(this, function (_a) {
                this.currentStepMinDistance = minDistance;
                this.currentStepMaxDistance = maxDistance;
                this.currentStepMomentumDistance = momentumDistance;
                this.currentStepMaxCurvature = maxSteeringCurvature;
                this.isInSelectionState = true;
                this.updateTrajectorySelector();
                this.showStepArea();
                clickSubscription = this.trajectorySelected.asObservable()
                    .subscribe(function (traj) {
                    clearTimeout(safeTimeout);
                    clickSubscription.unsubscribe();
                    _this.isInSelectionState = false;
                    _this.controlSphere.visible = false;
                    _this.hideStepArea();
                    _this.hideStepCurve();
                    resolve(traj);
                });
                safeTimeout = setTimeout(function () {
                    clickSubscription.unsubscribe();
                    _this.isInSelectionState = false;
                    _this.controlSphere.visible = false;
                    _this.hideStepArea();
                    _this.hideStepCurve();
                    resolve(new __WEBPACK_IMPORTED_MODULE_5__models_step_trajectory_model__["a" /* default */](Math.max(minDistance, 0), 0)); // Math.max to not go backwards
                }, __WEBPACK_IMPORTED_MODULE_8__consts_app_consts__["a" /* default */].MOVE_TIMEOUT);
                return [2 /*return*/];
            });
        }); });
    };
    ControlService.prototype.updateCameraDistance = function () {
        var cameraDistance = Math.max(__WEBPACK_IMPORTED_MODULE_9__utils_cinematics_utils__["a" /* CinematicsUtils */].getDistanceInUniformlyAcceleratedMotion(0, this.car.characteristics.getMaxAcceleration(0), 1) / Math.tan(this.stage3d.fieldOfView * Math.PI / 720), (__WEBPACK_IMPORTED_MODULE_9__utils_cinematics_utils__["a" /* CinematicsUtils */].getDistanceInUniformlyAcceleratedMotion(this.car.speed, this.car.characteristics.getMaxAcceleration(this.car.speed), 1)) / Math.tan(this.stage3d.fieldOfView * Math.PI / 360));
        if (cameraDistance === this.cameraDistance) {
            return;
        }
        this.cameraDistance = cameraDistance;
        this.controlPlane.geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneGeometry"](this.controlPlaneLength, this.controlPlaneWidth, 1, 1);
        this.controlPlane.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_1_three__["Matrix4"]().makeTranslation(this.controlPlaneLength * (0.5 - this.nextStepArc.relativeCarOffset), 0, 0));
        this.nextStepArea.pixelsInUnit = 1024 / this.controlPlaneLength;
        this.nextStepArc.pixelsInUnit = 1024 / this.controlPlaneLength;
        this.updateControlPlaneTexture();
        this.cameraDistanceSubject.next(this.cameraDistance);
    };
    ControlService.prototype.onCanvasMouseMove = function (event) {
        var canvasRect = this.canvas.getBoundingClientRect();
        this.mousePosition = new Point(event.x - canvasRect.left, event.y - canvasRect.top);
        if (this.isInSelectionState) {
            this.updateTrajectorySelector();
        }
    };
    ControlService.prototype.onCanvasMouseClick = function (event) {
        var canvasRect = this.canvas.getBoundingClientRect();
        this.mousePosition = new Point(event.x - canvasRect.left, event.y - canvasRect.top);
        if (this.isInSelectionState) {
            var trajectory = this.updateTrajectorySelector();
            if (trajectory) {
                this.trajectorySelected.next(trajectory);
            }
        }
    };
    ControlService.prototype.updateTrajectorySelector = function () {
        var canvasRect = this.canvas.getBoundingClientRect();
        var raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        raycaster.setFromCamera({
            x: (this.mousePosition.x / canvasRect.width) * 2 - 1,
            y: -(this.mousePosition.y / canvasRect.height) * 2 + 1
        }, this.stage3d.camera);
        var intersections = raycaster.intersectObjects([this.controlPlane]);
        if (intersections.length === 0) {
            this.controlSphere.visible = false;
            this.hideStepCurve();
            return;
        }
        var trajectory = this.getTrajectoryFromControlPlaneIntersection(intersections[0]);
        if (__WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["a" /* default */].isInRange(trajectory.l, this.currentStepMinDistance, this.currentStepMaxDistance) &&
            __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["a" /* default */].isInRange(trajectory.c, -this.currentStepMaxCurvature, this.currentStepMaxCurvature)) {
            this.controlSphere.visible = true;
            this.controlSphere.position.set(intersections[0].point.x, intersections[0].point.y, intersections[0].point.z);
            this.showStepCurve(trajectory);
            return trajectory;
        }
        else {
            this.controlSphere.visible = false;
            this.hideStepCurve();
        }
        return null;
    };
    ControlService.prototype.getTrajectoryFromControlPlaneIntersection = function (intersection) {
        return __WEBPACK_IMPORTED_MODULE_5__models_step_trajectory_model__["a" /* default */].fromCartesianPosition(this.uvToLocalWorld(intersection['uv']));
    };
    ControlService.prototype.showStepArea = function () {
        this.nextStepArea.visible = true;
        this.nextStepArea.draw(this.currentStepMinDistance, this.currentStepMaxDistance, this.currentStepMomentumDistance, this.currentStepMaxCurvature);
        this.updateControlPlaneTexture();
    };
    ControlService.prototype.showStepCurve = function (trajectory) {
        this.nextStepArc.draw(trajectory);
        this.nextStepArc.visible = true;
        this.updateControlPlaneTexture();
    };
    ControlService.prototype.hideStepArea = function () {
        if (this.nextStepArea.visible) {
            this.nextStepArea.visible = false;
            this.updateControlPlaneTexture();
        }
    };
    ControlService.prototype.hideStepCurve = function () {
        if (this.nextStepArc.visible) {
            this.nextStepArc.visible = false;
            this.updateControlPlaneTexture();
        }
    };
    ControlService.prototype.updateControlPlaneTexture = function () {
        this.controlPlaneTextureRenderer.render(this.controlPlaneTextureStage);
        this.controlPlaneTexture.needsUpdate = true;
    };
    // x going forward, y to the left.
    // at car position it's (0, 0.5) for uv and (0, 0) in world
    ControlService.prototype.uvToLocalWorld = function (uvPoint) {
        return new Point((uvPoint.x - this.nextStepArc.relativeCarOffset) * this.controlPlaneLength, (uvPoint.y - 0.5) * this.controlPlaneWidth);
    };
    ControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ControlService);
    return ControlService;
}());



/***/ }),

/***/ "./src/services/gameplay.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameplayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_car_model__ = __webpack_require__("./src/models/car.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_geom_utils__ = __webpack_require__("./src/utils/geom.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__socket_service__ = __webpack_require__("./src/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_loader_service__ = __webpack_require__("./src/services/model-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__car_service__ = __webpack_require__("./src/services/car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_app_utils__ = __webpack_require__("./src/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__control_service__ = __webpack_require__("./src/services/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_car_characteristics_model__ = __webpack_require__("./src/models/car-characteristics.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_cinematics_utils__ = __webpack_require__("./src/utils/cinematics.utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};













var Point = __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Point"];
var GameplayService = /** @class */ (function () {
    function GameplayService(http, 
    // private canvasService: CanvasService,
    socketService, loginService, carService, ngZone, modelLoaderService, controlService) {
        var _this = this;
        this.http = http;
        this.socketService = socketService;
        this.loginService = loginService;
        this.carService = carService;
        this.ngZone = ngZone;
        this.modelLoaderService = modelLoaderService;
        this.controlService = controlService;
        window.onresize = function (e) {
            _this.ngZone.run(function () {
                _this.resizeCanvas(window.innerWidth, window.innerHeight);
            });
        };
    }
    GameplayService.prototype.resizeCanvas = function (newWidth, newHeight) {
        // this.canvasService.resizeCanvas(newWidth, newHeight);
        this.stage3d.resizeCanvas(newWidth, newHeight);
    };
    GameplayService.prototype.initGameplay = function (canvasContainer, stage3d, myCar) {
        return __awaiter(this, void 0, void 0, function () {
            var mapData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isWaitingPlayers = true;
                        this.isLoadingMap = true;
                        this.stage3d = stage3d;
                        this.cars = new Map();
                        this.myCarId = myCar.id;
                        this.stepsCount = 0;
                        if (!!myCar.ready) return [3 /*break*/, 2];
                        return [4 /*yield*/, myCar.initMesh(this.modelLoaderService, true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.modelLoaderService.loadMap('default-map')];
                    case 3:
                        mapData = _a.sent();
                        console.log(mapData);
                        // FIXME freaking threejs doesnt support callbacks for loaded textures. No idea how to determine when all textures are loaded
                        this.cars.set(myCar.id, myCar);
                        // const canvas: HTMLCanvasElement = this.canvasService.createCanvas(canvasContainer);
                        // this.canvasService.setMyCar(myCar);
                        this.stage3d.addCar(myCar, true);
                        this.stage3d.addMap(mapData.scene, true);
                        this.controlService.initControls(this.stage3d, myCar);
                        this.mapPolygon = mapData.polygon;
                        this.checkpoints = mapData.checkpoints;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_9__utils_app_utils__["a" /* default */].wait(1500)];
                    case 4:
                        _a.sent();
                        this.isLoadingMap = false;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_9__utils_app_utils__["a" /* default */].wait(1500)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameplayService.prototype.startGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.socketService.stepSubject.subscribe(function (data) { return _this.startNewIteration(data); });
                this.socketService.readyToStart({
                    id: this.myCarId,
                    name: this.loginService.currentUser.login
                });
                return [2 /*return*/];
            });
        });
    };
    GameplayService.prototype.startNewIteration = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _i, data_1, carPositioning, car, myCar, minRadius, maxRadius, currentSpeed, maxSteeringCurvature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stepsCount++;
                        if ((!this.myCarId && this.myCarId !== 0) || !this.cars.get(this.myCarId)) {
                            console.log('Don\'t have "myCar" for arc functionality :(');
                            return [2 /*return*/];
                        }
                        if (this.isWaitingPlayers) {
                            this.isWaitingPlayers = false;
                        }
                        _i = 0, data_1 = data;
                        _a.label = 1;
                    case 1:
                        if (!(_i < data_1.length)) return [3 /*break*/, 5];
                        carPositioning = data_1[_i];
                        car = this.cars.get(carPositioning.id);
                        if (!!car) return [3 /*break*/, 3];
                        car = new __WEBPACK_IMPORTED_MODULE_2__models_car_model__["a" /* default */](carPositioning.id, 'lambo', new __WEBPACK_IMPORTED_MODULE_11__models_car_characteristics_model__["a" /* default */](), carPositioning.x, carPositioning.y, carPositioning.rotation, 0);
                        return [4 /*yield*/, car.initMesh(this.modelLoaderService, true)];
                    case 2:
                        _a.sent();
                        this.stage3d.addCar(car);
                        this.cars.set(car.id, car);
                        _a.label = 3;
                    case 3:
                        car.setPosition(new Point(carPositioning.x, carPositioning.y));
                        car.setRotation(carPositioning.rotation);
                        car.speed = carPositioning.speed;
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        myCar = this.cars.get(this.myCarId);
                        currentSpeed = 0;
                        if (!this.mapPolygon.isContainingPoint(myCar.getPosition())) {
                            minRadius = 0;
                            maxRadius = this.getMaxDistanceOnNextStep(myCar, 0);
                            currentSpeed = 0;
                            maxSteeringCurvature = myCar.characteristics.getSteeringMaxCurvature(0);
                        }
                        else {
                            minRadius = Math.max(0, this.getMinDistanceOnNextStep(myCar));
                            maxRadius = this.getMaxDistanceOnNextStep(myCar);
                            currentSpeed = myCar.speed;
                            maxSteeringCurvature = myCar.characteristics.getSteeringMaxCurvature(myCar.speed);
                        }
                        console.log("####");
                        console.log("min speed: " + minRadius + " m/s; " + minRadius * 3.6 + " km/h");
                        console.log("max speed: " + maxRadius + " m/s; " + maxRadius * 3.6 + " km/h");
                        console.log("cur speed: " + currentSpeed + " m/s; " + currentSpeed * 3.6 + " km/h");
                        console.log("maxSteeringCurvature: " + maxSteeringCurvature);
                        // back draft
                        if (Math.abs(currentSpeed) < 0.25) {
                            minRadius = -maxRadius + Math.abs(currentSpeed);
                        }
                        this.controlService.updateCameraDistance();
                        // FIXME gold hammer (controls are updating bad without it)
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_9__utils_app_utils__["a" /* default */].sleep(50)];
                    case 6:
                        // FIXME gold hammer (controls are updating bad without it)
                        _a.sent();
                        this.controlService.askForSelectedPosition(minRadius, maxRadius, currentSpeed, maxSteeringCurvature)
                            .then(function (trajectory) {
                            var newPositionPolarPoint = trajectory.polarPosition;
                            newPositionPolarPoint.theta += myCar.rotation;
                            var newPosition = newPositionPolarPoint.cartesianPoint;
                            newPosition.x += myCar.x;
                            newPosition.y += myCar.y;
                            var newPositioningProperties = {
                                id: myCar.id,
                                x: myCar.x,
                                y: myCar.y,
                                rotation: myCar.rotation,
                                speed: myCar.speed
                            };
                            var arcPoints = trajectory.breakToSegments()
                                .map(function (arcLocalPoint) {
                                // TODO optimize. use matrix translations
                                var polar = __WEBPACK_IMPORTED_MODULE_3__utils_geom_utils__["b" /* PolarPoint */].fromCartesian(arcLocalPoint);
                                polar.theta += myCar.rotation;
                                arcLocalPoint = polar.cartesianPoint;
                                arcLocalPoint.x += myCar.x;
                                arcLocalPoint.y += myCar.y;
                                return arcLocalPoint;
                            });
                            for (var i = 0; i < arcPoints.length; i++) {
                                var trajectoryPoint = arcPoints[i];
                                if (!_this.mapPolygon.isContainingPoint(trajectoryPoint)) {
                                    var collisionPoint = _this.mapPolygon.getLinePolygonIntersection(i > 0 ? arcPoints[i - 1] : myCar.getPosition(), arcPoints[i]);
                                    // new position is not an intersection point. It is slightly (10 cm) on the track.
                                    var edgeDistance = Math.min(0.1, __WEBPACK_IMPORTED_MODULE_3__utils_geom_utils__["a" /* GeomUtils */].getDistanceBetweenPoints(myCar.getPosition(), collisionPoint));
                                    var fixVectorAngle = __WEBPACK_IMPORTED_MODULE_3__utils_geom_utils__["a" /* GeomUtils */].getAngleBetweenPoints(collisionPoint, myCar.getPosition());
                                    newPositioningProperties.speed = 0;
                                    newPositioningProperties.x = collisionPoint.x + Math.cos(fixVectorAngle) * edgeDistance;
                                    newPositioningProperties.y = collisionPoint.y + Math.sin(fixVectorAngle) * edgeDistance;
                                    if (__WEBPACK_IMPORTED_MODULE_3__utils_geom_utils__["a" /* GeomUtils */].getDistanceBetweenPoints(myCar.getPosition(), new Point(newPositioningProperties.x, newPositioningProperties.y)) > 0.01) {
                                        newPositioningProperties.rotation += i * (trajectory.pointerRotation / arcPoints.length);
                                    }
                                    _this.socketService.nextStep(newPositioningProperties);
                                    return;
                                }
                                if (_this.checkpoints && _this.checkpoints.length > 0 && __WEBPACK_IMPORTED_MODULE_3__utils_geom_utils__["a" /* GeomUtils */].getDistanceBetweenPoints(trajectoryPoint, _this.checkpoints[0].getPosition()) < _this.checkpoints[0].radius) {
                                    _this.checkpoints.shift();
                                    if (_this.checkpoints.length == 0) {
                                        _this.socketService.finished(_this.stepsCount);
                                        return;
                                    }
                                }
                            }
                            newPositioningProperties.speed = Math.max(0, __WEBPACK_IMPORTED_MODULE_12__utils_cinematics_utils__["a" /* CinematicsUtils */].getSpeedInUniformlyAcceleratedMotionByDistance(myCar.speed, trajectory.l, 1));
                            newPositioningProperties.rotation += trajectory.pointerRotation;
                            newPositioningProperties.x = newPosition.x;
                            newPositioningProperties.y = newPosition.y;
                            _this.socketService.nextStep(newPositioningProperties);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GameplayService.prototype.getMinDistanceOnNextStep = function (car, velocity) {
        if (velocity === void 0) { velocity = car.speed; }
        return __WEBPACK_IMPORTED_MODULE_12__utils_cinematics_utils__["a" /* CinematicsUtils */].getDistanceInUniformlyAcceleratedMotion(velocity, -car.characteristics.getMaxDeceleration(velocity), 1);
    };
    GameplayService.prototype.getMaxDistanceOnNextStep = function (car, velocity) {
        if (velocity === void 0) { velocity = car.speed; }
        return __WEBPACK_IMPORTED_MODULE_12__utils_cinematics_utils__["a" /* CinematicsUtils */].getDistanceInUniformlyAcceleratedMotion(velocity, car.characteristics.getMaxAcceleration(velocity), 1);
    };
    GameplayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_6__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_8__car_service__["a" /* CarService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_7__model_loader_service__["a" /* ModelLoaderService */],
            __WEBPACK_IMPORTED_MODULE_10__control_service__["a" /* ControlService */]])
    ], GameplayService);
    return GameplayService;
}());



/***/ }),

/***/ "./src/services/http/api-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consts_app_consts__ = __webpack_require__("./src/consts/app.consts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiHttpService = /** @class */ (function () {
    function ApiHttpService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__consts_app_consts__["a" /* default */].BACKEND_URL;
        this.apiHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-type': 'application/json'
        });
    }
    ApiHttpService.prototype.apiGet = function (path, params) {
        if (params === void 0) { params = null; }
        return this.apiCall(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get, path, params);
    };
    ApiHttpService.prototype.apiPost = function (path, params) {
        return this.apiCall(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, path, params);
    };
    ApiHttpService.prototype.apiCall = function (method, path, params) {
        if (params === void 0) { params = null; }
        var fullUrl = this.apiUrl;
        if (path && path.length > 0) {
            fullUrl += '/' + path;
        }
        switch (method) {
            case __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get:
                return this.get(fullUrl, params, this.apiHeaders);
            case __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post:
                return this.post(fullUrl, params && JSON.stringify(params), this.apiHeaders);
            default:
                throw new Error('Method ' + __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */][method] + 'is not supported! See HttpService');
        }
    };
    ApiHttpService.prototype.get = function (url, params, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](); }
        var options = {
            search: params,
            headers: headers
        };
        return this.http.get(url, options)
            .map(function (res) {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log('logError');
                return null;
            }
        });
    };
    ApiHttpService.prototype.post = function (url, params, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](); }
        return this.http.post(url, params, { headers: headers })
            .map(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                var res = response.json();
                try {
                    console.log(res.error);
                }
                catch (e) {
                    console.log(res);
                }
            }
        });
    };
    ApiHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ApiHttpService);
    return ApiHttpService;
}());



/***/ }),

/***/ "./src/services/http/auth-request-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRequestOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AuthRequestOptions = /** @class */ (function (_super) {
    __extends(AuthRequestOptions, _super);
    function AuthRequestOptions() {
        var _this = _super.call(this) || this;
        _this.withCredentials = true;
        return _this;
    }
    return AuthRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BaseRequestOptions */]));



/***/ }),

/***/ "./src/services/http/auth.delegate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthDelegate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_http_service__ = __webpack_require__("./src/services/http/api-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthDelegate = /** @class */ (function () {
    function AuthDelegate(apiHttpService) {
        this.apiHttpService = apiHttpService;
    }
    AuthDelegate.prototype.login = function (dto) {
        return this.apiHttpService.apiPost('auth/login/', dto);
    };
    AuthDelegate.prototype.register = function (dto) {
        return this.apiHttpService.apiPost('auth/register/', dto);
    };
    AuthDelegate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_http_service__["a" /* ApiHttpService */]])
    ], AuthDelegate);
    return AuthDelegate;
}());



/***/ }),

/***/ "./src/services/http/car.delegate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDelegate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_http_service__ = __webpack_require__("./src/services/http/api-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarDelegate = /** @class */ (function () {
    function CarDelegate(apiHttpService) {
        this.apiHttpService = apiHttpService;
    }
    CarDelegate.prototype.getAllCars = function () {
        return this.apiHttpService.apiGet('car/');
    };
    CarDelegate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_http_service__["a" /* ApiHttpService */]])
    ], CarDelegate);
    return CarDelegate;
}());



/***/ }),

/***/ "./src/services/http/lobby.delegate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LobbyDelegate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_http_service__ = __webpack_require__("./src/services/http/api-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LobbyDelegate = /** @class */ (function () {
    function LobbyDelegate(apiHttpService) {
        this.apiHttpService = apiHttpService;
    }
    LobbyDelegate.prototype.createLobby = function () {
        return this.apiHttpService.apiPost('lobby/createLobby');
    };
    LobbyDelegate.prototype.getLobbies = function () {
        return this.apiHttpService.apiGet('lobby/getLobbies');
    };
    LobbyDelegate.prototype.quickStart = function () {
        return this.apiHttpService.apiPost('lobby/quickStart');
    };
    LobbyDelegate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_http_service__["a" /* ApiHttpService */]])
    ], LobbyDelegate);
    return LobbyDelegate;
}());



/***/ }),

/***/ "./src/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_auth_delegate__ = __webpack_require__("./src/services/http/auth.delegate.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(authDelegate) {
        this.authDelegate = authDelegate;
    }
    LoginService.prototype.login = function (login, password) {
        var _this = this;
        return this.authDelegate
            .login({
            login: login,
            password: password
        })
            .map(function (user) { return _this.currentUser = user; });
    };
    LoginService.prototype.logout = function () {
        this.currentUser = null;
    };
    LoginService.prototype.createUser = function (login, password) {
        var _this = this;
        return this.authDelegate
            .register({
            login: login,
            password: password
        })
            .map(function (user) { return _this.currentUser = user; });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_auth_delegate__["a" /* AuthDelegate */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/services/model-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_collada_loader__ = __webpack_require__("./node_modules/three-collada-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_collada_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three_collada_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_map_checkpoint_model__ = __webpack_require__("./src/models/map-checkpoint.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_map_data_model__ = __webpack_require__("./src/models/map-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_map_polygon_model__ = __webpack_require__("./src/models/map-polygon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_player_position_model__ = __webpack_require__("./src/models/player-position.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};










var ModelLoaderService = /** @class */ (function () {
    function ModelLoaderService(http) {
        this.http = http;
    }
    ModelLoaderService_1 = ModelLoaderService;
    ModelLoaderService.prototype.loadCar = function (carName) {
        return __awaiter(this, void 0, void 0, function () {
            var cached, colladaScene;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cached = ModelLoaderService_1.CARS_CACHE.get(carName);
                        if (cached) {
                            console.log('Car loaded from cache');
                            return [2 /*return*/, cached.clone()];
                        }
                        return [4 /*yield*/, this.loadColladaScene("cars/" + carName + "/", 'body')];
                    case 1:
                        colladaScene = _a.sent();
                        ModelLoaderService_1.CARS_CACHE.set(carName, colladaScene.scene);
                        return [2 /*return*/, colladaScene.scene];
                }
            });
        });
    };
    ModelLoaderService.prototype.loadMap = function (mapName) {
        return __awaiter(this, void 0, void 0, function () {
            var colladaScene, checkpoints, polygon, startPositions, i, isNeedToRemove, child, checkpointMatchResult, positionMatchResult, polygonMatchResult, mesh, polygonGeometry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadColladaScene("maps/" + mapName + "/", 'scene')];
                    case 1:
                        colladaScene = _a.sent();
                        checkpoints = [];
                        polygon = new __WEBPACK_IMPORTED_MODULE_7__models_map_polygon_model__["a" /* default */]();
                        startPositions = [];
                        for (i = 0; i < colladaScene.scene.children.length; i++) {
                            isNeedToRemove = false;
                            child = colladaScene.scene.children[i];
                            if (!child.colladaId) {
                                isNeedToRemove = true;
                            }
                            else {
                                checkpointMatchResult = child.colladaId.match(__WEBPACK_IMPORTED_MODULE_5__models_map_checkpoint_model__["a" /* default */].NODE_NAME_REGEX);
                                if (checkpointMatchResult) {
                                    checkpoints[+checkpointMatchResult[1]] = __WEBPACK_IMPORTED_MODULE_5__models_map_checkpoint_model__["a" /* default */].fromDummyObject(child);
                                    isNeedToRemove = true;
                                }
                                positionMatchResult = child.colladaId.match(ModelLoaderService_1.POSITION_NODE_REGEX);
                                if (positionMatchResult) {
                                    startPositions[+positionMatchResult[1]] = new __WEBPACK_IMPORTED_MODULE_8__models_player_position_model__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](child.position.x, child.position.y), child.rotation.z);
                                    isNeedToRemove = true;
                                }
                                polygonMatchResult = child.colladaId.match(ModelLoaderService_1.POLYGON_NODE_REGEX);
                                if (polygonMatchResult) {
                                    mesh = child;
                                    while (mesh && !mesh.geometry) {
                                        mesh = mesh.children[0];
                                    }
                                    polygonGeometry = mesh.geometry;
                                    if (polygonMatchResult[1] === 'outer') {
                                        polygon.outerPolygon = polygonGeometry.vertices.map(function (vertex) { return [vertex.x, vertex.y]; });
                                    }
                                    else if (polygonMatchResult[1] === 'inner') {
                                        polygon.innerPolygons.push(polygonGeometry.vertices.map(function (vertex) { return [vertex.x, vertex.y]; }));
                                    }
                                    isNeedToRemove = true;
                                }
                            }
                            if (isNeedToRemove) {
                                colladaScene.scene.remove(child);
                                i--;
                            }
                        }
                        colladaScene.scene.traverse(function (child) {
                            if (child instanceof __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"]) {
                                // TODO create owm format and omit these hacks
                                if (child.parent && child.parent.name === 'cliffs') {
                                    // child.material = new MeshStandardMaterial();
                                    // child.material.roughness = 1;
                                    // child.material.metalness = 0;
                                    // child.material.map = new THREE.TextureLoader().load('assets/models/maps/default-map/images/2_diffuse.jpg');
                                    child.material.color = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0.68, 0.67, 0.65);
                                    // child.material.bumpMap = new THREE.TextureLoader().load('assets/models/maps/default-map/images/5_bump.jpg');
                                    child.material.bumpScale = 0.3;
                                    // child.material.aoMap = new THREE.TextureLoader().load('assets/models/maps/default-map/images/1_ambientocclusion.jpg');
                                    // child.material.specularMap = new THREE.TextureLoader().load('assets/models/maps/default-map/images/3_reflectiveocclusion.jpg');
                                }
                                else if (child.parent && child.parent.name === 'tonnels_arc') {
                                    child.material.color = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0.68, 0.67, 0.65);
                                    child.material.bumpScale = 0.25;
                                }
                                else if (child.parent && child.parent.name === 'bridge01') {
                                    child.material.color = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0.76, 0.76, 0.66);
                                    child.material.specular = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0, 0, 0);
                                    child.material.bumpScale = 0.1;
                                }
                            }
                        });
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_6__models_map_data_model__["a" /* default */](colladaScene.scene, checkpoints, polygon, startPositions)];
                }
            });
        });
    };
    ModelLoaderService.prototype.loadColladaScene = function (path, filename) {
        if (filename === void 0) { filename = 'scene'; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        //timeout for not freezing UI, there are many sync calculations
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                __WEBPACK_IMPORTED_MODULE_4_three_collada_loader__().load("" + ModelLoaderService_1.PREFIX + path + filename + ".dae", function (colladaScene) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.waitForAllContentLoaded()];
                                            case 1:
                                                _a.sent();
                                                resolve(colladaScene);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/];
                            });
                        }); }, 15);
                    })];
            });
        });
    };
    ModelLoaderService.prototype.waitForAllContentLoaded = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // TODO possibly check if nothing loading and resolve immediately
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        __WEBPACK_IMPORTED_MODULE_2_three__["DefaultLoadingManager"].onProgress = function (item, loaded, total) {
                            if (loaded === total) {
                                resolve();
                            }
                        };
                        __WEBPACK_IMPORTED_MODULE_2_three__["DefaultLoadingManager"].onError = function (item, loaded, total) {
                            reject();
                        };
                    })];
            });
        });
    };
    ModelLoaderService.PREFIX = 'assets/models/';
    ModelLoaderService.CARS_CACHE = new Map();
    ModelLoaderService.POLYGON_NODE_REGEX = /^node-maphelper_polygon_(outer|inner)$/;
    ModelLoaderService.POSITION_NODE_REGEX = /^node-maphelper_player-position_(\d+)$/;
    ModelLoaderService = ModelLoaderService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ModelLoaderService);
    return ModelLoaderService;
    var ModelLoaderService_1;
}());



/***/ }),

/***/ "./src/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_app_utils__ = __webpack_require__("./src/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consts_app_consts__ = __webpack_require__("./src/consts/app.consts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





var SocketService = /** @class */ (function () {
    function SocketService() {
        this.host = __WEBPACK_IMPORTED_MODULE_4__consts_app_consts__["a" /* default */].BACKEND_URL;
        this.stepSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.finishSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
    }
    // TODo type
    SocketService.prototype.connectToLobby = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var port, rootUrl, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // if only port received: "::5678"
                        if (url.startsWith('::')) {
                            port = +url.substr(2);
                            rootUrl = __WEBPACK_IMPORTED_MODULE_4__consts_app_consts__["a" /* default */].BACKEND_URL;
                            // check whether we already have port in our backend url
                            if (rootUrl.match(/:\d+\/?$/)) {
                                rootUrl = rootUrl.substr(0, rootUrl.lastIndexOf(':'));
                            }
                            url = rootUrl + ":" + port;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__utils_app_utils__["a" /* default */].doWithFailTimeout(new Promise(function (resolve, reject) {
                                var connectionHandler = function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    console.log('$%%%%% conn ' + _this.socket.id);
                                };
                                var disconnectHandler = function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    cleanupListeners();
                                    reject('disconnected');
                                };
                                var lobbyDataHandler = function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    console.log('$%%%%% lobbydata ' + JSON.stringify(args));
                                    cleanupListeners();
                                    resolve();
                                };
                                var addListeners = function () {
                                    _this.socket.on('connect', connectionHandler);
                                    _this.socket.on('disconnect', disconnectHandler);
                                    _this.socket.on('addedToLobby', lobbyDataHandler);
                                };
                                var cleanupListeners = function () {
                                    _this.socket.off('connect', connectionHandler);
                                    _this.socket.off('disconnect', disconnectHandler);
                                    _this.socket.off('addedToLobby', lobbyDataHandler);
                                };
                                console.log("Connecting to lobby " + url + "...");
                                _this.socket = _this.initSocket(url);
                                addListeners();
                                _this.socket.connect();
                            }), 10000)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        if (this.socket) {
                            this.socket.disconnect();
                            this.socket = null;
                            return [2 /*return*/, Promise.reject(err_1)];
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
        this.socket = null;
    };
    SocketService.prototype.readyToStart = function (data) {
        console.log('emitting readyToStart', JSON.stringify(data));
        this.carId = data.id;
        this.socket.emit('readyToStart', data);
    };
    SocketService.prototype.nextStep = function (data) {
        console.log('emitting nextStep', JSON.stringify(data));
        this.socket.emit('nextStep', data);
    };
    SocketService.prototype.finished = function (stepsCount) {
        console.log('emitting finished', {
            id: this.carId,
            stepsCount: stepsCount
        });
        this.socket.emit('finished', {
            id: this.carId,
            stepsCount: stepsCount
        });
    };
    SocketService.prototype.onStepComplete = function (data) {
        console.log('stepComplete', JSON.stringify(data));
        this.stepSubject.next(data);
    };
    SocketService.prototype.onRaceFinished = function (id) {
        console.log('raceComplete. winner?', id === this.carId);
        this.finishSubject.next(id === this.carId);
    };
    SocketService.prototype.initSocket = function (url) {
        var _this = this;
        var socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(url);
        socket.on('connect', function () {
            console.log('socket connected');
        });
        socket.on('disconnect', function () {
            console.log('socket disconnected');
        });
        socket.on('error', function (error) {
            console.log('ERROR: ', error);
        });
        socket.on('stepComplete', function (data) { return _this.onStepComplete(data); });
        socket.on('raceFinished', function (data) { return _this.onRaceFinished(data); });
        return socket;
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/utils/app.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
var AppUtils = /** @class */ (function () {
    function AppUtils() {
    }
    AppUtils.sleep = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve();
                        }, ms);
                    })];
            });
        });
    };
    AppUtils.wait = function (ms, isResolve) {
        if (isResolve === void 0) { isResolve = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (isResolve) {
                                resolve();
                            }
                            else {
                                reject('Rejected by timeout');
                            }
                        }, ms);
                    })];
            });
        });
    };
    AppUtils.doWithFailTimeout = function (promise, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.race([
                        promise,
                        AppUtils.wait(timeout, false)
                    ])];
            });
        });
    };
    return AppUtils;
}());
/* harmony default export */ __webpack_exports__["a"] = (AppUtils);


/***/ }),

/***/ "./src/utils/cinematics.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinematicsUtils; });
var CinematicsUtils = /** @class */ (function () {
    function CinematicsUtils() {
    }
    CinematicsUtils.getDistanceInUniformlyAcceleratedMotion = function (startVelocity, acceleration, time) {
        return time * (startVelocity + acceleration * time / 2);
    };
    CinematicsUtils.getAccelerationInUniformlyAcceleratedMotion = function (startVelocity, distance, time) {
        return (2 / Math.pow(time, 2)) * (distance - startVelocity * time);
    };
    CinematicsUtils.getSpeedInUniformlyAcceleratedMotionByDistance = function (startVelocity, distance, time) {
        return startVelocity + CinematicsUtils.getAccelerationInUniformlyAcceleratedMotion(startVelocity, distance, time) * time;
    };
    return CinematicsUtils;
}());



/***/ }),

/***/ "./src/utils/geom.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeomUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PolarPoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_point_in_polygon__ = __webpack_require__("./node_modules/point-in-polygon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_point_in_polygon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_point_in_polygon__);
var Point = PIXI.Point;

var GeomUtils = /** @class */ (function () {
    function GeomUtils() {
    }
    GeomUtils.getAngleBetweenPoints = function (point1, point2) {
        return Math.atan2(point2.y - point1.y, point2.x - point1.x);
    };
    GeomUtils.getDistanceBetweenPoints = function (point1, point2) {
        return Math.hypot(point2.y - point1.y, point2.x - point1.x);
    };
    GeomUtils.getMiddlePoint = function (point1, point2) {
        return new Point((point1.x + point2.x) / 2, (point1.y + point2.y) / 2);
    };
    GeomUtils.isPointInsidePolygon = function (point, polygon) {
        return __WEBPACK_IMPORTED_MODULE_0_point_in_polygon__([point.x, point.y], polygon);
    };
    return GeomUtils;
}());

var PolarPoint = /** @class */ (function () {
    function PolarPoint(r, theta) {
        this.r = r;
        this.theta = theta;
    }
    Object.defineProperty(PolarPoint.prototype, "cartesianPoint", {
        get: function () {
            return new Point(this.r * Math.cos(this.theta), this.r * Math.sin(this.theta));
        },
        enumerable: true,
        configurable: true
    });
    PolarPoint.fromCartesian = function (cartPoint, centerPoint) {
        var point = cartPoint.clone();
        if (centerPoint) {
            point.x -= centerPoint.x;
            point.y -= centerPoint.y;
        }
        return new PolarPoint(Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2)), Math.atan2(point.y, point.x));
    };
    return PolarPoint;
}());



/***/ }),

/***/ "./src/utils/math.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.isInRange = function (value, minValue, maxValue, inclusive) {
        if (inclusive === void 0) { inclusive = true; }
        return (value > minValue && value < maxValue) || (inclusive && [minValue, maxValue].indexOf(value) > -1);
    };
    MathUtils.toRange = function (value, minValue, maxValue) {
        return Math.min(Math.max(value, minValue), maxValue);
    };
    MathUtils.toNearestPowerOfTwo = function (value) {
        return Math.pow(2, Math.round(Math.log2(value)));
    };
    return MathUtils;
}());
/* harmony default export */ __webpack_exports__["a"] = (MathUtils);


/***/ }),

/***/ "./src/views/carSelection/carSelection.html":
/***/ (function(module, exports) {

module.exports = "<div>\n        <div\n          class=\"image-container\"\n          *ngFor=\"let car of carsList; let i = index\">\n          <button (click)=\"setSelectedCar(car)\">\n            <img src=\"{{car.image}}\" height=\"99\" width=\"150\">\n            {{car.name}}\n          </button>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/views/carSelection/carSelection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarSelectionView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_car_service__ = __webpack_require__("./src/services/car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarSelectionView = /** @class */ (function () {
    function CarSelectionView(carService, router) {
        this.carService = carService;
        this.router = router;
        this.selectedCar = 0;
        this.carsList = [];
    }
    CarSelectionView.prototype.ngOnInit = function () {
        this.getCars();
    };
    CarSelectionView.prototype.getCars = function () {
        var _this = this;
        this.carService.loadCars()
            .subscribe(function (data) {
            _this.carService.cars = data;
            _this.carsList = _this.carService.cars;
        }, function (error) {
            console.error(error);
        });
    };
    CarSelectionView.prototype.setSelectedCar = function (car) {
        this.carService.selectedCar = car;
        this.router.navigate(['/game']);
    };
    CarSelectionView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-car-selection',
            template: __webpack_require__("./src/views/carSelection/carSelection.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_car_service__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CarSelectionView);
    return CarSelectionView;
}());



/***/ }),

/***/ "./src/views/gameplay/gameplay.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- Stage 3D -->\n  <stage-3d #stage3d class=\"full-screen\" [class.invisible]=\"gameplayService.isLoadingMap || gameplayService.isWaitingPlayers\"></stage-3d>\n  <!-- Stage 2D -->\n  <div #canvasContainer class=\"full-screen\"\n       [class.invisible]=\"gameplayService.isLoadingMap || gameplayService.isWaitingPlayers\">\n  </div>\n  <!-- etc. -->\n  <div class=\"screen-centered-container\" *ngIf=\"gameplayService.isLoadingMap || gameplayService.isWaitingPlayers\">\n    <div>\n      <h1 class=\"loading-h\">\n        <div class=\"toolbar-title\">{{gameplayService.isLoadingMap ? 'Loading map' : 'Waiting other players'}}...</div>\n      </h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/views/gameplay/gameplay.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameplayView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gameplay_service__ = __webpack_require__("./src/services/gameplay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_car_model__ = __webpack_require__("./src/models/car.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_car_service__ = __webpack_require__("./src/services/car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__("./src/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_stage_3d_stage_3d__ = __webpack_require__("./src/components/stage-3d/stage-3d.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameplayView = /** @class */ (function () {
    function GameplayView(http, gameplayService, socketService, carService) {
        this.http = http;
        this.gameplayService = gameplayService;
        this.socketService = socketService;
        this.carService = carService;
    }
    GameplayView.prototype.ngOnInit = function () {
        var _this = this;
        var myCar = __WEBPACK_IMPORTED_MODULE_2__models_car_model__["a" /* default */].fromDTO(this.carService.selectedCar);
        this.gameplayService.initGameplay(this.canvasContainer, this.stage3d, myCar)
            .then(function () {
            _this.gameplayService.startGame();
            _this.socketService.finishSubject.subscribe(function (raceWon) {
                // this.navCtrl.push(FinishScreen, { raceWon: raceWon });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('canvasContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GameplayView.prototype, "canvasContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('stage3d'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_stage_3d_stage_3d__["a" /* Stage_3dComponent */])
    ], GameplayView.prototype, "stage3d", void 0);
    GameplayView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-gameplay',
            template: __webpack_require__("./src/views/gameplay/gameplay.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__services_gameplay_service__["a" /* GameplayService */],
            __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_3__services_car_service__["a" /* CarService */]])
    ], GameplayView);
    return GameplayView;
}());



/***/ }),

/***/ "./src/views/login/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n\n  <input  #username  id=\"username\" type=\"text\" placeholder=\"Username\"/>\n\n  <input #pass id=\"pass\" type=\"password\" placeholder=\"Password\"/>\n\n  <button ion-button outline class=\"button-login\" (click)=\"onLoginClick(username.value,pass.value)\">Log in</button>\n  <button ion-button outline class=\"button-login\" (click)=\"onFacebookLoginClick()\">Log in with facebook</button>\n  <button ion-button outline class=\"button-login\" (click)=\"onSignupClick(username.value,pass.value)\">Sign Up</button>\n\n</div>\n"

/***/ }),

/***/ "./src/views/login/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_car_service__ = __webpack_require__("./src/services/car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginView = /** @class */ (function () {
    function LoginView(loginService, carService, fb, router) {
        this.loginService = loginService;
        this.carService = carService;
        this.fb = fb;
        this.router = router;
    }
    LoginView.prototype.onLoginClick = function (login, pass) {
        var _this = this;
        this.loginService.login(login, pass)
            .subscribe(function (data) {
            _this.router.navigate(['/menu']);
        }, function (error) {
            console.error(error);
        });
    };
    LoginView.prototype.onFacebookLoginClick = function () {
        this.fb.login()
            .then(function (response) { return console.log(response); })
            .catch(function (error) { return console.error(error); });
    };
    LoginView.prototype.onSignupClick = function (login, pass) {
        console.log(login, pass);
        this.loginService.createUser(login, pass)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
        }, function (error) {
            console.error(error);
        });
    };
    LoginView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',
            template: __webpack_require__("./src/views/login/login.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__services_car_service__["a" /* CarService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__["b" /* FacebookService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], LoginView);
    return LoginView;
}());



/***/ }),

/***/ "./src/views/menu/menu.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n        <button ion-button outline class=\"button-login\" (click)=\"onPlayClick()\">Play</button>\n        <button ion-button outline class=\"button-login\" (click)=\"onSettingsClick()\">Settings</button>\n        <button ion-button outline class=\"button-login\" (click)=\"onExitClick()\">Exit</button>\n\n</div>\n\n"

/***/ }),

/***/ "./src/views/menu/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_lobby_delegate__ = __webpack_require__("./src/services/http/lobby.delegate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__("./src/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





var MenuView = /** @class */ (function () {
    function MenuView(loginService, lobbyDelegate, socketService, router) {
        this.loginService = loginService;
        this.lobbyDelegate = lobbyDelegate;
        this.socketService = socketService;
        this.router = router;
    }
    MenuView.prototype.onPlayClick = function () {
        var _this = this;
        this.lobbyDelegate.quickStart()
            .subscribe(function (lobby) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socketService.connectToLobby(lobby.serverUrl)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/selectCars']);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log("Can't connect to lobby");
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    MenuView.prototype.onSettingsClick = function () {
        // TODO: implement settings
    };
    MenuView.prototype.onExitClick = function () {
        this.loginService.logout();
    };
    MenuView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',
            template: __webpack_require__("./src/views/menu/menu.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__services_http_lobby_delegate__["a" /* LobbyDelegate */], __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MenuView);
    return MenuView;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
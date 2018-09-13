(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/avatar/fesm5/avatar.js":
/*!*************************************!*\
  !*** ./dist/avatar/fesm5/avatar.js ***!
  \*************************************/
/*! exports provided: AvatarModule, AvatarComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarModule", function() { return AvatarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var sizes = {
    S: /** @type {?} */ ('S'),
    M: /** @type {?} */ ('M'),
    L: /** @type {?} */ ('L'),
    R: /** @type {?} */ ('R'),
};
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
        this.avatarSizes = {
            S: 'a-avatar--small',
            M: 'a-avatar--medium',
            L: 'a-avatar--large',
            R: '',
        };
        this.title = '';
        this.className = '';
        this.size = sizes.R;
    }
    AvatarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-avatar',
                    template: "<div class=\"a-avatar\" [ngClass]=\"[className, avatarSizes[size]]\" [title]=\"title\">\n\t<img *ngIf=\"image\" class=\"a-avatar__image\" [alt]=\"title\" [src]=\"image\">\n\t<i *ngIf=\"icon\" class=\"a-avatar__icon\" [ngClass]=\"[icon]\"></i>\n\t<span *ngIf=\"letter\" class=\"a-avatar__letter\">{{ letter }}</span>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    AvatarComponent.propDecorators = {
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "image": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "icon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "letter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "className": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AvatarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    AvatarComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AvatarModule = /** @class */ (function () {
    function AvatarModule() {
    }
    AvatarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ],
                    declarations: [
                        Components,
                    ],
                    exports: [
                        Components,
                    ],
                },] },
    ];
    return AvatarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hdmF0YXIvbGliL2F2YXRhci9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIiwibmc6Ly9hdmF0YXIvbGliL2F2YXRhci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9hdmF0YXIvbGliL2F2YXRhci9hdmF0YXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBlbnVtIHNpemVzIHtcblx0UyA9IDxhbnk+J1MnLFxuXHRNID0gPGFueT4nTScsXG5cdEwgPSA8YW55PidMJyxcblx0UiA9IDxhbnk+J1InLFxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYXZhdGFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1hdmF0YXJcIiBbbmdDbGFzc109XCJbY2xhc3NOYW1lLCBhdmF0YXJTaXplc1tzaXplXV1cIiBbdGl0bGVdPVwidGl0bGVcIj5cblx0PGltZyAqbmdJZj1cImltYWdlXCIgY2xhc3M9XCJhLWF2YXRhcl9faW1hZ2VcIiBbYWx0XT1cInRpdGxlXCIgW3NyY109XCJpbWFnZVwiPlxuXHQ8aSAqbmdJZj1cImljb25cIiBjbGFzcz1cImEtYXZhdGFyX19pY29uXCIgW25nQ2xhc3NdPVwiW2ljb25dXCI+PC9pPlxuXHQ8c3BhbiAqbmdJZj1cImxldHRlclwiIGNsYXNzPVwiYS1hdmF0YXJfX2xldHRlclwiPnt7IGxldHRlciB9fTwvc3Bhbj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyQ29tcG9uZW50IHtcblx0cHVibGljIGF2YXRhclNpemVzID0ge1xuXHRcdFM6ICdhLWF2YXRhci0tc21hbGwnLFxuXHRcdE06ICdhLWF2YXRhci0tbWVkaXVtJyxcblx0XHRMOiAnYS1hdmF0YXItLWxhcmdlJyxcblx0XHRSOiAnJyxcblx0fTtcblxuXHRASW5wdXQoKVxuXHR0aXRsZSA9ICcnO1xuXG5cdEBJbnB1dCgpXG5cdGltYWdlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0aWNvbjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGxldHRlcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNsYXNzTmFtZSA9ICcnO1xuXG5cdEBJbnB1dCgpXG5cdHNpemU6IHNpemVzID0gc2l6ZXMuUjtcbn1cbiIsImltcG9ydCB7IEF2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyL2F2YXRhci5jb21wb25lbnQnO1xuXG5jb25zdCBDb21wb25lbnRzID0gW1xuXHRBdmF0YXJDb21wb25lbnQsXG5dO1xuXG5leHBvcnQge1xuXHRDb21wb25lbnRzLFxuXG5cdEF2YXRhckNvbXBvbmVudCxcbn07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7eUJBSVUsR0FBRzt5QkFDSCxHQUFHO3lCQUNILEdBQUc7eUJBQ0gsR0FBRzs7OzsyQkFhUztZQUNwQixDQUFDLEVBQUUsaUJBQWlCO1lBQ3BCLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGlCQUFpQjtZQUNwQixDQUFDLEVBQUUsRUFBRTtTQUNMO3FCQUdPLEVBQUU7eUJBWUUsRUFBRTtvQkFHQSxLQUFLLENBQUMsQ0FBQzs7O2dCQWpDckIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsdVVBS1Y7aUJBQ0E7Ozs7MEJBU0MsS0FBSzswQkFHTCxLQUFLO3lCQUdMLEtBQUs7MkJBR0wsS0FBSzs4QkFHTCxLQUFLO3lCQUdMLEtBQUs7OzBCQTFDUDs7Ozs7OztBQ0FBLHFCQUVNLFVBQVUsR0FBRztJQUNsQixlQUFlO0NBQ2Y7Ozs7OztBQ0pEOzs7O2dCQUtDLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsVUFBVTtxQkFDVjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTtxQkFDVjtpQkFDRDs7dUJBZkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./dist/calendar/fesm5/calendar.js":
/*!*****************************************!*\
  !*** ./dist/calendar/fesm5/calendar.js ***!
  \*****************************************/
/*! exports provided: CALENDAR_VIEW_DECENNIA, CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CalendarService, CalendarComponent, CalendarMonthComponent, CalendarYearComponent, CalendarDecenniaComponent, CALENDAR_DEFAULT_MONTH_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS, CALENDAR_MONTH_LABELS, CALENDAR_WEEKDAY_LABELS, CalendarModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_VIEW_DECENNIA", function() { return CALENDAR_VIEW_DECENNIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_VIEW_MONTH", function() { return CALENDAR_VIEW_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_VIEW_YEAR", function() { return CALENDAR_VIEW_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthComponent", function() { return CalendarMonthComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarYearComponent", function() { return CalendarYearComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDecenniaComponent", function() { return CalendarDecenniaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_DEFAULT_MONTH_LABELS", function() { return CALENDAR_DEFAULT_MONTH_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_DEFAULT_WEEKDAY_LABELS", function() { return CALENDAR_DEFAULT_WEEKDAY_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_MONTH_LABELS", function() { return CALENDAR_MONTH_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_WEEKDAY_LABELS", function() { return CALENDAR_WEEKDAY_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/js-date-utils */ "./node_modules/@acpaas-ui/js-date-utils/acpaas-ui-js-date-utils.cjs.js");
/* harmony import */ var _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CALENDAR_VIEW_MONTH = 'CALENDAR_VIEW_MONTH';
var /** @type {?} */ CALENDAR_VIEW_YEAR = 'CALENDAR_VIEW_YEAR';
var /** @type {?} */ CALENDAR_VIEW_DECENNIA = 'CALENDAR_VIEW_DECENNIA';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarService = /** @class */ (function () {
    function CalendarService() {
        this.months = {};
    }
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    CalendarService.prototype.getMonth = /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    function (month, year) {
        if (year) {
            if (this.currentYear !== year) {
                this.months = {};
            }
            this.currentYear = year;
        }
        if (this.months.hasOwnProperty(month)) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.months[month]);
        }
        var /** @type {?} */ date = new Date();
        date.setMonth(month, 1);
        if (year) {
            date.setFullYear(year);
        }
        var /** @type {?} */ generatedMonth = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateMonth(date, { startOfWeek: 1, padding: true, generatePadding: true });
        this.months[month] = generatedMonth;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(generatedMonth);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarService.prototype.getMonthForDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getMonth(date.getMonth(), date.getFullYear());
    };
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    CalendarService.prototype.getRangeForDate = /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    function (date, range) {
        return _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateRange(date, range, { startOfWeek: 1 });
    };
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    CalendarService.prototype.getRangesForDate = /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    function (date, range) {
        var /** @type {?} */ rangeOptions = { startOfWeek: 1 };
        var /** @type {?} */ before = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateMonth(date, date.getMonth() - 1);
        var /** @type {?} */ after = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateMonth(date, date.getMonth() + 1);
        return {
            before: _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateRange(before, range, rangeOptions),
            current: _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateRange(date, range, rangeOptions),
            after: _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateRange(after, range, rangeOptions),
        };
    };
    /**
     * @param {?=} date
     * @param {?=} range
     * @return {?}
     */
    CalendarService.prototype.getClosestDateForRange = /**
     * @param {?=} date
     * @param {?=} range
     * @return {?}
     */
    function (date, range) {
        if (date === void 0) { date = new Date(); }
        var /** @type {?} */ dateRange = this.getRangeForDate(date, range);
        if (_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].dateOutOfRange(date, dateRange)) {
            return date;
        }
        return _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].closestDateForRange(date, dateRange);
    };
    CalendarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return CalendarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CALENDAR_DEFAULT_WEEKDAY_LABELS = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
];
var /** @type {?} */ CALENDAR_DEFAULT_MONTH_LABELS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
var /** @type {?} */ CALENDAR_WEEKDAY_LABELS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('weekdayLabels');
var /** @type {?} */ CALENDAR_MONTH_LABELS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('monthLabels');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(moduleMonthLabels, moduleWeekdayLabels, calendarService) {
        if (moduleMonthLabels === void 0) { moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS; }
        if (moduleWeekdayLabels === void 0) { moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS; }
        this.moduleMonthLabels = moduleMonthLabels;
        this.moduleWeekdayLabels = moduleWeekdayLabels;
        this.calendarService = calendarService;
        this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.CALENDAR_VIEW_MONTH = CALENDAR_VIEW_MONTH;
        this.CALENDAR_VIEW_YEAR = CALENDAR_VIEW_YEAR;
        this.CALENDAR_VIEW_DECENNIA = CALENDAR_VIEW_DECENNIA;
        this.activeView = CALENDAR_VIEW_MONTH;
        this.headerLabel = '';
    }
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
        this.monthLabels = this.monthLabels || this.moduleMonthLabels;
        this.activeDate = this.calendarService.getClosestDateForRange(this.activeDate, this.range);
        this.updateHeaderLabel();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ selectedDate = changes["selectedDate"] && changes["selectedDate"].currentValue ? changes["selectedDate"] : null;
        if (typeof this.monthLabels !== 'undefined' &&
            selectedDate &&
            !_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].datesAreEqual(selectedDate.currentValue, selectedDate.previousValue)) {
            this.activeDate = this.selectedDate;
            this.updateHeaderLabel();
        }
    };
    /**
     * @param {?=} factor
     * @return {?}
     */
    CalendarComponent.prototype.updateActiveDate = /**
     * @param {?=} factor
     * @return {?}
     */
    function (factor) {
        if (factor === void 0) { factor = 0; }
        if (factor === 0) {
            return;
        }
        var /** @type {?} */ activeDate = this.activeDate ? new Date(this.activeDate) : new Date();
        switch (this.activeView) {
            case CALENDAR_VIEW_MONTH:
                activeDate.setMonth(activeDate.getMonth() + factor);
                break;
            case CALENDAR_VIEW_YEAR:
                activeDate.setFullYear(activeDate.getFullYear() + factor);
                break;
            case CALENDAR_VIEW_DECENNIA:
                activeDate.setFullYear(activeDate.getFullYear() + (12 * factor));
                break;
        }
        this.activeDate = activeDate;
        this.updateHeaderLabel();
    };
    /**
     * @param {?=} factor
     * @return {?}
     */
    CalendarComponent.prototype.switchView = /**
     * @param {?=} factor
     * @return {?}
     */
    function (factor) {
        if (factor === void 0) { factor = 1; }
        var /** @type {?} */ views = [CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CALENDAR_VIEW_DECENNIA];
        var /** @type {?} */ currView = views.indexOf(this.activeView);
        var /** @type {?} */ nextView = (currView + factor) >= views.length ? 0 : currView + factor;
        nextView = nextView < 0 ? views.length - 1 : nextView;
        this.activeView = views[nextView];
        // reset activeDate when returning to month view without model update
        if (this.selectedDate && nextView === 0 && factor === 1) {
            this.activeDate = this.selectedDate;
        }
        this.updateHeaderLabel();
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updateHeaderLabel = /**
     * @return {?}
     */
    function () {
        switch (this.activeView) {
            case CALENDAR_VIEW_MONTH:
                this.headerLabel = this.monthLabels[this.activeDate.getMonth()] + ' ' + this.activeDate.getFullYear();
                break;
            case CALENDAR_VIEW_YEAR:
                this.headerLabel = String(this.activeDate.getFullYear());
                break;
            case CALENDAR_VIEW_DECENNIA:
                var /** @type {?} */ startYear = this.activeDate.getFullYear();
                this.headerLabel = startYear + " - " + (startYear + 11);
                break;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.pickDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ complete = this.activeView === CALENDAR_VIEW_MONTH;
        this.selectDate.emit({
            date: date,
            complete: complete,
        });
        if (!complete) {
            this.activeDate = date;
            this.switchView(-1);
        }
    };
    CalendarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'aui-calendar',
                    template: "<div class=\"m-datepicker__nav\">\n    <button tabindex=\"-1\" type=\"button\" aria-label=\"vorige maand\" class=\"a-button has-icon\" (click)=\"updateActiveDate(-1)\">\n        <i class=\"fa fa-angle-left\"></i>\n    </button>\n\n    <button tabindex=\"0\" type=\"button\" class=\"m-datepicker__title a-button\" (click)=\"switchView()\">\n        {{ headerLabel | titlecase }}\n    </button>\n\n    <button tabindex=\"0\" type=\"button\" aria-label=\"volgende maand\" class=\"a-button has-icon\" (click)=\"updateActiveDate(1)\">\n        <i class=\"fa fa-angle-right\"></i>\n    </button>\n</div>\n\n<aui-calendar-month\n    *ngIf=\"activeView === CALENDAR_VIEW_MONTH\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    [range]=\"range\"\n    [weekdayLabels]=\"weekdayLabels\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-month>\n<aui-calendar-year\n    *ngIf=\"activeView === CALENDAR_VIEW_YEAR\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    [monthLabels]=\"monthLabels\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-year>\n<aui-calendar-decennia\n    *ngIf=\"activeView === CALENDAR_VIEW_DECENNIA\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-decennia>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CALENDAR_MONTH_LABELS,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CALENDAR_WEEKDAY_LABELS,] },] },
        { type: CalendarService, },
    ]; };
    CalendarComponent.propDecorators = {
        "selectedDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "range": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "weekdayLabels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "monthLabels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "selectDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDecenniaComponent = /** @class */ (function () {
    function CalendarDecenniaComponent() {
        this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.years = [];
        this.selectedYear = -1;
        this.current = -1;
    }
    /**
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ current = new Date();
        this.current = current.getFullYear();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ currentValue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, 'activeDate.currentValue');
        var /** @type {?} */ previousValue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, 'activeDate.previousValue');
        var /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        var /** @type {?} */ previousYear = previousValue instanceof Date ? previousValue.getFullYear() : -1;
        var /** @type {?} */ outOfRange = previousYear > currentYear || previousYear + 11 < currentYear;
        if (currentYear >= 0 && outOfRange) {
            this.updateYears();
        }
        this.selectedYear = this.selectedDate instanceof Date ? this.selectedDate.getFullYear() : -1;
    };
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    function (event, date) {
        event.stopPropagation();
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate.setFullYear(date);
        this.selectDate.emit(selectedDate);
    };
    /**
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.updateYears = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ years = [];
        var /** @type {?} */ activeYear = this.activeDate.getFullYear();
        for (var /** @type {?} */ i = activeYear; i < activeYear + 12; i += 1) {
            years.push(i);
        }
        this.years = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["chunk"])(years, 4);
    };
    CalendarDecenniaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'aui-calendar-decennia',
                    template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of years\">\n            <td *ngFor=\"let year of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': year === current,\n                    'is-selected': year === selectedYear\n                }\" (click)=\"pickDate($event, year)\">\n                    {{ year }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarDecenniaComponent.propDecorators = {
        "selectedDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "selectDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CalendarDecenniaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarMonthComponent = /** @class */ (function () {
    function CalendarMonthComponent(moduleWeekdayLabels, calendarService) {
        if (moduleWeekdayLabels === void 0) { moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS; }
        this.moduleWeekdayLabels = moduleWeekdayLabels;
        this.calendarService = calendarService;
        this.weekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS;
        this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dates = [];
        this.selectedDay = -1;
    }
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ selectedDateChanged = this.hasChanged(changes, 'selectedDate');
        var /** @type {?} */ activeDateChanged = this.hasChanged(changes, 'activeDate');
        var /** @type {?} */ monthChanged = activeDateChanged && !_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].datesAreEqual([
            changes["activeDate"].currentValue,
            changes["activeDate"].previousValue,
        ], 'M');
        var /** @type {?} */ selectedDayChanged = this.selectedDate && this.activeDate.getMonth() === this.selectedDate.getMonth();
        this.current = this.getCurrentDate();
        this.selectedDay = selectedDayChanged ? this.selectedDate.getDate() : -1;
        var /** @type {?} */ newDates = [];
        if (selectedDateChanged || (activeDateChanged && monthChanged)) {
            newDates = this.calendarService.getMonthForDate(this.activeDate);
        }
        else {
            return;
        }
        var /** @type {?} */ range = this.calendarService.getRangesForDate(this.activeDate, this.range);
        this.dates = newDates.map(function (week) { return week.map(function (day) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, day, { available: _this.dayIsAvailable(day, range) })); }); });
    };
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    CalendarMonthComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    function (event, day) {
        event.stopPropagation(); // Stop propagation so the modal doesn't close
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        if (day.padding) {
            var /** @type {?} */ month = day.date > 20 ? -1 : 1;
            selectedDate = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateMonth(selectedDate, selectedDate.getMonth() + month);
        }
        this.selectDate.emit(_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateDate(selectedDate, day.date));
    };
    /**
     * @param {?} changes
     * @param {?} prop
     * @return {?}
     */
    CalendarMonthComponent.prototype.hasChanged = /**
     * @param {?} changes
     * @param {?} prop
     * @return {?}
     */
    function (changes, prop) {
        var /** @type {?} */ current = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, prop + ".currentValue");
        var /** @type {?} */ previous = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, prop + ".previousValue");
        var /** @type {?} */ currentValue = current instanceof Date ? current.valueOf() : 0;
        var /** @type {?} */ previousValue = previous instanceof Date ? previous.valueOf() : 0;
        return !!currentValue && currentValue !== previousValue;
    };
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.getCurrentDate = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ current = new Date();
        var /** @type {?} */ monthHasChanged = !_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].datesAreEqual([this.activeDate, current], ['M', 'Y']);
        return monthHasChanged ? -1 : current.getDate();
    };
    /**
     * @param {?} day
     * @param {?} range
     * @return {?}
     */
    CalendarMonthComponent.prototype.dayIsAvailable = /**
     * @param {?} day
     * @param {?} range
     * @return {?}
     */
    function (day, range) {
        var /** @type {?} */ dateRange = range.current;
        if (day.padding) {
            dateRange = day.date > 20 ? range.before : range.after;
        }
        return dateRange.indexOf(day.date) < 0;
    };
    CalendarMonthComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'aui-calendar-month',
                    template: "<table>\n    <thead>\n        <tr class=\"m-datepicker__days\">\n            <th *ngFor=\"let day of weekdayLabels\" title={{day}}>{{ day | slice:0:2 | titlecase }}</th>\n        </tr>\n    </thead>\n\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let week of dates\">\n            <td *ngFor=\"let day of week\">\n                <button\n                    tabindex=\"0\"\n                    type=\"button\"\n                    [ngClass]=\"{\n                        'is-faded': !day.date || day.padding,\n                        'is-selected': !day.padding && day.date === selectedDay,\n                        'is-current': !day.padding && day.date === current\n                    }\"\n                    (click)=\"pickDate($event, day)\"\n                    [disabled]=\"!day.available\"\n                >{{ day.date }}</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarMonthComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CALENDAR_WEEKDAY_LABELS,] },] },
        { type: CalendarService, },
    ]; };
    CalendarMonthComponent.propDecorators = {
        "selectedDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "range": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "weekdayLabels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "selectDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CalendarMonthComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarYearComponent = /** @class */ (function () {
    function CalendarYearComponent(moduleMonthLabels) {
        if (moduleMonthLabels === void 0) { moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS; }
        this.moduleMonthLabels = moduleMonthLabels;
        this.monthLabels = CALENDAR_DEFAULT_MONTH_LABELS;
        this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedMonth = -1;
        this.current = '';
        this.months = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarYearComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ currentValue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, 'activeDate.currentValue');
        var /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        var /** @type {?} */ selectedMonthChanged = this.selectedDate && this.selectedDate.getFullYear() === this.activeDate.getFullYear();
        var /** @type {?} */ current = new Date();
        this.current = currentYear === current.getFullYear() ? this.monthLabels[current.getMonth()] : '';
        this.selectedMonth = selectedMonthChanged ? this.selectedDate.getMonth() : -1;
        if (changes["monthLabels"]) {
            this.monthLabels = this.monthLabels || this.moduleMonthLabels;
            this.months = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["chunk"])(this.monthLabels, 4);
        }
    };
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    CalendarYearComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    function (event, date) {
        event.stopPropagation();
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateMonth(selectedDate, this.monthLabels.indexOf(date));
        this.selectDate.emit(selectedDate);
    };
    CalendarYearComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'aui-calendar-year',
                    template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of months\">\n            <td *ngFor=\"let month of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': month === current,\n                    'is-selected': month === monthLabels[selectedMonth]\n                }\" (click)=\"pickDate($event, month)\">\n                    {{ month | titlecase }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarYearComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CALENDAR_MONTH_LABELS,] },] },
    ]; };
    CalendarYearComponent.propDecorators = {
        "selectedDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "monthLabels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "selectDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CalendarYearComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CalendarComponent,
    CalendarDecenniaComponent,
    CalendarMonthComponent,
    CalendarYearComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Services = [
    CalendarService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = CALENDAR_DEFAULT_WEEKDAY_LABELS, ɵ1 = CALENDAR_DEFAULT_MONTH_LABELS;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    CalendarModule.forChild = /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    function (weekdayLabels, monthLabels) {
        return {
            ngModule: CalendarModule,
            providers: [
                CalendarService,
                { provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
            ],
        };
    };
    CalendarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    ],
                    declarations: [
                        Components,
                    ],
                    exports: [
                        Components,
                    ],
                    providers: [
                        Services,
                        { provide: CALENDAR_WEEKDAY_LABELS, useValue: ɵ0 },
                        { provide: CALENDAR_MONTH_LABELS, useValue: ɵ1 },
                    ],
                },] },
    ];
    return CalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci90eXBlcy9jYWxlbmRhci50eXBlcy50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jYWxlbmRhci5jb25mLnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jb21wb25lbnRzL2RlY2VubmlhL2RlY2VubmlhLmNvbXBvbmVudC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy95ZWFyL3llYXIuY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVSYW5nZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9WSUVXX01PTlRIID0gJ0NBTEVOREFSX1ZJRVdfTU9OVEgnO1xuZXhwb3J0IGNvbnN0IENBTEVOREFSX1ZJRVdfWUVBUiA9ICdDQUxFTkRBUl9WSUVXX1lFQVInO1xuZXhwb3J0IGNvbnN0IENBTEVOREFSX1ZJRVdfREVDRU5OSUEgPSAnQ0FMRU5EQVJfVklFV19ERUNFTk5JQSc7XG5cbmV4cG9ydCB0eXBlIFdlZWtkYXlMYWJlbHNDb25maWcgPSBzdHJpbmdbXTtcbmV4cG9ydCB0eXBlIE1vbnRoTGFiZWxzQ29uZmlnID0gc3RyaW5nW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlclJlc3VsdCB7XG5cdGRhdGU6IERhdGU7XG5cdGNvbXBsZXRlOiBCb29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZU1hcCB7XG5cdGJlZm9yZTogbnVtYmVyW107XG5cdGN1cnJlbnQ6IG51bWJlcltdO1xuXHRhZnRlcjogbnVtYmVyW107XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQgeyBEYXRlR2VuZXJhdG9yLCBEYXRlSGVscGVyLCBEYXksIE1vbnRoLCBEYXRlUmFuZ2UgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2VNYXAgfSBmcm9tICcuLi90eXBlcy9jYWxlbmRhci50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhNYXAge1xuXHRba2V5OiBudW1iZXJdOiBNb250aDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG5cdHB1YmxpYyBtb250aHM6IE1vbnRoTWFwID0ge307XG5cdHByaXZhdGUgY3VycmVudFllYXI6IG51bWJlcjtcblxuXHRnZXRNb250aChtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogTW9udGgge1xuXHRcdGlmICh5ZWFyKSB7XG5cdFx0XHRpZiAodGhpcy5jdXJyZW50WWVhciAhPT0geWVhcikge1xuXHRcdFx0XHR0aGlzLm1vbnRocyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmN1cnJlbnRZZWFyID0geWVhcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5tb250aHMuaGFzT3duUHJvcGVydHkobW9udGgpKSB7XG5cdFx0XHRyZXR1cm4gWy4uLnRoaXMubW9udGhzW21vbnRoXV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0ZGF0ZS5zZXRNb250aChtb250aCwgMSk7XG5cblx0XHRpZiAoeWVhcikge1xuXHRcdFx0ZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcblx0XHR9XG5cblx0XHRjb25zdCBnZW5lcmF0ZWRNb250aCA9IERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVNb250aChkYXRlLCB7IHN0YXJ0T2ZXZWVrOiAxLCBwYWRkaW5nOiB0cnVlLCBnZW5lcmF0ZVBhZGRpbmc6IHRydWUgfSk7XG5cblx0XHR0aGlzLm1vbnRoc1ttb250aF0gPSBnZW5lcmF0ZWRNb250aDtcblxuXHRcdHJldHVybiBbLi4uZ2VuZXJhdGVkTW9udGhdO1xuXHR9XG5cblx0Z2V0TW9udGhGb3JEYXRlKGRhdGU6IERhdGUpOiBNb250aCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TW9udGgoZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuXHR9XG5cblx0Z2V0UmFuZ2VGb3JEYXRlKGRhdGU6IERhdGUsIHJhbmdlOiBEYXRlUmFuZ2UpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVSYW5nZShkYXRlLCByYW5nZSwgeyBzdGFydE9mV2VlazogMSB9KTtcblx0fVxuXG5cdGdldFJhbmdlc0ZvckRhdGUoZGF0ZTogRGF0ZSwgcmFuZ2U6IERhdGVSYW5nZSk6IERhdGVSYW5nZU1hcCB7XG5cdFx0Y29uc3QgcmFuZ2VPcHRpb25zID0geyBzdGFydE9mV2VlazogMSB9O1xuXHRcdGNvbnN0IGJlZm9yZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoZGF0ZSwgZGF0ZS5nZXRNb250aCgpIC0gMSk7XG5cdFx0Y29uc3QgYWZ0ZXIgPSBEYXRlSGVscGVyLnVwZGF0ZU1vbnRoKGRhdGUsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGJlZm9yZTogRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGJlZm9yZSwgcmFuZ2UsIHJhbmdlT3B0aW9ucyksXG5cdFx0XHRjdXJyZW50OiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoZGF0ZSwgcmFuZ2UsIHJhbmdlT3B0aW9ucyksXG5cdFx0XHRhZnRlcjogRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGFmdGVyLCByYW5nZSwgcmFuZ2VPcHRpb25zKSxcblx0XHR9O1xuXHR9XG5cblx0Z2V0Q2xvc2VzdERhdGVGb3JSYW5nZShkYXRlOiBEYXRlID0gbmV3IERhdGUoKSwgcmFuZ2U6IERhdGVSYW5nZSk6IERhdGUge1xuXHRcdGNvbnN0IGRhdGVSYW5nZSA9IHRoaXMuZ2V0UmFuZ2VGb3JEYXRlKGRhdGUsIHJhbmdlKTtcblxuXHRcdGlmIChEYXRlSGVscGVyLmRhdGVPdXRPZlJhbmdlKGRhdGUsIGRhdGVSYW5nZSkpIHtcblx0XHRcdHJldHVybiBkYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiBEYXRlSGVscGVyLmNsb3Nlc3REYXRlRm9yUmFuZ2UoZGF0ZSwgZGF0ZVJhbmdlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlZWtkYXlMYWJlbHNDb25maWcsIE1vbnRoTGFiZWxzQ29uZmlnIH0gZnJvbSAnLi90eXBlcy9jYWxlbmRhci50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTID0gW1xuXHQnTW9uJyxcblx0J1R1ZScsXG5cdCdXZWQnLFxuXHQnVGh1Jyxcblx0J0ZyaScsXG5cdCdTYXQnLFxuXHQnU3VuJyxcbl07XG5cbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyA9IFtcblx0J0phbnVhcnknLFxuXHQnRmVicnVhcnknLFxuXHQnTWFyY2gnLFxuXHQnQXByaWwnLFxuXHQnTWF5Jyxcblx0J0p1bmUnLFxuXHQnSnVseScsXG5cdCdBdWd1c3QnLFxuXHQnU2VwdGVtYmVyJyxcblx0J09jdG9iZXInLFxuXHQnTm92ZW1iZXInLFxuXHQnRGVjZW1iZXInLFxuXTtcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX1dFRUtEQVlfTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPFdlZWtkYXlMYWJlbHNDb25maWc+KCd3ZWVrZGF5TGFiZWxzJyk7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfTU9OVEhfTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPE1vbnRoTGFiZWxzQ29uZmlnPignbW9udGhMYWJlbHMnKTtcbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZVJhbmdlLCBEYXRlSGVscGVyIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHtcblx0Q0FMRU5EQVJfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyxcblx0Q0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFNcbn0gZnJvbSAnLi4vLi4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQge1xuXHRXZWVrZGF5TGFiZWxzQ29uZmlnLFxuXHRNb250aExhYmVsc0NvbmZpZyxcblx0Q0FMRU5EQVJfVklFV19NT05USCxcblx0Q0FMRU5EQVJfVklFV19ZRUFSLFxuXHRDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXG59IGZyb20gJy4uLy4uL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX25hdlwiPlxuICAgIDxidXR0b24gdGFiaW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwidm9yaWdlIG1hYW5kXCIgY2xhc3M9XCJhLWJ1dHRvbiBoYXMtaWNvblwiIChjbGljayk9XCJ1cGRhdGVBY3RpdmVEYXRlKC0xKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fdGl0bGUgYS1idXR0b25cIiAoY2xpY2spPVwic3dpdGNoVmlldygpXCI+XG4gICAgICAgIHt7IGhlYWRlckxhYmVsIHwgdGl0bGVjYXNlIH19XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwidm9sZ2VuZGUgbWFhbmRcIiBjbGFzcz1cImEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cInVwZGF0ZUFjdGl2ZURhdGUoMSlcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48YXVpLWNhbGVuZGFyLW1vbnRoXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX01PTlRIXCJcbiAgICBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiXG4gICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgW3JhbmdlXT1cInJhbmdlXCJcbiAgICBbd2Vla2RheUxhYmVsc109XCJ3ZWVrZGF5TGFiZWxzXCJcbiAgICAoc2VsZWN0RGF0ZSk9XCJwaWNrRGF0ZSgkZXZlbnQpXCJcbj48L2F1aS1jYWxlbmRhci1tb250aD5cbjxhdWktY2FsZW5kYXIteWVhclxuICAgICpuZ0lmPVwiYWN0aXZlVmlldyA9PT0gQ0FMRU5EQVJfVklFV19ZRUFSXCJcbiAgICBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiXG4gICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgW21vbnRoTGFiZWxzXT1cIm1vbnRoTGFiZWxzXCJcbiAgICAoc2VsZWN0RGF0ZSk9XCJwaWNrRGF0ZSgkZXZlbnQpXCJcbj48L2F1aS1jYWxlbmRhci15ZWFyPlxuPGF1aS1jYWxlbmRhci1kZWNlbm5pYVxuICAgICpuZ0lmPVwiYWN0aXZlVmlldyA9PT0gQ0FMRU5EQVJfVklFV19ERUNFTk5JQVwiXG4gICAgW3NlbGVjdGVkRGF0ZV09XCJzZWxlY3RlZERhdGVcIlxuICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLWRlY2VubmlhPlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XG5cdEBJbnB1dCgpIHJhbmdlOiBEYXRlUmFuZ2U7XG5cdEBJbnB1dCgpIHdlZWtkYXlMYWJlbHM6IFdlZWtkYXlMYWJlbHNDb25maWc7XG5cdEBJbnB1dCgpIG1vbnRoTGFiZWxzOiBNb250aExhYmVsc0NvbmZpZztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIENBTEVOREFSX1ZJRVdfTU9OVEggPSBDQUxFTkRBUl9WSUVXX01PTlRIO1xuXHRwdWJsaWMgQ0FMRU5EQVJfVklFV19ZRUFSID0gQ0FMRU5EQVJfVklFV19ZRUFSO1xuXHRwdWJsaWMgQ0FMRU5EQVJfVklFV19ERUNFTk5JQSA9IENBTEVOREFSX1ZJRVdfREVDRU5OSUE7XG5cdHB1YmxpYyBhY3RpdmVEYXRlOiBEYXRlO1xuXHRwdWJsaWMgYWN0aXZlVmlldzogc3RyaW5nID0gQ0FMRU5EQVJfVklFV19NT05USDtcblx0cHVibGljIGhlYWRlckxhYmVsID0gJyc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDQUxFTkRBUl9NT05USF9MQUJFTFMpIHB1YmxpYyBtb2R1bGVNb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTLFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMpIHB1YmxpYyBtb2R1bGVXZWVrZGF5TGFiZWxzID0gQ0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUyxcblx0XHRwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlXG5cdCkge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLndlZWtkYXlMYWJlbHMgPSB0aGlzLndlZWtkYXlMYWJlbHMgfHwgdGhpcy5tb2R1bGVXZWVrZGF5TGFiZWxzO1xuXHRcdHRoaXMubW9udGhMYWJlbHMgPSB0aGlzLm1vbnRoTGFiZWxzIHx8IHRoaXMubW9kdWxlTW9udGhMYWJlbHM7XG5cdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2xvc2VzdERhdGVGb3JSYW5nZSh0aGlzLmFjdGl2ZURhdGUsIHRoaXMucmFuZ2UpO1xuXHRcdHRoaXMudXBkYXRlSGVhZGVyTGFiZWwoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBzZWxlY3RlZERhdGUgPSBjaGFuZ2VzLnNlbGVjdGVkRGF0ZSAmJiBjaGFuZ2VzLnNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWUgPyBjaGFuZ2VzLnNlbGVjdGVkRGF0ZSA6IG51bGw7XG5cblx0XHRpZiAoXG5cdFx0XHR0eXBlb2YgdGhpcy5tb250aExhYmVscyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHRcdHNlbGVjdGVkRGF0ZSAmJlxuXHRcdFx0IURhdGVIZWxwZXIuZGF0ZXNBcmVFcXVhbChzZWxlY3RlZERhdGUuY3VycmVudFZhbHVlLCBzZWxlY3RlZERhdGUucHJldmlvdXNWYWx1ZSlcblx0XHQpIHtcblx0XHRcdHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xuXHRcdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZUFjdGl2ZURhdGUoZmFjdG9yOiBudW1iZXIgPSAwKTogdm9pZCB7XG5cdFx0aWYgKGZhY3RvciA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFjdGl2ZURhdGUgPSB0aGlzLmFjdGl2ZURhdGUgPyBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpIDogbmV3IERhdGUoKTtcblxuXHRcdHN3aXRjaCAodGhpcy5hY3RpdmVWaWV3KSB7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfTU9OVEg6XG5cdFx0XHRcdGFjdGl2ZURhdGUuc2V0TW9udGgoYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgZmFjdG9yKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfWUVBUjpcblx0XHRcdFx0YWN0aXZlRGF0ZS5zZXRGdWxsWWVhcihhY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyBmYWN0b3IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ERUNFTk5JQTpcblx0XHRcdFx0YWN0aXZlRGF0ZS5zZXRGdWxsWWVhcihhY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyAoMTIgKiBmYWN0b3IpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVEYXRlID0gYWN0aXZlRGF0ZTtcblx0XHR0aGlzLnVwZGF0ZUhlYWRlckxhYmVsKCk7XG5cdH1cblxuXHRzd2l0Y2hWaWV3KGZhY3RvcjogbnVtYmVyID0gMSk6IHZvaWQge1xuXHRcdGNvbnN0IHZpZXdzID0gW0NBTEVOREFSX1ZJRVdfTU9OVEgsIENBTEVOREFSX1ZJRVdfWUVBUiwgQ0FMRU5EQVJfVklFV19ERUNFTk5JQV07XG5cblx0XHRjb25zdCBjdXJyVmlldyA9IHZpZXdzLmluZGV4T2YodGhpcy5hY3RpdmVWaWV3KTtcblx0XHRsZXQgbmV4dFZpZXcgPSAoY3VyclZpZXcgKyBmYWN0b3IpID49IHZpZXdzLmxlbmd0aCA/IDAgOiBjdXJyVmlldyArIGZhY3Rvcjtcblx0XHRuZXh0VmlldyA9IG5leHRWaWV3IDwgMCA/IHZpZXdzLmxlbmd0aCAtIDEgOiBuZXh0VmlldztcblxuXHRcdHRoaXMuYWN0aXZlVmlldyA9IHZpZXdzW25leHRWaWV3XTtcblxuXHRcdC8vIHJlc2V0IGFjdGl2ZURhdGUgd2hlbiByZXR1cm5pbmcgdG8gbW9udGggdmlldyB3aXRob3V0IG1vZGVsIHVwZGF0ZVxuXHRcdGlmICh0aGlzLnNlbGVjdGVkRGF0ZSAmJiBuZXh0VmlldyA9PT0gMCAmJiBmYWN0b3IgPT09IDEpIHtcblx0XHRcdHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xuXHRcdH1cblxuXHRcdHRoaXMudXBkYXRlSGVhZGVyTGFiZWwoKTtcblx0fVxuXG5cdHVwZGF0ZUhlYWRlckxhYmVsKCk6IHZvaWQge1xuXHRcdHN3aXRjaCAodGhpcy5hY3RpdmVWaWV3KSB7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfTU9OVEg6XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSB0aGlzLm1vbnRoTGFiZWxzW3RoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpXSArICcgJyArIHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ZRUFSOlxuXHRcdFx0XHR0aGlzLmhlYWRlckxhYmVsID0gU3RyaW5nKHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfREVDRU5OSUE6XG5cdFx0XHRcdGNvbnN0IHN0YXJ0WWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHR0aGlzLmhlYWRlckxhYmVsID0gYCR7c3RhcnRZZWFyfSAtICR7c3RhcnRZZWFyICsgMTF9YDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cGlja0RhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBsZXRlID0gdGhpcy5hY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX01PTlRIO1xuXG5cdFx0dGhpcy5zZWxlY3REYXRlLmVtaXQoe1xuXHRcdFx0ZGF0ZTogZGF0ZSxcblx0XHRcdGNvbXBsZXRlOiBjb21wbGV0ZSxcblx0XHR9KTtcblxuXHRcdGlmICghY29tcGxldGUpIHtcblx0XHRcdHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XG5cdFx0XHR0aGlzLnN3aXRjaFZpZXcoLTEpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldCwgY2h1bmsgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXItZGVjZW5uaWEnLFxuXHR0ZW1wbGF0ZTogYDx0YWJsZT5cbiAgICA8dGJvZHkgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX2NhbGVuZGFyXCI+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgeWVhcnNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgeWVhciBvZiBncm91cFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICAgJ2lzLWN1cnJlbnQnOiB5ZWFyID09PSBjdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAnaXMtc2VsZWN0ZWQnOiB5ZWFyID09PSBzZWxlY3RlZFllYXJcbiAgICAgICAgICAgICAgICB9XCIgKGNsaWNrKT1cInBpY2tEYXRlKCRldmVudCwgeWVhcilcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgeWVhciB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XG5cdEBJbnB1dCgpIGFjdGl2ZURhdGU6IERhdGU7XG5cdEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyB5ZWFycyA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWRZZWFyID0gLTE7XG5cdHB1YmxpYyBjdXJyZW50ID0gLTE7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCk7XG5cdFx0dGhpcy5jdXJyZW50ID0gY3VycmVudC5nZXRGdWxsWWVhcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGdldChjaGFuZ2VzLCAnYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUnKTtcblx0XHRjb25zdCBwcmV2aW91c1ZhbHVlID0gZ2V0KGNoYW5nZXMsICdhY3RpdmVEYXRlLnByZXZpb3VzVmFsdWUnKTtcblx0XHRjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBjdXJyZW50VmFsdWUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHRcdGNvbnN0IHByZXZpb3VzWWVhciA9IHByZXZpb3VzVmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gcHJldmlvdXNWYWx1ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdFx0Y29uc3Qgb3V0T2ZSYW5nZSA9IHByZXZpb3VzWWVhciA+IGN1cnJlbnRZZWFyIHx8IHByZXZpb3VzWWVhciArIDExIDwgY3VycmVudFllYXI7XG5cblx0XHRpZiAoY3VycmVudFllYXIgPj0gMCAmJiBvdXRPZlJhbmdlKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVllYXJzKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWxlY3RlZFllYXIgPSB0aGlzLnNlbGVjdGVkRGF0ZSBpbnN0YW5jZW9mIERhdGUgPyB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdH1cblxuXHRwaWNrRGF0ZShldmVudDogTW91c2VFdmVudCwgZGF0ZTogbnVtYmVyKSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRjb25zdCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHNlbGVjdGVkRGF0ZS5zZXRGdWxsWWVhcihkYXRlKTtcblxuXHRcdHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHNlbGVjdGVkRGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVllYXJzKCk6IHZvaWQge1xuXHRcdGNvbnN0IHllYXJzID0gW107XG5cdFx0Y29uc3QgYWN0aXZlWWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IGFjdGl2ZVllYXI7IGkgPCBhY3RpdmVZZWFyICsgMTI7IGkgKz0gMSkge1xuXHRcdFx0eWVhcnMucHVzaChpKTtcblx0XHR9XG5cblx0XHR0aGlzLnllYXJzID0gY2h1bmsoeWVhcnMsIDQpO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgRGF5LCBNb250aCwgRGF0ZVJhbmdlLCBEYXRlSGVscGVyIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlTWFwLCBXZWVrZGF5TGFiZWxzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXItbW9udGgnLFxuXHR0ZW1wbGF0ZTogYDx0YWJsZT5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fZGF5c1wiPlxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vla2RheUxhYmVsc1wiIHRpdGxlPXt7ZGF5fX0+e3sgZGF5IHwgc2xpY2U6MDoyIHwgdGl0bGVjYXNlIH19PC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuXG4gICAgPHRib2R5IGNsYXNzPVwibS1kYXRlcGlja2VyX19jYWxlbmRhclwiPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHdlZWsgb2YgZGF0ZXNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaXMtZmFkZWQnOiAhZGF5LmRhdGUgfHwgZGF5LnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXMtc2VsZWN0ZWQnOiAhZGF5LnBhZGRpbmcgJiYgZGF5LmRhdGUgPT09IHNlbGVjdGVkRGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWN1cnJlbnQnOiAhZGF5LnBhZGRpbmcgJiYgZGF5LmRhdGUgPT09IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJwaWNrRGF0ZSgkZXZlbnQsIGRheSlcIlxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWRheS5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgID57eyBkYXkuZGF0ZSB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XG5cdEBJbnB1dCgpIGFjdGl2ZURhdGU6IERhdGU7XG5cdEBJbnB1dCgpIHJhbmdlOiBEYXRlUmFuZ2U7XG5cdEBJbnB1dCgpIHdlZWtkYXlMYWJlbHM6IFdlZWtkYXlMYWJlbHNDb25maWcgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgZGF0ZXM6IE1vbnRoID0gW107XG5cdHB1YmxpYyBzZWxlY3RlZERheSA9IC0xO1xuXHRwdWJsaWMgY3VycmVudDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMpIHByaXZhdGUgbW9kdWxlV2Vla2RheUxhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdFx0cHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZVxuXHQpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy53ZWVrZGF5TGFiZWxzID0gdGhpcy53ZWVrZGF5TGFiZWxzIHx8IHRoaXMubW9kdWxlV2Vla2RheUxhYmVscztcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBzZWxlY3RlZERhdGVDaGFuZ2VkID0gdGhpcy5oYXNDaGFuZ2VkKGNoYW5nZXMsICdzZWxlY3RlZERhdGUnKTtcblx0XHRjb25zdCBhY3RpdmVEYXRlQ2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZChjaGFuZ2VzLCAnYWN0aXZlRGF0ZScpO1xuXHRcdGNvbnN0IG1vbnRoQ2hhbmdlZCA9IGFjdGl2ZURhdGVDaGFuZ2VkICYmICFEYXRlSGVscGVyLmRhdGVzQXJlRXF1YWwoW1xuXHRcdFx0Y2hhbmdlcy5hY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZSxcblx0XHRcdGNoYW5nZXMuYWN0aXZlRGF0ZS5wcmV2aW91c1ZhbHVlLFxuXHRcdF0sICdNJyk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXlDaGFuZ2VkID0gdGhpcy5zZWxlY3RlZERhdGUgJiYgdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgPT09IHRoaXMuc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XG5cblx0XHR0aGlzLmN1cnJlbnQgPSB0aGlzLmdldEN1cnJlbnREYXRlKCk7XG5cdFx0dGhpcy5zZWxlY3RlZERheSA9IHNlbGVjdGVkRGF5Q2hhbmdlZCA/IHRoaXMuc2VsZWN0ZWREYXRlLmdldERhdGUoKSA6IC0xO1xuXG5cdFx0bGV0IG5ld0RhdGVzID0gW107XG5cblx0XHRpZiAoc2VsZWN0ZWREYXRlQ2hhbmdlZCB8fCAoYWN0aXZlRGF0ZUNoYW5nZWQgJiYgbW9udGhDaGFuZ2VkKSkge1xuXHRcdFx0bmV3RGF0ZXMgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aEZvckRhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJhbmdlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0UmFuZ2VzRm9yRGF0ZSh0aGlzLmFjdGl2ZURhdGUsIHRoaXMucmFuZ2UpO1xuXG5cdFx0dGhpcy5kYXRlcyA9IG5ld0RhdGVzLm1hcCh3ZWVrID0+IHdlZWsubWFwKGRheSA9PiAoey4uLmRheSwgYXZhaWxhYmxlOiB0aGlzLmRheUlzQXZhaWxhYmxlKGRheSwgcmFuZ2UpIH0pKSk7XG5cdH1cblxuXHRwaWNrRGF0ZShldmVudDogTW91c2VFdmVudCwgZGF5OiBEYXkpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gU3RvcCBwcm9wYWdhdGlvbiBzbyB0aGUgbW9kYWwgZG9lc24ndCBjbG9zZVxuXG5cdFx0bGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cblx0XHRpZiAoZGF5LnBhZGRpbmcpIHtcblx0XHRcdGNvbnN0IG1vbnRoID0gZGF5LmRhdGUgPiAyMCA/IC0xIDogMTtcblx0XHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSArIG1vbnRoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdChEYXRlSGVscGVyLnVwZGF0ZURhdGUoc2VsZWN0ZWREYXRlLCBkYXkuZGF0ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBoYXNDaGFuZ2VkKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMsIHByb3A6IHN0cmluZyk6IEJvb2xlYW4ge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0uY3VycmVudFZhbHVlYCk7XG5cdFx0Y29uc3QgcHJldmlvdXMgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0ucHJldmlvdXNWYWx1ZWApO1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlID8gY3VycmVudC52YWx1ZU9mKCkgOiAwO1xuXHRcdGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwcmV2aW91cyBpbnN0YW5jZW9mIERhdGUgPyBwcmV2aW91cy52YWx1ZU9mKCkgOiAwO1xuXG5cdFx0cmV0dXJuICEhY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZSAhPT0gcHJldmlvdXNWYWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q3VycmVudERhdGUoKTogbnVtYmVyIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBtb250aEhhc0NoYW5nZWQgPSAhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKFxuXHRcdFx0W3RoaXMuYWN0aXZlRGF0ZSwgY3VycmVudF0sXG5cdFx0XHRbJ00nLCAnWSddXG5cdFx0KTtcblxuXHRcdHJldHVybiBtb250aEhhc0NoYW5nZWQgPyAtMSA6IGN1cnJlbnQuZ2V0RGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBkYXlJc0F2YWlsYWJsZShkYXk6IERheSwgcmFuZ2U6IERhdGVSYW5nZU1hcCk6IEJvb2xlYW4ge1xuXHRcdGxldCBkYXRlUmFuZ2UgPSByYW5nZS5jdXJyZW50O1xuXG5cdFx0aWYgKGRheS5wYWRkaW5nKSB7XG5cdFx0XHRkYXRlUmFuZ2UgPSBkYXkuZGF0ZSA+IDIwID8gcmFuZ2UuYmVmb3JlIDogcmFuZ2UuYWZ0ZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGVSYW5nZS5pbmRleE9mKGRheS5kYXRlKSA8IDA7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQsIGNodW5rIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IENBTEVOREFSX01PTlRIX0xBQkVMUywgQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMgfSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7IE1vbnRoTGFiZWxzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXIteWVhcicsXG5cdHRlbXBsYXRlOiBgPHRhYmxlPlxuICAgIDx0Ym9keSBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fY2FsZW5kYXJcIj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiBtb250aHNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgbW9udGggb2YgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogbW9udGggPT09IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICdpcy1zZWxlY3RlZCc6IG1vbnRoID09PSBtb250aExhYmVsc1tzZWxlY3RlZE1vbnRoXVxuICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwicGlja0RhdGUoJGV2ZW50LCBtb250aClcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbW9udGggfCB0aXRsZWNhc2UgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJZZWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBtb250aExhYmVsczogTW9udGhMYWJlbHNDb25maWcgPSBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHNlbGVjdGVkTW9udGggPSAtMTtcblx0cHVibGljIGN1cnJlbnQgPSAnJztcblx0cHVibGljIG1vbnRoczogQXJyYXk8c3RyaW5nW10+ID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDQUxFTkRBUl9NT05USF9MQUJFTFMpIHB1YmxpYyBtb2R1bGVNb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTXG5cdCkge31cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gZ2V0KGNoYW5nZXMsICdhY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZScpO1xuXHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IGN1cnJlbnRWYWx1ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRNb250aENoYW5nZWQgPSB0aGlzLnNlbGVjdGVkRGF0ZSAmJiB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblxuXHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnRZZWFyID09PSBjdXJyZW50LmdldEZ1bGxZZWFyKCkgPyB0aGlzLm1vbnRoTGFiZWxzW2N1cnJlbnQuZ2V0TW9udGgoKV0gOiAnJztcblxuXHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IHNlbGVjdGVkTW9udGhDaGFuZ2VkID8gdGhpcy5zZWxlY3RlZERhdGUuZ2V0TW9udGgoKSA6IC0xO1xuXG5cdFx0aWYgKGNoYW5nZXMubW9udGhMYWJlbHMpIHtcblx0XHRcdHRoaXMubW9udGhMYWJlbHMgPSB0aGlzLm1vbnRoTGFiZWxzIHx8IHRoaXMubW9kdWxlTW9udGhMYWJlbHM7XG5cdFx0XHR0aGlzLm1vbnRocyA9IGNodW5rKHRoaXMubW9udGhMYWJlbHMsIDQpO1xuXHRcdH1cblx0fVxuXG5cdHBpY2tEYXRlKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRlOiBzdHJpbmcpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCB0aGlzLm1vbnRoTGFiZWxzLmluZGV4T2YoZGF0ZSkpO1xuXG5cdFx0dGhpcy5zZWxlY3REYXRlLmVtaXQoc2VsZWN0ZWREYXRlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50IH0gZnJvbSAnLi9kZWNlbm5pYS9kZWNlbm5pYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aENvbXBvbmVudCB9IGZyb20gJy4vbW9udGgvbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyWWVhckNvbXBvbmVudCB9IGZyb20gJy4veWVhci95ZWFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7XG5cdENhbGVuZGFyQ29tcG9uZW50LFxuXHRDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50LFxuXHRDYWxlbmRhck1vbnRoQ29tcG9uZW50LFxuXHRDYWxlbmRhclllYXJDb21wb25lbnQsXG59O1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0Q2FsZW5kYXJDb21wb25lbnQsXG5cdENhbGVuZGFyRGVjZW5uaWFDb21wb25lbnQsXG5cdENhbGVuZGFyTW9udGhDb21wb25lbnQsXG5cdENhbGVuZGFyWWVhckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdENhbGVuZGFyU2VydmljZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuXG5pbXBvcnQge1xuXHRDQUxFTkRBUl9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMU1xufSBmcm9tICcuL2NhbGVuZGFyLmNvbmYnO1xuaW1wb3J0IHsgV2Vla2RheUxhYmVsc0NvbmZpZywgTW9udGhMYWJlbHNDb25maWcgfSBmcm9tICcuL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTZXJ2aWNlcyxcblx0XHR7IHByb3ZpZGU6IENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLCB1c2VWYWx1ZTogQ0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUyB9LFxuXHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfTU9OVEhfTEFCRUxTLCB1c2VWYWx1ZTogQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0d2Vla2RheUxhYmVsczogV2Vla2RheUxhYmVsc0NvbmZpZyxcblx0XHRtb250aExhYmVsczogTW9udGhMYWJlbHNDb25maWdcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDYWxlbmRhck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRDYWxlbmRhclNlcnZpY2UsXG5cdFx0XHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIHVzZVZhbHVlOiB3ZWVrZGF5TGFiZWxzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfTU9OVEhfTEFCRUxTLCB1c2VWYWx1ZTogbW9udGhMYWJlbHMgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxxQkFBYSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztBQUN6RCxxQkFBYSxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztBQUN2RCxxQkFBYSxzQkFBc0IsR0FBRyx3QkFBd0I7Ozs7Ozs7O3NCQ1FuQyxFQUFFOzs7Ozs7O0lBRzVCLGtDQUFROzs7OztJQUFSLFVBQVMsS0FBYSxFQUFFLElBQWE7UUFDcEMsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO2dCQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzthQUNqQjtZQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QyxnQkFBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1NBQy9CO1FBRUQscUJBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEIsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQscUJBQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVB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

/***/ }),

/***/ "./dist/code-snippet/fesm5/code-snippet.js":
/*!*************************************************!*\
  !*** ./dist/code-snippet/fesm5/code-snippet.js ***!
  \*************************************************/
/*! exports provided: CodeSnippetModule, CodeSnippetComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetModule", function() { return CodeSnippetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetComponent", function() { return CodeSnippetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-highlight-js */ "./node_modules/angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ marked = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
var CodeSnippetComponent = /** @class */ (function () {
    function CodeSnippetComponent(platformId, el, highlightJsService) {
        this.platformId = platformId;
        this.el = el;
        this.highlightJsService = highlightJsService;
        this.setClass = true;
        this.processMarkdown = false;
        this.scrollable = true;
    }
    /**
     * @return {?}
     */
    CodeSnippetComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.processMarkdown) {
            this.codeSnippet = marked(this.codeSnippet);
        }
    };
    /**
     * @return {?}
     */
    CodeSnippetComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var /** @type {?} */ allPreEl = this.el.nativeElement.querySelectorAll('pre');
            for (var /** @type {?} */ i = 0; i < allPreEl.length; i++) {
                // Add class to pre-elements in markdown files
                if (!allPreEl[i].classList.contains('a-pre')) {
                    allPreEl[i].className += ' a-pre';
                    if (this.scrollable) {
                        allPreEl[i].className += ' a-pre--scrollable';
                    }
                }
                this.highlightJsService.highlight(allPreEl[i]);
            }
        }
    };
    CodeSnippetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-code-snippet',
                    template: "<div class=\"aui-code-snippet__inner\">\n    <pre *ngIf=\"!this.processMarkdown\"><code>{{ codeSnippet }}</code></pre>\n\n    <div class=\"code-snippet-md\" [innerHTML]=\"codeSnippet\" *ngIf=\"this.processMarkdown\"></div>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CodeSnippetComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__["HighlightJsService"], },
    ]; };
    CodeSnippetComponent.propDecorators = {
        "setClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.aui-code-snippet',] },],
        "codeSnippet": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "processMarkdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CodeSnippetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CodeSnippetComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CodeSnippetModule = /** @class */ (function () {
    function CodeSnippetModule() {
    }
    CodeSnippetModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__["HighlightJsModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(Components),
                    providers: [
                        angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__["HighlightJsService"],
                    ],
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(Components),
                },] },
    ];
    return CodeSnippetModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zbmlwcGV0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb2RlLXNuaXBwZXQvbGliL2NvZGUtc25pcHBldC9jb21wb25lbnRzL2NvZGUtc25pcHBldC9jb2RlLXNuaXBwZXQuY29tcG9uZW50LnRzIiwibmc6Ly9jb2RlLXNuaXBwZXQvbGliL2NvZGUtc25pcHBldC9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9jb2RlLXNuaXBwZXQvbGliL2NvZGUtc25pcHBldC9jb2RlLXNuaXBwZXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0QWZ0ZXJWaWV3Q2hlY2tlZCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nLFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgbWFya2VkID0gcmVxdWlyZSgnbWFya2VkJyk7XG5pbXBvcnQgeyBIaWdobGlnaHRKc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1oaWdobGlnaHQtanMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY29kZS1zbmlwcGV0Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWNvZGUtc25pcHBldF9faW5uZXJcIj5cbiAgICA8cHJlICpuZ0lmPVwiIXRoaXMucHJvY2Vzc01hcmtkb3duXCI+PGNvZGU+e3sgY29kZVNuaXBwZXQgfX08L2NvZGU+PC9wcmU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29kZS1zbmlwcGV0LW1kXCIgW2lubmVySFRNTF09XCJjb2RlU25pcHBldFwiICpuZ0lmPVwidGhpcy5wcm9jZXNzTWFya2Rvd25cIj48L2Rpdj5cbjwvZGl2PlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvZGVTbmlwcGV0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktY29kZS1zbmlwcGV0Jykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGNvZGVTbmlwcGV0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHByb2Nlc3NNYXJrZG93biA9IGZhbHNlO1xuXHRASW5wdXQoKSBzY3JvbGxhYmxlID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQsXG5cdFx0cHJpdmF0ZSBlbDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGhpZ2hsaWdodEpzU2VydmljZTogSGlnaGxpZ2h0SnNTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMucHJvY2Vzc01hcmtkb3duKSB7IHRoaXMuY29kZVNuaXBwZXQgPSBtYXJrZWQodGhpcy5jb2RlU25pcHBldCk7IH1cblx0fVxuXG5cdHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGFsbFByZUVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByZUVsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vIEFkZCBjbGFzcyB0byBwcmUtZWxlbWVudHMgaW4gbWFya2Rvd24gZmlsZXNcblx0XHRcdFx0aWYgKCFhbGxQcmVFbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2EtcHJlJykpIHtcblx0XHRcdFx0XHRhbGxQcmVFbFtpXS5jbGFzc05hbWUgKz0gJyBhLXByZSc7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuXHRcdFx0XHRcdFx0YWxsUHJlRWxbaV0uY2xhc3NOYW1lICs9ICcgYS1wcmUtLXNjcm9sbGFibGUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaGlnaGxpZ2h0SnNTZXJ2aWNlLmhpZ2hsaWdodChhbGxQcmVFbFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb2RlU25pcHBldENvbXBvbmVudCB9IGZyb20gJy4vY29kZS1zbmlwcGV0L2NvZGUtc25pcHBldC5jb21wb25lbnQnO1xuXG5leHBvcnQge1xuXHRDb2RlU25pcHBldENvbXBvbmVudCxcbn07XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRDb2RlU25pcHBldENvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhpZ2hsaWdodEpzTW9kdWxlLCBIaWdobGlnaHRKc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1oaWdobGlnaHQtanMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRIaWdobGlnaHRKc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0SGlnaGxpZ2h0SnNTZXJ2aWNlLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXRNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLEFBYUEscUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQztJQW1CQyw4QkFDOEIsWUFDckIsSUFDQTtRQUZxQixlQUFVLEdBQVYsVUFBVTtRQUMvQixPQUFFLEdBQUYsRUFBRTtRQUNGLHVCQUFrQixHQUFsQixrQkFBa0I7d0JBVHVCLElBQUk7K0JBRzNCLEtBQUs7MEJBQ1YsSUFBSTtLQU10Qjs7OztJQUVHLDBDQUFXOzs7O1FBQ2pCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUFFOzs7OztJQUdwRSxpREFBa0I7Ozs7UUFDeEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9ELEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBRXpDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDN0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7b0JBQ2xDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDcEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBb0IsQ0FBQztxQkFDOUM7aUJBQ0Q7Z0JBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQztTQUNEOzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsME9BS1Y7b0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dEQVNFLE1BQU0sU0FBQyxXQUFXO2dCQTNCcEIsVUFBVTtnQkFPRixrQkFBa0I7Ozs2QkFhekIsV0FBVyxTQUFDLHdCQUF3QjtnQ0FFcEMsS0FBSztvQ0FDTCxLQUFLOytCQUNMLEtBQUs7OytCQS9CUDs7Ozs7OztBQ0FBLHFCQU1hLFVBQVUsR0FBRztJQUN6QixvQkFBb0I7Q0FDcEI7Ozs7Ozs7Ozs7Z0JDRkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGlCQUFpQjtxQkFDakI7b0JBQ0QsWUFBWSxXQUNSLFVBQVUsQ0FDYjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Ysa0JBQWtCO3FCQUNsQjtvQkFDRCxPQUFPLFdBQ0gsVUFBVSxDQUNiO2lCQUNEOzs0QkFwQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./dist/layout/fesm5/layout.js":
/*!*************************************!*\
  !*** ./dist/layout/fesm5/layout.js ***!
  \*************************************/
/*! exports provided: CookieconsentModule, COOKIE_CONSENT_CONFIG, COOKIE_CONSENT_CONFIG_ROOT, DEFAULT_CONSENT_CONFIG, CookieconsentService, FooterModule, CopyrightComponent, FooterComponent, SubFooterComponent, FooterBottomDirective, FooterContentDirective, HeaderComponent, HeaderContentDirective, HeaderLogoDirective, HeaderMenuItemDirective, HeaderModule, HEADROOMOPTIONS, HeroModule, HeroComponent, HeroCardDirective, HeroCtaDirective, PaneModule, PaneComponent, SidebarComponent, SidebarItemComponent, SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieconsentModule", function() { return CookieconsentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COOKIE_CONSENT_CONFIG", function() { return COOKIE_CONSENT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COOKIE_CONSENT_CONFIG_ROOT", function() { return COOKIE_CONSENT_CONFIG_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONSENT_CONFIG", function() { return DEFAULT_CONSENT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieconsentService", function() { return CookieconsentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function() { return CopyrightComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFooterComponent", function() { return SubFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBottomDirective", function() { return FooterBottomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContentDirective", function() { return FooterContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContentDirective", function() { return HeaderContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogoDirective", function() { return HeaderLogoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuItemDirective", function() { return HeaderMenuItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADROOMOPTIONS", function() { return HEADROOMOPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroModule", function() { return HeroModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroCardDirective", function() { return HeroCardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroCtaDirective", function() { return HeroCtaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaneModule", function() { return PaneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaneComponent", function() { return PaneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarItemComponent", function() { return SidebarItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-components/utils */ "./dist/utils/fesm5/utils.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var cookieconsent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookieconsent */ "./node_modules/cookieconsent/build/cookieconsent.min.js");
/* harmony import */ var cookieconsent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookieconsent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jsprds_headroom_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsprds/headroom.ts */ "./node_modules/@jsprds/headroom.ts/dist/headroom.esm.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DEFAULT_CONSENT_CONFIG = {
    autoInit: true,
    content: {
        message: 'We make use of cookies to ensure you get the best experience on our website.',
        dismiss: 'OK',
        link: 'Learn more',
        href: 'http://cookiepedia.co.uk/all-about-cookies',
    },
    cookie: {
        name: 'cookieconsent_status',
        path: '/',
        domain: '',
        expiryDays: 365,
    },
    elements: {
        messagelink: '<p id="cookieconsent:desc">{{message}} <a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a></p>',
        // tslint:disable-line:max-line-length
        dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="a-button cc-btn cc-dismiss">{{dismiss}}</button>',
    },
};
var /** @type {?} */ COOKIE_CONSENT_CONFIG_ROOT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cookieConsentConfigRoot');
var /** @type {?} */ COOKIE_CONSENT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cookieConsentConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CookieconsentService = /** @class */ (function () {
    function CookieconsentService(cookieConsentConfig, $window) {
        this.cookieConsentConfig = cookieConsentConfig;
        this.$window = $window;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CookieconsentService.prototype.init = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = this.cookieConsentConfig; }
        if (!config || Object.keys(config).length === 0) {
            config = DEFAULT_CONSENT_CONFIG;
        }
        if (CookieconsentService.initialized) {
            return console.warn('Cookie consent is already initialized!');
        }
        if (!this.$window || (this.$window && !this.$window.cookieconsent)) {
            return console.warn('Cookie consent is not loaded!');
        }
        this.$window.cookieconsent.initialise(Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.cookieConsentConfig, config));
    };
    CookieconsentService.initialized = false;
    CookieconsentService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CookieconsentService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COOKIE_CONSENT_CONFIG,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"],] },] },
    ]; };
    return CookieconsentService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} cookieConsentConfig
 * @return {?}
 */
function setConfig(cookieConsentConfig) {
    return Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["merge"])(DEFAULT_CONSENT_CONFIG, cookieConsentConfig);
}
var ɵ0 = DEFAULT_CONSENT_CONFIG;
var CookieconsentModule = /** @class */ (function () {
    function CookieconsentModule(config, cookieconsentService) {
        if (config === void 0) { config = DEFAULT_CONSENT_CONFIG; }
        this.cookieconsentService = cookieconsentService;
        if (config.autoInit) {
            this.cookieconsentService.init();
        }
    }
    /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    CookieconsentModule.forRoot = /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    function (cookieConsentConfig) {
        return {
            ngModule: CookieconsentModule,
            providers: [
                { provide: COOKIE_CONSENT_CONFIG_ROOT, useValue: cookieConsentConfig },
                // Merge the forRoot config with our default config (AOT proof)
                {
                    provide: COOKIE_CONSENT_CONFIG,
                    useFactory: setConfig,
                    deps: [COOKIE_CONSENT_CONFIG_ROOT],
                },
                CookieconsentService,
            ],
        };
    };
    CookieconsentModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_1__["WindowModule"],
                    ],
                    providers: [
                        CookieconsentService,
                        { provide: COOKIE_CONSENT_CONFIG, useValue: ɵ0 },
                    ],
                },] },
    ];
    /** @nocollapse */
    CookieconsentModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COOKIE_CONSENT_CONFIG,] },] },
        { type: CookieconsentService, },
    ]; };
    return CookieconsentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CopyrightComponent = /** @class */ (function () {
    function CopyrightComponent() {
        this.currentYear = new Date().getFullYear();
    }
    CopyrightComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-copyright',
                    template: "<span>&copy; {{ currentYear }} {{ domain }}</span>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CopyrightComponent.propDecorators = {
        "domain": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CopyrightComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterContentDirective = /** @class */ (function () {
    function FooterContentDirective() {
    }
    FooterContentDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiFooterContent]',
                },] },
    ];
    return FooterContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(ref) {
        this.ref = ref;
        this.isExtended = false;
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ hasCols = this.footerContent !== undefined;
        var /** @type {?} */ shouldUpdate = hasCols !== this.isExtended;
        if (shouldUpdate) {
            this.isExtended = hasCols;
            this.ref.markForCheck();
        }
    };
    FooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-footer',
                    template: "<footer class=\"aui-footer\" [ngClass]=\"{'extended': isExtended}\">\n    <ng-content select=\"[auiFooterContent]\"></ng-content>\n    <ng-content select=\"[auiFooterBottom]\"></ng-content>\n</footer>\n",
                    styles: [":host{display:block}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    FooterComponent.propDecorators = {
        "footerContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [FooterContentDirective,] },],
    };
    return FooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SubFooterComponent = /** @class */ (function () {
    function SubFooterComponent() {
        this.goToTop = function () {
            window.scrollTo(0, 0);
        };
    }
    SubFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-subfooter',
                    template: "<div class=\"o-footer\">\n    <div class=\"o-footer__label\">\n        <ng-content></ng-content>\n    </div>\n\n    <button class=\"o-footer__button a-button a-button--secondary has-icon\" (click)=\"goToTop()\">\n        <span class=\"fa fa-arrow-up\"></span>\n    </button>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    return SubFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CopyrightComponent,
    FooterComponent,
    SubFooterComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterBottomDirective = /** @class */ (function () {
    function FooterBottomDirective() {
    }
    FooterBottomDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiFooterBottom]',
                },] },
    ];
    return FooterBottomDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    FooterBottomDirective,
    FooterContentDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components, Directives),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components, Directives),
                },] },
    ];
    return FooterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderLogoDirective = /** @class */ (function () {
    function HeaderLogoDirective() {
    }
    HeaderLogoDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeaderLogo]',
                },] },
    ];
    return HeaderLogoDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderContentDirective = /** @class */ (function () {
    function HeaderContentDirective() {
        this.styleDisplay = 'block';
        this.styleHeight = '100%';
    }
    HeaderContentDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeaderContent]',
                },] },
    ];
    /** @nocollapse */
    HeaderContentDirective.propDecorators = {
        "styleDisplay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] },],
        "styleHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] },],
    };
    return HeaderContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(platformId, elementRef, ref) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.ref = ref;
        this.hasLogo = false;
        this.hasContent = false;
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.setupHeadroom = /**
     * @return {?}
     */
    function () {
        // @todo: use headroom options from injector
        var /** @type {?} */ element = this.elementRef.nativeElement.querySelector('.aui-header');
        var /** @type {?} */ head = new _jsprds_headroom_ts__WEBPACK_IMPORTED_MODULE_6__["Headroom"](element);
        return head;
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.setupHeadroom();
        }
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ hasLogo = this.logo !== undefined;
        var /** @type {?} */ hasContent = this.content !== undefined;
        var /** @type {?} */ shouldUpdate = hasLogo !== this.hasLogo || hasContent !== this.hasContent;
        if (shouldUpdate) {
            this.hasLogo = hasLogo;
            this.hasContent = hasContent;
            this.ref.markForCheck();
        }
    };
    HeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-header',
                    template: "<header class=\"o-header o-header--fixed aui-header\" [ngClass]=\"{'has-logo': hasLogo}\">\n    <ng-content select=\"[auiHeaderLogo]\"></ng-content>\n\n    <div class=\"aui-header__content-wrapper\">\n        <div class=\"aui-header__content\">\n            <ng-content select=\"[auiHeaderContent]\"></ng-content>\n        </div>\n\n        <div class=\"aui-header__menu-items\">\n            <ng-content select=\"[auiHeaderMenuItem]\"></ng-content>\n        </div>\n    </div>\n</header>\n",
                    styles: [":host{display:block}.aui-header{transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;will-change:transform}.aui-header.header--pinned{top:0}.aui-header.header--unpinned{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.aui-header.has-logo.header--unpinned{-webkit-transform:translateY(-300%);transform:translateY(-300%)}.aui-header .aui-header__content-wrapper{display:flex;flex-wrap:wrap;justify-content:flex-end;height:100%}.aui-header .aui-header__content{flex:1;height:100%}.aui-header .aui-header__menu-items{display:flex;justify-content:flex-end}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    HeaderComponent.propDecorators = {
        "logo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [HeaderLogoDirective,] },],
        "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [HeaderContentDirective,] },],
    };
    return HeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderMenuItemDirective = /** @class */ (function () {
    function HeaderMenuItemDirective() {
    }
    HeaderMenuItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeaderMenuItem]',
                },] },
    ];
    return HeaderMenuItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$1 = [
    HeaderComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives$1 = [
    HeaderContentDirective,
    HeaderLogoDirective,
    HeaderMenuItemDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$1, Directives$1),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$1, Directives$1),
                },] },
    ];
    return HeaderModule;
}());
// @todo: add forroot with headroom options

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ HEADROOMOPTIONS = {
    offset: 200,
    tolerance: 5,
    classes: {
        initial: '',
        pinned: 'header--pinned',
        unpinned: 'header--unpinned',
        top: 'header--top',
        notTop: 'header--not-top',
        bottom: 'header--bottom',
        botBottom: 'header--not-bottom',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroCtaDirective = /** @class */ (function () {
    function HeroCtaDirective() {
        this.class = 'aui-hero-cta';
    }
    HeroCtaDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeroCta]',
                },] },
    ];
    /** @nocollapse */
    HeroCtaDirective.propDecorators = {
        "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] },],
    };
    return HeroCtaDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-hero',
                    template: "<div class=\"inner\" [ngClass]=\"{'has-cta': hasCta}\">\n\t<ng-content select=\"[auiHeroCard]\"></ng-content>\n\t<ng-content select=\"[auiHeroCta]\"></ng-content>\n</div>\n",
                    styles: [":host{background:#f3f3f3;border-bottom:1px solid #b0b0b0;min-height:12rem;padding-top:4.5rem}@media screen and (min-width:45rem){:host{padding-top:1.5rem}}:host .buttons{justify-content:center;align-self:center;width:100%}:host .tabs{align-self:flex-end;width:100%;padding-bottom:1.5rem}:host .tabs .tabs-list{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}:host .tabs .tabs-list .tabs-list-item{list-style:none;margin-bottom:-1px;padding:0}@media screen and (min-width:30rem){:host .tabs .tabs-list{flex-direction:row}:host .tabs .tabs-list .tabs-list-item{margin-right:-1px}}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn{background:#f3f3f3;border:1px solid #b0b0b0;color:#081f2c;display:block;padding:.375rem 1.5rem;text-align:center;text-decoration:none;transition:background-color .2s ease-out,padding .2s ease-out}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:active:not(.active),:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:hover:not(.active),:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:visited:not(.active){text-decoration:underline}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn.active{background:#fff;font-weight:700}@media screen and (min-width:62rem){:host{padding-top:6rem;display:flex}:host .tabs .tabs-list .tabs-list-item{align-self:flex-end}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn.active{padding:.75rem 1.5rem}:host .inner{margin:0;padding:0;max-width:100%;flex:1;align-self:flex-end}:host .inner.has-cta ::ng-deep .aui-hero-card::after,:host .inner.has-cta ::ng-deep .aui-hero-card::before{content:\"\";position:absolute;bottom:-12px;border-top:13px solid rgba(0,0,0,.2)}:host .inner.has-cta ::ng-deep .aui-hero-card::before{border-left:6px solid transparent;left:-.375rem}:host .inner.has-cta ::ng-deep .aui-hero-card::after{border-right:6px solid transparent;right:-.375rem}:host .tabs{padding-bottom:0;justify-content:center}:host .tabs .tabs-list{justify-content:center}:host ::ng-deep .aui-hero-inner{padding:1.5rem}:host ::ng-deep .aui-hero-card,:host ::ng-deep .aui-hero-wrapper{display:block;margin:0 auto;width:100%;max-width:36rem}:host ::ng-deep .aui-hero-card{background-color:#fff;position:relative;text-align:center;padding:1.5rem 1.5rem .75rem}:host ::ng-deep .aui-hero-cta{background-color:#fff;width:100%;text-align:center;min-height:6rem;display:flex;justify-content:center;padding:0}}"],
                },] },
    ];
    /** @nocollapse */
    HeroComponent.propDecorators = {
        "hasCta": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [HeroCtaDirective,] },],
    };
    return HeroComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$2 = [
    HeroComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroCardDirective = /** @class */ (function () {
    function HeroCardDirective() {
        this.class = 'aui-hero-card';
    }
    HeroCardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeroCard]',
                },] },
    ];
    /** @nocollapse */
    HeroCardDirective.propDecorators = {
        "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] },],
    };
    return HeroCardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives$2 = [
    HeroCardDirective,
    HeroCtaDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroModule = /** @class */ (function () {
    function HeroModule() {
    }
    HeroModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$2, Directives$2),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$2, Directives$2),
                },] },
    ];
    return HeroModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaneComponent = /** @class */ (function () {
    function PaneComponent() {
        this.opened = false;
        this.side = 'left';
        this.backdrop = true;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PaneComponent.prototype.togglePane = /**
     * @return {?}
     */
    function () {
        (this.opened ? this.closePane() : this.openPane());
    };
    /**
     * @return {?}
     */
    PaneComponent.prototype.openPane = /**
     * @return {?}
     */
    function () {
        this.opened = true;
        this.open.emit();
    };
    /**
     * @return {?}
     */
    PaneComponent.prototype.closePane = /**
     * @return {?}
     */
    function () {
        this.opened = false;
        this.close.emit();
    };
    PaneComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-pane',
                    template: "<div class=\"m-pane aui-pane\" [ngClass]=\"{ 'm-pane--open': opened, 'm-pane--left': side === 'left', 'm-pane--right': side === 'right' }\">\n\t<ng-content></ng-content>\n</div>\n<div class=\"m-overlay m-overlay__pane is-active\" *ngIf=\"opened && backdrop\" (click)=\"closePane()\"></div>\n",
                    styles: [".m-pane{background-color:#fff;width:22.5rem;height:100%;z-index:100}.m-pane__content{height:100%;overflow-y:scroll}.m-pane--left{position:absolute;left:-22.5rem;transition:left .3s cubic-bezier(.4,0,.2,1)}.m-pane--left.m-pane--open{left:0}.m-pane--right{position:absolute;right:-22.5rem;transition:right .3s cubic-bezier(.4,0,.2,1)}.m-pane--right.m-pane--open{right:0}"],
                },] },
    ];
    /** @nocollapse */
    PaneComponent.propDecorators = {
        "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "side": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "close": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$3 = [
    PaneComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaneModule = /** @class */ (function () {
    function PaneModule() {
    }
    PaneModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$3),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$3),
                },] },
    ];
    return PaneModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.closeOnSelected = true;
        this.title = 'Onderweg';
        this.open = false;
        this.items = [];
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?=} open
     * @return {?}
     */
    SidebarComponent.prototype.toggle = /**
     * @param {?=} open
     * @return {?}
     */
    function (open) {
        if (open === void 0) { open = !this.open; }
        this.open = open;
        if (open) {
            this.opened.emit();
        }
        else {
            this.closed.emit();
        }
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.itemClicked = /**
     * @return {?}
     */
    function () {
        if (this.closeOnSelected) {
            this.toggle(false);
        }
    };
    SidebarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-sidebar',
                    template: "<div class=\"o-sidebar {{ open ? 'o-sidebar--open' : '' }}\">\n\t<div class=\"o-sidebar__header\">\n\t\t<button class=\"a-button a-button-transparent has-icon\" (click)=\"toggle(false)\">\n\t\t\t<i class=\"icon-close\"></i>\n\t\t</button>\n\t\t<h1 class=\"h6\">{{ title | uppercase }}</h1>\n\t</div>\n\t<div class=\"o-sidebar__items\">\n\t\t<aui-sidebar-item *ngFor=\"let item of items\" [item]=\"item\" (click)=\"itemClicked()\"></aui-sidebar-item>\n\t</div>\n\t<ng-content select=\".o-sidebar__footer\"></ng-content>\n</div>\n\n<div class=\"m-overlay\"\n\t*ngIf=\"open\"\n\t(click)=\"toggle(false)\">\n</div>\n",
                    styles: [".m-sidebar{height:100%;overflow:hidden;width:0;background-color:#fff;transition:width .3s cubic-bezier(.4,0,.2,1)}.m-sidebar--open{width:22.5rem}.m-sidebar__content{overflow-x:hidden;overflow-y:auto;width:22.5rem;height:100%}.m-sidebar__content--padding{padding:3rem}"],
                },] },
    ];
    /** @nocollapse */
    SidebarComponent.propDecorators = {
        "closeOnSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "closed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return SidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidebarItemComponent = /** @class */ (function () {
    function SidebarItemComponent() {
    }
    Object.defineProperty(SidebarItemComponent.prototype, "itemClassList", {
        get: /**
         * @return {?}
         */
        function () {
            return "o-sidebar__item " + Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"])(this.item, 'classList', '');
        },
        enumerable: true,
        configurable: true
    });
    SidebarItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-sidebar-item',
                    template: "<ng-container *ngIf=\"item.href\">\n\t<a href=\"{{item.href}}\" [style.border-color]=\"item.theme?.color\">\n\t\t<img *ngIf=\"item.icon\" src=\"{{item.icon}}\" />\n\t\t<h2 class=\"h5\">{{item.label}}</h2>\n\t</a>\n</ng-container>\n<ng-container *ngIf=\"item.routerLink\">\n\t<a [routerLink]=\"item.routerLink\" [style.border-color]=\"item.theme?.color\">\n\t\t<img *ngIf=\"item.icon\" src=\"{{item.icon}}\" />\n\t\t<h2 class=\"h5\">{{item.label}}</h2>\n\t</a>\n</ng-container>\n\n<ng-container *ngFor=\"let itm of item.items\">\n\t<aui-sidebar-item [item]=\"itm\"></aui-sidebar-item>\n</ng-container>\n",
                },] },
    ];
    /** @nocollapse */
    SidebarItemComponent.propDecorators = {
        "itemClassList": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] },],
        "item": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return SidebarItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$4 = [
    SidebarComponent,
    SidebarItemComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    ],
                    declarations: [
                        Components$4,
                    ],
                    exports: [
                        Components$4,
                    ],
                },] },
    ];
    return SidebarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sYXlvdXQvbGliL2Nvb2tpZS1jb25zZW50L2Nvb2tpZS1jb25zZW50LmNvbmYudHMiLCJuZzovL2xheW91dC9saWIvY29va2llLWNvbnNlbnQvc2VydmljZXMvY29va2llLWNvbnNlbnQuc2VydmljZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9jb29raWUtY29uc2VudC9jb29raWUtY29uc2VudC5tb2R1bGUudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvc3ViZm9vdGVyL3N1YmZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2RpcmVjdGl2ZXMvYm90dG9tLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9mb290ZXIvZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9mb290ZXIvZm9vdGVyLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9sb2dvLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9jb250ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9kaXJlY3RpdmVzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9oZWFkZXIubW9kdWxlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9oZWFkZXIuY29uZi50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaGVyby1jdGEuZGlyZWN0aXZlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlcm8vY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlcm8vY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaGVyby1jYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvaGVyby9oZXJvLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9wYW5lL2NvbXBvbmVudHMvcGFuZS9wYW5lLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9wYW5lL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvcGFuZS9wYW5lLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9zaWRlYmFyL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9zaWRlYmFyL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtL3NpZGViYXItaXRlbS5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvc2lkZWJhci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL3NpZGViYXIvc2lkZWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb2tpZUNvbnNlbnRDb25maWcgfSBmcm9tICcuL3R5cGVzL2Nvb2tpZS1jb25zZW50LnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09OU0VOVF9DT05GSUc6IENvb2tpZUNvbnNlbnRDb25maWcgPSB7XG5cdGF1dG9Jbml0OiB0cnVlLFxuXHRjb250ZW50OiB7XG5cdFx0bWVzc2FnZTogJ1dlIG1ha2UgdXNlIG9mIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxuXHRcdGRpc21pc3M6ICdPSycsXG5cdFx0bGluazogJ0xlYXJuIG1vcmUnLFxuXHRcdGhyZWY6ICdodHRwOi8vY29va2llcGVkaWEuY28udWsvYWxsLWFib3V0LWNvb2tpZXMnLFxuXHR9LFxuXHRjb29raWU6IHtcblx0XHRuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxuXHRcdHBhdGg6ICcvJyxcblx0XHRkb21haW46ICcnLFxuXHRcdGV4cGlyeURheXM6IDM2NSxcblx0fSxcblx0ZWxlbWVudHM6IHtcblx0XHRtZXNzYWdlbGluazogJzxwIGlkPVwiY29va2llY29uc2VudDpkZXNjXCI+e3ttZXNzYWdlfX0gPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHRhYmluZGV4PVwiMFwiIGhyZWY9XCJ7e2hyZWZ9fVwiIHRhcmdldD1cIl9ibGFua1wiPnt7bGlua319PC9hPjwvcD4nLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm1heC1saW5lLWxlbmd0aFxuXHRcdGRpc21pc3M6ICc8YnV0dG9uIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJhLWJ1dHRvbiBjYy1idG4gY2MtZGlzbWlzc1wiPnt7ZGlzbWlzc319PC9idXR0b24+Jyxcblx0fSxcbn07XG5cbmV4cG9ydCBjb25zdCBDT09LSUVfQ09OU0VOVF9DT05GSUdfUk9PVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb29raWVDb25zZW50Q29uZmlnPignY29va2llQ29uc2VudENvbmZpZ1Jvb3QnKTtcbmV4cG9ydCBjb25zdCBDT09LSUVfQ09OU0VOVF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29va2llQ29uc2VudENvbmZpZz4oJ2Nvb2tpZUNvbnNlbnRDb25maWcnKTtcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmltcG9ydCB7IENPT0tJRV9DT05TRU5UX0NPTkZJRywgREVGQVVMVF9DT05TRU5UX0NPTkZJRyB9IGZyb20gJy4uL2Nvb2tpZS1jb25zZW50LmNvbmYnO1xuaW1wb3J0IHsgQ29va2llQ29uc2VudENvbmZpZyB9IGZyb20gJy4uL3R5cGVzL2Nvb2tpZS1jb25zZW50LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvb2tpZWNvbnNlbnRTZXJ2aWNlIHtcblx0cHJpdmF0ZSBzdGF0aWMgaW5pdGlhbGl6ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPT0tJRV9DT05TRU5UX0NPTkZJRykgcHJpdmF0ZSBjb29raWVDb25zZW50Q29uZmlnLFxuXHRcdEBJbmplY3QoV0lORE9XKSBwcml2YXRlICR3aW5kb3dcblx0KSB7fVxuXG5cdGluaXQoY29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnID0gdGhpcy5jb29raWVDb25zZW50Q29uZmlnKTogdm9pZCB7XG5cdFx0aWYgKCFjb25maWcgfHwgT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGggPT09IDApIHtcblx0XHRcdGNvbmZpZyA9IERFRkFVTFRfQ09OU0VOVF9DT05GSUc7XG5cdFx0fVxuXG5cdFx0aWYgKENvb2tpZWNvbnNlbnRTZXJ2aWNlLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gY29uc29sZS53YXJuKCdDb29raWUgY29uc2VudCBpcyBhbHJlYWR5IGluaXRpYWxpemVkIScpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy4kd2luZG93IHx8ICh0aGlzLiR3aW5kb3cgJiYgIXRoaXMuJHdpbmRvdy5jb29raWVjb25zZW50KSkge1xuXHRcdFx0cmV0dXJuIGNvbnNvbGUud2FybignQ29va2llIGNvbnNlbnQgaXMgbm90IGxvYWRlZCEnKTtcblx0XHR9XG5cblx0XHR0aGlzLiR3aW5kb3cuY29va2llY29uc2VudC5pbml0aWFsaXNlKG1lcmdlKHRoaXMuY29va2llQ29uc2VudENvbmZpZywgY29uZmlnKSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBXaW5kb3dNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCAnY29va2llY29uc2VudCc7XG5cbmltcG9ydCB7IENvb2tpZWNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb29raWUtY29uc2VudC5zZXJ2aWNlJztcbmltcG9ydCB7IENPT0tJRV9DT05TRU5UX0NPTkZJR19ST09ULCBDT09LSUVfQ09OU0VOVF9DT05GSUcsIERFRkFVTFRfQ09OU0VOVF9DT05GSUcgfSBmcm9tICcuL2Nvb2tpZS1jb25zZW50LmNvbmYnO1xuaW1wb3J0IHsgQ29va2llQ29uc2VudENvbmZpZyB9IGZyb20gJy4vdHlwZXMvY29va2llLWNvbnNlbnQudHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29uZmlnKGNvb2tpZUNvbnNlbnRDb25maWc6IENvb2tpZUNvbnNlbnRDb25maWcpOiBDb29raWVDb25zZW50Q29uZmlnIHtcblx0cmV0dXJuIG1lcmdlKERFRkFVTFRfQ09OU0VOVF9DT05GSUcsIGNvb2tpZUNvbnNlbnRDb25maWcpO1xufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFdpbmRvd01vZHVsZSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Q29va2llY29uc2VudFNlcnZpY2UsXG5cdFx0eyBwcm92aWRlOiBDT09LSUVfQ09OU0VOVF9DT05GSUcsIHVzZVZhbHVlOiBERUZBVUxUX0NPTlNFTlRfQ09ORklHIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvb2tpZWNvbnNlbnRNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdChjb29raWVDb25zZW50Q29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDb29raWVjb25zZW50TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09PS0lFX0NPTlNFTlRfQ09ORklHX1JPT1QsIHVzZVZhbHVlOiBjb29raWVDb25zZW50Q29uZmlnIH0sXG5cblx0XHRcdFx0Ly8gTWVyZ2UgdGhlIGZvclJvb3QgY29uZmlnIHdpdGggb3VyIGRlZmF1bHQgY29uZmlnIChBT1QgcHJvb2YpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBDT09LSUVfQ09OU0VOVF9DT05GSUcsXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogc2V0Q29uZmlnLFxuXHRcdFx0XHRcdGRlcHM6IFtDT09LSUVfQ09OU0VOVF9DT05GSUdfUk9PVF0sXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Q29va2llY29uc2VudFNlcnZpY2UsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPT0tJRV9DT05TRU5UX0NPTkZJRykgY29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnID0gREVGQVVMVF9DT05TRU5UX0NPTkZJRyxcblx0XHRwcml2YXRlIGNvb2tpZWNvbnNlbnRTZXJ2aWNlOiBDb29raWVjb25zZW50U2VydmljZVxuXHQpIHtcblx0XHRpZiAoY29uZmlnLmF1dG9Jbml0KSB7XG5cdFx0XHR0aGlzLmNvb2tpZWNvbnNlbnRTZXJ2aWNlLmluaXQoKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1jb3B5cmlnaHQnLFxuXHR0ZW1wbGF0ZTogYDxzcGFuPiZjb3B5OyB7eyBjdXJyZW50WWVhciB9fSB7eyBkb21haW4gfX08L3NwYW4+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29weXJpZ2h0Q29tcG9uZW50IHtcblx0QElucHV0KClcblx0ZG9tYWluPzogU3RyaW5nO1xuXG5cdHB1YmxpYyBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRm9vdGVyQ29udGVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb250ZW50RGlyZWN0aXZlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudENoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvb3RlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbnRlbnQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWZvb3RlcicsXG5cdHRlbXBsYXRlOiBgPGZvb3RlciBjbGFzcz1cImF1aS1mb290ZXJcIiBbbmdDbGFzc109XCJ7J2V4dGVuZGVkJzogaXNFeHRlbmRlZH1cIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpRm9vdGVyQ29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUZvb3RlckJvdHRvbV1cIj48L25nLWNvbnRlbnQ+XG48L2Zvb3Rlcj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdEBDb250ZW50Q2hpbGQoRm9vdGVyQ29udGVudERpcmVjdGl2ZSkgZm9vdGVyQ29udGVudDogRm9vdGVyQ29udGVudERpcmVjdGl2ZTtcblx0cHVibGljIGlzRXh0ZW5kZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuXHRcdGNvbnN0IGhhc0NvbHMgPSB0aGlzLmZvb3RlckNvbnRlbnQgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzaG91bGRVcGRhdGUgPSBoYXNDb2xzICE9PSB0aGlzLmlzRXh0ZW5kZWQ7XG5cblx0XHRpZiAoc2hvdWxkVXBkYXRlKSB7XG5cdFx0XHR0aGlzLmlzRXh0ZW5kZWQgPSBoYXNDb2xzO1xuXHRcdFx0dGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc3ViZm9vdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiby1mb290ZXJfX2xhYmVsXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b24gY2xhc3M9XCJvLWZvb3Rlcl9fYnV0dG9uIGEtYnV0dG9uIGEtYnV0dG9uLS1zZWNvbmRhcnkgaGFzLWljb25cIiAoY2xpY2spPVwiZ29Ub1RvcCgpXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctdXBcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTdWJGb290ZXJDb21wb25lbnQge1xuXHRwdWJsaWMgZ29Ub1RvcCA9ICgpID0+IHtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvcHlyaWdodENvbXBvbmVudCB9IGZyb20gJy4vY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL3N1YmZvb3Rlci9zdWJmb290ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdENvcHlyaWdodENvbXBvbmVudCxcblx0Rm9vdGVyQ29tcG9uZW50LFxuXHRTdWJGb290ZXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlGb290ZXJCb3R0b21dJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQm90dG9tRGlyZWN0aXZlIHt9XG4iLCJpbXBvcnQgeyBGb290ZXJCb3R0b21EaXJlY3RpdmUgfSBmcm9tICcuL2JvdHRvbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9vdGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29udGVudC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0Rm9vdGVyQm90dG9tRGlyZWN0aXZlLFxuXHRGb290ZXJDb250ZW50RGlyZWN0aXZlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRcdC4uLkRpcmVjdGl2ZXMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRcdC4uLkRpcmVjdGl2ZXMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck1vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1aUhlYWRlckxvZ29dJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTG9nb0RpcmVjdGl2ZSB7fVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXVpSGVhZGVyQ29udGVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb250ZW50RGlyZWN0aXZlIHtcblx0QEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgcHVibGljIHN0eWxlRGlzcGxheSA9ICdibG9jayc7XG5cdEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgcHVibGljIHN0eWxlSGVpZ2h0ID0gJzEwMCUnO1xufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPbkluaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb250ZW50Q2hpbGQsXG5cdEFmdGVyQ29udGVudENoZWNrZWQsXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRJbmplY3QsXG5cdFBMQVRGT1JNX0lELFxuXHRFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSGVhZHJvb20gfSBmcm9tICdAanNwcmRzL2hlYWRyb29tLnRzJztcblxuaW1wb3J0IHsgSGVhZGVyTG9nb0RpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbG9nby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaGVhZGVyJyxcblx0dGVtcGxhdGU6IGA8aGVhZGVyIGNsYXNzPVwiby1oZWFkZXIgby1oZWFkZXItLWZpeGVkIGF1aS1oZWFkZXJcIiBbbmdDbGFzc109XCJ7J2hhcy1sb2dvJzogaGFzTG9nb31cIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpSGVhZGVyTG9nb11cIj48L25nLWNvbnRlbnQ+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYXVpLWhlYWRlcl9fY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktaGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpSGVhZGVyQ29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktaGVhZGVyX19tZW51LWl0ZW1zXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpSGVhZGVyTWVudUl0ZW1dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvaGVhZGVyPlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9LmF1aS1oZWFkZXJ7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0O3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uYXVpLWhlYWRlci5oZWFkZXItLXBpbm5lZHt0b3A6MH0uYXVpLWhlYWRlci5oZWFkZXItLXVucGlubmVkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKX0uYXVpLWhlYWRlci5oYXMtbG9nby5oZWFkZXItLXVucGlubmVkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTMwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0zMDAlKX0uYXVpLWhlYWRlciAuYXVpLWhlYWRlcl9fY29udGVudC13cmFwcGVye2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aGVpZ2h0OjEwMCV9LmF1aS1oZWFkZXIgLmF1aS1oZWFkZXJfX2NvbnRlbnR7ZmxleDoxO2hlaWdodDoxMDAlfS5hdWktaGVhZGVyIC5hdWktaGVhZGVyX19tZW51LWl0ZW1ze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9YF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRAQ29udGVudENoaWxkKEhlYWRlckxvZ29EaXJlY3RpdmUpIGxvZ286IEhlYWRlckxvZ29EaXJlY3RpdmU7XG5cdEBDb250ZW50Q2hpbGQoSGVhZGVyQ29udGVudERpcmVjdGl2ZSkgY29udGVudDogSGVhZGVyQ29udGVudERpcmVjdGl2ZTtcblx0cHVibGljIGhhc0xvZ286IEJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIGhhc0NvbnRlbnQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmXG5cdCkge31cblxuXHRwdWJsaWMgc2V0dXBIZWFkcm9vbSgpIHsgLy8gQHRvZG86IHVzZSBoZWFkcm9vbSBvcHRpb25zIGZyb20gaW5qZWN0b3Jcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF1aS1oZWFkZXInKTtcblx0XHRjb25zdCBoZWFkID0gbmV3IEhlYWRyb29tKGVsZW1lbnQpO1xuXG5cdFx0cmV0dXJuIGhlYWQ7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMuc2V0dXBIZWFkcm9vbSgpO1xuXHRcdH1cblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblx0XHRjb25zdCBoYXNMb2dvID0gdGhpcy5sb2dvICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgaGFzQ29udGVudCA9IHRoaXMuY29udGVudCAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHNob3VsZFVwZGF0ZSA9IGhhc0xvZ28gIT09IHRoaXMuaGFzTG9nbyB8fCBoYXNDb250ZW50ICE9PSB0aGlzLmhhc0NvbnRlbnQ7XG5cblx0XHRpZiAoc2hvdWxkVXBkYXRlKSB7XG5cdFx0XHR0aGlzLmhhc0xvZ28gPSBoYXNMb2dvO1xuXHRcdFx0dGhpcy5oYXNDb250ZW50ID0gaGFzQ29udGVudDtcblxuXHRcdFx0dGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1aUhlYWRlck1lbnVJdGVtXScsXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1lbnVJdGVtRGlyZWN0aXZlIHt9XG4iLCJpbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdEhlYWRlckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBIZWFkZXJDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJMb2dvRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2dvLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRIZWFkZXJDb250ZW50RGlyZWN0aXZlLFxuXHRIZWFkZXJMb2dvRGlyZWN0aXZlLFxuXHRIZWFkZXJNZW51SXRlbURpcmVjdGl2ZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUge30gLy8gQHRvZG86IGFkZCBmb3Jyb290IHdpdGggaGVhZHJvb20gb3B0aW9uc1xuIiwiZXhwb3J0IGNvbnN0IEhFQURST09NT1BUSU9OUyA9IHtcblx0b2Zmc2V0OiAyMDAsXG5cdHRvbGVyYW5jZTogNSxcblx0Y2xhc3Nlczoge1xuXHRcdGluaXRpYWw6ICcnLFxuXHRcdHBpbm5lZDogJ2hlYWRlci0tcGlubmVkJyxcblx0XHR1bnBpbm5lZDogJ2hlYWRlci0tdW5waW5uZWQnLFxuXHRcdHRvcDogJ2hlYWRlci0tdG9wJyxcblx0XHRub3RUb3A6ICdoZWFkZXItLW5vdC10b3AnLFxuXHRcdGJvdHRvbTogJ2hlYWRlci0tYm90dG9tJyxcblx0XHRib3RCb3R0b206ICdoZWFkZXItLW5vdC1ib3R0b20nLFxuXHR9LFxufTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUhlcm9DdGFdJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0N0YURpcmVjdGl2ZSB7XG5cdEBIb3N0QmluZGluZygpIGNsYXNzID0gJ2F1aS1oZXJvLWN0YSc7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVyb0N0YURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaGVyby1jdGEuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWhlcm8nLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJpbm5lclwiIFtuZ0NsYXNzXT1cInsnaGFzLWN0YSc6IGhhc0N0YX1cIj5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlcm9DYXJkXVwiPjwvbmctY29udGVudD5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlcm9DdGFdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7YmFja2dyb3VuZDojZjNmM2YzO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNiMGIwYjA7bWluLWhlaWdodDoxMnJlbTtwYWRkaW5nLXRvcDo0LjVyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0NXJlbSl7Omhvc3R7cGFkZGluZy10b3A6MS41cmVtfX06aG9zdCAuYnV0dG9uc3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyO3dpZHRoOjEwMCV9Omhvc3QgLnRhYnN7YWxpZ24tc2VsZjpmbGV4LWVuZDt3aWR0aDoxMDAlO3BhZGRpbmctYm90dG9tOjEuNXJlbX06aG9zdCAudGFicyAudGFicy1saXN0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luOjA7cGFkZGluZzowO2xpc3Qtc3R5bGU6bm9uZX06aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbXtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luLWJvdHRvbTotMXB4O3BhZGRpbmc6MH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMwcmVtKXs6aG9zdCAudGFicyAudGFicy1saXN0e2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbXttYXJnaW4tcmlnaHQ6LTFweH19Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW0gLnRhYnMtbGlzdC1pdGVtLWJ0bntiYWNrZ3JvdW5kOiNmM2YzZjM7Ym9yZGVyOjFweCBzb2xpZCAjYjBiMGIwO2NvbG9yOiMwODFmMmM7ZGlzcGxheTpibG9jaztwYWRkaW5nOi4zNzVyZW0gMS41cmVtO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQscGFkZGluZyAuMnMgZWFzZS1vdXR9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW0gLnRhYnMtbGlzdC1pdGVtLWJ0bjphY3RpdmU6bm90KC5hY3RpdmUpLDpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG46aG92ZXI6bm90KC5hY3RpdmUpLDpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG46dmlzaXRlZDpub3QoLmFjdGl2ZSl7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX06aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbSAudGFicy1saXN0LWl0ZW0tYnRuLmFjdGl2ZXtiYWNrZ3JvdW5kOiNmZmY7Zm9udC13ZWlnaHQ6NzAwfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjJyZW0pezpob3N0e3BhZGRpbmctdG9wOjZyZW07ZGlzcGxheTpmbGV4fTpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVte2FsaWduLXNlbGY6ZmxleC1lbmR9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW0gLnRhYnMtbGlzdC1pdGVtLWJ0bi5hY3RpdmV7cGFkZGluZzouNzVyZW0gMS41cmVtfTpob3N0IC5pbm5lcnttYXJnaW46MDtwYWRkaW5nOjA7bWF4LXdpZHRoOjEwMCU7ZmxleDoxO2FsaWduLXNlbGY6ZmxleC1lbmR9Omhvc3QgLmlubmVyLmhhcy1jdGEgOjpuZy1kZWVwIC5hdWktaGVyby1jYXJkOjphZnRlciw6aG9zdCAuaW5uZXIuaGFzLWN0YSA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmQ6OmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xMnB4O2JvcmRlci10b3A6MTNweCBzb2xpZCByZ2JhKDAsMCwwLC4yKX06aG9zdCAuaW5uZXIuaGFzLWN0YSA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmQ6OmJlZm9yZXtib3JkZXItbGVmdDo2cHggc29saWQgdHJhbnNwYXJlbnQ7bGVmdDotLjM3NXJlbX06aG9zdCAuaW5uZXIuaGFzLWN0YSA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmQ6OmFmdGVye2JvcmRlci1yaWdodDo2cHggc29saWQgdHJhbnNwYXJlbnQ7cmlnaHQ6LS4zNzVyZW19Omhvc3QgLnRhYnN7cGFkZGluZy1ib3R0b206MDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfTpob3N0IC50YWJzIC50YWJzLWxpc3R7anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLWlubmVye3BhZGRpbmc6MS41cmVtfTpob3N0IDo6bmctZGVlcCAuYXVpLWhlcm8tY2FyZCw6aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLXdyYXBwZXJ7ZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjM2cmVtfTpob3N0IDo6bmctZGVlcCAuYXVpLWhlcm8tY2FyZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoxLjVyZW0gMS41cmVtIC43NXJlbX06aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjttaW4taGVpZ2h0OjZyZW07ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzowfX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0NvbXBvbmVudCB7XG5cdEBDb250ZW50Q2hpbGQoSGVyb0N0YURpcmVjdGl2ZSkgaGFzQ3RhOiBIZXJvQ3RhRGlyZWN0aXZlO1xufVxuIiwiaW1wb3J0IHsgSGVyb0NvbXBvbmVudCB9IGZyb20gJy4vaGVyby9oZXJvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRIZXJvQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUhlcm9DYXJkXScsXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9DYXJkRGlyZWN0aXZlIHtcblx0QEhvc3RCaW5kaW5nKCkgY2xhc3MgPSAnYXVpLWhlcm8tY2FyZCc7XG59XG4iLCJpbXBvcnQgeyBIZXJvQ2FyZERpcmVjdGl2ZSB9IGZyb20gJy4vaGVyby1jYXJkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZXJvQ3RhRGlyZWN0aXZlIH0gZnJvbSAnLi9oZXJvLWN0YS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0SGVyb0NhcmREaXJlY3RpdmUsXG5cdEhlcm9DdGFEaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLFxuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1wYW5lJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1wYW5lIGF1aS1wYW5lXCIgW25nQ2xhc3NdPVwieyAnbS1wYW5lLS1vcGVuJzogb3BlbmVkLCAnbS1wYW5lLS1sZWZ0Jzogc2lkZSA9PT0gJ2xlZnQnLCAnbS1wYW5lLS1yaWdodCc6IHNpZGUgPT09ICdyaWdodCcgfVwiPlxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtLW92ZXJsYXkgbS1vdmVybGF5X19wYW5lIGlzLWFjdGl2ZVwiICpuZ0lmPVwib3BlbmVkICYmIGJhY2tkcm9wXCIgKGNsaWNrKT1cImNsb3NlUGFuZSgpXCI+PC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgLm0tcGFuZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7d2lkdGg6MjIuNXJlbTtoZWlnaHQ6MTAwJTt6LWluZGV4OjEwMH0ubS1wYW5lX19jb250ZW50e2hlaWdodDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfS5tLXBhbmUtLWxlZnR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotMjIuNXJlbTt0cmFuc2l0aW9uOmxlZnQgLjNzIGN1YmljLWJlemllciguNCwwLC4yLDEpfS5tLXBhbmUtLWxlZnQubS1wYW5lLS1vcGVue2xlZnQ6MH0ubS1wYW5lLS1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotMjIuNXJlbTt0cmFuc2l0aW9uOnJpZ2h0IC4zcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKX0ubS1wYW5lLS1yaWdodC5tLXBhbmUtLW9wZW57cmlnaHQ6MH1gXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFuZUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIG9wZW5lZCA9IGZhbHNlO1xuXHRASW5wdXQoKSBzaWRlID0gJ2xlZnQnO1xuXHRASW5wdXQoKSBiYWNrZHJvcCA9IHRydWU7XG5cdEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHRvZ2dsZVBhbmUoKSB7XG5cdFx0KHRoaXMub3BlbmVkID8gdGhpcy5jbG9zZVBhbmUoKSA6IHRoaXMub3BlblBhbmUoKSk7XG5cdH1cblxuXHRwdWJsaWMgb3BlblBhbmUoKSB7XG5cdFx0dGhpcy5vcGVuZWQgPSB0cnVlO1xuXHRcdHRoaXMub3Blbi5lbWl0KCk7XG5cdH1cblxuXHRwdWJsaWMgY2xvc2VQYW5lKCkge1xuXHRcdHRoaXMub3BlbmVkID0gZmFsc2U7XG5cdFx0dGhpcy5jbG9zZS5lbWl0KCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IFBhbmVDb21wb25lbnQgfSBmcm9tICcuL3BhbmUvcGFuZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0UGFuZUNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNpZGViYXJJdGVtLCBTaWRlYmFyU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcy9zaWRlYmFyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNpZGViYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvLXNpZGViYXIge3sgb3BlbiA/ICdvLXNpZGViYXItLW9wZW4nIDogJycgfX1cIj5cblx0PGRpdiBjbGFzcz1cIm8tc2lkZWJhcl9faGVhZGVyXCI+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uLXRyYW5zcGFyZW50IGhhcy1pY29uXCIgKGNsaWNrKT1cInRvZ2dsZShmYWxzZSlcIj5cblx0XHRcdDxpIGNsYXNzPVwiaWNvbi1jbG9zZVwiPjwvaT5cblx0XHQ8L2J1dHRvbj5cblx0XHQ8aDEgY2xhc3M9XCJoNlwiPnt7IHRpdGxlIHwgdXBwZXJjYXNlIH19PC9oMT5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJvLXNpZGViYXJfX2l0ZW1zXCI+XG5cdFx0PGF1aS1zaWRlYmFyLWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBbaXRlbV09XCJpdGVtXCIgKGNsaWNrKT1cIml0ZW1DbGlja2VkKClcIj48L2F1aS1zaWRlYmFyLWl0ZW0+XG5cdDwvZGl2PlxuXHQ8bmctY29udGVudCBzZWxlY3Q9XCIuby1zaWRlYmFyX19mb290ZXJcIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm0tb3ZlcmxheVwiXG5cdCpuZ0lmPVwib3BlblwiXG5cdChjbGljayk9XCJ0b2dnbGUoZmFsc2UpXCI+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AubS1zaWRlYmFye2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjt3aWR0aDowO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0cmFuc2l0aW9uOndpZHRoIC4zcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKX0ubS1zaWRlYmFyLS1vcGVue3dpZHRoOjIyLjVyZW19Lm0tc2lkZWJhcl9fY29udGVudHtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87d2lkdGg6MjIuNXJlbTtoZWlnaHQ6MTAwJX0ubS1zaWRlYmFyX19jb250ZW50LS1wYWRkaW5ne3BhZGRpbmc6M3JlbX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uU2VsZWN0ZWQgPSB0cnVlO1xuXHRASW5wdXQoKSBwdWJsaWMgdGl0bGUgPSAnT25kZXJ3ZWcnO1xuXHRASW5wdXQoKSBwdWJsaWMgb3BlbiA9IGZhbHNlO1xuXHRASW5wdXQoKSBwdWJsaWMgaXRlbXM6IFNpZGViYXJJdGVtW10gPSBbXTtcblxuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHB1YmxpYyB0b2dnbGUob3BlbjogYm9vbGVhbiA9ICF0aGlzLm9wZW4pIHtcblx0XHR0aGlzLm9wZW4gPSBvcGVuO1xuXG5cdFx0aWYgKG9wZW4pIHtcblx0XHRcdHRoaXMub3BlbmVkLmVtaXQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZWQuZW1pdCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBpdGVtQ2xpY2tlZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jbG9zZU9uU2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMudG9nZ2xlKGZhbHNlKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmltcG9ydCB7IFNpZGViYXJJdGVtIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2lkZWJhci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zaWRlYmFyLWl0ZW0nLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmhyZWZcIj5cblx0PGEgaHJlZj1cInt7aXRlbS5ocmVmfX1cIiBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cIml0ZW0udGhlbWU/LmNvbG9yXCI+XG5cdFx0PGltZyAqbmdJZj1cIml0ZW0uaWNvblwiIHNyYz1cInt7aXRlbS5pY29ufX1cIiAvPlxuXHRcdDxoMiBjbGFzcz1cImg1XCI+e3tpdGVtLmxhYmVsfX08L2gyPlxuXHQ8L2E+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnJvdXRlckxpbmtcIj5cblx0PGEgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZXJMaW5rXCIgW3N0eWxlLmJvcmRlci1jb2xvcl09XCJpdGVtLnRoZW1lPy5jb2xvclwiPlxuXHRcdDxpbWcgKm5nSWY9XCJpdGVtLmljb25cIiBzcmM9XCJ7e2l0ZW0uaWNvbn19XCIgLz5cblx0XHQ8aDIgY2xhc3M9XCJoNVwiPnt7aXRlbS5sYWJlbH19PC9oMj5cblx0PC9hPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0bSBvZiBpdGVtLml0ZW1zXCI+XG5cdDxhdWktc2lkZWJhci1pdGVtIFtpdGVtXT1cIml0bVwiPjwvYXVpLXNpZGViYXItaXRlbT5cbjwvbmctY29udGFpbmVyPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckl0ZW1Db21wb25lbnQge1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgcHVibGljIGdldCBpdGVtQ2xhc3NMaXN0KCkge1xuXHRcdHJldHVybiBgby1zaWRlYmFyX19pdGVtICR7Z2V0KHRoaXMuaXRlbSwgJ2NsYXNzTGlzdCcsICcnKX1gO1xuXHR9XG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtOiBTaWRlYmFySXRlbTtcbn1cbiIsImltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItaXRlbS9zaWRlYmFyLWl0ZW0uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdFNpZGViYXJDb21wb25lbnQsXG5cdFNpZGViYXJJdGVtQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Um91dGVyTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnRzIiwiRGlyZWN0aXZlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFHYSxzQkFBc0IsR0FBd0I7SUFDMUQsUUFBUSxFQUFFLElBQUk7SUFDZCxPQUFPLEVBQUU7UUFDUixPQUFPLEVBQUUsOEVBQThFO1FBQ3ZGLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLDRDQUE0QztLQUNsRDtJQUNELE1BQU0sRUFBRTtRQUNQLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxHQUFHO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDVCxXQUFXLEVBQUUsK0lBQStJOztRQUM1SixPQUFPLEVBQUUsa0hBQWtIO0tBQzNIO0NBQ0QsQ0FBQztBQUVGLHFCQUFhLDBCQUEwQixHQUFHLElBQUksY0FBYyxDQUFzQix5QkFBeUIsQ0FBQyxDQUFDO0FBQzdHLHFCQUFhLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFzQixxQkFBcUIsQ0FBQzs7Ozs7O0FDeEJuRztJQVdDLDhCQUN3QyxxQkFDZjtRQURlLHdCQUFtQixHQUFuQixtQkFBbUI7UUFDbEMsWUFBTyxHQUFQLE9BQU87S0FDNUI7Ozs7O0lBRUosbUNBQUk7Ozs7SUFBSixVQUFLLE1BQXNEO1FBQXRELHVCQUFBLEVBQUEsU0FBOEIsSUFBSSxDQUFDLG1CQUFtQjtRQUMxRCxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoRCxNQUFN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

/***/ }),

/***/ "./dist/logo/esm2015/index.js":
/*!************************************!*\
  !*** ./dist/logo/esm2015/index.js ***!
  \************************************/
/*! exports provided: LogoComponent, LogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_logo_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/logo/index */ "./dist/logo/esm2015/lib/logo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return _lib_logo_index__WEBPACK_IMPORTED_MODULE_0__["LogoComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return _lib_logo_index__WEBPACK_IMPORTED_MODULE_0__["LogoModule"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dvLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBDQUFjLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9saWIvbG9nby9pbmRleCc7XG4iXX0=

/***/ }),

/***/ "./dist/logo/esm2015/lib/logo/components/index.js":
/*!********************************************************!*\
  !*** ./dist/logo/esm2015/lib/logo/components/index.js ***!
  \********************************************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo/logo.component */ "./dist/logo/esm2015/lib/logo/components/logo/logo.component.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

const /** @type {?} */ Components = [
    _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__["LogoComponent"],
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dvLyIsInNvdXJjZXMiOlsibGliL2xvZ28vY29tcG9uZW50cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE1BQU0sQ0FBQyx1QkFBTSxVQUFVLEdBQUc7SUFDekIsYUFBYTtDQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dvL2xvZ28uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdExvZ29Db21wb25lbnQsXG5dO1xuIl19

/***/ }),

/***/ "./dist/logo/esm2015/lib/logo/components/logo/logo.component.js":
/*!**********************************************************************!*\
  !*** ./dist/logo/esm2015/lib/logo/components/logo/logo.component.js ***!
  \**********************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

class LogoComponent {
    constructor() {
        this.title = 'Default';
        this.src = 'https://place-hold.it/170x170';
        this.link = '/';
    }
}
LogoComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-logo',
                template: `<a class="o-header__logo" href="{{link || '#'}}" title="{{title}}" (click)="onClick($event)">
    <img [src]="src"[alt]="title" />
</a>

`,
            },] },
];
/** @nocollapse */
LogoComponent.propDecorators = {
    "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "src": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "link": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
function LogoComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LogoComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LogoComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LogoComponent.propDecorators;
    /** @type {?} */
    LogoComponent.prototype.title;
    /** @type {?} */
    LogoComponent.prototype.src;
    /** @type {?} */
    LogoComponent.prototype.link;
    /** @type {?} */
    LogoComponent.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dvLyIsInNvdXJjZXMiOlsibGliL2xvZ28vY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVVqRCxNQUFNOztxQkFFSSxTQUFTO21CQUdYLCtCQUErQjtvQkFHNUIsR0FBRzs7OztZQWhCYixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7OztDQUlYO2FBQ0E7Ozs7c0JBRUUsS0FBSztvQkFHTCxLQUFLO3FCQUdMLEtBQUs7d0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXVpLWxvZ28nLFxuICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwiby1oZWFkZXJfX2xvZ29cIiBocmVmPVwie3tsaW5rIHx8ICcjJ319XCIgdGl0bGU9XCJ7e3RpdGxlfX1cIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgPGltZyBbc3JjXT1cInNyY1wiW2FsdF09XCJ0aXRsZVwiIC8+XG48L2E+XG5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQge1xuICBASW5wdXQoKVxuICB0aXRsZSA9ICdEZWZhdWx0JztcblxuICBASW5wdXQoKVxuICBzcmMgPSAnaHR0cHM6Ly9wbGFjZS1ob2xkLml0LzE3MHgxNzAnO1xuXG4gIEBJbnB1dCgpXG4gIGxpbmsgPyA9ICcvJztcblxuICBASW5wdXQoKVxuICBvbkNsaWNrPzogRnVuY3Rpb247XG59XG4iXX0=

/***/ }),

/***/ "./dist/logo/esm2015/lib/logo/index.js":
/*!*********************************************!*\
  !*** ./dist/logo/esm2015/lib/logo/index.js ***!
  \*********************************************/
/*! exports provided: LogoComponent, LogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/logo/logo.component */ "./dist/logo/esm2015/lib/logo/components/logo/logo.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__["LogoComponent"]; });

/* harmony import */ var _logo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.module */ "./dist/logo/esm2015/lib/logo/logo.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return _logo_module__WEBPACK_IMPORTED_MODULE_1__["LogoModule"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dvLyIsInNvdXJjZXMiOlsibGliL2xvZ28vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhCQUFjLGtDQUFrQyxDQUFDO0FBQ2pELDJCQUFjLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbG9nby5tb2R1bGUnO1xuXG4iXX0=

/***/ }),

/***/ "./dist/logo/esm2015/lib/logo/logo.module.js":
/*!***************************************************!*\
  !*** ./dist/logo/esm2015/lib/logo/logo.module.js ***!
  \***************************************************/
/*! exports provided: LogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index */ "./dist/logo/esm2015/lib/logo/components/index.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



class LogoModule {
}
LogoModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    ..._components_index__WEBPACK_IMPORTED_MODULE_2__["Components"],
                ],
                exports: [
                    ..._components_index__WEBPACK_IMPORTED_MODULE_2__["Components"],
                ],
            },] },
];
function LogoModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LogoModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LogoModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dvLyIsInNvdXJjZXMiOlsibGliL2xvZ28vbG9nby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQWNoRCxNQUFNOzs7WUFYTCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsR0FBRyxVQUFVO2lCQUNiO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ29Nb2R1bGUge1xufVxuIl19

/***/ }),

/***/ "./dist/logo/fesm5/logo.js":
/*!*********************************!*\
  !*** ./dist/logo/fesm5/logo.js ***!
  \*********************************/
/*! exports provided: LogoComponent, LogoModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.title = 'Default';
        this.src = 'https://place-hold.it/170x170';
        this.link = '/';
    }
    LogoComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-logo',
                    template: "<a class=\"o-header__logo\" href=\"{{link || '#'}}\" title=\"{{title}}\" (click)=\"onClick($event)\">\n    <img [src]=\"src\"[alt]=\"title\" />\n</a>\n\n",
                },] },
    ];
    /** @nocollapse */
    LogoComponent.propDecorators = {
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "src": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "link": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return LogoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    LogoComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoModule = /** @class */ (function () {
    function LogoModule() {
    }
    LogoModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(Components),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(Components),
                },] },
    ];
    return LogoModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9nby9saWIvbG9nby9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQudHMiLCJuZzovL2xvZ28vbGliL2xvZ28vY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbG9nby9saWIvbG9nby9sb2dvLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1aS1sb2dvJyxcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cIm8taGVhZGVyX19sb2dvXCIgaHJlZj1cInt7bGluayB8fCAnIyd9fVwiIHRpdGxlPVwie3t0aXRsZX19XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgIDxpbWcgW3NyY109XCJzcmNcIlthbHRdPVwidGl0bGVcIiAvPlxuPC9hPlxuXG5gLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgdGl0bGUgPSAnRGVmYXVsdCc7XG5cbiAgQElucHV0KClcbiAgc3JjID0gJ2h0dHBzOi8vcGxhY2UtaG9sZC5pdC8xNzB4MTcwJztcblxuICBASW5wdXQoKVxuICBsaW5rID8gPSAnLyc7XG5cbiAgQElucHV0KClcbiAgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuIiwiaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRMb2dvQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb01vZHVsZSB7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7cUJBWVUsU0FBUzttQkFHWCwrQkFBK0I7b0JBRzVCLEdBQUc7OztnQkFoQmIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsMkpBSVg7aUJBQ0E7Ozs7MEJBRUUsS0FBSzt3QkFHTCxLQUFLO3lCQUdMLEtBQUs7NEJBR0wsS0FBSzs7d0JBcEJSOzs7Ozs7O0FDQUEscUJBRWEsVUFBVSxHQUFHO0lBQ3pCLGFBQWE7Q0FDYjs7Ozs7Ozs7OztnQkNFQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxXQUNSLFVBQVUsQ0FDYjtvQkFDRCxPQUFPLFdBQ0gsVUFBVSxDQUNiO2lCQUNEOztxQkFoQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./dist/selectable-list/fesm5/selectable-list.js":
/*!*******************************************************!*\
  !*** ./dist/selectable-list/fesm5/selectable-list.js ***!
  \*******************************************************/
/*! exports provided: SelectableListComponent, SelectableActionsDirective, SelectableListModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableListComponent", function() { return SelectableListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableActionsDirective", function() { return SelectableActionsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableListModule", function() { return SelectableListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Directives; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableListComponent = /** @class */ (function () {
    function SelectableListComponent() {
        this.index = 0;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SelectableListComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.selected.emit(item);
    };
    /**
     * @param {?} input
     * @return {?}
     */
    SelectableListComponent.prototype.formatLabel = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ inputString = (this.label ? input[this.label] : input);
        if (!this.search) {
            return inputString;
        }
        var /** @type {?} */ regEx = new RegExp(this.search, 'ig');
        return inputString.replace(regEx, '<b>' + this.search + '</b>');
    };
    SelectableListComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-selectable-list',
                    template: "<ul class=\"aui-selectable-list m-selectable-list m-selectable-list--no-border\">\n    <li class=\"m-selectable-list__item\" *ngFor=\"let item of items; let i=index;\"  (click)=\"selectItem(item)\" [ngClass]=\"i === index ? 'm-selectable-list__item--active' : ''\">\n        <span *ngIf=\"!template && !itemTemplate\" [innerHTML]=\"formatLabel(item)\"></span>\n        <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n        <ng-template *ngIf=\"itemTemplate\" [ngTemplateOutlet]=\"itemTemplate\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n    </li>\n</ul>\n",
                },] },
    ];
    /** @nocollapse */
    SelectableListComponent.propDecorators = {
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "search": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "itemTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] },],
    };
    return SelectableListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableActionsDirective = /** @class */ (function () {
    function SelectableActionsDirective() {
        this.keyArrowUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyArrowDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyEscape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    SelectableActionsDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (e.key) {
            case 'ArrowUp':
                // UP
                e.preventDefault(); // Do not change cursor pos
                this.keyArrowUp.emit(e);
                break;
            case 'ArrowDown':
                // DOWN
                e.preventDefault(); // Do not change cursor pos
                this.keyArrowDown.emit(e);
                break;
            case 'Enter':
                // ENTER
                this.keyEnter.emit(e);
                break;
            case 'Escape':
                // ESCAPE
                this.keyEscape.emit(e);
                break;
        }
    };
    SelectableActionsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiSelectableActions]',
                    exportAs: 'auiSelectableActions',
                },] },
    ];
    /** @nocollapse */
    SelectableActionsDirective.propDecorators = {
        "keyArrowUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "keyArrowDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "keyEnter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "keyEscape": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onKeyDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return SelectableActionsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    SelectableListComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    SelectableActionsDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableListModule = /** @class */ (function () {
    function SelectableListModule() {
    }
    SelectableListModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ],
                    declarations: [
                        Components,
                        Directives,
                    ],
                    exports: [
                        Components,
                        Directives,
                    ],
                },] },
    ];
    return SelectableListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1saXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zZWxlY3RhYmxlLWxpc3QvbGliL3NlbGVjdGFibGUtbGlzdC9jb21wb25lbnRzL3NlbGVjdGFibGUtbGlzdC9zZWxlY3RhYmxlLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3QvbGliL3NlbGVjdGFibGUtbGlzdC9kaXJlY3RpdmVzL3NlbGVjdGFibGUtYWN0aW9ucy5kaXJlY3RpdmUudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9saWIvc2VsZWN0YWJsZS1saXN0L2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9saWIvc2VsZWN0YWJsZS1saXN0L2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9saWIvc2VsZWN0YWJsZS1saXN0L3NlbGVjdGFibGUtbGlzdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNlbGVjdGFibGUtbGlzdCcsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwiYXVpLXNlbGVjdGFibGUtbGlzdCBtLXNlbGVjdGFibGUtbGlzdCBtLXNlbGVjdGFibGUtbGlzdC0tbm8tYm9yZGVyXCI+XG4gICAgPGxpIGNsYXNzPVwibS1zZWxlY3RhYmxlLWxpc3RfX2l0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCIgIChjbGljayk9XCJzZWxlY3RJdGVtKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaSA9PT0gaW5kZXggPyAnbS1zZWxlY3RhYmxlLWxpc3RfX2l0ZW0tLWFjdGl2ZScgOiAnJ1wiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZSAmJiAhaXRlbVRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXRMYWJlbChpdGVtKVwiPjwvc3Bhbj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICpuZ0lmPVwidGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGl0ZW06IGl0ZW0gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cIml0ZW1UZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW1UZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2xpPlxuPC91bD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGFibGVMaXN0Q29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGl0ZW1zOiBhbnlbXTtcblx0QElucHV0KCkgcHVibGljIGluZGV4ID0gMDtcblx0QElucHV0KCkgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0cHVibGljIHNlbGVjdEl0ZW0oaXRlbSkge1xuXHRcdHRoaXMuc2VsZWN0ZWQuZW1pdChpdGVtKTtcblx0fVxuXG5cdHB1YmxpYyBmb3JtYXRMYWJlbChpbnB1dDogYW55KSB7XG5cdFx0Y29uc3QgaW5wdXRTdHJpbmcgPSAodGhpcy5sYWJlbCA/IGlucHV0W3RoaXMubGFiZWxdIDogaW5wdXQpO1xuXG5cdFx0aWYgKCF0aGlzLnNlYXJjaCkge1xuXHRcdFx0cmV0dXJuIGlucHV0U3RyaW5nO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZ0V4ID0gbmV3IFJlZ0V4cCh0aGlzLnNlYXJjaCwgJ2lnJyk7XG5cdFx0cmV0dXJuIGlucHV0U3RyaW5nLnJlcGxhY2UocmVnRXgsICc8Yj4nICsgdGhpcy5zZWFyY2ggKyAnPC9iPicpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aVNlbGVjdGFibGVBY3Rpb25zXScsXG5cdGV4cG9ydEFzOiAnYXVpU2VsZWN0YWJsZUFjdGlvbnMnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSB7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5QXJyb3dVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBrZXlBcnJvd0Rvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5RW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5RXNjYXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGUua2V5KSB7XG5cdFx0XHRjYXNlICdBcnJvd1VwJzogLy8gVVBcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBEbyBub3QgY2hhbmdlIGN1cnNvciBwb3Ncblx0XHRcdFx0dGhpcy5rZXlBcnJvd1VwLmVtaXQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dEb3duJzogLy8gRE9XTlxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7IC8vIERvIG5vdCBjaGFuZ2UgY3Vyc29yIHBvc1xuXHRcdFx0XHR0aGlzLmtleUFycm93RG93bi5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0VudGVyJzogLy8gRU5URVJcblx0XHRcdFx0dGhpcy5rZXlFbnRlci5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0VzY2FwZSc6IC8vIEVTQ0FQRVxuXHRcdFx0XHR0aGlzLmtleUVzY2FwZS5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IFNlbGVjdGFibGVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRTZWxlY3RhYmxlTGlzdENvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0YWJsZS1hY3Rpb25zLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RhYmxlTGlzdE1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O3FCQWV5QixDQUFDO3dCQUtzQixJQUFJLFlBQVksRUFBRTs7Ozs7O0lBSTFELDRDQUFVOzs7O2NBQUMsSUFBSTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0lBR25CLDZDQUFXOzs7O2NBQUMsS0FBVTtRQUM1QixxQkFBTSxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU8sV0FBVyxDQUFDO1NBQ25CO1FBRUQscUJBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQzs7O2dCQWxDakUsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxvcEJBT1Y7aUJBQ0E7Ozs7MEJBRUMsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUVMLE1BQU07NkJBRU4sWUFBWSxTQUFDLFdBQVc7O2tDQXRCMUI7Ozs7Ozs7QUNBQTs7MEJBTytCLElBQUksWUFBWSxFQUFFOzRCQUNoQixJQUFJLFlBQVksRUFBRTt3QkFDdEIsSUFBSSxZQUFZLEVBQUU7eUJBQ2pCLElBQUksWUFBWSxFQUFFOzs7Ozs7SUFHeEMsOENBQVM7Ozs7Y0FBQyxDQUFnQjtRQUNoQyxRQUFRLENBQUMsQ0FBQyxHQUFHO1lBQ1osS0FBSyxTQUFTOztnQkFDYixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNO1lBQ1AsS0FBSyxXQUFXOztnQkFDZixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBQ1AsS0FBSyxPQUFPOztnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTTtZQUNQLEtBQUssUUFBUTs7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07U0FDUDs7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLHNCQUFzQjtpQkFDaEM7Ozs7K0JBRUMsTUFBTTtpQ0FDTixNQUFNOzZCQUNOLE1BQU07OEJBQ04sTUFBTTs4QkFFTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztxQ0FacEM7Ozs7Ozs7QUNBQSxxQkFFYSxVQUFVLEdBQUc7SUFDekIsdUJBQXVCO0NBQ3ZCOzs7Ozs7QUNKRCxxQkFFYSxVQUFVLEdBQUc7SUFDekIsMEJBQTBCO0NBQzFCOzs7Ozs7QUNKRDs7OztnQkFNQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLFVBQVU7d0JBQ1YsVUFBVTtxQkFDVjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTt3QkFDVixVQUFVO3FCQUNWO2lCQUNEOzsrQkFsQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./dist/utils/fesm5/utils.js":
/*!***********************************!*\
  !*** ./dist/utils/fesm5/utils.js ***!
  \***********************************/
/*! exports provided: FilterModule, CheckboxFilterComponent, InputFilterComponent, SelectFilterComponent, Filter, FilterService, InterpolateLabelPipe, PluralizeLabelPipe, interpolate, LabelsModule, WINDOW_PROVIDERS, WINDOW, WindowModule, ɵa, ɵe, ɵc, ɵb, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModule", function() { return FilterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxFilterComponent", function() { return CheckboxFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFilterComponent", function() { return InputFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFilterComponent", function() { return SelectFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpolateLabelPipe", function() { return InterpolateLabelPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralizeLabelPipe", function() { return PluralizeLabelPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsModule", function() { return LabelsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowModule", function() { return WindowModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return Pipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return windowFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CheckboxFilterComponent = /** @class */ (function () {
    function CheckboxFilterComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    CheckboxFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filter) {
            this.value = this.filter.value;
        }
        this.onFilter();
    };
    /**
     * @return {?}
     */
    CheckboxFilterComponent.prototype.onFilter = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ value = this.filter.options.filter(function (option) {
            return option.checked;
        });
        this.update.emit(value);
    };
    CheckboxFilterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-checkbox-filter',
                    template: "<ul class=\"a-list a-list--reset aui-checkbox-filter\" *ngIf=\"filter && filter.options && filter.id\">\n\t<li *ngFor=\"let option of filter.options; let i = index;\">\n\t\t<div class=\"a-input\">\n\t\t\t<div class=\"a-input__checkbox\">\n\t\t\t\t<input type=\"checkbox\" [id]=\"option.id\" [name]=\"option.id\" [(ngModel)]=\"option.checked\" (ngModelChange)=\"onFilter()\">\n\t\t\t\t<label [for]=\"option.id\">{{ option.name }}</label>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n</ul>\n",
                },] },
    ];
    /** @nocollapse */
    CheckboxFilterComponent.propDecorators = {
        "filter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return CheckboxFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputFilterComponent = /** @class */ (function () {
    function InputFilterComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    InputFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filter) {
            this.value = this.filter.value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InputFilterComponent.prototype.onFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.update.emit(value);
    };
    InputFilterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-input-filter',
                    template: "<div class=\"a-input has-icon-right aui-input-filter\">\n\t<ng-container *ngIf=\"filter\">\n\t\t<div class=\"a-input__wrapper\">\n\t\t\t<input type=\"text\" [placeholder]=\"filter.name\" [(ngModel)]=\"value\" (ngModelChange)=\"onFilter(value)\">\n\t\t\t<span class=\"fa fa-search\"></span>\n\t\t</div>\n\t</ng-container>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    InputFilterComponent.propDecorators = {
        "filter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return InputFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectFilterComponent = /** @class */ (function () {
    function SelectFilterComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    SelectFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filter) {
            this.value = this.filter.value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectFilterComponent.prototype.onFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.update.emit(value);
    };
    SelectFilterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-select-filter',
                    template: "<div class=\"a-input has-icon-right aui-select-filter\">\n\t<ng-container *ngIf=\"filter && filter.options && filter.id\">\n\t\t<label class=\"a-input__label a-input__label--inline\" [for]=\"filter.id\">{{ filter.name }}: </label>\n\t\t<div class=\"a-input__wrapper a-input__wrapper--inline\">\n\t\t\t<select [name]=\"filter.id\" [id]=\"filter.id\" [(ngModel)]=\"value\" (ngModelChange)=\"onFilter(value)\">\n\t\t\t\t<option *ngFor=\"let option of filter.options; let i = index;\" [ngValue]=\"option\">{{ option.name }}</option>\n\t\t\t</select>\n\t\t\t<span class=\"fa fa-angle-down\"></span>\n\t\t</div>\n\t</ng-container>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    SelectFilterComponent.propDecorators = {
        "filter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return SelectFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CheckboxFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    FilterService.prototype.filterData = /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    function (data, filters) {
        filters.forEach(function (filter) {
            data = filter.parseData(data);
        });
        return data;
    };
    FilterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return FilterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterModule = /** @class */ (function () {
    function FilterModule() {
    }
    FilterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ],
                    declarations: [
                        Components,
                    ],
                    providers: [
                        FilterService,
                    ],
                    exports: [
                        Components,
                    ],
                },] },
    ];
    return FilterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Filter = /** @class */ (function () {
    function Filter() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    Filter.prototype.parseData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.parse(data, this.value);
    };
    return Filter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ interpolate = function (label, replaceData) {
    if (!replaceData) {
        return label;
    }
    var /** @type {?} */ escapeStringRegExp = function (prop) { return prop.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'); };
    var /** @type {?} */ pattern = new RegExp("%{(" + Object.keys(replaceData).map(escapeStringRegExp).join('|') + ")}", 'g');
    return label.replace(pattern, function (match, prop) { return replaceData[prop] ? String(replaceData[prop]) : ''; });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InterpolateLabelPipe = /** @class */ (function () {
    function InterpolateLabelPipe() {
    }
    /**
     * @param {?} label
     * @param {?} replaceData
     * @return {?}
     */
    InterpolateLabelPipe.prototype.transform = /**
     * @param {?} label
     * @param {?} replaceData
     * @return {?}
     */
    function (label, replaceData) {
        if (!replaceData || !label) {
            return label;
        }
        return interpolate(label, replaceData);
    };
    InterpolateLabelPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'interpolateLabel',
                },] },
    ];
    return InterpolateLabelPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PluralizeLabelPipe = /** @class */ (function () {
    function PluralizeLabelPipe() {
    }
    /**
     * @param {?} label
     * @param {?} count
     * @return {?}
     */
    PluralizeLabelPipe.prototype.transform = /**
     * @param {?} label
     * @param {?} count
     * @return {?}
     */
    function (label, count) {
        if (!label || typeof label === 'string') {
            return /** @type {?} */ (label);
        }
        return count === 1 ? label.singular : label.plural;
    };
    PluralizeLabelPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'pluralizeLabel',
                },] },
    ];
    return PluralizeLabelPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Pipes = [
    PluralizeLabelPipe,
    InterpolateLabelPipe,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LabelsModule = /** @class */ (function () {
    function LabelsModule() {
    }
    LabelsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        Pipes,
                    ],
                    exports: [
                        Pipes,
                    ],
                },] },
    ];
    return LabelsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* Create a new injection token for injecting the window into a component. */
var /** @type {?} */ WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken');
/**
 * @abstract
 */
var  /**
 * @abstract
 */
WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
var BrowserWindowRef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));
/**
 * @param {?} browserWindowRef
 * @param {?} platformId
 * @return {?}
 */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
var /** @type {?} */ browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef,
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
var /** @type {?} */ windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
};
/* Create an array of providers. */
var /** @type {?} */ WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WindowModule = /** @class */ (function () {
    function WindowModule() {
    }
    WindowModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        WINDOW_PROVIDERS,
                    ],
                },] },
    ];
    return WindowModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL3V0aWxzL2xpYi9maWx0ZXIvY29tcG9uZW50cy9jaGVja2JveC1maWx0ZXIvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdXRpbHMvbGliL2ZpbHRlci9jb21wb25lbnRzL2lucHV0LWZpbHRlci9pbnB1dC1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly91dGlscy9saWIvZmlsdGVyL2NvbXBvbmVudHMvc2VsZWN0LWZpbHRlci9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdXRpbHMvbGliL2ZpbHRlci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly91dGlscy9saWIvZmlsdGVyL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlLnRzIiwibmc6Ly91dGlscy9saWIvZmlsdGVyL2ZpbHRlci5tb2R1bGUudHMiLCJuZzovL3V0aWxzL2xpYi9maWx0ZXIvY2xhc3Nlcy9maWx0ZXIuY2xhc3MudHMiLCJuZzovL3V0aWxzL2xpYi9sYWJlbHMvdXRpbHMvaW50ZXJwb2xhdGlvbi50cyIsIm5nOi8vdXRpbHMvbGliL2xhYmVscy9waXBlcy9pbnRlcnBvbGF0ZS1sYWJlbC5waXBlLnRzIiwibmc6Ly91dGlscy9saWIvbGFiZWxzL3BpcGVzL3BsdXJhbGl6ZS1sYWJlbC5waXBlLnRzIiwibmc6Ly91dGlscy9saWIvbGFiZWxzL3BpcGVzL2luZGV4LnRzIiwibmc6Ly91dGlscy9saWIvbGFiZWxzL2xhYmVscy5tb2R1bGUudHMiLCJuZzovL3V0aWxzL2xpYi93aW5kb3cvc2VydmljZXMvd2luZG93LnNlcnZpY2UudHMiLCJuZzovL3V0aWxzL2xpYi93aW5kb3cvd2luZG93Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9maWx0ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2hlY2tib3gtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJhLWxpc3QgYS1saXN0LS1yZXNldCBhdWktY2hlY2tib3gtZmlsdGVyXCIgKm5nSWY9XCJmaWx0ZXIgJiYgZmlsdGVyLm9wdGlvbnMgJiYgZmlsdGVyLmlkXCI+XG5cdDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlci5vcHRpb25zOyBsZXQgaSA9IGluZGV4O1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fY2hlY2tib3hcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtpZF09XCJvcHRpb24uaWRcIiBbbmFtZV09XCJvcHRpb24uaWRcIiBbKG5nTW9kZWwpXT1cIm9wdGlvbi5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXIoKVwiPlxuXHRcdFx0XHQ8bGFiZWwgW2Zvcl09XCJvcHRpb24uaWRcIj57eyBvcHRpb24ubmFtZSB9fTwvbGFiZWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9saT5cbjwvdWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmlsdGVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgZmlsdGVyO1xuXHRAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgdmFsdWU7XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLmZpbHRlcikge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMuZmlsdGVyLnZhbHVlO1xuXHRcdH1cblx0XHR0aGlzLm9uRmlsdGVyKCk7XG5cdH1cblxuXHRwdWJsaWMgb25GaWx0ZXIoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmZpbHRlci5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xuXHRcdFx0cmV0dXJuIG9wdGlvbi5jaGVja2VkO1xuXHRcdH0pO1xuXHRcdHRoaXMudXBkYXRlLmVtaXQodmFsdWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9maWx0ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaW5wdXQtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodCBhdWktaW5wdXQtZmlsdGVyXCI+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fd3JhcHBlclwiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cImZpbHRlci5uYW1lXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKHZhbHVlKVwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L3NwYW4+XG5cdFx0PC9kaXY+XG5cdDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmlsdGVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgZmlsdGVyO1xuXHRAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgdmFsdWU7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZmlsdGVyKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXIudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uRmlsdGVyKHZhbHVlKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2ZpbHRlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zZWxlY3QtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodCBhdWktc2VsZWN0LWZpbHRlclwiPlxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsdGVyICYmIGZpbHRlci5vcHRpb25zICYmIGZpbHRlci5pZFwiPlxuXHRcdDxsYWJlbCBjbGFzcz1cImEtaW5wdXRfX2xhYmVsIGEtaW5wdXRfX2xhYmVsLS1pbmxpbmVcIiBbZm9yXT1cImZpbHRlci5pZFwiPnt7IGZpbHRlci5uYW1lIH19OiA8L2xhYmVsPlxuXHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyIGEtaW5wdXRfX3dyYXBwZXItLWlubGluZVwiPlxuXHRcdFx0PHNlbGVjdCBbbmFtZV09XCJmaWx0ZXIuaWRcIiBbaWRdPVwiZmlsdGVyLmlkXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKHZhbHVlKVwiPlxuXHRcdFx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmlsdGVyLm9wdGlvbnM7IGxldCBpID0gaW5kZXg7XCIgW25nVmFsdWVdPVwib3B0aW9uXCI+e3sgb3B0aW9uLm5hbWUgfX08L29wdGlvbj5cblx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWx0ZXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBmaWx0ZXI7XG5cdEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyB2YWx1ZTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZmlsdGVyKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXIudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uRmlsdGVyKHZhbHVlKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENoZWNrYm94RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC1maWx0ZXIvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtZmlsdGVyL2lucHV0LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZmlsdGVyL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50JztcblxuXG5jb25zdCBDb21wb25lbnRzID0gW1xuXHRDaGVja2JveEZpbHRlckNvbXBvbmVudCxcblx0SW5wdXRGaWx0ZXJDb21wb25lbnQsXG5cdFNlbGVjdEZpbHRlckNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCB7XG5cdENvbXBvbmVudHMsXG5cblx0Q2hlY2tib3hGaWx0ZXJDb21wb25lbnQsXG5cdElucHV0RmlsdGVyQ29tcG9uZW50LFxuXHRTZWxlY3RGaWx0ZXJDb21wb25lbnQsXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi9jbGFzc2VzL2ZpbHRlci5jbGFzcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXJ2aWNlIHtcblx0cHVibGljIGZpbHRlckRhdGEoZGF0YTogYW55W10sIGZpbHRlcnM6IEZpbHRlcltdKSB7XG5cdFx0ZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcblx0XHRcdGRhdGEgPSBmaWx0ZXIucGFyc2VEYXRhKGRhdGEpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IEZpbHRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmlsdGVyU2VydmljZSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1vZHVsZSB7fVxuIiwiZXhwb3J0IGNsYXNzIEZpbHRlciB7XG5cdHB1YmxpYyBpZDogc3RyaW5nO1xuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRwdWJsaWMgb3B0aW9uczogYW55W107XG5cdHB1YmxpYyB2YWx1ZTogc3RyaW5nIHwgYW55W107XG5cdHB1YmxpYyBwYXJzZTogKGRhdGE6IGFueVtdLCB2YWx1ZTogYW55KSA9PiBhbnlbXTtcblxuXHRwdWJsaWMgcGFyc2VEYXRhKGRhdGEpIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJzZShkYXRhLCB0aGlzLnZhbHVlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgUmVwbGFjZURhdGEgfSBmcm9tICcuLi90eXBlcy9sYWJlbHMudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGUgPSAobGFiZWw6IHN0cmluZywgcmVwbGFjZURhdGE/OiBSZXBsYWNlRGF0YSk6IHN0cmluZyA9PiB7XG5cdGlmICghcmVwbGFjZURhdGEpIHtcblx0XHRyZXR1cm4gbGFiZWw7XG5cdH1cblxuXHRjb25zdCBlc2NhcGVTdHJpbmdSZWdFeHAgPSBwcm9wID0+IHByb3AucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKTtcblx0Y29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoYFxcJXsoJHtPYmplY3Qua2V5cyhyZXBsYWNlRGF0YSkubWFwKGVzY2FwZVN0cmluZ1JlZ0V4cCkuam9pbignfCcpfSlcXH1gLCAnZycpO1xuXG5cdHJldHVybiBsYWJlbC5yZXBsYWNlKHBhdHRlcm4sIChtYXRjaCwgcHJvcCkgPT4gcmVwbGFjZURhdGFbcHJvcF0gPyBTdHJpbmcocmVwbGFjZURhdGFbcHJvcF0pIDogJycpO1xufTtcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaW50ZXJwb2xhdGUgfSBmcm9tICcuLi91dGlscy9pbnRlcnBvbGF0aW9uJztcbmltcG9ydCB7IFJlcGxhY2VEYXRhLCBMYWJlbCB9IGZyb20gJy4uL3R5cGVzL2xhYmVscy50eXBlcyc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2ludGVycG9sYXRlTGFiZWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0ZUxhYmVsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0obGFiZWw6IHN0cmluZywgcmVwbGFjZURhdGE6IFJlcGxhY2VEYXRhKTogc3RyaW5nIHtcblx0XHRpZiAoIXJlcGxhY2VEYXRhIHx8ICFsYWJlbCkge1xuXHRcdFx0cmV0dXJuIGxhYmVsO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnRlcnBvbGF0ZShsYWJlbCwgcmVwbGFjZURhdGEpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vdHlwZXMvbGFiZWxzLnR5cGVzJztcblxuXG5AUGlwZSh7XG5cdG5hbWU6ICdwbHVyYWxpemVMYWJlbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBsdXJhbGl6ZUxhYmVsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0obGFiZWw6IExhYmVsfHN0cmluZywgY291bnQ6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0aWYgKCFsYWJlbCB8fCB0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gbGFiZWwgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb3VudCA9PT0gMSA/IGxhYmVsLnNpbmd1bGFyIDogbGFiZWwucGx1cmFsO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBQbHVyYWxpemVMYWJlbFBpcGUgfSBmcm9tICcuL3BsdXJhbGl6ZS1sYWJlbC5waXBlJztcbmltcG9ydCB7IEludGVycG9sYXRlTGFiZWxQaXBlIH0gZnJvbSAnLi9pbnRlcnBvbGF0ZS1sYWJlbC5waXBlJztcblxuZXhwb3J0IGNvbnN0IFBpcGVzID0gW1xuXHRQbHVyYWxpemVMYWJlbFBpcGUsXG5cdEludGVycG9sYXRlTGFiZWxQaXBlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBpcGVzIH0gZnJvbSAnLi9waXBlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBpcGVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGlwZXMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsc01vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDbGFzc1Byb3ZpZGVyLCBGYWN0b3J5UHJvdmlkZXIsIEluamVjdGlvblRva2VuLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiBDcmVhdGUgYSBuZXcgaW5qZWN0aW9uIHRva2VuIGZvciBpbmplY3RpbmcgdGhlIHdpbmRvdyBpbnRvIGEgY29tcG9uZW50LiAqL1xuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbignV2luZG93VG9rZW4nKTtcblxuLyogRGVmaW5lIGFic3RyYWN0IGNsYXNzIGZvciBvYnRhaW5pbmcgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgd2luZG93IG9iamVjdC4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaW5kb3dSZWYge1xuXHRnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdyB8IE9iamVjdCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuJyk7XG5cdH1cbn1cblxuLyogRGVmaW5lIGNsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgYWJzdHJhY3QgY2xhc3MgYW5kIHJldHVybnMgdGhlIG5hdGl2ZSB3aW5kb3cgb2JqZWN0LiAqL1xuZXhwb3J0IGNsYXNzIEJyb3dzZXJXaW5kb3dSZWYgZXh0ZW5kcyBXaW5kb3dSZWYge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cgfCBPYmplY3Qge1xuXHRcdHJldHVybiB3aW5kb3c7XG5cdH1cbn1cblxuLyogQ3JlYXRlIGFuIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuYXRpdmUgd2luZG93IG9iamVjdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aW5kb3dGYWN0b3J5KGJyb3dzZXJXaW5kb3dSZWY6IEJyb3dzZXJXaW5kb3dSZWYsIHBsYXRmb3JtSWQ6IE9iamVjdCk6IFdpbmRvdyB8IE9iamVjdCB7XG5cdGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuXHRcdHJldHVybiBicm93c2VyV2luZG93UmVmLm5hdGl2ZVdpbmRvdztcblx0fVxuXHRyZXR1cm4gbmV3IE9iamVjdCgpO1xufVxuXG4vKiBDcmVhdGUgYSBpbmplY3RhYmxlIHByb3ZpZGVyIGZvciB0aGUgV2luZG93UmVmIHRva2VuIHRoYXQgdXNlcyB0aGUgQnJvd3NlcldpbmRvd1JlZiBjbGFzcy4gKi9cbmNvbnN0IGJyb3dzZXJXaW5kb3dQcm92aWRlcjogQ2xhc3NQcm92aWRlciA9IHtcblx0cHJvdmlkZTogV2luZG93UmVmLFxuXHR1c2VDbGFzczogQnJvd3NlcldpbmRvd1JlZixcbn07XG5cbi8qIENyZWF0ZSBhbiBpbmplY3RhYmxlIHByb3ZpZGVyIHRoYXQgdXNlcyB0aGUgd2luZG93RmFjdG9yeSBmdW5jdGlvbiBmb3IgcmV0dXJuaW5nIHRoZSBuYXRpdmUgd2luZG93IG9iamVjdC4gKi9cbmNvbnN0IHdpbmRvd1Byb3ZpZGVyOiBGYWN0b3J5UHJvdmlkZXIgPSB7XG5cdHByb3ZpZGU6IFdJTkRPVyxcblx0dXNlRmFjdG9yeTogd2luZG93RmFjdG9yeSxcblx0ZGVwczogW1dpbmRvd1JlZiwgUExBVEZPUk1fSURdLFxufTtcblxuLyogQ3JlYXRlIGFuIGFycmF5IG9mIHByb3ZpZGVycy4gKi9cbmV4cG9ydCBjb25zdCBXSU5ET1dfUFJPVklERVJTID0gW1xuXHRicm93c2VyV2luZG93UHJvdmlkZXIsXG5cdHdpbmRvd1Byb3ZpZGVyLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdJTkRPV19QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL3dpbmRvdy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0V0lORE9XX1BST1ZJREVSUyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgV2luZG93TW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O3NCQW1Cb0IsSUFBSSxZQUFZLEVBQUU7Ozs7O0lBRzlCLDBDQUFROzs7O1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O0lBR1YsMENBQVE7Ozs7UUFDZCxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTTtZQUM5QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztnQkE5QnpCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsa2VBVVY7aUJBQ0E7Ozs7MkJBRUMsS0FBSzsyQkFDTCxNQUFNOztrQ0FuQlI7Ozs7Ozs7QUNBQTs7c0JBaUJvQixJQUFJLFlBQVksRUFBRTs7Ozs7SUFHckMsdUNBQVE7OztJQUFSO1FBQ0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDL0I7S0FDRDs7Ozs7SUFFTSx1Q0FBUTs7OztjQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztnQkF4QnpCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsNFVBUVY7aUJBQ0E7Ozs7MkJBRUMsS0FBSzsyQkFDTCxNQUFNOzsrQkFqQlI7Ozs7Ozs7QUNBQTs7c0JBb0JvQixJQUFJLFlBQVksRUFBRTs7Ozs7SUFHOUIsd0NBQVE7Ozs7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMvQjs7Ozs7O0lBR0ssd0NBQVE7Ozs7Y0FBQyxLQUFLO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Z0JBM0J6QixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDRuQkFXVjtpQkFDQTs7OzsyQkFFQyxLQUFLOzJCQUNMLE1BQU07O2dDQXBCUjs7Ozs7OztBQ0FBLHFCQUtNLFVBQVUsR0FBRztJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUNyQjs7Ozs7O0FDVEQ7Ozs7Ozs7O0lBTVEsa0NBQVU7Ozs7O2NBQUMsSUFBVyxFQUFFLE9BQWlCO1FBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3RCLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDOzs7Z0JBTmIsVUFBVTs7d0JBSlg7Ozs7Ozs7QUNBQTs7OztnQkFPQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osV0FBVztxQkFDWDtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsVUFBVTtxQkFDVjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsYUFBYTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTtxQkFDVjtpQkFDRDs7dUJBckJEOzs7Ozs7O0FDQUEsSUFBQTs7Ozs7OztJQU9RLDBCQUFTOzs7O2NBQUMsSUFBSTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7aUJBUnRDO0lBVUM7Ozs7Ozs7Ozs7O0FDUkQscUJBQWEsV0FBVyxHQUFHLFVBQUMsS0FBYSxFQUFFLFdBQXlCO0lBQ25FLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDYjtJQUVELHFCQUFNLGtCQUFrQixHQUFHLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsR0FBQSxDQUFDO0lBQy9FLHFCQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFeEcsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJLElBQUssT0FBQSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBQSxDQUFDLENBQUM7Q0FDbkc7Ozs7OztBQ1hEOzs7Ozs7OztJQVNDLHdDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLFdBQXdCO1FBQ2hELElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sV0FBVyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztLQUN2Qzs7Z0JBVkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxrQkFBa0I7aUJBQ3hCOzsrQkFQRDs7Ozs7OztBQ0FBOzs7Ozs7OztJQVNDLHNDQUFTOzs7OztJQUFULFVBQVUsS0FBbUIsRUFBRSxLQUFhO1FBQzNDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3hDLHlCQUFPLEtBQWUsRUFBQztTQUN2QjtRQUVELE9BQU8sS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7S0FDbkQ7O2dCQVZELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsZ0JBQWdCO2lCQUN0Qjs7NkJBUEQ7Ozs7Ozs7QUNBQSxxQkFHYSxLQUFLLEdBQUc7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUNwQjs7Ozs7O0FDTkQ7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNULFlBQVksRUFBRTt3QkFDYixLQUFLO3FCQUNMO29CQUNELE9BQU8sRUFBRTt3QkFDUixLQUFLO3FCQUNMO2lCQUNEOzt1QkFYRDs7Ozs7Ozs7Ozs7OztBQ0lBLHFCQUFhLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7OztBQUd4RDs7O0FBQUE7OztJQUNDLHNCQUFJLG1DQUFZOzs7O1FBQWhCO1lBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3BDOzs7T0FBQTtvQkFWRjtJQVdDLENBQUE7SUFHRDtJQUFzQ0Esb0NBQVM7SUFDOUM7ZUFDQyxpQkFBTztLQUNQO0lBRUQsc0JBQUksMENBQVk7Ozs7UUFBaEI7WUFDQyxPQUFPLE1BQU0sQ0FBQztTQUNkOzs7T0FBQTsyQkFyQkY7RUFjc0MsU0FBUyxFQVE5QyxDQUFBO0FBUkQ7Ozs7O0FBV0EsdUJBQThCLGdCQUFrQyxFQUFFLFVBQWtCO0lBQ25GLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7S0FDckM7SUFDRCxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7Q0FDcEI7O0FBR0QscUJBQU0scUJBQXFCLEdBQWtCO0lBQzVDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFFBQVEsRUFBRSxnQkFBZ0I7Q0FDMUIsQ0FBQzs7QUFHRixxQkFBTSxjQUFjLEdBQW9CO0lBQ3ZDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLGFBQWE7SUFDekIsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQztDQUM5QixDQUFDOztBQUdGLHFCQUFhLGdCQUFnQixHQUFHO0lBQy9CLHFCQUFxQjtJQUNyQixjQUFjO0NBQ2Q7Ozs7OztBQ2pERDs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ1QsU0FBUyxFQUFFO3dCQUNWLGdCQUFnQjtxQkFDaEI7aUJBQ0Q7O3VCQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./examples/avatar/fesm5/avatar.js":
/*!*****************************************!*\
  !*** ./examples/avatar/fesm5/avatar.js ***!
  \*****************************************/
/*! exports provided: AvatarDemoPageComponent, AvatarExamplesModule, AVATAR_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarDemoPageComponent", function() { return AvatarDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarExamplesModule", function() { return AvatarExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVATAR_EXAMPLES_ROUTES", function() { return AVATAR_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/avatar */ "./dist/avatar/fesm5/avatar.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AvatarDemoPageComponent = /** @class */ (function () {
    function AvatarDemoPageComponent() {
        this.importModule = 'import { AvatarModule } from \'@acpaas-ui/ngx-components/avatar\';';
        this.example1 = '<aui-avatar image="https://robohash.org/acpaas-ui" title="My image"></aui-avatar>';
        this.example2 = '<aui-avatar icon="fa fa-user" title="An icon" size="L"></aui-avatar>';
        this.example3 = '<aui-avatar letter="T" title="The letter T" size="S"></aui-avatar>';
    }
    AvatarDemoPageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<h1 class=\"h3 u-margin-bottom\">Avatar</h1>\n\n<div class=\"u-margin-bottom\">\n\t<aui-code-snippet [codeSnippet]=\"importModule\"></aui-code-snippet>\n</div>\n\n<div class=\"u-margin-bottom\">\n\t<div class=\"u-margin-bottom-xs\">\n\t\t<aui-avatar image=\"https://robohash.org/acpaas-ui\" title=\"My image\"></aui-avatar>\n\t</div>\n\t<aui-code-snippet [codeSnippet]=\"example1\"></aui-code-snippet>\n</div>\n\n<div class=\"u-margin-bottom\">\n\t<div class=\"u-margin-bottom-xs\">\n\t\t<aui-avatar icon=\"fa fa-user\" title=\"An icon\" size=\"L\"></aui-avatar>\n\t</div>\n\t<aui-code-snippet [codeSnippet]=\"example2\"></aui-code-snippet>\n</div>\n<div class=\"u-margin-bottom\">\n\t<div class=\"u-margin-bottom-xs\">\n\t\t<aui-avatar letter=\"T\" title=\"The letter T\" size=\"S\"></aui-avatar>\n\t</div>\n\t<aui-code-snippet [codeSnippet]=\"example3\"></aui-code-snippet>\n</div>\n",
                },] },
    ];
    return AvatarDemoPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Pages = [
    AvatarDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AvatarExamplesModule = /** @class */ (function () {
    function AvatarExamplesModule() {
    }
    AvatarExamplesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _acpaas_ui_ngx_components_avatar__WEBPACK_IMPORTED_MODULE_2__["AvatarModule"],
                        _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                    ],
                    declarations: [
                        Pages,
                    ],
                },] },
    ];
    return AvatarExamplesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ AVATAR_EXAMPLES_ROUTES = [
    {
        path: '',
        component: AvatarDemoPageComponent,
        pathMatch: 'full',
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hdmF0YXIvYXZhdGFyL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9hdmF0YXIvYXZhdGFyL3BhZ2VzL2luZGV4LnRzIiwibmc6Ly9hdmF0YXIvYXZhdGFyL2F2YXRhci5tb2R1bGUudHMiLCJuZzovL2F2YXRhci9hdmF0YXIvYXZhdGFyLnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgPGgxIGNsYXNzPVwiaDMgdS1tYXJnaW4tYm90dG9tXCI+QXZhdGFyPC9oMT5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiaW1wb3J0TW9kdWxlXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbS14c1wiPlxuXHRcdDxhdWktYXZhdGFyIGltYWdlPVwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYWNwYWFzLXVpXCIgdGl0bGU9XCJNeSBpbWFnZVwiPjwvYXVpLWF2YXRhcj5cblx0PC9kaXY+XG5cdDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJleGFtcGxlMVwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cblx0XHQ8YXVpLWF2YXRhciBpY29uPVwiZmEgZmEtdXNlclwiIHRpdGxlPVwiQW4gaWNvblwiIHNpemU9XCJMXCI+PC9hdWktYXZhdGFyPlxuXHQ8L2Rpdj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImV4YW1wbGUyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cblx0XHQ8YXVpLWF2YXRhciBsZXR0ZXI9XCJUXCIgdGl0bGU9XCJUaGUgbGV0dGVyIFRcIiBzaXplPVwiU1wiPjwvYXVpLWF2YXRhcj5cblx0PC9kaXY+XG5cdDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJleGFtcGxlM1wiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyRGVtb1BhZ2VDb21wb25lbnQge1xuXHRwdWJsaWMgaW1wb3J0TW9kdWxlID0gJ2ltcG9ydCB7IEF2YXRhck1vZHVsZSB9IGZyb20gXFwnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9hdmF0YXJcXCc7Jztcblx0cHVibGljIGV4YW1wbGUxID0gJzxhdWktYXZhdGFyIGltYWdlPVwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYWNwYWFzLXVpXCIgdGl0bGU9XCJNeSBpbWFnZVwiPjwvYXVpLWF2YXRhcj4nO1xuXHRwdWJsaWMgZXhhbXBsZTIgPSAnPGF1aS1hdmF0YXIgaWNvbj1cImZhIGZhLXVzZXJcIiB0aXRsZT1cIkFuIGljb25cIiBzaXplPVwiTFwiPjwvYXVpLWF2YXRhcj4nO1xuXHRwdWJsaWMgZXhhbXBsZTMgPSAnPGF1aS1hdmF0YXIgbGV0dGVyPVwiVFwiIHRpdGxlPVwiVGhlIGxldHRlciBUXCIgc2l6ZT1cIlNcIj48L2F1aS1hdmF0YXI+Jztcbn1cbiIsImltcG9ydCB7IEF2YXRhckRlbW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vL2RlbW8ucGFnZSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlcyA9IFtcblx0QXZhdGFyRGVtb1BhZ2VDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBdmF0YXJNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2F2YXRhcic7XG5pbXBvcnQgeyBDb2RlU25pcHBldE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvY29kZS1zbmlwcGV0JztcblxuaW1wb3J0IHsgUGFnZXMgfSBmcm9tICcuL3BhZ2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRBdmF0YXJNb2R1bGUsXG5cdFx0Q29kZVNuaXBwZXRNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBhZ2VzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJFeGFtcGxlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXZhdGFyRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IEFWQVRBUl9FWEFNUExFU19ST1VURVM6IFJvdXRlcyA9IFtcblx0e1xuXHRcdHBhdGg6ICcnLFxuXHRcdGNvbXBvbmVudDogQXZhdGFyRGVtb1BhZ2VDb21wb25lbnQsXG5cdFx0cGF0aE1hdGNoOiAnZnVsbCcsXG5cdH0sXG5dO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs0QkErQnVCLG9FQUFvRTt3QkFDeEUsbUZBQW1GO3dCQUNuRixzRUFBc0U7d0JBQ3RFLG9FQUFvRTs7O2dCQWhDdEYsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1M0JBeUJWO2lCQUNBOztrQ0E3QkQ7Ozs7Ozs7QUNBQSxxQkFFYSxLQUFLLEdBQUc7SUFDcEIsdUJBQXVCO0NBQ3ZCOzs7Ozs7QUNKRDs7OztnQkFPQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixpQkFBaUI7cUJBQ2pCO29CQUNELFlBQVksRUFBRTt3QkFDYixLQUFLO3FCQUNMO2lCQUNEOzsrQkFoQkQ7Ozs7Ozs7QUNFQSxxQkFFYSxzQkFBc0IsR0FBVztJQUM3QztRQUNDLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxTQUFTLEVBQUUsTUFBTTtLQUNqQjtDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./examples/calendar/fesm5/calendar.js":
/*!*********************************************!*\
  !*** ./examples/calendar/fesm5/calendar.js ***!
  \*********************************************/
/*! exports provided: DemoPageComponent, CalendarExamplesModule, CALENDAR_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPageComponent", function() { return DemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarExamplesModule", function() { return CalendarExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_EXAMPLES_ROUTES", function() { return CALENDAR_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/calendar */ "./dist/calendar/fesm5/calendar.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DemoPageComponent = /** @class */ (function () {
    function DemoPageComponent() {
        this.clickedDate = new Date();
        this.range = [1, 6];
        this.javascript1 = "import { CalendarModule } from '@acpaas-ui/ngx-components/calendar;'\n\n@NgModule({\n\timports: [\n\t\tCalendarModule.forChild([\n\t\t\t'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'\n\t\t], [\n\t\t\t'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'\n\t\t])\n\t]\n});\n\nexport class AppModule {};";
        this.javascript2 = "import { DateRange } from '@acpaas-ui/js-date-utils';\n\npublic clickedDate: Date = new Date();\npublic range: DateRange = [1, 6];\n\nselectDate(event) {\n\tif (event.complete) {\n\t\tthis.clickedDate = event.date;\n\t}\n}";
        this.html = "<aui-calendar\n\t[range]=\"range\"\n\t[selectedDate]=\"clickedDate\"\n\t(selectDate)=\"selectDate($event)\">\n</aui-calendar>";
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DemoPageComponent.prototype.changeDate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.complete) {
            this.clickedDate = event.date;
        }
    };
    DemoPageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<h1 class=\"h3 u-margin-bottom\">Calendar</h1>\n\n<div class=\"u-margin-bottom\">\n\t<aui-code-snippet [codeSnippet]=\"javascript1\"></aui-code-snippet>\n</div>\n\n<div class=\"u-margin-bottom\">\n\t<aui-code-snippet [codeSnippet]=\"javascript2\"></aui-code-snippet>\n</div>\n\n<div class=\"u-margin-bottom\">\n\t<aui-code-snippet [codeSnippet]=\"html\"></aui-code-snippet>\n</div>\n\n<div class=\"u-margin-bottom\">\n\t<div class=\"m-datepicker is-open\">\n\t\t<aui-calendar\n\t\t\t[range]=\"range\"\n\t\t\t[selectedDate]=\"clickedDate\"\n\t\t\t(selectDate)=\"changeDate($event)\">\n\t\t</aui-calendar>\n\t</div>\n</div>\n",
                },] },
    ];
    return DemoPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Pages = [
    DemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarExamplesModule = /** @class */ (function () {
    function CalendarExamplesModule() {
    }
    CalendarExamplesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _acpaas_ui_ngx_components_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"].forChild([
                            'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag',
                        ], [
                            'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
                        ]),
                        _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                    ],
                    declarations: [
                        Pages,
                    ],
                },] },
    ];
    return CalendarExamplesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CALENDAR_EXAMPLES_ROUTES = [
    {
        path: '',
        component: DemoPageComponent,
        pathMatch: 'full',
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NhbGVuZGFyL2NhbGVuZGFyL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9jYWxlbmRhci9jYWxlbmRhci9wYWdlcy9pbmRleC50cyIsIm5nOi8vY2FsZW5kYXIvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlLnRzIiwibmc6Ly9jYWxlbmRhci9jYWxlbmRhci9jYWxlbmRhci5yb3V0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUmFuZ2UgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGA8aDEgY2xhc3M9XCJoMyB1LW1hcmdpbi1ib3R0b21cIj5DYWxlbmRhcjwvaDE+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQxXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImh0bWxcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8ZGl2IGNsYXNzPVwibS1kYXRlcGlja2VyIGlzLW9wZW5cIj5cblx0XHQ8YXVpLWNhbGVuZGFyXG5cdFx0XHRbcmFuZ2VdPVwicmFuZ2VcIlxuXHRcdFx0W3NlbGVjdGVkRGF0ZV09XCJjbGlja2VkRGF0ZVwiXG5cdFx0XHQoc2VsZWN0RGF0ZSk9XCJjaGFuZ2VEYXRlKCRldmVudClcIj5cblx0XHQ8L2F1aS1jYWxlbmRhcj5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIERlbW9QYWdlQ29tcG9uZW50IHtcblx0cHVibGljIGNsaWNrZWREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblx0cHVibGljIHJhbmdlOiBEYXRlUmFuZ2UgPSBbMSwgNl07XG5cblx0cHVibGljIGphdmFzY3JpcHQxID0gYGltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jYWxlbmRhcjsnXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDYWxlbmRhck1vZHVsZS5mb3JDaGlsZChbXG5cdFx0XHQnTWFhbmRhZycsICdEaW5zZGFnJywgJ1dvZW5zZGFnJywgJ0RvbmRlcmRhZycsICdWcmlqZGFnJywgJ1phdGVyZGFnJywgJ1pvbmRhZydcblx0XHRdLCBbXG5cdFx0XHQnSmFudWFyaScsICdGZWJydWFyaScsICdNYWFydCcsICdBcHJpbCcsICdNZWknLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdHVzJywgJ1NlcHRlbWJlcicsICdPa3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuXHRcdF0pXG5cdF1cbn0pO1xuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9O2A7XG5cblx0cHVibGljIGphdmFzY3JpcHQyID0gYGltcG9ydCB7IERhdGVSYW5nZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbnB1YmxpYyBjbGlja2VkRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5wdWJsaWMgcmFuZ2U6IERhdGVSYW5nZSA9IFsxLCA2XTtcblxuc2VsZWN0RGF0ZShldmVudCkge1xuXHRpZiAoZXZlbnQuY29tcGxldGUpIHtcblx0XHR0aGlzLmNsaWNrZWREYXRlID0gZXZlbnQuZGF0ZTtcblx0fVxufWA7XG5cdHB1YmxpYyBodG1sID0gYDxhdWktY2FsZW5kYXJcblx0W3JhbmdlXT1cInJhbmdlXCJcblx0W3NlbGVjdGVkRGF0ZV09XCJjbGlja2VkRGF0ZVwiXG5cdChzZWxlY3REYXRlKT1cInNlbGVjdERhdGUoJGV2ZW50KVwiPlxuPC9hdWktY2FsZW5kYXI+YDtcblxuXHRwdWJsaWMgY2hhbmdlRGF0ZShldmVudCkge1xuXHRcdGlmIChldmVudC5jb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5jbGlja2VkRGF0ZSA9IGV2ZW50LmRhdGU7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBEZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgUGFnZXMgPSBbXG5cdERlbW9QYWdlQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2NhbGVuZGFyJztcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jb2RlLXNuaXBwZXQnO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdENhbGVuZGFyTW9kdWxlLmZvckNoaWxkKFtcblx0XHRcdCdNYWFuZGFnJywgJ0RpbnNkYWcnLCAnV29lbnNkYWcnLCAnRG9uZGVyZGFnJywgJ1ZyaWpkYWcnLCAnWmF0ZXJkYWcnLCAnWm9uZGFnJyxcblx0XHRcdF0sIFtcblx0XHRcdCdKYW51YXJpJywgJ0ZlYnJ1YXJpJywgJ01hYXJ0JywgJ0FwcmlsJywgJ01laScsICdKdW5pJywgJ0p1bGknLCAnQXVndXN0dXMnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInLFxuXHRcdF0pLFxuXHRcdENvZGVTbmlwcGV0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFeGFtcGxlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0VYQU1QTEVTX1JPVVRFUzogUm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJycsXG5cdFx0Y29tcG9uZW50OiBEZW1vUGFnZUNvbXBvbmVudCxcblx0XHRwYXRoTWF0Y2g6ICdmdWxsJyxcblx0fSxcbl07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OzJCQThCNEIsSUFBSSxJQUFJLEVBQUU7cUJBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzJCQUVYLG9aQVlLOzJCQUVMLGdPQVNwQjtvQkFDYSwrSEFJQzs7Ozs7O0lBRVIsc0NBQVU7Ozs7Y0FBQyxLQUFLO1FBQ3RCLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDOUI7OztnQkEvREYsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpbkJBdUJWO2lCQUNBOzs0QkE1QkQ7Ozs7Ozs7QUNBQSxxQkFFYSxLQUFLLEdBQUc7SUFDcEIsaUJBQWlCO0NBQ2pCOzs7Ozs7QUNKRDs7OztnQkFPQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osY0FBYyxDQUFDLFFBQVEsQ0FBQzs0QkFDdkIsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUTt5QkFDN0UsRUFBRTs0QkFDSCxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7eUJBQzFILENBQUM7d0JBQ0YsaUJBQWlCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsS0FBSztxQkFDTDtpQkFDRDs7aUNBcEJEOzs7Ozs7O0FDRUEscUJBRWEsd0JBQXdCLEdBQVc7SUFDL0M7UUFDQyxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxpQkFBaUI7UUFDNUIsU0FBUyxFQUFFLE1BQU07S0FDakI7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./examples/logo/fesm5/logo.js":
/*!*************************************!*\
  !*** ./examples/logo/fesm5/logo.js ***!
  \*************************************/
/*! exports provided: LogoDemoPageComponent, LogoExamplesModule, LOGO_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoDemoPageComponent", function() { return LogoDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoExamplesModule", function() { return LogoExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO_EXAMPLES_ROUTES", function() { return LOGO_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/logo */ "./dist/logo/fesm5/logo.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoDemoPageComponent = /** @class */ (function () {
    function LogoDemoPageComponent() {
    }
    LogoDemoPageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<h1 class=\"h3 u-margin-bottom\">Logo</h1>\n\n<aui-logo src=\"https://robohash.org/acpaas-ui\"></aui-logo>\n",
                },] },
    ];
    return LogoDemoPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Pages = [
    LogoDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoExamplesModule = /** @class */ (function () {
    function LogoExamplesModule() {
    }
    LogoExamplesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _acpaas_ui_ngx_components_logo__WEBPACK_IMPORTED_MODULE_2__["LogoModule"],
                    ],
                    declarations: [
                        Pages,
                    ],
                },] },
    ];
    return LogoExamplesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LOGO_EXAMPLES_ROUTES = [
    {
        path: '',
        component: LogoDemoPageComponent,
        pathMatch: 'full',
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9nby9sb2dvL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9sb2dvL2xvZ28vcGFnZXMvaW5kZXgudHMiLCJuZzovL2xvZ28vbG9nby9sb2dvLm1vZHVsZS50cyIsIm5nOi8vbG9nby9sb2dvL2xvZ28ucm91dGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGA8aDEgY2xhc3M9XCJoMyB1LW1hcmdpbi1ib3R0b21cIj5Mb2dvPC9oMT5cblxuPGF1aS1sb2dvIHNyYz1cImh0dHBzOi8vcm9ib2hhc2gub3JnL2FjcGFhcy11aVwiPjwvYXVpLWxvZ28+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvRGVtb1BhZ2VDb21wb25lbnQge31cbiIsImltcG9ydCB7IExvZ29EZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgUGFnZXMgPSBbXG5cdExvZ29EZW1vUGFnZUNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExvZ29Nb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2xvZ28nO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdExvZ29Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBhZ2VzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvRXhhbXBsZXNNb2R1bGUge31cbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ29EZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgTE9HT19FWEFNUExFU19ST1VURVM6IFJvdXRlcyA9IFtcblx0e1xuXHRcdHBhdGg6ICcnLFxuXHRcdGNvbXBvbmVudDogTG9nb0RlbW9QYWdlQ29tcG9uZW50LFxuXHRcdHBhdGhNYXRjaDogJ2Z1bGwnLFxuXHR9LFxuXTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O2dCQUVDLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsOEdBR1Y7aUJBQ0E7O2dDQVBEOzs7Ozs7O0FDQUEscUJBRWEsS0FBSyxHQUFHO0lBQ3BCLHFCQUFxQjtDQUNyQjs7Ozs7O0FDSkQ7Ozs7Z0JBTUMsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFVBQVU7cUJBQ1Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLEtBQUs7cUJBQ0w7aUJBQ0Q7OzZCQWREOzs7Ozs7O0FDRUEscUJBRWEsb0JBQW9CLEdBQVc7SUFDM0M7UUFDQyxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsU0FBUyxFQUFFLE1BQU07S0FDakI7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./examples/selectable-list/fesm5/selectable-list.js":
/*!***********************************************************!*\
  !*** ./examples/selectable-list/fesm5/selectable-list.js ***!
  \***********************************************************/
/*! exports provided: SelectableListDemoPageComponent, SelectableListExamplesModule, SELECTABLE_LIST_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableListDemoPageComponent", function() { return SelectableListDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableListExamplesModule", function() { return SelectableListExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTABLE_LIST_EXAMPLES_ROUTES", function() { return SELECTABLE_LIST_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_selectable_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/selectable-list */ "./dist/selectable-list/fesm5/selectable-list.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableListDemoPageComponent = /** @class */ (function () {
    function SelectableListDemoPageComponent() {
        this.index = 0;
        this.heroes = [
            { name: 'Spiderman' },
            { name: 'Wolverine' },
            { name: 'Iron man' },
        ];
        this.activeHero = this.heroes[this.index];
        this.javascript1 = "import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';\n\n@NgModule({\n\timports: [\n\t\tSelectableListModule\n\t]\n});\n\nexport class AppModule {};";
        this.javascript2 = "public index = 0;\n\npublic heroes = [\n\t{ name: 'spiderman' },\n\t{ name: 'wolverine' },\n\t{ name: 'ironman' }\n];\n\npublic activeHero = this.heroes[this.index];\n\npublic onSelect(item) {\n\tthis.index = this.heroes.findIndex(hero => hero.name === item.name);\n\tthis.activeHero = item;\n}";
        this.html = "<h4>Select your hero</h4>\n<aui-selectable-list [items]=\"heroes\" [index]=\"index\" (selected)=\"onSelect($event)\">\n   <ng-template let-item=\"item\">\n\t   Template for: <b>{{ item.name }}</b>\n   </ng-template>\n</aui-selectable-list>\n<p><strong>Active hero</strong>: {{ activeHero.name }}</p>";
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SelectableListDemoPageComponent.prototype.onSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.index = this.heroes.findIndex(function (hero) { return hero.name === item.name; });
        this.activeHero = item;
    };
    SelectableListDemoPageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<h1 class=\"h3 u-margin-bottom\">Selectable list</h1>\n<div class=\"u-margin-bottom\">\n\t<aui-code-snippet [codeSnippet]=\"javascript1\"></aui-code-snippet>\n</div>\n\n<div class=\"u-margin-bottom\">\n\t<aui-code-snippet [codeSnippet]=\"javascript2\"></aui-code-snippet>\n</div>\n\n<div class=\"u-margin-bottom\">\n\t<aui-code-snippet [codeSnippet]=\"html\"></aui-code-snippet>\n</div>\n\n<div class=\"u-margin-bottom\">\n\t<h2 class=\"h4 u-margin-bottom\">Select your hero</h2>\n\t<aui-selectable-list [items]=\"heroes\" [index]=\"index\" (selected)=\"onSelect($event)\">\n\t\t<ng-template let-item=\"item\">\n\t\t\tTemplate for: <b>{{ item.name }}</b>\n\t\t</ng-template>\n\t</aui-selectable-list>\n\t<p class=\"u-margin-top\"><strong>Active hero</strong>: {{ activeHero.name }}</p>\n</div>\n",
                },] },
    ];
    return SelectableListDemoPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Pages = [
    SelectableListDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableListExamplesModule = /** @class */ (function () {
    function SelectableListExamplesModule() {
    }
    SelectableListExamplesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _acpaas_ui_ngx_components_selectable_list__WEBPACK_IMPORTED_MODULE_2__["SelectableListModule"],
                        _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                    ],
                    declarations: [
                        Pages,
                    ],
                },] },
    ];
    return SelectableListExamplesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ SELECTABLE_LIST_EXAMPLES_ROUTES = [
    {
        path: '',
        component: SelectableListDemoPageComponent,
        pathMatch: 'full',
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1saXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0L3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0L3BhZ2VzL2luZGV4LnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0L3NlbGVjdGFibGUtbGlzdC5tb2R1bGUudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0LnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgPGgxIGNsYXNzPVwiaDMgdS1tYXJnaW4tYm90dG9tXCI+U2VsZWN0YWJsZSBsaXN0PC9oMT5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQxXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImh0bWxcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8aDIgY2xhc3M9XCJoNCB1LW1hcmdpbi1ib3R0b21cIj5TZWxlY3QgeW91ciBoZXJvPC9oMj5cblx0PGF1aS1zZWxlY3RhYmxlLWxpc3QgW2l0ZW1zXT1cImhlcm9lc1wiIFtpbmRleF09XCJpbmRleFwiIChzZWxlY3RlZCk9XCJvblNlbGVjdCgkZXZlbnQpXCI+XG5cdFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPlxuXHRcdFx0VGVtcGxhdGUgZm9yOiA8Yj57eyBpdGVtLm5hbWUgfX08L2I+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0PC9hdWktc2VsZWN0YWJsZS1saXN0PlxuXHQ8cCBjbGFzcz1cInUtbWFyZ2luLXRvcFwiPjxzdHJvbmc+QWN0aXZlIGhlcm88L3N0cm9uZz46IHt7IGFjdGl2ZUhlcm8ubmFtZSB9fTwvcD5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0YWJsZUxpc3REZW1vUGFnZUNvbXBvbmVudCB7XG5cdHB1YmxpYyBpbmRleCA9IDA7XG5cblx0cHVibGljIGhlcm9lcyA9IFtcblx0XHR7IG5hbWU6ICdTcGlkZXJtYW4nIH0sXG5cdFx0eyBuYW1lOiAnV29sdmVyaW5lJyB9LFxuXHRcdHsgbmFtZTogJ0lyb24gbWFuJyB9LFxuXHRdO1xuXG5cdHB1YmxpYyBhY3RpdmVIZXJvID0gdGhpcy5oZXJvZXNbdGhpcy5pbmRleF07XG5cblx0cHVibGljIGphdmFzY3JpcHQxID0gYGltcG9ydCB7IFNlbGVjdGFibGVMaXN0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9zZWxlY3RhYmxlLWxpc3QnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0U2VsZWN0YWJsZUxpc3RNb2R1bGVcblx0XVxufSk7XG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge307YDtcblxuXHRwdWJsaWMgamF2YXNjcmlwdDIgPSBgcHVibGljIGluZGV4ID0gMDtcblxucHVibGljIGhlcm9lcyA9IFtcblx0eyBuYW1lOiAnc3BpZGVybWFuJyB9LFxuXHR7IG5hbWU6ICd3b2x2ZXJpbmUnIH0sXG5cdHsgbmFtZTogJ2lyb25tYW4nIH1cbl07XG5cbnB1YmxpYyBhY3RpdmVIZXJvID0gdGhpcy5oZXJvZXNbdGhpcy5pbmRleF07XG5cbnB1YmxpYyBvblNlbGVjdChpdGVtKSB7XG5cdHRoaXMuaW5kZXggPSB0aGlzLmhlcm9lcy5maW5kSW5kZXgoaGVybyA9PiBoZXJvLm5hbWUgPT09IGl0ZW0ubmFtZSk7XG5cdHRoaXMuYWN0aXZlSGVybyA9IGl0ZW07XG59YDtcblxuXHRwdWJsaWMgaHRtbCA9IGA8aDQ+U2VsZWN0IHlvdXIgaGVybzwvaDQ+XG48YXVpLXNlbGVjdGFibGUtbGlzdCBbaXRlbXNdPVwiaGVyb2VzXCIgW2luZGV4XT1cImluZGV4XCIgKHNlbGVjdGVkKT1cIm9uU2VsZWN0KCRldmVudClcIj5cbiAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cblx0ICAgVGVtcGxhdGUgZm9yOiA8Yj57eyBpdGVtLm5hbWUgfX08L2I+XG4gICA8L25nLXRlbXBsYXRlPlxuPC9hdWktc2VsZWN0YWJsZS1saXN0PlxuPHA+PHN0cm9uZz5BY3RpdmUgaGVybzwvc3Ryb25nPjoge3sgYWN0aXZlSGVyby5uYW1lIH19PC9wPmA7XG5cblx0cHVibGljIG9uU2VsZWN0KGl0ZW0pIHtcblx0XHR0aGlzLmluZGV4ID0gdGhpcy5oZXJvZXMuZmluZEluZGV4KGhlcm8gPT4gaGVyby5uYW1lID09PSBpdGVtLm5hbWUpO1xuXHRcdHRoaXMuYWN0aXZlSGVybyA9IGl0ZW07XG5cdH1cblxufVxuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZUxpc3REZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgUGFnZXMgPSBbXG5cdFNlbGVjdGFibGVMaXN0RGVtb1BhZ2VDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWxlY3RhYmxlTGlzdE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvc2VsZWN0YWJsZS1saXN0JztcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jb2RlLXNuaXBwZXQnO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFNlbGVjdGFibGVMaXN0TW9kdWxlLFxuXHRcdENvZGVTbmlwcGV0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0YWJsZUxpc3RFeGFtcGxlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZUxpc3REZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUQUJMRV9MSVNUX0VYQU1QTEVTX1JPVVRFUzogUm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJycsXG5cdFx0Y29tcG9uZW50OiBTZWxlY3RhYmxlTGlzdERlbW9QYWdlQ29tcG9uZW50LFxuXHRcdHBhdGhNYXRjaDogJ2Z1bGwnLFxuXHR9LFxuXTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7cUJBNEJnQixDQUFDO3NCQUVBO1lBQ2YsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3JCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUNyQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7U0FDcEI7MEJBRW1CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzsyQkFFdEIsa0xBUUs7MkJBRUwsd1NBYXBCO29CQUVhLDZTQU00Qzs7Ozs7O0lBRW5ELGtEQUFROzs7O2NBQUMsSUFBSTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFBLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7O2dCQXZFeEIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw2eEJBc0JWO2lCQUNBOzswQ0ExQkQ7Ozs7Ozs7QUNBQSxxQkFFYSxLQUFLLEdBQUc7SUFDcEIsK0JBQStCO0NBQy9COzs7Ozs7QUNKRDs7OztnQkFPQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixpQkFBaUI7cUJBQ2pCO29CQUNELFlBQVksRUFBRTt3QkFDYixLQUFLO3FCQUNMO2lCQUNEOzt1Q0FoQkQ7Ozs7Ozs7QUNFQSxxQkFFYSwrQkFBK0IsR0FBVztJQUN0RDtRQUNDLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLCtCQUErQjtRQUMxQyxTQUFTLEVBQUUsTUFBTTtLQUNqQjtDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./styleguide/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./styleguide/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./styleguide/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./styleguide/app/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./styleguide/app/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./styleguide/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./styleguide/app/app.component.html":
/*!*******************************************!*\
  !*** ./styleguide/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<guide-header></guide-header>\n\n<main>\n\t<router-outlet></router-outlet>\n</main>\n\n<guide-footer></guide-footer>\n"

/***/ }),

/***/ "./styleguide/app/app.component.scss":
/*!*******************************************!*\
  !*** ./styleguide/app/app.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./styleguide/app/app.component.ts":
/*!*****************************************!*\
  !*** ./styleguide/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _examples_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples.routes */ "./styleguide/app/examples.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.packages = _examples_routes__WEBPACK_IMPORTED_MODULE_1__["EXAMPLES_ROUTES"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-root',
            template: __webpack_require__(/*! ./app.component.html */ "./styleguide/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./styleguide/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./styleguide/app/app.module.ts":
/*!**************************************!*\
  !*** ./styleguide/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./styleguide/app/app.component.ts");
/* harmony import */ var _aui_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aui.modules */ "./styleguide/app/aui.modules.ts");
/* harmony import */ var _examples_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples.modules */ "./styleguide/app/examples.modules.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./styleguide/app/app-routing.module.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index */ "./styleguide/app/components/index.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/index */ "./styleguide/app/pages/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_index__WEBPACK_IMPORTED_MODULE_6__["Components"],
                _pages_index__WEBPACK_IMPORTED_MODULE_7__["Pages"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _aui_modules__WEBPACK_IMPORTED_MODULE_3__["AUIModules"],
                _examples_modules__WEBPACK_IMPORTED_MODULE_4__["ExamplesModules"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./styleguide/app/app.routes.ts":
/*!**************************************!*\
  !*** ./styleguide/app/app.routes.ts ***!
  \**************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./styleguide/app/pages/index.ts");
/* harmony import */ var _examples_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples.routes */ "./styleguide/app/examples.routes.ts");


var ROUTES = [
    { path: '', redirectTo: '/modules', pathMatch: 'full', },
    { path: 'modules', component: _pages__WEBPACK_IMPORTED_MODULE_0__["ModulesPageComponent"], children: _examples_routes__WEBPACK_IMPORTED_MODULE_1__["EXAMPLES_ROUTES"] },
    { path: '**', component: _pages__WEBPACK_IMPORTED_MODULE_0__["NotFoundPageComponent"] },
];


/***/ }),

/***/ "./styleguide/app/aui.modules.ts":
/*!***************************************!*\
  !*** ./styleguide/app/aui.modules.ts ***!
  \***************************************/
/*! exports provided: AUIModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUIModules", function() { return AUIModules; });
/* harmony import */ var _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acpaas-ui/ngx-components/layout */ "./dist/layout/fesm5/layout.js");
/* harmony import */ var _acpaas_ui_ngx_components_logo_esm2015__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-components/logo/esm2015 */ "./dist/logo/esm2015/index.js");


var AUIModules = [
    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"],
    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_0__["HeroModule"],
    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_0__["FooterModule"],
    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_0__["PaneModule"],
    _acpaas_ui_ngx_components_logo_esm2015__WEBPACK_IMPORTED_MODULE_1__["LogoModule"],
];


/***/ }),

/***/ "./styleguide/app/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./styleguide/app/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aui-footer>\n    <div auiFooterContent>\n        <div class=\"u-container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 col-md-3 u-margin-bottom-xs u-margin-top-xs\">\n                    <h3 class=\"h5\">ACPaaS UI</h3>\n                    <ul class=\"a-list a-list--unstyled\">\n                        <li><a href=\"https://github.com/digipolisantwerp/acpaas-ui_react\" class=\"has-icon-right\" target=\"_blank\">React library<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://a-ui.github.io/core_branding_scss\" class=\"has-icon-right\" target=\"_blank\">Core branding<i class=\"fa fa-external-link\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-3 u-margin-bottom-xs u-margin-top-xs\">\n                    <h3 class=\"h5\">ACPaaS</h3>\n                    <ul class=\"a-list a-list--unstyled\">\n                        <li><a href=\"https://acpaas.digipolis.be/\" class=\"has-icon-right\" target=\"_blank\">ACPaaS Portal<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://acpaas.digipolis.be/nl/support?product=acpaas-ui\" class=\"has-icon-right\" target=\"_blank\">Support<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://acpaas.digipolis.be/nl/feature-request?product=acpaas-ui\" class=\"has-icon-right\" target=\"_blank\">Feature request<i class=\"fa fa-external-link\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-3 u-margin-bottom-xs u-margin-top-xs\">\n                    <h3 class=\"h5\">Digitale Stad van Morgen</h3>\n                    <ul class=\"a-list a-list--unstyled\">\n                        <li><a href=\"https://antwerpen.digipolis.be/nl/opdrachten\" class=\"has-icon-right\" target=\"_blank\">Opdrachten<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://www.digipolis.be\" class=\"has-icon-right\" target=\"_blank\">Digipolis<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://onstage.digipolis.be\" class=\"has-icon-right\" target=\"_blank\">Stages<i class=\"fa fa-external-link\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-3 u-margin-bottom-xs u-margin-top-xs\">\n                    <p class=\"u-margin-bottom\">Een project van Digipolis &amp; de Groep Stad Antwerpen</p>\n                    <ul class=\"m-button-list m-button-list--horizontal\">\n                        <li><a href=\"https://www.facebook.com/Digipolis\" target=\"_blank\" class=\"a-button a-button--facebook has-icon\"><i class=\"fa fa-facebook\"></i></a></li>\n                        <li><a href=\"https://twitter.com/Dgplsantwerpen\" target=\"_blank\" class=\"a-button a-button--twitter has-icon\"><i class=\"fa fa-twitter\"></i></a></li>\n                        <li><a href=\"https://www.linkedin.com/company/digipolis\" target=\"_blank\" class=\"a-button a-button--linkedin has-icon\"><i class=\"fa fa-linkedin\"></i></a></li>\n                        <li><a href=\"https://www.instagram.com/digipolis_antwerpen\" target=\"_blank\" class=\"a-button a-button--instagram has-icon\"><i class=\"fa fa-instagram\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div auiFooterBottom>\n        <aui-subfooter>\n            <aui-copyright domain=\"Digipolis\"></aui-copyright>\n        </aui-subfooter>\n    </div>\n</aui-footer>\n"

/***/ }),

/***/ "./styleguide/app/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./styleguide/app/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./styleguide/app/components/footer/footer.component.html"),
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./styleguide/app/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./styleguide/app/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aui-header>\n    <div auiHeaderContent>\n        <div auiHeaderLogo class=\"o-header__wrapper\">\n            <aui-logo title=\"ACPaaS UI\" src=\"./assets/digipolis-logo.svg\"></aui-logo>\n            <a class=\"o-header__link\" [routerLink]=\"['/']\">ACPaaS UI Angular modules</a>\n        </div>\n    </div>\n\t<div auiHeaderMenuItem>\n        <a href=\"http://github.com/digipolisantwerp/acpaas-ui_angular\" class=\"a-button a-button--navigation has-icon-left\" target=\"_blank\">\n            <i class=\"fa fa-github\"></i>GitHub\n        </a>\n    </div>\n</aui-header>\n"

/***/ }),

/***/ "./styleguide/app/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./styleguide/app/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-header',
            template: __webpack_require__(/*! ./header.component.html */ "./styleguide/app/components/header/header.component.html"),
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./styleguide/app/components/hero/hero.component.html":
/*!************************************************************!*\
  !*** ./styleguide/app/components/hero/hero.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"o-hero\" [ngClass]=\"{'is-large': description}\">\n\t<div class=\"u-container u-text-center u-margin-bottom u-margin-top u-text-readable\">\n\t\t<img src=\"./assets/acpaas-ui.svg\" alt=\"ACPaaS UI logo\" width=\"128\" height=\"128\">\n\t\t<div>\n\t\t\t<h1>{{title}}</h1>\n\t\t\t<p class=\"u-margin-top\" *ngIf=\"description\">{{description}}</p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./styleguide/app/components/hero/hero.component.scss":
/*!************************************************************!*\
  !*** ./styleguide/app/components/hero/hero.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * QUARKS\n * -------------------------------------------------------------------\n */\n/**\n * MIXINS\n * -------------------------------------------------------------------\n * Collection of custom mixins\n */\n/**\n * FONT FACE\n * -------------------------------------------------------------------\n */\n/**\n * BUTTON MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * BUTTON OUTLINE MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * INPUT MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * INPUT PLACEHOLDER MIXIN\n * -------------------------------------------------------------------\n * Change base styling for placeholder text on input fields\n * Note: Styling the placeholder text is not supported on older\n * browsers, use a html5-placeholder ployfill for that\n *\n * Background info:\n * - http://davidwalsh.name/html5-placeholder\n * - http://davidwalsh.name/placeholder-overflow\n * - http://jamesallardice.github.io/Placeholders.js\n */\n/**\n * ALERT MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * BADGE MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * LABEL MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * TOOLTIP MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * CLEARFIX\n * -------------------------------------------------------------------\n */\n/**\n * FONT AWESOME\n * -------------------------------------------------------------------\n */\n/**\n * MEDIA QUERIES MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * FUNCTIONS\n * -------------------------------------------------------------------\n * Collection of custom functions\n */\n/**\n * STRIP UNIT FROM VALUE\n * -------------------------------------------------------------------\n */\n/**\n * CONVERT PX TO REM\n * -------------------------------------------------------------------\n */\n/**\n * RAISE NUMBER TO CERTAIN POWER\n * -------------------------------------------------------------------\n */\n/**\n * HANDLING Z-INDEX LAYERS\n * -------------------------------------------------------------------\n */\n/**\n * COLORS\n * -------------------------------------------------------------------\n * Collection of all available branding colors\n */\n/**\n * COMPLETE COLOR PALETTE\n * -------------------------------------------------------------------\n * Variable names generated by Name That Color\n * http://chir.ag/projects/name-that-color\n */\n/**\n * GRAYSCALE COLOR PALETTE\n * -------------------------------------------------------------------\n * Collection of grayscale colors\n */\n/**\n * SOCIAL BRAND COLOR PALETTE\n * -------------------------------------------------------------------\n * Collection of social branding colors\n */\n/**\n * GLOBAL VARIABLES\n * -------------------------------------------------------------------\n */\n/**\n * SPECIFIC COLOR PALETTE\n * -------------------------------------------------------------------\n */\n/**\n * SPACERS\n * -------------------------------------------------------------------\n */\n/**\n * BREAKPOINTS\n * -------------------------------------------------------------------\n */\n/**\n * FONT FAMILIES\n * -------------------------------------------------------------------\n */\n/**\n * FONT SIZES\n * -------------------------------------------------------------------\n */\n/**\n * LINE HEIGHTS\n * -------------------------------------------------------------------\n */\n/**\n * FONT WEIGHTS\n * -------------------------------------------------------------------\n */\n/**\n * OTHER TYPOGRAPHY\n * -------------------------------------------------------------------\n */\n/**\n * ANIMATIONS\n * -------------------------------------------------------------------\n */\n/**\n * Z-INDEXES\n * -------------------------------------------------------------------\n * http://www.sitepoint.com/better-solution-managing-z-index-sass/\n *\n * Use like this:\n *   z-index: layer(\"overlay\");\n *     where overlay is a list item of the default list \"$z-indexes\" (see below)\n *\n * The list is also upgradeable in that nesting is permitted, e.g.:\n * $z-indexes: (\n *   'modal': (\n *     'back': 50,\n *     'front': 60\n *   ),\n *   'navigation': 40,\n *   ...\n * )\n */\n/**\n * ICON SIZES\n * -------------------------------------------------------------------\n */\n/**\n * BOX SHADOWS\n * -------------------------------------------------------------------\n */\n/**\n * LINKS\n * -------------------------------------------------------------------\n * Define text and hover color for each hyperlink\n */\n/**\n * LISTS\n * -------------------------------------------------------------------\n * Define default paddings for lists\n */\n/**\n * PRE\n * -------------------------------------------------------------------\n * Define text and background color for each code element\n */\n/**\n * CODE\n * -------------------------------------------------------------------\n * Define text and background color for each code element\n */\n/**\n * MARK\n * -------------------------------------------------------------------\n * Define text and background color for each mark element\n */\n/**\n * CITE\n * -------------------------------------------------------------------\n */\n/**\n * FIGCAPTION\n * -------------------------------------------------------------------\n */\n/**\n * TABLES\n * -------------------------------------------------------------------\n * Define background and border color for each table\n */\n/**\n * BUTTONS\n * -------------------------------------------------------------------\n * Define text, background and border color for each button\n */\n/**\n * FORMS\n * -------------------------------------------------------------------\n * Define text, background, border and placeholder color for each input\n */\n/**\n * RADIO BUTTONS & CHECKBOXES\n * -------------------------------------------------------------------\n */\n/**\n * SWITCHES\n * -------------------------------------------------------------------\n * WATCH OUT\n * $progress-height and $range-slider-height are equal to $switch-height\n * In this way, changing the height of the switch will also affect the height of the progress bar and range slider\n */\n/**\n * FIELDSET\n * -------------------------------------------------------------------\n */\n/**\n * TOOLTIP\n * -------------------------------------------------------------------\n */\n/**\n * PROGRESS\n * -------------------------------------------------------------------\n * WATCH OUT\n * $range-slider-offset is equal to $tooltip-offset\n * In this way, changing the offset of the progress bar will also affect the offset of the range slider\n */\n/**\n * RANGE SLIDER\n * -------------------------------------------------------------------\n */\n/**\n * LINK LIST\n * -------------------------------------------------------------------\n */\n/**\n * DATEPICKER\n * -------------------------------------------------------------------\n */\n/**\n * ACCORDION\n * -------------------------------------------------------------------\n */\n/**\n * ALERTS\n * -------------------------------------------------------------------\n */\n/**\n * AVATARS\n * -------------------------------------------------------------------\n */\n/**\n * BADGES\n * -------------------------------------------------------------------\n */\n/**\n * BREADCRUMBS\n * -------------------------------------------------------------------\n */\n/**\n * CARDS\n * -------------------------------------------------------------------\n */\n/**\n * COPYRIGHT\n * -------------------------------------------------------------------\n */\n/**\n * LABELS\n * -------------------------------------------------------------------\n */\n/**\n * TAGS\n * -------------------------------------------------------------------\n */\n/**\n * FLYOUT\n * -------------------------------------------------------------------\n */\n/**\n * FOOTER\n * -------------------------------------------------------------------\n */\n/**\n * HEADER\n * -------------------------------------------------------------------\n */\n/**\n * SPINNER\n * -------------------------------------------------------------------\n */\n/**\n * ICON LIST\n * -------------------------------------------------------------------\n */\n/**\n * OVERLAY\n * -------------------------------------------------------------------\n */\n/**\n * MODAL\n * -------------------------------------------------------------------\n */\n/**\n * NAVIGATION\n * -------------------------------------------------------------------\n */\n/**\n * PAGINATION\n * -------------------------------------------------------------------\n */\n/**\n * STEP INDICATOR\n * -------------------------------------------------------------------\n */\n/**\n * UPLOAD\n * -------------------------------------------------------------------\n */\n/**\n * GALLERY\n * -------------------------------------------------------------------\n */\n/**\n * SLIDESHOW\n * -------------------------------------------------------------------\n */\n.o-hero {\n  align-items: center;\n  background-color: #0064b4;\n  background-image: url(\"https://digipolisantwerp.github.io/acpaas-ui_angular/assets/hero.svg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  display: flex;\n  justify-content: flex-start;\n  min-height: 12rem;\n  padding-top: 50px;\n  width: 100%; }\n.o-hero.is-large {\n    min-height: 18rem; }\n@media screen and (min-width: 45rem) {\n      .o-hero.is-large {\n        min-height: 24rem; } }\n.o-hero h1 {\n    text-shadow: 0 0 8px rgba(255, 255, 255, 0.32); }\n.u-container {\n  align-items: center;\n  display: flex;\n  flex-direction: column; }\n.u-container img {\n    margin-bottom: 0.75rem; }\n@media screen and (min-width: 45rem) {\n      .u-container img {\n        margin-top: -1.5rem; } }\n"

/***/ }),

/***/ "./styleguide/app/components/hero/hero.component.ts":
/*!**********************************************************!*\
  !*** ./styleguide/app/components/hero/hero.component.ts ***!
  \**********************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeroComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeroComponent.prototype, "description", void 0);
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-hero',
            styles: [__webpack_require__(/*! ./hero.component.scss */ "./styleguide/app/components/hero/hero.component.scss")],
            template: __webpack_require__(/*! ./hero.component.html */ "./styleguide/app/components/hero/hero.component.html"),
        })
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./styleguide/app/components/index.ts":
/*!********************************************!*\
  !*** ./styleguide/app/components/index.ts ***!
  \********************************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./styleguide/app/components/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./styleguide/app/components/header/header.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero/hero.component */ "./styleguide/app/components/hero/hero.component.ts");
/* harmony import */ var _registry_registry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registry/registry.component */ "./styleguide/app/components/registry/registry.component.ts");




var Components = [
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"],
    _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
    _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"],
    _registry_registry_component__WEBPACK_IMPORTED_MODULE_3__["RegistryComponent"],
];


/***/ }),

/***/ "./styleguide/app/components/registry/registry.component.html":
/*!********************************************************************!*\
  !*** ./styleguide/app/components/registry/registry.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"m-nav-list\">\n\t<li *ngFor=\"let item of items\">\n\t\t<a [routerLink]=\"[item.path]\" [routerLinkActive]=\"['is-active']\"> {{ item.title }}</a>\n\t</li>\n</ul>\n"

/***/ }),

/***/ "./styleguide/app/components/registry/registry.component.scss":
/*!********************************************************************!*\
  !*** ./styleguide/app/components/registry/registry.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./styleguide/app/components/registry/registry.component.ts":
/*!******************************************************************!*\
  !*** ./styleguide/app/components/registry/registry.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryComponent", function() { return RegistryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistryComponent = /** @class */ (function () {
    function RegistryComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RegistryComponent.prototype, "items", void 0);
    RegistryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-registry',
            template: __webpack_require__(/*! ./registry.component.html */ "./styleguide/app/components/registry/registry.component.html"),
            styles: [__webpack_require__(/*! ./registry.component.scss */ "./styleguide/app/components/registry/registry.component.scss")],
        })
    ], RegistryComponent);
    return RegistryComponent;
}());



/***/ }),

/***/ "./styleguide/app/examples.modules.ts":
/*!********************************************!*\
  !*** ./styleguide/app/examples.modules.ts ***!
  \********************************************/
/*! exports provided: ExamplesModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModules", function() { return ExamplesModules; });
/* harmony import */ var _acpaas_ui_ngx_examples_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/avatar */ "./examples/avatar/fesm5/avatar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/calendar */ "./examples/calendar/fesm5/calendar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/logo */ "./examples/logo/fesm5/logo.js");
/* harmony import */ var _acpaas_ui_ngx_examples_selectable_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/selectable-list */ "./examples/selectable-list/fesm5/selectable-list.js");




var ExamplesModules = [
    _acpaas_ui_ngx_examples_avatar__WEBPACK_IMPORTED_MODULE_0__["AvatarExamplesModule"],
    _acpaas_ui_ngx_examples_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarExamplesModule"],
    _acpaas_ui_ngx_examples_logo__WEBPACK_IMPORTED_MODULE_2__["LogoExamplesModule"],
    _acpaas_ui_ngx_examples_selectable_list__WEBPACK_IMPORTED_MODULE_3__["SelectableListExamplesModule"],
];


/***/ }),

/***/ "./styleguide/app/examples.routes.ts":
/*!*******************************************!*\
  !*** ./styleguide/app/examples.routes.ts ***!
  \*******************************************/
/*! exports provided: EXAMPLES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLES_ROUTES", function() { return EXAMPLES_ROUTES; });
/* harmony import */ var _acpaas_ui_ngx_examples_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/avatar */ "./examples/avatar/fesm5/avatar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/calendar */ "./examples/calendar/fesm5/calendar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/logo */ "./examples/logo/fesm5/logo.js");
/* harmony import */ var _acpaas_ui_ngx_examples_selectable_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/selectable-list */ "./examples/selectable-list/fesm5/selectable-list.js");




var EXAMPLES_ROUTES = [
    { path: 'avatar', children: _acpaas_ui_ngx_examples_avatar__WEBPACK_IMPORTED_MODULE_0__["AVATAR_EXAMPLES_ROUTES"], title: 'Avatar', },
    { path: 'calendar', children: _acpaas_ui_ngx_examples_calendar__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_EXAMPLES_ROUTES"], title: 'Calendar', },
    { path: 'logo', children: _acpaas_ui_ngx_examples_logo__WEBPACK_IMPORTED_MODULE_2__["LOGO_EXAMPLES_ROUTES"], title: 'Logo', },
    { path: 'selectable-list', children: _acpaas_ui_ngx_examples_selectable_list__WEBPACK_IMPORTED_MODULE_3__["SELECTABLE_LIST_EXAMPLES_ROUTES"], title: 'Selectable list', },
];


/***/ }),

/***/ "./styleguide/app/pages/index.ts":
/*!***************************************!*\
  !*** ./styleguide/app/pages/index.ts ***!
  \***************************************/
/*! exports provided: ModulesPageComponent, NotFoundPageComponent, Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return Pages; });
/* harmony import */ var _modules_modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modules.page */ "./styleguide/app/pages/modules/modules.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModulesPageComponent", function() { return _modules_modules_page__WEBPACK_IMPORTED_MODULE_0__["ModulesPageComponent"]; });

/* harmony import */ var _not_found_not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.page */ "./styleguide/app/pages/not-found/not-found.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return _not_found_not_found_page__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"]; });





var Pages = [
    _modules_modules_page__WEBPACK_IMPORTED_MODULE_0__["ModulesPageComponent"],
    _not_found_not_found_page__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"],
];


/***/ }),

/***/ "./styleguide/app/pages/modules/modules.page.html":
/*!********************************************************!*\
  !*** ./styleguide/app/pages/modules/modules.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"u-container u-margin-top u-margin-bottom p-modules\">\n\t<nav>\n\t\t<guide-registry [items]=\"packages\"></guide-registry>\n\t</nav>\n\n\t<div>\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./styleguide/app/pages/modules/modules.page.scss":
/*!********************************************************!*\
  !*** ./styleguide/app/pages/modules/modules.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * QUARKS\n * -------------------------------------------------------------------\n */\n/**\n * MIXINS\n * -------------------------------------------------------------------\n * Collection of custom mixins\n */\n/**\n * FONT FACE\n * -------------------------------------------------------------------\n */\n/**\n * BUTTON MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * BUTTON OUTLINE MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * INPUT MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * INPUT PLACEHOLDER MIXIN\n * -------------------------------------------------------------------\n * Change base styling for placeholder text on input fields\n * Note: Styling the placeholder text is not supported on older\n * browsers, use a html5-placeholder ployfill for that\n *\n * Background info:\n * - http://davidwalsh.name/html5-placeholder\n * - http://davidwalsh.name/placeholder-overflow\n * - http://jamesallardice.github.io/Placeholders.js\n */\n/**\n * ALERT MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * BADGE MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * LABEL MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * TOOLTIP MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * CLEARFIX\n * -------------------------------------------------------------------\n */\n/**\n * FONT AWESOME\n * -------------------------------------------------------------------\n */\n/**\n * MEDIA QUERIES MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * FUNCTIONS\n * -------------------------------------------------------------------\n * Collection of custom functions\n */\n/**\n * STRIP UNIT FROM VALUE\n * -------------------------------------------------------------------\n */\n/**\n * CONVERT PX TO REM\n * -------------------------------------------------------------------\n */\n/**\n * RAISE NUMBER TO CERTAIN POWER\n * -------------------------------------------------------------------\n */\n/**\n * HANDLING Z-INDEX LAYERS\n * -------------------------------------------------------------------\n */\n/**\n * COLORS\n * -------------------------------------------------------------------\n * Collection of all available branding colors\n */\n/**\n * COMPLETE COLOR PALETTE\n * -------------------------------------------------------------------\n * Variable names generated by Name That Color\n * http://chir.ag/projects/name-that-color\n */\n/**\n * GRAYSCALE COLOR PALETTE\n * -------------------------------------------------------------------\n * Collection of grayscale colors\n */\n/**\n * SOCIAL BRAND COLOR PALETTE\n * -------------------------------------------------------------------\n * Collection of social branding colors\n */\n/**\n * GLOBAL VARIABLES\n * -------------------------------------------------------------------\n */\n/**\n * SPECIFIC COLOR PALETTE\n * -------------------------------------------------------------------\n */\n/**\n * SPACERS\n * -------------------------------------------------------------------\n */\n/**\n * BREAKPOINTS\n * -------------------------------------------------------------------\n */\n/**\n * FONT FAMILIES\n * -------------------------------------------------------------------\n */\n/**\n * FONT SIZES\n * -------------------------------------------------------------------\n */\n/**\n * LINE HEIGHTS\n * -------------------------------------------------------------------\n */\n/**\n * FONT WEIGHTS\n * -------------------------------------------------------------------\n */\n/**\n * OTHER TYPOGRAPHY\n * -------------------------------------------------------------------\n */\n/**\n * ANIMATIONS\n * -------------------------------------------------------------------\n */\n/**\n * Z-INDEXES\n * -------------------------------------------------------------------\n * http://www.sitepoint.com/better-solution-managing-z-index-sass/\n *\n * Use like this:\n *   z-index: layer(\"overlay\");\n *     where overlay is a list item of the default list \"$z-indexes\" (see below)\n *\n * The list is also upgradeable in that nesting is permitted, e.g.:\n * $z-indexes: (\n *   'modal': (\n *     'back': 50,\n *     'front': 60\n *   ),\n *   'navigation': 40,\n *   ...\n * )\n */\n/**\n * ICON SIZES\n * -------------------------------------------------------------------\n */\n/**\n * BOX SHADOWS\n * -------------------------------------------------------------------\n */\n/**\n * LINKS\n * -------------------------------------------------------------------\n * Define text and hover color for each hyperlink\n */\n/**\n * LISTS\n * -------------------------------------------------------------------\n * Define default paddings for lists\n */\n/**\n * PRE\n * -------------------------------------------------------------------\n * Define text and background color for each code element\n */\n/**\n * CODE\n * -------------------------------------------------------------------\n * Define text and background color for each code element\n */\n/**\n * MARK\n * -------------------------------------------------------------------\n * Define text and background color for each mark element\n */\n/**\n * CITE\n * -------------------------------------------------------------------\n */\n/**\n * FIGCAPTION\n * -------------------------------------------------------------------\n */\n/**\n * TABLES\n * -------------------------------------------------------------------\n * Define background and border color for each table\n */\n/**\n * BUTTONS\n * -------------------------------------------------------------------\n * Define text, background and border color for each button\n */\n/**\n * FORMS\n * -------------------------------------------------------------------\n * Define text, background, border and placeholder color for each input\n */\n/**\n * RADIO BUTTONS & CHECKBOXES\n * -------------------------------------------------------------------\n */\n/**\n * SWITCHES\n * -------------------------------------------------------------------\n * WATCH OUT\n * $progress-height and $range-slider-height are equal to $switch-height\n * In this way, changing the height of the switch will also affect the height of the progress bar and range slider\n */\n/**\n * FIELDSET\n * -------------------------------------------------------------------\n */\n/**\n * TOOLTIP\n * -------------------------------------------------------------------\n */\n/**\n * PROGRESS\n * -------------------------------------------------------------------\n * WATCH OUT\n * $range-slider-offset is equal to $tooltip-offset\n * In this way, changing the offset of the progress bar will also affect the offset of the range slider\n */\n/**\n * RANGE SLIDER\n * -------------------------------------------------------------------\n */\n/**\n * LINK LIST\n * -------------------------------------------------------------------\n */\n/**\n * DATEPICKER\n * -------------------------------------------------------------------\n */\n/**\n * ACCORDION\n * -------------------------------------------------------------------\n */\n/**\n * ALERTS\n * -------------------------------------------------------------------\n */\n/**\n * AVATARS\n * -------------------------------------------------------------------\n */\n/**\n * BADGES\n * -------------------------------------------------------------------\n */\n/**\n * BREADCRUMBS\n * -------------------------------------------------------------------\n */\n/**\n * CARDS\n * -------------------------------------------------------------------\n */\n/**\n * COPYRIGHT\n * -------------------------------------------------------------------\n */\n/**\n * LABELS\n * -------------------------------------------------------------------\n */\n/**\n * TAGS\n * -------------------------------------------------------------------\n */\n/**\n * FLYOUT\n * -------------------------------------------------------------------\n */\n/**\n * FOOTER\n * -------------------------------------------------------------------\n */\n/**\n * HEADER\n * -------------------------------------------------------------------\n */\n/**\n * SPINNER\n * -------------------------------------------------------------------\n */\n/**\n * ICON LIST\n * -------------------------------------------------------------------\n */\n/**\n * OVERLAY\n * -------------------------------------------------------------------\n */\n/**\n * MODAL\n * -------------------------------------------------------------------\n */\n/**\n * NAVIGATION\n * -------------------------------------------------------------------\n */\n/**\n * PAGINATION\n * -------------------------------------------------------------------\n */\n/**\n * STEP INDICATOR\n * -------------------------------------------------------------------\n */\n/**\n * UPLOAD\n * -------------------------------------------------------------------\n */\n/**\n * GALLERY\n * -------------------------------------------------------------------\n */\n/**\n * SLIDESHOW\n * -------------------------------------------------------------------\n */\n.p-modules {\n  display: flex;\n  flex-direction: column; }\n.p-modules > nav {\n    flex: 0 0 calc(100% / 4);\n    margin-bottom: 3rem; }\n.p-modules > div {\n    overflow-x: auto; }\n@media screen and (min-width: 45rem) {\n    .p-modules {\n      flex-direction: row; }\n      .p-modules > nav {\n        margin-right: 3rem; } }\n"

/***/ }),

/***/ "./styleguide/app/pages/modules/modules.page.ts":
/*!******************************************************!*\
  !*** ./styleguide/app/pages/modules/modules.page.ts ***!
  \******************************************************/
/*! exports provided: ModulesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesPageComponent", function() { return ModulesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../examples.routes */ "./styleguide/app/examples.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModulesPageComponent = /** @class */ (function () {
    function ModulesPageComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.packages = _examples_routes__WEBPACK_IMPORTED_MODULE_2__["EXAMPLES_ROUTES"];
    }
    ModulesPageComponent.prototype.ngOnInit = function () {
        if (this.activatedRoute.snapshot.children.length === 0) {
            this.router.navigate([this.packages[0].path], { relativeTo: this.activatedRoute });
        }
    };
    ModulesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./modules.page.html */ "./styleguide/app/pages/modules/modules.page.html"),
            styles: [__webpack_require__(/*! ./modules.page.scss */ "./styleguide/app/pages/modules/modules.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModulesPageComponent);
    return ModulesPageComponent;
}());



/***/ }),

/***/ "./styleguide/app/pages/not-found/not-found.page.html":
/*!************************************************************!*\
  !*** ./styleguide/app/pages/not-found/not-found.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aui-hero class=\"aui-hero\">\n    <div auiHeroCard>\n        <div class=\"aui-hero-inner\">\n            <h1 class=\"h4\">ACPaaS UI</h1>\n        </div>\n    </div>\n    <div auiHeroCta>\n        <ul class=\"m-nav-tabs center-tabs\">\n            <li routerLinkActive=\"is-active\"><a routerLink=\"/ui-components\"><span class=\"fa fa-cube\"></span>UI Components</a></li>\n            <li routerLinkActive=\"is-active\"><a routerLink=\"/docs\"><span class=\"fa fa-book\"></span>How-to guide</a></li>\n        </ul>\n    </div>\n</aui-hero>\n\n<div class=\"u-container u-margin-bottom-lg u-margin-top-lg u-text-center\">\n\t<h1 class=\"h3 u-margin-top-lg u-margin-bottom\">Pagina niet gevonden!</h1>\n</div>\n"

/***/ }),

/***/ "./styleguide/app/pages/not-found/not-found.page.ts":
/*!**********************************************************!*\
  !*** ./styleguide/app/pages/not-found/not-found.page.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./not-found.page.html */ "./styleguide/app/pages/not-found/not-found.page.html"),
        })
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./styleguide/environments/environment.ts":
/*!************************************************!*\
  !*** ./styleguide/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./styleguide/main.ts":
/*!****************************!*\
  !*** ./styleguide/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./styleguide/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./styleguide/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./styleguide/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/digipolisantwerp/acpaas-ui_angular/styleguide/main.ts */"./styleguide/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
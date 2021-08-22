(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      appointments: [],
      user: [],
      isfetching: true,
      selectedAppointment: []
    };
  },
  methods: {
    getAppointments: function getAppointments() {
      var _this = this;

      this.isfetching = true;
      axios.get("/admin/appointment/approved/".concat(this.user.id)).then(function (_ref) {
        var data = _ref.data;
        _this.appointments = data;
        _this.isfetching = false;
      });
    },
    getAuthuser: function getAuthuser() {
      var _this2 = this;

      axios.get("/auth/user").then(function (_ref2) {
        var data = _ref2.data;
        console.log(data, "user");
        _this2.user = data;

        _this2.getAppointments();
      });
    },
    accept: function accept(value) {
      var _this3 = this;

      var payload = value;
      axios.put('/admin/accept/appointment', _objectSpread({}, payload)).then(function (_ref3) {
        var data = _ref3.data;

        _this3.getAppointments();

        _this3.$toast.open({
          message: "Appointment of ".concat(payload.lname + ' ' + payload.fname, " is successfully updated"),
          position: 'top-right',
          type: "success",
          duration: 5000
        });
      });
    }
  },
  created: function created() {
    this.getAuthuser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=template&id=4418d3f9&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=template&id=4418d3f9& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        { attrs: { elevation: "1" } },
        [
          _c("v-card-title", [_vm._v("\n        Approval\n      ")]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-simple-table", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("\n              Name\n            ")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("\n              Email\n            ")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n              Mobile number\n            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("\n              Date\n            ")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n              Person to visit\n            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("\n              Department\n            ")
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(
                                "\n              approved by\n            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v("\n              Reason\n            ")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.appointments, function(item) {
                            return _c("tr", { key: item.id }, [
                              _c("td", [
                                _vm._v(_vm._s(item.fname + " " + item.lname))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.email))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.mobile_number))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.appt_date))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.PTV))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(item.department.short_name))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    item.user.firstname +
                                      " " +
                                      item.user.lastname
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n             " +
                                    _vm._s(item.reason) +
                                    "\n            "
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backoffice/src/pages/appointment/approve.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/appointment/approve.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _approve_vue_vue_type_template_id_4418d3f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approve.vue?vue&type=template&id=4418d3f9& */ "./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=template&id=4418d3f9&");
/* harmony import */ var _approve_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approve.vue?vue&type=script&lang=js& */ "./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _approve_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _approve_vue_vue_type_template_id_4418d3f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _approve_vue_vue_type_template_id_4418d3f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backoffice/src/pages/appointment/approve.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_approve_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./approve.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_approve_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=template&id=4418d3f9&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=template&id=4418d3f9& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approve_vue_vue_type_template_id_4418d3f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./approve.vue?vue&type=template&id=4418d3f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/approve.vue?vue&type=template&id=4418d3f9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approve_vue_vue_type_template_id_4418d3f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approve_vue_vue_type_template_id_4418d3f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
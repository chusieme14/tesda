(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sideform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sideform */ "./resources/js/backoffice/src/pages/appointment/sideform.vue");
/* harmony import */ var _user_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/dialog */ "./resources/js/backoffice/src/pages/user/dialog.vue");
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
  components: {
    SideForm: _sideform__WEBPACK_IMPORTED_MODULE_0__["default"],
    DialogConfirmation: _user_dialog__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isdelete: false,
      drawer: false,
      appointments: [],
      user: [],
      isfetching: true,
      selectedAppointment: [],
      isprocessing: false
    };
  },
  methods: {
    getAppointments: function getAppointments() {
      var _this = this;

      this.isfetching = true;
      axios.get("/admin/pending/appointments/").then(function (_ref) {
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

      this.isprocessing = true;
      value.user_id = this.user.id;
      var payload = value;
      axios.put("/admin/accept/".concat(value.id, "/appointment")).then(function (_ref3) {
        var data = _ref3.data;

        _this3.getAppointments();

        _this3.isprocessing = false;

        _this3.$toast.open({
          message: "Approved",
          position: 'top-right',
          type: "success",
          duration: 5000
        });
      });
    },
    update: function update(value) {
      var _this4 = this;

      this.drawer = false;
      this.isprocessing = true;
      axios.put('/admin/move/appointment', _objectSpread({}, value)).then(function (_ref4) {
        var data = _ref4.data;

        _this4.getAppointments();

        _this4.isprocessing = false;

        _this4.$toast.open({
          message: "Appointment of ".concat(value.lname + ' ' + value.fname, " is successfully moved"),
          position: 'top-right',
          type: "success",
          duration: 5000
        });
      });
    },
    cancel: function cancel() {
      this.isdelete = false;
    },
    confirm: function confirm() {
      var _this5 = this;

      this.isdelete = false;
      this.isprocessing = true;
      axios["delete"]("/admin/remove/appointment/".concat(this.selectedAppointment.id)).then(function (_ref5) {
        var data = _ref5.data;

        _this5.getAppointments();

        _this5.isprocessing = false;

        _this5.$toast.open({
          message: "Removed",
          position: 'top-right',
          type: "success",
          duration: 5000
        });
      });
    }
  },
  created: function created() {
    this.getAppointments();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    appointment: {}
  },
  data: function data() {
    return {
      menu1: false,
      appointmentDetails: [],
      mindate: new Date().toString(),
      isfetching: true,
      departments: [],
      ischange: true
    };
  },
  methods: {
    checkdata: function checkdata() {
      if (this.appointment.appt_date == this.appointmentDetails.appt_date && this.appointment.department_id == this.appointmentDetails.department_id) this.ischange = true;else this.ischange = false;
    },
    getAllDepartment: function getAllDepartment() {
      var _this = this;

      axios.get('/admin/department/all').then(function (_ref) {
        var data = _ref.data;
        _this.departments = data;
      });
    },
    save: function save() {
      if (this.appointment.appt_date != this.appointmentDetails.appt_date && this.appointment.department_id != this.appointmentDetails.department_id) this.appointmentDetails.both = true;else {
        if (this.appointment.appt_date == this.appointmentDetails.appt_date && this.appointment.department_id != this.appointmentDetails.department_id) this.appointmentDetails.isdepartment = true;
        if (this.appointment.appt_date != this.appointmentDetails.appt_date && this.appointment.department_id == this.appointmentDetails.department_id) this.appointmentDetails.isdate = true;
      }
      this.$emit('update', this.appointmentDetails);
    }
  },
  created: function created() {
    this.getAllDepartment();
  },
  computed: {
    noChanges: function noChanges() {
      if (this.appointment.appt_date == this.appointmentDetails.appt_date && this.appointment.department_id == this.appointmentDetails.department_id) return true;else return false;
    }
  },
  watch: {
    appointment: {
      handler: function handler(value) {
        this.appointmentDetails = [];
        this.ischange = true;
        Object.assign(this.appointmentDetails, value);
        this.isfetching = false;
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  // props:{
  //     email:{
  //         type:String
  //     }
  // },
  data: function data() {
    return {};
  },
  methods: {
    accept: function accept() {
      this.$emit('accept');
    },
    cancel: function cancel() {
      this.$emit('cancel');
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=template&id=c61a7804&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=template&id=c61a7804& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        "v-navigation-drawer",
        {
          attrs: { absolute: "", temporary: "", right: "", width: "700" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c("side-form", {
            attrs: { appointment: _vm.selectedAppointment },
            on: { update: _vm.update }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { elevation: "1", loading: _vm.isprocessing } },
        [
          _c("v-card-title", [_vm._v("\n        For Approval\n      ")]),
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
                              _vm._v("\n              Gender\n            ")
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
                                "\n              Learn Number\n            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("\n              Regular\n            ")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("\n              Action\n            ")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.appointments, function(item) {
                            return _c("tr", { key: item.id }, [
                              _c("td", [
                                _vm._v(
                                  _vm._s(item.first_name + " " + item.last_name)
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.email))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.gender))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.mobile_number))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.created_at))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.learn_number))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(item.isregular ? true : false))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-center" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        fab: "",
                                        "x-small": "",
                                        color: "primary",
                                        disabled: _vm.isprocessing
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.accept(item)
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("mdi-check")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        fab: "",
                                        "x-small": "",
                                        color: "error",
                                        disabled: _vm.isprocessing
                                      },
                                      on: {
                                        click: function($event) {
                                          ;(_vm.selectedAppointment = item),
                                            (_vm.isdelete = true)
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v(" mdi-delete ")])],
                                    1
                                  )
                                ],
                                1
                              )
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.isdelete,
            callback: function($$v) {
              _vm.isdelete = $$v
            },
            expression: "isdelete"
          }
        },
        [
          _c("dialog-confirmation", {
            attrs: { email: _vm.selectedAppointment.email },
            on: { cancel: _vm.cancel, accept: _vm.confirm }
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=template&id=86b94cc2&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=template&id=86b94cc2& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      !_vm.isfetching
        ? _c(
            "v-card",
            { staticClass: "mt-3" },
            [
              _c("v-card-title", [_vm._v("Move Appointment")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-layout",
                        { attrs: { wrap: "", row: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", md6: "" } },
                            [
                              _c("v-label", [_vm._v("Last name ")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { solo: "", dense: "", disabled: "" },
                                model: {
                                  value: _vm.appointmentDetails.lname,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.appointmentDetails,
                                      "lname",
                                      $$v
                                    )
                                  },
                                  expression: "appointmentDetails.lname"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", md6: "" } },
                            [
                              _c("v-label", [_vm._v("First name ")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { solo: "", dense: "", disabled: "" },
                                model: {
                                  value: _vm.appointmentDetails.fname,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.appointmentDetails,
                                      "fname",
                                      $$v
                                    )
                                  },
                                  expression: "appointmentDetails.fname"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", md6: "" } },
                            [
                              _c("v-label", [_vm._v("Email ")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { solo: "", dense: "", disabled: "" },
                                model: {
                                  value: _vm.appointmentDetails.email,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.appointmentDetails,
                                      "email",
                                      $$v
                                    )
                                  },
                                  expression: "appointmentDetails.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", md6: "" } },
                            [
                              _c("v-label", [_vm._v("Mobile number ")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { solo: "", dense: "", disabled: "" },
                                model: {
                                  value: _vm.appointmentDetails.mobile_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.appointmentDetails,
                                      "mobile_number",
                                      $$v
                                    )
                                  },
                                  expression: "appointmentDetails.mobile_number"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", md6: "" } },
                            [
                              _c("v-label", [_vm._v("Person to Visit ")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { solo: "", dense: "", disabled: "" },
                                model: {
                                  value: _vm.appointmentDetails.PTV,
                                  callback: function($$v) {
                                    _vm.$set(_vm.appointmentDetails, "PTV", $$v)
                                  },
                                  expression: "appointmentDetails.PTV"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", md6: "" } },
                            [
                              _c("v-label", [_vm._v("Department ")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.departments,
                                  "item-text": "short_name",
                                  "item-value": "id",
                                  solo: "",
                                  "single-line": "",
                                  "allow-overflow": "",
                                  dense: ""
                                },
                                on: { change: _vm.checkdata },
                                model: {
                                  value: _vm.appointmentDetails.department_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.appointmentDetails,
                                      "department_id",
                                      $$v
                                    )
                                  },
                                  expression: "appointmentDetails.department_id"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", md6: "" } },
                            [
                              _c("v-label", [_vm._v("Appointment date ")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  ref: "menu1",
                                  attrs: {
                                    "close-on-content-click": false,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "auto"
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          var attrs = ref.attrs
                                          return [
                                            _c(
                                              "v-text-field",
                                              _vm._g(
                                                _vm._b(
                                                  {
                                                    directives: [
                                                      {
                                                        name: "validate",
                                                        rawName: "v-validate",
                                                        value: "required",
                                                        expression: "'required'"
                                                      }
                                                    ],
                                                    attrs: {
                                                      solo: "",
                                                      dense: "",
                                                      readonly: "",
                                                      name: "appointment date",
                                                      color: "success"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.appointmentDetails
                                                          .appt_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.appointmentDetails,
                                                          "appt_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "appointmentDetails.appt_date"
                                                    }
                                                  },
                                                  "v-text-field",
                                                  attrs,
                                                  false
                                                ),
                                                on
                                              )
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    588484133
                                  ),
                                  model: {
                                    value: _vm.menu1,
                                    callback: function($$v) {
                                      _vm.menu1 = $$v
                                    },
                                    expression: "menu1"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    attrs: {
                                      "no-title": "",
                                      min: _vm.appointment.appt_date
                                    },
                                    on: {
                                      change: _vm.checkdata,
                                      input: function($event) {
                                        _vm.menu1 = false
                                      }
                                    },
                                    model: {
                                      value: _vm.appointmentDetails.appt_date,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.appointmentDetails,
                                          "appt_date",
                                          $$v
                                        )
                                      },
                                      expression: "appointmentDetails.appt_date"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", md12: "" } },
                            [
                              _c("v-label", [
                                _vm._v("Reason "),
                                _c("span", [_vm._v("*")])
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v(_vm._s(_vm.errors.first("reason")))
                              ]),
                              _vm._v(" "),
                              _c("v-textarea", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                attrs: {
                                  name: "reason",
                                  solo: "",
                                  height: "70",
                                  disabled: ""
                                },
                                model: {
                                  value: _vm.appointmentDetails.reason,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.appointmentDetails,
                                      "reason",
                                      $$v
                                    )
                                  },
                                  expression: "appointmentDetails.reason"
                                }
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", disabled: _vm.ischange },
                      on: { click: _vm.save }
                    },
                    [_vm._v("\n                Save\n            ")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=template&id=253cf8b0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=template&id=253cf8b0& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        [
          _c("v-card-title", { staticClass: "headline" }, [
            _vm._v("\n            Delete\n        ")
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v("\n            Are you sure you want to remove?\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green darken-1", text: "" },
                  on: { click: _vm.cancel }
                },
                [_vm._v("\n            Disagree\n        ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green darken-1", text: "" },
                  on: { click: _vm.accept }
                },
                [_vm._v("\n            Agree\n        ")]
              )
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

/***/ "./resources/js/backoffice/src/pages/appointment/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/appointment/index.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_c61a7804___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c61a7804& */ "./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=template&id=c61a7804&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c61a7804___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_c61a7804___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backoffice/src/pages/appointment/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=template&id=c61a7804&":
/*!************************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=template&id=c61a7804& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c61a7804___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c61a7804& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/index.vue?vue&type=template&id=c61a7804&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c61a7804___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c61a7804___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backoffice/src/pages/appointment/sideform.vue":
/*!********************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/appointment/sideform.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sideform_vue_vue_type_template_id_86b94cc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sideform.vue?vue&type=template&id=86b94cc2& */ "./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=template&id=86b94cc2&");
/* harmony import */ var _sideform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sideform.vue?vue&type=script&lang=js& */ "./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sideform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sideform_vue_vue_type_template_id_86b94cc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sideform_vue_vue_type_template_id_86b94cc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backoffice/src/pages/appointment/sideform.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sideform.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=template&id=86b94cc2&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=template&id=86b94cc2& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sideform_vue_vue_type_template_id_86b94cc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sideform.vue?vue&type=template&id=86b94cc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/appointment/sideform.vue?vue&type=template&id=86b94cc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sideform_vue_vue_type_template_id_86b94cc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sideform_vue_vue_type_template_id_86b94cc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backoffice/src/pages/user/dialog.vue":
/*!***********************************************************!*\
  !*** ./resources/js/backoffice/src/pages/user/dialog.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialog_vue_vue_type_template_id_253cf8b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.vue?vue&type=template&id=253cf8b0& */ "./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=template&id=253cf8b0&");
/* harmony import */ var _dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.vue?vue&type=script&lang=js& */ "./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dialog_vue_vue_type_template_id_253cf8b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dialog_vue_vue_type_template_id_253cf8b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backoffice/src/pages/user/dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=template&id=253cf8b0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=template&id=253cf8b0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_template_id_253cf8b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dialog.vue?vue&type=template&id=253cf8b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/dialog.vue?vue&type=template&id=253cf8b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_template_id_253cf8b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_template_id_253cf8b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
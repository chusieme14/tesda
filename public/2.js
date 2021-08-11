(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
  props: {
    email: {
      type: String
    }
  },
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/user/form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
    isupdate: {
      type: Boolean
    },
    user: {}
  },
  data: function data() {
    return {
      userDetails: [],
      departments: [],
      roles: [],
      hasusername: false,
      hasemail: false
    };
  },
  methods: {
    getAllDepartment: function getAllDepartment() {
      var _this = this;

      axios.get('/admin/department/all').then(function (_ref) {
        var data = _ref.data;
        _this.departments = data;
      });
    },
    getAllRole: function getAllRole() {
      var _this2 = this;

      axios.get('/admin/role/all').then(function (_ref2) {
        var data = _ref2.data;
        _this2.roles = data;
      });
    },
    store: function store() {
      var _this3 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this3.$emit('store', _this3.userDetails);
        }
      });
    },
    update: function update() {
      this.$emit('update', this.userDetails);
    },
    checkUsername: function checkUsername() {
      var _this4 = this;

      if (this.userDetails.username) {
        var username = this.userDetails.username;
        axios.post("/admin/check/username", {
          username: username
        }).then(function (_ref3) {
          var data = _ref3.data;

          if (data) {
            if (_this4.isupdate && _this4.userDetails.id == data.id) {
              _this4.hasusername = false;
            } else _this4.hasusername = true;
          } else _this4.hasusername = false;
        });
      }
    },
    checkEmail: function checkEmail() {
      var _this5 = this;

      if (this.userDetails.email) {
        var email = this.userDetails.email;
        axios.post("/admin/check/email", {
          email: email
        }).then(function (_ref4) {
          var data = _ref4.data;

          if (data) {
            if (_this5.isupdate && _this5.userDetails.id == data.id) {
              _this5.hasemail = false;
            } else _this5.hasemail = true;
          } else _this5.hasemail = false;
        });
      }
    }
  },
  watch: {
    user: {
      handler: function handler(val) {
        if (!this.isupdate) return this.userDetails = [];
        Object.assign(this.userDetails, val);
      },
      deep: true
    }
  },
  computed: {},
  created: function created() {
    this.getAllDepartment();
    this.getAllRole();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/user/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./resources/js/backoffice/src/pages/user/form.vue");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "./resources/js/backoffice/src/pages/user/dialog.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    createForm: _form__WEBPACK_IMPORTED_MODULE_0__["default"],
    DialogConfirmation: _dialog__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      users: {},
      drawer: false,
      isremove: false,
      selecteduser: [],
      isupdate: false
    };
  },
  created: function created() {
    this.getallactiveuser();
  },
  methods: {
    getallactiveuser: function getallactiveuser() {
      var _this = this;

      axios.get('/admin/user/active').then(function (_ref) {
        var data = _ref.data;
        console.log(data);
        _this.users = data;
      });
    },
    removeUser: function removeUser() {
      var _this2 = this;

      var user_id = this.selecteduser.id;
      axios["delete"]("/admin/user/remove/".concat(user_id)).then(function (_ref2) {
        var data = _ref2.data;

        _this2.getallactiveuser();

        _this2.selecteduser = [];
        _this2.isremove = false;

        _this2.$toast.open({
          message: "".concat(_this2.selecteduser.email, " was delete successfully"),
          position: 'top-right',
          type: "success",
          duration: 5000
        });
      });
    },
    cancel: function cancel() {
      this.isremove = false;
    },
    store: function store(value) {
      var _this3 = this;

      axios.post('/admin/add/user', _objectSpread({}, value)).then(function (_ref3) {
        var data = _ref3.data;

        _this3.getallactiveuser();

        _this3.drawer = false;

        _this3.$toast.open({
          message: "".concat(value.email, " was added successfully"),
          position: 'top-right',
          type: "success",
          duration: 5000
        });
      });
    },
    update: function update(value) {
      var _this4 = this;

      axios.put('/admin/update/user', _objectSpread({}, value)).then(function (_ref4) {
        var data = _ref4.data;

        _this4.getallactiveuser();

        _this4.drawer = false;

        _this4.$toast.open({
          message: "".concat(value.email, " was updated successfully"),
          position: 'top-right',
          type: "success",
          duration: 5000
        });
      });
    }
  }
});

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
            _vm._v(
              "\n            Are you sure you want to remove " +
                _vm._s(_vm.email) +
                "?\n        "
            )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/form.vue?vue&type=template&id=b9f271b8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/user/form.vue?vue&type=template&id=b9f271b8& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        { staticClass: "mt-3" },
        [
          _c("v-card-title", [_vm._v("Add User")]),
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
                          _c("span", { staticStyle: { color: "red" } }, [
                            _vm._v(_vm._s(_vm.errors.first("last name")))
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: { solo: "", dense: "", name: "last name" },
                            model: {
                              value: _vm.userDetails.lastname,
                              callback: function($$v) {
                                _vm.$set(_vm.userDetails, "lastname", $$v)
                              },
                              expression: "userDetails.lastname"
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
                          _c("span", { staticStyle: { color: "red" } }, [
                            _vm._v(_vm._s(_vm.errors.first("first name")))
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: { solo: "", dense: "", name: "first name" },
                            model: {
                              value: _vm.userDetails.firstname,
                              callback: function($$v) {
                                _vm.$set(_vm.userDetails, "firstname", $$v)
                              },
                              expression: "userDetails.firstname"
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
                          _vm.hasemail
                            ? _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v("Email is already taken")
                              ])
                            : _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v(_vm._s(_vm.errors.first("first name")))
                              ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: { solo: "", dense: "", name: "email" },
                            on: { keyup: _vm.checkEmail },
                            model: {
                              value: _vm.userDetails.email,
                              callback: function($$v) {
                                _vm.$set(_vm.userDetails, "email", $$v)
                              },
                              expression: "userDetails.email"
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
                          _c("v-label", [_vm._v("Username ")]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _vm.hasusername
                            ? _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v("Username is already taken")
                              ])
                            : _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v(_vm._s(_vm.errors.first("username")))
                              ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: { solo: "", dense: "", name: "username" },
                            on: { keyup: _vm.checkUsername },
                            model: {
                              value: _vm.userDetails.username,
                              callback: function($$v) {
                                _vm.$set(_vm.userDetails, "username", $$v)
                              },
                              expression: "userDetails.username"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.isupdate
                        ? _c(
                            "v-flex",
                            { attrs: { xs12: "", md6: "" } },
                            [
                              _c("v-label", [_vm._v("Password ")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { solo: "", dense: "" },
                                model: {
                                  value: _vm.userDetails.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userDetails, "password", $$v)
                                  },
                                  expression: "userDetails.password"
                                }
                              })
                            ],
                            1
                          )
                        : _c(
                            "v-flex",
                            { attrs: { xs12: "", md6: "" } },
                            [
                              _c("v-label", [_vm._v("Password ")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v(_vm._s(_vm.errors.first("password")))
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
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
                                  name: "password"
                                },
                                model: {
                                  value: _vm.userDetails.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userDetails, "password", $$v)
                                  },
                                  expression: "userDetails.password"
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
                          _c("v-label", [_vm._v("Role ")]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", { staticStyle: { color: "red" } }, [
                            _vm._v(_vm._s(_vm.errors.first("role")))
                          ]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              items: _vm.roles,
                              "item-text": "name",
                              "item-value": "id",
                              solo: "",
                              "single-line": "",
                              "allow-overflow": "",
                              dense: "",
                              name: "role"
                            },
                            model: {
                              value: _vm.userDetails.role_id,
                              callback: function($$v) {
                                _vm.$set(_vm.userDetails, "role_id", $$v)
                              },
                              expression: "userDetails.role_id"
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
                          _c("span", { staticStyle: { color: "red" } }, [
                            _vm._v(_vm._s(_vm.errors.first("department")))
                          ]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              items: _vm.departments,
                              "item-text": "short_name",
                              "item-value": "id",
                              solo: "",
                              "single-line": "",
                              "allow-overflow": "",
                              dense: "",
                              name: "department"
                            },
                            model: {
                              value: _vm.userDetails.department_id,
                              callback: function($$v) {
                                _vm.$set(_vm.userDetails, "department_id", $$v)
                              },
                              expression: "userDetails.department_id"
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
              !_vm.isupdate
                ? _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "primary",
                        disabled: _vm.hasemail || _vm.hasusername
                      },
                      on: { click: _vm.store }
                    },
                    [_vm._v("\n                Submit\n            ")]
                  )
                : _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "primary",
                        disabled: _vm.hasemail || _vm.hasusername
                      },
                      on: { click: _vm.update }
                    },
                    [_vm._v("\n                Update\n            ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/index.vue?vue&type=template&id=247251a2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/src/pages/user/index.vue?vue&type=template&id=247251a2& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
          _c("create-form", {
            attrs: { isupdate: _vm.isupdate, user: _vm.selecteduser },
            on: { store: _vm.store, update: _vm.update }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { elevation: "1" } },
        [
          _c("v-card-title", [
            _vm._v("\n        Active Users \n        "),
            _c(
              "span",
              { staticClass: "ml-2" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { fab: "", "x-small": "", color: "white" },
                    on: {
                      click: function($event) {
                        ;(_vm.selecteduser = []),
                          (_vm.isupdate = false),
                          (_vm.drawer = !_vm.drawer)
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("mdi-plus")])],
                  1
                )
              ],
              1
            )
          ]),
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
                              _vm._v(
                                "\n                    Lastname\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                    Firstname\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                    Department\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                    Email\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                    Username\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                    Role\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v(
                                "\n                    Action\n                    "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.users, function(user) {
                            return _c("tr", { key: user.id }, [
                              _c("td", [_vm._v(_vm._s(user.lastname))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.firstname))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(user.department.short_name))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.email))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.username))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.role.name))]),
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
                                        dark: "",
                                        "x-small": "",
                                        color: "success"
                                      },
                                      on: {
                                        click: function($event) {
                                          ;(_vm.selecteduser = user),
                                            (_vm.isupdate = true),
                                            (_vm.drawer = true)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", { attrs: { dark: "" } }, [
                                        _vm._v(" mdi-pencil ")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        fab: "",
                                        dark: "",
                                        "x-small": "",
                                        color: "error"
                                      },
                                      on: {
                                        click: function($event) {
                                          ;(_vm.selecteduser = user),
                                            (_vm.isremove = true)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", { attrs: { dark: "" } }, [
                                        _vm._v(" mdi-delete ")
                                      ])
                                    ],
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
            value: _vm.isremove,
            callback: function($$v) {
              _vm.isremove = $$v
            },
            expression: "isremove"
          }
        },
        [
          _c("dialog-confirmation", {
            attrs: { user: _vm.selecteduser.email },
            on: { accept: _vm.removeUser, cancel: _vm.cancel }
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



/***/ }),

/***/ "./resources/js/backoffice/src/pages/user/form.vue":
/*!*********************************************************!*\
  !*** ./resources/js/backoffice/src/pages/user/form.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_b9f271b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=b9f271b8& */ "./resources/js/backoffice/src/pages/user/form.vue?vue&type=template&id=b9f271b8&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/backoffice/src/pages/user/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_b9f271b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_b9f271b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backoffice/src/pages/user/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backoffice/src/pages/user/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/user/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backoffice/src/pages/user/form.vue?vue&type=template&id=b9f271b8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/user/form.vue?vue&type=template&id=b9f271b8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_b9f271b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=b9f271b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/form.vue?vue&type=template&id=b9f271b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_b9f271b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_b9f271b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backoffice/src/pages/user/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/backoffice/src/pages/user/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_247251a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=247251a2& */ "./resources/js/backoffice/src/pages/user/index.vue?vue&type=template&id=247251a2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backoffice/src/pages/user/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_247251a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_247251a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backoffice/src/pages/user/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backoffice/src/pages/user/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/user/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backoffice/src/pages/user/index.vue?vue&type=template&id=247251a2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/backoffice/src/pages/user/index.vue?vue&type=template&id=247251a2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_247251a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=247251a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/src/pages/user/index.vue?vue&type=template&id=247251a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_247251a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_247251a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
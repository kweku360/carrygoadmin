"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _Toast = _interopRequireDefault(require("./Toast"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var wrapperClass = (0, _glamor.css)({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: _constants.StackingOrder.TOASTER,
  pointerEvents: 'none'
});

var hasCustomId = function hasCustomId(settings) {
  return Object.hasOwnProperty.call(settings, 'id');
};

var ToastManager = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ToastManager, _React$PureComponent);

  var _super = _createSuper(ToastManager);

  function ToastManager(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ToastManager);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getToasts", function () {
      return _this.state.toasts;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeAll", function () {
      _this.getToasts().forEach(function (toast) {
        return toast.close();
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "remove", function (id) {
      var _iterator = _createForOfIteratorHelper(_this.state.toasts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var toast = _step.value;

          // Since unique ID is still appended to a custom ID, skip the unique ID and check only prefix
          if (String(toast.id).startsWith(id)) {
            _this.closeToast(toast.id);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "notify", function (title, settings) {
      // If there's a custom toast ID passed, close existing toasts with the same custom ID
      if (hasCustomId(settings)) {
        _this.remove(settings.id);
      }

      var instance = _this.createToastInstance(title, settings);

      _this.setState(function (previousState) {
        return {
          toasts: [instance].concat((0, _toConsumableArray2["default"])(previousState.toasts))
        };
      });

      return instance;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createToastInstance", function (title, settings) {
      var uniqueId = ++ToastManager.idCounter;
      var id = hasCustomId(settings) ? "".concat(settings.id, "-").concat(uniqueId) : uniqueId;
      return {
        id: id,
        title: title,
        description: settings.description,
        hasCloseButton: settings.hasCloseButton || true,
        duration: settings.duration || 5,
        close: function close() {
          return _this.closeToast(id);
        },
        intent: settings.intent
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeToast", function (id) {
      _this.setState(function (previousState) {
        return {
          toasts: previousState.toasts.map(function (toast) {
            if (toast.id === id) {
              return _objectSpread({}, toast, {
                isShown: false
              });
            }

            return toast;
          })
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeToast", function (id) {
      _this.setState(function (previousState) {
        return {
          toasts: previousState.toasts.filter(function (toast) {
            return toast.id !== id;
          })
        };
      });
    });
    props.bindNotify(_this.notify);
    props.bindRemove(_this.remove);
    props.bindGetToasts(_this.getToasts);
    props.bindCloseAll(_this.closeAll);
    _this.state = {
      toasts: []
    };
    return _this;
  }

  (0, _createClass2["default"])(ToastManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("span", {
        className: wrapperClass
      }, this.state.toasts.map(function (_ref) {
        var id = _ref.id,
            description = _ref.description,
            props = (0, _objectWithoutProperties2["default"])(_ref, ["id", "description"]);
        return _react["default"].createElement(_Toast["default"], (0, _extends2["default"])({
          key: id,
          onRemove: function onRemove() {
            return _this2.removeToast(id);
          }
        }, props), description);
      }));
    }
  }]);
  return ToastManager;
}(_react["default"].PureComponent);

exports["default"] = ToastManager;
ToastManager.displayName = "ToastManager";
(0, _defineProperty2["default"])(ToastManager, "propTypes", {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: _propTypes["default"].func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: _propTypes["default"].func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: _propTypes["default"].func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: _propTypes["default"].func.isRequired
});
(0, _defineProperty2["default"])(ToastManager, "idCounter", 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdE1hbmFnZXIuanMiXSwibmFtZXMiOlsid3JhcHBlckNsYXNzIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJwb3NpdGlvbiIsInpJbmRleCIsIlN0YWNraW5nT3JkZXIiLCJUT0FTVEVSIiwicG9pbnRlckV2ZW50cyIsImhhc0N1c3RvbUlkIiwic2V0dGluZ3MiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUb2FzdE1hbmFnZXIiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsInRvYXN0cyIsImdldFRvYXN0cyIsImZvckVhY2giLCJ0b2FzdCIsImNsb3NlIiwiaWQiLCJTdHJpbmciLCJzdGFydHNXaXRoIiwiY2xvc2VUb2FzdCIsInRpdGxlIiwicmVtb3ZlIiwiaW5zdGFuY2UiLCJjcmVhdGVUb2FzdEluc3RhbmNlIiwic2V0U3RhdGUiLCJwcmV2aW91c1N0YXRlIiwidW5pcXVlSWQiLCJpZENvdW50ZXIiLCJkZXNjcmlwdGlvbiIsImhhc0Nsb3NlQnV0dG9uIiwiZHVyYXRpb24iLCJpbnRlbnQiLCJtYXAiLCJpc1Nob3duIiwiZmlsdGVyIiwiYmluZE5vdGlmeSIsIm5vdGlmeSIsImJpbmRSZW1vdmUiLCJiaW5kR2V0VG9hc3RzIiwiYmluZENsb3NlQWxsIiwiY2xvc2VBbGwiLCJyZW1vdmVUb2FzdCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLGlCQUFJO0FBQ3ZCQyxFQUFBQSxRQUFRLEVBQUUsR0FEYTtBQUV2QkMsRUFBQUEsTUFBTSxFQUFFLFFBRmU7QUFHdkJDLEVBQUFBLEdBQUcsRUFBRSxDQUhr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QUFacEIsS0FBWTtBQUN4RCxlQUNFLGdDQUFDLGlCQUFEO0FBQU8sVUFBQSxHQUFHLEVBQUVRLEVBQVo7QUFBZ0IsVUFBQSxRQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUN5QixXQUFMLENBQWlCekIsRUFBakIsQ0FBTjtBQUFBO0FBQTFCLFdBQTBEUixLQUExRCxHQUNHb0IsV0FESCxDQURGO0FBS0QsT0FOQSxDQURILENBREY7QUFXRDs7O0VBaEl1Q2Msa0JBQU1DLGE7OztBQUEzQnBDLFk7aUNBQUFBLFksZUFDQTtBQUNqQjs7O0FBR0E0QixFQUFBQSxVQUFVLEVBQUVTLHNCQUFVQyxJQUFWLENBQWVDLFVBSlY7O0FBTWpCOzs7QUFHQVQsRUFBQUEsVUFBVSxFQUFFTyxzQkFBVUMsSUFBVixDQUFlQyxVQVRWOztBQVdqQjs7O0FBR0FSLEVBQUFBLGFBQWEsRUFBRU0sc0JBQVVDLElBQVYsQ0FBZUMsVUFkYjs7QUFnQmpCOzs7QUFHQVAsRUFBQUEsWUFBWSxFQUFFSyxzQkFBVUMsSUFBVixDQUFlQztBQW5CWixDO2lDQURBdkMsWSxlQXVCQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0J1xuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBtYXhXaWR0aDogNTYwLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIHJpZ2h0OiAwLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgekluZGV4OiBTdGFja2luZ09yZGVyLlRPQVNURVIsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJ1xufSlcblxuY29uc3QgaGFzQ3VzdG9tSWQgPSBzZXR0aW5ncyA9PiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChzZXR0aW5ncywgJ2lkJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RNYW5hZ2VyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLm5vdGlmeWAgZnVuY3Rpb24uXG4gICAgICovXG4gICAgYmluZE5vdGlmeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5yZW1vdmVgIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGJpbmRSZW1vdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMuZ2V0VG9hc3RzYCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBiaW5kR2V0VG9hc3RzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLmNsb3NlQWxsYCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBiaW5kQ2xvc2VBbGw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBpZENvdW50ZXIgPSAwXG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIHByb3BzLmJpbmROb3RpZnkodGhpcy5ub3RpZnkpXG4gICAgcHJvcHMuYmluZFJlbW92ZSh0aGlzLnJlbW92ZSlcbiAgICBwcm9wcy5iaW5kR2V0VG9hc3RzKHRoaXMuZ2V0VG9hc3RzKVxuICAgIHByb3BzLmJpbmRDbG9zZUFsbCh0aGlzLmNsb3NlQWxsKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvYXN0czogW11cbiAgICB9XG4gIH1cblxuICBnZXRUb2FzdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudG9hc3RzXG4gIH1cblxuICBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICB0aGlzLmdldFRvYXN0cygpLmZvckVhY2godG9hc3QgPT4gdG9hc3QuY2xvc2UoKSlcbiAgfVxuXG4gIHJlbW92ZSA9IGlkID0+IHtcbiAgICBmb3IgKGNvbnN0IHRvYXN0IG9mIHRoaXMuc3RhdGUudG9hc3RzKSB7XG4gICAgICAvLyBTaW5jZSB1bmlxdWUgSUQgaXMgc3RpbGwgYXBwZW5kZWQgdG8gYSBjdXN0b20gSUQsIHNraXAgdGhlIHVuaXF1ZSBJRCBhbmQgY2hlY2sgb25seSBwcmVmaXhcbiAgICAgIGlmIChTdHJpbmcodG9hc3QuaWQpLnN0YXJ0c1dpdGgoaWQpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VUb2FzdCh0b2FzdC5pZClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBub3RpZnkgPSAodGl0bGUsIHNldHRpbmdzKSA9PiB7XG4gICAgLy8gSWYgdGhlcmUncyBhIGN1c3RvbSB0b2FzdCBJRCBwYXNzZWQsIGNsb3NlIGV4aXN0aW5nIHRvYXN0cyB3aXRoIHRoZSBzYW1lIGN1c3RvbSBJRFxuICAgIGlmIChoYXNDdXN0b21JZChzZXR0aW5ncykpIHtcbiAgICAgIHRoaXMucmVtb3ZlKHNldHRpbmdzLmlkKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jcmVhdGVUb2FzdEluc3RhbmNlKHRpdGxlLCBzZXR0aW5ncylcblxuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2FzdHM6IFtpbnN0YW5jZSwgLi4ucHJldmlvdXNTdGF0ZS50b2FzdHNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY3JlYXRlVG9hc3RJbnN0YW5jZSA9ICh0aXRsZSwgc2V0dGluZ3MpID0+IHtcbiAgICBjb25zdCB1bmlxdWVJZCA9ICsrVG9hc3RNYW5hZ2VyLmlkQ291bnRlclxuICAgIGNvbnN0IGlkID0gaGFzQ3VzdG9tSWQoc2V0dGluZ3MpID8gYCR7c2V0dGluZ3MuaWR9LSR7dW5pcXVlSWR9YCA6IHVuaXF1ZUlkXG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBzZXR0aW5ncy5kZXNjcmlwdGlvbixcbiAgICAgIGhhc0Nsb3NlQnV0dG9uOiBzZXR0aW5ncy5oYXNDbG9zZUJ1dHRvbiB8fCB0cnVlLFxuICAgICAgZHVyYXRpb246IHNldHRpbmdzLmR1cmF0aW9uIHx8IDUsXG4gICAgICBjbG9zZTogKCkgPT4gdGhpcy5jbG9zZVRvYXN0KGlkKSxcbiAgICAgIGludGVudDogc2V0dGluZ3MuaW50ZW50XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBzZXQgaXNTaG93biBvbiB0aGUgVG9hc3Qgd2hpY2ggd2lsbCBjbG9zZSB0aGUgdG9hc3QuXG4gICAqIEl0IHdvbid0IHJlbW92ZSB0aGUgdG9hc3QgdW50aWwgb25FeGl0ZWQgdHJpZ2dlcnMgb25SZW1vdmUuXG4gICAqL1xuICBjbG9zZVRvYXN0ID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2FzdHM6IHByZXZpb3VzU3RhdGUudG9hc3RzLm1hcCh0b2FzdCA9PiB7XG4gICAgICAgICAgaWYgKHRvYXN0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4udG9hc3QsXG4gICAgICAgICAgICAgIGlzU2hvd246IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRvYXN0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZVRvYXN0ID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2FzdHM6IHByZXZpb3VzU3RhdGUudG9hc3RzLmZpbHRlcih0b2FzdCA9PiB0b2FzdC5pZCAhPT0gaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxuICAgICAgICB7dGhpcy5zdGF0ZS50b2FzdHMubWFwKCh7IGlkLCBkZXNjcmlwdGlvbiwgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VG9hc3Qga2V5PXtpZH0gb25SZW1vdmU9eygpID0+IHRoaXMucmVtb3ZlVG9hc3QoaWQpfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1RvYXN0PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG4iXX0=
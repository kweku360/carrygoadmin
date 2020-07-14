import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { StackingOrder } from '../../constants';
import Toast from './Toast';
var wrapperClass = css({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: StackingOrder.TOASTER,
  pointerEvents: 'none'
});

var hasCustomId = function hasCustomId(settings) {
  return Object.hasOwnProperty.call(settings, 'id');
};

var ToastManager = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ToastManager, _React$PureComponent);

  var _super = _createSuper(ToastManager);

  function ToastManager(props, context) {
    var _this;

    _classCallCheck(this, ToastManager);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getToasts", function () {
      return _this.state.toasts;
    });

    _defineProperty(_assertThisInitialized(_this), "closeAll", function () {
      _this.getToasts().forEach(function (toast) {
        return toast.close();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "remove", function (id) {
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

    _defineProperty(_assertThisInitialized(_this), "notify", function (title, settings) {
      // If there's a custom toast ID passed, close existing toasts with the same custom ID
      if (hasCustomId(settings)) {
        _this.remove(settings.id);
      }

      var instance = _this.createToastInstance(title, settings);

      _this.setState(function (previousState) {
        return {
          toasts: [instance].concat(_toConsumableArray(previousState.toasts))
        };
      });

      return instance;
    });

    _defineProperty(_assertThisInitialized(_this), "createToastInstance", function (title, settings) {
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

    _defineProperty(_assertThisInitialized(_this), "closeToast", function (id) {
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

    _defineProperty(_assertThisInitialized(_this), "removeToast", function (id) {
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

  _createClass(ToastManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("span", {
        className: wrapperClass
      }, this.state.toasts.map(function (_ref) {
        var id = _ref.id,
            description = _ref.description,
            props = _objectWithoutProperties(_ref, ["id", "description"]);

        return React.createElement(Toast, _extends({
          key: id,
          onRemove: function onRemove() {
            return _this2.removeToast(id);
          }
        }, props), description);
      }));
    }
  }]);

  return ToastManager;
}(React.PureComponent);

ToastManager.displayName = "ToastManager";

_defineProperty(ToastManager, "propTypes", {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: PropTypes.func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: PropTypes.func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: PropTypes.func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: PropTypes.func.isRequired
});

_defineProperty(ToastManager, "idCounter", 0);

export { ToastManager as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdE1hbmFnZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJjc3MiLCJQcm9wVHlwZXMiLCJTdGFja2luZ09yZGVyIiwiVG9hc3QiLCJ3cmFwcGVyQ2xhc3MiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJyaWdodCIsInBvc2l0aW9uIiwiekluZGV4IiwiVE9BU1RFUiIsInBvaW50ZXJFdmVudHMiLCJoYXNDdXN0b21JZCIsInNldHRpbmdzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVG9hc3RNYW5hZ2VyIiwicHJvcHMiLCJjb250ZXh0Iiwic3RhdGUiLCJ0b2FzdHMiLCJnZXRUb2FzdHMiLCJmb3JFYWNoIiwidG9hc3QiLCJjbG9zZSIsImlkIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsImNsb3NlVG9hc3QiLCJ0aXRsZSIsInJlbW92ZSIsImluc3RhbmNlIiwiY3JlYXRlVG9hc3RJbnN0YW5jZSIsInNldFN0YXRlIiwicHJldmlvdXNTdGF0ZSIsInVuaXF1ZUlkIiwiaWRDb3VudGVyIiwiZGVzY3JpcHRpb24iLCJoYXNDbG9zZUJ1dHRvbiIsImR1cmF0aW9uIiwiaW50ZW50IiwibWFwIiwiaXNTaG93biIsImZpbHRlciIsImJpbmROb3RpZnkiLCJub3RpZnkiLCJiaW5kUmVtb3ZlIiwiYmluZEdldFRvYXN0cyIsImJpbmRDbG9zZUFsbCIsImNsb3NlQWxsIiwicmVtb3ZlVG9hc3QiLCJQdXJlQ29tcG9uZW50IiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGlCQUE5QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7QUFF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LFNBQ0csS0FBS2tCLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQnFCLEdBQWxCLENBQXNCLGdCQUFtQztBQUFBLFlBQWhDaEIsRUFBZ0MsUUFBaENBLEVBQWdDO0FBQUEsWUFBNUJZLFdBQTRCLFFBQTVCQSxXQUE0QjtBQUFBLFlBQVpwQixLQUFZOztBQUN4RCxlQUNFLG9CQUFDLEtBQUQ7QUFBTyxVQUFBLEdBQUcsRUFBRVEsRUFBWjtBQUFnQixVQUFBLFFBQVEsRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ3lCLFdBQUwsQ0FBaUJ6QixFQUFqQixDQUFOO0FBQUE7QUFBMUIsV0FBMERSLEtBQTFELEdBQ0dvQixXQURILENBREY7QUFLRCxPQU5BLENBREgsQ0FERjtBQVdEOzs7O0VBaEl1Q3pDLEtBQUssQ0FBQ3VELGE7O0FBQTNCbkMsWTs7Z0JBQUFBLFksZUFDQTtBQUNqQjs7O0FBR0E0QixFQUFBQSxVQUFVLEVBQUU5QyxTQUFTLENBQUNzRCxJQUFWLENBQWVDLFVBSlY7O0FBTWpCOzs7QUFHQVAsRUFBQUEsVUFBVSxFQUFFaEQsU0FBUyxDQUFDc0QsSUFBVixDQUFlQyxVQVRWOztBQVdqQjs7O0FBR0FOLEVBQUFBLGFBQWEsRUFBRWpELFNBQVMsQ0FBQ3NELElBQVYsQ0FBZUMsVUFkYjs7QUFnQmpCOzs7QUFHQUwsRUFBQUEsWUFBWSxFQUFFbEQsU0FBUyxDQUFDc0QsSUFBVixDQUFlQztBQW5CWixDOztnQkFEQXJDLFksZUF1QkEsQzs7U0F2QkFBLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnXG5cbmNvbnN0IHdyYXBwZXJDbGFzcyA9IGNzcyh7XG4gIG1heFdpZHRoOiA1NjAsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IDAsXG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB6SW5kZXg6IFN0YWNraW5nT3JkZXIuVE9BU1RFUixcbiAgcG9pbnRlckV2ZW50czogJ25vbmUnXG59KVxuXG5jb25zdCBoYXNDdXN0b21JZCA9IHNldHRpbmdzID0+IE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNldHRpbmdzLCAnaWQnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdE1hbmFnZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMubm90aWZ5YCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBiaW5kTm90aWZ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLnJlbW92ZWAgZnVuY3Rpb24uXG4gICAgICovXG4gICAgYmluZFJlbW92ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5nZXRUb2FzdHNgIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGJpbmRHZXRUb2FzdHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMuY2xvc2VBbGxgIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGJpbmRDbG9zZUFsbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGlkQ291bnRlciA9IDBcblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgcHJvcHMuYmluZE5vdGlmeSh0aGlzLm5vdGlmeSlcbiAgICBwcm9wcy5iaW5kUmVtb3ZlKHRoaXMucmVtb3ZlKVxuICAgIHByb3BzLmJpbmRHZXRUb2FzdHModGhpcy5nZXRUb2FzdHMpXG4gICAgcHJvcHMuYmluZENsb3NlQWxsKHRoaXMuY2xvc2VBbGwpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9hc3RzOiBbXVxuICAgIH1cbiAgfVxuXG4gIGdldFRvYXN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS50b2FzdHNcbiAgfVxuXG4gIGNsb3NlQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuZ2V0VG9hc3RzKCkuZm9yRWFjaCh0b2FzdCA9PiB0b2FzdC5jbG9zZSgpKVxuICB9XG5cbiAgcmVtb3ZlID0gaWQgPT4ge1xuICAgIGZvciAoY29uc3QgdG9hc3Qgb2YgdGhpcy5zdGF0ZS50b2FzdHMpIHtcbiAgICAgIC8vIFNpbmNlIHVuaXF1ZSBJRCBpcyBzdGlsbCBhcHBlbmRlZCB0byBhIGN1c3RvbSBJRCwgc2tpcCB0aGUgdW5pcXVlIElEIGFuZCBjaGVjayBvbmx5IHByZWZpeFxuICAgICAgaWYgKFN0cmluZyh0b2FzdC5pZCkuc3RhcnRzV2l0aChpZCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZVRvYXN0KHRvYXN0LmlkKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeSA9ICh0aXRsZSwgc2V0dGluZ3MpID0+IHtcbiAgICAvLyBJZiB0aGVyZSdzIGEgY3VzdG9tIHRvYXN0IElEIHBhc3NlZCwgY2xvc2UgZXhpc3RpbmcgdG9hc3RzIHdpdGggdGhlIHNhbWUgY3VzdG9tIElEXG4gICAgaWYgKGhhc0N1c3RvbUlkKHNldHRpbmdzKSkge1xuICAgICAgdGhpcy5yZW1vdmUoc2V0dGluZ3MuaWQpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVRvYXN0SW5zdGFuY2UodGl0bGUsIHNldHRpbmdzKVxuXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvYXN0czogW2luc3RhbmNlLCAuLi5wcmV2aW91c1N0YXRlLnRvYXN0c11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjcmVhdGVUb2FzdEluc3RhbmNlID0gKHRpdGxlLCBzZXR0aW5ncykgPT4ge1xuICAgIGNvbnN0IHVuaXF1ZUlkID0gKytUb2FzdE1hbmFnZXIuaWRDb3VudGVyXG4gICAgY29uc3QgaWQgPSBoYXNDdXN0b21JZChzZXR0aW5ncykgPyBgJHtzZXR0aW5ncy5pZH0tJHt1bmlxdWVJZH1gIDogdW5pcXVlSWRcblxuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHNldHRpbmdzLmRlc2NyaXB0aW9uLFxuICAgICAgaGFzQ2xvc2VCdXR0b246IHNldHRpbmdzLmhhc0Nsb3NlQnV0dG9uIHx8IHRydWUsXG4gICAgICBkdXJhdGlvbjogc2V0dGluZ3MuZHVyYXRpb24gfHwgNSxcbiAgICAgIGNsb3NlOiAoKSA9PiB0aGlzLmNsb3NlVG9hc3QoaWQpLFxuICAgICAgaW50ZW50OiBzZXR0aW5ncy5pbnRlbnRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyB3aWxsIHNldCBpc1Nob3duIG9uIHRoZSBUb2FzdCB3aGljaCB3aWxsIGNsb3NlIHRoZSB0b2FzdC5cbiAgICogSXQgd29uJ3QgcmVtb3ZlIHRoZSB0b2FzdCB1bnRpbCBvbkV4aXRlZCB0cmlnZ2VycyBvblJlbW92ZS5cbiAgICovXG4gIGNsb3NlVG9hc3QgPSBpZCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvYXN0czogcHJldmlvdXNTdGF0ZS50b2FzdHMubWFwKHRvYXN0ID0+IHtcbiAgICAgICAgICBpZiAodG9hc3QuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi50b2FzdCxcbiAgICAgICAgICAgICAgaXNTaG93bjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdG9hc3RcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlVG9hc3QgPSBpZCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvYXN0czogcHJldmlvdXNTdGF0ZS50b2FzdHMuZmlsdGVyKHRvYXN0ID0+IHRvYXN0LmlkICE9PSBpZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3dyYXBwZXJDbGFzc30+XG4gICAgICAgIHt0aGlzLnN0YXRlLnRvYXN0cy5tYXAoKHsgaWQsIGRlc2NyaXB0aW9uLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUb2FzdCBrZXk9e2lkfSBvblJlbW92ZT17KCkgPT4gdGhpcy5yZW1vdmVUb2FzdChpZCl9IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVG9hc3Q+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvc3Bhbj5cbiAgICApXG4gIH1cbn1cbiJdfQ==
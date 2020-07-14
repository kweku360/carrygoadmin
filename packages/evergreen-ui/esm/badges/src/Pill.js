import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import Badge from './Badge';

var Pill = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pill, _PureComponent);

  var _super = _createSuper(Pill);

  function Pill() {
    _classCallCheck(this, Pill);

    return _super.apply(this, arguments);
  }

  _createClass(Pill, [{
    key: "render",
    value: function render() {
      return React.createElement(Badge, _extends({
        borderRadius: 999
      }, this.props));
    }
  }]);

  return Pill;
}(PureComponent);

Pill.displayName = "Pill";

_defineProperty(Pill, "propTypes", _objectSpread({}, Badge.propTypes));

export { Pill as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYWRnZXMvc3JjL1BpbGwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiQmFkZ2UiLCJQaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7O0lBRXFCQyxJOzs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyxvQkFBQyxLQUFEO0FBQU8sUUFBQSxZQUFZLEVBQUU7QUFBckIsU0FBOEIsS0FBS0MsS0FBbkMsRUFBUDtBQUNEOzs7O0VBUCtCSCxhOztBQUFiRSxJOztnQkFBQUEsSSxpQ0FFZEQsS0FBSyxDQUFDRyxTOztTQUZRRixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCYWRnZSBmcm9tICcuL0JhZGdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQmFkZ2UucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxCYWRnZSBib3JkZXJSYWRpdXM9ezk5OX0gey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==
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
import { ArrowLeftIcon } from '../../icons';
import Button from './Button';

var BackButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(BackButton, _PureComponent);

  var _super = _createSuper(BackButton);

  function BackButton() {
    _classCallCheck(this, BackButton);

    return _super.apply(this, arguments);
  }

  _createClass(BackButton, [{
    key: "render",
    value: function render() {
      return React.createElement(Button, _extends({
        iconBefore: React.createElement(ArrowLeftIcon, null)
      }, this.props));
    }
  }]);

  return BackButton;
}(PureComponent);

BackButton.displayName = "BackButton";

_defineProperty(BackButton, "propTypes", _objectSpread({}, Button.propTypes));

_defineProperty(BackButton, "defaultProps", _objectSpread({}, Button.defaultProps, {
  children: 'Back'
}));

export { BackButton as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CYWNrQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkFycm93TGVmdEljb24iLCJCdXR0b24iLCJCYWNrQnV0dG9uIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixhQUE5QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7O0lBRXFCQyxVOzs7Ozs7Ozs7Ozs7OzZCQWFWO0FBQ1AsYUFBTyxvQkFBQyxNQUFEO0FBQVEsUUFBQSxVQUFVLEVBQUUsb0JBQUMsYUFBRDtBQUFwQixTQUEyQyxLQUFLQyxLQUFoRCxFQUFQO0FBQ0Q7Ozs7RUFmcUNKLGE7O0FBQW5CRyxVOztnQkFBQUEsVSxpQ0FLZEQsTUFBTSxDQUFDRyxTOztnQkFMT0YsVSxvQ0FTZEQsTUFBTSxDQUFDSSxZO0FBQ1ZDLEVBQUFBLFFBQVEsRUFBRTs7O1NBVk9KLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja0J1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCdXR0b24gY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJ1dHRvbi5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uQnV0dG9uLmRlZmF1bHRQcm9wcyxcbiAgICBjaGlsZHJlbjogJ0JhY2snXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxCdXR0b24gaWNvbkJlZm9yZT17PEFycm93TGVmdEljb24gLz59IHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=
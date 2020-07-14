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
import Text from './Text';

var Strong = /*#__PURE__*/function (_PureComponent) {
  _inherits(Strong, _PureComponent);

  var _super = _createSuper(Strong);

  function Strong() {
    _classCallCheck(this, Strong);

    return _super.apply(this, arguments);
  }

  _createClass(Strong, [{
    key: "render",
    value: function render() {
      return React.createElement(Text, _extends({
        is: "strong",
        fontWeight: 600
      }, this.props));
    }
  }]);

  return Strong;
}(PureComponent);

Strong.displayName = "Strong";

_defineProperty(Strong, "propTypes", _objectSpread({}, Text.propTypes));

export { Strong as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9TdHJvbmcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsIlN0cm9uZyIsInByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCOztJQUVxQkMsTTs7Ozs7Ozs7Ozs7Ozs2QkFLVjtBQUNQLGFBQU8sb0JBQUMsSUFBRDtBQUFNLFFBQUEsRUFBRSxFQUFDLFFBQVQ7QUFBa0IsUUFBQSxVQUFVLEVBQUU7QUFBOUIsU0FBdUMsS0FBS0MsS0FBNUMsRUFBUDtBQUNEOzs7O0VBUGlDSCxhOztBQUFmRSxNOztnQkFBQUEsTSxpQ0FFZEQsSUFBSSxDQUFDRyxTOztTQUZTRixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Ryb25nIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFRleHQgaXM9XCJzdHJvbmdcIiBmb250V2VpZ2h0PXs2MDB9IHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=
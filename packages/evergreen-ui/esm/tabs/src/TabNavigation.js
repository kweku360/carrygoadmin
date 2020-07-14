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
import Box from 'ui-box';

var TabNavigation = /*#__PURE__*/function (_PureComponent) {
  _inherits(TabNavigation, _PureComponent);

  var _super = _createSuper(TabNavigation);

  function TabNavigation() {
    _classCallCheck(this, TabNavigation);

    return _super.apply(this, arguments);
  }

  _createClass(TabNavigation, [{
    key: "render",
    value: function render() {
      return React.createElement(Box, _extends({
        is: "nav",
        role: "navigation"
      }, this.props));
    }
  }]);

  return TabNavigation;
}(PureComponent);

TabNavigation.displayName = "TabNavigation";

_defineProperty(TabNavigation, "propTypes", _objectSpread({}, Box.propTypes));

export { TabNavigation as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9UYWJOYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkJveCIsIlRhYk5hdmlnYXRpb24iLCJwcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjs7SUFFcUJDLGE7Ozs7Ozs7Ozs7Ozs7NkJBS1Y7QUFDUCxhQUFPLG9CQUFDLEdBQUQ7QUFBSyxRQUFBLEVBQUUsRUFBQyxLQUFSO0FBQWMsUUFBQSxJQUFJLEVBQUM7QUFBbkIsU0FBb0MsS0FBS0MsS0FBekMsRUFBUDtBQUNEOzs7O0VBUHdDSCxhOztBQUF0QkUsYTs7Z0JBQUFBLGEsaUNBRWRELEdBQUcsQ0FBQ0csUzs7U0FGVUYsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiTmF2aWdhdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJveC5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEJveCBpcz1cIm5hdlwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==
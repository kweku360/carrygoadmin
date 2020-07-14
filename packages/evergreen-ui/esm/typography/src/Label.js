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

var Label = /*#__PURE__*/function (_PureComponent) {
  _inherits(Label, _PureComponent);

  var _super = _createSuper(Label);

  function Label() {
    _classCallCheck(this, Label);

    return _super.apply(this, arguments);
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      return React.createElement(Text, _extends({
        is: "label",
        fontWeight: 500
      }, this.props));
    }
  }]);

  return Label;
}(PureComponent);

Label.displayName = "Label";

_defineProperty(Label, "propTypes", _objectSpread({}, Text.propTypes));

export { Label as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MYWJlbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJUZXh0IiwiTGFiZWwiLCJwcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjs7SUFFcUJDLEs7Ozs7Ozs7Ozs7Ozs7NkJBS1Y7QUFDUCxhQUFPLG9CQUFDLElBQUQ7QUFBTSxRQUFBLEVBQUUsRUFBQyxPQUFUO0FBQWlCLFFBQUEsVUFBVSxFQUFFO0FBQTdCLFNBQXNDLEtBQUtDLEtBQTNDLEVBQVA7QUFDRDs7OztFQVBnQ0gsYTs7QUFBZEUsSzs7Z0JBQUFBLEssaUNBRWRELElBQUksQ0FBQ0csUzs7U0FGU0YsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFRleHQgaXM9XCJsYWJlbFwiIGZvbnRXZWlnaHQ9ezUwMH0gey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==
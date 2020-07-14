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
import Pane from './Pane';

var Card = /*#__PURE__*/function (_PureComponent) {
  _inherits(Card, _PureComponent);

  var _super = _createSuper(Card);

  function Card() {
    _classCallCheck(this, Card);

    return _super.apply(this, arguments);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      return React.createElement(Pane, _extends({
        borderRadius: 5
      }, this.props));
    }
  }]);

  return Card;
}(PureComponent);

Card.displayName = "Card";

_defineProperty(Card, "propTypes", _objectSpread({}, Pane.propTypes));

export { Card as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL0NhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUGFuZSIsIkNhcmQiLCJwcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjs7SUFFcUJDLEk7Ozs7Ozs7Ozs7Ozs7NkJBS1Y7QUFDUCxhQUFPLG9CQUFDLElBQUQ7QUFBTSxRQUFBLFlBQVksRUFBRTtBQUFwQixTQUEyQixLQUFLQyxLQUFoQyxFQUFQO0FBQ0Q7Ozs7RUFQK0JILGE7O0FBQWJFLEk7O2dCQUFBQSxJLGlDQUVkRCxJQUFJLENBQUNHLFM7O1NBRlNGLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhbmUgZnJvbSAnLi9QYW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uUGFuZS5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFBhbmUgYm9yZGVyUmFkaXVzPXs1fSB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl19
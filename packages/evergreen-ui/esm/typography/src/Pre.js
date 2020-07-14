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

var Pre = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pre, _PureComponent);

  var _super = _createSuper(Pre);

  function Pre() {
    _classCallCheck(this, Pre);

    return _super.apply(this, arguments);
  }

  _createClass(Pre, [{
    key: "render",
    value: function render() {
      return React.createElement(Text, _extends({
        is: "pre",
        marginTop: 0,
        marginBottom: 0
      }, this.props));
    }
  }]);

  return Pre;
}(PureComponent);

Pre.displayName = "Pre";

_defineProperty(Pre, "propTypes", _objectSpread({}, Text.propTypes));

export { Pre as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9QcmUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsIlByZSIsInByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCOztJQUVxQkMsRzs7Ozs7Ozs7Ozs7Ozs2QkFLVjtBQUNQLGFBQU8sb0JBQUMsSUFBRDtBQUFNLFFBQUEsRUFBRSxFQUFDLEtBQVQ7QUFBZSxRQUFBLFNBQVMsRUFBRSxDQUExQjtBQUE2QixRQUFBLFlBQVksRUFBRTtBQUEzQyxTQUFrRCxLQUFLQyxLQUF2RCxFQUFQO0FBQ0Q7Ozs7RUFQOEJILGE7O0FBQVpFLEc7O2dCQUFBQSxHLGlDQUVkRCxJQUFJLENBQUNHLFM7O1NBRlNGLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5UZXh0LnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VGV4dCBpcz1cInByZVwiIG1hcmdpblRvcD17MH0gbWFyZ2luQm90dG9tPXswfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl19
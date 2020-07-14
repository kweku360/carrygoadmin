import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import Box from 'ui-box';
/**
 * Small can only be used inside of Text or Paragraph.
 */

var Small = /*#__PURE__*/function (_PureComponent) {
  _inherits(Small, _PureComponent);

  var _super = _createSuper(Small);

  function Small() {
    _classCallCheck(this, Small);

    return _super.apply(this, arguments);
  }

  _createClass(Small, [{
    key: "render",
    value: function render() {
      return React.createElement(Box, _extends({
        is: "small",
        fontSize: "85%"
      }, this.props));
    }
  }]);

  return Small;
}(PureComponent);

Small.displayName = "Small";
export { Small as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9TbWFsbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJTbWFsbCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUVBOzs7O0lBR3FCQyxLOzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFBTyxvQkFBQyxHQUFEO0FBQUssUUFBQSxFQUFFLEVBQUMsT0FBUjtBQUFnQixRQUFBLFFBQVEsRUFBQztBQUF6QixTQUFtQyxLQUFLQyxLQUF4QyxFQUFQO0FBQ0Q7Ozs7RUFIZ0NILGE7O0FBQWRFLEs7U0FBQUEsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuLyoqXG4gKiBTbWFsbCBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBvZiBUZXh0IG9yIFBhcmFncmFwaC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Qm94IGlzPVwic21hbGxcIiBmb250U2l6ZT1cIjg1JVwiIHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=
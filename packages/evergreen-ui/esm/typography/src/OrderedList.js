import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
import PropTypes from 'prop-types';
import Box from 'ui-box';

var OrderedList = /*#__PURE__*/function (_PureComponent) {
  _inherits(OrderedList, _PureComponent);

  var _super = _createSuper(OrderedList);

  function OrderedList() {
    _classCallCheck(this, OrderedList);

    return _super.apply(this, arguments);
  }

  _createClass(OrderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, ["children", "size"]);

      var finalChildren = React.Children.map(children, function (child) {
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(child, {
          // Prefer more granularly defined icon if present
          size: child.props.size || size
        });
      });
      return React.createElement(Box, _extends({}, OrderedList.styles, props), finalChildren);
    }
  }]);

  return OrderedList;
}(PureComponent);

OrderedList.displayName = "OrderedList";

_defineProperty(OrderedList, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired
}));

_defineProperty(OrderedList, "defaultProps", {
  size: 400
});

_defineProperty(OrderedList, "styles", {
  is: 'ol',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
});

export { OrderedList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9PcmRlcmVkTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJPcmRlcmVkTGlzdCIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiZmluYWxDaGlsZHJlbiIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsInN0eWxlcyIsInByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImlzIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJsaXN0U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjs7SUFFcUJDLFc7Ozs7Ozs7Ozs7Ozs7NkJBdUJWO0FBQUEsd0JBQzhCLEtBQUtDLEtBRG5DO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsSUFEWCxlQUNXQSxJQURYO0FBQUEsVUFDb0JGLEtBRHBCOztBQUdQLFVBQU1HLGFBQWEsR0FBR1IsS0FBSyxDQUFDUyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJKLFFBQW5CLEVBQTZCLFVBQUFLLEtBQUssRUFBSTtBQUMxRCxZQUFJLENBQUNYLEtBQUssQ0FBQ1ksY0FBTixDQUFxQkQsS0FBckIsQ0FBTCxFQUFrQztBQUNoQyxpQkFBT0EsS0FBUDtBQUNEOztBQUVELGVBQU9YLEtBQUssQ0FBQ2EsWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDL0I7QUFDQUosVUFBQUEsSUFBSSxFQUFFSSxLQUFLLENBQUNOLEtBQU4sQ0FBWUUsSUFBWixJQUFvQkE7QUFGSyxTQUExQixDQUFQO0FBSUQsT0FUcUIsQ0FBdEI7QUFXQSxhQUNFLG9CQUFDLEdBQUQsZUFBU0gsV0FBVyxDQUFDVSxNQUFyQixFQUFpQ1QsS0FBakMsR0FDR0csYUFESCxDQURGO0FBS0Q7Ozs7RUExQ3NDUCxhOztBQUFwQkcsVzs7Z0JBQUFBLFcsaUNBRWRELEdBQUcsQ0FBQ1ksUztBQUVQOzs7O0FBSUFSLEVBQUFBLElBQUksRUFBRUwsU0FBUyxDQUFDYyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWhCLEVBQXNDQzs7O2dCQVIzQmIsVyxrQkFXRztBQUNwQkcsRUFBQUEsSUFBSSxFQUFFO0FBRGMsQzs7Z0JBWEhILFcsWUFlSDtBQUNkYyxFQUFBQSxFQUFFLEVBQUUsSUFEVTtBQUVkQyxFQUFBQSxNQUFNLEVBQUUsQ0FGTTtBQUdkQyxFQUFBQSxVQUFVLEVBQUUsT0FIRTtBQUlkQyxFQUFBQSxPQUFPLEVBQUUsQ0FKSztBQUtkQyxFQUFBQSxTQUFTLEVBQUU7QUFMRyxDOztTQWZHbEIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJlZExpc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgdGV4dCB1c2VkIGluIGEgbGlzdCBpdGVtLlxuICAgICAqIENhbiBiZTogMzAwLCA0MDAsIDUwMCwgNjAwLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDAsIDUwMCwgNjAwXSkuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA0MDBcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgaXM6ICdvbCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIG1hcmdpbkxlZnQ6ICcxLjFlbScsXG4gICAgcGFkZGluZzogMCxcbiAgICBsaXN0U3R5bGU6ICdkZWNpbWFsJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHNpemUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBmaW5hbENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAvLyBQcmVmZXIgbW9yZSBncmFudWxhcmx5IGRlZmluZWQgaWNvbiBpZiBwcmVzZW50XG4gICAgICAgIHNpemU6IGNoaWxkLnByb3BzLnNpemUgfHwgc2l6ZVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggey4uLk9yZGVyZWRMaXN0LnN0eWxlc30gey4uLnByb3BzfT5cbiAgICAgICAge2ZpbmFsQ2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdfQ==
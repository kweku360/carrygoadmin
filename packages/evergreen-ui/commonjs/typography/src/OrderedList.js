"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var OrderedList = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(OrderedList, _PureComponent);

  var _super = _createSuper(OrderedList);

  function OrderedList() {
    (0, _classCallCheck2["default"])(this, OrderedList);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(OrderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "size"]);

      var finalChildren = _react["default"].Children.map(children, function (child) {
        if (!_react["default"].isValidElement(child)) {
          return child;
        }

        return _react["default"].cloneElement(child, {
          // Prefer more granularly defined icon if present
          size: child.props.size || size
        });
      });

      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({}, OrderedList.styles, props), finalChildren);
    }
  }]);
  return OrderedList;
}(_react.PureComponent);

exports["default"] = OrderedList;
OrderedList.displayName = "OrderedList";
(0, _defineProperty2["default"])(OrderedList, "propTypes", _objectSpread({}, _uiBox["default"].propTypes, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes["default"].oneOf([300, 400, 500, 600]).isRequired
}));
(0, _defineProperty2["default"])(OrderedList, "defaultProps", {
  size: 400
});
(0, _defineProperty2["default"])(OrderedList, "styles", {
  is: 'ol',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9PcmRlcmVkTGlzdC5qcyJdLCJuYW1lcyI6WyJPcmRlcmVkTGlzdCIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiZmluYWxDaGlsZHJlbiIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVzIiwiUHVyZUNvbXBvbmVudCIsIkJveCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImlzIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJsaXN0U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7NkJBdUJWO0FBQUEsd0JBQzhCLEtBQUtDLEtBRG5DO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsSUFEWCxlQUNXQSxJQURYO0FBQUEsVUFDb0JGLEtBRHBCOztBQUdQLFVBQU1HLGFBQWEsR0FBR0Msa0JBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkwsUUFBbkIsRUFBNkIsVUFBQU0sS0FBSyxFQUFJO0FBQzFELFlBQUksQ0FBQ0gsa0JBQU1JLGNBQU4sQ0FBcUJELEtBQXJCLENBQUwsRUFBa0M7QUFDaEMsaUJBQU9BLEtBQVA7QUFDRDs7QUFFRCxlQUFPSCxrQkFBTUssWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDL0I7QUFDQUwsVUFBQUEsSUFBSSxFQUFFSyxLQUFLLENBQUNQLEtBQU4sQ0FBWUUsSUFBWixJQUFvQkE7QUFGSyxTQUExQixDQUFQO0FBSUQsT0FUcUIsQ0FBdEI7O0FBV0EsYUFDRSxnQ0FBQyxpQkFBRCxnQ0FBU0gsV0FBVyxDQUFDVyxNQUFyQixFQUFpQ1YsS0FBakMsR0FDR0csYUFESCxDQURGO0FBS0Q7OztFQTFDc0NRLG9COzs7QUFBcEJaLFc7aUNBQUFBLFcsaUNBRWRhLGtCQUFJQyxTO0FBRVA7Ozs7QUFJQVgsRUFBQUEsSUFBSSxFQUFFWSxzQkFBVUMsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFoQixFQUFzQ0M7O2lDQVIzQmpCLFcsa0JBV0c7QUFDcEJHLEVBQUFBLElBQUksRUFBRTtBQURjLEM7aUNBWEhILFcsWUFlSDtBQUNka0IsRUFBQUEsRUFBRSxFQUFFLElBRFU7QUFFZEMsRUFBQUEsTUFBTSxFQUFFLENBRk07QUFHZEMsRUFBQUEsVUFBVSxFQUFFLE9BSEU7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLENBSks7QUFLZEMsRUFBQUEsU0FBUyxFQUFFO0FBTEcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJlZExpc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgdGV4dCB1c2VkIGluIGEgbGlzdCBpdGVtLlxuICAgICAqIENhbiBiZTogMzAwLCA0MDAsIDUwMCwgNjAwLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDAsIDUwMCwgNjAwXSkuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA0MDBcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgaXM6ICdvbCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIG1hcmdpbkxlZnQ6ICcxLjFlbScsXG4gICAgcGFkZGluZzogMCxcbiAgICBsaXN0U3R5bGU6ICdkZWNpbWFsJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHNpemUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBmaW5hbENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAvLyBQcmVmZXIgbW9yZSBncmFudWxhcmx5IGRlZmluZWQgaWNvbiBpZiBwcmVzZW50XG4gICAgICAgIHNpemU6IGNoaWxkLnByb3BzLnNpemUgfHwgc2l6ZVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggey4uLk9yZGVyZWRMaXN0LnN0eWxlc30gey4uLnByb3BzfT5cbiAgICAgICAge2ZpbmFsQ2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdfQ==
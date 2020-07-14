"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MenuGroup = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MenuGroup, _React$PureComponent);

  var _super = _createSuper(MenuGroup);

  function MenuGroup() {
    (0, _classCallCheck2["default"])(this, MenuGroup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MenuGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return _react["default"].createElement(_layers.Pane, {
        paddingY: 8
      }, title && _react["default"].createElement(_typography.Heading, {
        size: 100,
        marginX: 16,
        marginY: 8
      }, title), children);
    }
  }]);
  return MenuGroup;
}(_react["default"].PureComponent);

exports["default"] = MenuGroup;
MenuGroup.displayName = "MenuGroup";
(0, _defineProperty2["default"])(MenuGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: _propTypes["default"].node,

  /**
   * The children of the menu group.
   */
  children: _propTypes["default"].node
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51R3JvdXAuanMiXSwibmFtZXMiOlsiTWVudUdyb3VwIiwicHJvcHMiLCJ0aXRsZSIsImNoaWxkcmVuIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7OzZCQWFWO0FBQUEsd0JBQ3FCLEtBQUtDLEtBRDFCO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsUUFEUixlQUNRQSxRQURSO0FBRVAsYUFDRSxnQ0FBQyxZQUFEO0FBQU0sUUFBQSxRQUFRLEVBQUU7QUFBaEIsU0FDR0QsS0FBSyxJQUNKLGdDQUFDLG1CQUFEO0FBQVMsUUFBQSxJQUFJLEVBQUUsR0FBZjtBQUFvQixRQUFBLE9BQU8sRUFBRSxFQUE3QjtBQUFpQyxRQUFBLE9BQU8sRUFBRTtBQUExQyxTQUNHQSxLQURILENBRkosRUFNR0MsUUFOSCxDQURGO0FBVUQ7OztFQXpCb0NDLGtCQUFNQyxhOzs7QUFBeEJMLFM7aUNBQUFBLFMsZUFDQTtBQUNqQjs7O0FBR0FFLEVBQUFBLEtBQUssRUFBRUksc0JBQVVDLElBSkE7O0FBTWpCOzs7QUFHQUosRUFBQUEsUUFBUSxFQUFFRyxzQkFBVUM7QUFUSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51R3JvdXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaXRsZSBvZiB0aGUgbWVudSBncm91cC5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIG1lbnUgZ3JvdXAuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgcGFkZGluZ1k9ezh9PlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9ezEwMH0gbWFyZ2luWD17MTZ9IG1hcmdpblk9ezh9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl19
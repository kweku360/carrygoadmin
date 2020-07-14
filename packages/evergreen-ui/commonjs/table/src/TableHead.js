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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _ScrollbarSize = _interopRequireDefault(require("./ScrollbarSize"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TableHead = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TableHead, _PureComponent);

  var _super = _createSuper(TableHead);

  function TableHead() {
    var _this;

    (0, _classCallCheck2["default"])(this, TableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      scrollbarWidth: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleScrollbarSize", function (width) {
      _this.setState({
        scrollbarWidth: width
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(TableHead, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          accountForScrollbar = _this$props.accountForScrollbar,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "height", "accountForScrollbar"]);
      var scrollbarWidth = this.state.scrollbarWidth;
      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        display: "flex",
        flexShrink: 0,
        paddingRight: scrollbarWidth,
        borderBottom: "default",
        background: "tint2",
        height: height
      }, props), children, ' ', accountForScrollbar && _react["default"].createElement(_ScrollbarSize["default"], {
        handleScrollbarSize: this.handleScrollbarSize
      }));
    }
  }]);
  return TableHead;
}(_react.PureComponent);

exports["default"] = TableHead;
TableHead.displayName = "TableHead";
(0, _defineProperty2["default"])(TableHead, "propTypes", _objectSpread({}, _layers.Pane.propTypes, {
  /**
   * The height of the table head.
   */
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,

  /**
   * This should always be true if you are using TableHead together with a TableBody.
   * Because TableBody has `overflowY: scroll` by default.
   */
  accountForScrollbar: _propTypes["default"].bool
}));
(0, _defineProperty2["default"])(TableHead, "defaultProps", {
  height: 32,
  accountForScrollbar: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkLmpzIl0sIm5hbWVzIjpbIlRhYmxlSGVhZCIsInNjcm9sbGJhcldpZHRoIiwid2lkdGgiLCJzZXRTdGF0ZSIsInByb3BzIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJhY2NvdW50Rm9yU2Nyb2xsYmFyIiwic3RhdGUiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwiUHVyZUNvbXBvbmVudCIsIlBhbmUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7OzhGQW1CWDtBQUNOQyxNQUFBQSxjQUFjLEVBQUU7QUFEVixLOzRHQVNjLFVBQUFDLEtBQUssRUFBSTtBQUM3QixZQUFLQyxRQUFMLENBQWM7QUFDWkYsUUFBQUEsY0FBYyxFQUFFQztBQURKLE9BQWQ7QUFHRCxLOzs7Ozs7NkJBRVE7QUFBQSx3QkFDcUQsS0FBS0UsS0FEMUQ7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxNQURYLGVBQ1dBLE1BRFg7QUFBQSxVQUNtQkMsbUJBRG5CLGVBQ21CQSxtQkFEbkI7QUFBQSxVQUMyQ0gsS0FEM0M7QUFBQSxVQUVDSCxjQUZELEdBRW9CLEtBQUtPLEtBRnpCLENBRUNQLGNBRkQ7QUFJUCxhQUNFLGdDQUFDLFlBQUQ7QUFDRSxRQUFBLE9BQU8sRUFBQyxNQURWO0FBRUUsUUFBQSxVQUFVLEVBQUUsQ0FGZDtBQUdFLFFBQUEsWUFBWSxFQUFFQSxjQUhoQjtBQUlFLFFBQUEsWUFBWSxFQUFDLFNBSmY7QUFLRSxRQUFBLFVBQVUsRUFBQyxPQUxiO0FBTUUsUUFBQSxNQUFNLEVBQUVLO0FBTlYsU0FPTUYsS0FQTixHQVNHQyxRQVRILEVBU2EsR0FUYixFQVVHRSxtQkFBbUIsSUFDbEIsZ0NBQUMseUJBQUQ7QUFBZSxRQUFBLG1CQUFtQixFQUFFLEtBQUtFO0FBQXpDLFFBWEosQ0FERjtBQWdCRDs7O0VBdERvQ0Msb0I7OztBQUFsQlYsUztpQ0FBQUEsUyxpQ0FLZFcsYUFBS0MsUztBQUVSOzs7QUFHQU4sRUFBQUEsTUFBTSxFQUFFTyxzQkFBVUMsU0FBVixDQUFvQixDQUFDRCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVHLE1BQTdCLENBQXBCLEVBQTBEQyxVOztBQUVsRTs7OztBQUlBVixFQUFBQSxtQkFBbUIsRUFBRU0sc0JBQVVLOztpQ0FoQmRsQixTLGtCQXVCRztBQUNwQk0sRUFBQUEsTUFBTSxFQUFFLEVBRFk7QUFFcEJDLEVBQUFBLG1CQUFtQixFQUFFO0FBRkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IFNjcm9sbGJhclNpemUgZnJvbSAnLi9TY3JvbGxiYXJTaXplJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUhlYWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB0YWJsZSBoZWFkLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHNob3VsZCBhbHdheXMgYmUgdHJ1ZSBpZiB5b3UgYXJlIHVzaW5nIFRhYmxlSGVhZCB0b2dldGhlciB3aXRoIGEgVGFibGVCb2R5LlxuICAgICAqIEJlY2F1c2UgVGFibGVCb2R5IGhhcyBgb3ZlcmZsb3dZOiBzY3JvbGxgIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgYWNjb3VudEZvclNjcm9sbGJhcjogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHNjcm9sbGJhcldpZHRoOiAwXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogMzIsXG4gICAgYWNjb3VudEZvclNjcm9sbGJhcjogdHJ1ZVxuICB9XG5cbiAgaGFuZGxlU2Nyb2xsYmFyU2l6ZSA9IHdpZHRoID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjcm9sbGJhcldpZHRoOiB3aWR0aFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaGVpZ2h0LCBhY2NvdW50Rm9yU2Nyb2xsYmFyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2Nyb2xsYmFyV2lkdGggfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgIHBhZGRpbmdSaWdodD17c2Nyb2xsYmFyV2lkdGh9XG4gICAgICAgIGJvcmRlckJvdHRvbT1cImRlZmF1bHRcIlxuICAgICAgICBiYWNrZ3JvdW5kPVwidGludDJcIlxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59eycgJ31cbiAgICAgICAge2FjY291bnRGb3JTY3JvbGxiYXIgJiYgKFxuICAgICAgICAgIDxTY3JvbGxiYXJTaXplIGhhbmRsZVNjcm9sbGJhclNpemU9e3RoaXMuaGFuZGxlU2Nyb2xsYmFyU2l6ZX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==
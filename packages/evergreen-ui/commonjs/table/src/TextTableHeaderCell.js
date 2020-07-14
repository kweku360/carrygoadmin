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

var _typography = require("../../typography");

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextTableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextTableHeaderCell, _PureComponent);

  var _super = _createSuper(TextTableHeaderCell);

  function TextTableHeaderCell() {
    (0, _classCallCheck2["default"])(this, TextTableHeaderCell);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextTableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textProps = _this$props.textProps,
          isSortable = _this$props.isSortable,
          sortOrder = _this$props.sortOrder,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "textProps", "isSortable", "sortOrder"]);
      return _react["default"].createElement(_TableHeaderCell["default"], props, _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        fontWeight: 500,
        size: 300,
        flex: "1"
      }, textProps), children, ' '));
    }
  }]);
  return TextTableHeaderCell;
}(_react.PureComponent);

exports["default"] = TextTableHeaderCell;
TextTableHeaderCell.displayName = "TextTableHeaderCell";
(0, _defineProperty2["default"])(TextTableHeaderCell, "propTypes", _objectSpread({}, _TableHeaderCell["default"].propTypes, {
  /**
   * Pass additional props to the Text component.
   */
  textProps: _propTypes["default"].objectOf(_propTypes["default"].string)
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGV4dFRhYmxlSGVhZGVyQ2VsbC5qcyJdLCJuYW1lcyI6WyJUZXh0VGFibGVIZWFkZXJDZWxsIiwicHJvcHMiLCJjaGlsZHJlbiIsInRleHRQcm9wcyIsImlzU29ydGFibGUiLCJzb3J0T3JkZXIiLCJQdXJlQ29tcG9uZW50IiwiVGFibGVIZWFkZXJDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0T2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxtQjs7Ozs7Ozs7Ozs7OzZCQWFWO0FBQUEsd0JBQzBELEtBQUtDLEtBRC9EO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsU0FEWCxlQUNXQSxTQURYO0FBQUEsVUFDc0JDLFVBRHRCLGVBQ3NCQSxVQUR0QjtBQUFBLFVBQ2tDQyxTQURsQyxlQUNrQ0EsU0FEbEM7QUFBQSxVQUNnREosS0FEaEQ7QUFFUCxhQUNFLGdDQUFDLDJCQUFELEVBQXFCQSxLQUFyQixFQUNFLGdDQUFDLGdCQUFEO0FBQU0sUUFBQSxVQUFVLEVBQUUsR0FBbEI7QUFBdUIsUUFBQSxJQUFJLEVBQUUsR0FBN0I7QUFBa0MsUUFBQSxJQUFJLEVBQUM7QUFBdkMsU0FBK0NFLFNBQS9DLEdBQ0dELFFBREgsRUFDYSxHQURiLENBREYsQ0FERjtBQU9EOzs7RUF0QjhDSSxvQjs7O0FBQTVCTixtQjtpQ0FBQUEsbUIsaUNBS2RPLDRCQUFnQkMsUztBQUVuQjs7O0FBR0FMLEVBQUFBLFNBQVMsRUFBRU0sc0JBQVVDLFFBQVYsQ0FBbUJELHNCQUFVRSxNQUE3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCBUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9UYWJsZUhlYWRlckNlbGwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRUYWJsZUhlYWRlckNlbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGFibGVIZWFkZXJDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UYWJsZUhlYWRlckNlbGwucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogUGFzcyBhZGRpdGlvbmFsIHByb3BzIHRvIHRoZSBUZXh0IGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICB0ZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuc3RyaW5nKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRleHRQcm9wcywgaXNTb3J0YWJsZSwgc29ydE9yZGVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVIZWFkZXJDZWxsIHsuLi5wcm9wc30+XG4gICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9ezUwMH0gc2l6ZT17MzAwfSBmbGV4PVwiMVwiIHsuLi50ZXh0UHJvcHN9PlxuICAgICAgICAgIHtjaGlsZHJlbn17JyAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1RhYmxlSGVhZGVyQ2VsbD5cbiAgICApXG4gIH1cbn1cbiJdfQ==
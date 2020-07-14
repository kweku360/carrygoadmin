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

var _IconWrapper = require("../../icons/src/IconWrapper");

var _scales = require("../../scales");

var _Text = _interopRequireDefault(require("./Text"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ListItem = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(ListItem, _PureComponent);

  var _super = _createSuper(ListItem);

  function ListItem() {
    (0, _classCallCheck2["default"])(this, ListItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "size", "icon"]);
      var paddingLeft;
      if (size === 300) paddingLeft = 4;
      if (size === 400) paddingLeft = 8;
      if (size === 500) paddingLeft = 8;
      if (size === 600) paddingLeft = 12;
      var iconTop;
      if (size === 300) iconTop = 1;
      if (size === 400) iconTop = 3;
      if (size === 500) iconTop = 3;
      if (size === 600) iconTop = 4;
      return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
        is: "li",
        position: "relative",
        marginY: "0.5em",
        size: size,
        listStyleType: icon ? 'none' : undefined,
        paddingLeft: icon ? paddingLeft : undefined
      }, props), icon && _react["default"].createElement(_IconWrapper.IconWrapper, {
        icon: icon,
        position: "absolute",
        left: (0, _scales.majorScale)(-2),
        top: iconTop
      }), children);
    }
  }]);
  return ListItem;
}(_react.PureComponent);

exports["default"] = ListItem;
ListItem.displayName = "ListItem";
(0, _defineProperty2["default"])(ListItem, "propTypes", _objectSpread({}, _Text["default"].propTypes, {
  /**
   * When provided, adds a icon before the list item.
   */
  icon: _propTypes["default"].node
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiaWNvbiIsInBhZGRpbmdMZWZ0IiwiaWNvblRvcCIsInVuZGVmaW5lZCIsIlB1cmVDb21wb25lbnQiLCJUZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs2QkFVVjtBQUFBLHdCQUNvQyxLQUFLQyxLQUR6QztBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLElBRFgsZUFDV0EsSUFEWDtBQUFBLFVBQ2lCQyxJQURqQixlQUNpQkEsSUFEakI7QUFBQSxVQUMwQkgsS0FEMUI7QUFHUCxVQUFJSSxXQUFKO0FBQ0EsVUFBSUYsSUFBSSxLQUFLLEdBQWIsRUFBa0JFLFdBQVcsR0FBRyxDQUFkO0FBQ2xCLFVBQUlGLElBQUksS0FBSyxHQUFiLEVBQWtCRSxXQUFXLEdBQUcsQ0FBZDtBQUNsQixVQUFJRixJQUFJLEtBQUssR0FBYixFQUFrQkUsV0FBVyxHQUFHLENBQWQ7QUFDbEIsVUFBSUYsSUFBSSxLQUFLLEdBQWIsRUFBa0JFLFdBQVcsR0FBRyxFQUFkO0FBRWxCLFVBQUlDLE9BQUo7QUFDQSxVQUFJSCxJQUFJLEtBQUssR0FBYixFQUFrQkcsT0FBTyxHQUFHLENBQVY7QUFDbEIsVUFBSUgsSUFBSSxLQUFLLEdBQWIsRUFBa0JHLE9BQU8sR0FBRyxDQUFWO0FBQ2xCLFVBQUlILElBQUksS0FBSyxHQUFiLEVBQWtCRyxPQUFPLEdBQUcsQ0FBVjtBQUNsQixVQUFJSCxJQUFJLEtBQUssR0FBYixFQUFrQkcsT0FBTyxHQUFHLENBQVY7QUFFbEIsYUFDRSxnQ0FBQyxnQkFBRDtBQUNFLFFBQUEsRUFBRSxFQUFDLElBREw7QUFFRSxRQUFBLFFBQVEsRUFBQyxVQUZYO0FBR0UsUUFBQSxPQUFPLEVBQUMsT0FIVjtBQUlFLFFBQUEsSUFBSSxFQUFFSCxJQUpSO0FBS0UsUUFBQSxhQUFhLEVBQUVDLElBQUksR0FBRyxNQUFILEdBQVlHLFNBTGpDO0FBTUUsUUFBQSxXQUFXLEVBQUVILElBQUksR0FBR0MsV0FBSCxHQUFpQkU7QUFOcEMsU0FPTU4sS0FQTixHQVNHRyxJQUFJLElBQ0gsZ0NBQUMsd0JBQUQ7QUFDRSxRQUFBLElBQUksRUFBRUEsSUFEUjtBQUVFLFFBQUEsUUFBUSxFQUFDLFVBRlg7QUFHRSxRQUFBLElBQUksRUFBRSx3QkFBVyxDQUFDLENBQVosQ0FIUjtBQUlFLFFBQUEsR0FBRyxFQUFFRTtBQUpQLFFBVkosRUFpQkdKLFFBakJILENBREY7QUFxQkQ7OztFQTlDbUNNLG9COzs7QUFBakJSLFE7aUNBQUFBLFEsaUNBRWRTLGlCQUFLQyxTO0FBRVI7OztBQUdBTixFQUFBQSxJQUFJLEVBQUVPLHNCQUFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBJY29uV3JhcHBlciB9IGZyb20gJy4uLy4uL2ljb25zL3NyYy9JY29uV3JhcHBlcidcbmltcG9ydCB7IG1ham9yU2NhbGUgfSBmcm9tICcuLi8uLi9zY2FsZXMnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHByb3ZpZGVkLCBhZGRzIGEgaWNvbiBiZWZvcmUgdGhlIGxpc3QgaXRlbS5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHNpemUsIGljb24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgcGFkZGluZ0xlZnRcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBwYWRkaW5nTGVmdCA9IDRcbiAgICBpZiAoc2l6ZSA9PT0gNDAwKSBwYWRkaW5nTGVmdCA9IDhcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBwYWRkaW5nTGVmdCA9IDhcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBwYWRkaW5nTGVmdCA9IDEyXG5cbiAgICBsZXQgaWNvblRvcFxuICAgIGlmIChzaXplID09PSAzMDApIGljb25Ub3AgPSAxXG4gICAgaWYgKHNpemUgPT09IDQwMCkgaWNvblRvcCA9IDNcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBpY29uVG9wID0gM1xuICAgIGlmIChzaXplID09PSA2MDApIGljb25Ub3AgPSA0XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgaXM9XCJsaVwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBtYXJnaW5ZPVwiMC41ZW1cIlxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICBsaXN0U3R5bGVUeXBlPXtpY29uID8gJ25vbmUnIDogdW5kZWZpbmVkfVxuICAgICAgICBwYWRkaW5nTGVmdD17aWNvbiA/IHBhZGRpbmdMZWZ0IDogdW5kZWZpbmVkfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtpY29uICYmIChcbiAgICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgIGxlZnQ9e21ham9yU2NhbGUoLTIpfVxuICAgICAgICAgICAgdG9wPXtpY29uVG9wfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH1cbn1cbiJdfQ==
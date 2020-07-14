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

var _uiBox = _interopRequireDefault(require("ui-box"));

var _Tab = _interopRequireDefault(require("./Tab"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SidebarTab = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SidebarTab, _PureComponent);

  var _super = _createSuper(SidebarTab);

  function SidebarTab() {
    (0, _classCallCheck2["default"])(this, SidebarTab);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SidebarTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          isSelected = _this$props.isSelected,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "height", "isSelected"]);
      return _react["default"].createElement(_Tab["default"], (0, _extends2["default"])({
        isSelected: isSelected,
        height: height
      }, SidebarTab.styles, props, {
        display: "flex"
      }), _react["default"].createElement(_uiBox["default"], {
        is: "span",
        flex: "1"
      }, children));
    }
  }]);
  return SidebarTab;
}(_react.PureComponent);

exports["default"] = SidebarTab;
SidebarTab.displayName = "SidebarTab";
(0, _defineProperty2["default"])(SidebarTab, "propTypes", _objectSpread({}, _Tab["default"].propTypes));
(0, _defineProperty2["default"])(SidebarTab, "defaultProps", {
  height: 32
});
(0, _defineProperty2["default"])(SidebarTab, "styles", {
  width: '100%',
  paddingX: 0,
  paddingLeft: 8,
  marginX: 0,
  marginBottom: 4,
  justifyContent: 'auto'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9TaWRlYmFyVGFiLmpzIl0sIm5hbWVzIjpbIlNpZGViYXJUYWIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaGVpZ2h0IiwiaXNTZWxlY3RlZCIsInN0eWxlcyIsIlB1cmVDb21wb25lbnQiLCJUYWIiLCJwcm9wVHlwZXMiLCJ3aWR0aCIsInBhZGRpbmdYIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5YIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7NkJBa0JWO0FBQUEsd0JBQzRDLEtBQUtDLEtBRGpEO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsTUFEWCxlQUNXQSxNQURYO0FBQUEsVUFDbUJDLFVBRG5CLGVBQ21CQSxVQURuQjtBQUFBLFVBQ2tDSCxLQURsQztBQUVQLGFBQ0UsZ0NBQUMsZUFBRDtBQUNFLFFBQUEsVUFBVSxFQUFFRyxVQURkO0FBRUUsUUFBQSxNQUFNLEVBQUVEO0FBRlYsU0FHTUgsVUFBVSxDQUFDSyxNQUhqQixFQUlNSixLQUpOO0FBS0UsUUFBQSxPQUFPLEVBQUM7QUFMVixVQU9FLGdDQUFDLGlCQUFEO0FBQUssUUFBQSxFQUFFLEVBQUMsTUFBUjtBQUFlLFFBQUEsSUFBSSxFQUFDO0FBQXBCLFNBQ0dDLFFBREgsQ0FQRixDQURGO0FBYUQ7OztFQWpDcUNJLG9COzs7QUFBbkJOLFU7aUNBQUFBLFUsaUNBRWRPLGdCQUFJQyxTO2lDQUZVUixVLGtCQUtHO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUU7QUFEWSxDO2lDQUxISCxVLFlBU0g7QUFDZFMsRUFBQUEsS0FBSyxFQUFFLE1BRE87QUFFZEMsRUFBQUEsUUFBUSxFQUFFLENBRkk7QUFHZEMsRUFBQUEsV0FBVyxFQUFFLENBSEM7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLENBSks7QUFLZEMsRUFBQUEsWUFBWSxFQUFFLENBTEE7QUFNZEMsRUFBQUEsY0FBYyxFQUFFO0FBTkYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCBUYWIgZnJvbSAnLi9UYWInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXJUYWIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5UYWIucHJvcFR5cGVzXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogMzJcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nWDogMCxcbiAgICBwYWRkaW5nTGVmdDogOCxcbiAgICBtYXJnaW5YOiAwLFxuICAgIG1hcmdpbkJvdHRvbTogNCxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2F1dG8nXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaGVpZ2h0LCBpc1NlbGVjdGVkLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8VGFiXG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB7Li4uU2lkZWJhclRhYi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgPlxuICAgICAgICA8Qm94IGlzPVwic3BhblwiIGZsZXg9XCIxXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvVGFiPlxuICAgIClcbiAgfVxufVxuIl19
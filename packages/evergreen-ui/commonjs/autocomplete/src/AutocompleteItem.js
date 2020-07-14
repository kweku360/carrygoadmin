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

var _Option = _interopRequireDefault(require("../../select-menu/src/Option"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AutocompleteItem = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(AutocompleteItem, _PureComponent);

  var _super = _createSuper(AutocompleteItem);

  function AutocompleteItem() {
    (0, _classCallCheck2["default"])(this, AutocompleteItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(AutocompleteItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          style = _this$props.style,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["isHighlighted", "isSelected", "style", "children"]);
      return _react["default"].createElement(_Option["default"], (0, _extends2["default"])({
        isHighlighted: isHighlighted,
        isSelected: isSelected,
        label: children,
        style: style
      }, props));
    }
  }]);
  return AutocompleteItem;
}(_react.PureComponent);

exports["default"] = AutocompleteItem;
AutocompleteItem.displayName = "AutocompleteItem";
(0, _defineProperty2["default"])(AutocompleteItem, "propTypes", {
  children: _propTypes["default"].node,
  style: _propTypes["default"].object,
  isSelected: _propTypes["default"].bool,
  isHighlighted: _propTypes["default"].bool
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZUl0ZW0uanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlSXRlbSIsInByb3BzIiwiaXNIaWdobGlnaHRlZCIsImlzU2VsZWN0ZWQiLCJzdHlsZSIsImNoaWxkcmVuIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7OzZCQVFWO0FBQUEsd0JBQzBELEtBQUtDLEtBRC9EO0FBQUEsVUFDQ0MsYUFERCxlQUNDQSxhQUREO0FBQUEsVUFDZ0JDLFVBRGhCLGVBQ2dCQSxVQURoQjtBQUFBLFVBQzRCQyxLQUQ1QixlQUM0QkEsS0FENUI7QUFBQSxVQUNtQ0MsUUFEbkMsZUFDbUNBLFFBRG5DO0FBQUEsVUFDZ0RKLEtBRGhEO0FBR1AsYUFDRSxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsYUFBYSxFQUFFQyxhQURqQjtBQUVFLFFBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsUUFBQSxLQUFLLEVBQUVFLFFBSFQ7QUFJRSxRQUFBLEtBQUssRUFBRUQ7QUFKVCxTQUtNSCxLQUxOLEVBREY7QUFTRDs7O0VBcEIyQ0ssb0I7OztBQUF6Qk4sZ0I7aUNBQUFBLGdCLGVBQ0E7QUFDakJLLEVBQUFBLFFBQVEsRUFBRUUsc0JBQVVDLElBREg7QUFFakJKLEVBQUFBLEtBQUssRUFBRUcsc0JBQVVFLE1BRkE7QUFHakJOLEVBQUFBLFVBQVUsRUFBRUksc0JBQVVHLElBSEw7QUFJakJSLEVBQUFBLGFBQWEsRUFBRUssc0JBQVVHO0FBSlIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgT3B0aW9uIGZyb20gJy4uLy4uL3NlbGVjdC1tZW51L3NyYy9PcHRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9jb21wbGV0ZUl0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNIaWdobGlnaHRlZDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzSGlnaGxpZ2h0ZWQsIGlzU2VsZWN0ZWQsIHN0eWxlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8T3B0aW9uXG4gICAgICAgIGlzSGlnaGxpZ2h0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGxhYmVsPXtjaGlsZHJlbn1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuIl19
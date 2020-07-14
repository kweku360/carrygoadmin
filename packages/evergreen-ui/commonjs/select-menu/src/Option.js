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

var _layers = require("../../layers");

var _icons = require("../../icons");

var _image = require("../../image");

var _table = require("../../table");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Option = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Option, _PureComponent);

  var _super = _createSuper(Option);

  function Option() {
    (0, _classCallCheck2["default"])(this, Option);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          isSelectable = _this$props.isSelectable,
          disabled = _this$props.disabled,
          style = _this$props.style,
          height = _this$props.height,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["label", "onSelect", "onDeselect", "isHighlighted", "isSelected", "isSelectable", "disabled", "style", "height", "icon"]);
      var textProps = {};

      if (disabled) {
        textProps.color = 'muted';
      }

      if (isSelected) {
        textProps.color = 'selected';
      }

      return _react["default"].createElement(_table.TableRow, (0, _extends2["default"])({
        isSelectable: isSelectable && !disabled,
        isHighlighted: isHighlighted,
        onSelect: onSelect,
        onDeselect: onDeselect,
        isSelected: isSelected,
        style: style,
        display: "flex",
        alignItems: "center",
        borderBottom: false
      }, props), _react["default"].createElement(_layers.Pane, {
        paddingLeft: 12,
        paddingRight: 8,
        opacity: isSelected ? 1 : 0,
        flexGrow: 0,
        paddingTop: 4
      }, _react["default"].createElement(_icons.TickIcon, {
        color: "selected",
        size: 14
      })), _react["default"].createElement(_table.TextTableCell, {
        height: height,
        borderBottom: "muted",
        textProps: textProps,
        paddingLeft: 0,
        borderRight: null,
        flex: 1,
        alignSelf: "stretch",
        cursor: disabled ? 'default' : 'pointer'
      }, _react["default"].createElement(_layers.Pane, {
        alignItems: "center",
        display: "flex"
      }, icon && _react["default"].createElement(_image.Image, {
        src: icon,
        width: 24,
        marginRight: 8
      }), label)));
    }
  }]);
  return Option;
}(_react.PureComponent);

exports["default"] = Option;
Option.displayName = "Option";
(0, _defineProperty2["default"])(Option, "propTypes", {
  label: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  style: _propTypes["default"].any,
  height: _propTypes["default"].number,
  onSelect: _propTypes["default"].func,
  onDeselect: _propTypes["default"].func,
  isHighlighted: _propTypes["default"].bool,
  isSelected: _propTypes["default"].bool,
  isSelectable: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uLmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsInByb3BzIiwibGFiZWwiLCJvblNlbGVjdCIsIm9uRGVzZWxlY3QiLCJpc0hpZ2hsaWdodGVkIiwiaXNTZWxlY3RlZCIsImlzU2VsZWN0YWJsZSIsImRpc2FibGVkIiwic3R5bGUiLCJoZWlnaHQiLCJpY29uIiwidGV4dFByb3BzIiwiY29sb3IiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwibnVtYmVyIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs2QkFjVjtBQUFBLHdCQWFILEtBQUtDLEtBYkY7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUdMQyxRQUhLLGVBR0xBLFFBSEs7QUFBQSxVQUlMQyxVQUpLLGVBSUxBLFVBSks7QUFBQSxVQUtMQyxhQUxLLGVBS0xBLGFBTEs7QUFBQSxVQU1MQyxVQU5LLGVBTUxBLFVBTks7QUFBQSxVQU9MQyxZQVBLLGVBT0xBLFlBUEs7QUFBQSxVQVFMQyxRQVJLLGVBUUxBLFFBUks7QUFBQSxVQVNMQyxLQVRLLGVBU0xBLEtBVEs7QUFBQSxVQVVMQyxNQVZLLGVBVUxBLE1BVks7QUFBQSxVQVdMQyxJQVhLLGVBV0xBLElBWEs7QUFBQSxVQVlGVixLQVpFO0FBZVAsVUFBTVcsU0FBUyxHQUFHLEVBQWxCOztBQUNBLFVBQUlKLFFBQUosRUFBYztBQUNaSSxRQUFBQSxTQUFTLENBQUNDLEtBQVYsR0FBa0IsT0FBbEI7QUFDRDs7QUFFRCxVQUFJUCxVQUFKLEVBQWdCO0FBQ2RNLFFBQUFBLFNBQVMsQ0FBQ0MsS0FBVixHQUFrQixVQUFsQjtBQUNEOztBQUVELGFBQ0UsZ0NBQUMsZUFBRDtBQUNFLFFBQUEsWUFBWSxFQUFFTixZQUFZLElBQUksQ0FBQ0MsUUFEakM7QUFFRSxRQUFBLGFBQWEsRUFBRUgsYUFGakI7QUFHRSxRQUFBLFFBQVEsRUFBRUYsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFQyxVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVFLFVBTGQ7QUFNRSxRQUFBLEtBQUssRUFBRUcsS0FOVDtBQU9FLFFBQUEsT0FBTyxFQUFDLE1BUFY7QUFRRSxRQUFBLFVBQVUsRUFBQyxRQVJiO0FBU0UsUUFBQSxZQUFZLEVBQUU7QUFUaEIsU0FVTVIsS0FWTixHQVlFLGdDQUFDLFlBQUQ7QUFDRSxRQUFBLFdBQVcsRUFBRSxFQURmO0FBRUUsUUFBQSxZQUFZLEVBQUUsQ0FGaEI7QUFHRSxRQUFBLE9BQU8sRUFBRUssVUFBVSxHQUFHLENBQUgsR0FBTyxDQUg1QjtBQUlFLFFBQUEsUUFBUSxFQUFFLENBSlo7QUFLRSxRQUFBLFVBQVUsRUFBRTtBQUxkLFNBT0UsZ0NBQUMsZUFBRDtBQUFVLFFBQUEsS0FBSyxFQUFDLFVBQWhCO0FBQTJCLFFBQUEsSUFBSSxFQUFFO0FBQWpDLFFBUEYsQ0FaRixFQXFCRSxnQ0FBQyxvQkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFSSxNQURWO0FBRUUsUUFBQSxZQUFZLEVBQUMsT0FGZjtBQUdFLFFBQUEsU0FBUyxFQUFFRSxTQUhiO0FBSUUsUUFBQSxXQUFXLEVBQUUsQ0FKZjtBQUtFLFFBQUEsV0FBVyxFQUFFLElBTGY7QUFNRSxRQUFBLElBQUksRUFBRSxDQU5SO0FBT0UsUUFBQSxTQUFTLEVBQUMsU0FQWjtBQVFFLFFBQUEsTUFBTSxFQUFFSixRQUFRLEdBQUcsU0FBSCxHQUFlO0FBUmpDLFNBVUUsZ0NBQUMsWUFBRDtBQUFNLFFBQUEsVUFBVSxFQUFDLFFBQWpCO0FBQTBCLFFBQUEsT0FBTyxFQUFDO0FBQWxDLFNBQ0dHLElBQUksSUFBSSxnQ0FBQyxZQUFEO0FBQU8sUUFBQSxHQUFHLEVBQUVBLElBQVo7QUFBa0IsUUFBQSxLQUFLLEVBQUUsRUFBekI7QUFBNkIsUUFBQSxXQUFXLEVBQUU7QUFBMUMsUUFEWCxFQUVHVCxLQUZILENBVkYsQ0FyQkYsQ0FERjtBQXVDRDs7O0VBN0VpQ1ksb0I7OztBQUFmZCxNO2lDQUFBQSxNLGVBQ0E7QUFDakJFLEVBQUFBLEtBQUssRUFBRWEsc0JBQVVDLE1BREE7QUFFakJMLEVBQUFBLElBQUksRUFBRUksc0JBQVVDLE1BRkM7QUFHakJQLEVBQUFBLEtBQUssRUFBRU0sc0JBQVVFLEdBSEE7QUFJakJQLEVBQUFBLE1BQU0sRUFBRUssc0JBQVVHLE1BSkQ7QUFLakJmLEVBQUFBLFFBQVEsRUFBRVksc0JBQVVJLElBTEg7QUFNakJmLEVBQUFBLFVBQVUsRUFBRVcsc0JBQVVJLElBTkw7QUFPakJkLEVBQUFBLGFBQWEsRUFBRVUsc0JBQVVLLElBUFI7QUFRakJkLEVBQUFBLFVBQVUsRUFBRVMsc0JBQVVLLElBUkw7QUFTakJiLEVBQUFBLFlBQVksRUFBRVEsc0JBQVVLLElBVFA7QUFVakJaLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVLO0FBVkgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGlja0ljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vaW1hZ2UnXG5pbXBvcnQgeyBUYWJsZVJvdywgVGV4dFRhYmxlQ2VsbCB9IGZyb20gJy4uLy4uL3RhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNIaWdobGlnaHRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb25EZXNlbGVjdCxcbiAgICAgIGlzSGlnaGxpZ2h0ZWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzdHlsZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGljb24sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0ZXh0UHJvcHMgPSB7fVxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGV4dFByb3BzLmNvbG9yID0gJ211dGVkJ1xuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICB0ZXh0UHJvcHMuY29sb3IgPSAnc2VsZWN0ZWQnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVJvd1xuICAgICAgICBpc1NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZSAmJiAhZGlzYWJsZWR9XG4gICAgICAgIGlzSGlnaGxpZ2h0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgb25EZXNlbGVjdD17b25EZXNlbGVjdH1cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBib3JkZXJCb3R0b209e2ZhbHNlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezEyfVxuICAgICAgICAgIHBhZGRpbmdSaWdodD17OH1cbiAgICAgICAgICBvcGFjaXR5PXtpc1NlbGVjdGVkID8gMSA6IDB9XG4gICAgICAgICAgZmxleEdyb3c9ezB9XG4gICAgICAgICAgcGFkZGluZ1RvcD17NH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUaWNrSWNvbiBjb2xvcj1cInNlbGVjdGVkXCIgc2l6ZT17MTR9IC8+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgICAgPFRleHRUYWJsZUNlbGxcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBib3JkZXJCb3R0b209XCJtdXRlZFwiXG4gICAgICAgICAgdGV4dFByb3BzPXt0ZXh0UHJvcHN9XG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgICAgYm9yZGVyUmlnaHQ9e251bGx9XG4gICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICBhbGlnblNlbGY9XCJzdHJldGNoXCJcbiAgICAgICAgICBjdXJzb3I9e2Rpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInfVxuICAgICAgICA+XG4gICAgICAgICAgPFBhbmUgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICAgICAgICB7aWNvbiAmJiA8SW1hZ2Ugc3JjPXtpY29ufSB3aWR0aD17MjR9IG1hcmdpblJpZ2h0PXs4fSAvPn1cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvVGV4dFRhYmxlQ2VsbD5cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgKVxuICB9XG59XG4iXX0=
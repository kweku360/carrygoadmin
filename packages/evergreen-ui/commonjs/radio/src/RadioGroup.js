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

var _uiBox = require("ui-box");

var _layers = require("../../layers");

var _typography = require("../../typography");

var _Radio = _interopRequireDefault(require("./Radio"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var radioCount = 1; // Used for generating unique input names

var RadioGroup = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(RadioGroup, _PureComponent);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadioGroup);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (event) {
      var value = event.target.value; // Save a render cycle when it's a controlled input

      if (!_this.props.value) {
        _this.setState({
          value: value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(value);
      }
    });
    _this.state = {
      value: props.defaultValue || props.options[0].value
    };
    _this.name = "RadioGroup-".concat(radioCount);
    radioCount += 1;
    return _this;
  }

  (0, _createClass2["default"])(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          size = _this$props.size,
          label = _this$props.label,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          options = _this$props.options,
          onChange = _this$props.onChange,
          isRequired = _this$props.isRequired,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["size", "label", "defaultValue", "value", "options", "onChange", "isRequired"]); // Allows it to behave like a controlled input

      var selected = value || this.state.value;
      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        role: "group",
        "aria-label": label
      }, props), label && _react["default"].createElement(_typography.Text, {
        color: "muted",
        fontWeight: 500
      }, label), options.map(function (item) {
        return _react["default"].createElement(_Radio["default"], {
          key: item.value,
          size: size,
          name: _this2.name,
          value: item.value,
          label: item.label,
          checked: selected === item.value,
          disabled: item.isDisabled,
          onChange: _this2.handleChange,
          isRequired: isRequired
        });
      }));
    }
  }]);
  return RadioGroup;
}(_react.PureComponent);

exports["default"] = RadioGroup;
RadioGroup.displayName = "RadioGroup";
(0, _defineProperty2["default"])(RadioGroup, "propTypes", _objectSpread({}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {}, _uiBox.dimensions.propTypes, {
  /**
   * The options for the radios of the Radio Group.
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node.isRequired,
    value: _propTypes["default"].string.isRequired,
    isDisabled: _propTypes["default"].bool
  })).isRequired,

  /**
   * The selected item value when controlled.
   */
  value: _propTypes["default"].string,

  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue: _propTypes["default"].string,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func.isRequired,

  /**
   * Label to display above the radio button options.
   */
  label: _propTypes["default"].string,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: _propTypes["default"].oneOf([12, 16]).isRequired,

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: _propTypes["default"].bool.isRequired
}));
(0, _defineProperty2["default"])(RadioGroup, "defaultProps", {
  options: [],
  onChange: function onChange() {},
  size: 12,
  isRequired: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW9Hcm91cC5qcyJdLCJuYW1lcyI6WyJyYWRpb0NvdW50IiwiUmFkaW9Hcm91cCIsInByb3BzIiwiY29udGV4dCIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwic3RhdGUiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwibmFtZSIsInNpemUiLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJzZWxlY3RlZCIsIm1hcCIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiaGFuZGxlQ2hhbmdlIiwiUHVyZUNvbXBvbmVudCIsInNwYWNpbmciLCJwcm9wVHlwZXMiLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsR0FBRyxDQUFqQixDLENBQW1COztJQUVFQyxVOzs7OztBQTJEbkIsc0JBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUE7QUFDMUIsOEJBQU1ELEtBQU4sRUFBYUMsT0FBYjtBQUQwQixxR0FXYixVQUFBQyxLQUFLLEVBQUk7QUFBQSxVQUNkQyxLQURjLEdBQ0pELEtBQUssQ0FBQ0UsTUFERixDQUNkRCxLQURjLEVBR3RCOztBQUNBLFVBQUksQ0FBQyxNQUFLSCxLQUFMLENBQVdHLEtBQWhCLEVBQXVCO0FBQ3JCLGNBQUtFLFFBQUwsQ0FBYztBQUFFRixVQUFBQSxLQUFLLEVBQUxBO0FBQUYsU0FBZDtBQUNEOztBQUVELFVBQUksTUFBS0gsS0FBTCxDQUFXTSxRQUFmLEVBQXlCO0FBQ3ZCLGNBQUtOLEtBQUwsQ0FBV00sUUFBWCxDQUFvQkgsS0FB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QUUsQ0FGRTtBQUdwQkssRUFBQUEsSUFBSSxFQUFFLEVBSGM7QUFJcEJFLEVBQUFBLFVBQVUsRUFBRTtBQUpRLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCBSYWRpbyBmcm9tICcuL1JhZGlvJ1xuXG5sZXQgcmFkaW9Db3VudCA9IDEgLy8gVXNlZCBmb3IgZ2VuZXJhdGluZyB1bmlxdWUgaW5wdXQgbmFtZXNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyBmb3IgdGhlIHJhZGlvcyBvZiB0aGUgUmFkaW8gR3JvdXAuXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAgICAgIH0pXG4gICAgKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gdmFsdWUgd2hlbiBjb250cm9sbGVkLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIFJhZGlvIEdyb3VwIHdoZW4gdW5jb250cm9sbGVkLlxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCB0byBkaXNwbGF5IGFib3ZlIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucy5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSByYWRpbyBjaXJjbGUuIFRoaXMgYWxzbyBpbmZvcm1zIHRoZSB0ZXh0IHNpemUgYW5kIHNwYWNpbmcuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsxMiwgMTZdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgcmFkaW8gZ2V0IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgaXNSZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgc2l6ZTogMTIsXG4gICAgaXNSZXF1aXJlZDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLmRlZmF1bHRWYWx1ZSB8fCBwcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gYFJhZGlvR3JvdXAtJHtyYWRpb0NvdW50fWBcbiAgICByYWRpb0NvdW50ICs9IDFcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXRcblxuICAgIC8vIFNhdmUgYSByZW5kZXIgY3ljbGUgd2hlbiBpdCdzIGEgY29udHJvbGxlZCBpbnB1dFxuICAgIGlmICghdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNpemUsXG4gICAgICBsYWJlbCxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIHZhbHVlLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIEFsbG93cyBpdCB0byBiZWhhdmUgbGlrZSBhIGNvbnRyb2xsZWQgaW5wdXRcbiAgICBjb25zdCBzZWxlY3RlZCA9IHZhbHVlIHx8IHRoaXMuc3RhdGUudmFsdWVcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPXtsYWJlbH0gey4uLnByb3BzfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIm11dGVkXCIgZm9udFdlaWdodD17NTAwfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHtvcHRpb25zLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8UmFkaW9cbiAgICAgICAgICAgIGtleT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICBuYW1lPXt0aGlzLm5hbWV9XG4gICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQgPT09IGl0ZW0udmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5pc0Rpc2FibGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgaXNSZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==
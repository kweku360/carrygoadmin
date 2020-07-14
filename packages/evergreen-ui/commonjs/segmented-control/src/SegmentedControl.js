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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _SegmentedControlRadio = _interopRequireDefault(require("./SegmentedControlRadio"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var radioCount = 1; // Used for generating unique input names

var SegmentedControl = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SegmentedControl, _PureComponent);

  var _super = _createSuper(SegmentedControl);

  function SegmentedControl(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, SegmentedControl);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isControlled", function () {
      return typeof _this.props.value !== 'undefined' && _this.props.value !== null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (value) {
      // Save a render cycle when it's a controlled input
      if (!_this.isControlled()) {
        _this.setState({
          value: value
        });
      }

      (0, _safeInvoke["default"])(_this.props.onChange, value);
    });
    var _value = props.defaultValue;

    if (typeof _value === 'undefined' || _value === null) {
      _value = props.options[0].value;
    }

    _this.state = {
      value: _value
    };
    _this.name = "SegmentedControl-".concat(radioCount);
    radioCount += 1;
    return _this;
  }

  (0, _createClass2["default"])(SegmentedControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          filterOutValue = _this$props.value,
          name = _this$props.name,
          height = _this$props.height,
          options = _this$props.options,
          onChange = _this$props.onChange,
          defaultValue = _this$props.defaultValue,
          disabled = _this$props.disabled,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["value", "name", "height", "options", "onChange", "defaultValue", "disabled"]); // Allows it to behave like a controlled input

      var value = this.state.value;

      if (this.isControlled()) {
        value = this.props.value;
      }

      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        display: "flex",
        marginRight: -1,
        height: height
      }, props), options.map(function (option, index) {
        return _react["default"].createElement(_SegmentedControlRadio["default"], {
          key: option.value,
          id: _this2.name + index,
          name: name || _this2.name,
          label: option.label,
          value: String(option.value),
          height: height,
          checked: value === option.value,
          onChange: _this2.handleChange.bind(null, option.value),
          appearance: "default",
          isFirstItem: index === 0,
          isLastItem: index === options.length - 1,
          disabled: disabled
        });
      }));
    }
  }]);
  return SegmentedControl;
}(_react.PureComponent);

exports["default"] = SegmentedControl;
SegmentedControl.displayName = "SegmentedControl";
(0, _defineProperty2["default"])(SegmentedControl, "propTypes", _objectSpread({}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {}, _uiBox.dimensions.propTypes, {
  /**
   * The options for the radios of the Segmented Control.
   */
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]).isRequired
  })).isRequired,

  /**
   * The current value of the Segmented Control when controlled.
   */
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]),

  /**
   * The default value of the Segmented Control when uncontrolled.
   */
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]),

  /**
   * Function called when the value changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * The name of the radio group.
   */
  name: _propTypes["default"].string,

  /**
   * The height of the Segmented Control.
   */
  height: _propTypes["default"].number,

  /**
   * When true, the Segmented Control is disabled.
   */
  disabled: _propTypes["default"].bool
}));
(0, _defineProperty2["default"])(SegmentedControl, "defaultProps", {
  height: 32
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWdtZW50ZWQtY29udHJvbC9zcmMvU2VnbWVudGVkQ29udHJvbC5qcyJdLCJuYW1lcyI6WyJyYWRpb0NvdW50IiwiU2VnbWVudGVkQ29udHJvbCIsInByb3BzIiwiY29udGV4dCIsInZhbHVlIiwiaXNDb250cm9sbGVkIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJzdGF0ZSIsIm5hbWUiLCJmaWx0ZXJPdXRWYWx1ZSIsImhlaWdodCIsImRpc2FibGVkIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJsYWJlbCIsIlN0cmluZyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJsZW5ndGgiLCJQdXJlQ29tcG9uZW50Iiwic3BhY2luZyIsInByb3BUeXBlcyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVLEdBQUcsQ0FBakIsQyxDQUFtQjs7SUFFRUMsZ0I7Ozs7O0FBbUVuQiw0QkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQTtBQUMxQiw4QkFBTUQsS0FBTixFQUFhQyxPQUFiO0FBRDBCLHFHQWdCYixZQUFNO0FBQ25CLGFBQU8sT0FBTyxNQUFLRCxLQUFMLENBQVdFLEtBQWxCLEtBQTRCLFdBQTVCLElBQTJDLE1BQUtGLEtBQUwsQ0FBV0UsS0FBWCxLQUFxQixJQUF2RTtBQUNELEtBbEIyQjtBQUFBLHFHQW9CYixVQUFBQSxLQUFLLEVBQUk7QUFDdEI7QUFDQSxVQUFJLENBQUMsTUFBS0MsWUFBTCxFQUFMLEVBQTBCO0FB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b0IsQ0FDekJMLHNCQUFVTSxNQURlLEVBRXpCTixzQkFBVU8sTUFGZSxFQUd6QlAsc0JBQVVRLElBSGUsQ0FBcEIsRUFJSko7QUFOVyxHQUFoQixDQURPLEVBU1BBLFU7O0FBRUY7OztBQUdBN0IsRUFBQUEsS0FBSyxFQUFFeUIsc0JBQVVLLFNBQVYsQ0FBb0IsQ0FDekJMLHNCQUFVTSxNQURlLEVBRXpCTixzQkFBVU8sTUFGZSxFQUd6QlAsc0JBQVVRLElBSGUsQ0FBcEIsQzs7QUFNUDs7O0FBR0E3QixFQUFBQSxZQUFZLEVBQUVxQixzQkFBVUssU0FBVixDQUFvQixDQUNoQ0wsc0JBQVVNLE1BRHNCLEVBRWhDTixzQkFBVU8sTUFGc0IsRUFHaENQLHNCQUFVUSxJQUhzQixDQUFwQixDOztBQU1kOzs7QUFHQTlCLEVBQUFBLFFBQVEsRUFBRXNCLHNCQUFVUyxJOztBQUVwQjs7O0FBR0EzQixFQUFBQSxJQUFJLEVBQUVrQixzQkFBVU8sTTs7QUFFaEI7OztBQUdBdkIsRUFBQUEsTUFBTSxFQUFFZ0Isc0JBQVVNLE07O0FBRWxCOzs7QUFHQXJCLEVBQUFBLFFBQVEsRUFBRWUsc0JBQVVROztpQ0E1REhwQyxnQixrQkErREc7QUFDcEJZLEVBQUFBLE1BQU0sRUFBRTtBQURZLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0LCBkaW1lbnNpb25zIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IFNlZ21lbnRlZENvbnRyb2xSYWRpbyBmcm9tICcuL1NlZ21lbnRlZENvbnRyb2xSYWRpbydcblxubGV0IHJhZGlvQ291bnQgPSAxIC8vIFVzZWQgZm9yIGdlbmVyYXRpbmcgdW5pcXVlIGlucHV0IG5hbWVzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlZ21lbnRlZENvbnRyb2wgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbnMgZm9yIHRoZSByYWRpb3Mgb2YgdGhlIFNlZ21lbnRlZCBDb250cm9sLlxuICAgICAqL1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgUHJvcFR5cGVzLmJvb2xcbiAgICAgICAgXSkuaXNSZXF1aXJlZFxuICAgICAgfSlcbiAgICApLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgU2VnbWVudGVkIENvbnRyb2wgd2hlbiBjb250cm9sbGVkLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmJvb2xcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBTZWdtZW50ZWQgQ29udHJvbCB3aGVuIHVuY29udHJvbGxlZC5cbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuYm9vbFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHJhZGlvIGdyb3VwLlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBTZWdtZW50ZWQgQ29udHJvbC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBTZWdtZW50ZWQgQ29udHJvbCBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAzMlxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIGxldCB2YWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWVcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSBgU2VnbWVudGVkQ29udHJvbC0ke3JhZGlvQ291bnR9YFxuICAgIHJhZGlvQ291bnQgKz0gMVxuICB9XG5cbiAgaXNDb250cm9sbGVkID0gKCkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy52YWx1ZSAhPT0gbnVsbFxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gdmFsdWUgPT4ge1xuICAgIC8vIFNhdmUgYSByZW5kZXIgY3ljbGUgd2hlbiBpdCdzIGEgY29udHJvbGxlZCBpbnB1dFxuICAgIGlmICghdGhpcy5pc0NvbnRyb2xsZWQoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgfVxuXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLm9uQ2hhbmdlLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZTogZmlsdGVyT3V0VmFsdWUsIC8vIEZpbHRlciBvdXQuXG4gICAgICBuYW1lLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyBBbGxvd3MgaXQgdG8gYmVoYXZlIGxpa2UgYSBjb250cm9sbGVkIGlucHV0XG4gICAgbGV0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodGhpcy5pc0NvbnRyb2xsZWQoKSkge1xuICAgICAgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBtYXJnaW5SaWdodD17LTF9IGhlaWdodD17aGVpZ2h0fSB7Li4ucHJvcHN9PlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2VnbWVudGVkQ29udHJvbFJhZGlvXG4gICAgICAgICAgICBrZXk9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgIGlkPXt0aGlzLm5hbWUgKyBpbmRleH1cbiAgICAgICAgICAgIG5hbWU9e25hbWUgfHwgdGhpcy5uYW1lfVxuICAgICAgICAgICAgbGFiZWw9e29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcob3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IG9wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKG51bGwsIG9wdGlvbi52YWx1ZSl9XG4gICAgICAgICAgICBhcHBlYXJhbmNlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICBpc0ZpcnN0SXRlbT17aW5kZXggPT09IDB9XG4gICAgICAgICAgICBpc0xhc3RJdGVtPXtpbmRleCA9PT0gb3B0aW9ucy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG4iXX0=
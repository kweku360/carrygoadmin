import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout, dimensions } from 'ui-box';
import safeInvoke from '../../lib/safe-invoke';
import SegmentedControlRadio from './SegmentedControlRadio';
var radioCount = 1; // Used for generating unique input names

var SegmentedControl = /*#__PURE__*/function (_PureComponent) {
  _inherits(SegmentedControl, _PureComponent);

  var _super = _createSuper(SegmentedControl);

  function SegmentedControl(props, context) {
    var _this;

    _classCallCheck(this, SegmentedControl);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "isControlled", function () {
      return typeof _this.props.value !== 'undefined' && _this.props.value !== null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      // Save a render cycle when it's a controlled input
      if (!_this.isControlled()) {
        _this.setState({
          value: value
        });
      }

      safeInvoke(_this.props.onChange, value);
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

  _createClass(SegmentedControl, [{
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
          props = _objectWithoutProperties(_this$props, ["value", "name", "height", "options", "onChange", "defaultValue", "disabled"]); // Allows it to behave like a controlled input


      var value = this.state.value;

      if (this.isControlled()) {
        value = this.props.value;
      }

      return React.createElement(Box, _extends({
        display: "flex",
        marginRight: -1,
        height: height
      }, props), options.map(function (option, index) {
        return React.createElement(SegmentedControlRadio, {
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
}(PureComponent);

SegmentedControl.displayName = "SegmentedControl";

_defineProperty(SegmentedControl, "propTypes", _objectSpread({}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {}, dimensions.propTypes, {
  /**
   * The options for the radios of the Segmented Control.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]).isRequired
  })).isRequired,

  /**
   * The current value of the Segmented Control when controlled.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /**
   * The default value of the Segmented Control when uncontrolled.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /**
   * Function called when the value changes.
   */
  onChange: PropTypes.func,

  /**
   * The name of the radio group.
   */
  name: PropTypes.string,

  /**
   * The height of the Segmented Control.
   */
  height: PropTypes.number,

  /**
   * When true, the Segmented Control is disabled.
   */
  disabled: PropTypes.bool
}));

_defineProperty(SegmentedControl, "defaultProps", {
  height: 32
});

export { SegmentedControl as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWdtZW50ZWQtY29udHJvbC9zcmMvU2VnbWVudGVkQ29udHJvbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJkaW1lbnNpb25zIiwic2FmZUludm9rZSIsIlNlZ21lbnRlZENvbnRyb2xSYWRpbyIsInJhZGlvQ291bnQiLCJTZWdtZW50ZWRDb250cm9sIiwicHJvcHMiLCJjb250ZXh0IiwidmFsdWUiLCJpc0NvbnRyb2xsZWQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsInN0YXRlIiwibmFtZSIsImZpbHRlck91dFZhbHVlIiwiaGVpZ2h0IiwiZGlzYWJsZWQiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImxhYmVsIiwiU3RyaW5nIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImxlbmd0aCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsSUFBY0MsT0FBZCxFQUF1QkMsUUFBdkIsRUFBaUNDLE1BQWpDLEVBQXlDQyxVQUF6QyxRQUEyRCxRQUEzRDtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsdUJBQXZCO0FBQ0EsT0FBT0MscUJBQVAsTUFBa0MseUJBQWxDO0FBRUEsSUFBSUMsVUFBVSxHQUFHLENBQWpCLEMsQ0FBbUI7O0lBRUVDLGdCOzs7OztBQW1FbkIsNEJBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDhCQUFNRCxL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LEM7O1NBL0RIWixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQsIGRpbWVuc2lvbnMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgU2VnbWVudGVkQ29udHJvbFJhZGlvIGZyb20gJy4vU2VnbWVudGVkQ29udHJvbFJhZGlvJ1xuXG5sZXQgcmFkaW9Db3VudCA9IDEgLy8gVXNlZCBmb3IgZ2VuZXJhdGluZyB1bmlxdWUgaW5wdXQgbmFtZXNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VnbWVudGVkQ29udHJvbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyBmb3IgdGhlIHJhZGlvcyBvZiB0aGUgU2VnbWVudGVkIENvbnRyb2wuXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMuYm9vbFxuICAgICAgICBdKS5pc1JlcXVpcmVkXG4gICAgICB9KVxuICAgICkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBTZWdtZW50ZWQgQ29udHJvbCB3aGVuIGNvbnRyb2xsZWQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuYm9vbFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIFNlZ21lbnRlZCBDb250cm9sIHdoZW4gdW5jb250cm9sbGVkLlxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5ib29sXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgcmFkaW8gZ3JvdXAuXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIFNlZ21lbnRlZCBDb250cm9sLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIFNlZ21lbnRlZCBDb250cm9sIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDMyXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgbGV0IHZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gcHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZVxuICAgIH1cblxuICAgIHRoaXMubmFtZSA9IGBTZWdtZW50ZWRDb250cm9sLSR7cmFkaW9Db3VudH1gXG4gICAgcmFkaW9Db3VudCArPSAxXG4gIH1cblxuICBpc0NvbnRyb2xsZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLnZhbHVlICE9PSBudWxsXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7XG4gICAgLy8gU2F2ZSBhIHJlbmRlciBjeWNsZSB3aGVuIGl0J3MgYSBjb250cm9sbGVkIGlucHV0XG4gICAgaWYgKCF0aGlzLmlzQ29udHJvbGxlZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICB9XG5cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25DaGFuZ2UsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlOiBmaWx0ZXJPdXRWYWx1ZSwgLy8gRmlsdGVyIG91dC5cbiAgICAgIG5hbWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBvcHRpb25zLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIEFsbG93cyBpdCB0byBiZWhhdmUgbGlrZSBhIGNvbnRyb2xsZWQgaW5wdXRcbiAgICBsZXQgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh0aGlzLmlzQ29udHJvbGxlZCgpKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIG1hcmdpblJpZ2h0PXstMX0gaGVpZ2h0PXtoZWlnaHR9IHsuLi5wcm9wc30+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTZWdtZW50ZWRDb250cm9sUmFkaW9cbiAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgaWQ9e3RoaXMubmFtZSArIGluZGV4fVxuICAgICAgICAgICAgbmFtZT17bmFtZSB8fCB0aGlzLm5hbWV9XG4gICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgdmFsdWU9e1N0cmluZyhvcHRpb24udmFsdWUpfVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQobnVsbCwgb3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIGlzRmlyc3RJdGVtPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICAgIGlzTGFzdEl0ZW09e2luZGV4ID09PSBvcHRpb25zLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdfQ==
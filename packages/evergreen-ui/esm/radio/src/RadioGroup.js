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
import { spacing, position, layout, dimensions } from 'ui-box';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import Radio from './Radio';
var radioCount = 1; // Used for generating unique input names

var RadioGroup = /*#__PURE__*/function (_PureComponent) {
  _inherits(RadioGroup, _PureComponent);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props, context) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
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

  _createClass(RadioGroup, [{
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
          props = _objectWithoutProperties(_this$props, ["size", "label", "defaultValue", "value", "options", "onChange", "isRequired"]); // Allows it to behave like a controlled input


      var selected = value || this.state.value;
      return React.createElement(Pane, _extends({
        role: "group",
        "aria-label": label
      }, props), label && React.createElement(Text, {
        color: "muted",
        fontWeight: 500
      }, label), options.map(function (item) {
        return React.createElement(Radio, {
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
}(PureComponent);

RadioGroup.displayName = "RadioGroup";

_defineProperty(RadioGroup, "propTypes", _objectSpread({}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {}, dimensions.propTypes, {
  /**
   * The options for the radios of the Radio Group.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool
  })).isRequired,

  /**
   * The selected item value when controlled.
   */
  value: PropTypes.string,

  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue: PropTypes.string,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Label to display above the radio button options.
   */
  label: PropTypes.string,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]).isRequired,

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool.isRequired
}));

_defineProperty(RadioGroup, "defaultProps", {
  options: [],
  onChange: function onChange() {},
  size: 12,
  isRequired: false
});

export { RadioGroup as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW9Hcm91cC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJkaW1lbnNpb25zIiwiUGFuZSIsIlRleHQiLCJSYWRpbyIsInJhZGlvQ291bnQiLCJSYWRpb0dyb3VwIiwicHJvcHMiLCJjb250ZXh0IiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJzdGF0ZSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJuYW1lIiwic2l6ZSIsImxhYmVsIiwiaXNSZXF1aXJlZCIsInNlbGVjdGVkIiwibWFwIiwiaXRlbSIsImlzRGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxVQUFwQyxRQUFzRCxRQUF0RDtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7QUFFQSxJQUFJQyxVQUFVLEdBQUcsQ0FBakIsQyxDQUFtQjs7SUFFRUMsVTs7Ozs7QUEyRG5CLHNCQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtBQUFBOztBQUFBOztBQUMxQiw4QkFBTUQsS0FBTixFQUFhQyxPQUFiOztBQUQwQixtRUFXYixVQUFBQyxLQUFLLEVBQUk7QUFBQSxVQUNkQyxLQURjLEdBQ0pELEtBQUssQ0FBQ0UsTUFERixD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LFU7O0FBRXpCOzs7QUFHQUQsRUFBQUEsS0FBSyxFQUFFdEIsU0FBUyxDQUFDaUMsTTs7QUFFakI7OztBQUdBWixFQUFBQSxJQUFJLEVBQUVyQixTQUFTLENBQUNvQyxLQUFWLENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEJiLFU7O0FBRWhDOzs7QUFHQUEsRUFBQUEsVUFBVSxFQUFFdkIsU0FBUyxDQUFDa0MsSUFBVixDQUFlWDs7O2dCQWpEVmQsVSxrQkFvREc7QUFDcEJVLEVBQUFBLE9BQU8sRUFBRSxFQURXO0FBRXBCSCxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUZFO0FBR3BCSyxFQUFBQSxJQUFJLEVBQUUsRUFIYztBQUlwQkUsRUFBQUEsVUFBVSxFQUFFO0FBSlEsQzs7U0FwREhkLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCBSYWRpbyBmcm9tICcuL1JhZGlvJ1xuXG5sZXQgcmFkaW9Db3VudCA9IDEgLy8gVXNlZCBmb3IgZ2VuZXJhdGluZyB1bmlxdWUgaW5wdXQgbmFtZXNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyBmb3IgdGhlIHJhZGlvcyBvZiB0aGUgUmFkaW8gR3JvdXAuXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAgICAgIH0pXG4gICAgKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gdmFsdWUgd2hlbiBjb250cm9sbGVkLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIFJhZGlvIEdyb3VwIHdoZW4gdW5jb250cm9sbGVkLlxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCB0byBkaXNwbGF5IGFib3ZlIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucy5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSByYWRpbyBjaXJjbGUuIFRoaXMgYWxzbyBpbmZvcm1zIHRoZSB0ZXh0IHNpemUgYW5kIHNwYWNpbmcuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsxMiwgMTZdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgcmFkaW8gZ2V0IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgaXNSZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgc2l6ZTogMTIsXG4gICAgaXNSZXF1aXJlZDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLmRlZmF1bHRWYWx1ZSB8fCBwcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gYFJhZGlvR3JvdXAtJHtyYWRpb0NvdW50fWBcbiAgICByYWRpb0NvdW50ICs9IDFcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXRcblxuICAgIC8vIFNhdmUgYSByZW5kZXIgY3ljbGUgd2hlbiBpdCdzIGEgY29udHJvbGxlZCBpbnB1dFxuICAgIGlmICghdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNpemUsXG4gICAgICBsYWJlbCxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIHZhbHVlLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIEFsbG93cyBpdCB0byBiZWhhdmUgbGlrZSBhIGNvbnRyb2xsZWQgaW5wdXRcbiAgICBjb25zdCBzZWxlY3RlZCA9IHZhbHVlIHx8IHRoaXMuc3RhdGUudmFsdWVcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPXtsYWJlbH0gey4uLnByb3BzfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIm11dGVkXCIgZm9udFdlaWdodD17NTAwfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHtvcHRpb25zLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8UmFkaW9cbiAgICAgICAgICAgIGtleT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICBuYW1lPXt0aGlzLm5hbWV9XG4gICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQgPT09IGl0ZW0udmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5pc0Rpc2FibGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgaXNSZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==
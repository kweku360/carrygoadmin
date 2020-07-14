import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
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
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import { Text } from '../../typography';
import { CaretDownIcon } from '../../icons';
import { withTheme } from '../../theme';

var Select = /*#__PURE__*/function (_PureComponent) {
  _inherits(Select, _PureComponent);

  var _super = _createSuper(Select);

  function Select() {
    _classCallCheck(this, Select);

    return _super.apply(this, arguments);
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          height = _this$props.height,
          children = _this$props.children,
          defaultValue = _this$props.defaultValue,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          value = _this$props.value,
          required = _this$props.required,
          autoFocus = _this$props.autoFocus,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          props = _objectWithoutProperties(_this$props, ["theme", "id", "name", "height", "children", "defaultValue", "disabled", "onChange", "value", "required", "autoFocus", "isInvalid", "appearance"]);

      var themedClassName = theme.getSelectClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForSelect(height);
      var iconMargin = height >= 36 ? 12 : 8;
      return React.createElement(Box, _extends({
        display: "inline-flex",
        flex: 1,
        position: "relative",
        width: "auto",
        height: height
      }, props), React.createElement(Text, {
        is: "select",
        className: themedClassName,
        id: id,
        name: name,
        onChange: onChange,
        defaultValue: defaultValue,
        value: value,
        required: required,
        autoFocus: autoFocus,
        disabled: disabled,
        "aria-invalid": String(isInvalid),
        size: textSize,
        borderRadius: borderRadius,
        textTransform: "default",
        paddingLeft: Math.round(height / 3.2) // Provide enough space for auto-sizing select including the icon
        ,
        paddingRight: iconMargin * 2 + iconSize
      }, children), React.createElement(CaretDownIcon, {
        color: "default",
        size: iconSize,
        position: "absolute",
        top: "50%",
        marginTop: -iconSize / 2,
        right: iconMargin,
        pointerEvents: "none"
      }));
    }
  }]);

  return Select;
}(PureComponent);

Select.displayName = "Select";

_defineProperty(Select, "propTypes", _objectSpread({}, dimensions.propTypes, {}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {
  /**
   * The id attribute for the select.
   */
  id: PropTypes.string,

  /**
   * The name attribute for the select.
   */
  name: PropTypes.string,

  /**
   * The options that are passed to the select.
   */
  children: PropTypes.node,

  /**
   * The initial value of an uncontrolled select
   */
  defaultValue: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * The value of the select.
   */
  value: PropTypes.any,

  /**
   * When true, the select is required.
   */
  required: PropTypes.bool,

  /**
   * When true, the select should auto focus.
   */
  autoFocus: PropTypes.bool,

  /**
   * When true, the select is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the select. The default theme only supports default.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Select, "defaultProps", {
  appearance: 'default',
  height: 32,
  isInvalid: false
});

export default withTheme(Select);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc3JjL1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJkaW1lbnNpb25zIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiVGV4dCIsIkNhcmV0RG93bkljb24iLCJ3aXRoVGhlbWUiLCJTZWxlY3QiLCJwcm9wcyIsInRoZW1lIiwiaWQiLCJuYW1lIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRTZWxlY3RDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9yU2VsZWN0IiwiaWNvbk1hcmdpbiIsIlN0cmluZyIsIk1hdGgiLCJyb3VuZCIsInByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJhbnkiLCJmdW5jIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxVQUFkLEVBQTBCQyxPQUExQixFQUFtQ0MsUUFBbkMsRUFBNkNDLE1BQTdDLFFBQTJELFFBQTNEO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGFBQTlCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7SUFFTUMsTTs7Ozs7Ozs7Ozs7Ozs2QkFvRks7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QSxJQUFJLEVBQUViLFNBQVMsQ0FBQ3FDLE07O0FBRWhCOzs7QUFHQXRCLEVBQUFBLFFBQVEsRUFBRWYsU0FBUyxDQUFDc0MsSTs7QUFFcEI7OztBQUdBdEIsRUFBQUEsWUFBWSxFQUFFaEIsU0FBUyxDQUFDdUMsRzs7QUFFeEI7OztBQUdBckIsRUFBQUEsUUFBUSxFQUFFbEIsU0FBUyxDQUFDd0MsSTs7QUFFcEI7OztBQUdBckIsRUFBQUEsS0FBSyxFQUFFbkIsU0FBUyxDQUFDdUMsRzs7QUFFakI7OztBQUdBbkIsRUFBQUEsUUFBUSxFQUFFcEIsU0FBUyxDQUFDeUMsSTs7QUFFcEI7OztBQUdBcEIsRUFBQUEsU0FBUyxFQUFFckIsU0FBUyxDQUFDeUMsSTs7QUFFckI7OztBQUdBbkIsRUFBQUEsU0FBUyxFQUFFdEIsU0FBUyxDQUFDeUMsSTs7QUFFckI7OztBQUdBbEIsRUFBQUEsVUFBVSxFQUFFdkIsU0FBUyxDQUFDcUMsTUFBVixDQUFpQkssVTs7QUFFN0I7OztBQUdBL0IsRUFBQUEsS0FBSyxFQUFFWCxTQUFTLENBQUMyQyxNQUFWLENBQWlCRDs7O2dCQTNFdEJqQyxNLGtCQThFa0I7QUFDcEJjLEVBQUFBLFVBQVUsRUFBRSxTQURRO0FBRXBCVCxFQUFBQSxNQUFNLEVBQUUsRUFGWTtBQUdwQlEsRUFBQUEsU0FBUyxFQUFFO0FBSFMsQzs7QUEyRXhCLGVBQWVkLFNBQVMsQ0FBQ0MsTUFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IGRpbWVuc2lvbnMsIHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IENhcmV0RG93bkljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIGZvciB0aGUgc2VsZWN0LlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgYXR0cmlidXRlIGZvciB0aGUgc2VsZWN0LlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIHNlbGVjdC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCB2YWx1ZSBvZiBhbiB1bmNvbnRyb2xsZWQgc2VsZWN0XG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIHNlbGVjdC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHNlbGVjdCBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzZWxlY3Qgc2hvdWxkIGF1dG8gZm9jdXMuXG4gICAgICovXG4gICAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHNlbGVjdCBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgc2VsZWN0LiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IHN1cHBvcnRzIGRlZmF1bHQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGlzSW52YWxpZDogZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRTZWxlY3RDbGFzc05hbWUoYXBwZWFyYW5jZSlcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgaWNvblNpemUgPSB0aGVtZS5nZXRJY29uU2l6ZUZvclNlbGVjdChoZWlnaHQpXG4gICAgY29uc3QgaWNvbk1hcmdpbiA9IGhlaWdodCA+PSAzNiA/IDEyIDogOFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgZmxleD17MX1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIHdpZHRoPVwiYXV0b1wiXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJzZWxlY3RcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e1N0cmluZyhpc0ludmFsaWQpfVxuICAgICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJkZWZhdWx0XCJcbiAgICAgICAgICBwYWRkaW5nTGVmdD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICAgIC8vIFByb3ZpZGUgZW5vdWdoIHNwYWNlIGZvciBhdXRvLXNpemluZyBzZWxlY3QgaW5jbHVkaW5nIHRoZSBpY29uXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0PXtpY29uTWFyZ2luICogMiArIGljb25TaXplfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxDYXJldERvd25JY29uXG4gICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICBzaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICB0b3A9XCI1MCVcIlxuICAgICAgICAgIG1hcmdpblRvcD17LWljb25TaXplIC8gMn1cbiAgICAgICAgICByaWdodD17aWNvbk1hcmdpbn1cbiAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFNlbGVjdClcbiJdfQ==
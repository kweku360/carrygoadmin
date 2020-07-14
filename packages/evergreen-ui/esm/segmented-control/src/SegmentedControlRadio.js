import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _css;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { css } from 'glamor';
import cx from 'classnames';
import { Text } from '../../typography';
import { withTheme } from '../../theme';
var labelClass = css({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
});
var wrapperClass = css((_css = {
  position: 'relative',
  display: 'flex',
  flex: 1,
  cursor: 'pointer',
  marginLeft: '-1px'
}, _defineProperty(_css, ":first-child .".concat(labelClass), {
  borderTopLeftRadius: 3,
  borderBottomLeftRadius: 3
}), _defineProperty(_css, ":last-child .".concat(labelClass), {
  borderTopRightRadius: 3,
  borderBottomRightRadius: 3
}), _css));
var offscreenCss = css({
  overflow: 'hidden',
  position: 'absolute',
  height: '1px',
  width: '1px',
  padding: 0,
  margin: '-1px',
  border: 0,
  clip: 'rect(0 0 0 0)'
});

var SegmentedControlRadio = /*#__PURE__*/function (_PureComponent) {
  _inherits(SegmentedControlRadio, _PureComponent);

  var _super = _createSuper(SegmentedControlRadio);

  function SegmentedControlRadio() {
    _classCallCheck(this, SegmentedControlRadio);

    return _super.apply(this, arguments);
  }

  _createClass(SegmentedControlRadio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          value = _this$props.value,
          height = _this$props.height,
          checked = _this$props.checked,
          _onChange = _this$props.onChange,
          appearance = _this$props.appearance,
          isFirstItem = _this$props.isFirstItem,
          isLastItem = _this$props.isLastItem,
          disabled = _this$props.disabled;
      var themedClassName = theme.getSegmentedControlRadioClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return React.createElement(Box, _extends({
        className: cx(wrapperClass.toString(), themedClassName),
        "data-active": checked
      }, isFirstItem ? {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius
      } : {}, isLastItem ? {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      } : {}), React.createElement("input", {
        type: "radio",
        id: id,
        className: "".concat(offscreenCss),
        name: name,
        value: value,
        checked: checked,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        disabled: disabled
      }), React.createElement(Text, {
        is: "label",
        cursor: "pointer",
        htmlFor: id,
        fontWeight: 500,
        size: textSize,
        className: "".concat(labelClass),
        disabled: disabled
      }, label));
    }
  }]);

  return SegmentedControlRadio;
}(PureComponent);

SegmentedControlRadio.displayName = "SegmentedControlRadio";

_defineProperty(SegmentedControlRadio, "propTypes", {
  /**
   * The name attribute of the radio input.
   */
  name: PropTypes.string.isRequired,

  /**
   * The label used for the radio.
   */
  label: PropTypes.node.isRequired,

  /**
   * The value attribute of the radio input.
   */
  value: PropTypes.string.isRequired,

  /**
   * The height of the control.
   */
  height: PropTypes.number.isRequired,

  /**
   * When true, the radio input is checked.
   */
  checked: PropTypes.bool.isRequired,

  /**
   * Function called when the state changes.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * The appearance of the control. Currently only `default` is possible.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * When true, this item is the first item.
   */
  isFirstItem: PropTypes.bool,

  /**
   * When true, this item is the last item.
   */
  isLastItem: PropTypes.bool,

  /**
   * The unique id of the radio option.
   */
  id: PropTypes.string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * When true, the input is disabled.
   */
  disabled: PropTypes.bool
});

export default withTheme(SegmentedControlRadio);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWdtZW50ZWQtY29udHJvbC9zcmMvU2VnbWVudGVkQ29udHJvbFJhZGlvLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsImNzcyIsImN4IiwiVGV4dCIsIndpdGhUaGVtZSIsImxhYmVsQ2xhc3MiLCJkaXNwbGF5IiwiZmxleCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwid3JhcHBlckNsYXNzIiwiY3Vyc29yIiwibWFyZ2luTGVmdCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsIm9mZnNjcmVlbkNzcyIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyIiwiY2xpcCIsIlNlZ21lbnRlZENvbnRyb2xSYWRpbyIsInByb3BzIiwidGhlbWUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiYXBwZWFyYW5jZSIsImlzRmlyc3RJdGVtIiwiaXNMYXN0SXRlbSIsImRpc2FibGVkIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQ2xhc3NOYW1lIiwidGV4dFNpemUiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0IiwidG9TdHJpbmciLCJlIiwidGFyZ2V0Iiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJudW1iZXIiLCJib29sIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNB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QUdBZixFQUFBQSxRQUFRLEVBQUVuQyxTQUFTLENBQUNzRCxJQUFWLENBQWVKLFVBN0JSOztBQStCakI7OztBQUdBZCxFQUFBQSxVQUFVLEVBQUVwQyxTQUFTLENBQUNpRCxNQUFWLENBQWlCQyxVQWxDWjs7QUFvQ2pCOzs7QUFHQWIsRUFBQUEsV0FBVyxFQUFFckMsU0FBUyxDQUFDcUQsSUF2Q047O0FBeUNqQjs7O0FBR0FmLEVBQUFBLFVBQVUsRUFBRXRDLFNBQVMsQ0FBQ3FELElBNUNMOztBQThDakI7OztBQUdBdkIsRUFBQUEsRUFBRSxFQUFFOUIsU0FBUyxDQUFDaUQsTUFqREc7O0FBbURqQjs7O0FBR0FwQixFQUFBQSxLQUFLLEVBQUU3QixTQUFTLENBQUN1RCxNQUFWLENBQWlCTCxVQXREUDs7QUF3RGpCOzs7QUFHQVgsRUFBQUEsUUFBUSxFQUFFdkMsU0FBUyxDQUFDcUQ7QUEzREgsQzs7QUE4SHJCLGVBQWVoRCxTQUFTLENBQUNzQixxQkFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgbGFiZWxDbGFzcyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleDogMSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbn0pXG5cbmNvbnN0IHdyYXBwZXJDbGFzcyA9IGNzcyh7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXg6IDEsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBtYXJnaW5MZWZ0OiAnLTFweCcsXG4gIFtgOmZpcnN0LWNoaWxkIC4ke2xhYmVsQ2xhc3N9YF06IHtcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAzLFxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDNcbiAgfSxcbiAgW2A6bGFzdC1jaGlsZCAuJHtsYWJlbENsYXNzfWBdOiB7XG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDMsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDNcbiAgfVxufSlcblxuY29uc3Qgb2Zmc2NyZWVuQ3NzID0gY3NzKHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgaGVpZ2h0OiAnMXB4JyxcbiAgd2lkdGg6ICcxcHgnLFxuICBwYWRkaW5nOiAwLFxuICBtYXJnaW46ICctMXB4JyxcbiAgYm9yZGVyOiAwLFxuICBjbGlwOiAncmVjdCgwIDAgMCAwKSdcbn0pXG5cbmNsYXNzIFNlZ21lbnRlZENvbnRyb2xSYWRpbyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8gaW5wdXQuXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHVzZWQgZm9yIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGlucHV0LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBjb250cm9sLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgcmFkaW8gaW5wdXQgaXMgY2hlY2tlZC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHN0YXRlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY29udHJvbC4gQ3VycmVudGx5IG9ubHkgYGRlZmF1bHRgIGlzIHBvc3NpYmxlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhpcyBpdGVtIGlzIHRoZSBmaXJzdCBpdGVtLlxuICAgICAqL1xuICAgIGlzRmlyc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhpcyBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0uXG4gICAgICovXG4gICAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdW5pcXVlIGlkIG9mIHRoZSByYWRpbyBvcHRpb24uXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgbGFiZWwsXG4gICAgICB2YWx1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGNoZWNrZWQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBpc0ZpcnN0SXRlbSxcbiAgICAgIGlzTGFzdEl0ZW0sXG4gICAgICBkaXNhYmxlZFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRTZWdtZW50ZWRDb250cm9sUmFkaW9DbGFzc05hbWUoYXBwZWFyYW5jZSlcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBjbGFzc05hbWU9e2N4KHdyYXBwZXJDbGFzcy50b1N0cmluZygpLCB0aGVtZWRDbGFzc05hbWUpfVxuICAgICAgICBkYXRhLWFjdGl2ZT17Y2hlY2tlZH1cbiAgICAgICAgey4uLihpc0ZpcnN0SXRlbVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGJvcmRlclJhZGl1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pfVxuICAgICAgICB7Li4uKGlzTGFzdEl0ZW1cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IGJvcmRlclJhZGl1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake29mZnNjcmVlbkNzc31gfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICBmb250V2VpZ2h0PXs1MDB9XG4gICAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtsYWJlbENsYXNzfWB9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFNlZ21lbnRlZENvbnRyb2xSYWRpbylcbiJdfQ==
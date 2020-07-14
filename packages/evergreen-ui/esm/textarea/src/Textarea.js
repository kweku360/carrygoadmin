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
import cx from 'classnames';
import { Text } from '../../typography';
import { withTheme } from '../../theme';

var Textarea = /*#__PURE__*/function (_PureComponent) {
  _inherits(Textarea, _PureComponent);

  var _super = _createSuper(Textarea);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _super.apply(this, arguments);
  }

  _createClass(Textarea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          width = _this$props.width,
          height = _this$props.height,
          disabled = _this$props.disabled,
          required = _this$props.required,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          placeholder = _this$props.placeholder,
          spellCheck = _this$props.spellCheck,
          grammarly = _this$props.grammarly,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "grammarly"]);

      var themedClassName = theme.getTextareaClassName(appearance);
      return React.createElement(Text, _extends({
        is: "textarea",
        className: cx(themedClassName, className),
        size: 400,
        width: width,
        height: height,
        required: required,
        disabled: disabled,
        placeholder: placeholder,
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        borderRadius: 3,
        spellCheck: spellCheck,
        "aria-invalid": isInvalid,
        "data-gramm_editor": grammarly
      }, disabled ? {
        color: 'muted'
      } : {}, Textarea.styles, props));
    }
  }]);

  return Textarea;
}(PureComponent);

Textarea.displayName = "Textarea";

_defineProperty(Textarea, "propTypes", _objectSpread({}, Text.propTypes, {
  /**
   * Makes the textarea element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the textarea element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: PropTypes.bool,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * The appearance of the TextInput.
   */
  appearance: PropTypes.string,

  /**
   * The width of the TextInput.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(Textarea, "defaultProps", {
  appearance: 'default',
  width: '100%',
  disabled: false,
  isInvalid: false,
  spellCheck: true,
  grammarly: false
});

_defineProperty(Textarea, "styles", {
  minHeight: 80,
  paddingX: 10,
  paddingY: 8
});

export default withTheme(Textarea);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0YXJlYS9zcmMvVGV4dGFyZWEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY3giLCJUZXh0Iiwid2l0aFRoZW1lIiwiVGV4dGFyZWEiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiaXNJbnZhbGlkIiwiYXBwZWFyYW5jZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsImdyYW1tYXJseSIsInRoZW1lZENsYXNzTmFtZSIsImdldFRleHRhcmVhQ2xhc3NOYW1lIiwiTWF0aCIsInJvdW5kIiwiY29sb3IiLCJzdHlsZXMiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm1pbkhlaWdodCIsInBhZGRpbmdYIiwicGFkZGluZ1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7O0lBRU1DLFE7Ozs7Ozs7Ozs7Ozs7NkJBMkVLO0FBQUEsd0JBZUgsS0FBS0MsS0FmRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBR0xDLFNBSEssZUFHTEEsU0FISztBQUFBLFVBS0xDLEtBTEssZUFLTEEsS0FMSztBQUFBLFVBTUxDLE1BTkssZUFNTEEsTUFOSztBQUFBLFVBT0xDLFFBUEssZUFPTEEsUUFQSztBQUFBLFVBUUxDLFFBUkssZUFRTEEsUUFSSztBQUFBLFVBU0xDLFNBVEssZUFTTEEsU0FUSztBQUFBLFVBVUxDLFVBVkssZUFVTEEsVUFWSztBQUFBLFVBV0xDLFdBWEssZUFXTEEsV0FYSztBQUFBLFVBWUxDLFVBWkssZUFZTEEsVUFaSztBQUFBLFVBYUxDLFNBYkssZUFhTEEsU0FiSztBQUFBLFVBY0ZYLEtBZEU7O0FBZ0JQLFVBQU1ZLGVBQWUsR0FBR1gsS0FBSyxDQUFDWSxvQkFBTixDQUEyQkwsVUFBM0IsQ0FBeEI7QUFFQSxhQUNFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxVQURMO0FBRUUsUUFBQSxTQUFTLEVBQUVaLEVBQUUsQ0FBQ2dCLGVBQUQsRUFBa0JWLFNBQWxCLENBRmY7QUFHRSxRQUFBLElBQUksRUFBRSxHQUhSO0FBSUUsUUFBQSxLQUFLLEVBQUVDLEtBSlQ7QUFLRSxRQUFBLE1BQU0sRUFBRUMsTUFMVjtBQU1FLFFBQUEsUUFBUSxFQUFFRSxRQU5aO0FBT0UsUUFBQSxRQUFRLEVBQUVELFFBUFo7QUFRRSxRQUFBLFdBQVcsRUFBRUksV0FSZjtBQVNFLFFBQUEsV0FBVyxFQUFFSyxJQUFJLENBQUNDLEtBQUwsQ0FBV1gsTUFBTSxHQUFHLEdBQXBCLENBVGY7QUFVRSxRQUFBLFlBQVksRUFBRVUsSUFBSSxDQUFDQyxLQUFMLENBQVdYLE1BQU0sR0FBRyxHQUFwQixDQVZoQjtBQVdFLFFBQUEsWUFBWSxFQUFFLENBWGhCO0FBWUUsUUFBQSxVQUFVLEVBQUVNLFVBWmQ7QUFhRSx3QkFBY0gsU0FiaEI7QUFjRSw2QkFBbUJJO0FBZHJCLFNBZU9OLFFBQVEsR0FBRztBQUFFVyxRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUFILEdBQXdCLEVBZnZDLEVBZ0JNakIsUUFBUSxDQUFDa0IsTUFoQmYsRUFpQk1qQixLQWpCTixFQURGO0FBcUJEOzs7O0VBbEhvQk4sYTs7QUFBakJLLFE7O2dCQUFBQSxRLGlDQUtDRixJQUFJLENBQUNxQixTO0FBRVI7OztBQUdBWixFQUFBQSxRQUFRLEVBQUVYLFNBQVMsQ0FBQ3dCLEk7O0FBRXBCOzs7QUFHQWQsRUFBQUEsUUFBUSxFQUFFVixTQUFTLENBQUN3QixJOztBQUVwQjs7OztBQUlBWixFQUFBQSxTQUFTLEVBQUVaLFNBQVMsQ0FBQ3dCLEk7O0FBRXJCOzs7QUFHQVQsRUFBQUEsVUFBVSxFQUFFZixTQUFTLENBQUN3QixJOztBQUV0Qjs7O0FBR0FSLEVBQUFBLFNBQVMsRUFBRWhCLFNBQVMsQ0FBQ3dCLEk7O0FBRXJCOzs7QUFHQVYsRUFBQUEsV0FBVyxFQUFFZCxTQUFTLENBQUN5QixNOztBQUV2Qjs7O0FBR0FaLEVBQUFBLFVBQVUsRUFBRWIsU0FBUyxDQUFDeUIsTTs7QUFFdEI7OztBQUdBakIsRUFBQUEsS0FBSyxFQUFFUixTQUFTLENBQUMwQixTQUFWLENBQW9CLENBQUMxQixTQUFTLENBQUN5QixNQUFYLEVBQW1CekIsU0FBUyxDQUFDMkIsTUFBN0IsQ0FBcEIsQzs7QUFFUDs7O0FBR0FyQixFQUFBQSxLQUFLLEVBQUVOLFNBQVMsQ0FBQzRCLE1BQVYsQ0FBaUJDLFU7O0FBRXhCOzs7O0FBSUF0QixFQUFBQSxTQUFTLEVBQUVQLFNBQVMsQ0FBQ3lCOzs7Z0JBekRuQnJCLFEsa0JBNERrQjtBQUNwQlMsRUFBQUEsVUFBVSxFQUFFLFNBRFE7QUFFcEJMLEVBQUFBLEtBQUssRUFBRSxNQUZhO0FBR3BCRSxFQUFBQSxRQUFRLEVBQUUsS0FIVTtBQUlwQkUsRUFBQUEsU0FBUyxFQUFFLEtBSlM7QUFLcEJHLEVBQUFBLFVBQVUsRUFBRSxJQUxRO0FBTXBCQyxFQUFBQSxTQUFTLEVBQUU7QUFOUyxDOztnQkE1RGxCWixRLFlBcUVZO0FBQ2QwQixFQUFBQSxTQUFTLEVBQUUsRUFERztBQUVkQyxFQUFBQSxRQUFRLEVBQUUsRUFGSTtBQUdkQyxFQUFBQSxRQUFRLEVBQUU7QUFISSxDOztBQWdEbEIsZUFBZTdCLFNBQVMsQ0FBQ0MsUUFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRleHQgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIHRleHRhcmVhIGVsZW1lbnQgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIHRleHRhcmVhIGVsZW1lbnQgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2aXN1YWwgc3R5bGluZyBvZiBfb25seV8gdGhlIHRleHQgYXJlYSB0byBiZSBcImludmFsaWRcIi5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBlZmZlY3QgYW55IGB2YWxpZGF0aW9uTWVzc2FnZWAuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgbmF0aXZlIHNwZWxsIGNoZWNrIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGJyb3dzZXIuXG4gICAgICovXG4gICAgc3BlbGxDaGVjazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbGxvdyB0aGUgR3JhbW1hcmx5IGJyb3dzZXIgZXh0ZW5zaW9uIHRvIGF0dGFjaCB0byB0aGUgYmFja2luZyB0ZXh0YXJlYS5cbiAgICAgKi9cbiAgICBncmFtbWFybHk6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlaG9sZGVyIHRleHQgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSBwcmVzZW50LlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIFRleHRJbnB1dC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBUZXh0SW5wdXQuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXNJbnZhbGlkOiBmYWxzZSxcbiAgICBzcGVsbENoZWNrOiB0cnVlLFxuICAgIGdyYW1tYXJseTogZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgbWluSGVpZ2h0OiA4MCxcbiAgICBwYWRkaW5nWDogMTAsXG4gICAgcGFkZGluZ1k6IDhcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcblxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgc3BlbGxDaGVjayxcbiAgICAgIGdyYW1tYXJseSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRUZXh0YXJlYUNsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwidGV4dGFyZWFcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgc2l6ZT17NDAwfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBwYWRkaW5nTGVmdD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXszfVxuICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgZGF0YS1ncmFtbV9lZGl0b3I9e2dyYW1tYXJseX1cbiAgICAgICAgey4uLihkaXNhYmxlZCA/IHsgY29sb3I6ICdtdXRlZCcgfSA6IHt9KX1cbiAgICAgICAgey4uLlRleHRhcmVhLnN0eWxlc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRleHRhcmVhKVxuIl19
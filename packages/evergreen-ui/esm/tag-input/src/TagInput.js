import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import cx from 'classnames';
import { Text } from '../../typography';
import { withTheme } from '../../theme';
import { majorScale } from '../../scales';
import safeInvoke from '../../lib/safe-invoke';
import Tag from './Tag';
var inputId = 1;

var TagInput = /*#__PURE__*/function (_React$Component) {
  _inherits(TagInput, _React$Component);

  var _super = _createSuper(TagInput);

  function TagInput() {
    var _this;

    _classCallCheck(this, TagInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputValue: '',
      isFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "id", "TagInput-".concat(inputId++));

    _defineProperty(_assertThisInitialized(_this), "addTags", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _this$props = _this.props,
          onAdd = _this$props.onAdd,
          onChange = _this$props.onChange,
          values = _this$props.values;

      var newValues = _this.getValues(value);

      var shouldClearInput = safeInvoke(onAdd, newValues);

      if (typeof onChange === 'function') {
        shouldClearInput = shouldClearInput || onChange(values.concat(newValues));
      }

      if (shouldClearInput !== false) {
        _this.setState({
          inputValue: ''
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getValues", function () {
      var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var separator = _this.props.separator;
      return separator ? inputValue.split(separator).map(function (v) {
        return v.trim();
      }).filter(function (v) {
        return v.length > 0;
      }) : [inputValue];
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackspaceToRemove", function () {
      var values = _this.props.values; // Delete last item in values

      _this.removeTagAtIndex(values.length - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var container = event.target; // Use raf so that the dom has time to update `activeElement`

      requestAnimationFrame(function () {
        if (!container.contains(document.activeElement)) {
          if (_this.props.addOnBlur && _this.state.inputValue) {
            _this.addTags(_this.state.inputValue);
          }

          _this.setState({
            isFocused: false
          });
        }
      });
      safeInvoke(_this.props.onBlur, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      _this.setState({
        inputValue: event.target.value
      });

      safeInvoke(_this.props.onInputChange, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputFocus", function (event) {
      _this.setState({
        isFocused: true
      });

      safeInvoke(_this.props.onFocus, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _event$target = event.target,
          selectionEnd = _event$target.selectionEnd,
          value = _event$target.value;

      if (event.key === 'Enter') {
        // Prevent Enter keypresses from submitting forms since they have special powers inside TagInput
        event.preventDefault();

        _this.addTags(value);
      } else if (event.key === 'Backspace' && selectionEnd === 0) {
        _this.handleBackspaceToRemove(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRemoveTag", function (event) {
      // Using data attribute to simplify callback logic -- one handler for all children
      var index = Number(event.currentTarget.parentElement.getAttribute('data-tag-index'));

      _this.removeTagAtIndex(index);
    });

    _defineProperty(_assertThisInitialized(_this), "maybeRenderTag", function (tag, index) {
      if (!tag) {
        return null;
      }

      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tagProps = _this$props2.tagProps;
      var props = safeInvoke(tagProps, tag, index) || tagProps;
      return React.createElement(Tag, _extends({
        key: "".concat(tag, ":").concat(index),
        "data-tag-index": index,
        marginRight: majorScale(1),
        marginY: "6px",
        onRemove: disabled ? null : _this.handleRemoveTag,
        isRemovable: !disabled
      }, props), tag);
    });

    _defineProperty(_assertThisInitialized(_this), "removeTagAtIndex", function (index) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          onRemove = _this$props3.onRemove,
          values = _this$props3.values;
      safeInvoke(onRemove, values[index], index); // Remove item at index as a new array

      var newValues = values.filter(function (_, i) {
        return i !== index;
      });
      safeInvoke(onChange, newValues);
    });

    _defineProperty(_assertThisInitialized(_this), "setRef", function (node) {
      _this.input = node;
      safeInvoke(_this.props.inputRef, node);
    });

    return _this;
  }

  _createClass(TagInput, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          addOnBlur = _this$props4.addOnBlur,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          height = _this$props4.height,
          inputProps = _this$props4.inputProps,
          inputRef = _this$props4.inputRef,
          onAdd = _this$props4.onAdd,
          onChange = _this$props4.onChange,
          onInputChange = _this$props4.onInputChange,
          onRemove = _this$props4.onRemove,
          separator = _this$props4.separator,
          tagProps = _this$props4.tagProps,
          theme = _this$props4.theme,
          values = _this$props4.values,
          props = _objectWithoutProperties(_this$props4, ["addOnBlur", "className", "disabled", "height", "inputProps", "inputRef", "onAdd", "onChange", "onInputChange", "onRemove", "separator", "tagProps", "theme", "values"]);

      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          isFocused = _this$state.isFocused;
      var themedContainerClassName = theme.getTagInputClassName('default');
      var themedInputClassName = theme.getTextInputClassName('none');
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return React.createElement(Box, _extends({
        "aria-disabled": disabled || undefined,
        "aria-activedescendant": isFocused ? this.id : undefined,
        borderRadius: borderRadius,
        className: cx(themedContainerClassName, className),
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        paddingY: "2px"
      }, props, {
        onBlur: this.handleBlur
      }), values.map(this.maybeRenderTag), React.createElement(Text, _extends({
        is: "input",
        id: this.id,
        color: disabled ? 'muted' : undefined,
        disabled: disabled,
        flexGrow: "1",
        height: height - 4,
        size: textSize,
        type: "text",
        value: inputValue
      }, inputProps, {
        className: themedInputClassName,
        ref: this.setRef,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus,
        onKeyDown: this.handleKeyDown
      })));
    }
  }]);

  return TagInput;
}(React.Component);

TagInput.displayName = "TagInput";

_defineProperty(TagInput, "propTypes", {
  /** Whether or not the inputValue should be added to the tags when the input blurs. */
  addOnBlur: PropTypes.bool,

  /** The class name to apply to the container component. */
  className: PropTypes.string,

  /** Whether or not the input should be disabled. */
  disabled: PropTypes.bool,

  /** The vertical size of the input */
  height: PropTypes.number,

  /** Props to pass to the input component. Note that `ref` and `key` are not supported. See `inputRef`. */
  inputProps: PropTypes.object,

  /**
   * Ref handler for the input element.
   * (input: HTMLInputElement | null) => void
   */
  inputRef: PropTypes.func,

  /**
   * Callback invoked when new tags are added.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onAdd: PropTypes.func,

  /**
   * Callback invoked when focus on the input blurs.
   * (event) => void
   */
  onBlur: PropTypes.func,

  /**
   * Callback invoked when the tag values change.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onChange: PropTypes.func,

  /**
   * Callback invoked when the input receives focus.
   * (event) => void
   */
  onFocus: PropTypes.func,

  /**
   * Callback invoked when the value of the input is changed. Shorthand for `inputProps={{ onChange }}`.
   * (event) => void
   */
  onInputChange: PropTypes.func,

  /**
   * Callback invoked when a tag is removed.
   * Receives value and index of removed tag.
   * (value: string | node, index: number) => void
   */
  onRemove: PropTypes.func,

  /** Value or RegExp to split on pasted text or on enter keypress */
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp), PropTypes.oneOf([false])]),

  /** Provide props to tag component (actually `Badge`, for now). */
  tagProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /** Controlled tag values. Each value is rendered inside a tag. */
  values: PropTypes.arrayOf(PropTypes.node)
});

_defineProperty(TagInput, "defaultProps", {
  addOnBlur: false,
  disabled: false,
  height: 32,
  separator: /[,\n\r]/,
  values: [],
  tagProps: {}
});

export default withTheme(TagInput);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWctaW5wdXQvc3JjL1RhZ0lucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQm94IiwiY3giLCJUZXh0Iiwid2l0aFRoZW1lIiwibWFqb3JTY2FsZSIsInNhZmVJbnZva2UiLCJUYWciLCJpbnB1dElkIiwiVGFnSW5wdXQiLCJpbnB1dFZhbHVlIiwiaXNGb2N1c2VkIiwidmFsdWUiLCJwcm9wcyIsIm9uQWRkIiwib25DaGFuZ2UiLCJ2YWx1ZXMiLCJuZXdWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJzaG91bGRDbGVhcklucHV0IiwiY29uY2F0Iiwic2V0U3RhdGUiLCJzZXBhcmF0b3IiLCJzcGxpdCIsIm1hcCIsInYiLCJ0cmltIiwiZmlsdGVyIiwibGVuZ3RoIiwicmVtb3ZlVGFnQXRJbmRleCIsImV2ZW50IiwiY29udGFpbmVyIiwidGFyZ2V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhZGRPbkJsdXIiLCJzdGF0ZSIsImFkZFRhZ3MiLCJvbkJsdXIiLCJvbklucHV0Q2hhbmdlIiwib25Gb2N1cyIsInNlbGVjdGlvbkVuZCIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQmFja3NwYWNlVG9SZW1vdmUiLCJpbmRleCIsIk51bWJlciIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidGFnIiwiZGlzYWJsZWQiLCJ0YWdQcm9wcyIsImhhbmRsZVJlbW92ZVRhZyIsIm9uUmVtb3ZlIiwiXyIsImkiLCJub2RlIiwiaW5wdXQiLCJpbnB1dFJlZiIsImNsYXNzTmFtZSIsImhlaWdodCIsImlucHV0UHJvcHMiLCJ0aGVtZSIsInRoZW1lZENvbnRhaW5lckNsYXNzTmFtZSIsImdldFRhZ0lucHV0Q2xhc3NOYW1lIiwidGhlbWVkSW5wdXRDbGFzc05hbWUiLCJnZXRUZXh0SW5wdXRDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJ1bmRlZmluZWQiLCJpZCIsIk1hdGgiLCJyb3VuZCIsImhhbmRsZUJsdXIiLCJtYXliZVJlbmRlclRhZyIsInNldFJlZiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUtleURvd24iLCJDb21wb25lbnQiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsImluc3RhbmNlT2YiLCJSZWdFeHAiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJhcnJheU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFJQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsY0FBM0I7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHVCQUF2QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsT0FBaEI7QUFFQSxJQUFJQyxPQUFPLEdBQUcsQ0FBZDs7SUFFTUMsUTs7Ozs7Ozs7Ozs7Ozs7Ozs0REEyRUk7QUFDTkMsTUFBQUEsVUFBVSxFQUFFLEVBRE47QUFFTkMsTUFBQUEsU0FBUyxFQUFFO0FBRkwsSzs7NEVBS1NILE9BQU8sRTs7OERBRWQsWUFBZ0I7QUFBQSxVQUFmSSxLQUFlLHVFQUFQLEVBQU87QUFBQSx3QkFDWSxNQUFLQyxLQURqQjtBQUFBLFVBQ2hCQyxLQURnQixlQUNoQkEsS0FEZ0I7QUFBQSxVQUNUQyxRQURTLGVBQ1RBLFFBRFM7QUFBQSxVQUNDQyxNQURELGVBQ0NBLE1BREQ7O0FBRXhC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QUEyQ2pCOzs7OztBQUtBakMsRUFBQUEsUUFBUSxFQUFFeEQsU0FBUyxDQUFDeUYsSUFoREg7O0FBaURqQjtBQUNBbkUsRUFBQUEsU0FBUyxFQUFFdEIsU0FBUyxDQUFDMEYsU0FBVixDQUFvQixDQUM3QjFGLFNBQVMsQ0FBQ3NGLE1BRG1CLEVBRTdCdEYsU0FBUyxDQUFDMkYsVUFBVixDQUFxQkMsTUFBckIsQ0FGNkIsRUFHN0I1RixTQUFTLENBQUM2RixLQUFWLENBQWdCLENBQUMsS0FBRCxDQUFoQixDQUg2QixDQUFwQixDQWxETTs7QUF1RGpCO0FBQ0F2QyxFQUFBQSxRQUFRLEVBQUV0RCxTQUFTLENBQUMwRixTQUFWLENBQW9CLENBQUMxRixTQUFTLENBQUN3RixNQUFYLEVBQW1CeEYsU0FBUyxDQUFDeUYsSUFBN0IsQ0FBcEIsQ0F4RE87O0FBeURqQjs7O0FBR0F4QixFQUFBQSxLQUFLLEVBQUVqRSxTQUFTLENBQUN3RixNQUFWLENBQWlCTSxVQTVEUDs7QUE2RGpCO0FBQ0E5RSxFQUFBQSxNQUFNLEVBQUVoQixTQUFTLENBQUMrRixPQUFWLENBQWtCL0YsU0FBUyxDQUFDMkQsSUFBNUI7QUE5RFMsQzs7Z0JBRGZsRCxRLGtCQWtFa0I7QUFDcEI0QixFQUFBQSxTQUFTLEVBQUUsS0FEUztBQUVwQmdCLEVBQUFBLFFBQVEsRUFBRSxLQUZVO0FBR3BCVSxFQUFBQSxNQUFNLEVBQUUsRUFIWTtBQUlwQnpDLEVBQUFBLFNBQVMsRUFBRSxTQUpTO0FBS3BCTixFQUFBQSxNQUFNLEVBQUUsRUFMWTtBQU1wQnNDLEVBQUFBLFFBQVEsRUFBRTtBQU5VLEM7O0FBaU14QixlQUFlbEQsU0FBUyxDQUFDSyxRQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAb3ZlcnZpZXcgVGFnSW5wdXQgYWNjZXB0cyBtdWx0aXBsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgaW5kaXZpZHVhbGx5IHJlbW92ZWRcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IG1ham9yU2NhbGUgfSBmcm9tICcuLi8uLi9zY2FsZXMnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJ1xuXG5sZXQgaW5wdXRJZCA9IDFcblxuY2xhc3MgVGFnSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXRWYWx1ZSBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHRhZ3Mgd2hlbiB0aGUgaW5wdXQgYmx1cnMuICovXG4gICAgYWRkT25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKiogVGhlIGNsYXNzIG5hbWUgdG8gYXBwbHkgdG8gdGhlIGNvbnRhaW5lciBjb21wb25lbnQuICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKiogVGhlIHZlcnRpY2FsIHNpemUgb2YgdGhlIGlucHV0ICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKiBQcm9wcyB0byBwYXNzIHRvIHRoZSBpbnB1dCBjb21wb25lbnQuIE5vdGUgdGhhdCBgcmVmYCBhbmQgYGtleWAgYXJlIG5vdCBzdXBwb3J0ZWQuIFNlZSBgaW5wdXRSZWZgLiAqL1xuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogUmVmIGhhbmRsZXIgZm9yIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqIChpbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwpID0+IHZvaWRcbiAgICAgKi9cbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIG5ldyB0YWdzIGFyZSBhZGRlZC5cbiAgICAgKiBSZXR1cm5pbmcgYGZhbHNlYCB3aWxsIHByZXZlbnQgY2xlYXJpbmcgdGhlIGlucHV0LlxuICAgICAqICh2YWx1ZXM6IEFycmF5KSA9PiB2b2lkIHwgZmFsc2VcbiAgICAgKi9cbiAgICBvbkFkZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIGZvY3VzIG9uIHRoZSBpbnB1dCBibHVycy5cbiAgICAgKiAoZXZlbnQpID0+IHZvaWRcbiAgICAgKi9cbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgdGFnIHZhbHVlcyBjaGFuZ2UuXG4gICAgICogUmV0dXJuaW5nIGBmYWxzZWAgd2lsbCBwcmV2ZW50IGNsZWFyaW5nIHRoZSBpbnB1dC5cbiAgICAgKiAodmFsdWVzOiBBcnJheSkgPT4gdm9pZCB8IGZhbHNlXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgaW5wdXQgcmVjZWl2ZXMgZm9jdXMuXG4gICAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAgICovXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgaXMgY2hhbmdlZC4gU2hvcnRoYW5kIGZvciBgaW5wdXRQcm9wcz17eyBvbkNoYW5nZSB9fWAuXG4gICAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAgICovXG4gICAgb25JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIGEgdGFnIGlzIHJlbW92ZWQuXG4gICAgICogUmVjZWl2ZXMgdmFsdWUgYW5kIGluZGV4IG9mIHJlbW92ZWQgdGFnLlxuICAgICAqICh2YWx1ZTogc3RyaW5nIHwgbm9kZSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICAgICAqL1xuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKiogVmFsdWUgb3IgUmVnRXhwIHRvIHNwbGl0IG9uIHBhc3RlZCB0ZXh0IG9yIG9uIGVudGVyIGtleXByZXNzICovXG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihSZWdFeHApLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXG4gICAgXSksXG4gICAgLyoqIFByb3ZpZGUgcHJvcHMgdG8gdGFnIGNvbXBvbmVudCAoYWN0dWFsbHkgYEJhZGdlYCwgZm9yIG5vdykuICovXG4gICAgdGFnUHJvcHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIC8qKiBDb250cm9sbGVkIHRhZyB2YWx1ZXMuIEVhY2ggdmFsdWUgaXMgcmVuZGVyZWQgaW5zaWRlIGEgdGFnLiAqL1xuICAgIHZhbHVlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFkZE9uQmx1cjogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGhlaWdodDogMzIsXG4gICAgc2VwYXJhdG9yOiAvWyxcXG5cXHJdLyxcbiAgICB2YWx1ZXM6IFtdLFxuICAgIHRhZ1Byb3BzOiB7fVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaW5wdXRWYWx1ZTogJycsXG4gICAgaXNGb2N1c2VkOiBmYWxzZVxuICB9XG5cbiAgaWQgPSBgVGFnSW5wdXQtJHtpbnB1dElkKyt9YFxuXG4gIGFkZFRhZ3MgPSAodmFsdWUgPSAnJykgPT4ge1xuICAgIGNvbnN0IHsgb25BZGQsIG9uQ2hhbmdlLCB2YWx1ZXMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBuZXdWYWx1ZXMgPSB0aGlzLmdldFZhbHVlcyh2YWx1ZSlcbiAgICBsZXQgc2hvdWxkQ2xlYXJJbnB1dCA9IHNhZmVJbnZva2Uob25BZGQsIG5ld1ZhbHVlcylcblxuICAgIGlmICh0eXBlb2Ygb25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNob3VsZENsZWFySW5wdXQgPSBzaG91bGRDbGVhcklucHV0IHx8IG9uQ2hhbmdlKHZhbHVlcy5jb25jYXQobmV3VmFsdWVzKSlcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkQ2xlYXJJbnB1dCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiAnJyB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlcyA9IChpbnB1dFZhbHVlID0gJycpID0+IHtcbiAgICBjb25zdCB7IHNlcGFyYXRvciB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIHNlcGFyYXRvclxuICAgICAgPyBpbnB1dFZhbHVlXG4gICAgICAgICAgLnNwbGl0KHNlcGFyYXRvcilcbiAgICAgICAgICAubWFwKHYgPT4gdi50cmltKCkpXG4gICAgICAgICAgLmZpbHRlcih2ID0+IHYubGVuZ3RoID4gMClcbiAgICAgIDogW2lucHV0VmFsdWVdXG4gIH1cblxuICBoYW5kbGVCYWNrc3BhY2VUb1JlbW92ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gRGVsZXRlIGxhc3QgaXRlbSBpbiB2YWx1ZXNcbiAgICB0aGlzLnJlbW92ZVRhZ0F0SW5kZXgodmFsdWVzLmxlbmd0aCAtIDEpXG4gIH1cblxuICBoYW5kbGVCbHVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LnRhcmdldFxuXG4gICAgLy8gVXNlIHJhZiBzbyB0aGF0IHRoZSBkb20gaGFzIHRpbWUgdG8gdXBkYXRlIGBhY3RpdmVFbGVtZW50YFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hZGRPbkJsdXIgJiYgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5hZGRUYWdzKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkJsdXIsIGV2ZW50KVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlLCBldmVudClcbiAgfVxuXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KVxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkZvY3VzLCBldmVudClcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3Rpb25FbmQsIHZhbHVlIH0gPSBldmVudC50YXJnZXRcblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIC8vIFByZXZlbnQgRW50ZXIga2V5cHJlc3NlcyBmcm9tIHN1Ym1pdHRpbmcgZm9ybXMgc2luY2UgdGhleSBoYXZlIHNwZWNpYWwgcG93ZXJzIGluc2lkZSBUYWdJbnB1dFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5hZGRUYWdzKHZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyAmJiBzZWxlY3Rpb25FbmQgPT09IDApIHtcbiAgICAgIHRoaXMuaGFuZGxlQmFja3NwYWNlVG9SZW1vdmUoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlVGFnID0gZXZlbnQgPT4ge1xuICAgIC8vIFVzaW5nIGRhdGEgYXR0cmlidXRlIHRvIHNpbXBsaWZ5IGNhbGxiYWNrIGxvZ2ljIC0tIG9uZSBoYW5kbGVyIGZvciBhbGwgY2hpbGRyZW5cbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnLWluZGV4JylcbiAgICApXG4gICAgdGhpcy5yZW1vdmVUYWdBdEluZGV4KGluZGV4KVxuICB9XG5cbiAgbWF5YmVSZW5kZXJUYWcgPSAodGFnLCBpbmRleCkgPT4ge1xuICAgIGlmICghdGFnKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHsgZGlzYWJsZWQsIHRhZ1Byb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcHJvcHMgPSBzYWZlSW52b2tlKHRhZ1Byb3BzLCB0YWcsIGluZGV4KSB8fCB0YWdQcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWdcbiAgICAgICAga2V5PXtgJHt0YWd9OiR7aW5kZXh9YH1cbiAgICAgICAgZGF0YS10YWctaW5kZXg9e2luZGV4fVxuICAgICAgICBtYXJnaW5SaWdodD17bWFqb3JTY2FsZSgxKX1cbiAgICAgICAgbWFyZ2luWT1cIjZweFwiXG4gICAgICAgIG9uUmVtb3ZlPXtkaXNhYmxlZCA/IG51bGwgOiB0aGlzLmhhbmRsZVJlbW92ZVRhZ31cbiAgICAgICAgaXNSZW1vdmFibGU9eyFkaXNhYmxlZH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGFnfVxuICAgICAgPC9UYWc+XG4gICAgKVxuICB9XG5cbiAgcmVtb3ZlVGFnQXRJbmRleCA9IGluZGV4ID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBvblJlbW92ZSwgdmFsdWVzIH0gPSB0aGlzLnByb3BzXG4gICAgc2FmZUludm9rZShvblJlbW92ZSwgdmFsdWVzW2luZGV4XSwgaW5kZXgpXG5cbiAgICAvLyBSZW1vdmUgaXRlbSBhdCBpbmRleCBhcyBhIG5ldyBhcnJheVxuICAgIGNvbnN0IG5ld1ZhbHVlcyA9IHZhbHVlcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KVxuICAgIHNhZmVJbnZva2Uob25DaGFuZ2UsIG5ld1ZhbHVlcylcbiAgfVxuXG4gIHNldFJlZiA9IG5vZGUgPT4ge1xuICAgIHRoaXMuaW5wdXQgPSBub2RlXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLmlucHV0UmVmLCBub2RlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFkZE9uQmx1cixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaGVpZ2h0LFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgb25BZGQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uSW5wdXRDaGFuZ2UsXG4gICAgICBvblJlbW92ZSxcbiAgICAgIHNlcGFyYXRvcixcbiAgICAgIHRhZ1Byb3BzLFxuICAgICAgdGhlbWUsXG4gICAgICB2YWx1ZXMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IGlucHV0VmFsdWUsIGlzRm9jdXNlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgdGhlbWVkQ29udGFpbmVyQ2xhc3NOYW1lID0gdGhlbWUuZ2V0VGFnSW5wdXRDbGFzc05hbWUoJ2RlZmF1bHQnKVxuICAgIGNvbnN0IHRoZW1lZElucHV0Q2xhc3NOYW1lID0gdGhlbWUuZ2V0VGV4dElucHV0Q2xhc3NOYW1lKCdub25lJylcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBhcmlhLWRpc2FibGVkPXtkaXNhYmxlZCB8fCB1bmRlZmluZWR9XG4gICAgICAgIGFyaWEtYWN0aXZlZGVzY2VuZGFudD17aXNGb2N1c2VkID8gdGhpcy5pZCA6IHVuZGVmaW5lZH1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ29udGFpbmVyQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICBwYWRkaW5nTGVmdD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1k9XCIycHhcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgPlxuICAgICAgICB7dmFsdWVzLm1hcCh0aGlzLm1heWJlUmVuZGVyVGFnKX1cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBpZD17dGhpcy5pZH1cbiAgICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnbXV0ZWQnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBmbGV4R3Jvdz1cIjFcIlxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0IC0gNH1cbiAgICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRJbnB1dENsYXNzTmFtZX1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0UmVmfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGFnSW5wdXQpXG4iXX0=
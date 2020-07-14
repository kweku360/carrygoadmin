"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _scales = require("../../scales");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var inputId = 1;

var TagInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TagInput, _React$Component);

  var _super = _createSuper(TagInput);

  function TagInput() {
    var _this;

    (0, _classCallCheck2["default"])(this, TagInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      inputValue: '',
      isFocused: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", "TagInput-".concat(inputId++));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addTags", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _this$props = _this.props,
          onAdd = _this$props.onAdd,
          onChange = _this$props.onChange,
          values = _this$props.values;

      var newValues = _this.getValues(value);

      var shouldClearInput = (0, _safeInvoke["default"])(onAdd, newValues);

      if (typeof onChange === 'function') {
        shouldClearInput = shouldClearInput || onChange(values.concat(newValues));
      }

      if (shouldClearInput !== false) {
        _this.setState({
          inputValue: ''
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getValues", function () {
      var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var separator = _this.props.separator;
      return separator ? inputValue.split(separator).map(function (v) {
        return v.trim();
      }).filter(function (v) {
        return v.length > 0;
      }) : [inputValue];
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBackspaceToRemove", function () {
      var values = _this.props.values; // Delete last item in values

      _this.removeTagAtIndex(values.length - 1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function (event) {
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
      (0, _safeInvoke["default"])(_this.props.onBlur, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputChange", function (event) {
      _this.setState({
        inputValue: event.target.value
      });

      (0, _safeInvoke["default"])(_this.props.onInputChange, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputFocus", function (event) {
      _this.setState({
        isFocused: true
      });

      (0, _safeInvoke["default"])(_this.props.onFocus, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (event) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleRemoveTag", function (event) {
      // Using data attribute to simplify callback logic -- one handler for all children
      var index = Number(event.currentTarget.parentElement.getAttribute('data-tag-index'));

      _this.removeTagAtIndex(index);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "maybeRenderTag", function (tag, index) {
      if (!tag) {
        return null;
      }

      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tagProps = _this$props2.tagProps;
      var props = (0, _safeInvoke["default"])(tagProps, tag, index) || tagProps;
      return _react["default"].createElement(_Tag["default"], (0, _extends2["default"])({
        key: "".concat(tag, ":").concat(index),
        "data-tag-index": index,
        marginRight: (0, _scales.majorScale)(1),
        marginY: "6px",
        onRemove: disabled ? null : _this.handleRemoveTag,
        isRemovable: !disabled
      }, props), tag);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeTagAtIndex", function (index) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          onRemove = _this$props3.onRemove,
          values = _this$props3.values;
      (0, _safeInvoke["default"])(onRemove, values[index], index); // Remove item at index as a new array

      var newValues = values.filter(function (_, i) {
        return i !== index;
      });
      (0, _safeInvoke["default"])(onChange, newValues);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setRef", function (node) {
      _this.input = node;
      (0, _safeInvoke["default"])(_this.props.inputRef, node);
    });
    return _this;
  }

  (0, _createClass2["default"])(TagInput, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props4, ["addOnBlur", "className", "disabled", "height", "inputProps", "inputRef", "onAdd", "onChange", "onInputChange", "onRemove", "separator", "tagProps", "theme", "values"]);
      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          isFocused = _this$state.isFocused;
      var themedContainerClassName = theme.getTagInputClassName('default');
      var themedInputClassName = theme.getTextInputClassName('none');
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        "aria-disabled": disabled || undefined,
        "aria-activedescendant": isFocused ? this.id : undefined,
        borderRadius: borderRadius,
        className: (0, _classnames["default"])(themedContainerClassName, className),
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        paddingY: "2px"
      }, props, {
        onBlur: this.handleBlur
      }), values.map(this.maybeRenderTag), _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
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
}(_react["default"].Component);

TagInput.displayName = "TagInput";
(0, _defineProperty2["default"])(TagInput, "propTypes", {
  /** Whether or not the inputValue should be added to the tags when the input blurs. */
  addOnBlur: _propTypes["default"].bool,

  /** The class name to apply to the container component. */
  className: _propTypes["default"].string,

  /** Whether or not the input should be disabled. */
  disabled: _propTypes["default"].bool,

  /** The vertical size of the input */
  height: _propTypes["default"].number,

  /** Props to pass to the input component. Note that `ref` and `key` are not supported. See `inputRef`. */
  inputProps: _propTypes["default"].object,

  /**
   * Ref handler for the input element.
   * (input: HTMLInputElement | null) => void
   */
  inputRef: _propTypes["default"].func,

  /**
   * Callback invoked when new tags are added.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onAdd: _propTypes["default"].func,

  /**
   * Callback invoked when focus on the input blurs.
   * (event) => void
   */
  onBlur: _propTypes["default"].func,

  /**
   * Callback invoked when the tag values change.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onChange: _propTypes["default"].func,

  /**
   * Callback invoked when the input receives focus.
   * (event) => void
   */
  onFocus: _propTypes["default"].func,

  /**
   * Callback invoked when the value of the input is changed. Shorthand for `inputProps={{ onChange }}`.
   * (event) => void
   */
  onInputChange: _propTypes["default"].func,

  /**
   * Callback invoked when a tag is removed.
   * Receives value and index of removed tag.
   * (value: string | node, index: number) => void
   */
  onRemove: _propTypes["default"].func,

  /** Value or RegExp to split on pasted text or on enter keypress */
  separator: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(RegExp), _propTypes["default"].oneOf([false])]),

  /** Provide props to tag component (actually `Badge`, for now). */
  tagProps: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /** Controlled tag values. Each value is rendered inside a tag. */
  values: _propTypes["default"].arrayOf(_propTypes["default"].node)
});
(0, _defineProperty2["default"])(TagInput, "defaultProps", {
  addOnBlur: false,
  disabled: false,
  height: 32,
  separator: /[,\n\r]/,
  values: [],
  tagProps: {}
});

var _default = (0, _theme.withTheme)(TagInput);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWctaW5wdXQvc3JjL1RhZ0lucHV0LmpzIl0sIm5hbWVzIjpbImlucHV0SWQiLCJUYWdJbnB1dCIsImlucHV0VmFsdWUiLCJpc0ZvY3VzZWQiLCJ2YWx1ZSIsInByb3BzIiwib25BZGQiLCJvbkNoYW5nZSIsInZhbHVlcyIsIm5ld1ZhbHVlcyIsImdldFZhbHVlcyIsInNob3VsZENsZWFySW5wdXQiLCJjb25jYXQiLCJzZXRTdGF0ZSIsInNlcGFyYXRvciIsInNwbGl0IiwibWFwIiwidiIsInRyaW0iLCJmaWx0ZXIiLCJsZW5ndGgiLCJyZW1vdmVUYWdBdEluZGV4IiwiZXZlbnQiLCJjb250YWluZXIiLCJ0YXJnZXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImFkZE9uQmx1ciIsInN0YXRlIiwiYWRkVGFncyIsIm9uQmx1ciIsIm9uSW5wdXRDaGFuZ2UiLCJvbkZvY3VzIiwic2VsZWN0aW9uRW5kIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVCYWNrc3BhY2VUb1JlbW92ZSIsImluZGV4IiwiTnVtYmVyIiwiY3VycmVudFRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0YWciLCJkaXNhYmxlZCIsInRhZ1Byb3BzIiwiaGFuZGxlUmVtb3ZlVGFnIiwib25SZW1vdmUiLCJfIiwiaSIsIm5vZGUiLCJpbnB1dCIsImlucHV0UmVmIiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiaW5wdXRQcm9wcyIsInRoZW1lIiwidGhlbWVkQ29udGFpbmVyQ2xhc3NOYW1lIiwiZ2V0VGFnSW5wdXRDbGFzc05hbWUiLCJ0aGVtZWRJbnB1dENsYXNzTmFtZSIsImdldFRleHRJbnB1dENsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsInVuZGVmaW5lZCIsImlkIiwiTWF0aCIsInJvdW5kIiwiaGFuZGxlQmx1ciIsIm1heWJlUmVuZGVyVGFnIiwic2V0UmVmIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlS2V5RG93biIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsImZ1bmMiLCJvbmVPZlR5cGUiLCJpbnN0YW5jZU9mIiwiUmVnRXhwIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLE9BQU8sR0FBRyxDQUFkOztJQUVNQyxROzs7Ozs7Ozs7Ozs7Ozs7OEZBMkVJO0FBQ05DLE1BQUFBLFVBQVUsRUFBRSxFQUROO0FBRU5DLE1BQUFBLFNBQVMsRUFBRTtBQUZMLEs7OEdBS1NILE9BQU8sRTtnR0FFZCxZQUFnQjtBQUFBLFVBQWZJLEtBQWUsdUVBQVAsRUFBTztBQUFBLHdCQUNZLE1BQUtDLEtBRGpCO0FBQUEsVUFDaEJDLEtBRGdCLGVBQ2hCQSxLQURnQjtBQUFBLFVBQ1RDLFFBRFMsZUFDVEEsUUFEUztBQUFBLFVBQ0NDLE1BREQsZUFDQ0EsTUFERDs7QUFFeEIsVUFBTUMsU0FBUyxHQUFHLE1BQUtDLFNBQUwsQ0FBZU4sS0FBZixDQUFsQjs7QUFDQSxVQUFJTyxnQkFBZ0IsR0FBRyw0QkFBV0wsS0FBWCxFQUFrQkcsU0FBbEIsQ0FBdkI7O0FBRUEsVUFBSSxPQUFPRixRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDSSxRQUFBQSxnQkFBZ0IsR0FBR0EsZ0JBQWdCLElBQUlKLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDSSxNQUFQLENBQWNILFNBQWQsQ0FBRCxDQUEvQztBQUNEOztBQUVELFVBQUlFLGdCQUFnQixL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QUE1QjtBQTlEUyxDO2lDQURmbEQsUSxrQkFrRWtCO0FBQ3BCNEIsRUFBQUEsU0FBUyxFQUFFLEtBRFM7QUFFcEJnQixFQUFBQSxRQUFRLEVBQUUsS0FGVTtBQUdwQlUsRUFBQUEsTUFBTSxFQUFFLEVBSFk7QUFJcEJ6QyxFQUFBQSxTQUFTLEVBQUUsU0FKUztBQUtwQk4sRUFBQUEsTUFBTSxFQUFFLEVBTFk7QUFNcEJzQyxFQUFBQSxRQUFRLEVBQUU7QUFOVSxDOztlQWlNVCxzQkFBVTdDLFFBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG92ZXJ2aWV3IFRhZ0lucHV0IGFjY2VwdHMgbXVsdGlwbGUgdmFsdWVzIHRoYXQgY2FuIGJlIGluZGl2aWR1YWxseSByZW1vdmVkXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBtYWpvclNjYWxlIH0gZnJvbSAnLi4vLi4vc2NhbGVzJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IFRhZyBmcm9tICcuL1RhZydcblxubGV0IGlucHV0SWQgPSAxXG5cbmNsYXNzIFRhZ0lucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogV2hldGhlciBvciBub3QgdGhlIGlucHV0VmFsdWUgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSB0YWdzIHdoZW4gdGhlIGlucHV0IGJsdXJzLiAqL1xuICAgIGFkZE9uQmx1cjogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqIFRoZSBjbGFzcyBuYW1lIHRvIGFwcGx5IHRvIHRoZSBjb250YWluZXIgY29tcG9uZW50LiAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiogV2hldGhlciBvciBub3QgdGhlIGlucHV0IHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqIFRoZSB2ZXJ0aWNhbCBzaXplIG9mIHRoZSBpbnB1dCAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKiogUHJvcHMgdG8gcGFzcyB0byB0aGUgaW5wdXQgY29tcG9uZW50LiBOb3RlIHRoYXQgYHJlZmAgYW5kIGBrZXlgIGFyZSBub3Qgc3VwcG9ydGVkLiBTZWUgYGlucHV0UmVmYC4gKi9cbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIFJlZiBoYW5kbGVyIGZvciB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiAoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkXG4gICAgICovXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiBuZXcgdGFncyBhcmUgYWRkZWQuXG4gICAgICogUmV0dXJuaW5nIGBmYWxzZWAgd2lsbCBwcmV2ZW50IGNsZWFyaW5nIHRoZSBpbnB1dC5cbiAgICAgKiAodmFsdWVzOiBBcnJheSkgPT4gdm9pZCB8IGZhbHNlXG4gICAgICovXG4gICAgb25BZGQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiBmb2N1cyBvbiB0aGUgaW5wdXQgYmx1cnMuXG4gICAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAgICovXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIHRhZyB2YWx1ZXMgY2hhbmdlLlxuICAgICAqIFJldHVybmluZyBgZmFsc2VgIHdpbGwgcHJldmVudCBjbGVhcmluZyB0aGUgaW5wdXQuXG4gICAgICogKHZhbHVlczogQXJyYXkpID0+IHZvaWQgfCBmYWxzZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIGlucHV0IHJlY2VpdmVzIGZvY3VzLlxuICAgICAqIChldmVudCkgPT4gdm9pZFxuICAgICAqL1xuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGlzIGNoYW5nZWQuIFNob3J0aGFuZCBmb3IgYGlucHV0UHJvcHM9e3sgb25DaGFuZ2UgfX1gLlxuICAgICAqIChldmVudCkgPT4gdm9pZFxuICAgICAqL1xuICAgIG9uSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiBhIHRhZyBpcyByZW1vdmVkLlxuICAgICAqIFJlY2VpdmVzIHZhbHVlIGFuZCBpbmRleCBvZiByZW1vdmVkIHRhZy5cbiAgICAgKiAodmFsdWU6IHN0cmluZyB8IG5vZGUsIGluZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgICAgKi9cbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqIFZhbHVlIG9yIFJlZ0V4cCB0byBzcGxpdCBvbiBwYXN0ZWQgdGV4dCBvciBvbiBlbnRlciBrZXlwcmVzcyAqL1xuICAgIHNlcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVnRXhwKSxcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgIF0pLFxuICAgIC8qKiBQcm92aWRlIHByb3BzIHRvIHRhZyBjb21wb25lbnQgKGFjdHVhbGx5IGBCYWRnZWAsIGZvciBub3cpLiAqL1xuICAgIHRhZ1Byb3BzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAvKiogQ29udHJvbGxlZCB0YWcgdmFsdWVzLiBFYWNoIHZhbHVlIGlzIHJlbmRlcmVkIGluc2lkZSBhIHRhZy4gKi9cbiAgICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhZGRPbkJsdXI6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHNlcGFyYXRvcjogL1ssXFxuXFxyXS8sXG4gICAgdmFsdWVzOiBbXSxcbiAgICB0YWdQcm9wczoge31cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgfVxuXG4gIGlkID0gYFRhZ0lucHV0LSR7aW5wdXRJZCsrfWBcblxuICBhZGRUYWdzID0gKHZhbHVlID0gJycpID0+IHtcbiAgICBjb25zdCB7IG9uQWRkLCBvbkNoYW5nZSwgdmFsdWVzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbmV3VmFsdWVzID0gdGhpcy5nZXRWYWx1ZXModmFsdWUpXG4gICAgbGV0IHNob3VsZENsZWFySW5wdXQgPSBzYWZlSW52b2tlKG9uQWRkLCBuZXdWYWx1ZXMpXG5cbiAgICBpZiAodHlwZW9mIG9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzaG91bGRDbGVhcklucHV0ID0gc2hvdWxkQ2xlYXJJbnB1dCB8fCBvbkNoYW5nZSh2YWx1ZXMuY29uY2F0KG5ld1ZhbHVlcykpXG4gICAgfVxuXG4gICAgaWYgKHNob3VsZENsZWFySW5wdXQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogJycgfSlcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZXMgPSAoaW5wdXRWYWx1ZSA9ICcnKSA9PiB7XG4gICAgY29uc3QgeyBzZXBhcmF0b3IgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiBzZXBhcmF0b3JcbiAgICAgID8gaW5wdXRWYWx1ZVxuICAgICAgICAgIC5zcGxpdChzZXBhcmF0b3IpXG4gICAgICAgICAgLm1hcCh2ID0+IHYudHJpbSgpKVxuICAgICAgICAgIC5maWx0ZXIodiA9PiB2Lmxlbmd0aCA+IDApXG4gICAgICA6IFtpbnB1dFZhbHVlXVxuICB9XG5cbiAgaGFuZGxlQmFja3NwYWNlVG9SZW1vdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIERlbGV0ZSBsYXN0IGl0ZW0gaW4gdmFsdWVzXG4gICAgdGhpcy5yZW1vdmVUYWdBdEluZGV4KHZhbHVlcy5sZW5ndGggLSAxKVxuICB9XG5cbiAgaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBldmVudC50YXJnZXRcblxuICAgIC8vIFVzZSByYWYgc28gdGhhdCB0aGUgZG9tIGhhcyB0aW1lIHRvIHVwZGF0ZSBgYWN0aXZlRWxlbWVudGBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKCFjb250YWluZXIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWRkT25CbHVyICYmIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkge1xuICAgICAgICAgIHRoaXMuYWRkVGFncyh0aGlzLnN0YXRlLmlucHV0VmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25CbHVyLCBldmVudClcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25JbnB1dENoYW5nZSwgZXZlbnQpXG4gIH1cblxuICBoYW5kbGVJbnB1dEZvY3VzID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IHRydWUgfSlcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25Gb2N1cywgZXZlbnQpXG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uRW5kLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAvLyBQcmV2ZW50IEVudGVyIGtleXByZXNzZXMgZnJvbSBzdWJtaXR0aW5nIGZvcm1zIHNpbmNlIHRoZXkgaGF2ZSBzcGVjaWFsIHBvd2VycyBpbnNpZGUgVGFnSW5wdXRcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuYWRkVGFncyh2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgc2VsZWN0aW9uRW5kID09PSAwKSB7XG4gICAgICB0aGlzLmhhbmRsZUJhY2tzcGFjZVRvUmVtb3ZlKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlbW92ZVRhZyA9IGV2ZW50ID0+IHtcbiAgICAvLyBVc2luZyBkYXRhIGF0dHJpYnV0ZSB0byBzaW1wbGlmeSBjYWxsYmFjayBsb2dpYyAtLSBvbmUgaGFuZGxlciBmb3IgYWxsIGNoaWxkcmVuXG4gICAgY29uc3QgaW5kZXggPSBOdW1iZXIoXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhZy1pbmRleCcpXG4gICAgKVxuICAgIHRoaXMucmVtb3ZlVGFnQXRJbmRleChpbmRleClcbiAgfVxuXG4gIG1heWJlUmVuZGVyVGFnID0gKHRhZywgaW5kZXgpID0+IHtcbiAgICBpZiAoIXRhZykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB7IGRpc2FibGVkLCB0YWdQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHByb3BzID0gc2FmZUludm9rZSh0YWdQcm9wcywgdGFnLCBpbmRleCkgfHwgdGFnUHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFnXG4gICAgICAgIGtleT17YCR7dGFnfToke2luZGV4fWB9XG4gICAgICAgIGRhdGEtdGFnLWluZGV4PXtpbmRleH1cbiAgICAgICAgbWFyZ2luUmlnaHQ9e21ham9yU2NhbGUoMSl9XG4gICAgICAgIG1hcmdpblk9XCI2cHhcIlxuICAgICAgICBvblJlbW92ZT17ZGlzYWJsZWQgPyBudWxsIDogdGhpcy5oYW5kbGVSZW1vdmVUYWd9XG4gICAgICAgIGlzUmVtb3ZhYmxlPXshZGlzYWJsZWR9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge3RhZ31cbiAgICAgIDwvVGFnPlxuICAgIClcbiAgfVxuXG4gIHJlbW92ZVRhZ0F0SW5kZXggPSBpbmRleCA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25SZW1vdmUsIHZhbHVlcyB9ID0gdGhpcy5wcm9wc1xuICAgIHNhZmVJbnZva2Uob25SZW1vdmUsIHZhbHVlc1tpbmRleF0sIGluZGV4KVxuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gYXQgaW5kZXggYXMgYSBuZXcgYXJyYXlcbiAgICBjb25zdCBuZXdWYWx1ZXMgPSB2YWx1ZXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleClcbiAgICBzYWZlSW52b2tlKG9uQ2hhbmdlLCBuZXdWYWx1ZXMpXG4gIH1cblxuICBzZXRSZWYgPSBub2RlID0+IHtcbiAgICB0aGlzLmlucHV0ID0gbm9kZVxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5pbnB1dFJlZiwgbm9kZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhZGRPbkJsdXIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIG9uQWRkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbklucHV0Q2hhbmdlLFxuICAgICAgb25SZW1vdmUsXG4gICAgICBzZXBhcmF0b3IsXG4gICAgICB0YWdQcm9wcyxcbiAgICAgIHRoZW1lLFxuICAgICAgdmFsdWVzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBpbnB1dFZhbHVlLCBpc0ZvY3VzZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IHRoZW1lZENvbnRhaW5lckNsYXNzTmFtZSA9IHRoZW1lLmdldFRhZ0lucHV0Q2xhc3NOYW1lKCdkZWZhdWx0JylcbiAgICBjb25zdCB0aGVtZWRJbnB1dENsYXNzTmFtZSA9IHRoZW1lLmdldFRleHRJbnB1dENsYXNzTmFtZSgnbm9uZScpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgYXJpYS1kaXNhYmxlZD17ZGlzYWJsZWQgfHwgdW5kZWZpbmVkfVxuICAgICAgICBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9e2lzRm9jdXNlZCA/IHRoaXMuaWQgOiB1bmRlZmluZWR9XG4gICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENvbnRhaW5lckNsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIHBhZGRpbmdZPVwiMnB4XCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgID5cbiAgICAgICAge3ZhbHVlcy5tYXAodGhpcy5tYXliZVJlbmRlclRhZyl9XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgaWQ9e3RoaXMuaWR9XG4gICAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ211dGVkJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgZmxleEdyb3c9XCIxXCJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIDR9XG4gICAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkSW5wdXRDbGFzc05hbWV9XG4gICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRhZ0lucHV0KVxuIl19
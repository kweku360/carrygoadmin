import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout, dimensions } from 'ui-box';
import { Text } from '../../typography';
import { withTheme } from '../../theme';

var CheckIcon = function CheckIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, ["fill"]);

  return React.createElement("svg", _extends({
    width: 10,
    height: 7,
    viewBox: "0 0 10 7"
  }, props), React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: PropTypes.string
};

var MinusIcon = function MinusIcon(_ref2) {
  var _ref2$fill = _ref2.fill,
      fill = _ref2$fill === void 0 ? 'currentColor' : _ref2$fill,
      props = _objectWithoutProperties(_ref2, ["fill"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"
  }));
};

MinusIcon.displayName = "MinusIcon";
MinusIcon.propTypes = {
  fill: PropTypes.string
};

var Checkbox = /*#__PURE__*/function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleInnerRef", function (el) {
      if (el) {
        el.indeterminate = _this.props.indeterminate;
      }

      _this.props.innerRef(el);
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          isInvalid = _this$props.isInvalid,
          checked = _this$props.checked,
          onChange = _this$props.onChange,
          value = _this$props.value,
          indeterminate = _this$props.indeterminate,
          innerRef = _this$props.innerRef,
          props = _objectWithoutProperties(_this$props, ["theme", "id", "name", "label", "appearance", "disabled", "isInvalid", "checked", "onChange", "value", "indeterminate", "innerRef"]);

      var themedClassName = theme.getCheckboxClassName(appearance);
      return React.createElement(Box, _extends({
        is: "label",
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: "relative",
        display: "flex",
        marginY: 16
      }, props), React.createElement(Box, {
        className: themedClassName,
        is: "input",
        id: id,
        type: "checkbox",
        name: name,
        value: value,
        checked: checked || indeterminate,
        onChange: onChange,
        disabled: disabled,
        "aria-invalid": isInvalid,
        innerRef: this.handleInnerRef
      }), React.createElement(Box, {
        boxSizing: "border-box",
        borderRadius: 3,
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16
      }, indeterminate ? React.createElement(MinusIcon, null) : React.createElement(CheckIcon, null)), label && React.createElement(Text, {
        marginLeft: 8,
        size: 300,
        color: disabled ? 'muted' : 'default'
      }, label));
    }
  }]);

  return Checkbox;
}(PureComponent);

Checkbox.displayName = "Checkbox";

_defineProperty(Checkbox, "propTypes", _objectSpread({}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {}, dimensions.propTypes, {
  /**
   * The id attribute of the checkbox.
   */
  id: PropTypes.string,

  /**
   * The id attribute of the checkbox.
   */
  name: PropTypes.string,

  /**
   * Label of the checkbox.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the checkbox.
   */
  value: PropTypes.string,

  /**
   * The checked attribute of the checkbox.
   */
  checked: PropTypes.bool,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: PropTypes.bool,

  /**
   * Function that returns the ref of the checkbox.
   */
  innerRef: PropTypes.func,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Checkbox, "defaultProps", {
  checked: false,
  indeterminate: false,
  innerRef: function innerRef() {},
  onChange: function onChange() {},
  appearance: 'default'
});

export default withTheme(Checkbox);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jaGVja2JveC9zcmMvQ2hlY2tib3guanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94Iiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIlRleHQiLCJ3aXRoVGhlbWUiLCJDaGVja0ljb24iLCJmaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJNaW51c0ljb24iLCJDaGVja2JveCIsImVsIiwiaW5kZXRlcm1pbmF0ZSIsImlubmVyUmVmIiwidGhlbWUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsImFwcGVhcmFuY2UiLCJkaXNhYmxlZCIsImlzSW52YWxpZCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsInZhbHVlIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0Q2hlY2tib3hDbGFzc05hbWUiLCJoYW5kbGVJbm5lclJlZiIsIm5vZGUiLCJib29sIiwiZnVuYyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsSUFBY0MsT0FBZCxFQUF1QkMsUUFBdkIsRUFBaUNDLE1BQWpDLEVBQXlDQyxVQUF6QyxRQUEyRCxRQUEzRDtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLHVCQUFHQyxJQUFIO0FBQUEsTUFBR0EsSUFBSCwwQkFBVSxjQUFWO0FBQUEsTUFBNkJDLEtBQTdCOztBQUFBLFNBQ2hCO0FBQUssSUFBQSxLQUFLLEVBQUUsRUFBWjtBQUFnQixJQUFBLE1BQU0sRUFBRSxDQUF4QjtBQUEyQixJQUFBLE9BQU8sRUFBQztBQUFuQyxLQUFr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LEk7O0FBRXJCOzs7O0FBSUFWLEVBQUFBLFVBQVUsRUFBRXRCLFNBQVMsQ0FBQ1ksTTs7QUFFdEI7OztBQUdBTSxFQUFBQSxLQUFLLEVBQUVsQixTQUFTLENBQUNrQyxNQUFWLENBQWlCQzs7O2dCQXZFdEJyQixRLGtCQTBFa0I7QUFDcEJXLEVBQUFBLE9BQU8sRUFBRSxLQURXO0FBRXBCVCxFQUFBQSxhQUFhLEVBQUUsS0FGSztBQUdwQkMsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FIRTtBQUlwQlMsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FKRTtBQUtwQkosRUFBQUEsVUFBVSxFQUFFO0FBTFEsQzs7QUFvRnhCLGVBQWVmLFNBQVMsQ0FBQ08sUUFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQsIGRpbWVuc2lvbnMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBDaGVja0ljb24gPSAoeyBmaWxsID0gJ2N1cnJlbnRDb2xvcicsIC4uLnByb3BzIH0pID0+IChcbiAgPHN2ZyB3aWR0aD17MTB9IGhlaWdodD17N30gdmlld0JveD1cIjAgMCAxMCA3XCIgey4uLnByb3BzfT5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTQgNC41ODZMMS43MDcgMi4yOTNBMSAxIDAgMSAwIC4yOTMgMy43MDdsMyAzYS45OTcuOTk3IDAgMCAwIDEuNDE0IDBsNS01QTEgMSAwIDEgMCA4LjI5My4yOTNMNCA0LjU4NnpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKVxuXG5DaGVja0ljb24ucHJvcFR5cGVzID0ge1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmNvbnN0IE1pbnVzSWNvbiA9ICh7IGZpbGwgPSAnY3VycmVudENvbG9yJywgLi4ucHJvcHMgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gdmlld0JveD1cIjAgMCAxNiAxNlwiIHsuLi5wcm9wc30+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgZD1cIk0xMSA3SDVjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFoNmMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMXpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKVxuXG5NaW51c0ljb24ucHJvcFR5cGVzID0ge1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjaGVja2VkIGF0dHJpYnV0ZSBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTdGF0ZSBpbiBhZGRpdGlvbiB0byBcImNoZWNrZWRcIiBhbmQgXCJ1bmNoZWNrZWRcIi5cbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjaGVja2JveCBkaXNwbGF5cyBhIFwibWludXNcIiBpY29uLlxuICAgICAqL1xuICAgIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSByZWYgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2hlY2tib3ggaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYXJpYS1pbnZhbGlkIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgICAqIFVzZWQgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gICAgaW5uZXJSZWY6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCdcbiAgfVxuXG4gIGhhbmRsZUlubmVyUmVmID0gZWwgPT4ge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IHRoaXMucHJvcHMuaW5kZXRlcm1pbmF0ZVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMuaW5uZXJSZWYoZWwpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgY2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICBpbmRldGVybWluYXRlLFxuICAgICAgaW5uZXJSZWYsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRDaGVja2JveENsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgIGN1cnNvcj17ZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBtYXJnaW5ZPXsxNn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZCB8fCBpbmRldGVybWluYXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgICAgaW5uZXJSZWY9e3RoaXMuaGFuZGxlSW5uZXJSZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXg9XCJub25lXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgID5cbiAgICAgICAgICB7aW5kZXRlcm1pbmF0ZSA/IDxNaW51c0ljb24gLz4gOiA8Q2hlY2tJY29uIC8+fVxuICAgICAgICA8L0JveD5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgbWFyZ2luTGVmdD17OH1cbiAgICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/ICdtdXRlZCcgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoQ2hlY2tib3gpXG4iXX0=
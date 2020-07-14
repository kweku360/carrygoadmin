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

import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout } from 'ui-box';
import { withTheme } from '../../theme';
var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var handleStyleClass = css({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString();
var iconContainerStyleClass = css({
  transition: "all 500ms ".concat(animationEasing.spring),
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  '&[data-checked="true"]': {
    opacity: 1,
    transform: 'scale(1)'
  },
  '> svg': {
    transition: "all 500ms ".concat(animationEasing.spring),
    transform: 'scale(0)'
  },
  '&[data-checked="true"] > svg': {
    transform: 'scale(1)'
  }
}).toString();
var handleContainerStyleClass = css({
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  '&[data-checked="true"]': {
    transform: 'translateX(50%)'
  }
}).toString();

var CheckIcon = function CheckIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, ["size", "fill"]);

  return React.createElement("svg", _extends({
    width: 10,
    height: size,
    viewBox: "0 0 10 7"
  }, props), React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
};

var isControlled = function isControlled(component) {
  return {}.hasOwnProperty.call(component.props, 'checked');
};

var Switch = /*#__PURE__*/function (_PureComponent) {
  _inherits(Switch, _PureComponent);

  var _super = _createSuper(Switch);

  function Switch(props, context) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      if (isControlled(_assertThisInitialized(_this))) {
        _this.props.onChange(value);
      } else {
        _this.setState(function (_ref2) {
          var checked = _ref2.checked;
          return {
            checked: !checked
          };
        });

        _this.props.onChange(value);
      }
    });

    _this.state = {
      checked: props.checked || props.defaultChecked || false
    };
    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          height = _this$props.height,
          checkedProps = _this$props.checked,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          hasCheckIcon = _this$props.hasCheckIcon,
          defaultChecked = _this$props.defaultChecked,
          props = _objectWithoutProperties(_this$props, ["theme", "id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"]);

      var checked = isControlled(this) ? checkedProps : this.state.checked;
      var themedClassName = theme.getSwitchClassName(appearance);
      return React.createElement(Box, _extends({
        is: "label",
        display: "block",
        width: height * 2,
        position: "relative"
      }, props), React.createElement(Box, {
        is: "input",
        className: themedClassName,
        id: id,
        name: name,
        type: "checkbox",
        checked: checked,
        disabled: disabled,
        defaultChecked: defaultChecked,
        onChange: this.handleChange
      }), React.createElement(Box, {
        onClick: this.handleClick,
        height: height,
        width: height * 2
      }, React.createElement(Box, {
        height: height,
        width: height,
        "data-checked": checked,
        className: iconContainerStyleClass
      }, hasCheckIcon && React.createElement(CheckIcon, {
        size: height / 2 - 3
      })), React.createElement(Box, {
        width: height * 2,
        display: "flex",
        "data-checked": checked,
        className: handleContainerStyleClass
      }, React.createElement(Box, {
        flex: 1,
        padding: 2
      }, React.createElement(Box, {
        width: height - 4,
        height: height - 4,
        className: handleStyleClass
      })))));
    }
  }]);

  return Switch;
}(PureComponent);

Switch.displayName = "Switch";

_defineProperty(Switch, "propTypes", _objectSpread({}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {
  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * The height of the switch.
   */
  height: PropTypes.number,

  /**
   * When true, the switch is checked (on).
   */
  checked: PropTypes.bool,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the switch is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the switch is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: PropTypes.bool,

  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: PropTypes.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Switch, "defaultProps", {
  height: 16,
  onChange: function onChange() {},
  appearance: 'default',
  hasCheckIcon: true,
  disabled: false
});

export default withTheme(Switch);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zd2l0Y2gvc3JjL1N3aXRjaC5qcyJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJ3aXRoVGhlbWUiLCJhbmltYXRpb25FYXNpbmciLCJzcHJpbmciLCJoYW5kbGVTdHlsZUNsYXNzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidG9TdHJpbmciLCJpY29uQ29udGFpbmVyU3R5bGVDbGFzcyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdMZWZ0IiwidHJhbnNmb3JtIiwiaGFuZGxlQ29udGFpbmVyU3R5bGVDbGFzcyIsIkNoZWNrSWNvbiIsInNpemUiLCJmaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJpc0NvbnRyb2xsZWQiLCJjb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTd2l0Y2giLCJjb250ZXh0IiwidmFsdWUiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiY2hlY2tlZCIsInN0YXRlIiwiZGVmYXVsdENoZWNrZWQiLCJ0aGVtZSIsImlkIiwibmFtZSIsImhlaWdodCIsImNoZWNrZWRQcm9wcyIsImRpc2FibGVkIiwiYXBwZWFyYW5jZSIsImhhc0NoZWNrSWNvbiIsInRoZW1lZENsYXNzTmFtZSIsImdldFN3aXRjaENsYXNzTmFtZSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUNsaWNrIiwiYm9vbCIsImZ1bmMiLCJpc0ludmFsaWQiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFP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bSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIHNwcmluZzogYGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjE3NSlgXG59XG5cbmNvbnN0IGhhbmRsZVN0eWxlQ2xhc3MgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgYm9yZGVyUmFkaXVzOiA5OTk5XG59KS50b1N0cmluZygpXG5cbmNvbnN0IGljb25Db250YWluZXJTdHlsZUNsYXNzID0gY3NzKHtcbiAgdHJhbnNpdGlvbjogYGFsbCA1MDBtcyAke2FuaW1hdGlvbkVhc2luZy5zcHJpbmd9YCxcbiAgb3BhY2l0eTogMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgcGFkZGluZ0xlZnQ6IDQsXG4gICcmW2RhdGEtY2hlY2tlZD1cInRydWVcIl0nOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfSxcbiAgJz4gc3ZnJzoge1xuICAgIHRyYW5zaXRpb246IGBhbGwgNTAwbXMgJHthbmltYXRpb25FYXNpbmcuc3ByaW5nfWAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknXG4gIH0sXG4gICcmW2RhdGEtY2hlY2tlZD1cInRydWVcIl0gPiBzdmcnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH1cbn0pLnRvU3RyaW5nKClcblxuY29uc3QgaGFuZGxlQ29udGFpbmVyU3R5bGVDbGFzcyA9IGNzcyh7XG4gIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQnLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICcmW2RhdGEtY2hlY2tlZD1cInRydWVcIl0nOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1MCUpJ1xuICB9XG59KS50b1N0cmluZygpXG5cbmNvbnN0IENoZWNrSWNvbiA9ICh7IHNpemUsIGZpbGwgPSAnY3VycmVudENvbG9yJywgLi4ucHJvcHMgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPXsxMH0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiMCAwIDEwIDdcIiB7Li4ucHJvcHN9PlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNNCA0LjU4NkwxLjcwNyAyLjI5M0ExIDEgMCAxIDAgLjI5MyAzLjcwN2wzIDNhLjk5Ny45OTcgMCAwIDAgMS40MTQgMGw1LTVBMSAxIDAgMSAwIDguMjkzLjI5M0w0IDQuNTg2elwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbkNoZWNrSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuY29uc3QgaXNDb250cm9sbGVkID0gY29tcG9uZW50ID0+IHtcbiAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwoY29tcG9uZW50LnByb3BzLCAnY2hlY2tlZCcpXG59XG5cbmNsYXNzIFN3aXRjaCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgc3dpdGNoLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBpcyBjaGVja2VkIChvbikuXG4gICAgICovXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgaW52YWxpZC5cbiAgICAgKi9cbiAgICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNoZWNrYm94LlxuICAgICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgY29tZXMgd2l0aCBhIGRlZmF1bHQgc3R5bGUuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGhhcyBhIGNoZWNrIGljb24uXG4gICAgICovXG4gICAgaGFzQ2hlY2tJY29uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBpcyB0cnVlIGJ5IGRlZmF1bHQuXG4gICAgICogVGhpcyBpcyBmb3IgdW5jb250cm9sbGVkIHVzYWdlLlxuICAgICAqL1xuICAgIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDE2LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgaGFzQ2hlY2tJY29uOiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogcHJvcHMuY2hlY2tlZCB8fCBwcm9wcy5kZWZhdWx0Q2hlY2tlZCB8fCBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHtcbiAgICBpZiAoaXNDb250cm9sbGVkKHRoaXMpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKCh7IGNoZWNrZWQgfSkgPT4gKHtcbiAgICAgICAgY2hlY2tlZDogIWNoZWNrZWRcbiAgICAgIH0pKVxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGNoZWNrZWQ6IGNoZWNrZWRQcm9wcyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaGFzQ2hlY2tJY29uLFxuICAgICAgZGVmYXVsdENoZWNrZWQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBjaGVja2VkID0gaXNDb250cm9sbGVkKHRoaXMpID8gY2hlY2tlZFByb3BzIDogdGhpcy5zdGF0ZS5jaGVja2VkXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0U3dpdGNoQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgd2lkdGg9e2hlaWdodCAqIDJ9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtkZWZhdWx0Q2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXtoZWlnaHQgKiAyfT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIHdpZHRoPXtoZWlnaHR9XG4gICAgICAgICAgICBkYXRhLWNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ljb25Db250YWluZXJTdHlsZUNsYXNzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoYXNDaGVja0ljb24gJiYgPENoZWNrSWNvbiBzaXplPXtoZWlnaHQgLyAyIC0gM30gLz59XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgd2lkdGg9e2hlaWdodCAqIDJ9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBkYXRhLWNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2hhbmRsZUNvbnRhaW5lclN0eWxlQ2xhc3N9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBmbGV4PXsxfSBwYWRkaW5nPXsyfT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPXtoZWlnaHQgLSA0fVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IC0gNH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2hhbmRsZVN0eWxlQ2xhc3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFN3aXRjaClcbiJdfQ==
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var handleStyleClass = (0, _glamor.css)({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString();
var iconContainerStyleClass = (0, _glamor.css)({
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
var handleContainerStyleClass = (0, _glamor.css)({
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
      props = (0, _objectWithoutProperties2["default"])(_ref, ["size", "fill"]);
  return _react["default"].createElement("svg", (0, _extends2["default"])({
    width: 10,
    height: size,
    viewBox: "0 0 10 7"
  }, props), _react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: _propTypes["default"].string,
  size: _propTypes["default"].number
};

var isControlled = function isControlled(component) {
  return {}.hasOwnProperty.call(component.props, 'checked');
};

var Switch = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Switch, _PureComponent);

  var _super = _createSuper(Switch);

  function Switch(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Switch);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (value) {
      if (isControlled((0, _assertThisInitialized2["default"])(_this))) {
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

  (0, _createClass2["default"])(Switch, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"]);
      var checked = isControlled(this) ? checkedProps : this.state.checked;
      var themedClassName = theme.getSwitchClassName(appearance);
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "label",
        display: "block",
        width: height * 2,
        position: "relative"
      }, props), _react["default"].createElement(_uiBox["default"], {
        is: "input",
        className: themedClassName,
        id: id,
        name: name,
        type: "checkbox",
        checked: checked,
        disabled: disabled,
        defaultChecked: defaultChecked,
        onChange: this.handleChange
      }), _react["default"].createElement(_uiBox["default"], {
        onClick: this.handleClick,
        height: height,
        width: height * 2
      }, _react["default"].createElement(_uiBox["default"], {
        height: height,
        width: height,
        "data-checked": checked,
        className: iconContainerStyleClass
      }, hasCheckIcon && _react["default"].createElement(CheckIcon, {
        size: height / 2 - 3
      })), _react["default"].createElement(_uiBox["default"], {
        width: height * 2,
        display: "flex",
        "data-checked": checked,
        className: handleContainerStyleClass
      }, _react["default"].createElement(_uiBox["default"], {
        flex: 1,
        padding: 2
      }, _react["default"].createElement(_uiBox["default"], {
        width: height - 4,
        height: height - 4,
        className: handleStyleClass
      })))));
    }
  }]);
  return Switch;
}(_react.PureComponent);

Switch.displayName = "Switch";
(0, _defineProperty2["default"])(Switch, "propTypes", _objectSpread({}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {
  /**
   * The id attribute of the radio.
   */
  id: _propTypes["default"].string,

  /**
   * The name attribute of the radio.
   */
  name: _propTypes["default"].string,

  /**
   * The value attribute of the radio.
   */
  value: _propTypes["default"].string,

  /**
   * The height of the switch.
   */
  height: _propTypes["default"].number,

  /**
   * When true, the switch is checked (on).
   */
  checked: _propTypes["default"].bool,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the switch is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, the switch is invalid.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: _propTypes["default"].bool,

  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: _propTypes["default"].bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Switch, "defaultProps", {
  height: 16,
  onChange: function onChange() {},
  appearance: 'default',
  hasCheckIcon: true,
  disabled: false
});

var _default = (0, _theme.withTheme)(Switch);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zd2l0Y2gvc3JjL1N3aXRjaC5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJzcHJpbmciLCJoYW5kbGVTdHlsZUNsYXNzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidG9TdHJpbmciLCJpY29uQ29udGFpbmVyU3R5bGVDbGFzcyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZGlzcGxheSIsInBvc2l0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2Zvcm0iLCJoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzIiwiQ2hlY2tJY29uIiwic2l6ZSIsImZpbGwiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImlzQ29udHJvbGxlZCIsImNvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN3aXRjaCIsImNvbnRleHQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwic2V0U3RhdGUiLCJjaGVja2VkIiwic3RhdGUiLCJkZWZhdWx0Q2hlY2tlZCIsInRoZW1lIiwiaWQiLCJuYW1lIiwiaGVpZ2h0IiwiY2hlY2tlZFByb3BzIiwiZGlzYWJsZWQiLCJhcHBlYXJhbmNlIiwiaGFzQ2hlY2tJY29uIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0U3dpdGNoQ2xhc3NOYW1lIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2xpY2siLCJQdXJlQ29tcG9uZW50Iiwic3BhY2luZyIsImxheW91dCIsImJvb2wiLCJmdW5jIiwiaXNJbnZhbGlkIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsTUFBTTtBQURnQixDQUF4QjtBQUlBLElBQU1D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RWxCOzs7QUFHQVUsRUFBQUEsT0FBTyxFQUFFWixzQkFBVThCLEk7O0FBRW5COzs7QUFHQXBCLEVBQUFBLFFBQVEsRUFBRVYsc0JBQVUrQixJOztBQUVwQjs7O0FBR0FYLEVBQUFBLFFBQVEsRUFBRXBCLHNCQUFVOEIsSTs7QUFFcEI7OztBQUdBRSxFQUFBQSxTQUFTLEVBQUVoQyxzQkFBVThCLEk7O0FBRXJCOzs7O0FBSUFULEVBQUFBLFVBQVUsRUFBRXJCLHNCQUFVQyxNQUFWLENBQWlCZ0MsVTs7QUFFN0I7OztBQUdBWCxFQUFBQSxZQUFZLEVBQUV0QixzQkFBVThCLEk7O0FBRXhCOzs7O0FBSUFoQixFQUFBQSxjQUFjLEVBQUVkLHNCQUFVOEIsSTs7QUFFMUI7OztBQUdBZixFQUFBQSxLQUFLLEVBQUVmLHNCQUFVa0MsTUFBVixDQUFpQkQ7O2lDQXJFdEIxQixNLGtCQXdFa0I7QUFDcEJXLEVBQUFBLE1BQU0sRUFBRSxFQURZO0FBRXBCUixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUZFO0FBR3BCVyxFQUFBQSxVQUFVLEVBQUUsU0FIUTtBQUlwQkMsRUFBQUEsWUFBWSxFQUFFLElBSk07QUFLcEJGLEVBQUFBLFFBQVEsRUFBRTtBQUxVLEM7O2VBNkZULHNCQUFVYixNQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgaGFuZGxlU3R5bGVDbGFzcyA9IGNzcyh7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXJSYWRpdXM6IDk5OTlcbn0pLnRvU3RyaW5nKClcblxuY29uc3QgaWNvbkNvbnRhaW5lclN0eWxlQ2xhc3MgPSBjc3Moe1xuICB0cmFuc2l0aW9uOiBgYWxsIDUwMG1zICR7YW5pbWF0aW9uRWFzaW5nLnNwcmluZ31gLFxuICBvcGFjaXR5OiAwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBwYWRkaW5nTGVmdDogNCxcbiAgJyZbZGF0YS1jaGVja2VkPVwidHJ1ZVwiXSc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9LFxuICAnPiBzdmcnOiB7XG4gICAgdHJhbnNpdGlvbjogYGFsbCA1MDBtcyAke2FuaW1hdGlvbkVhc2luZy5zcHJpbmd9YCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgfSxcbiAgJyZbZGF0YS1jaGVja2VkPVwidHJ1ZVwiXSA+IHN2Zyc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzID0gY3NzKHtcbiAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dCcsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgJyZbZGF0YS1jaGVja2VkPVwidHJ1ZVwiXSc6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUwJSknXG4gIH1cbn0pLnRvU3RyaW5nKClcblxuY29uc3QgQ2hlY2tJY29uID0gKHsgc2l6ZSwgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9ezEwfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMTAgN1wiIHsuLi5wcm9wc30+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgZD1cIk00IDQuNTg2TDEuNzA3IDIuMjkzQTEgMSAwIDEgMCAuMjkzIDMuNzA3bDMgM2EuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDUtNUExIDEgMCAxIDAgOC4yOTMuMjkzTDQgNC41ODZ6XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuQ2hlY2tJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5jb25zdCBpc0NvbnRyb2xsZWQgPSBjb21wb25lbnQgPT4ge1xuICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbChjb21wb25lbnQucHJvcHMsICdjaGVja2VkJylcbn1cblxuY2xhc3MgU3dpdGNoIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBzd2l0Y2guXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIGNoZWNrZWQgKG9uKS5cbiAgICAgKi9cbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY2hlY2tib3guXG4gICAgICogVGhlIGRlZmF1bHQgdGhlbWUgb25seSBjb21lcyB3aXRoIGEgZGVmYXVsdCBzdHlsZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaGFzIGEgY2hlY2sgaWNvbi5cbiAgICAgKi9cbiAgICBoYXNDaGVja0ljb246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIHRydWUgYnkgZGVmYXVsdC5cbiAgICAgKiBUaGlzIGlzIGZvciB1bmNvbnRyb2xsZWQgdXNhZ2UuXG4gICAgICovXG4gICAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogMTYsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoYXNDaGVja0ljb246IHRydWUsXG4gICAgZGlzYWJsZWQ6IGZhbHNlXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5jaGVja2VkIHx8IHByb3BzLmRlZmF1bHRDaGVja2VkIHx8IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gdmFsdWUgPT4ge1xuICAgIGlmIChpc0NvbnRyb2xsZWQodGhpcykpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHsgY2hlY2tlZCB9KSA9PiAoe1xuICAgICAgICBjaGVja2VkOiAhY2hlY2tlZFxuICAgICAgfSkpXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2hlY2tlZDogY2hlY2tlZFByb3BzLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBoYXNDaGVja0ljb24sXG4gICAgICBkZWZhdWx0Q2hlY2tlZCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGNoZWNrZWQgPSBpc0NvbnRyb2xsZWQodGhpcykgPyBjaGVja2VkUHJvcHMgOiB0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRTd2l0Y2hDbGFzc05hbWUoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwibGFiZWxcIlxuICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICB3aWR0aD17aGVpZ2h0ICogMn1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2RlZmF1bHRDaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e2hlaWdodCAqIDJ9PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgICAgIGRhdGEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aWNvbkNvbnRhaW5lclN0eWxlQ2xhc3N9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hhc0NoZWNrSWNvbiAmJiA8Q2hlY2tJY29uIHNpemU9e2hlaWdodCAvIDIgLSAzfSAvPn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICB3aWR0aD17aGVpZ2h0ICogMn1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGRhdGEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aGFuZGxlQ29udGFpbmVyU3R5bGVDbGFzc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGZsZXg9ezF9IHBhZGRpbmc9ezJ9PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9e2hlaWdodCAtIDR9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHQgLSA0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aGFuZGxlU3R5bGVDbGFzc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoU3dpdGNoKVxuIl19
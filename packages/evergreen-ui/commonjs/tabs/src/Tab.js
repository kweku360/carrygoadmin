"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _warning = _interopRequireDefault(require("../../lib/warning"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tab = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Tab, _PureComponent);

  var _super = _createSuper(Tab);

  function Tab() {
    var _this;

    (0, _classCallCheck2["default"])(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }

      _this.props.onSelect();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onSelect();

        e.preventDefault();
      }

      _this.props.onKeyPress(e);
    });
    return _this;
  }

  (0, _createClass2["default"])(Tab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          is = _this$props.is,
          height = _this$props.height,
          onSelect = _this$props.onSelect,
          isSelected = _this$props.isSelected,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "is", "height", "onSelect", "isSelected", "appearance", "disabled"]);

      if (process.env.NODE_ENV !== 'production') {
        (0, _warning["default"])(typeof this.props.onClick === 'function', '<Tab> expects `onSelect` prop, but you passed `onClick`.');
      }

      var textSize = theme.getTextSizeForControlHeight(height);
      var elementBasedProps;

      if (disabled) {
        elementBasedProps = {
          'aria-disabled': true
        };
      }

      if (is === 'a') {
        // Use aria-current when it's a link
        // https://tink.uk/using-the-aria-current-attribute/
        elementBasedProps = isSelected ? _objectSpread({}, elementBasedProps, {
          'aria-current': 'page'
        }) : {};
      } else {
        // Use a role="tablist" around the tabs
        // Also pass down a aria-controls="panelId"
        // https://www.stefanjudis.com/blog/aria-selected-and-when-to-use-it/
        elementBasedProps = _objectSpread({}, elementBasedProps, {
          'aria-selected': isSelected,
          role: 'tab'
        });
      }

      return _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        className: theme.getTabClassName(appearance),
        is: is,
        size: textSize,
        height: height
      }, Tab.styles, props, {
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress
      }, elementBasedProps));
    }
  }]);
  return Tab;
}(_react.PureComponent);

Tab.displayName = "Tab";
(0, _defineProperty2["default"])(Tab, "propTypes", _objectSpread({}, _typography.Text.propTypes, {
  /**
   * Function triggered when tab is selected.
   */
  onSelect: _propTypes["default"].func,

  /**
   * When true, the tab is selected.
   */
  isSelected: _propTypes["default"].bool,

  /**
   * The appearance of the tab.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Tab, "defaultProps", {
  onSelect: function onSelect() {},
  onKeyPress: function onKeyPress() {},
  is: 'span',
  height: 28,
  disabled: false
});
(0, _defineProperty2["default"])(Tab, "styles", {
  display: 'inline-flex',
  fontWeight: 500,
  paddingX: 8,
  marginX: 4,
  borderRadius: 3,
  lineHeight: '28px',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  tabIndex: 0
});

var _default = (0, _theme.withTheme)(Tab);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9UYWIuanMiXSwibmFtZXMiOlsiVGFiIiwiZSIsInByb3BzIiwib25DbGljayIsIm9uU2VsZWN0Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJvbktleVByZXNzIiwidGhlbWUiLCJpcyIsImhlaWdodCIsImlzU2VsZWN0ZWQiLCJhcHBlYXJhbmNlIiwiZGlzYWJsZWQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImVsZW1lbnRCYXNlZFByb3BzIiwicm9sZSIsImdldFRhYkNsYXNzTmFtZSIsInN0eWxlcyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5UHJlc3MiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJib29sIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwicGFkZGluZ1giLCJtYXJnaW5YIiwiYm9yZGVyUmFkaXVzIiwibGluZUhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHREZWNvcmF0aW9uIiwidGFiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7Ozs7Ozs7Ozs7O29HQWtEVSxVQUFBQyxDQUFDLEVBQUk7QUFDakIsVUFBSSxPQUFPLE1BQUtDLEtBQUwsQ0FBV0MsT0FBbEIsS0FBOEIsVUFBbEMsRUFBOEM7QUFDNUMsY0FBS0QsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFuQjtBQUNEOztBQUVELFlBQUtDLEtBQUwsQ0FBV0UsUUFBWDtBQUNELEs7dUdBRWdCLFVBQUFILENBQUMsRUFBSTtBQUNwQixVQUFJQSxDQUFDLENBQUNJLEdBQUYsS0FBVSxPQUFWLElB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ZEMsRUFBQUEsY0FBYyxFQUFFLFFBUkY7QUFTZEMsRUFBQUEsY0FBYyxFQUFFLE1BVEY7QUFVZEMsRUFBQUEsUUFBUSxFQUFFO0FBVkksQzs7ZUE4Rkgsc0JBQVUzQyxHQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4uLy4uL2xpYi93YXJuaW5nJ1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGV4dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiB0YWIgaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgdGFiIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHRhYi5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25TZWxlY3Q6ICgpID0+IHt9LFxuICAgIG9uS2V5UHJlc3M6ICgpID0+IHt9LFxuICAgIGlzOiAnc3BhbicsXG4gICAgaGVpZ2h0OiAyOCxcbiAgICBkaXNhYmxlZDogZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgcGFkZGluZ1g6IDgsXG4gICAgbWFyZ2luWDogNCxcbiAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgbGluZUhlaWdodDogJzI4cHgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIHRhYkluZGV4OiAwXG4gIH1cblxuICBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnICcpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbktleVByZXNzKGUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG4gICAgICBpcyxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICB0eXBlb2YgdGhpcy5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAnPFRhYj4gZXhwZWN0cyBgb25TZWxlY3RgIHByb3AsIGJ1dCB5b3UgcGFzc2VkIGBvbkNsaWNrYC4nXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgbGV0IGVsZW1lbnRCYXNlZFByb3BzXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBlbGVtZW50QmFzZWRQcm9wcyA9IHtcbiAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzID09PSAnYScpIHtcbiAgICAgIC8vIFVzZSBhcmlhLWN1cnJlbnQgd2hlbiBpdCdzIGEgbGlua1xuICAgICAgLy8gaHR0cHM6Ly90aW5rLnVrL3VzaW5nLXRoZS1hcmlhLWN1cnJlbnQtYXR0cmlidXRlL1xuICAgICAgZWxlbWVudEJhc2VkUHJvcHMgPSBpc1NlbGVjdGVkXG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uZWxlbWVudEJhc2VkUHJvcHMsXG4gICAgICAgICAgICAnYXJpYS1jdXJyZW50JzogJ3BhZ2UnXG4gICAgICAgICAgfVxuICAgICAgICA6IHt9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZSBhIHJvbGU9XCJ0YWJsaXN0XCIgYXJvdW5kIHRoZSB0YWJzXG4gICAgICAvLyBBbHNvIHBhc3MgZG93biBhIGFyaWEtY29udHJvbHM9XCJwYW5lbElkXCJcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnN0ZWZhbmp1ZGlzLmNvbS9ibG9nL2FyaWEtc2VsZWN0ZWQtYW5kLXdoZW4tdG8tdXNlLWl0L1xuICAgICAgZWxlbWVudEJhc2VkUHJvcHMgPSB7XG4gICAgICAgIC4uLmVsZW1lbnRCYXNlZFByb3BzLFxuICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG4gICAgICAgIHJvbGU6ICd0YWInXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGNsYXNzTmFtZT17dGhlbWUuZ2V0VGFiQ2xhc3NOYW1lKGFwcGVhcmFuY2UpfVxuICAgICAgICBpcz17aXN9XG4gICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgey4uLlRhYi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgey4uLmVsZW1lbnRCYXNlZFByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRhYilcbiJdfQ==
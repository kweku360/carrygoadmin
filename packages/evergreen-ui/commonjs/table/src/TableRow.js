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

var _classnames = _interopRequireDefault(require("classnames"));

var _layers = require("../../layers");

var _theme = require("../../theme");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _TableRowContext = require("./TableRowContext");

var _manageTableRowFocusInteraction = _interopRequireDefault(require("./manageTableRowFocusInteraction"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TableRow = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TableRow, _PureComponent);

  var _super = _createSuper(TableRow);

  function TableRow() {
    var _this;

    (0, _classCallCheck2["default"])(this, TableRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }

      if (_this.props.isSelectable) {
        if (_this.props.isSelected) {
          _this.props.onDeselect();
        } else {
          _this.props.onSelect();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      if (_this.props.isSelectable) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          _this.props.onSelect();

          e.preventDefault();
        } else if (key === 'ArrowUp' || key === 'ArrowDown') {
          try {
            (0, _manageTableRowFocusInteraction["default"])(key, _this.mainRef);
          } catch (_) {}
        } else if (key === 'Escape') {
          if (_this.mainRef) _this.mainRef.blur();
        }
      }

      _this.props.onKeyPress(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRef", function (ref) {
      _this.mainRef = ref;
      (0, _safeInvoke["default"])(_this.props.innerRef, ref);
    });
    return _this;
  }

  (0, _createClass2["default"])(TableRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          theme = _this$props.theme,
          className = _this$props.className,
          height = _this$props.height,
          children = _this$props.children,
          intent = _this$props.intent,
          appearance = _this$props.appearance,
          _this$props$tabIndex = _this$props.tabIndex,
          tabIndex = _this$props$tabIndex === void 0 ? -1 : _this$props$tabIndex,
          onClick = _this$props.onClick,
          onKeyPress = _this$props.onKeyPress,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelectable = _this$props.isSelectable,
          isSelected = _this$props.isSelected,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["innerRef", "theme", "className", "height", "children", "intent", "appearance", "tabIndex", "onClick", "onKeyPress", "onSelect", "onDeselect", "isHighlighted", "isSelectable", "isSelected"]);
      var themedClassName = theme.getRowClassName(appearance, intent);
      return _react["default"].createElement(_TableRowContext.TableRowProvider, {
        height: height
      }, _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        innerRef: this.onRef,
        className: (0, _classnames["default"])(themedClassName, className),
        display: "flex",
        "aria-selected": isHighlighted,
        "aria-current": isSelected,
        "data-isselectable": isSelectable,
        tabIndex: isSelectable ? tabIndex : undefined,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        height: height,
        borderBottom: "muted"
      }, props), children));
    }
  }]);
  return TableRow;
}(_react.PureComponent);

TableRow.displayName = "TableRow";
(0, _defineProperty2["default"])(TableRow, "propTypes", _objectSpread({}, _layers.Pane.propTypes, {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: _propTypes["default"].func,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect: _propTypes["default"].func,

  /**
   * Makes the TableRow selectable.
   */
  isSelectable: _propTypes["default"].bool,

  /**
   * Makes the TableRow selected.
   */
  isSelected: _propTypes["default"].bool,

  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted: _propTypes["default"].bool,

  /**
   * The intent of the alert.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(TableRow, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 48,
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onKeyPress: function onKeyPress() {}
});

var _default = (0, _theme.withTheme)(TableRow);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVSb3cuanMiXSwibmFtZXMiOlsiVGFibGVSb3ciLCJlIiwicHJvcHMiLCJvbkNsaWNrIiwiaXNTZWxlY3RhYmxlIiwiaXNTZWxlY3RlZCIsIm9uRGVzZWxlY3QiLCJvblNlbGVjdCIsImtleSIsInByZXZlbnREZWZhdWx0IiwibWFpblJlZiIsIl8iLCJibHVyIiwib25LZXlQcmVzcyIsInJlZiIsImlubmVyUmVmIiwidGhlbWUiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJjaGlsZHJlbiIsImludGVudCIsImFwcGVhcmFuY2UiLCJ0YWJJbmRleCIsImlzSGlnaGxpZ2h0ZWQiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRSb3dDbGFzc05hbWUiLCJvblJlZiIsInVuZGVmaW5lZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsIlB1cmVDb21wb25lbnQiLCJQYW5lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJib29sIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7O29HQXNFVSxVQUFBQyxDQUFDLEVBQUk7QUFDakIsVUFBSSxPQUFPLE1BQUtDLEtBQUwsQ0FBV0MsT0FBbEIsS0FBOEIsVUFBbEMsRUFBOEM7QUFDNUMsY0FBS0QsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFuQjtBQUNEOztBQUVELFVBQUksTUFBS0MsS0FBTCxDQUFXRSxZQUFmLEVBQTZCO0FBQzNCLFlBQUksTUFBS0YsS0FBTCxDQUFXRyxVQUFmLEVBQTJCO0FBQ3pCLGdCQUFLSCxLQUFMLENBQVdJLFVBQVg7QUFDRCxTQUZELE1BRU87QUFDTCxn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QixFQUNMQyxVOztBQUVIOzs7QUFHQTlCLEVBQUFBLFFBQVEsRUFBRTBCLHNCQUFVSyxJOztBQUVwQjs7O0FBR0FoQyxFQUFBQSxVQUFVLEVBQUUyQixzQkFBVUssSTs7QUFFdEI7OztBQUdBbEMsRUFBQUEsWUFBWSxFQUFFNkIsc0JBQVVNLEk7O0FBRXhCOzs7QUFHQWxDLEVBQUFBLFVBQVUsRUFBRTRCLHNCQUFVTSxJOztBQUV0Qjs7O0FBR0FoQixFQUFBQSxhQUFhLEVBQUVVLHNCQUFVTSxJOztBQUV6Qjs7O0FBR0FuQixFQUFBQSxNQUFNLEVBQUVhLHNCQUFVTyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsUUFBL0IsQ0FBaEIsRUFDTEgsVTs7QUFFSDs7O0FBR0FoQixFQUFBQSxVQUFVLEVBQUVZLHNCQUFVRyxNQUFWLENBQWlCQyxVOztBQUU3Qjs7O0FBR0FyQixFQUFBQSxLQUFLLEVBQUVpQixzQkFBVVEsTUFBVixDQUFpQkosVTs7QUFFeEI7Ozs7QUFJQXBCLEVBQUFBLFNBQVMsRUFBRWdCLHNCQUFVRzs7aUNBMURuQnBDLFEsa0JBNkRrQjtBQUNwQm9CLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCQyxFQUFBQSxVQUFVLEVBQUUsU0FGUTtBQUdwQkgsRUFBQUEsTUFBTSxFQUFFLEVBSFk7QUFJcEJYLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBSkU7QUFLcEJELEVBQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFLENBTEE7QUFNcEJPLEVBQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFO0FBTkEsQzs7ZUE2RlQsc0JBQVViLFFBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcbmltcG9ydCB7IFRhYmxlUm93UHJvdmlkZXIgfSBmcm9tICcuL1RhYmxlUm93Q29udGV4dCdcbmltcG9ydCBtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24gZnJvbSAnLi9tYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24nXG5cbmNsYXNzIFRhYmxlUm93IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgcm93LiBSZW1lbWJlciB0byBhZGQgcGFkZGluZ3Mgd2hlbiB1c2luZyBcImF1dG9cIi5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbiBjbGljayBhbmQgZW50ZXIvc3BhY2Uga2V5cHJlc3MuXG4gICAgICovXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgb24gY2xpY2sgYW5kIGVudGVyL3NwYWNlIGtleXByZXNzLlxuICAgICAqL1xuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIFRhYmxlUm93IHNlbGVjdGFibGUuXG4gICAgICovXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBUYWJsZVJvdyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE1hbnVhbGx5IHNldCB0aGUgVGFibGVSb3cgdG8gYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICovXG4gICAgaXNIaWdobGlnaHRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdGFibGUgcm93LiBEZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydCBkZWZhdWx0LlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSB0YWJsZSByb3cuXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgaGVpZ2h0OiA0OCxcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgb25EZXNlbGVjdDogKCkgPT4ge30sXG4gICAgb25LZXlQcmVzczogKCkgPT4ge31cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSkge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGVcbiAgICAgIGlmIChrZXkgPT09ICdFbnRlcicgfHwga2V5ID09PSAnICcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCgpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbWFuYWdlVGFibGVSb3dGb2N1c0ludGVyYWN0aW9uKGtleSwgdGhpcy5tYWluUmVmKVxuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5SZWYpIHRoaXMubWFpblJlZi5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uS2V5UHJlc3MoZSlcbiAgfVxuXG4gIG9uUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm1haW5SZWYgPSByZWZcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMuaW5uZXJSZWYsIHJlZilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbm5lclJlZixcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpbnRlbnQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgdGFiSW5kZXggPSAtMSxcblxuICAgICAgLy8gRmlsdGVyIG91dFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5UHJlc3MsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIG9uRGVzZWxlY3QsXG5cbiAgICAgIGlzSGlnaGxpZ2h0ZWQsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFJvd0NsYXNzTmFtZShhcHBlYXJhbmNlLCBpbnRlbnQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlUm93UHJvdmlkZXIgaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8UGFuZVxuICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtpc0hpZ2hsaWdodGVkfVxuICAgICAgICAgIGFyaWEtY3VycmVudD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBkYXRhLWlzc2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICAgIHRhYkluZGV4PXtpc1NlbGVjdGFibGUgPyB0YWJJbmRleCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGJvcmRlckJvdHRvbT1cIm11dGVkXCJcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvVGFibGVSb3dQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRhYmxlUm93KVxuIl19
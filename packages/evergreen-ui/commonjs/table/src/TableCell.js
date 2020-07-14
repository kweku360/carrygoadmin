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

var _toaster = require("../../toaster");

var _theme = require("../../theme");

var _layers = require("../../layers");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _TableRowContext = require("./TableRowContext");

var _manageTableCellFocusInteraction = _interopRequireDefault(require("./manageTableCellFocusInteraction"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function executeArrowKeyOverride(override) {
  if (!override) {
    return;
  }

  if (typeof override === 'function') {
    override();
    return;
  }

  if (typeof override === 'string') {
    document.querySelector(override).focus();
    return;
  } // This needs to be the node, not a React ref.


  override.focus();
}

var TableCell = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TableCell, _PureComponent);

  var _super = _createSuper(TableCell);

  function TableCell() {
    var _this;

    (0, _classCallCheck2["default"])(this, TableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      var _this$props$arrowKeys = _this.props.arrowKeysOverrides,
          arrowKeysOverrides = _this$props$arrowKeys === void 0 ? {} : _this$props$arrowKeys;

      if (_this.props.isSelectable) {
        var key = e.key;

        if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
          e.preventDefault();

          try {
            // Support arrow key overrides.
            var override = arrowKeysOverrides[key.slice('Arrow'.length).toLowerCase()];
            if (override === false) return;
            if (override) return executeArrowKeyOverride(override);
            (0, _manageTableCellFocusInteraction["default"])(key, _this.mainRef);
          } catch (error) {
            _toaster.toaster.danger('Keyboard interaction not possible');

            console.error('Keyboard interaction not possible', error);
          }
        } else if (key === 'Escape') {
          _this.mainRef.blur();
        }
      }

      (0, _safeInvoke["default"])(_this.props.onKeyDown, e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRef", function (ref) {
      _this.mainRef = ref;
      (0, _safeInvoke["default"])(_this.props.innerRef, ref);
    });
    return _this;
  }

  (0, _createClass2["default"])(TableCell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          theme = _this$props.theme,
          children = _this$props.children,
          appearance = _this$props.appearance,
          onClick = _this$props.onClick,
          onKeyPress = _this$props.onKeyPress,
          onKeyDown = _this$props.onKeyDown,
          isSelectable = _this$props.isSelectable,
          _this$props$tabIndex = _this$props.tabIndex,
          tabIndex = _this$props$tabIndex === void 0 ? -1 : _this$props$tabIndex,
          className = _this$props.className,
          rightView = _this$props.rightView,
          arrowKeysOverrides = _this$props.arrowKeysOverrides,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["innerRef", "theme", "children", "appearance", "onClick", "onKeyPress", "onKeyDown", "isSelectable", "tabIndex", "className", "rightView", "arrowKeysOverrides"]);
      var themedClassName = theme.getTableCellClassName(appearance);
      return _react["default"].createElement(_TableRowContext.TableRowConsumer, null, function (height) {
        return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          innerRef: _this2.onRef,
          height: height,
          className: (0, _classnames["default"])(themedClassName, className),
          tabIndex: isSelectable ? tabIndex : undefined,
          "data-isselectable": isSelectable,
          onClick: onClick,
          onKeyDown: _this2.handleKeyDown
        }, TableCell.styles, props), children, rightView ? rightView : null);
      });
    }
  }]);
  return TableCell;
}(_react.PureComponent);

TableCell.displayName = "TableCell";
(0, _defineProperty2["default"])(TableCell, "propTypes", _objectSpread({}, _layers.Pane.propTypes, {
  /*
   * Makes the TableCell focusable. Used by EditableCell.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: _propTypes["default"].bool,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * Optional node to be placed on the right side of the table cell.
   * Useful for icons and icon buttons.
   */
  rightView: _propTypes["default"].node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Advanced arrow keys overrides for selectable cells.
   * A string will be used as a selector.
   */
  arrowKeysOverrides: _propTypes["default"].shape({
    up: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])]),
    down: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])]),
    left: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])]),
    right: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])])
  }),

  /**
   * Class name passed to the table cell.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(TableCell, "defaultProps", {
  appearance: 'default'
});
(0, _defineProperty2["default"])(TableCell, "styles", {
  paddingX: 12,
  boxSizing: 'border-box',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  overflow: 'hidden'
});

var _default = (0, _theme.withTheme)(TableCell);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVDZWxsLmpzIl0sIm5hbWVzIjpbImV4ZWN1dGVBcnJvd0tleU92ZXJyaWRlIiwib3ZlcnJpZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIlRhYmxlQ2VsbCIsImUiLCJwcm9wcyIsImFycm93S2V5c092ZXJyaWRlcyIsImlzU2VsZWN0YWJsZSIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic2xpY2UiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsIm1haW5SZWYiLCJlcnJvciIsInRvYXN0ZXIiLCJkYW5nZXIiLCJjb25zb2xlIiwiYmx1ciIsIm9uS2V5RG93biIsInJlZiIsImlubmVyUmVmIiwidGhlbWUiLCJjaGlsZHJlbiIsImFwcGVhcmFuY2UiLCJvbkNsaWNrIiwib25LZXlQcmVzcyIsInRhYkluZGV4IiwiY2xhc3NOYW1lIiwicmlnaHRWaWV3IiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0VGFibGVDZWxsQ2xhc3NOYW1lIiwiaGVpZ2h0Iiwib25SZWYiLCJ1bmRlZmluZWQiLCJoYW5kbGVLZXlEb3duIiwic3R5bGVzIiwiUHVyZUNvbXBvbmVudCIsIlBhbmUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJvYmplY3QiLCJzaGFwZSIsInVwIiwib25lT2ZUeXBlIiwiZnVuYyIsImVsZW1lbnQiLCJvbmVPZiIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJwYWRkaW5nWCIsImJveFNpemluZyIsImZsZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhTaHJpbmsiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLFNBQVNBLHVCQUFULENBQWlDQyxRQUFq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LHNCQUFVUSxTQUFWLENBQW9CLENBQ3hCUixzQkFBVUUsTUFEYyxFQUV4QkYsc0JBQVVTLElBRmMsRUFHeEJULHNCQUFVVSxPQUhjLEVBSXhCVixzQkFBVVcsS0FBVixDQUFnQixDQUFDLEtBQUQsQ0FBaEIsQ0FKd0IsQ0FBcEIsQ0FiNEI7QUFtQmxDRyxJQUFBQSxLQUFLLEVBQUVkLHNCQUFVUSxTQUFWLENBQW9CLENBQ3pCUixzQkFBVUUsTUFEZSxFQUV6QkYsc0JBQVVTLElBRmUsRUFHekJULHNCQUFVVSxPQUhlLEVBSXpCVixzQkFBVVcsS0FBVixDQUFnQixDQUFDLEtBQUQsQ0FBaEIsQ0FKeUIsQ0FBcEI7QUFuQjJCLEdBQWhCLEM7O0FBMkJwQjs7OztBQUlBdkIsRUFBQUEsU0FBUyxFQUFFWSxzQkFBVUU7O2lDQWhFbkJ2QyxTLGtCQW1Fa0I7QUFDcEJxQixFQUFBQSxVQUFVLEVBQUU7QUFEUSxDO2lDQW5FbEJyQixTLFlBdUVZO0FBQ2RvRCxFQUFBQSxRQUFRLEVBQUUsRUFESTtBQUVkQyxFQUFBQSxTQUFTLEVBQUUsWUFGRztBQUdkQyxFQUFBQSxJQUFJLEVBQUUsQ0FIUTtBQUlkQyxFQUFBQSxPQUFPLEVBQUUsTUFKSztBQUtkQyxFQUFBQSxVQUFVLEVBQUUsUUFMRTtBQU1kQyxFQUFBQSxVQUFVLEVBQUUsQ0FORTtBQU9kQyxFQUFBQSxRQUFRLEVBQUU7QUFQSSxDOztlQTJGSCxzQkFBVTFELFNBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IHRvYXN0ZXIgfSBmcm9tICcuLi8uLi90b2FzdGVyJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHsgVGFibGVSb3dDb25zdW1lciB9IGZyb20gJy4vVGFibGVSb3dDb250ZXh0J1xuaW1wb3J0IG1hbmFnZVRhYmxlQ2VsbEZvY3VzSW50ZXJhY3Rpb24gZnJvbSAnLi9tYW5hZ2VUYWJsZUNlbGxGb2N1c0ludGVyYWN0aW9uJ1xuXG5mdW5jdGlvbiBleGVjdXRlQXJyb3dLZXlPdmVycmlkZShvdmVycmlkZSkge1xuICBpZiAoIW92ZXJyaWRlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIG92ZXJyaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3ZlcnJpZGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiBvdmVycmlkZSA9PT0gJ3N0cmluZycpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG92ZXJyaWRlKS5mb2N1cygpXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBUaGlzIG5lZWRzIHRvIGJlIHRoZSBub2RlLCBub3QgYSBSZWFjdCByZWYuXG4gIG92ZXJyaWRlLmZvY3VzKClcbn1cblxuY2xhc3MgVGFibGVDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gICAgLypcbiAgICAgKiBNYWtlcyB0aGUgVGFibGVDZWxsIGZvY3VzYWJsZS4gVXNlZCBieSBFZGl0YWJsZUNlbGwuXG4gICAgICogV2lsbCBhZGQgdGFiSW5kZXg9ey0xIHx8IHRoaXMucHJvcHMudGFiSW5kZXh9LlxuICAgICAqL1xuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdGFibGUgcm93LiBEZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydCBkZWZhdWx0LlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbmFsIG5vZGUgdG8gYmUgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSB0YWJsZSBjZWxsLlxuICAgICAqIFVzZWZ1bCBmb3IgaWNvbnMgYW5kIGljb24gYnV0dG9ucy5cbiAgICAgKi9cbiAgICByaWdodFZpZXc6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQWR2YW5jZWQgYXJyb3cga2V5cyBvdmVycmlkZXMgZm9yIHNlbGVjdGFibGUgY2VsbHMuXG4gICAgICogQSBzdHJpbmcgd2lsbCBiZSB1c2VkIGFzIGEgc2VsZWN0b3IuXG4gICAgICovXG4gICAgYXJyb3dLZXlzT3ZlcnJpZGVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgICAgXSksXG4gICAgICBkb3duOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICAgIF0pLFxuICAgICAgbGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXG4gICAgICBdKSxcbiAgICAgIHJpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICAgIF0pXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgdGFibGUgY2VsbC5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBwYWRkaW5nWDogMTIsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZmxleDogMSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBjb25zdCB7IGFycm93S2V5c092ZXJyaWRlcyA9IHt9IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodGhpcy5wcm9wcy5pc1NlbGVjdGFibGUpIHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBlXG4gICAgICBpZiAoXG4gICAgICAgIGtleSA9PT0gJ0Fycm93VXAnIHx8XG4gICAgICAgIGtleSA9PT0gJ0Fycm93RG93bicgfHxcbiAgICAgICAga2V5ID09PSAnQXJyb3dMZWZ0JyB8fFxuICAgICAgICBrZXkgPT09ICdBcnJvd1JpZ2h0J1xuICAgICAgKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFN1cHBvcnQgYXJyb3cga2V5IG92ZXJyaWRlcy5cbiAgICAgICAgICBjb25zdCBvdmVycmlkZSA9XG4gICAgICAgICAgICBhcnJvd0tleXNPdmVycmlkZXNba2V5LnNsaWNlKCdBcnJvdycubGVuZ3RoKS50b0xvd2VyQ2FzZSgpXVxuICAgICAgICAgIGlmIChvdmVycmlkZSA9PT0gZmFsc2UpIHJldHVyblxuICAgICAgICAgIGlmIChvdmVycmlkZSkgcmV0dXJuIGV4ZWN1dGVBcnJvd0tleU92ZXJyaWRlKG92ZXJyaWRlKVxuXG4gICAgICAgICAgbWFuYWdlVGFibGVDZWxsRm9jdXNJbnRlcmFjdGlvbihrZXksIHRoaXMubWFpblJlZilcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB0b2FzdGVyLmRhbmdlcignS2V5Ym9hcmQgaW50ZXJhY3Rpb24gbm90IHBvc3NpYmxlJylcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdLZXlib2FyZCBpbnRlcmFjdGlvbiBub3QgcG9zc2libGUnLCBlcnJvcilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMubWFpblJlZi5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25LZXlEb3duLCBlKVxuICB9XG5cbiAgb25SZWYgPSByZWYgPT4ge1xuICAgIHRoaXMubWFpblJlZiA9IHJlZlxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5pbm5lclJlZiwgcmVmKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlubmVyUmVmLFxuICAgICAgdGhlbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBvbkNsaWNrLFxuICAgICAgb25LZXlQcmVzcyxcbiAgICAgIG9uS2V5RG93bixcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIHRhYkluZGV4ID0gLTEsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICByaWdodFZpZXcsXG4gICAgICBhcnJvd0tleXNPdmVycmlkZXMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRUYWJsZUNlbGxDbGFzc05hbWUoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVSb3dDb25zdW1lcj5cbiAgICAgICAge2hlaWdodCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uUmVmfVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgIHRhYkluZGV4PXtpc1NlbGVjdGFibGUgPyB0YWJJbmRleCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgZGF0YS1pc3NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgICAgIHsuLi5UYWJsZUNlbGwuc3R5bGVzfVxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAge3JpZ2h0VmlldyA/IHJpZ2h0VmlldyA6IG51bGx9XG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgKVxuICAgICAgICB9fVxuICAgICAgPC9UYWJsZVJvd0NvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGFibGVDZWxsKVxuIl19
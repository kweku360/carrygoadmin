"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../../theme");

var _portal = require("../../portal");

var _stack = require("../../stack");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _TextTableCell = _interopRequireDefault(require("./TextTableCell"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _EditableCellField = _interopRequireDefault(require("./EditableCellField"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EditableCell = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(EditableCell, _React$PureComponent);

  var _super = _createSuper(EditableCell);

  function EditableCell() {
    var _this;

    (0, _classCallCheck2["default"])(this, EditableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: _this.props.children,
      isEditing: _this.props.autoFocus
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMainRef", function (ref) {
      _this.mainRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOverlayRef", function (ref) {
      _this.overlayRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDoubleClick", function () {
      if (_this.props.disabled || !_this.props.isSelectable) return;

      _this.setState({
        isEditing: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      if (_this.props.disabled) return;
      var key = e.key;
      /**
       * When the user presses a character on the keyboard, use that character
       * as the value in the text field.
       */

      if (key === 'Enter' || key === 'Shift') {
        _this.setState({
          isEditing: true
        });
      } else if (key.match(/^[a-z]{0,10}$/) && !e.metaKey && !e.ctrlKey && !e.altKey) {
        _this.setState(function (prevState) {
          return {
            isEditing: true,
            value: prevState.value + key
          };
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFieldChangeComplete", function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          isSelectable = _this$props.isSelectable;

      _this.setState({
        isEditing: false,
        value: value
      });

      (0, _safeInvoke["default"])(onChange, value);

      if (_this.mainRef && isSelectable) {
        _this.mainRef.focus();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFieldCancel", function () {
      _this.setState({
        isEditing: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      _this.mainRef.focus();
    });
    return _this;
  }

  (0, _createClass2["default"])(EditableCell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          theme = _this$props2.theme,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          placeholder = _this$props2.placeholder,
          isSelectable = _this$props2.isSelectable,
          _this$props2$textProp = _this$props2.textProps,
          textProps = _this$props2$textProp === void 0 ? {} : _this$props2$textProp,
          props = (0, _objectWithoutProperties2["default"])(_this$props2, ["children", "theme", "size", "disabled", "placeholder", "isSelectable", "textProps"]);
      var _this$state = this.state,
          isEditing = _this$state.isEditing,
          value = _this$state.value;
      var cursor = 'text';

      if (disabled) {
        cursor = 'not-allowed';
      } else if (isSelectable) {
        cursor = 'default';
      }

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_TextTableCell["default"], (0, _extends2["default"])({
        innerRef: this.onMainRef,
        isSelectable: isSelectable,
        onClick: this.handleClick,
        onDoubleClick: this.handleDoubleClick,
        onKeyDown: this.handleKeyDown,
        cursor: cursor,
        textProps: _objectSpread({
          size: size,
          opacity: disabled || !children && placeholder ? 0.5 : 1
        }, textProps)
      }, props), children ? children : placeholder), isEditing && _react["default"].createElement(_portal.Portal, null, _react["default"].createElement(_stack.Stack, null, function (zIndex) {
        return _react["default"].createElement(_EditableCellField["default"], {
          zIndex: zIndex,
          getTargetRef: function getTargetRef() {
            return _this2.mainRef;
          },
          value: value,
          onEscape: _this2.handleFieldEscape,
          onChangeComplete: _this2.handleFieldChangeComplete,
          onCancel: _this2.handleFieldCancel,
          size: size
        });
      })));
    }
  }]);
  return EditableCell;
}(_react["default"].PureComponent);

EditableCell.displayName = "EditableCell";
(0, _defineProperty2["default"])(EditableCell, "propTypes", _objectSpread({}, _TableCell["default"].propTypes, {
  /*
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: _propTypes["default"].bool.isRequired,

  /**
   * When true, the cell can't be edited.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: _propTypes["default"].node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: _propTypes["default"].oneOf([300, 400]).isRequired,

  /**
   * This is the value of the cell.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Function called when value changes. (value: string) => void.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the cell will initialize in the editing state.
   */
  autoFocus: _propTypes["default"].bool
}));
(0, _defineProperty2["default"])(EditableCell, "defaultProps", {
  size: 300,
  isSelectable: true,
  autoFocus: false
});

var _default = (0, _theme.withTheme)(EditableCell);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvRWRpdGFibGVDZWxsLmpzIl0sIm5hbWVzIjpbIkVkaXRhYmxlQ2VsbCIsInZhbHVlIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzRWRpdGluZyIsImF1dG9Gb2N1cyIsInJlZiIsIm1haW5SZWYiLCJvdmVybGF5UmVmIiwiZGlzYWJsZWQiLCJpc1NlbGVjdGFibGUiLCJzZXRTdGF0ZSIsImUiLCJrZXkiLCJtYXRjaCIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5IiwicHJldlN0YXRlIiwib25DaGFuZ2UiLCJmb2N1cyIsInRoZW1lIiwic2l6ZSIsInBsYWNlaG9sZGVyIiwidGV4dFByb3BzIiwic3RhdGUiLCJjdXJzb3IiLCJvbk1haW5SZWYiLCJoYW5kbGVDbGljayIsImhhbmRsZURvdWJsZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJoYW5kbGVGaWVsZEVzY2FwZSIsImhhbmRsZUZpZWxkQ2hhbmdlQ29tcGxldGUiLCJoYW5kbGVGaWVsZENhbmNlbCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlRhYmxlQ2VsbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwibm9kZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7Ozs7OzhGQWtESTtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsTUFBS0MsS0FBTCxDQUFXQyxRQURaO0FBRU5DLE1BQUFBLFNBQVMsRUFBRSxNQUFLRixLQUFMLENBQVdHO0FBRmhCLEs7a0dBS0ksVUFBQUMsR0FBRyxFQUFJO0FBQ2pCLFlBQUtDLE9BQUwsR0FBZUQsR0FBZjtBQUNE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LENBQWhCLEVBQTRCRixVOztBQUVsQzs7O0FBR0F2QyxFQUFBQSxRQUFRLEVBQUVxQyxzQkFBVUssU0FBVixDQUFvQixDQUFDTCxzQkFBVU0sTUFBWCxFQUFtQk4sc0JBQVVPLE1BQTdCLENBQXBCLEM7O0FBRVY7OztBQUdBNUIsRUFBQUEsUUFBUSxFQUFFcUIsc0JBQVVRLEk7O0FBRXBCOzs7QUFHQTNDLEVBQUFBLFNBQVMsRUFBRW1DLHNCQUFVQzs7aUNBekNuQnpDLFksa0JBNENrQjtBQUNwQnNCLEVBQUFBLElBQUksRUFBRSxHQURjO0FBRXBCWixFQUFBQSxZQUFZLEVBQUUsSUFGTTtBQUdwQkwsRUFBQUEsU0FBUyxFQUFFO0FBSFMsQzs7ZUF1SVQsc0JBQVVMLFlBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vLi4vcG9ydGFsJ1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICcuLi8uLi9zdGFjaydcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcbmltcG9ydCBUZXh0VGFibGVDZWxsIGZyb20gJy4vVGV4dFRhYmxlQ2VsbCdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5pbXBvcnQgRWRpdGFibGVDZWxsRmllbGQgZnJvbSAnLi9FZGl0YWJsZUNlbGxGaWVsZCdcblxuY2xhc3MgRWRpdGFibGVDZWxsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRhYmxlQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGFibGVDZWxsLnByb3BUeXBlcyxcblxuICAgIC8qXG4gICAgICogTWFrZXMgdGhlIFRhYmxlQ2VsbCBmb2N1c2FibGUuXG4gICAgICogV2lsbCBhZGQgdGFiSW5kZXg9ey0xIHx8IHRoaXMucHJvcHMudGFiSW5kZXh9LlxuICAgICAqL1xuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNlbGwgY2FuJ3QgYmUgZWRpdGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbmFsIHBsYWNlaG9sZGVyIHdoZW4gY2hpbGRyZW4gaXMgZmFsc3kuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgdXNlZCBmb3IgdGhlIFRleHRUYWJsZUNlbGwgYW5kIFRleHRhcmVhLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDBdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0aGUgdmFsdWUgb2YgdGhlIGNlbGwuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMuICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNlbGwgd2lsbCBpbml0aWFsaXplIGluIHRoZSBlZGl0aW5nIHN0YXRlLlxuICAgICAqL1xuICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogMzAwLFxuICAgIGlzU2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBhdXRvRm9jdXM6IGZhbHNlXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICBpc0VkaXRpbmc6IHRoaXMucHJvcHMuYXV0b0ZvY3VzXG4gIH1cblxuICBvbk1haW5SZWYgPSByZWYgPT4ge1xuICAgIHRoaXMubWFpblJlZiA9IHJlZlxuICB9XG5cbiAgb25PdmVybGF5UmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSByZWZcbiAgfVxuXG4gIGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8ICF0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSkgcmV0dXJuXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRWRpdGluZzogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVyblxuICAgIGNvbnN0IHsga2V5IH0gPSBlXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSB1c2VyIHByZXNzZXMgYSBjaGFyYWN0ZXIgb24gdGhlIGtleWJvYXJkLCB1c2UgdGhhdCBjaGFyYWN0ZXJcbiAgICAgKiBhcyB0aGUgdmFsdWUgaW4gdGhlIHRleHQgZmllbGQuXG4gICAgICovXG4gICAgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICdTaGlmdCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0VkaXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGtleS5tYXRjaCgvXlthLXpdezAsMTB9JC8pICYmXG4gICAgICAhZS5tZXRhS2V5ICYmXG4gICAgICAhZS5jdHJsS2V5ICYmXG4gICAgICAhZS5hbHRLZXlcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIGlzRWRpdGluZzogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHByZXZTdGF0ZS52YWx1ZSArIGtleVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRmllbGRDaGFuZ2VDb21wbGV0ZSA9IHZhbHVlID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBpc1NlbGVjdGFibGUgfSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgIHZhbHVlXG4gICAgfSlcblxuICAgIHNhZmVJbnZva2Uob25DaGFuZ2UsIHZhbHVlKVxuXG4gICAgaWYgKHRoaXMubWFpblJlZiAmJiBpc1NlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMubWFpblJlZi5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRmllbGRDYW5jZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogZmFsc2UgfSlcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMubWFpblJlZi5mb2N1cygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICB0aGVtZSxcbiAgICAgIHNpemUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgdGV4dFByb3BzID0ge30sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBpc0VkaXRpbmcsIHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgY3Vyc29yID0gJ3RleHQnXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IgPSAnbm90LWFsbG93ZWQnXG4gICAgfSBlbHNlIGlmIChpc1NlbGVjdGFibGUpIHtcbiAgICAgIGN1cnNvciA9ICdkZWZhdWx0J1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxUZXh0VGFibGVDZWxsXG4gICAgICAgICAgaW5uZXJSZWY9e3RoaXMub25NYWluUmVmfVxuICAgICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVEb3VibGVDbGlja31cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBjdXJzb3I9e2N1cnNvcn1cbiAgICAgICAgICB0ZXh0UHJvcHM9e3tcbiAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICBvcGFjaXR5OiBkaXNhYmxlZCB8fCAoIWNoaWxkcmVuICYmIHBsYWNlaG9sZGVyKSA/IDAuNSA6IDEsXG4gICAgICAgICAgICAuLi50ZXh0UHJvcHNcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbiA/IGNoaWxkcmVuIDogcGxhY2Vob2xkZXJ9XG4gICAgICAgIDwvVGV4dFRhYmxlQ2VsbD5cbiAgICAgICAge2lzRWRpdGluZyAmJiAoXG4gICAgICAgICAgPFBvcnRhbD5cbiAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAge3pJbmRleCA9PiAoXG4gICAgICAgICAgICAgICAgPEVkaXRhYmxlQ2VsbEZpZWxkXG4gICAgICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICAgICAgICAgICAgICAgIGdldFRhcmdldFJlZj17KCkgPT4gdGhpcy5tYWluUmVmfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25Fc2NhcGU9e3RoaXMuaGFuZGxlRmllbGRFc2NhcGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXt0aGlzLmhhbmRsZUZpZWxkQ2hhbmdlQ29tcGxldGV9XG4gICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oYW5kbGVGaWVsZENhbmNlbH1cbiAgICAgICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRWRpdGFibGVDZWxsKVxuIl19
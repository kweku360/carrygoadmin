"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textarea = require("../../textarea");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EditableCellField = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(EditableCellField, _React$PureComponent);

  var _super = _createSuper(EditableCellField);

  function EditableCellField() {
    var _this;

    (0, _classCallCheck2["default"])(this, EditableCellField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      top: 0,
      left: 0,
      height: 0,
      width: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTableBodyRef", function (targetRef) {
      if (_this.tableBodyRef) return _this.tableBodyRef;
      var ref = targetRef;

      while (ref) {
        var isTableBody = ref.hasAttribute('data-evergreen-table-body');

        if (isTableBody) {
          return ref;
        }

        if (ref.parentElement) {
          ref = ref.parentElement;
        } else {
          return null;
        }
      }

      _this.tableBodyRef = ref;
      return _this.tableBodyRef;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "update", function () {
      var getTargetRef = _this.props.getTargetRef;
      var targetRef = getTargetRef();
      if (!targetRef) return;

      var tableBodyRef = _this.getTableBodyRef(targetRef);

      var _targetRef$getBoundin = targetRef.getBoundingClientRect(),
          left = _targetRef$getBoundin.left,
          targetTop = _targetRef$getBoundin.top,
          height = _targetRef$getBoundin.height,
          width = _targetRef$getBoundin.width;

      var top;

      if (tableBodyRef) {
        var bounds = tableBodyRef.getBoundingClientRect();
        top = Math.min(Math.max(targetTop, bounds.top), bounds.bottom - height);
      } else {
        top = targetTop;
      }

      _this.setState(function () {
        return {
          left: left,
          top: top,
          height: height,
          width: width
        };
      }, function () {
        _this.latestAnimationFrame = requestAnimationFrame(function () {
          _this.update();
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRef", function (ref) {
      _this.textareaRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function (e) {
      e.target.selectionStart = e.target.value.length;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function () {
      if (_this.textareaRef) _this.props.onChangeComplete(_this.textareaRef.value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      switch (e.key) {
        case 'Escape':
          _this.props.onCancel();

          _this.textareaRef.blur();

          break;

        case 'Enter':
          _this.textareaRef.blur();

          e.preventDefault();
          break;

        case 'Tab':
          _this.textareaRef.blur();

          break;

        default:
          break;
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(EditableCellField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.update();
      requestAnimationFrame(function () {
        _this2.textareaRef.focus();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.latestAnimationFrame);
      this.props.onCancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          value = _this$props.value,
          minWidth = _this$props.minWidth,
          minHeight = _this$props.minHeight,
          zIndex = _this$props.zIndex;
      var _this$state = this.state,
          left = _this$state.left,
          top = _this$state.top,
          height = _this$state.height,
          width = _this$state.width;
      return _react["default"].createElement(_textarea.Textarea, {
        innerRef: this.onRef,
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        appearance: "editable-cell",
        size: size,
        style: {
          left: left,
          top: top,
          height: height,
          minHeight: Math.max(height, minHeight),
          width: width,
          minWidth: Math.max(width, minWidth),
          zIndex: zIndex
        },
        height: null,
        width: null,
        minHeight: null,
        position: "fixed",
        defaultValue: value
      });
    }
  }]);
  return EditableCellField;
}(_react["default"].PureComponent);

exports["default"] = EditableCellField;
EditableCellField.displayName = "EditableCellField";
(0, _defineProperty2["default"])(EditableCellField, "propTypes", {
  /**
   * Used as the defaultValue of the textarea.
   */
  value: _propTypes["default"].string.isRequired,

  /**
   * The z-index placed on the element.
   */
  zIndex: _propTypes["default"].number.isRequired,

  /**
   * Function to get the target ref of the parent.
   * Used to mirror the position.
   */
  getTargetRef: _propTypes["default"].func.isRequired,

  /**
   * Min width of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minWidth: _propTypes["default"].number.isRequired,

  /**
   * Min height of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minHeight: _propTypes["default"].number.isRequired,

  /**
   * Called when the textarea is blurred, pass the value back to the cell.
   */
  onChangeComplete: _propTypes["default"].func.isRequired,

  /**
   * Called when Escape is hit or componentWillUnmount.
   */
  onCancel: _propTypes["default"].func.isRequired,

  /**
   * Text size of the textarea.
   */
  size: _propTypes["default"].number
});
(0, _defineProperty2["default"])(EditableCellField, "defaultProps", {
  minWidth: 80,
  minHeight: 40
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvRWRpdGFibGVDZWxsRmllbGQuanMiXSwibmFtZXMiOlsiRWRpdGFibGVDZWxsRmllbGQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ0YXJnZXRSZWYiLCJ0YWJsZUJvZHlSZWYiLCJyZWYiLCJpc1RhYmxlQm9keSIsImhhc0F0dHJpYnV0ZSIsInBhcmVudEVsZW1lbnQiLCJnZXRUYXJnZXRSZWYiLCJwcm9wcyIsImdldFRhYmxlQm9keVJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhcmdldFRvcCIsImJvdW5kcyIsIk1hdGgiLCJtaW4iLCJtYXgiLCJib3R0b20iLCJzZXRTdGF0ZSIsImxhdGVzdEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwidGV4dGFyZWFSZWYiLCJlIiwidGFyZ2V0Iiwic2VsZWN0aW9uU3RhcnQiLCJ2YWx1ZSIsImxlbmd0aCIsIm9uQ2hhbmdlQ29tcGxldGUiLCJrZXkiLCJvbkNhbmNlbCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzaXplIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJ6SW5kZXgiLCJzdGF0ZSIsIm9uUmVmIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUJsdXIiLCJoYW5kbGVGb2N1cyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7Ozs7OEZBbURYO0FBQ05DLE1BQUFBLEdBQUcsRUFBRSxDQURDO0FBRU5DLE1BQUFBLElBQUksRUFBRSxDQUZBO0FBR05DLE1BQUFBLE1BQU0sRUFBRSxDQUhGO0FBSU5DLE1BQUFBLEtBQUss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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSAnLi4vLi4vdGV4dGFyZWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRhYmxlQ2VsbEZpZWxkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVXNlZCBhcyB0aGUgZGVmYXVsdFZhbHVlIG9mIHRoZSB0ZXh0YXJlYS5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHotaW5kZXggcGxhY2VkIG9uIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gZ2V0IHRoZSB0YXJnZXQgcmVmIG9mIHRoZSBwYXJlbnQuXG4gICAgICogVXNlZCB0byBtaXJyb3IgdGhlIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIGdldFRhcmdldFJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIE1pbiB3aWR0aCBvZiB0aGUgdGV4dGFyZWEuXG4gICAgICogVGhlIHRleHRhcmVhIGNhbiBuZXZlciBiZSBzbWFsbGVyIHRoYW4gdGhlIGNlbGwuXG4gICAgICovXG4gICAgbWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIE1pbiBoZWlnaHQgb2YgdGhlIHRleHRhcmVhLlxuICAgICAqIFRoZSB0ZXh0YXJlYSBjYW4gbmV2ZXIgYmUgc21hbGxlciB0aGFuIHRoZSBjZWxsLlxuICAgICAqL1xuICAgIG1pbkhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHRleHRhcmVhIGlzIGJsdXJyZWQsIHBhc3MgdGhlIHZhbHVlIGJhY2sgdG8gdGhlIGNlbGwuXG4gICAgICovXG4gICAgb25DaGFuZ2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIEVzY2FwZSBpcyBoaXQgb3IgY29tcG9uZW50V2lsbFVubW91bnQuXG4gICAgICovXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUZXh0IHNpemUgb2YgdGhlIHRleHRhcmVhLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbWluV2lkdGg6IDgwLFxuICAgIG1pbkhlaWdodDogNDBcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMudGV4dGFyZWFSZWYuZm9jdXMoKVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhdGVzdEFuaW1hdGlvbkZyYW1lKVxuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKVxuICB9XG5cbiAgZ2V0VGFibGVCb2R5UmVmID0gdGFyZ2V0UmVmID0+IHtcbiAgICBpZiAodGhpcy50YWJsZUJvZHlSZWYpIHJldHVybiB0aGlzLnRhYmxlQm9keVJlZlxuXG4gICAgbGV0IHJlZiA9IHRhcmdldFJlZlxuICAgIHdoaWxlIChyZWYpIHtcbiAgICAgIGNvbnN0IGlzVGFibGVCb2R5ID0gcmVmLmhhc0F0dHJpYnV0ZSgnZGF0YS1ldmVyZ3JlZW4tdGFibGUtYm9keScpXG4gICAgICBpZiAoaXNUYWJsZUJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHJlZlxuICAgICAgfVxuXG4gICAgICBpZiAocmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmVmID0gcmVmLnBhcmVudEVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50YWJsZUJvZHlSZWYgPSByZWZcbiAgICByZXR1cm4gdGhpcy50YWJsZUJvZHlSZWZcbiAgfVxuXG4gIHVwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGdldFRhcmdldFJlZiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRhcmdldFJlZiA9IGdldFRhcmdldFJlZigpXG4gICAgaWYgKCF0YXJnZXRSZWYpIHJldHVyblxuICAgIGNvbnN0IHRhYmxlQm9keVJlZiA9IHRoaXMuZ2V0VGFibGVCb2R5UmVmKHRhcmdldFJlZilcblxuICAgIGNvbnN0IHtcbiAgICAgIGxlZnQsXG4gICAgICB0b3A6IHRhcmdldFRvcCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoXG4gICAgfSA9IHRhcmdldFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgbGV0IHRvcFxuICAgIGlmICh0YWJsZUJvZHlSZWYpIHtcbiAgICAgIGNvbnN0IGJvdW5kcyA9IHRhYmxlQm9keVJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgdG9wID0gTWF0aC5taW4oTWF0aC5tYXgodGFyZ2V0VG9wLCBib3VuZHMudG9wKSwgYm91bmRzLmJvdHRvbSAtIGhlaWdodClcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gdGFyZ2V0VG9wXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsZWZ0LFxuICAgICAgICAgIHRvcCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5sYXRlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG9uUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLnRleHRhcmVhUmVmID0gcmVmXG4gIH1cblxuICBoYW5kbGVGb2N1cyA9IGUgPT4ge1xuICAgIGUudGFyZ2V0LnNlbGVjdGlvblN0YXJ0ID0gZS50YXJnZXQudmFsdWUubGVuZ3RoXG4gIH1cblxuICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnRleHRhcmVhUmVmKSB0aGlzLnByb3BzLm9uQ2hhbmdlQ29tcGxldGUodGhpcy50ZXh0YXJlYVJlZi52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKClcbiAgICAgICAgdGhpcy50ZXh0YXJlYVJlZi5ibHVyKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgdGhpcy50ZXh0YXJlYVJlZi5ibHVyKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdUYWInOlxuICAgICAgICB0aGlzLnRleHRhcmVhUmVmLmJsdXIoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaXplLCB2YWx1ZSwgbWluV2lkdGgsIG1pbkhlaWdodCwgekluZGV4IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBsZWZ0LCB0b3AsIGhlaWdodCwgd2lkdGggfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dGFyZWFcbiAgICAgICAgaW5uZXJSZWY9e3RoaXMub25SZWZ9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgYXBwZWFyYW5jZT1cImVkaXRhYmxlLWNlbGxcIlxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgdG9wLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICBtaW5IZWlnaHQ6IE1hdGgubWF4KGhlaWdodCwgbWluSGVpZ2h0KSxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBtaW5XaWR0aDogTWF0aC5tYXgod2lkdGgsIG1pbldpZHRoKSxcbiAgICAgICAgICB6SW5kZXhcbiAgICAgICAgfX1cbiAgICAgICAgaGVpZ2h0PXtudWxsfVxuICAgICAgICB3aWR0aD17bnVsbH1cbiAgICAgICAgbWluSGVpZ2h0PXtudWxsfVxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG4iXX0=
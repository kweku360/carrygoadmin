import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import { Textarea } from '../../textarea';

var EditableCellField = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(EditableCellField, _React$PureComponent);

  var _super = _createSuper(EditableCellField);

  function EditableCellField() {
    var _this;

    _classCallCheck(this, EditableCellField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: 0,
      left: 0,
      height: 0,
      width: 0
    });

    _defineProperty(_assertThisInitialized(_this), "getTableBodyRef", function (targetRef) {
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

    _defineProperty(_assertThisInitialized(_this), "update", function () {
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

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.textareaRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e) {
      e.target.selectionStart = e.target.value.length;
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      if (_this.textareaRef) _this.props.onChangeComplete(_this.textareaRef.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
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

  _createClass(EditableCellField, [{
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
      return React.createElement(Textarea, {
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
}(React.PureComponent);

EditableCellField.displayName = "EditableCellField";

_defineProperty(EditableCellField, "propTypes", {
  /**
   * Used as the defaultValue of the textarea.
   */
  value: PropTypes.string.isRequired,

  /**
   * The z-index placed on the element.
   */
  zIndex: PropTypes.number.isRequired,

  /**
   * Function to get the target ref of the parent.
   * Used to mirror the position.
   */
  getTargetRef: PropTypes.func.isRequired,

  /**
   * Min width of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minWidth: PropTypes.number.isRequired,

  /**
   * Min height of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minHeight: PropTypes.number.isRequired,

  /**
   * Called when the textarea is blurred, pass the value back to the cell.
   */
  onChangeComplete: PropTypes.func.isRequired,

  /**
   * Called when Escape is hit or componentWillUnmount.
   */
  onCancel: PropTypes.func.isRequired,

  /**
   * Text size of the textarea.
   */
  size: PropTypes.number
});

_defineProperty(EditableCellField, "defaultProps", {
  minWidth: 80,
  minHeight: 40
});

export { EditableCellField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvRWRpdGFibGVDZWxsRmllbGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJUZXh0YXJlYSIsIkVkaXRhYmxlQ2VsbEZpZWxkIiwidG9wIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwidGFyZ2V0UmVmIiwidGFibGVCb2R5UmVmIiwicmVmIiwiaXNUYWJsZUJvZHkiLCJoYXNBdHRyaWJ1dGUiLCJwYXJlbnRFbGVtZW50IiwiZ2V0VGFyZ2V0UmVmIiwicHJvcHMiLCJnZXRUYWJsZUJvZHlSZWYiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YXJnZXRUb3AiLCJib3VuZHMiLCJNYXRoIiwibWluIiwibWF4IiwiYm90dG9tIiwic2V0U3RhdGUiLCJsYXRlc3RBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsInRleHRhcmVhUmVmIiwiZSIsInRhcmdldCIsInNlbGVjdGlvblN0YXJ0IiwidmFsdWUiLCJsZW5ndGgiLCJvbkNoYW5nZUNvbXBsZXRlIiwia2V5Iiwib25DYW5jZWwiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2l6ZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiekluZGV4Iiwic3RhdGUiLCJvblJlZiIsImhhbmRsZUtleURvd24iLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJQdXJlQ29tcG9uZW50Iiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixnQkFBekI7O0lBRXFCQyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs0REFtRFg7QUFDTkMsTUFBQUEsR0FBRyxFQUFFLENBREM7QUFFTkMs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R0FYLEVBQUFBLElBQUksRUFBRXhDLFNBQVMsQ0FBQ29EO0FBMUNDLEM7O2dCQURBbEQsaUIsa0JBOENHO0FBQ3BCdUMsRUFBQUEsUUFBUSxFQUFFLEVBRFU7QUFFcEJDLEVBQUFBLFNBQVMsRUFBRTtBQUZTLEM7O1NBOUNIeEMsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gJy4uLy4uL3RleHRhcmVhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0YWJsZUNlbGxGaWVsZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFVzZWQgYXMgdGhlIGRlZmF1bHRWYWx1ZSBvZiB0aGUgdGV4dGFyZWEuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB6LWluZGV4IHBsYWNlZCBvbiB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIGdldCB0aGUgdGFyZ2V0IHJlZiBvZiB0aGUgcGFyZW50LlxuICAgICAqIFVzZWQgdG8gbWlycm9yIHRoZSBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBnZXRUYXJnZXRSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBNaW4gd2lkdGggb2YgdGhlIHRleHRhcmVhLlxuICAgICAqIFRoZSB0ZXh0YXJlYSBjYW4gbmV2ZXIgYmUgc21hbGxlciB0aGFuIHRoZSBjZWxsLlxuICAgICAqL1xuICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBNaW4gaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYS5cbiAgICAgKiBUaGUgdGV4dGFyZWEgY2FuIG5ldmVyIGJlIHNtYWxsZXIgdGhhbiB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICBtaW5IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSB0ZXh0YXJlYSBpcyBibHVycmVkLCBwYXNzIHRoZSB2YWx1ZSBiYWNrIHRvIHRoZSBjZWxsLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBFc2NhcGUgaXMgaGl0IG9yIGNvbXBvbmVudFdpbGxVbm1vdW50LlxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGV4dCBzaXplIG9mIHRoZSB0ZXh0YXJlYS5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1pbldpZHRoOiA4MCxcbiAgICBtaW5IZWlnaHQ6IDQwXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlKClcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnRleHRhcmVhUmVmLmZvY3VzKClcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXRlc3RBbmltYXRpb25GcmFtZSlcbiAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKClcbiAgfVxuXG4gIGdldFRhYmxlQm9keVJlZiA9IHRhcmdldFJlZiA9PiB7XG4gICAgaWYgKHRoaXMudGFibGVCb2R5UmVmKSByZXR1cm4gdGhpcy50YWJsZUJvZHlSZWZcblxuICAgIGxldCByZWYgPSB0YXJnZXRSZWZcbiAgICB3aGlsZSAocmVmKSB7XG4gICAgICBjb25zdCBpc1RhYmxlQm9keSA9IHJlZi5oYXNBdHRyaWJ1dGUoJ2RhdGEtZXZlcmdyZWVuLXRhYmxlLWJvZHknKVxuICAgICAgaWYgKGlzVGFibGVCb2R5KSB7XG4gICAgICAgIHJldHVybiByZWZcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJlZiA9IHJlZi5wYXJlbnRFbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGFibGVCb2R5UmVmID0gcmVmXG4gICAgcmV0dXJuIHRoaXMudGFibGVCb2R5UmVmXG4gIH1cblxuICB1cGRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBnZXRUYXJnZXRSZWYgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0YXJnZXRSZWYgPSBnZXRUYXJnZXRSZWYoKVxuICAgIGlmICghdGFyZ2V0UmVmKSByZXR1cm5cbiAgICBjb25zdCB0YWJsZUJvZHlSZWYgPSB0aGlzLmdldFRhYmxlQm9keVJlZih0YXJnZXRSZWYpXG5cbiAgICBjb25zdCB7XG4gICAgICBsZWZ0LFxuICAgICAgdG9wOiB0YXJnZXRUb3AsXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aFxuICAgIH0gPSB0YXJnZXRSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGxldCB0b3BcbiAgICBpZiAodGFibGVCb2R5UmVmKSB7XG4gICAgICBjb25zdCBib3VuZHMgPSB0YWJsZUJvZHlSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHRvcCA9IE1hdGgubWluKE1hdGgubWF4KHRhcmdldFRvcCwgYm91bmRzLnRvcCksIGJvdW5kcy5ib3R0b20gLSBoZWlnaHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCA9IHRhcmdldFRvcFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMubGF0ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBvblJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy50ZXh0YXJlYVJlZiA9IHJlZlxuICB9XG5cbiAgaGFuZGxlRm9jdXMgPSBlID0+IHtcbiAgICBlLnRhcmdldC5zZWxlY3Rpb25TdGFydCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aFxuICB9XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy50ZXh0YXJlYVJlZikgdGhpcy5wcm9wcy5vbkNoYW5nZUNvbXBsZXRlKHRoaXMudGV4dGFyZWFSZWYudmFsdWUpXG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpXG4gICAgICAgIHRoaXMudGV4dGFyZWFSZWYuYmx1cigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIHRoaXMudGV4dGFyZWFSZWYuYmx1cigpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgdGhpcy50ZXh0YXJlYVJlZi5ibHVyKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2l6ZSwgdmFsdWUsIG1pbldpZHRoLCBtaW5IZWlnaHQsIHpJbmRleCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgbGVmdCwgdG9wLCBoZWlnaHQsIHdpZHRoIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRhcmVhXG4gICAgICAgIGlubmVyUmVmPXt0aGlzLm9uUmVmfVxuICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgIGFwcGVhcmFuY2U9XCJlZGl0YWJsZS1jZWxsXCJcbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBsZWZ0LFxuICAgICAgICAgIHRvcCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgbWluSGVpZ2h0OiBNYXRoLm1heChoZWlnaHQsIG1pbkhlaWdodCksXG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgbWluV2lkdGg6IE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksXG4gICAgICAgICAgekluZGV4XG4gICAgICAgIH19XG4gICAgICAgIGhlaWdodD17bnVsbH1cbiAgICAgICAgd2lkdGg9e251bGx9XG4gICAgICAgIG1pbkhlaWdodD17bnVsbH1cbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuIl19
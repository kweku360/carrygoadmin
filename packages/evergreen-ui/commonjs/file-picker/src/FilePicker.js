"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CLASS_PREFIX = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _buttons = require("../../buttons");

var _textInput = require("../../text-input");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CLASS_PREFIX = 'evergreen-file-picker';
exports.CLASS_PREFIX = CLASS_PREFIX;

var FilePicker = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FilePicker, _PureComponent);

  var _super = _createSuper(FilePicker);

  function FilePicker() {
    var _this;

    (0, _classCallCheck2["default"])(this, FilePicker);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fileInputRef", function (node) {
      _this.fileInput = node;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFileChange", function (e) {
      // Firefox returns the same array instance each time for some reason
      var files = (0, _toConsumableArray2["default"])(e.target.files);

      _this.setState({
        files: files
      });

      (0, _safeInvoke["default"])(_this.props.onChange, files);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleButtonClick", function () {
      _this.fileInput.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function (e) {
      // Setting e.target.files to an array fails. It must be a FileList
      if (e && e.target) e.target.files = _this.fileInput && _this.fileInput.files;
      (0, _safeInvoke["default"])(_this.props.onBlur, e);
    });
    _this.state = {
      files: []
    };
    return _this;
  }

  (0, _createClass2["default"])(FilePicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          accept = _this$props.accept,
          required = _this$props.required,
          multiple = _this$props.multiple,
          disabled = _this$props.disabled,
          capture = _this$props.capture,
          height = _this$props.height,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["name", "accept", "required", "multiple", "disabled", "capture", "height", "onChange", "placeholder"]);
      var files = this.state.files;
      var inputValue;

      if (files.length === 0) {
        inputValue = '';
      } else if (files.length === 1) {
        inputValue = files[0].name;
      } else {
        inputValue = "".concat(files.length, " files");
      }

      var buttonText;

      if (files.length === 0) {
        buttonText = 'Select file';
      } else if (files.length === 1) {
        buttonText = 'Replace file';
      } else {
        buttonText = 'Replace files';
      }

      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        display: "flex",
        className: "".concat(CLASS_PREFIX, "-root")
      }, props), _react["default"].createElement(_uiBox["default"], {
        innerRef: this.fileInputRef,
        className: "".concat(CLASS_PREFIX, "-file-input"),
        is: "input",
        type: "file",
        name: name,
        accept: accept,
        required: required,
        multiple: multiple,
        disabled: disabled,
        capture: capture,
        onChange: this.handleFileChange,
        display: "none"
      }), _react["default"].createElement(_textInput.TextInput, {
        className: "".concat(CLASS_PREFIX, "-text-input"),
        readOnly: true,
        value: inputValue,
        placeholder: placeholder // There's a weird specifity issue when there's two differently sized inputs on the page
        ,
        borderTopRightRadius: "0 !important",
        borderBottomRightRadius: "0 !important",
        height: height,
        flex: 1,
        textOverflow: "ellipsis",
        onBlur: this.handleBlur
      }), _react["default"].createElement(_buttons.Button, {
        className: "".concat(CLASS_PREFIX, "-button"),
        onClick: this.handleButtonClick,
        disabled: disabled,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        height: height,
        flexShrink: 0,
        type: "button",
        onBlur: this.handleBlur
      }, buttonText));
    }
  }]);
  return FilePicker;
}(_react.PureComponent);

exports["default"] = FilePicker;
FilePicker.displayName = "FilePicker";
(0, _defineProperty2["default"])(FilePicker, "propTypes", {
  /**
   * Name attribute of the input.
   */
  name: _propTypes["default"].string,

  /**
   * The accept attribute of the input.
   */
  accept: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),

  /**
   * When true, the file picker is required.
   */
  required: _propTypes["default"].bool,

  /**
   * When true, accept multiple files.
   */
  multiple: _propTypes["default"].bool,

  /**
   * When true, the filepicker is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * The capture attribute of the input.
   */
  capture: _propTypes["default"].bool,

  /**
   * The height of the file picker.
   */
  height: _propTypes["default"].number,

  /**
   * Function called when onChange is fired
   */
  onChange: _propTypes["default"].func,

  /**
   * Function called when onBlur is fired
   */
  onBlur: _propTypes["default"].func,

  /**
   * Placeholder of the text input
   */
  placeholder: _propTypes["default"].string
});
(0, _defineProperty2["default"])(FilePicker, "defaultProps", {
  placeholder: 'Select a file to upload…'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWxlLXBpY2tlci9zcmMvRmlsZVBpY2tlci5qcyJdLCJuYW1lcyI6WyJDTEFTU19QUkVGSVgiLCJGaWxlUGlja2VyIiwibm9kZSIsImZpbGVJbnB1dCIsImUiLCJmaWxlcyIsInRhcmdldCIsInNldFN0YXRlIiwicHJvcHMiLCJvbkNoYW5nZSIsImNsaWNrIiwib25CbHVyIiwic3RhdGUiLCJuYW1lIiwiYWNjZXB0IiwicmVxdWlyZWQiLCJtdWx0aXBsZSIsImRpc2FibGVkIiwiY2FwdHVyZSIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwiaW5wdXRWYWx1ZSIsImxlbmd0aCIsImJ1dHRvblRleHQiLCJmaWxlSW5wdXRSZWYiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJib29sIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxZQUFZLEdBQUcsdUJBQXJCOzs7SUFFY0MsVTs7Ozs7QUE0RG5CLHdCQUFjO0FBQUE7O0FBQUE7QUFDWjtBQURZLHFHQXlGQyxVQUFBQyxJQUFJLEVBQUk7QUFDckIsWUFBS0MsU0FBTCxHQUFpQkQsSUFBakI7QUFDRCxLQTNGYTtBQUFBLHlHQTZGSyxVQUFBRSxDQUFDLEVBQUk7QUFDdEI7QUFDQSxVQUFNQyxLQUFLLHVDQUFPRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsS0FBaEIsQ0FBWDs7QUFFQSxZQUFLRSxRQUFMLENBQWM7QUFBRUYsUUFBQUEsS0FBSyxFQUFMQTtBQUFGLE9BQWQ7O0FBRUEsa0NBQVcsTUFBS0csS0FBTCxDQUFXQyxRQUF0QixFQUFnQ0osS0FBaEM7QUFDRCxLQXBHYTtBQUFB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NENqQjs7O0FBR0F4QixFQUFBQSxNQUFNLEVBQUVrQixzQkFBVU0sSUEvQ0Q7O0FBaURqQjs7O0FBR0FmLEVBQUFBLFdBQVcsRUFBRVMsc0JBQVVDO0FBcEROLEM7aUNBREE3QixVLGtCQXdERztBQUNwQm1CLEVBQUFBLFdBQVcsRUFBRTtBQURPLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vdGV4dC1pbnB1dCdcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcblxuZXhwb3J0IGNvbnN0IENMQVNTX1BSRUZJWCA9ICdldmVyZ3JlZW4tZmlsZS1waWNrZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVQaWNrZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY2NlcHQgYXR0cmlidXRlIG9mIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICBhY2NlcHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBmaWxlIHBpY2tlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGFjY2VwdCBtdWx0aXBsZSBmaWxlcy5cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBmaWxlcGlja2VyIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYXB0dXJlIGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgY2FwdHVyZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBmaWxlIHBpY2tlci5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvbkNoYW5nZSBpcyBmaXJlZFxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIG9uQmx1ciBpcyBmaXJlZFxuICAgICAqL1xuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBvZiB0aGUgdGV4dCBpbnB1dFxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGEgZmlsZSB0byB1cGxvYWTigKYnXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZXM6IFtdXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBhY2NlcHQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBjYXB0dXJlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25DaGFuZ2UsIC8vIFJlbW92ZSBvbkNoYW5nZSBmcm9tIHByb3BzXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGZpbGVzIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgaW5wdXRWYWx1ZVxuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlucHV0VmFsdWUgPSAnJ1xuICAgIH0gZWxzZSBpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBpbnB1dFZhbHVlID0gZmlsZXNbMF0ubmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFZhbHVlID0gYCR7ZmlsZXMubGVuZ3RofSBmaWxlc2BcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uVGV4dFxuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnU2VsZWN0IGZpbGUnXG4gICAgfSBlbHNlIGlmIChmaWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnUmVwbGFjZSBmaWxlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1JlcGxhY2UgZmlsZXMnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tcm9vdGB9IHsuLi5wcm9wc30+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBpbm5lclJlZj17dGhpcy5maWxlSW5wdXRSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LWZpbGUtaW5wdXRgfVxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGFjY2VwdD17YWNjZXB0fVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGNhcHR1cmU9e2NhcHR1cmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgICBkaXNwbGF5PVwibm9uZVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS10ZXh0LWlucHV0YH1cbiAgICAgICAgICByZWFkT25seVxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAvLyBUaGVyZSdzIGEgd2VpcmQgc3BlY2lmaXR5IGlzc3VlIHdoZW4gdGhlcmUncyB0d28gZGlmZmVyZW50bHkgc2l6ZWQgaW5wdXRzIG9uIHRoZSBwYWdlXG4gICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPVwiMCAhaW1wb3J0YW50XCJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgIHRleHRPdmVyZmxvdz1cImVsbGlwc2lzXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LWJ1dHRvbmB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCdXR0b25DbGlja31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cz17MH1cbiAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPXswfVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7YnV0dG9uVGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBmaWxlSW5wdXRSZWYgPSBub2RlID0+IHtcbiAgICB0aGlzLmZpbGVJbnB1dCA9IG5vZGVcbiAgfVxuXG4gIGhhbmRsZUZpbGVDaGFuZ2UgPSBlID0+IHtcbiAgICAvLyBGaXJlZm94IHJldHVybnMgdGhlIHNhbWUgYXJyYXkgaW5zdGFuY2UgZWFjaCB0aW1lIGZvciBzb21lIHJlYXNvblxuICAgIGNvbnN0IGZpbGVzID0gWy4uLmUudGFyZ2V0LmZpbGVzXVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzIH0pXG5cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25DaGFuZ2UsIGZpbGVzKVxuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5maWxlSW5wdXQuY2xpY2soKVxuICB9XG5cbiAgaGFuZGxlQmx1ciA9IGUgPT4ge1xuICAgIC8vIFNldHRpbmcgZS50YXJnZXQuZmlsZXMgdG8gYW4gYXJyYXkgZmFpbHMuIEl0IG11c3QgYmUgYSBGaWxlTGlzdFxuICAgIGlmIChlICYmIGUudGFyZ2V0KSBlLnRhcmdldC5maWxlcyA9IHRoaXMuZmlsZUlucHV0ICYmIHRoaXMuZmlsZUlucHV0LmZpbGVzXG5cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25CbHVyLCBlKVxuICB9XG59XG4iXX0=
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var _IconWrapper = require("../../icons/src/IconWrapper");

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var invisibleInputClass = (0, _glamor.css)({
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',
  '&:focus': {
    outline: 'none'
  },
  '&::placeholder': {
    color: "rgba(67, 90, 111, 0.7)"
  }
}).toString();

var SearchTableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SearchTableHeaderCell, _PureComponent);

  var _super = _createSuper(SearchTableHeaderCell);

  function SearchTableHeaderCell() {
    (0, _classCallCheck2["default"])(this, SearchTableHeaderCell);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SearchTableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          children = _this$props.children,
          _onChange = _this$props.onChange,
          autoFocus = _this$props.autoFocus,
          spellCheck = _this$props.spellCheck,
          placeholder = _this$props.placeholder,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"]);
      return _react["default"].createElement(_TableHeaderCell["default"], props, _react["default"].createElement(_IconWrapper.IconWrapper, {
        icon: icon,
        color: "muted",
        marginLeft: 2,
        marginRight: 10,
        size: 12
      }), _react["default"].createElement(_typography.Text, {
        is: "input",
        size: 300,
        flex: "1",
        className: invisibleInputClass,
        value: value,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        autoFocus: autoFocus,
        spellCheck: spellCheck,
        fontWeight: 500,
        marginLeft: -2,
        paddingLeft: 0,
        placeholder: placeholder
      }));
    }
  }]);
  return SearchTableHeaderCell;
}(_react.PureComponent);

exports["default"] = SearchTableHeaderCell;
SearchTableHeaderCell.displayName = "SearchTableHeaderCell";
(0, _defineProperty2["default"])(SearchTableHeaderCell, "propTypes", _objectSpread({}, _TableHeaderCell["default"].propTypes, {
  /**
   * The value of the input.
   */
  value: _propTypes["default"].string,

  /**
   * Handler to be called when the input changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: _propTypes["default"].bool,

  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: _propTypes["default"].string,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: _propTypes["default"].node
}));
(0, _defineProperty2["default"])(SearchTableHeaderCell, "defaultProps", {
  onChange: function onChange() {},
  spellCheck: true,
  placeholder: 'Filter...',
  icon: 'search'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VhcmNoVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbImludmlzaWJsZUlucHV0Q2xhc3MiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJvdXRsaW5lIiwiY29sb3IiLCJ0b1N0cmluZyIsIlNlYXJjaFRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwidmFsdWUiLCJjaGlsZHJlbiIsIm9uQ2hhbmdlIiwiYXV0b0ZvY3VzIiwic3BlbGxDaGVjayIsInBsYWNlaG9sZGVyIiwiaWNvbiIsImUiLCJ0YXJnZXQiLCJQdXJlQ29tcG9uZW50IiwiVGFibGVIZWFkZXJDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxpQkFBSTtBQUM5QkMsRUFBQUEsTUFBTSxFQUFFLE1BRHNCO0FBRTlCQyxFQUFBQSxlQUFlLEVBQUUsYUFGYTtBQUc5QkMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFIWTtBQUk5QkMsRUFBQUEsYUFBYSxFQUFFLE1BSmU7QUFLOUJDLEVBQUFBLG1CQUFtQixFQUFFLGFBTFM7QUFPOUIsYUFBVztBQUNUQyxJQUFBQSxPQUFPLEVBQUU7QUFEQSxHQVBtQjtBQVc5QixvQkFBa0I7QUFDaEJDLElBQUFBLEtBQUs7QUFEVztBQVhZLENBQUosRUFjekJDLFFBZHlCLEVBQTVCOztJQWdCcUJDLHFCOzs7Ozs7Ozs7Ozs7NkJBNkNWO0FBQUEsd0JBVUgsS0FBS0MsS0FWRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBR0xDLFFBSEssZUFHTEEsUUFISztBQUFBLFVBSUxDLFNBSkssZUFJTEEsUUFKSztBQUFBLFVBS0xDLFNBTEssZUFLTEEsU0FMSztBQUFBLFVBTUxDLFVBTkssZUFNTEEsVUFOSztBQUFBLFVBT0xDLFdBUEssZUFPTEEsV0FQSztBQUFBLFVBUUxDLElBUkssZUFRTEEsSUFSSztBQUFBLFVBU0ZQLEtBVEU7QUFZUCxhQUNFLGdDQUFDLDJCQUFELEVBQXFCQSxLQUFyQixFQUNFLGdDQUFDLHdCQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUVPLElBRFI7QUFFRSxRQUFBLEtBQUssRUFBQyxPQUZSO0FBR0UsUUFBQSxVQUFVLEVBQUUsQ0FIZDtBQUlFLFFBQUEsV0FBVyxFQUFFLEVBSmY7QUFLRSxRQUFBLElBQUksRUFBRTtBQUxSLFFBREYsRUFRRSxnQ0FBQyxnQkFBRDtBQUNFLFFBQUEsRUFBRSxFQUFDLE9BREw7QUFFRSxRQUFBLElBQUksRUFBRSxHQUZSO0FBR0UsUUFBQSxJQUFJLEVBQUMsR0FIUDtBQUlFLFFBQUEsU0FBUyxFQUFFakIsbUJBSmI7QUFLRSxRQUFBLEtBQUssRUFBRVcsS0FMVDtBQU1FLFFBQUEsUUFBUSxFQUFFLGtCQUFBTyxDQUFDO0FBQUEsaUJBQUlMLFNBQVEsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNSLEtBQVYsQ0FBWjtBQUFBLFNBTmI7QUFPRSxRQUFBLFNBQVMsRUFBRUcsU0FQYjtBQVFFLFFBQUEsVUFBVSxFQUFFQyxVQVJkO0FBU0UsUUFBQSxVQUFVLEVBQUUsR0FUZDtBQVVFLFFBQUEsVUFBVSxFQUFFLENBQUMsQ0FWZjtBQVdFLFFBQUEsV0FBVyxFQUFFLENBWGY7QUFZRSxRQUFBLFdBQVcsRUFBRUM7QUFaZixRQVJGLENBREY7QUF5QkQ7OztFQWxGZ0RJLG9COzs7QUFBOUJYLHFCO2lDQUFBQSxxQixpQ0FLZFksNEJBQWdCQyxTO0FBRW5COzs7QUFHQVgsRUFBQUEsS0FBSyxFQUFFWSxzQkFBVUMsTTs7QUFFakI7OztBQUdBWCxFQUFBQSxRQUFRLEVBQUVVLHNCQUFVRSxJOztBQUVwQjs7O0FBR0FYLEVBQUFBLFNBQVMsRUFBRVMsc0JBQVVHLEk7O0FBRXJCOzs7QUFHQVgsRUFBQUEsVUFBVSxFQUFFUSxzQkFBVUcsSTs7QUFFdEI7OztBQUdBVixFQUFBQSxXQUFXLEVBQUVPLHNCQUFVQyxNOztBQUV2Qjs7O0FBR0FQLEVBQUFBLElBQUksRUFBRU0sc0JBQVVJOztpQ0FuQ0NsQixxQixrQkFzQ0c7QUFDcEJJLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBREU7QUFFcEJFLEVBQUFBLFVBQVUsRUFBRSxJQUZRO0FBR3BCQyxFQUFBQSxXQUFXLEVBQUUsV0FITztBQUlwQkMsRUFBQUEsSUFBSSxFQUFFO0FBSmMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb25XcmFwcGVyIH0gZnJvbSAnLi4vLi4vaWNvbnMvc3JjL0ljb25XcmFwcGVyJ1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcblxuY29uc3QgaW52aXNpYmxlSW5wdXRDbGFzcyA9IGNzcyh7XG4gIGJvcmRlcjogJ25vbmUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgTW96QXBwZWFyYW5jZTogJ25vbmUnLFxuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuXG4gICcmOmZvY3VzJzoge1xuICAgIG91dGxpbmU6ICdub25lJ1xuICB9LFxuXG4gICcmOjpwbGFjZWhvbGRlcic6IHtcbiAgICBjb2xvcjogYHJnYmEoNjcsIDkwLCAxMTEsIDAuNylgXG4gIH1cbn0pLnRvU3RyaW5nKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoVGFibGVIZWFkZXJDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRhYmxlSGVhZGVyQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciB0aGUgY29tcG9uZW50IHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGZvY3VzZWQgb24gY29tcG9uZW50IHJlbmRlci5cbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIGFwcGx5IHNwZWxsIGNoZWNraW5nIHRvIHRoZSBjb250ZW50LlxuICAgICAqL1xuICAgIHNwZWxsQ2hlY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGV4dCB0byBkaXNwbGF5IGluIHRoZSBpbnB1dCBpZiB0aGUgaW5wdXQgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgRXZlcmdyZWVuIG9yIGN1c3RvbSBpY29uIGJlZm9yZSB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHNwZWxsQ2hlY2s6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6ICdGaWx0ZXIuLi4nLFxuICAgIGljb246ICdzZWFyY2gnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgc3BlbGxDaGVjayxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaWNvbixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVIZWFkZXJDZWxsIHsuLi5wcm9wc30+XG4gICAgICAgIDxJY29uV3JhcHBlclxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgY29sb3I9XCJtdXRlZFwiXG4gICAgICAgICAgbWFyZ2luTGVmdD17Mn1cbiAgICAgICAgICBtYXJnaW5SaWdodD17MTB9XG4gICAgICAgICAgc2l6ZT17MTJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgc2l6ZT17MzAwfVxuICAgICAgICAgIGZsZXg9XCIxXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2ludmlzaWJsZUlucHV0Q2xhc3N9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9Gb2N1c31cbiAgICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICAgIGZvbnRXZWlnaHQ9ezUwMH1cbiAgICAgICAgICBtYXJnaW5MZWZ0PXstMn1cbiAgICAgICAgICBwYWRkaW5nTGVmdD17MH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlSGVhZGVyQ2VsbD5cbiAgICApXG4gIH1cbn1cbiJdfQ==
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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _icons = require("../../icons");

var _layers = require("../../layers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FormFieldValidationMessage = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FormFieldValidationMessage, _PureComponent);

  var _super = _createSuper(FormFieldValidationMessage);

  function FormFieldValidationMessage() {
    (0, _classCallCheck2["default"])(this, FormFieldValidationMessage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormFieldValidationMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "children"]);
      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        display: "flex"
      }, props), _react["default"].createElement(_icons.ErrorIcon, {
        color: "danger",
        marginTop: 1,
        size: 14,
        marginRight: 8
      }), _react["default"].createElement(_typography.Paragraph, {
        marginTop: 0,
        size: 300,
        color: "danger",
        role: "alert"
      }, children));
    }
  }]);
  return FormFieldValidationMessage;
}(_react.PureComponent);

FormFieldValidationMessage.displayName = "FormFieldValidationMessage";
(0, _defineProperty2["default"])(FormFieldValidationMessage, "propTypes", _objectSpread({}, _layers.Pane.propTypes, {
  /**
   * The contents of the validation message.
   * This is wrapped in a paragraph, use a string.
   */
  children: _propTypes["default"].node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));

var _default = (0, _theme.withTheme)(FormFieldValidationMessage);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSIsInByb3BzIiwidGhlbWUiLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiLCJQYW5lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLDBCOzs7Ozs7Ozs7Ozs7NkJBbUJLO0FBQUEsd0JBQytCLEtBQUtDLEtBRHBDO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsUUFEUixlQUNRQSxRQURSO0FBQUEsVUFDcUJGLEtBRHJCO0FBRVAsYUFDRSxnQ0FBQyxZQUFEO0FBQU0sUUFBQSxPQUFPLEVBQUM7QUFBZCxTQUF5QkEsS0FBekIsR0FDRSxnQ0FBQyxnQkFBRDtBQUFXLFFBQUEsS0FBSyxFQUFDLFFBQWpCO0FBQTBCLFFBQUEsU0FBUyxFQUFFLENBQXJDO0FBQXdDLFFBQUEsSUFBSSxFQUFFLEVBQTlDO0FBQWtELFFBQUEsV0FBVyxFQUFFO0FBQS9ELFFBREYsRUFFRSxnQ0FBQyxxQkFBRDtBQUFXLFFBQUEsU0FBUyxFQUFFLENBQXRCO0FBQXlCLFFBQUEsSUFBSSxFQUFFLEdBQS9CO0FBQW9DLFFBQUEsS0FBSyxFQUFDLFFBQTFDO0FBQW1ELFFBQUEsSUFBSSxFQUFDO0FBQXhELFNBQ0dFLFFBREgsQ0FGRixDQURGO0FBUUQ7OztFQTdCc0NDLG9COztBQUFuQ0osMEI7aUNBQUFBLDBCLGlDQUtDSyxhQUFLQyxTO0FBRVI7Ozs7QUFJQUgsRUFBQUEsUUFBUSxFQUFFSSxzQkFBVUMsSTs7QUFFcEI7OztBQUdBTixFQUFBQSxLQUFLLEVBQUVLLHNCQUFVRSxNQUFWLENBQWlCQzs7O2VBZ0JiLHNCQUFVViwwQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IEVycm9ySWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcblxuY2xhc3MgRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudHMgb2YgdGhlIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICAgKiBUaGlzIGlzIHdyYXBwZWQgaW4gYSBwYXJhZ3JhcGgsIHVzZSBhIHN0cmluZy5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8RXJyb3JJY29uIGNvbG9yPVwiZGFuZ2VyXCIgbWFyZ2luVG9wPXsxfSBzaXplPXsxNH0gbWFyZ2luUmlnaHQ9ezh9IC8+XG4gICAgICAgIDxQYXJhZ3JhcGggbWFyZ2luVG9wPXswfSBzaXplPXszMDB9IGNvbG9yPVwiZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlKVxuIl19
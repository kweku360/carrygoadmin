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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _badges = require("../../badges");

var _icons = require("../../icons");

var _scales = require("../../scales");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tag = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Tag, _React$PureComponent);

  var _super = _createSuper(Tag);

  function Tag() {
    (0, _classCallCheck2["default"])(this, Tag);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onRemove = _this$props.onRemove,
          isRemovable = _this$props.isRemovable,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "onRemove", "isRemovable"]);
      var badgeStyles = {
        alignItems: 'center',
        display: 'inline-flex',
        fontWeight: 400,
        textTransform: 'none'
      };

      if (isRemovable) {
        badgeStyles.paddingRight = (0, _scales.minorScale)(1);
      }

      return _react["default"].createElement(_badges.Badge, (0, _extends2["default"])({
        isInteractive: true
      }, badgeStyles, props), children, isRemovable && _react["default"].createElement(_icons.CrossIcon, {
        marginLeft: (0, _scales.minorScale)(1),
        onClick: onRemove,
        size: (0, _scales.minorScale)(3)
      }));
    }
  }]);
  return Tag;
}(_react["default"].PureComponent);

Tag.displayName = "Tag";
(0, _defineProperty2["default"])(Tag, "propTypes", {
  /** The badge content */
  children: _propTypes["default"].node,

  /**
   * Callback invoked when the removal icon is clicked.
   * (event) => void
   */
  onRemove: _propTypes["default"].func,

  /** Whether or not the tag can be removed. */
  isRemovable: _propTypes["default"].bool
});
var _default = Tag;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWctaW5wdXQvc3JjL1RhZy5qcyJdLCJuYW1lcyI6WyJUYWciLCJwcm9wcyIsImNoaWxkcmVuIiwib25SZW1vdmUiLCJpc1JlbW92YWJsZSIsImJhZGdlU3R5bGVzIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsInBhZGRpbmdSaWdodCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsRzs7Ozs7Ozs7Ozs7OzZCQWFLO0FBQUEsd0JBQytDLEtBQUtDLEtBRHBEO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsUUFEWCxlQUNXQSxRQURYO0FBQUEsVUFDcUJDLFdBRHJCLGVBQ3FCQSxXQURyQjtBQUFBLFVBQ3FDSCxLQURyQztBQUdQLFVBQU1JLFdBQVcsR0FBRztBQUNsQkMsUUFBQUEsVUFBVSxFQUFFLFFBRE07QUFFbEJDLFFBQUFBLE9BQU8sRUFBRSxhQUZTO0FBR2xCQyxRQUFBQSxVQUFVLEVBQUUsR0FITTtBQUlsQkMsUUFBQUEsYUFBYSxFQUFFO0FBSkcsT0FBcEI7O0FBT0EsVUFBSUwsV0FBSixFQUFpQjtBQUNmQyxRQUFBQSxXQUFXLENBQUNLLFlBQVosR0FBMkIsd0JBQVcsQ0FBWCxDQUEzQjtBQUNEOztBQUVELGFBQ0UsZ0NBQUMsYUFBRDtBQUFPLFFBQUEsYUFBYTtBQUFwQixTQUF5QkwsV0FBekIsRUFBMENKLEtBQTFDLEdBQ0dDLFFBREgsRUFFR0UsV0FBVyxJQUNWLGdDQUFDLGdCQUFEO0FBQ0UsUUFBQSxVQUFVLEVBQUUsd0JBQVcsQ0FBWCxDQURkO0FBRUUsUUFBQSxPQUFPLEVBQUVELFFBRlg7QUFHRSxRQUFBLElBQUksRUFBRSx3QkFBVyxDQUFYO0FBSFIsUUFISixDQURGO0FBWUQ7OztFQXZDZVEsa0JBQU1DLGE7O0FBQWxCWixHO2lDQUFBQSxHLGVBQ2U7QUFDakI7QUFDQUUsRUFBQUEsUUFBUSxFQUFFVyxzQkFBVUMsSUFGSDs7QUFHakI7Ozs7QUFJQVgsRUFBQUEsUUFBUSxFQUFFVSxzQkFBVUUsSUFQSDs7QUFRakI7QUFDQVgsRUFBQUEsV0FBVyxFQUFFUyxzQkFBVUc7QUFUTixDO2VBeUNOaEIsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG92ZXJ2aWV3IFRhZ0lucHV0IGFjY2VwdHMgbXVsdGlwbGUgdmFsdWVzIHRoYXQgY2FuIGJlIGluZGl2aWR1YWxseSByZW1vdmVkXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICcuLi8uLi9iYWRnZXMnXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IG1pbm9yU2NhbGUgfSBmcm9tICcuLi8uLi9zY2FsZXMnXG5cbmNsYXNzIFRhZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBUaGUgYmFkZ2UgY29udGVudCAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIHJlbW92YWwgaWNvbiBpcyBjbGlja2VkLlxuICAgICAqIChldmVudCkgPT4gdm9pZFxuICAgICAqL1xuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKiogV2hldGhlciBvciBub3QgdGhlIHRhZyBjYW4gYmUgcmVtb3ZlZC4gKi9cbiAgICBpc1JlbW92YWJsZTogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBvblJlbW92ZSwgaXNSZW1vdmFibGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBiYWRnZVN0eWxlcyA9IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJ1xuICAgIH1cblxuICAgIGlmIChpc1JlbW92YWJsZSkge1xuICAgICAgYmFkZ2VTdHlsZXMucGFkZGluZ1JpZ2h0ID0gbWlub3JTY2FsZSgxKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8QmFkZ2UgaXNJbnRlcmFjdGl2ZSB7Li4uYmFkZ2VTdHlsZXN9IHsuLi5wcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2lzUmVtb3ZhYmxlICYmIChcbiAgICAgICAgICA8Q3Jvc3NJY29uXG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXttaW5vclNjYWxlKDEpfVxuICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmV9XG4gICAgICAgICAgICBzaXplPXttaW5vclNjYWxlKDMpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0JhZGdlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdcbiJdfQ==
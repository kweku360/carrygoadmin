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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _icons = require("../../icons");

var _textInput = require("../../text-input");

var _theme = require("../../theme");

var _constants = require("../../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SearchInput = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SearchInput, _PureComponent);

  var _super = _createSuper(SearchInput);

  function SearchInput() {
    (0, _classCallCheck2["default"])(this, SearchInput);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SearchInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          height = _this$props.height,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "appearance", "disabled", "height"]);

      var _splitBoxProps = (0, _uiBox.splitBoxProps)(props),
          matchedProps = _splitBoxProps.matchedProps,
          remainingProps = _splitBoxProps.remainingProps;

      var width = matchedProps.width;
      var iconSize = theme.getIconSizeForInput(height);
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        position: "relative",
        display: "inline-flex",
        height: height
      }, matchedProps), _react["default"].createElement(_uiBox["default"], {
        height: height,
        width: height,
        pointerEvents: "none",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }, _react["default"].createElement(_icons.SearchIcon, {
        color: "default",
        zIndex: _constants.StackingOrder.FOCUSED + 1,
        size: iconSize
      })), _react["default"].createElement(_textInput.TextInput, (0, _extends2["default"])({
        height: height,
        paddingLeft: height,
        appearance: appearance,
        disabled: disabled,
        width: width,
        type: "search"
      }, remainingProps)));
    }
  }]);
  return SearchInput;
}(_react.PureComponent);

SearchInput.displayName = "SearchInput";
(0, _defineProperty2["default"])(SearchInput, "propTypes", _objectSpread({}, _textInput.TextInput.propTypes));
(0, _defineProperty2["default"])(SearchInput, "defaultProps", {
  height: 32,
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(SearchInput);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWFyY2gtaW5wdXQvc3JjL1NlYXJjaElucHV0LmpzIl0sIm5hbWVzIjpbIlNlYXJjaElucHV0IiwicHJvcHMiLCJ0aGVtZSIsImFwcGVhcmFuY2UiLCJkaXNhYmxlZCIsImhlaWdodCIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwid2lkdGgiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9ySW5wdXQiLCJTdGFja2luZ09yZGVyIiwiRk9DVVNFRCIsIlB1cmVDb21wb25lbnQiLCJUZXh0SW5wdXQiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs2QkFhSztBQUFBLHdCQUNtRCxLQUFLQyxLQUR4RDtBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFVBRFIsZUFDUUEsVUFEUjtBQUFBLFVBQ29CQyxRQURwQixlQUNvQkEsUUFEcEI7QUFBQSxVQUM4QkMsTUFEOUIsZUFDOEJBLE1BRDlCO0FBQUEsVUFDeUNKLEtBRHpDOztBQUFBLDJCQUVrQywwQkFBY0EsS0FBZCxDQUZsQztBQUFBLFVBRUNLLFlBRkQsa0JBRUNBLFlBRkQ7QUFBQSxVQUVlQyxjQUZmLGtCQUVlQSxjQUZmOztBQUFBLFVBR0NDLEtBSEQsR0FHV0YsWUFIWCxDQUdDRSxLQUhEO0FBSVAsVUFBTUMsUUFBUSxHQUFHUCxLQUFLLENBQUNRLG1CQUFOLENBQTBCTCxNQUExQixDQUFqQjtBQUVBLGFBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxRQUFBLFFBQVEsRUFBQyxVQURYO0FBRUUsUUFBQSxPQUFPLEVBQUMsYUFGVjtBQUdFLFFBQUEsTUFBTSxFQUFFQTtBQUhWLFNBSU1DLFlBSk4sR0FNRSxnQ0FBQyxpQkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFRCxNQURWO0FBRUUsUUFBQSxLQUFLLEVBQUVBLE1BRlQ7QUFHRSxRQUFBLGFBQWEsRUFBQyxNQUhoQjtBQUlFLFFBQUEsUUFBUSxFQUFDLFVBSlg7QUFLRSxRQUFBLE9BQU8sRUFBQyxNQUxWO0FBTUUsUUFBQSxjQUFjLEVBQUMsUUFOakI7QUFPRSxRQUFBLFVBQVUsRUFBQztBQVBiLFNBU0UsZ0NBQUMsaUJBQUQ7QUFDRSxRQUFBLEtBQUssRUFBQyxTQURSO0FBRUUsUUFBQSxNQUFNLEVBQUVNLHlCQUFjQyxPQUFkLEdBQXdCLENBRmxDO0FBR0UsUUFBQSxJQUFJLEVBQUVIO0FBSFIsUUFURixDQU5GLEVBcUJFLGdDQUFDLG9CQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUVKLE1BRFY7QUFFRSxRQUFBLFdBQVcsRUFBRUEsTUFGZjtBQUdFLFFBQUEsVUFBVSxFQUFFRixVQUhkO0FBSUUsUUFBQSxRQUFRLEVBQUVDLFFBSlo7QUFLRSxRQUFBLEtBQUssRUFBRUksS0FMVDtBQU1FLFFBQUEsSUFBSSxFQUFDO0FBTlAsU0FPTUQsY0FQTixFQXJCRixDQURGO0FBaUNEOzs7RUFwRHVCTSxvQjs7QUFBcEJiLFc7aUNBQUFBLFcsaUNBS0NjLHFCQUFVQyxTO2lDQUxYZixXLGtCQVFrQjtBQUNwQkssRUFBQUEsTUFBTSxFQUFFLEVBRFk7QUFFcEJGLEVBQUFBLFVBQVUsRUFBRTtBQUZRLEM7O2VBK0NULHNCQUFVSCxXQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJveCwgeyBzcGxpdEJveFByb3BzIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vdGV4dC1pbnB1dCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGV4dElucHV0IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UZXh0SW5wdXQucHJvcFR5cGVzXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogMzIsXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgYXBwZWFyYW5jZSwgZGlzYWJsZWQsIGhlaWdodCwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocHJvcHMpXG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbWF0Y2hlZFByb3BzXG4gICAgY29uc3QgaWNvblNpemUgPSB0aGVtZS5nZXRJY29uU2l6ZUZvcklucHV0KGhlaWdodClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIlxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgey4uLm1hdGNoZWRQcm9wc31cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIHdpZHRoPXtoZWlnaHR9XG4gICAgICAgICAgcG9pbnRlckV2ZW50cz1cIm5vbmVcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8U2VhcmNoSWNvblxuICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIHpJbmRleD17U3RhY2tpbmdPcmRlci5GT0NVU0VEICsgMX1cbiAgICAgICAgICAgIHNpemU9e2ljb25TaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgcGFkZGluZ0xlZnQ9e2hlaWdodH1cbiAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgey4uLnJlbWFpbmluZ1Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWFyY2hJbnB1dClcbiJdfQ==
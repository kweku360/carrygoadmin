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

var _uiBox = _interopRequireDefault(require("ui-box"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var UnorderedList = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(UnorderedList, _PureComponent);

  var _super = _createSuper(UnorderedList);

  function UnorderedList() {
    (0, _classCallCheck2["default"])(this, UnorderedList);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(UnorderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "size", "icon"]);

      var enrichedChildren = _react["default"].Children.map(children, function (child) {
        if (!_react["default"].isValidElement(child)) {
          return child;
        }

        return _react["default"].cloneElement(child, _objectSpread({
          icon: icon,
          size: size
        }, child.props));
      });

      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({}, UnorderedList.styles, props), enrichedChildren);
    }
  }]);
  return UnorderedList;
}(_react.PureComponent);

exports["default"] = UnorderedList;
UnorderedList.displayName = "UnorderedList";
(0, _defineProperty2["default"])(UnorderedList, "propTypes", _objectSpread({}, _uiBox["default"].propTypes, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes["default"].oneOf([300, 400, 500, 600]).isRequired,

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: _propTypes["default"].node
}));
(0, _defineProperty2["default"])(UnorderedList, "defaultProps", {
  size: 400
});
(0, _defineProperty2["default"])(UnorderedList, "styles", {
  is: 'ul',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Vbm9yZGVyZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlVub3JkZXJlZExpc3QiLCJwcm9wcyIsImNoaWxkcmVuIiwic2l6ZSIsImljb24iLCJlbnJpY2hlZENoaWxkcmVuIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJzdHlsZXMiLCJQdXJlQ29tcG9uZW50IiwiQm94IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwibm9kZSIsImlzIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJsaXN0U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7NkJBNkJWO0FBQUEsd0JBQ29DLEtBQUtDLEtBRHpDO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsSUFEWCxlQUNXQSxJQURYO0FBQUEsVUFDaUJDLElBRGpCLGVBQ2lCQSxJQURqQjtBQUFBLFVBQzBCSCxLQUQxQjs7QUFHUCxVQUFNSSxnQkFBZ0IsR0FBR0Msa0JBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQk4sUUFBbkIsRUFBNkIsVUFBQU8sS0FBSyxFQUFJO0FBQzdELFlBQUksQ0FBQ0gsa0JBQU1JLGNBQU4sQ0FBcUJELEtBQXJCLENBQUwsRUFBa0M7QUFDaEMsaUJBQU9BLEtBQVA7QUFDRDs7QUFFRCxlQUFPSCxrQkFBTUssWUFBTixDQUFtQkYsS0FBbkI7QUFDTEwsVUFBQUEsSUFBSSxFQUFKQSxJQURLO0FBRUxELFVBQUFBLElBQUksRUFBSkE7QUFGSyxXQUlGTSxLQUFLLENBQUNSLEtBSkosRUFBUDtBQU1ELE9BWHdCLENBQXpCOztBQWFBLGFBQ0UsZ0NBQUMsaUJBQUQsZ0NBQVNELGFBQWEsQ0FBQ1ksTUFBdkIsRUFBbUNYLEtBQW5DLEdBQ0dJLGdCQURILENBREY7QUFLRDs7O0VBbER3Q1Esb0I7OztBQUF0QmIsYTtpQ0FBQUEsYSxpQ0FFZGMsa0JBQUlDLFM7QUFFUDs7OztBQUlBWixFQUFBQSxJQUFJLEVBQUVhLHNCQUFVQyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWhCLEVBQXNDQyxVOztBQUU1Qzs7OztBQUlBZCxFQUFBQSxJQUFJLEVBQUVZLHNCQUFVRzs7aUNBZENuQixhLGtCQWlCRztBQUNwQkcsRUFBQUEsSUFBSSxFQUFFO0FBRGMsQztpQ0FqQkhILGEsWUFxQkg7QUFDZG9CLEVBQUFBLEVBQUUsRUFBRSxJQURVO0FBRWRDLEVBQUFBLE1BQU0sRUFBRSxDQUZNO0FBR2RDLEVBQUFBLFVBQVUsRUFBRSxPQUhFO0FBSWRDLEVBQUFBLE9BQU8sRUFBRSxDQUpLO0FBS2RDLEVBQUFBLFNBQVMsRUFBRTtBQUxHLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVub3JkZXJlZExpc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgdGV4dCB1c2VkIGluIGEgbGlzdCBpdGVtLlxuICAgICAqIENhbiBiZTogMzAwLCA0MDAsIDUwMCwgNjAwLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDAsIDUwMCwgNjAwXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gcGFzc2VkLCBhZGRzIGEgaWNvbiBiZWZvcmUgZWFjaCBsaXN0IGl0ZW0gaW4gdGhlIGxpc3RcbiAgICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgb24gYSBpbmRpdmlkdWFsIGxpc3QgaXRlbS5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA0MDBcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgaXM6ICd1bCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIG1hcmdpbkxlZnQ6ICcxLjFlbScsXG4gICAgcGFkZGluZzogMCxcbiAgICBsaXN0U3R5bGU6ICdkaXNjJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHNpemUsIGljb24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBlbnJpY2hlZENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBpY29uLFxuICAgICAgICBzaXplLFxuICAgICAgICAvLyBQcmVmZXIgbW9yZSBncmFudWxhcmx5IGRlZmluZWQgcHJvcHMgaWYgcHJlc2VudFxuICAgICAgICAuLi5jaGlsZC5wcm9wc1xuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggey4uLlVub3JkZXJlZExpc3Quc3R5bGVzfSB7Li4ucHJvcHN9PlxuICAgICAgICB7ZW5yaWNoZWRDaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl19
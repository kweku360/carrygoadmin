"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ScrollbarSize = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(ScrollbarSize, _PureComponent);

  var _super = _createSuper(ScrollbarSize);

  function ScrollbarSize() {
    var _this;

    (0, _classCallCheck2["default"])(this, ScrollbarSize);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      innerWidth: null,
      outerWidth: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOuterRef", function (ref) {
      _this.outerRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInnerRef", function (ref) {
      _this.innerRef = ref;
    });
    return _this;
  }

  (0, _createClass2["default"])(ScrollbarSize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var innerWidth = this.innerRef.getBoundingClientRect().width;
      var outerWidth = this.outerRef.getBoundingClientRect().width;
      this.setState({
        innerWidth: innerWidth,
        outerWidth: outerWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.innerWidth && this.state.outerWidth) {
        this.props.handleScrollbarSize(this.state.outerWidth - this.state.innerWidth);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        ref: this.handleOuterRef,
        "aria-hidden": true,
        style: {
          position: 'fixed',
          top: -500,
          left: -500,
          width: 100,
          overflowY: 'scroll'
        }
      }, _react["default"].createElement("div", {
        ref: this.handleInnerRef
      }));
    }
  }]);
  return ScrollbarSize;
}(_react.PureComponent);

exports["default"] = ScrollbarSize;
ScrollbarSize.displayName = "ScrollbarSize";
(0, _defineProperty2["default"])(ScrollbarSize, "propTypes", {
  /**
   * Returns the size of the scrollbar by creating a hidden fixed div.
   */
  handleScrollbarSize: _propTypes["default"].func
});
(0, _defineProperty2["default"])(ScrollbarSize, "defaultProps", {
  handleScrollbarSize: function handleScrollbarSize() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2Nyb2xsYmFyU2l6ZS5qcyJdLCJuYW1lcyI6WyJTY3JvbGxiYXJTaXplIiwiaW5uZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJyZWYiLCJvdXRlclJlZiIsImlubmVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwiaGFuZGxlT3V0ZXJSZWYiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJvdmVyZmxvd1kiLCJoYW5kbGVJbm5lclJlZiIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7OzhGQVlYO0FBQ05DLE1BQUFBLFVBQVUsRUFBRSxJQUROO0FBRU5DLE1BQUFBLFVBQVUsRUFBRTtBQUZOLEs7dUdBc0JTLFVBQUFDLEdBQUcsRUFBSTtBQUN0QixZQUFLQyxRQUFMLEdBQWdCRCxHQUFoQjtBQUNELEs7dUdBRWdCLFVBQUFBLEdBQUcsRUFBSTtBQUN0QixZQUFLRSxRQUFMLEdBQWdCRixHQUFoQjtBQUNELEs7Ozs7Ozt3Q0F2Qm1CO0FBQ2xCLFVBQU1GLFVBQVUsR0FBRyxLQUFLSSxRQUFMLENBQWNDLHFCQUFkLEdBQXNDQyxLQUF6RDtBQUNBLFVBQU1MLFVBQVUsR0FBRyxLQUFLRSxRQUFMLENBQWNFLHFCQUFkLEdBQXNDQyxLQUF6RDtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaUCxRQUFBQSxVQUFVLEVBQVZBLFVBRFk7QUFFWkMsUUFBQUEsVUFBVSxFQUFWQTtBQUZZLE9BQWQ7QUFJRDs7O3lDQUVvQjtBQUNuQixVQUFJLEtBQUtPLEtBQUwsQ0FBV1IsVUFBWCxJQUF5QixLQUFLUSxLQUFMLENBQVdQLFVBQXhDLEVBQW9EO0FBQ2xELGFBQUtRLEtBQUwsQ0FBV0MsbUJBQVgsQ0FDRSxLQUFLRixLQUFMLENBQVdQLFVBQVgsR0FBd0IsS0FBS08sS0FBTCxDQUFXUixVQURyQztBQUdEO0FBQ0Y7Ozs2QkFVUTtBQUNQLGFBQ0U7QUFDRSxRQUFBLEdBQUcsRUFBRSxLQUFLVyxjQURaO0FBRUUsMkJBRkY7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUNMQyxVQUFBQSxRQUFRLEVBQUUsT0FETDtBQUVMQyxVQUFBQSxHQUFHLEVBQUUsQ0FBQyxHQUZEO0FBR0xDLFVBQUFBLElBQUksRUFBRSxDQUFDLEdBSEY7QUFJTFIsVUFBQUEsS0FBSyxFQUFFLEdBSkY7QUFLTFMsVUFBQUEsU0FBUyxFQUFFO0FBTE47QUFIVCxTQVdFO0FBQUssUUFBQSxHQUFHLEVBQUUsS0FBS0M7QUFBZixRQVhGLENBREY7QUFlRDs7O0VBMUR3Q0Msb0I7OztBQUF0QmxCLGE7aUNBQUFBLGEsZUFDQTtBQUNqQjs7O0FBR0FXLEVBQUFBLG1CQUFtQixFQUFFUSxzQkFBVUM7QUFKZCxDO2lDQURBcEIsYSxrQkFRRztBQUNwQlcsRUFBQUEsbUJBQW1CLEVBQUUsK0JBQU0sQ0FBRTtBQURULEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXJTaXplIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2l6ZSBvZiB0aGUgc2Nyb2xsYmFyIGJ5IGNyZWF0aW5nIGEgaGlkZGVuIGZpeGVkIGRpdi5cbiAgICAgKi9cbiAgICBoYW5kbGVTY3JvbGxiYXJTaXplOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYW5kbGVTY3JvbGxiYXJTaXplOiAoKSA9PiB7fVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaW5uZXJXaWR0aDogbnVsbCxcbiAgICBvdXRlcldpZHRoOiBudWxsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5pbm5lclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgIGNvbnN0IG91dGVyV2lkdGggPSB0aGlzLm91dGVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbm5lcldpZHRoLFxuICAgICAgb3V0ZXJXaWR0aFxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5uZXJXaWR0aCAmJiB0aGlzLnN0YXRlLm91dGVyV2lkdGgpIHtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlU2Nyb2xsYmFyU2l6ZShcbiAgICAgICAgdGhpcy5zdGF0ZS5vdXRlcldpZHRoIC0gdGhpcy5zdGF0ZS5pbm5lcldpZHRoXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT3V0ZXJSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMub3V0ZXJSZWYgPSByZWZcbiAgfVxuXG4gIGhhbmRsZUlubmVyUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLmlubmVyUmVmID0gcmVmXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXt0aGlzLmhhbmRsZU91dGVyUmVmfVxuICAgICAgICBhcmlhLWhpZGRlblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHRvcDogLTUwMCxcbiAgICAgICAgICBsZWZ0OiAtNTAwLFxuICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5oYW5kbGVJbm5lclJlZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19
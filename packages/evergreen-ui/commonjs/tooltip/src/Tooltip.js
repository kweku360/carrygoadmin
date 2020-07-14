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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _positioner = require("../../positioner");

var _constants = require("../../constants");

var _TooltipStateless = _interopRequireDefault(require("./TooltipStateless"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var idCounter = 0;

var Tooltip = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Tooltip, _PureComponent);

  var _super = _createSuper(Tooltip);

  function Tooltip(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Tooltip);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "show", function () {
      if (_this.state.isShown) return;

      _this.setState({
        willShow: true
      });

      _this.timeout = setTimeout(function () {
        if (!_this.state.willShow) return;

        _this.setState({
          isShown: true
        });
      }, _this.props.showDelay);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hide", function () {
      _this.setState({
        isShown: false,
        willShow: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTarget", function (_ref) {
      var getRef = _ref.getRef;
      var children = _this.props.children;
      var tooltipTargetProps = {
        onMouseEnter: _this.show,
        onMouseLeave: _this.hide,
        'aria-describedby': _this.state.id
      };
      /**
       * Tooltips can be used within a Popover (not the other way around)
       * When a Tooltip is used within a Popover, the Popover passes
       * its props to the Tooltip in a `popoverProps` object.
       */
      // eslint-disable-next-line react/prop-types

      if (_this.props.popoverProps) {
        var _this$props$popoverPr = _this.props.popoverProps,
            getTargetRef = _this$props$popoverPr.getTargetRef,
            isShown = _this$props$popoverPr.isShown,
            popoverTargetProps = (0, _objectWithoutProperties2["default"])(_this$props$popoverPr, ["getTargetRef", "isShown"]);
        return _react["default"].cloneElement(children, _objectSpread({}, popoverTargetProps, {}, tooltipTargetProps, {
          innerRef: function innerRef(ref) {
            // Get the ref for the Tooltip.
            getRef(ref); // Pass the ref to the Popover.

            getTargetRef(ref);
          }
        }));
      }
      /**
       * With normal usage only the props for a Tooltip are passed to the target.
       */


      return _react["default"].cloneElement(children, _objectSpread({}, tooltipTargetProps, {
        innerRef: function innerRef(ref) {
          getRef(ref);
        }
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isPopoverShown", function () {
      return (// eslint-disable-next-line react/prop-types
        _this.props.popoverProps && _this.props.popoverProps.isShown
      );
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseEnterTarget", function () {
      _this.setState({
        isShownByTarget: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseLeaveTarget", function () {
      _this.setState({
        isShownByTarget: false,
        willShow: false
      });
    });
    _this.state = {
      id: "evergreen-tooltip-".concat(++idCounter),
      willShow: false,
      isShown: props.isShown,
      isShownByTarget: false
    };
    _this.handleMouseLeaveTarget = (0, _lodash["default"])(_this.handleMouseLeaveTarget, _this.props.hideDelay);
    _this.hide = (0, _lodash["default"])(_this.hide, _this.props.hideDelay);
    return _this;
  }

  (0, _createClass2["default"])(Tooltip, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          appearance = _this$props.appearance,
          isShown = _this$props.isShown,
          content = _this$props.content,
          position = _this$props.position,
          _this$props$stateless = _this$props.statelessProps,
          statelessProps = _this$props$stateless === void 0 ? {} : _this$props$stateless;
      var _this$state = this.state,
          stateIsShown = _this$state.isShown,
          isShownByTarget = _this$state.isShownByTarget;
      var shown = (isShown || stateIsShown || isShownByTarget) && !this.isPopoverShown(); // Tooltip was explicitly set to not be shown

      if (isShown === false) {
        shown = false;
      }

      return _react["default"].createElement(_positioner.Positioner, {
        target: function target(_ref2) {
          var getRef = _ref2.getRef;
          return _this2.renderTarget({
            getRef: getRef
          });
        },
        isShown: shown,
        position: position,
        animationDuration: 160
      }, function (_ref3) {
        var css = _ref3.css,
            style = _ref3.style,
            state = _ref3.state,
            getRef = _ref3.getRef;
        return _react["default"].createElement(_TooltipStateless["default"], (0, _extends2["default"])({
          id: _this2.state.id,
          appearance: appearance,
          innerRef: function innerRef(ref) {
            return getRef(ref);
          },
          "data-state": state,
          style: style,
          onMouseEnter: _this2.handleMouseEnterTarget,
          onMouseLeave: _this2.handleMouseLeaveTarget
        }, statelessProps, {
          className: (0, _classnames["default"])(statelessProps.className, css ? (0, _glamor.css)(css).toString() : undefined)
        }), content);
      });
    }
  }]);
  return Tooltip;
}(_react.PureComponent);

exports["default"] = Tooltip;
Tooltip.displayName = "Tooltip";
(0, _defineProperty2["default"])(Tooltip, "propTypes", {
  /**
   * The appearance of the tooltip.
   */
  appearance: _propTypes["default"].oneOf(['default', 'card']).isRequired,

  /**
   * The position the Popover is on.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * The content of the Popover.
   */
  content: _propTypes["default"].node.isRequired,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: _propTypes["default"].number.isRequired,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: _propTypes["default"].number.isRequired,

  /**
   * When True, manually show the Tooltip.
   */
  isShown: _propTypes["default"].bool,

  /**
   * The target button of the Tooltip.
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: _propTypes["default"].object
});
(0, _defineProperty2["default"])(Tooltip, "defaultProps", {
  appearance: 'default',
  position: _constants.Position.BOTTOM,
  hideDelay: 120,
  showDelay: 0
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbImlkQ291bnRlciIsIlRvb2x0aXAiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsImlzU2hvd24iLCJzZXRTdGF0ZSIsIndpbGxTaG93IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJzaG93RGVsYXkiLCJnZXRSZWYiLCJjaGlsZHJlbiIsInRvb2x0aXBUYXJnZXRQcm9wcyIsIm9uTW91c2VFbnRlciIsInNob3ciLCJvbk1vdXNlTGVhdmUiLCJoaWRlIiwiaWQiLCJwb3BvdmVyUHJvcHMiLCJnZXRUYXJnZXRSZWYiLCJwb3BvdmVyVGFyZ2V0UHJvcHMiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsImlubmVyUmVmIiwicmVmIiwiaXNTaG93bkJ5VGFyZ2V0IiwiaGFuZGxlTW91c2VMZWF2ZVRhcmdldCIsImhpZGVEZWxheSIsImNsZWFyVGltZW91dCIsImFwcGVhcmFuY2UiLCJjb250ZW50IiwicG9zaXRpb24iLCJzdGF0ZWxlc3NQcm9wcyIsInN0YXRlSXNTaG93biIsInNob3duIiwiaXNQb3BvdmVyU2hvd24iLCJyZW5kZXJUYXJnZXQiLCJjc3MiLCJzdHlsZSIsImhhbmRsZU1vdXNlRW50ZXJUYXJnZXQiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJQb3NpdGlvbiIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJMRUZUIiwiUklHSFQiLCJub2RlIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQUlB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QVVZLElBQVYsQ0FBZVYsVUF2QlA7O0FBeUJqQjs7O0FBR0FuQixFQUFBQSxTQUFTLEVBQUVpQixzQkFBVWEsTUFBVixDQUFpQlgsVUE1Qlg7O0FBOEJqQjs7O0FBR0FyQyxFQUFBQSxTQUFTLEVBQUVtQyxzQkFBVWEsTUFBVixDQUFpQlgsVUFqQ1g7O0FBbUNqQjs7O0FBR0ExQyxFQUFBQSxPQUFPLEVBQUV3QyxzQkFBVWMsSUF0Q0Y7O0FBd0NqQjs7O0FBR0EvQyxFQUFBQSxRQUFRLEVBQUVpQyxzQkFBVVksSUFBVixDQUFlVixVQTNDUjs7QUE2Q2pCOzs7QUFHQWQsRUFBQUEsY0FBYyxFQUFFWSxzQkFBVWU7QUFoRFQsQztpQ0FEQTNELE8sa0JBb0RHO0FBQ3BCNkIsRUFBQUEsVUFBVSxFQUFFLFNBRFE7QUFFcEJFLEVBQUFBLFFBQVEsRUFBRWdCLG9CQUFTSSxNQUZDO0FBR3BCeEIsRUFBQUEsU0FBUyxFQUFFLEdBSFM7QUFJcEJsQixFQUFBQSxTQUFTLEVBQUU7QUFKUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnXG5pbXBvcnQgeyBQb3NpdGlvbmVyIH0gZnJvbSAnLi4vLi4vcG9zaXRpb25lcidcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFRvb2x0aXBTdGF0ZWxlc3MgZnJvbSAnLi9Ub29sdGlwU3RhdGVsZXNzJ1xuXG5sZXQgaWRDb3VudGVyID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHRvb2x0aXAuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjYXJkJ10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gdGhlIFBvcG92ZXIgaXMgb24uXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQb3NpdGlvbi5UT1AsXG4gICAgICBQb3NpdGlvbi5UT1BfTEVGVCxcbiAgICAgIFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9MRUZULFxuICAgICAgUG9zaXRpb24uQk9UVE9NX1JJR0hULFxuICAgICAgUG9zaXRpb24uTEVGVCxcbiAgICAgIFBvc2l0aW9uLlJJR0hUXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBjb250ZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGltZSBpbiBtcyBiZWZvcmUgaGlkaW5nIHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIGhpZGVEZWxheTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGltZSBpbiBtcyBiZWZvcmUgc2hvd2luZyB0aGUgVG9vbHRpcC5cbiAgICAgKi9cbiAgICBzaG93RGVsYXk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gVHJ1ZSwgbWFudWFsbHkgc2hvdyB0aGUgVG9vbHRpcC5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgYnV0dG9uIG9mIHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBwYXNzZWQgdGhyb3VnaCB0byB0aGUgVG9vbHRpcC5cbiAgICAgKi9cbiAgICBzdGF0ZWxlc3NQcm9wczogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgcG9zaXRpb246IFBvc2l0aW9uLkJPVFRPTSxcbiAgICBoaWRlRGVsYXk6IDEyMCxcbiAgICBzaG93RGVsYXk6IDBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBldmVyZ3JlZW4tdG9vbHRpcC0keysraWRDb3VudGVyfWAsXG4gICAgICB3aWxsU2hvdzogZmFsc2UsXG4gICAgICBpc1Nob3duOiBwcm9wcy5pc1Nob3duLFxuICAgICAgaXNTaG93bkJ5VGFyZ2V0OiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZVRhcmdldCA9IGRlYm91bmNlKFxuICAgICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlVGFyZ2V0LFxuICAgICAgdGhpcy5wcm9wcy5oaWRlRGVsYXlcbiAgICApXG5cbiAgICB0aGlzLmhpZGUgPSBkZWJvdW5jZSh0aGlzLmhpZGUsIHRoaXMucHJvcHMuaGlkZURlbGF5KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgfVxuXG4gIHNob3cgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNTaG93bikgcmV0dXJuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aWxsU2hvdzogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUud2lsbFNob3cpIHJldHVyblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzU2hvd246IHRydWVcbiAgICAgIH0pXG4gICAgfSwgdGhpcy5wcm9wcy5zaG93RGVsYXkpXG4gIH1cblxuICBoaWRlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNTaG93bjogZmFsc2UsXG4gICAgICB3aWxsU2hvdzogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyVGFyZ2V0ID0gKHsgZ2V0UmVmIH0pID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0b29sdGlwVGFyZ2V0UHJvcHMgPSB7XG4gICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuc2hvdyxcbiAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oaWRlLFxuICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiB0aGlzLnN0YXRlLmlkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9vbHRpcHMgY2FuIGJlIHVzZWQgd2l0aGluIGEgUG9wb3ZlciAobm90IHRoZSBvdGhlciB3YXkgYXJvdW5kKVxuICAgICAqIFdoZW4gYSBUb29sdGlwIGlzIHVzZWQgd2l0aGluIGEgUG9wb3ZlciwgdGhlIFBvcG92ZXIgcGFzc2VzXG4gICAgICogaXRzIHByb3BzIHRvIHRoZSBUb29sdGlwIGluIGEgYHBvcG92ZXJQcm9wc2Agb2JqZWN0LlxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgaWYgKHRoaXMucHJvcHMucG9wb3ZlclByb3BzKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgICAgIGdldFRhcmdldFJlZixcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgICAgaXNTaG93bixcbiAgICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgICB9ID0gdGhpcy5wcm9wcy5wb3BvdmVyUHJvcHNcblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAvLyBBZGQgdGhlIFBvcG92ZXIgcHJvcHMgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzLFxuICAgICAgICAvLyBBZGQgdGhlIFRvb2x0aXAgcHJvcHMgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgLi4udG9vbHRpcFRhcmdldFByb3BzLFxuXG4gICAgICAgIGlubmVyUmVmOiByZWYgPT4ge1xuICAgICAgICAgIC8vIEdldCB0aGUgcmVmIGZvciB0aGUgVG9vbHRpcC5cbiAgICAgICAgICBnZXRSZWYocmVmKVxuICAgICAgICAgIC8vIFBhc3MgdGhlIHJlZiB0byB0aGUgUG9wb3Zlci5cbiAgICAgICAgICBnZXRUYXJnZXRSZWYocmVmKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpdGggbm9ybWFsIHVzYWdlIG9ubHkgdGhlIHByb3BzIGZvciBhIFRvb2x0aXAgYXJlIHBhc3NlZCB0byB0aGUgdGFyZ2V0LlxuICAgICAqL1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgIC4uLnRvb2x0aXBUYXJnZXRQcm9wcyxcbiAgICAgIGlubmVyUmVmOiByZWYgPT4ge1xuICAgICAgICBnZXRSZWYocmVmKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpc1BvcG92ZXJTaG93biA9ICgpID0+XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICB0aGlzLnByb3BzLnBvcG92ZXJQcm9wcyAmJiB0aGlzLnByb3BzLnBvcG92ZXJQcm9wcy5pc1Nob3duXG5cbiAgaGFuZGxlTW91c2VFbnRlclRhcmdldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU2hvd25CeVRhcmdldDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVNb3VzZUxlYXZlVGFyZ2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNTaG93bkJ5VGFyZ2V0OiBmYWxzZSxcbiAgICAgIHdpbGxTaG93OiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzU2hvd24sXG4gICAgICBjb250ZW50LFxuICAgICAgcG9zaXRpb24sXG4gICAgICBzdGF0ZWxlc3NQcm9wcyA9IHt9XG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGlzU2hvd246IHN0YXRlSXNTaG93biwgaXNTaG93bkJ5VGFyZ2V0IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgc2hvd24gPVxuICAgICAgKGlzU2hvd24gfHwgc3RhdGVJc1Nob3duIHx8IGlzU2hvd25CeVRhcmdldCkgJiYgIXRoaXMuaXNQb3BvdmVyU2hvd24oKVxuXG4gICAgLy8gVG9vbHRpcCB3YXMgZXhwbGljaXRseSBzZXQgdG8gbm90IGJlIHNob3duXG4gICAgaWYgKGlzU2hvd24gPT09IGZhbHNlKSB7XG4gICAgICBzaG93biA9IGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3NpdGlvbmVyXG4gICAgICAgIHRhcmdldD17KHsgZ2V0UmVmIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUYXJnZXQoeyBnZXRSZWYgfSlcbiAgICAgICAgfX1cbiAgICAgICAgaXNTaG93bj17c2hvd259XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249ezE2MH1cbiAgICAgID5cbiAgICAgICAgeyh7IGNzcywgc3R5bGUsIHN0YXRlLCBnZXRSZWYgfSkgPT4gKFxuICAgICAgICAgIDxUb29sdGlwU3RhdGVsZXNzXG4gICAgICAgICAgICBpZD17dGhpcy5zdGF0ZS5pZH1cbiAgICAgICAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICAgICAgICBpbm5lclJlZj17cmVmID0+IGdldFJlZihyZWYpfVxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlclRhcmdldH1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlVGFyZ2V0fVxuICAgICAgICAgICAgey4uLnN0YXRlbGVzc1Byb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgc3RhdGVsZXNzUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjc3MgPyBnbGFtb3JDc3MoY3NzKS50b1N0cmluZygpIDogdW5kZWZpbmVkXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgIDwvVG9vbHRpcFN0YXRlbGVzcz5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9zaXRpb25lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ==
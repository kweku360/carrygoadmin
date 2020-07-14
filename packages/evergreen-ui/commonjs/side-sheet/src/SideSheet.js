"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _overlay = require("../../overlay");

var _constants = require("../../constants");

var _SheetClose = _interopRequireDefault(require("./SheetClose"));

var _paneProps, _subpaneProps, _animationStylesClass;

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var paneProps = (_paneProps = {}, (0, _defineProperty2["default"])(_paneProps, _constants.Position.LEFT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  left: 0,
  right: 'auto'
}), (0, _defineProperty2["default"])(_paneProps, _constants.Position.RIGHT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  right: 0,
  left: 'auto'
}), (0, _defineProperty2["default"])(_paneProps, _constants.Position.TOP, {
  width: '100vw',
  position: 'absolute',
  maxHeight: '100vh',
  top: 0,
  bottom: 'auto'
}), (0, _defineProperty2["default"])(_paneProps, _constants.Position.BOTTOM, {
  width: '100vw',
  maxHeight: '100vh',
  position: 'absolute',
  bottom: 0,
  top: 'auto'
}), _paneProps);
var subpaneProps = (_subpaneProps = {}, (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.LEFT, {
  height: '100vh'
}), (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.RIGHT, {
  height: '100vh'
}), (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.TOP, {
  width: '100vw'
}), (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.BOTTOM, {
  width: '100vw'
}), _subpaneProps);
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 240;

var withAnimations = function withAnimations(animateIn, animateOut) {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: "".concat(animateIn, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]': {
      animation: "".concat(animateOut, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};

var animationStylesClass = (_animationStylesClass = {}, (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.LEFT, _objectSpread({
  transform: "translateX(-100%)"
}, withAnimations(_glamor.css.keyframes('anchoredLeftSlideInAnimation', {
  from: {
    transform: "translateX(-100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), _glamor.css.keyframes('anchoredLeftSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(-100%)"
  }
})))), (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.RIGHT, _objectSpread({
  transform: "translateX(100%)"
}, withAnimations(_glamor.css.keyframes('anchoredRightSlideInAnimation', {
  from: {
    transform: "translateX(100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), _glamor.css.keyframes('anchoredRightSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(100%)"
  }
})))), (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.TOP, _objectSpread({
  transform: "translateY(-100%)"
}, withAnimations(_glamor.css.keyframes('anchoredTopSlideInAnimation', {
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), _glamor.css.keyframes('anchoredTopSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
})))), (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.BOTTOM, _objectSpread({
  transform: "translateY(100%)"
}, withAnimations(_glamor.css.keyframes('anchoredBottomSlideInAnimation', {
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), _glamor.css.keyframes('anchoredBottomSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(100%)"
  }
})))), _animationStylesClass);

var SideSheet = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SideSheet, _React$Component);

  var _super = _createSuper(SideSheet);

  function SideSheet() {
    (0, _classCallCheck2["default"])(this, SideSheet);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SideSheet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          isShown = _this$props.isShown,
          children = _this$props.children,
          containerProps = _this$props.containerProps,
          onOpenComplete = _this$props.onOpenComplete,
          onCloseComplete = _this$props.onCloseComplete,
          onBeforeClose = _this$props.onBeforeClose,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEscapePress = _this$props.shouldCloseOnEscapePress,
          position = _this$props.position,
          preventBodyScrolling = _this$props.preventBodyScrolling;
      return _react["default"].createElement(_overlay.Overlay, {
        isShown: isShown,
        shouldCloseOnClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        onBeforeClose: onBeforeClose,
        onExited: onCloseComplete,
        onEntered: onOpenComplete,
        preventBodyScrolling: preventBodyScrolling
      }, function (_ref) {
        var state = _ref.state,
            close = _ref.close;
        return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          width: width
        }, paneProps[position], {
          css: animationStylesClass[position],
          "data-state": state
        }), _react["default"].createElement(_SheetClose["default"], {
          position: position,
          "data-state": state,
          isClosing: false,
          onClick: close
        }), _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          elevation: 4,
          backgroundColor: "white",
          overflowY: "auto",
          maxHeight: "100vh",
          "data-state": state,
          width: width
        }, subpaneProps[position], containerProps), typeof children === 'function' ? children({
          close: close
        }) : children));
      });
    }
  }]);
  return SideSheet;
}(_react["default"].Component);

SideSheet.displayName = "SideSheet";
(0, _defineProperty2["default"])(SideSheet, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * When true, the Side Sheet is shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: _propTypes["default"].func,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: _propTypes["default"].bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes["default"].bool,

  /**
   * Width of the SideSheet.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,

  /**
   * Properties to pass through the SideSheet container Pane.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Positions the sheet to the top, left, right, or bottom of the screen.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.BOTTOM, _constants.Position.LEFT, _constants.Position.RIGHT]).isRequired,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SideSheet, "defaultProps", {
  width: 620,
  onCloseComplete: function onCloseComplete() {},
  onOpenComplete: function onOpenComplete() {},
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  position: _constants.Position.RIGHT
});
var _default = SideSheet;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaWRlU2hlZXQuanMiXSwibmFtZXMiOlsicGFuZVByb3BzIiwiUG9zaXRpb24iLCJMRUZUIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsIlJJR0hUIiwiVE9QIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJCT1RUT00iLCJzdWJwYW5lUHJvcHMiLCJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJ3aXRoQW5pbWF0aW9ucyIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRpb24iLCJhbmltYXRpb25TdHlsZXNDbGFzcyIsInRyYW5zZm9ybSIsImNzcyIsImtleWZyYW1lcyIsImZyb20iLCJ0byIsIlNpZGVTaGVldCIsInByb3BzIiwiaXNTaG93biIsImNoaWxkcmVuIiwiY29udGFpbmVyUHJvcHMiLCJvbk9wZW5Db21wbGV0ZSIsIm9uQ2xvc2VDb21wbGV0ZSIsIm9uQmVmb3JlQ2xvc2UiLCJzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrIiwic2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzIiwicHJldmVudEJvZHlTY3JvbGxpbmciLCJzdGF0ZSIsImNsb3NlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0Iiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsa0VBQ1pDLG9CQUFTQyxJQURHLEVBQ0k7QUFDZkMsRUFBQUEsTUFBTSxFQUFFLE9BRE87QUFFZkMsRUFBQUEsUUFB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O0FBZ0RqQjs7O0FBR0FoRCxFQUFBQSxRQUFRLEVBQUV3QyxzQkFBVVMsS0FBVixDQUFnQixDQUN4QnJELG9CQUFTUSxHQURlLEVBRXhCUixvQkFBU2EsTUFGZSxFQUd4QmIsb0JBQVNDLElBSGUsRUFJeEJELG9CQUFTTyxLQUplLENBQWhCLEVBS1B5QyxVQXhEYzs7QUEwRGpCOzs7QUFHQVQsRUFBQUEsb0JBQW9CLEVBQUVLLHNCQUFVSztBQTdEZixDO2lDQURmcEIsUyxrQkFpRWtCO0FBQ3BCcEIsRUFBQUEsS0FBSyxFQUFFLEdBRGE7QUFFcEIwQixFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRSxDQUZMO0FBR3BCRCxFQUFBQSxjQUFjLEVBQUUsMEJBQU0sQ0FBRSxDQUhKO0FBSXBCRyxFQUFBQSx5QkFBeUIsRUFBRSxJQUpQO0FBS3BCQyxFQUFBQSx3QkFBd0IsRUFBRSxJQUxOO0FBTXBCbEMsRUFBQUEsUUFBUSxFQUFFSixvQkFBU087QUFOQyxDO2VBa0VUc0IsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vLi4vb3ZlcmxheSdcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFNoZWV0Q2xvc2UgZnJvbSAnLi9TaGVldENsb3NlJ1xuXG5jb25zdCBwYW5lUHJvcHMgPSB7XG4gIFtQb3NpdGlvbi5MRUZUXToge1xuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBtYXhXaWR0aDogJzEwMHZ3JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAnYXV0bydcbiAgfSxcbiAgW1Bvc2l0aW9uLlJJR0hUXToge1xuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBtYXhXaWR0aDogJzEwMHZ3JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMCxcbiAgICBsZWZ0OiAnYXV0bydcbiAgfSxcbiAgW1Bvc2l0aW9uLlRPUF06IHtcbiAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogJ2F1dG8nXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgbWF4SGVpZ2h0OiAnMTAwdmgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogMCxcbiAgICB0b3A6ICdhdXRvJ1xuICB9XG59XG5cbmNvbnN0IHN1YnBhbmVQcm9wcyA9IHtcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnXG4gIH0sXG4gIFtQb3NpdGlvbi5SSUdIVF06IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCdcbiAgfSxcbiAgW1Bvc2l0aW9uLlRPUF06IHtcbiAgICB3aWR0aDogJzEwMHZ3J1xuICB9LFxuICBbUG9zaXRpb24uQk9UVE9NXToge1xuICAgIHdpZHRoOiAnMTAwdncnXG4gIH1cbn1cblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyNDBcblxuY29uc3Qgd2l0aEFuaW1hdGlvbnMgPSAoYW5pbWF0ZUluLCBhbmltYXRlT3V0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgICAgYW5pbWF0aW9uOiBgJHthbmltYXRlSW59ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICAgIGFuaW1hdGlvbkVhc2luZy5kZWNlbGVyYXRpb25cbiAgICAgIH0gYm90aGBcbiAgICB9LFxuICAgICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgICAgYW5pbWF0aW9uOiBgJHthbmltYXRlT3V0fSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke1xuICAgICAgICBhbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9uXG4gICAgICB9IGJvdGhgXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGFuaW1hdGlvblN0eWxlc0NsYXNzID0ge1xuICBbUG9zaXRpb24uTEVGVF06IHtcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0xMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZExlZnRTbGlkZUluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkTGVmdFNsaWRlT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMClgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLlJJR0hUXToge1xuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRSaWdodFNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgwKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFJpZ2h0U2xpZGVPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgwKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5UT1BdOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRUb3BTbGlkZUluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTEwMCUpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkVG9wU2xpZGVPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICBbUG9zaXRpb24uQk9UVE9NXToge1xuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRCb3R0b21TbGlkZUluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRCb3R0b21TbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDEwMCUpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBTaWRlU2hlZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENoaWxkcmVuIGNhbiBiZSBhIHN0cmluZywgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgU2lkZSBTaGVldCBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb3ZlcmxheSBpcyBhYm91dCB0byBjbG9zZS5cbiAgICAgKiBSZXR1cm4gYGZhbHNlYCB0byBwcmV2ZW50IHRoZSBzaGVldCBmcm9tIGNsb3NpbmcuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uIC0+IEJvb2xlYW5gXG4gICAgICovXG4gICAgb25CZWZvcmVDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgY2xpY2tpbmcgdGhlIG92ZXJsYXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHByZXNzaW5nIHRoZSBlc2Mga2V5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIFNpZGVTaGVldC5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIHRvIHBhc3MgdGhyb3VnaCB0aGUgU2lkZVNoZWV0IGNvbnRhaW5lciBQYW5lLlxuICAgICAqL1xuICAgIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb25zIHRoZSBzaGVldCB0byB0aGUgdG9wLCBsZWZ0LCByaWdodCwgb3IgYm90dG9tIG9mIHRoZSBzY3JlZW4uXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQb3NpdGlvbi5UT1AsXG4gICAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgICBQb3NpdGlvbi5MRUZULFxuICAgICAgUG9zaXRpb24uUklHSFRcbiAgICBdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCBzY3JvbGxpbmcgaW4gdGhlIG91dGVyIGJvZHlcbiAgICAgKi9cbiAgICBwcmV2ZW50Qm9keVNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDYyMCxcbiAgICBvbkNsb3NlQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIG9uT3BlbkNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogdHJ1ZSxcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uUklHSFRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB3aWR0aCxcbiAgICAgIGlzU2hvd24sXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbnRhaW5lclByb3BzLFxuICAgICAgb25PcGVuQ29tcGxldGUsXG4gICAgICBvbkNsb3NlQ29tcGxldGUsXG4gICAgICBvbkJlZm9yZUNsb3NlLFxuICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayxcbiAgICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgcHJldmVudEJvZHlTY3JvbGxpbmdcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxPdmVybGF5XG4gICAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICAgIHNob3VsZENsb3NlT25DbGljaz17c2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja31cbiAgICAgICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzPXtzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3N9XG4gICAgICAgIG9uQmVmb3JlQ2xvc2U9e29uQmVmb3JlQ2xvc2V9XG4gICAgICAgIG9uRXhpdGVkPXtvbkNsb3NlQ29tcGxldGV9XG4gICAgICAgIG9uRW50ZXJlZD17b25PcGVuQ29tcGxldGV9XG4gICAgICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nPXtwcmV2ZW50Qm9keVNjcm9sbGluZ31cbiAgICAgID5cbiAgICAgICAgeyh7IHN0YXRlLCBjbG9zZSB9KSA9PiAoXG4gICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIHsuLi5wYW5lUHJvcHNbcG9zaXRpb25dfVxuICAgICAgICAgICAgY3NzPXthbmltYXRpb25TdHlsZXNDbGFzc1twb3NpdGlvbl19XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2hlZXRDbG9zZVxuICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgICBpc0Nsb3Npbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICBlbGV2YXRpb249ezR9XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgb3ZlcmZsb3dZPVwiYXV0b1wiXG4gICAgICAgICAgICAgIG1heEhlaWdodD1cIjEwMHZoXCJcbiAgICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgey4uLnN1YnBhbmVQcm9wc1twb3NpdGlvbl19XG4gICAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHsgY2xvc2UgfSkgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICA8L092ZXJsYXk+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVTaGVldFxuIl19
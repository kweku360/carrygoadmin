"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _portal = require("../../portal");

var _stack = require("../../stack");

var _constants = require("../../constants");

var _theme = require("../../theme");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _preventBodyScroll = _interopRequireDefault(require("../../lib/prevent-body-scroll"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var animationEasing = {
  standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0.0, 0.6, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;

var fadeInAnimation = _glamor.css.keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

var fadeOutAnimation = _glamor.css.keyframes('fadeOutAnimation', {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
});

var animationStyles = function animationStyles(backgroundColor) {
  return {
    '&::before': {
      backgroundColor: backgroundColor,
      left: 0,
      top: 0,
      position: 'fixed',
      display: 'block',
      width: '100%',
      height: '100%',
      content: '" "'
    },
    '&[data-state="entering"]::before, &[data-state="entered"]::before': {
      animation: "".concat(fadeInAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]::before, &[data-state="exited"]::before': {
      animation: "".concat(fadeOutAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};
/**
 * Overlay is essentially a wrapper around react-transition-group/Transition
 * Learn more: https://reactcommunity.org/react-transition-group/
 */


var Overlay = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Overlay, _React$Component);

  var _super = _createSuper(Overlay);

  function Overlay(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Overlay);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bringFocusInsideOverlay", function () {
      // Always delay focus manipulation to just before repaint to prevent scroll jumping
      return requestAnimationFrame(function () {
        // Container ref may be undefined between component mounting and Portal rendering
        // activeElement may be undefined in some rare cases in IE
        if (_this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !_this.props.isShown) {
          return;
        }

        var isFocusOutsideModal = !_this.containerElement.contains(document.activeElement);

        if (isFocusOutsideModal) {
          // Element marked autofocus has higher priority than the other clowns
          var autofocusElement = _this.containerElement.querySelector('[autofocus]');

          var wrapperElement = _this.containerElement.querySelector('[tabindex]');

          var buttonElement = _this.containerElement.querySelector('button');

          if (autofocusElement) {
            autofocusElement.focus();
          } else if (wrapperElement) {
            wrapperElement.focus();
          } else if (buttonElement) {
            buttonElement.focus();
          }
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bringFocusBackToTarget", function () {
      return requestAnimationFrame(function () {
        if (_this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
        ) {
            return;
          }

        var isFocusInsideModal = _this.containerElement.contains(document.activeElement); // Bring back focus on the target.


        if (_this.previousActiveElement && (document.activeElement === document.body || isFocusInsideModal)) {
          _this.previousActiveElement.focus();
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27 && _this.props.shouldCloseOnEscapePress) {
        _this.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      var shouldClose = (0, _safeInvoke["default"])(_this.props.onBeforeClose);

      if (shouldClose !== false) {
        _this.setState({
          exiting: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBodyScroll", function (preventScroll) {
      if (_this.props.preventBodyScrolling) {
        (0, _preventBodyScroll["default"])(preventScroll);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEnter", function () {
      _this.handleBodyScroll(true);

      (0, _safeInvoke["default"])(_this.props.onEnter);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEntering", function (node) {
      document.body.addEventListener('keydown', _this.onEsc, false);

      _this.props.onEntering(node);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEntered", function (node) {
      _this.previousActiveElement = document.activeElement;

      _this.bringFocusInsideOverlay();

      _this.props.onEntered(node);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExit", function () {
      _this.handleBodyScroll(false);

      (0, _safeInvoke["default"])(_this.props.onExit);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExiting", function (node) {
      document.body.removeEventListener('keydown', _this.onEsc, false);

      _this.bringFocusBackToTarget();

      _this.props.onExiting(node);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExited", function (node) {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onExited(node);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBackdropClick", function (e) {
      if (e.target !== e.currentTarget || !_this.props.shouldCloseOnClick) {
        return;
      }

      _this.close();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onContainerRef", function (ref) {
      _this.containerElement = ref;
    });
    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  (0, _createClass2["default"])(Overlay, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isShown && this.props.isShown) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          exited: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleBodyScroll(false);
      document.body.removeEventListener('keydown', this.onEsc, false);
    }
    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          theme = _this$props.theme,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          isShown = _this$props.isShown,
          children = _this$props.children;
      var _this$state = this.state,
          exiting = _this$state.exiting,
          exited = _this$state.exited;
      if (exited) return null;
      return _react["default"].createElement(_stack.Stack, {
        value: _constants.StackingOrder.OVERLAY
      }, function (zIndex) {
        return _react["default"].createElement(_portal.Portal, null, _react["default"].createElement(_Transition["default"], {
          appear: true,
          unmountOnExit: true,
          timeout: ANIMATION_DURATION,
          "in": isShown && !exiting,
          onExit: _this2.handleExit,
          onExiting: _this2.handleExiting,
          onExited: _this2.handleExited,
          onEnter: _this2.handleEnter,
          onEntering: _this2.handleEntering,
          onEntered: _this2.handleEntered
        }, function (state) {
          return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
            onClick: _this2.handleBackdropClick,
            innerRef: _this2.onContainerRef,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: zIndex,
            "data-state": state
          }, containerProps, {
            className: (0, _classnames["default"])(containerProps.className, (0, _glamor.css)(animationStyles(theme.overlayBackgroundColor)).toString())
          }), typeof children === 'function' ? children({
            state: state,
            close: _this2.close
          }) : children);
        }));
      });
    }
  }]);
  return Overlay;
}(_react["default"].Component);

Overlay.displayName = "Overlay";
(0, _defineProperty2["default"])(Overlay, "propTypes", {
  /**
   * Children can be a node or a function accepting `close: func`
   * and `state: ENTERING | ENTERED | EXITING | EXITED`.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * Show the component; triggers the enter or exit states.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Props to be passed through on the inner Box.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Whether or not to prevent body scrolling outside the context of the overlay
   */
  preventBodyScrolling: _propTypes["default"].bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnClick: _propTypes["default"].bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes["default"].bool,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: _propTypes["default"].func,

  /**
   * Callback fired before the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExit: _propTypes["default"].func,

  /**
   * Callback fired after the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExiting: _propTypes["default"].func,

  /**
   * Callback fired after the "exited" status is applied.
   * type: `Function(exitState: Any?, node: HtmlElement) -> void`
   */
  onExited: _propTypes["default"].func,

  /**
   * Callback fired before the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEnter: _propTypes["default"].func,

  /**
   * Callback fired after the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntering: _propTypes["default"].func,

  /**
   * Callback fired after the "entered" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntered: _propTypes["default"].func,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});
(0, _defineProperty2["default"])(Overlay, "defaultProps", {
  onHide: function onHide() {},
  shouldCloseOnClick: true,
  shouldCloseOnEscapePress: true,
  preventBodyScrolling: false,
  onExit: function onExit() {},
  onExiting: function onExiting() {},
  onExited: function onExited() {},
  onEnter: function onEnter() {},
  onEntering: function onEntering() {},
  onEntered: function onEntered() {}
});

var _default = (0, _theme.withTheme)(Overlay);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vdmVybGF5L3NyYy9PdmVybGF5LmpzIl0sIm5hbWVzIjpbImFuaW1hdGlvbkVhc2luZyIsInN0YW5kYXJkIiwiZGVjZWxlcmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwic2hhcnAiLCJzcHJpbmciLCJBTklNQVRJT05fRFVSQVRJT04iLCJmYWRlSW5BbmltYXRpb24iLCJjc3MiLCJrZXlmcmFtZXMiLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZmFkZU91dEFuaW1hdGlvbiIsImFuaW1hdGlvblN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImxlZnQiLCJ0b3AiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRlbnQiLCJhbmltYXRpb24iLCJPdmVybGF5IiwicHJvcHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250YWluZXJFbGVtZW50IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaXNTaG93biIsImlzRm9jdXNPdXRzaWRlTW9kYWwiLCJjb250YWlucyIsImF1dG9mb2N1c0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlckVsZW1lbnQiLCJidXR0b25FbGVtZW50IiwiZm9jdXMiLCJpc0ZvY3VzSW5zaWRlTW9kYWwiLCJwcmV2aW91c0FjdGl2ZUVsZW1lbnQiLCJib2R5IiwiZSIsImtleUNvZGUiLCJzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MiLCJjbG9zZSIsInNob3VsZENsb3NlIiwib25CZWZvcmVDbG9zZSIsInNldFN0YXRlIiwiZXhpdGluZyIsInByZXZlbnRTY3JvbGwiLCJwcmV2ZW50Qm9keVNjcm9sbGluZyIsImhhbmRsZUJvZHlTY3JvbGwiLCJvbkVudGVyIiwibm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkVzYyIsIm9uRW50ZXJpbmciLCJicmluZ0ZvY3VzSW5zaWRlT3ZlcmxheSIsIm9uRW50ZXJlZCIsIm9uRXhpdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJicmluZ0ZvY3VzQmFja1RvVGFyZ2V0Iiwib25FeGl0aW5nIiwiZXhpdGVkIiwib25FeGl0ZWQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0Iiwic2hvdWxkQ2xvc2VPbkNsaWNrIiwicmVmIiwic3RhdGUiLCJwcmV2UHJvcHMiLCJ0aGVtZSIsImNvbnRhaW5lclByb3BzIiwiY2hpbGRyZW4iLCJTdGFja2luZ09yZGVyIiwiT1ZFUkxBWSIsInpJbmRleCIsImhhbmRsZUV4aXQiLCJoYW5kbGVFeGl0aW5nIiwiaGFuZGxlRXhpdGVkIiwiaGFuZGxlRW50ZXIiLCJoYW5kbGVFbnRlcmluZyIsImhhbmRsZUVudGVyZWQiLCJoYW5kbGVCYWNrZHJvcENsaWNrIiwib25Db250YWluZXJSZWYiLCJjbGFzc05hbWUiLCJvdmVybGF5QmFja2dyb3VuZENvbG9yIiwidG9TdHJpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9iamVjdCIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLFFBQVEsa0NBRGM7QUFFdEJDLEVBQUFBLFlBQVksa0NBRlU7QUFHdEJDLEVBQUFBLFlBQVksZ0NBSFU7QUFJdEJDLEVBQUFBLEtBQUssa0NBSmlCO0FBS3RCQyxFQUFBQSxNQUFNO0FBTGdCLENBQXhCO0FBUUEsSUFBTUMsa0JBQWtCLEdBQUcsR0FBM0I7O0FBRUEsSUFBTUMsZUFBZSxHQUFHQyxZQUFJQyxTQUFKLENBQWMsaUJBQWQsRUFBaUM7QUFDdkRDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxPQUFPLEVBQUU7QUFETCxHQURpRDtBQUl2REMsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZELElBQUFBLE9B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O0FBVXBCRSxFQUFBQSxTQUFTLEVBQUUscUJBQU0sQ0FBRTtBQVZDLEM7O2VBaU9ULHNCQUFVbEMsT0FBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vLi4vc3RhY2snXG5pbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgcHJldmVudEJvZHlTY3JvbGwgZnJvbSAnLi4vLi4vbGliL3ByZXZlbnQtYm9keS1zY3JvbGwnXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgc3RhbmRhcmQ6IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlgLFxuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYCxcbiAgc2hhcnA6IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuNiwgMSlgLFxuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyNDBcblxuY29uc3QgZmFkZUluQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnZmFkZUluQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgb3BhY2l0eTogMFxuICB9LFxuICB0bzoge1xuICAgIG9wYWNpdHk6IDFcbiAgfVxufSlcblxuY29uc3QgZmFkZU91dEFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2ZhZGVPdXRBbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRvOiB7XG4gICAgb3BhY2l0eTogMFxuICB9XG59KVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXMgPSBiYWNrZ3JvdW5kQ29sb3IgPT4gKHtcbiAgJyY6OmJlZm9yZSc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDAsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGNvbnRlbnQ6ICdcIiBcIidcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdOjpiZWZvcmUsICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl06OmJlZm9yZSc6IHtcbiAgICBhbmltYXRpb246IGAke2ZhZGVJbkFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgIGFuaW1hdGlvbkVhc2luZy5kZWNlbGVyYXRpb25cbiAgICB9IGJvdGhgXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdOjpiZWZvcmUsICZbZGF0YS1zdGF0ZT1cImV4aXRlZFwiXTo6YmVmb3JlJzoge1xuICAgIGFuaW1hdGlvbjogYCR7ZmFkZU91dEFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgIGFuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb25cbiAgICB9IGJvdGhgXG4gIH1cbn0pXG5cbi8qKlxuICogT3ZlcmxheSBpcyBlc3NlbnRpYWxseSBhIHdyYXBwZXIgYXJvdW5kIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvblxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9cbiAqL1xuY2xhc3MgT3ZlcmxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gY2FuIGJlIGEgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgY2xvc2U6IGZ1bmNgXG4gICAgICogYW5kIGBzdGF0ZTogRU5URVJJTkcgfCBFTlRFUkVEIHwgRVhJVElORyB8IEVYSVRFRGAuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlcy5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRvIGJlIHBhc3NlZCB0aHJvdWdoIG9uIHRoZSBpbm5lciBCb3guXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IGJvZHkgc2Nyb2xsaW5nIG91dHNpZGUgdGhlIGNvbnRleHQgb2YgdGhlIG92ZXJsYXlcbiAgICAgKi9cbiAgICBwcmV2ZW50Qm9keVNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgY2xpY2tpbmcgdGhlIG92ZXJsYXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25DbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvdmVybGF5IGlzIGFib3V0IHRvIGNsb3NlLlxuICAgICAqIFJldHVybiBgZmFsc2VgIHRvIHByZXZlbnQgdGhlIHNoZWV0IGZyb20gY2xvc2luZy5cbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24gLT4gQm9vbGVhbmBcbiAgICAgKi9cbiAgICBvbkJlZm9yZUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24oZXhpdFN0YXRlOiBBbnk/LCBub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICAgKiBBbiBleHRyYSBwYXJhbWV0ZXIgaXNBcHBlYXJpbmcgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlXG4gICAgICogaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50LlxuICAgICAqXG4gICAgICogdHlwZTogYEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogQW4gZXh0cmEgcGFyYW1ldGVyIGlzQXBwZWFyaW5nIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZVxuICAgICAqIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudC5cbiAgICAgKlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogQW4gZXh0cmEgcGFyYW1ldGVyIGlzQXBwZWFyaW5nIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZVxuICAgICAqIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudC5cbiAgICAgKlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkhpZGU6ICgpID0+IHt9LFxuICAgIHNob3VsZENsb3NlT25DbGljazogdHJ1ZSxcbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IHRydWUsXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IGZhbHNlLFxuICAgIG9uRXhpdDogKCkgPT4ge30sXG4gICAgb25FeGl0aW5nOiAoKSA9PiB7fSxcbiAgICBvbkV4aXRlZDogKCkgPT4ge30sXG4gICAgb25FbnRlcjogKCkgPT4ge30sXG4gICAgb25FbnRlcmluZzogKCkgPT4ge30sXG4gICAgb25FbnRlcmVkOiAoKSA9PiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGl0aW5nOiBmYWxzZSxcbiAgICAgIGV4aXRlZDogIXByb3BzLmlzU2hvd25cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCFwcmV2UHJvcHMuaXNTaG93biAmJiB0aGlzLnByb3BzLmlzU2hvd24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGV4aXRlZDogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVCb2R5U2Nyb2xsKGZhbHNlKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZHMgYm9ycm93ZWQgZnJvbSBCbHVlcHJpbnRKU1xuICAgKiBodHRwczovL2dpdGh1Yi5jb20vcGFsYW50aXIvYmx1ZXByaW50L2Jsb2IvcmVsZWFzZS8yLjAuMC9wYWNrYWdlcy9jb3JlL3NyYy9jb21wb25lbnRzL292ZXJsYXkvb3ZlcmxheS50c3hcbiAgICovXG4gIGJyaW5nRm9jdXNJbnNpZGVPdmVybGF5ID0gKCkgPT4ge1xuICAgIC8vIEFsd2F5cyBkZWxheSBmb2N1cyBtYW5pcHVsYXRpb24gdG8ganVzdCBiZWZvcmUgcmVwYWludCB0byBwcmV2ZW50IHNjcm9sbCBqdW1waW5nXG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBDb250YWluZXIgcmVmIG1heSBiZSB1bmRlZmluZWQgYmV0d2VlbiBjb21wb25lbnQgbW91bnRpbmcgYW5kIFBvcnRhbCByZW5kZXJpbmdcbiAgICAgIC8vIGFjdGl2ZUVsZW1lbnQgbWF5IGJlIHVuZGVmaW5lZCBpbiBzb21lIHJhcmUgY2FzZXMgaW4gSUVcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgIXRoaXMucHJvcHMuaXNTaG93blxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZvY3VzT3V0c2lkZU1vZGFsID0gIXRoaXMuY29udGFpbmVyRWxlbWVudC5jb250YWlucyhcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgKVxuICAgICAgaWYgKGlzRm9jdXNPdXRzaWRlTW9kYWwpIHtcbiAgICAgICAgLy8gRWxlbWVudCBtYXJrZWQgYXV0b2ZvY3VzIGhhcyBoaWdoZXIgcHJpb3JpdHkgdGhhbiB0aGUgb3RoZXIgY2xvd25zXG4gICAgICAgIGNvbnN0IGF1dG9mb2N1c0VsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnW2F1dG9mb2N1c10nXG4gICAgICAgIClcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignW3RhYmluZGV4XScpXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJylcblxuICAgICAgICBpZiAoYXV0b2ZvY3VzRWxlbWVudCkge1xuICAgICAgICAgIGF1dG9mb2N1c0VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2UgaWYgKHdyYXBwZXJFbGVtZW50KSB7XG4gICAgICAgICAgd3JhcHBlckVsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgICAgICBidXR0b25FbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBicmluZ0ZvY3VzQmFja1RvVGFyZ2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGb2N1c0luc2lkZU1vZGFsID0gdGhpcy5jb250YWluZXJFbGVtZW50LmNvbnRhaW5zKFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICApXG5cbiAgICAgIC8vIEJyaW5nIGJhY2sgZm9jdXMgb24gdGhlIHRhcmdldC5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgaXNGb2N1c0luc2lkZU1vZGFsKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25Fc2MgPSBlID0+IHtcbiAgICAvLyBFc2Mga2V5XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MpIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZENsb3NlID0gc2FmZUludm9rZSh0aGlzLnByb3BzLm9uQmVmb3JlQ2xvc2UpXG4gICAgaWYgKHNob3VsZENsb3NlICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRpbmc6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCb2R5U2Nyb2xsID0gcHJldmVudFNjcm9sbCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMucHJldmVudEJvZHlTY3JvbGxpbmcpIHtcbiAgICAgIHByZXZlbnRCb2R5U2Nyb2xsKHByZXZlbnRTY3JvbGwpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVCb2R5U2Nyb2xsKHRydWUpXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLm9uRW50ZXIpXG4gIH1cblxuICBoYW5kbGVFbnRlcmluZyA9IG5vZGUgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuICAgIHRoaXMucHJvcHMub25FbnRlcmluZyhub2RlKVxuICB9XG5cbiAgaGFuZGxlRW50ZXJlZCA9IG5vZGUgPT4ge1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgIHRoaXMuYnJpbmdGb2N1c0luc2lkZU92ZXJsYXkoKVxuICAgIHRoaXMucHJvcHMub25FbnRlcmVkKG5vZGUpXG4gIH1cblxuICBoYW5kbGVFeGl0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlQm9keVNjcm9sbChmYWxzZSlcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25FeGl0KVxuICB9XG5cbiAgaGFuZGxlRXhpdGluZyA9IG5vZGUgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuICAgIHRoaXMuYnJpbmdGb2N1c0JhY2tUb1RhcmdldCgpXG4gICAgdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSlcbiAgfVxuXG4gIGhhbmRsZUV4aXRlZCA9IG5vZGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiBmYWxzZSwgZXhpdGVkOiB0cnVlIH0pXG4gICAgdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKVxuICB9XG5cbiAgaGFuZGxlQmFja2Ryb3BDbGljayA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0IHx8ICF0aGlzLnByb3BzLnNob3VsZENsb3NlT25DbGljaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBvbkNvbnRhaW5lclJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gcmVmXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGNvbnRhaW5lclByb3BzID0ge30sXG4gICAgICBpc1Nob3duLFxuICAgICAgY2hpbGRyZW5cbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBleGl0aW5nLCBleGl0ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChleGl0ZWQpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNrIHZhbHVlPXtTdGFja2luZ09yZGVyLk9WRVJMQVl9PlxuICAgICAgICB7ekluZGV4ID0+IChcbiAgICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICAgICAgdGltZW91dD17QU5JTUFUSU9OX0RVUkFUSU9OfVxuICAgICAgICAgICAgICBpbj17aXNTaG93biAmJiAhZXhpdGluZ31cbiAgICAgICAgICAgICAgb25FeGl0PXt0aGlzLmhhbmRsZUV4aXR9XG4gICAgICAgICAgICAgIG9uRXhpdGluZz17dGhpcy5oYW5kbGVFeGl0aW5nfVxuICAgICAgICAgICAgICBvbkV4aXRlZD17dGhpcy5oYW5kbGVFeGl0ZWR9XG4gICAgICAgICAgICAgIG9uRW50ZXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICAgIG9uRW50ZXJpbmc9e3RoaXMuaGFuZGxlRW50ZXJpbmd9XG4gICAgICAgICAgICAgIG9uRW50ZXJlZD17dGhpcy5oYW5kbGVFbnRlcmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RhdGUgPT4gKFxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja2Ryb3BDbGlja31cbiAgICAgICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uQ29udGFpbmVyUmVmfVxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICAgICAgcmlnaHQ9ezB9XG4gICAgICAgICAgICAgICAgICBib3R0b209ezB9XG4gICAgICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBjc3MoYW5pbWF0aW9uU3R5bGVzKHRoZW1lLm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3IpKS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiB0aGlzLmNsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShPdmVybGF5KVxuIl19
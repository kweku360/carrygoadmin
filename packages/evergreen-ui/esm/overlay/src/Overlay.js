import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import { css } from 'glamor';
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import Box from 'ui-box';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import { StackingOrder } from '../../constants';
import { withTheme } from '../../theme';
import safeInvoke from '../../lib/safe-invoke';
import preventBodyScroll from '../../lib/prevent-body-scroll';
var animationEasing = {
  standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0.0, 0.6, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;
var fadeInAnimation = css.keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var fadeOutAnimation = css.keyframes('fadeOutAnimation', {
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
  _inherits(Overlay, _React$Component);

  var _super = _createSuper(Overlay);

  function Overlay(props) {
    var _this;

    _classCallCheck(this, Overlay);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "bringFocusInsideOverlay", function () {
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

    _defineProperty(_assertThisInitialized(_this), "bringFocusBackToTarget", function () {
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

    _defineProperty(_assertThisInitialized(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27 && _this.props.shouldCloseOnEscapePress) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      var shouldClose = safeInvoke(_this.props.onBeforeClose);

      if (shouldClose !== false) {
        _this.setState({
          exiting: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBodyScroll", function (preventScroll) {
      if (_this.props.preventBodyScrolling) {
        preventBodyScroll(preventScroll);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      _this.handleBodyScroll(true);

      safeInvoke(_this.props.onEnter);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEntering", function (node) {
      document.body.addEventListener('keydown', _this.onEsc, false);

      _this.props.onEntering(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEntered", function (node) {
      _this.previousActiveElement = document.activeElement;

      _this.bringFocusInsideOverlay();

      _this.props.onEntered(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExit", function () {
      _this.handleBodyScroll(false);

      safeInvoke(_this.props.onExit);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExiting", function (node) {
      document.body.removeEventListener('keydown', _this.onEsc, false);

      _this.bringFocusBackToTarget();

      _this.props.onExiting(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExited", function (node) {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onExited(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      if (e.target !== e.currentTarget || !_this.props.shouldCloseOnClick) {
        return;
      }

      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "onContainerRef", function (ref) {
      _this.containerElement = ref;
    });

    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  _createClass(Overlay, [{
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
      return React.createElement(Stack, {
        value: StackingOrder.OVERLAY
      }, function (zIndex) {
        return React.createElement(Portal, null, React.createElement(Transition, {
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
          return React.createElement(Box, _extends({
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
            className: cx(containerProps.className, css(animationStyles(theme.overlayBackgroundColor)).toString())
          }), typeof children === 'function' ? children({
            state: state,
            close: _this2.close
          }) : children);
        }));
      });
    }
  }]);

  return Overlay;
}(React.Component);

Overlay.displayName = "Overlay";

_defineProperty(Overlay, "propTypes", {
  /**
   * Children can be a node or a function accepting `close: func`
   * and `state: ENTERING | ENTERED | EXITING | EXITED`.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * Show the component; triggers the enter or exit states.
   */
  isShown: PropTypes.bool,

  /**
   * Props to be passed through on the inner Box.
   */
  containerProps: PropTypes.object,

  /**
   * Whether or not to prevent body scrolling outside the context of the overlay
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   * type: `Function(exitState: Any?, node: HtmlElement) -> void`
   */
  onExited: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntered: PropTypes.func,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(Overlay, "defaultProps", {
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

export default withTheme(Overlay);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vdmVybGF5L3NyYy9PdmVybGF5LmpzIl0sIm5hbWVzIjpbImN4IiwiY3NzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJUcmFuc2l0aW9uIiwiQm94IiwiUG9ydGFsIiwiU3RhY2siLCJTdGFja2luZ09yZGVyIiwid2l0aFRoZW1lIiwic2FmZUludm9rZSIsInByZXZlbnRCb2R5U2Nyb2xsIiwiYW5pbWF0aW9uRWFzaW5nIiwic3RhbmRhcmQiLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJzaGFycCIsInNwcmluZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsImZhZGVJbkFuaW1hdGlvbiIsImtleWZyYW1lcyIsImZyb20iLCJvcGFjaXR5IiwidG8iLCJmYWRlT3V0QW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwibGVmdCIsInRvcCIsInBvc2l0aW9uIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGVudCIsImFuaW1hdGlvbiIsIk92ZXJsYXkiLCJwcm9wcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbnRhaW5lckVsZW1lbnQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJpc1Nob3duIiwiaXNGb2N1c091dHNpZGVNb2RhbCIsImNvbnRhaW5zIiwiYXV0b2ZvY3VzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyRWxlbWVudCIsImJ1dHRvbkVsZW1lbnQiLCJmb2N1cyIsImlzRm9jdXNJbnNpZGVNb2RhbCIsInByZXZpb3VzQWN0aXZlRWxlbWVudCIsImJvZHkiLCJlIiwia2V5Q29kZSIsInNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyIsImNsb3NlIiwic2hvdWxkQ2xvc2UiLCJvbkJlZm9yZUNsb3NlIiwic2V0U3RhdGUiLCJleGl0aW5nIiwicHJldmVudFNjcm9sbCIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwiaGFuZGxlQm9keVNjcm9sbCIsIm9uRW50ZXIiLCJub2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRXNjIiwib25FbnRlcmluZyIsImJyaW5nRm9jdXNJbnNpZGVPdmVybGF5Iiwib25FbnRlcmVkIiwib25FeGl0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJyaW5nRm9jdXNCYWNrVG9UYXJnZXQiLCJvbkV4aXRpbmciLCJleGl0ZWQiLCJvbkV4aXRlZCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJzaG91bGRDbG9zZU9uQ2xpY2siLCJyZWYiLCJzdGF0ZSIsInByZXZQcm9wcyIsInRoZW1lIiwiY29udGFpbmVyUHJvcHMiLCJjaGlsZHJlbiIsIk9WRVJMQVkiLCJ6SW5kZXgiLCJoYW5kbGVFeGl0IiwiaGFuZGxlRXhpdGluZyIsImhhbmRsZUV4aXRlZCIsImhhbmRsZUVudGVyIiwiaGFuZGxlRW50ZXJpbmciLCJoYW5kbGVFbnRlcmVkIiwiaGFuZGxlQmFja2Ryb3BDbGljayIsIm9uQ29udGFpbmVyUmVmIiwiY2xhc3NOYW1lIiwib3ZlcmxheUJhY2tncm91bmRDb2xvciIsInRvU3RyaW5nIiwiQ29tcG9uZW50Iiwib25lT2ZUeXBlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwib2JqZWN0Iiwib25IaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLG1DQUF2QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGNBQXZCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixhQUF0QjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsaUJBQTlCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsdUJBQXZCO0FBQ0EsT0FBT0MsaUJBQVAsTUFBOEIsK0JBQTlCO0FBRUEsSUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFRLGtDQURjO0FBRXRCQyxFQUFBQSxZQUFZLGtDQUZVO0FBR3RCQyxFQUFBQSxZQUFZLGdDQUhVO0FBSXRCQyxFQUFBQSxLQUFLLGtDQUppQjtBQUt0QkMsRUFBQUEsTUFBTTtBQUxnQixDQUF4QjtBQVFBLElBQU1DLGtCQUFrQixHQUFHLEdBQTNCO0FBRUEsSUFBTUMsZUFBZSxHQUFHbEIsR0FBRyxDQUFDbUIsU0FBSixDQUFjLGlCQUFkLEVBQWlDO0FBQ3ZEQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsT0FBTyxFQUFFO0FBREwsR0FEaUQ7QUFJdkRDLEVBQUFBLEVBQUUsRUFBRTtBQUNGRCxJQUFBQSxPQUFPLEVBQUU7QUFEUDtBQUptRCxDQUFqQyxDQUF4QjtBQVNBLElBQU1FLGdCQUFnQixHQUFHdkIsR0FBRyxDQUFDbUIsU0FBSixDQUFjLGtCQUFkLEVBQWtDO0FBQ3pEQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsT0FBTyxFQUFFO0FBREwsR0FEbUQ7QUFJekRDLEVBQUFBLEVBQUUsRUFBRTtBQUNGRCxJQUFBQSxPQUFPLEVBQUU7QUFEUDtBQUpxRCxDQUFsQyxDQUF6Qjs7QUFTQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLGVBQWU7QUFBQSxTQUFLO0FBQzFDLGlCQUFhO0FBQ1hBLE1BQUFBLGVBQWUsRUFBZkEsZUFEVztBQUVYQyxNQUFBQSxJQUFJLEVBQUUsQ0FGSztBQUdYQyxNQUFBQSxHQUFHLEVBQUUsQ0FITTtBQUlYQyxNQUFBQSxRQUFRLEVBQUUsT0FKQztBQUtYQyxNQUFBQSxPQUFPLEVBQUUsT0FMRTtBQU1YQyxNQUFBQSxLQUFLLEVBQUUsTUFOSTtBQU9YQyxNQUFBQSxNQUFNLEVBQUUsTUFQRztBQVFYQyxNQUFBQSxPQUFPLEVBQUU7QUFSRSxLQUQ2QjtBQVcxQyx5RUFBcUU7QUFDbkVDLE1BQUFBLFNBQVMsWUFBS2YsZUFBTCxjQUF3QkQsa0JBQXhCLGdCQUNQTixlQUFlLENBQUNFLFlBRFQ7QUFEMEQsS0FYM0I7QUFnQjFDLHVFQUFtRTtBQUNqRW9CLE1BQUFBLFNBQVMsWUFBS1YsZ0JBQUwsY0FBeUJOLGtCQUF6QixnQkFDUE4sZUFBZSxDQUFDRyxZQURUO0FBRHdEO0FBaEJ6QixHQUFMO0FBQUEsQ0FBdkM7QUF1QkE7Ozs7OztJQUlNb0IsTzs7Ozs7QUF3R0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLDhFQTJCTyxZQUFNO0FBQzlCO0FBQ0EsYUFBT0MscUJBQXFCLENBQUMsWUFBTTtBQUNqQztBQUNBO0FBRUEsWUFDRSxNQUFLQyxnQkFBTCxJQUF5QixJQUF6QixJQUFpQztBQUNqQ0MsUUFBQUEsUUFBUSxDQUFDQyxhQUFULElBQTBCLElBRDFCLElBQ2tDO0FBQ2xDLFNBQUMsTUFBS0osS0FBTCxDQUFXSyxPQUhkLEVBSUU7QUFDQTtBQUNEOztBQUVELFlBQU1DLG1CQUFtQixHQUFHLENBQUMsTUFBS0osZ0JBQUwsQ0FBc0JLLFFBQXRCLENBQzNCSixRQUFRLENBQUNDLGFBRGtCLENBQTdCOztBQUdBLFlBQUlFLG1CQUFKLEVBQXlCO0FBQ3ZCO0FBQ0EsY0FBTUUsZ0JBQWdCLEdBQUcsTUFBS04sZ0JBQUwsQ0FBc0JPLGFBQXRCLENBQ3ZCLGFBRHVCLENBQXpCOztBQUdBLGNBQU1DLGNBQWMsR0FBRyxNQUFLUixnQkFBTCxDQUFzQk8sYUFBdEIsQ0FBb0MsWUFBcEMsQ0FBdkI7O0FBQ0EsY0FBTUUsYUFBYSxHQUFHLE1BQUtULGdCQUFMLENBQXNCTyxhQUF0QixDQUFvQyxRQUFwQyxDQUF0Qjs7QUFFQSxjQUFJRCxnQkFBSixFQUFzQjtBQUNwQkEsWUFBQUEsZ0JBQWdCLENBQUNJLEtBQWpCO0FBQ0QsV0FGRCxNQUVPLElBQUlGLGNBQUosRUFBb0I7QUFDekJBLFlBQUFBLGNBQWMsQ0FBQ0UsS0FBZjtBQUNELFdBRk0sTUFFQSxJQUFJRCxhQUFKLEVBQW1CO0FBQ3hCQSxZQUFBQSxhQUFhLENBQUNDLEtBQWQ7QUFDRDtBQUNGO0FBQ0YsT0EvQjJCLENBQTVCO0FBZ0NELEtBN0RrQjs7QUFBQSw2RUErRE0sWUFBTTtBQUM3QixhQUFPWCxxQkFBcUIsQ0FBQyxZQUFNO0FBQ2pDLFlBQ0UsTUFBS0MsZ0JBQUwsSUFBeUIsSUFBekIsSUFBaUM7QUFDakNDLFFBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxJQUEwQixJQUY1QixDQUVpQztBQUZqQyxVQUdFO0FBQ0E7QUFDRDs7QUFFRCxZQUFNUyxrQkFBa0IsR0FBRyxNQUFLWCxnQkFBTCxDQUFzQkssUUFBdEIsQ0FDekJKLFFBQVEsQ0FBQ0MsYUFEZ0IsQ0FBM0IsQ0FSaUMsQ0FZakM7OztBQUNBLFlBQ0UsTUFBS1UscUJBQUwsS0FDQ1gsUUFBUSxDQUFDQyxhQUFULEtBQTJCRCxRQUFRLENBQUNZLElBQXBDLElBQTRDRixrQkFEN0MsQ0FERixFQUdFO0FBQ0EsZ0JBQUtDLHFCQUFMLENBQTJCRixLQUEzQjtBQUNEO0FBQ0YsT0FuQjJCLENBQTVCO0FBb0JELEtBcEZrQjs7QUFBQSw0REFzRlgsVUFBQUksQ0FBQyxFQUFJO0FBQ1g7QUFDQSxVQUFJQSxDQUFDLENBQUNDLE9BQUYsS0FBYyxFQUFkLElBQW9CLE1BQUtqQixLQUFMLENBQVdrQix3QkFBbkMsRUFBNkQ7QUFDM0QsY0FBS0MsS0FBTDtBQUNEO0FBQ0YsS0EzRmtCOztBQUFBLDREQTZGWCxZQUFNO0FBQ1osVUFBTUMsV0FBVyxHQUFHOUMsVUFBVSxDQUFDLE1BQUswQixLQUFMLENBQVdxQixhQUFaLENBQTlCOztBQUNBLFVBQUlELFdBQVcsS0FBSyxLQUFwQixFQUEyQjtBQUN6QixjQUFLRSxRQUFMLENBQWM7QUFBRUMsVUFBQUEsT0FBTyxFQUFFO0FBQVgsU0FBZDtBQUNEO0FBQ0YsS0FsR2tCOztBQUFBLHVFQW9HQSxVQUFBQyxhQUFhLEVBQUk7QUFDbEMsVUFBSSxNQUFLeEIsS0FBTCxDQUFXeUIsb0JBQWYsRUFBcUM7QUFDbkNsRCxRQUFBQSxpQkFBaUIsQ0FBQ2lELGFBQUQsQ0FBakI7QUFDRDtBQUNGLEtBeEdrQjs7QUFBQSxrRUEwR0wsWUFBTTtBQUNsQixZQUFLRSxnQkFBTCxDQUFzQixJQUF0Qjs7QUFDQXBELE1BQUFBLFVBQVUsQ0FBQyxNQUFLMEIsS0FBTCxDQUFXMkIsT0FBWixDQUFWO0FBQ0QsS0E3R2tCOztBQUFBLHFFQStHRixVQUFBQyxJQUFJLEVBQUk7QUFDdkJ6QixNQUFBQSxRQUFRLENBQUNZLElBQVQsQ0FBY2MsZ0JBQWQsQ0FBK0IsU0FBL0IsRUFBMEMsTUFBS0MsS0FBL0MsRUFBc0QsS0FBdEQ7O0FBQ0EsWUFBSzlCLEtBQUwsQ0FBVytCLFVBQVgsQ0FBc0JILElBQXRCO0FBQ0QsS0FsSGtCOztBQUFBLG9FQW9ISCxVQUFBQSxJQUFJLEVBQUk7QUFDdEIsWUFBS2QscUJBQUwsR0FBNkJYLFFBQVEsQ0FBQ0MsYUFBdEM7O0FBQ0EsWUFBSzRCLHVCQUFMOztBQUNBLFlBQUtoQyxLQUFMLENBQVdpQyxTQUFYLENBQXFCTCxJQUFyQjtBQUNELEtBeEhrQjs7QUFBQSxpRUEwSE4sWUFBTTtBQUNqQixZQUFLRixnQkFBTCxDQUFzQixLQUF0Qjs7QUFDQXBELE1BQUFBLFVBQVUsQ0FBQyxNQUFLMEIsS0FBTCxDQUFXa0MsTUFBWixDQUFWO0FBQ0QsS0E3SGtCOztBQUFBLG9FQStISCxVQUFBTixJQUFJLEVBQUk7QUFDdEJ6QixNQUFBQSxRQUFRLENBQUNZLElBQVQsQ0FBY29CLG1CQUFkLENBQWtDLFNBQWxDLEVBQTZDLE1BQUtMLEtBQWxELEVBQXlELEtBQXpEOztBQUNBLFlBQUtNLHNCQUFMOztBQUNBLFlBQUtwQyxLQUFMLENBQVdxQyxTQUFYLENBQXFCVCxJQUFyQjtBQUNELEtBbklrQjs7QUFBQSxtRUFxSUosVUFBQUEsSUFBSSxFQUFJO0FBQ3JCLFlBQUtOLFFBQUwsQ0FBYztBQUFFQyxRQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQmUsUUFBQUEsTUFBTSxFQUFFO0FBQTFCLE9BQWQ7O0FBQ0EsWUFBS3RDLEtBQUwsQ0FBV3VDLFFBQVgsQ0FBb0JYLElBQXBCO0FBQ0QsS0F4SWtCOztBQUFBLDBFQTBJRyxVQUFBWixDQUFDLEVBQUk7QUFDekIsVUFBSUEsQ0FBQyxDQUFDd0IsTUFBRixLQUFheEIsQ0FBQyxDQUFDeUIsYUFBZixJQUFnQyxDQUFDLE1BQUt6QyxLQUFMLENBQVcwQyxrQkFBaEQsRUFBb0U7QUFDbEU7QUFDRDs7QUFFRCxZQUFLdkIsS0FBTDtBQUNELEtBaEprQjs7QUFBQSxxRUFrSkYsVUFBQXdCLEdBQUcsRUFBSTtBQUN0QixZQUFLekMsZ0JBQUwsR0FBd0J5QyxHQUF4QjtBQUNELEtBcEprQjs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hyQixNQUFBQSxPQUFPLEVBQUUsS0FERTtBQUVYZSxNQUFBQSxNQUFNLEVBQUUsQ0FBQ3RDLEtBQUssQ0FBQ0s7QUFGSixLQUFiO0FBSGlCO0FBT2xCOzs7O3VDQUVrQndDLFMsRUFBVztBQUM1QixVQUFJLENBQUNBLFNBQVMsQ0FBQ3hDLE9BQVgsSUFBc0IsS0FBS0wsS0FBTCxDQUFXSyxPQUFyQyxFQUE4QztBQUM1QztBQUNBLGFBQUtpQixRQUFMLENBQWM7QUFDWmdCLFVBQUFBLE1BQU0sRUFBRTtBQURJLFNBQWQ7QUFHRDtBQUNGOzs7MkNBRXNCO0FBQ3JCLFdBQUtaLGdCQUFMLENBQXNCLEtBQXRCO0FBQ0F2QixNQUFBQSxRQUFRLENBQUNZLElBQVQsQ0FBY29CLG1CQUFkLENBQWtDLFNBQWxDLEVBQTZDLEtBQUtMLEtBQWxELEVBQXlELEtBQXpEO0FBQ0Q7QUFFRDs7Ozs7Ozs2QkErSFM7QUFBQTs7QUFBQSx3QkFPSCxLQUFLOUIsS0FQRjtBQUFBLFVBRUw4QyxLQUZLLGVBRUxBLEtBRks7QUFBQSw4Q0FJTEMsY0FKSztBQUFBLFVBSUxBLGNBSkssc0NBSVksRUFKWjtBQUFBLFVBS0wxQyxPQUxLLGVBS0xBLE9BTEs7QUFBQSxVQU1MMkMsUUFOSyxlQU1MQSxRQU5LO0FBQUEsd0JBU3FCLEtBQUtKLEtBVDFCO0FBQUEsVUFTQ3JCLE9BVEQsZUFTQ0EsT0FURDtBQUFBLFVBU1VlLE1BVFYsZUFTVUEsTUFUVjtBQVdQLFVBQUlBLE1BQUosRUFBWSxPQUFPLElBQVA7QUFFWixhQUNFLG9CQUFDLEtBQUQ7QUFBTyxRQUFBLEtBQUssRUFBRWxFLGFBQWEsQ0FBQzZFO0FBQTVCLFNBQ0csVUFBQUMsTUFBTTtBQUFBLGVBQ0wsb0JBQUMsTUFBRCxRQUNFLG9CQUFDLFVBQUQ7QUFDRSxVQUFBLE1BQU0sTUFEUjtBQUVFLFVBQUEsYUFBYSxNQUZmO0FBR0UsVUFBQSxPQUFPLEVBQUVwRSxrQkFIWDtBQUlFLGdCQUFJdUIsT0FBTyxJQUFJLENBQUNrQixPQUpsQjtBQUtFLFVBQUEsTUFBTSxFQUFFLE1BQUksQ0FBQzRCLFVBTGY7QUFNRSxVQUFBLFNBQVMsRUFBRSxNQUFJLENBQUNDLGFBTmxCO0FBT0UsVUFBQSxRQUFRLEVBQUUsTUFBSSxDQUFDQyxZQVBqQjtBQVFFLFVBQUEsT0FBTyxFQUFFLE1BQUksQ0FBQ0MsV0FSaEI7QUFTRSxVQUFBLFVBQVUsRUFBRSxNQUFJLENBQUNDLGNBVG5CO0FBVUUsVUFBQSxTQUFTLEVBQUUsTUFBSSxDQUFDQztBQVZsQixXQVlHLFVBQUFaLEtBQUs7QUFBQSxpQkFDSixvQkFBQyxHQUFEO0FBQ0UsWUFBQSxPQUFPLEVBQUUsTUFBSSxDQUFDYSxtQkFEaEI7QUFFRSxZQUFBLFFBQVEsRUFBRSxNQUFJLENBQUNDLGNBRmpCO0FBR0UsWUFBQSxRQUFRLEVBQUMsT0FIWDtBQUlFLFlBQUEsR0FBRyxFQUFFLENBSlA7QUFLRSxZQUFBLElBQUksRUFBRSxDQUxSO0FBTUUsWUFBQSxLQUFLLEVBQUUsQ0FOVDtBQU9FLFlBQUEsTUFBTSxFQUFFLENBUFY7QUFRRSxZQUFBLE1BQU0sRUFBRVIsTUFSVjtBQVNFLDBCQUFZTjtBQVRkLGFBVU1HLGNBVk47QUFXRSxZQUFBLFNBQVMsRUFBRW5GLEVBQUUsQ0FDWG1GLGNBQWMsQ0FBQ1ksU0FESixFQUVYOUYsR0FBRyxDQUFDd0IsZUFBZSxDQUFDeUQsS0FBSyxDQUFDYyxzQkFBUCxDQUFoQixDQUFILENBQW1EQyxRQUFuRCxFQUZXO0FBWGYsY0FnQkcsT0FBT2IsUUFBUCxLQUFvQixVQUFwQixHQUNHQSxRQUFRLENBQUM7QUFDUEosWUFBQUEsS0FBSyxFQUFMQSxLQURPO0FBRVB6QixZQUFBQSxLQUFLLEVBQUUsTUFBSSxDQUFDQTtBQUZMLFdBQUQsQ0FEWCxHQUtHNkIsUUFyQk4sQ0FESTtBQUFBLFNBWlIsQ0FERixDQURLO0FBQUEsT0FEVCxDQURGO0FBOENEOzs7O0VBelRtQmxGLEtBQUssQ0FBQ2dHLFM7O0FBQXRCL0QsTzs7Z0JBQUFBLE8sZUFDZTtBQUNqQjs7OztBQUlBaUQsRUFBQUEsUUFBUSxFQUFFakYsU0FBUyxDQUFDZ0csU0FBVixDQUFvQixDQUFDaEcsU0FBUyxDQUFDNkQsSUFBWCxFQUFpQjdELFNBQVMsQ0FBQ2lHLElBQTNCLENBQXBCLEVBQXNEQyxVQUwvQzs7QUFPakI7OztBQUdBNUQsRUFBQUEsT0FBTyxFQUFFdEMsU0FBUyxDQUFDbUcsSUFWRjs7QUFZakI7OztBQUdBbkIsRUFBQUEsY0FBYyxFQUFFaEYsU0FBUyxDQUFDb0csTUFmVDs7QUFpQmpCOzs7QUFHQTFDLEVBQUFBLG9CQUFvQixFQUFFMUQsU0FBUyxDQUFDbUcsSUFwQmY7O0FBc0JqQjs7O0FBR0F4QixFQUFBQSxrQkFBa0IsRUFBRTNFLFNBQVMsQ0FBQ21HLElBekJiOztBQTJCakI7OztBQUdBaEQsRUFBQUEsd0JBQXdCLEVBQUVuRCxTQUFTLENBQUNtRyxJQTlCbkI7O0FBZ0NqQjs7Ozs7QUFLQTdDLEVBQUFBLGFBQWEsRUFBRXRELFNBQVMsQ0FBQ2lHLElBckNSOztBQXVDakI7Ozs7QUFJQTlCLEVBQUFBLE1BQU0sRUFBRW5FLFNBQVMsQ0FBQ2lHLElBM0NEOztBQTZDakI7Ozs7QUFJQTNCLEVBQUFBLFNBQVMsRUFBRXRFLFNBQVMsQ0FBQ2lHLElBakRKOztBQW1EakI7Ozs7QUFJQXpCLEVBQUFBLFFBQVEsRUFBRXhFLFNBQVMsQ0FBQ2lHLElBdkRIOztBQXlEakI7Ozs7Ozs7QUFPQXJDLEVBQUFBLE9BQU8sRUFBRTVELFNBQVMsQ0FBQ2lHLElBaEVGOztBQWtFakI7Ozs7Ozs7QUFPQWpDLEVBQUFBLFVBQVUsRUFBRWhFLFNBQVMsQ0FBQ2lHLElBekVMOztBQTJFakI7Ozs7Ozs7QUFPQS9CLEVBQUFBLFNBQVMsRUFBRWxFLFNBQVMsQ0FBQ2lHLElBbEZKOztBQW9GakI7OztBQUdBbEIsRUFBQUEsS0FBSyxFQUFFL0UsU0FBUyxDQUFDb0csTUFBVixDQUFpQkY7QUF2RlAsQzs7Z0JBRGZsRSxPLGtCQTJGa0I7QUFDcEJxRSxFQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQURJO0FBRXBCMUIsRUFBQUEsa0JBQWtCLEVBQUUsSUFGQTtBQUdwQnhCLEVBQUFBLHdCQUF3QixFQUFFLElBSE47QUFJcEJPLEVBQUFBLG9CQUFvQixFQUFFLEtBSkY7QUFLcEJTLEVBQUFBLE1BQU0sRUFBRSxrQkFBTSxDQUFFLENBTEk7QUFNcEJHLEVBQUFBLFNBQVMsRUFBRSxxQkFBTSxDQUFFLENBTkM7QUFPcEJFLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBUEU7QUFRcEJaLEVBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBUkc7QUFTcEJJLEVBQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFLENBVEE7QUFVcEJFLEVBQUFBLFNBQVMsRUFBRSxxQkFBTSxDQUFFO0FBVkMsQzs7QUFpT3hCLGVBQWU1RCxTQUFTLENBQUMwQixPQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vLi4vc3RhY2snXG5pbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgcHJldmVudEJvZHlTY3JvbGwgZnJvbSAnLi4vLi4vbGliL3ByZXZlbnQtYm9keS1zY3JvbGwnXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgc3RhbmRhcmQ6IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlgLFxuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYCxcbiAgc2hhcnA6IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuNiwgMSlgLFxuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyNDBcblxuY29uc3QgZmFkZUluQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnZmFkZUluQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgb3BhY2l0eTogMFxuICB9LFxuICB0bzoge1xuICAgIG9wYWNpdHk6IDFcbiAgfVxufSlcblxuY29uc3QgZmFkZU91dEFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2ZhZGVPdXRBbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRvOiB7XG4gICAgb3BhY2l0eTogMFxuICB9XG59KVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXMgPSBiYWNrZ3JvdW5kQ29sb3IgPT4gKHtcbiAgJyY6OmJlZm9yZSc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDAsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGNvbnRlbnQ6ICdcIiBcIidcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdOjpiZWZvcmUsICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl06OmJlZm9yZSc6IHtcbiAgICBhbmltYXRpb246IGAke2ZhZGVJbkFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgIGFuaW1hdGlvbkVhc2luZy5kZWNlbGVyYXRpb25cbiAgICB9IGJvdGhgXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdOjpiZWZvcmUsICZbZGF0YS1zdGF0ZT1cImV4aXRlZFwiXTo6YmVmb3JlJzoge1xuICAgIGFuaW1hdGlvbjogYCR7ZmFkZU91dEFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgIGFuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb25cbiAgICB9IGJvdGhgXG4gIH1cbn0pXG5cbi8qKlxuICogT3ZlcmxheSBpcyBlc3NlbnRpYWxseSBhIHdyYXBwZXIgYXJvdW5kIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvblxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9cbiAqL1xuY2xhc3MgT3ZlcmxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gY2FuIGJlIGEgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgY2xvc2U6IGZ1bmNgXG4gICAgICogYW5kIGBzdGF0ZTogRU5URVJJTkcgfCBFTlRFUkVEIHwgRVhJVElORyB8IEVYSVRFRGAuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlcy5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRvIGJlIHBhc3NlZCB0aHJvdWdoIG9uIHRoZSBpbm5lciBCb3guXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IGJvZHkgc2Nyb2xsaW5nIG91dHNpZGUgdGhlIGNvbnRleHQgb2YgdGhlIG92ZXJsYXlcbiAgICAgKi9cbiAgICBwcmV2ZW50Qm9keVNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgY2xpY2tpbmcgdGhlIG92ZXJsYXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25DbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvdmVybGF5IGlzIGFib3V0IHRvIGNsb3NlLlxuICAgICAqIFJldHVybiBgZmFsc2VgIHRvIHByZXZlbnQgdGhlIHNoZWV0IGZyb20gY2xvc2luZy5cbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24gLT4gQm9vbGVhbmBcbiAgICAgKi9cbiAgICBvbkJlZm9yZUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24oZXhpdFN0YXRlOiBBbnk/LCBub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICAgKiBBbiBleHRyYSBwYXJhbWV0ZXIgaXNBcHBlYXJpbmcgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlXG4gICAgICogaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50LlxuICAgICAqXG4gICAgICogdHlwZTogYEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogQW4gZXh0cmEgcGFyYW1ldGVyIGlzQXBwZWFyaW5nIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZVxuICAgICAqIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudC5cbiAgICAgKlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogQW4gZXh0cmEgcGFyYW1ldGVyIGlzQXBwZWFyaW5nIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZVxuICAgICAqIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudC5cbiAgICAgKlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkhpZGU6ICgpID0+IHt9LFxuICAgIHNob3VsZENsb3NlT25DbGljazogdHJ1ZSxcbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IHRydWUsXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IGZhbHNlLFxuICAgIG9uRXhpdDogKCkgPT4ge30sXG4gICAgb25FeGl0aW5nOiAoKSA9PiB7fSxcbiAgICBvbkV4aXRlZDogKCkgPT4ge30sXG4gICAgb25FbnRlcjogKCkgPT4ge30sXG4gICAgb25FbnRlcmluZzogKCkgPT4ge30sXG4gICAgb25FbnRlcmVkOiAoKSA9PiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGl0aW5nOiBmYWxzZSxcbiAgICAgIGV4aXRlZDogIXByb3BzLmlzU2hvd25cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCFwcmV2UHJvcHMuaXNTaG93biAmJiB0aGlzLnByb3BzLmlzU2hvd24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGV4aXRlZDogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVCb2R5U2Nyb2xsKGZhbHNlKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZHMgYm9ycm93ZWQgZnJvbSBCbHVlcHJpbnRKU1xuICAgKiBodHRwczovL2dpdGh1Yi5jb20vcGFsYW50aXIvYmx1ZXByaW50L2Jsb2IvcmVsZWFzZS8yLjAuMC9wYWNrYWdlcy9jb3JlL3NyYy9jb21wb25lbnRzL292ZXJsYXkvb3ZlcmxheS50c3hcbiAgICovXG4gIGJyaW5nRm9jdXNJbnNpZGVPdmVybGF5ID0gKCkgPT4ge1xuICAgIC8vIEFsd2F5cyBkZWxheSBmb2N1cyBtYW5pcHVsYXRpb24gdG8ganVzdCBiZWZvcmUgcmVwYWludCB0byBwcmV2ZW50IHNjcm9sbCBqdW1waW5nXG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBDb250YWluZXIgcmVmIG1heSBiZSB1bmRlZmluZWQgYmV0d2VlbiBjb21wb25lbnQgbW91bnRpbmcgYW5kIFBvcnRhbCByZW5kZXJpbmdcbiAgICAgIC8vIGFjdGl2ZUVsZW1lbnQgbWF5IGJlIHVuZGVmaW5lZCBpbiBzb21lIHJhcmUgY2FzZXMgaW4gSUVcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgIXRoaXMucHJvcHMuaXNTaG93blxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZvY3VzT3V0c2lkZU1vZGFsID0gIXRoaXMuY29udGFpbmVyRWxlbWVudC5jb250YWlucyhcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgKVxuICAgICAgaWYgKGlzRm9jdXNPdXRzaWRlTW9kYWwpIHtcbiAgICAgICAgLy8gRWxlbWVudCBtYXJrZWQgYXV0b2ZvY3VzIGhhcyBoaWdoZXIgcHJpb3JpdHkgdGhhbiB0aGUgb3RoZXIgY2xvd25zXG4gICAgICAgIGNvbnN0IGF1dG9mb2N1c0VsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnW2F1dG9mb2N1c10nXG4gICAgICAgIClcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignW3RhYmluZGV4XScpXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJylcblxuICAgICAgICBpZiAoYXV0b2ZvY3VzRWxlbWVudCkge1xuICAgICAgICAgIGF1dG9mb2N1c0VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2UgaWYgKHdyYXBwZXJFbGVtZW50KSB7XG4gICAgICAgICAgd3JhcHBlckVsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgICAgICBidXR0b25FbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBicmluZ0ZvY3VzQmFja1RvVGFyZ2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGb2N1c0luc2lkZU1vZGFsID0gdGhpcy5jb250YWluZXJFbGVtZW50LmNvbnRhaW5zKFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICApXG5cbiAgICAgIC8vIEJyaW5nIGJhY2sgZm9jdXMgb24gdGhlIHRhcmdldC5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgaXNGb2N1c0luc2lkZU1vZGFsKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25Fc2MgPSBlID0+IHtcbiAgICAvLyBFc2Mga2V5XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MpIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZENsb3NlID0gc2FmZUludm9rZSh0aGlzLnByb3BzLm9uQmVmb3JlQ2xvc2UpXG4gICAgaWYgKHNob3VsZENsb3NlICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRpbmc6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCb2R5U2Nyb2xsID0gcHJldmVudFNjcm9sbCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMucHJldmVudEJvZHlTY3JvbGxpbmcpIHtcbiAgICAgIHByZXZlbnRCb2R5U2Nyb2xsKHByZXZlbnRTY3JvbGwpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVCb2R5U2Nyb2xsKHRydWUpXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLm9uRW50ZXIpXG4gIH1cblxuICBoYW5kbGVFbnRlcmluZyA9IG5vZGUgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuICAgIHRoaXMucHJvcHMub25FbnRlcmluZyhub2RlKVxuICB9XG5cbiAgaGFuZGxlRW50ZXJlZCA9IG5vZGUgPT4ge1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgIHRoaXMuYnJpbmdGb2N1c0luc2lkZU92ZXJsYXkoKVxuICAgIHRoaXMucHJvcHMub25FbnRlcmVkKG5vZGUpXG4gIH1cblxuICBoYW5kbGVFeGl0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlQm9keVNjcm9sbChmYWxzZSlcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25FeGl0KVxuICB9XG5cbiAgaGFuZGxlRXhpdGluZyA9IG5vZGUgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuICAgIHRoaXMuYnJpbmdGb2N1c0JhY2tUb1RhcmdldCgpXG4gICAgdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSlcbiAgfVxuXG4gIGhhbmRsZUV4aXRlZCA9IG5vZGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiBmYWxzZSwgZXhpdGVkOiB0cnVlIH0pXG4gICAgdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKVxuICB9XG5cbiAgaGFuZGxlQmFja2Ryb3BDbGljayA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0IHx8ICF0aGlzLnByb3BzLnNob3VsZENsb3NlT25DbGljaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBvbkNvbnRhaW5lclJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gcmVmXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGNvbnRhaW5lclByb3BzID0ge30sXG4gICAgICBpc1Nob3duLFxuICAgICAgY2hpbGRyZW5cbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBleGl0aW5nLCBleGl0ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChleGl0ZWQpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNrIHZhbHVlPXtTdGFja2luZ09yZGVyLk9WRVJMQVl9PlxuICAgICAgICB7ekluZGV4ID0+IChcbiAgICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICAgICAgdGltZW91dD17QU5JTUFUSU9OX0RVUkFUSU9OfVxuICAgICAgICAgICAgICBpbj17aXNTaG93biAmJiAhZXhpdGluZ31cbiAgICAgICAgICAgICAgb25FeGl0PXt0aGlzLmhhbmRsZUV4aXR9XG4gICAgICAgICAgICAgIG9uRXhpdGluZz17dGhpcy5oYW5kbGVFeGl0aW5nfVxuICAgICAgICAgICAgICBvbkV4aXRlZD17dGhpcy5oYW5kbGVFeGl0ZWR9XG4gICAgICAgICAgICAgIG9uRW50ZXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICAgIG9uRW50ZXJpbmc9e3RoaXMuaGFuZGxlRW50ZXJpbmd9XG4gICAgICAgICAgICAgIG9uRW50ZXJlZD17dGhpcy5oYW5kbGVFbnRlcmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RhdGUgPT4gKFxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja2Ryb3BDbGlja31cbiAgICAgICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uQ29udGFpbmVyUmVmfVxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICAgICAgcmlnaHQ9ezB9XG4gICAgICAgICAgICAgICAgICBib3R0b209ezB9XG4gICAgICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBjc3MoYW5pbWF0aW9uU3R5bGVzKHRoZW1lLm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3IpKS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiB0aGlzLmNsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShPdmVybGF5KVxuIl19
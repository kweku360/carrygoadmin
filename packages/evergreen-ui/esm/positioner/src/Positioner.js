import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import { StackingOrder, Position } from '../../constants';
import getPosition from './getPosition';
var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};

var initialState = function initialState() {
  return {
    top: null,
    left: null,
    transformOrigin: null
  };
};

var getCSS = function getCSS(_ref) {
  var initialScale = _ref.initialScale,
      animationDuration = _ref.animationDuration;
  return {
    position: 'fixed',
    opacity: 0,
    transitionTimingFunction: animationEasing.spring,
    transitionDuration: "".concat(animationDuration, "ms"),
    transitionProperty: 'opacity, transform',
    transform: "scale(".concat(initialScale, ") translateY(-1px)"),
    '&[data-state="entering"], &[data-state="entered"]': {
      opacity: 1,
      visibility: 'visible',
      transform: "scale(1)"
    },
    '&[data-state="exiting"]': {
      opacity: 0,
      transform: 'scale(1)'
    }
  };
};

var Positioner = /*#__PURE__*/function (_PureComponent) {
  _inherits(Positioner, _PureComponent);

  var _super = _createSuper(Positioner);

  function Positioner(props, context) {
    var _this;

    _classCallCheck(this, Positioner);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getTargetRef", function (ref) {
      _this.targetRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "getRef", function (ref) {
      _this.positionerRef = ref;

      _this.props.innerRef(ref);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      _this.update();
    });

    _defineProperty(_assertThisInitialized(_this), "update", function () {
      var prevHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var prevWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!_this.props.isShown || !_this.targetRef || !_this.positionerRef) return;

      var targetRect = _this.targetRef.getBoundingClientRect();

      var hasEntered = _this.positionerRef.getAttribute('data-state') === 'entered';
      var viewportHeight = document.documentElement.clientHeight;
      var viewportWidth = document.documentElement.clientWidth;
      var height;
      var width;

      if (hasEntered) {
        // Only when the animation is done should we opt-in to `getBoundingClientRect`
        var positionerRect = _this.positionerRef.getBoundingClientRect(); // https://github.com/segmentio/evergreen/issues/255
        // We need to ceil the width and height to prevent jitter when
        // the window is zoomed (when `window.devicePixelRatio` is not an integer)


        height = Math.round(positionerRect.height);
        width = Math.round(positionerRect.width);
      } else {
        // When the animation is in flight use `offsetWidth/Height` which
        // does not calculate the `transform` property as part of its result.
        // There is still change on jitter during the animation (although unoticable)
        // When the browser is zoomed in — we fix this with `Math.max`.
        height = Math.max(_this.positionerRef.offsetHeight, prevHeight);
        width = Math.max(_this.positionerRef.offsetWidth, prevWidth);
      }

      var _getPosition = getPosition({
        position: _this.props.position,
        targetRect: targetRect,
        targetOffset: _this.props.targetOffset,
        dimensions: {
          height: height,
          width: width
        },
        viewport: {
          width: viewportWidth,
          height: viewportHeight
        },
        viewportOffset: _this.props.bodyOffset
      }),
          rect = _getPosition.rect,
          transformOrigin = _getPosition.transformOrigin;

      _this.setState({
        left: rect.left,
        top: rect.top,
        transformOrigin: transformOrigin
      }, function () {
        _this.latestAnimationFrame = requestAnimationFrame(function () {
          _this.update(height, width);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleExited", function () {
      _this.setState(function () {
        return _objectSpread({}, initialState());
      }, function () {
        _this.props.onCloseComplete();
      });
    });

    _this.state = initialState();
    return _this;
  }

  _createClass(Positioner, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.latestAnimationFrame) {
        cancelAnimationFrame(this.latestAnimationFrame);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          target = _this$props.target,
          isShown = _this$props.isShown,
          children = _this$props.children,
          initialScale = _this$props.initialScale,
          targetOffset = _this$props.targetOffset,
          animationDuration = _this$props.animationDuration;
      var _this$state = this.state,
          left = _this$state.left,
          top = _this$state.top,
          transformOrigin = _this$state.transformOrigin;
      return React.createElement(Stack, {
        value: StackingOrder.POSITIONER
      }, function (zIndex) {
        return React.createElement(React.Fragment, null, target({
          getRef: _this2.getTargetRef,
          isShown: isShown
        }), React.createElement(Transition, {
          appear: true,
          "in": isShown,
          timeout: animationDuration,
          onEnter: _this2.handleEnter,
          onEntered: _this2.props.onOpenComplete,
          onExited: _this2.handleExited,
          unmountOnExit: true
        }, function (state) {
          return React.createElement(Portal, null, children({
            top: top,
            left: left,
            state: state,
            zIndex: zIndex,
            css: getCSS({
              targetOffset: targetOffset,
              initialScale: initialScale,
              animationDuration: animationDuration
            }),
            style: {
              transformOrigin: transformOrigin,
              left: left,
              top: top,
              zIndex: zIndex
            },
            getRef: _this2.getRef,
            animationDuration: animationDuration
          }));
        }));
      });
    }
  }]);

  return Positioner;
}(PureComponent);

Positioner.displayName = "Positioner";

_defineProperty(Positioner, "propTypes", {
  /**
   * The position the element that is being positioned is on.
   * Smart positioning might override this.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]).isRequired,

  /**
   * When true, show the element being positioned.
   */
  isShown: PropTypes.bool,

  /**
   * Function that returns the element being positioned.
   */
  children: PropTypes.func.isRequired,

  /**
   * Function that returns the ref of the element being positioned.
   */
  innerRef: PropTypes.func.isRequired,

  /**
   * The minimum distance from the body to the element being positioned.
   */
  bodyOffset: PropTypes.number.isRequired,

  /**
   * The minimum distance from the target to the element being positioned.
   */
  targetOffset: PropTypes.number.isRequired,

  /**
   * Function that should return a node for the target.
   * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
   */
  target: PropTypes.func.isRequired,

  /**
   * Initial scale of the element being positioned.
   */
  initialScale: PropTypes.number.isRequired,

  /**
   * Duration of the animation.
   */
  animationDuration: PropTypes.number.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func.isRequired
});

_defineProperty(Positioner, "defaultProps", {
  position: Position.BOTTOM,
  bodyOffset: 6,
  targetOffset: 6,
  initialScale: 0.9,
  animationDuration: 300,
  innerRef: function innerRef() {},
  onOpenComplete: function onOpenComplete() {},
  onCloseComplete: function onCloseComplete() {}
});

export { Positioner as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3NpdGlvbmVyL3NyYy9Qb3NpdGlvbmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlRyYW5zaXRpb24iLCJQb3J0YWwiLCJTdGFjayIsIlN0YWNraW5nT3JkZXIiLCJQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiYW5pbWF0aW9uRWFzaW5nIiwic3ByaW5nIiwiaW5pdGlhbFN0YXRlIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybU9yaWdpbiIsImdldENTUyIsImluaXRpYWxTY2FsZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwicG9zaXRpb24iLCJvcGFjaXR5IiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNmb3JtIiwidmlzaWJpbGl0eSIsIlBvc2l0aW9uZXIiLCJwcm9wcyIsImNvbnRleHQiLCJyZWYiLCJ0YXJnZXRSZWYiLCJwb3NpdGlvbmVyUmVmIiwiaW5uZXJSZWYiLCJ1cGRhdGUiLCJwcmV2SGVpZ2h0IiwicHJldldpZHRoIiwiaXNTaG93biIsInRhcmdldFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoYXNFbnRlcmVkIiwiZ2V0QXR0cmlidXRlIiwidmlld3BvcnRIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInZpZXdwb3J0V2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb25lclJlY3QiLCJNYXRoIiwicm91bmQiLCJtYXgiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsInRhcmdldE9mZnNldCIsImRpbWVuc2lvbnMiLCJ2aWV3cG9ydCIsInZpZXdwb3J0T2Zmc2V0IiwiYm9keU9mZnNldCIsInJlY3QiLCJzZXRTdGF0ZSIsImxhdGVzdEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25DbG9zZUNvbXBsZXRlIiwic3RhdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInRhcmdldCIsImNoaWxkcmVuIiwiUE9TSVRJT05FUiIsInpJbmRleCIsImdldFJlZiIsImdldFRhcmdldFJlZiIsImhhbmRsZUVudGVyIiwib25PcGVuQ29tcGxldGUiLCJoYW5kbGVFeGl0ZWQiLCJjc3MiLCJzdHlsZSIsIm9uZU9mIiwiVE9QIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJCT1RUT00iLCJCT1RUT01fTEVGVCIsIkJPVFRPTV9SSUdIVCIsIkxFRlQiLCJSSUdIVCIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsbUNBQXZCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixjQUF2QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsYUFBdEI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxRQUF4QixRQUF3QyxpQkFBeEM7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGVBQXhCO0FBRUEsSUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxNQUFNO0FBRGdCLENBQXhCOztBQUlBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBTztBQUMxQkMsSUFBQUEsR0FBRyxFQUFFLElBRHFCO0FBRTFCQyxJQUFBQSxJQUFJLEVBQUUsSUFGb0I7QUFHMUJDLElBQUFBLGVBQWUsRUFBRTtBQUhTLEdBQVA7QUFBQSxDQUFyQjs7QUFNQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLFlBQUgsUUFBR0EsWUFBSDtBQUFBLE1BQWlCQyxpQkFBakIsUUFBaUJBLGlCQUFqQjtBQUFBLFNBQTBDO0FBQ3ZEQyxJQUFBQSxRQUFRLEVBQUUsT0FENkM7QUFFdkRD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Q0FBQ3VGLE1BQVYsQ0FBaUJILFVBdkNkOztBQXlDakI7Ozs7QUFJQXBCLEVBQUFBLE1BQU0sRUFBRWhFLFNBQVMsQ0FBQ3NGLElBQVYsQ0FBZUYsVUE3Q047O0FBK0NqQjs7O0FBR0F0RSxFQUFBQSxZQUFZLEVBQUVkLFNBQVMsQ0FBQ3VGLE1BQVYsQ0FBaUJILFVBbERkOztBQW9EakI7OztBQUdBckUsRUFBQUEsaUJBQWlCLEVBQUVmLFNBQVMsQ0FBQ3VGLE1BQVYsQ0FBaUJILFVBdkRuQjs7QUF5RGpCOzs7QUFHQXZCLEVBQUFBLGVBQWUsRUFBRTdELFNBQVMsQ0FBQ3NGLElBQVYsQ0FBZUYsVUE1RGY7O0FBOERqQjs7O0FBR0FiLEVBQUFBLGNBQWMsRUFBRXZFLFNBQVMsQ0FBQ3NGLElBQVYsQ0FBZUY7QUFqRWQsQzs7Z0JBREE3RCxVLGtCQXFFRztBQUNwQlAsRUFBQUEsUUFBUSxFQUFFWCxRQUFRLENBQUMwRSxNQURDO0FBRXBCdkIsRUFBQUEsVUFBVSxFQUFFLENBRlE7QUFHcEJKLEVBQUFBLFlBQVksRUFBRSxDQUhNO0FBSXBCdEMsRUFBQUEsWUFBWSxFQUFFLEdBSk07QUFLcEJDLEVBQUFBLGlCQUFpQixFQUFFLEdBTEM7QUFNcEJjLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBTkU7QUFPcEIwQyxFQUFBQSxjQUFjLEVBQUUsMEJBQU0sQ0FBRSxDQVBKO0FBUXBCVixFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRTtBQVJMLEM7O1NBckVIdEMsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICcuLi8uLi9wb3J0YWwnXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uLy4uL3N0YWNrJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciwgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgZ2V0UG9zaXRpb24gZnJvbSAnLi9nZXRQb3NpdGlvbidcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAoKSA9PiAoe1xuICB0b3A6IG51bGwsXG4gIGxlZnQ6IG51bGwsXG4gIHRyYW5zZm9ybU9yaWdpbjogbnVsbFxufSlcblxuY29uc3QgZ2V0Q1NTID0gKHsgaW5pdGlhbFNjYWxlLCBhbmltYXRpb25EdXJhdGlvbiB9KSA9PiAoe1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgb3BhY2l0eTogMCxcbiAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBhbmltYXRpb25FYXNpbmcuc3ByaW5nLFxuICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2FuaW1hdGlvbkR1cmF0aW9ufW1zYCxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiAnb3BhY2l0eSwgdHJhbnNmb3JtJyxcbiAgdHJhbnNmb3JtOiBgc2NhbGUoJHtpbml0aWFsU2NhbGV9KSB0cmFuc2xhdGVZKC0xcHgpYCxcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbmVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIHRoZSBlbGVtZW50IHRoYXQgaXMgYmVpbmcgcG9zaXRpb25lZCBpcyBvbi5cbiAgICAgKiBTbWFydCBwb3NpdGlvbmluZyBtaWdodCBvdmVycmlkZSB0aGlzLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgUG9zaXRpb24uVE9QLFxuICAgICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgICBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSByZWYgb2YgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIGRpc3RhbmNlIGZyb20gdGhlIGJvZHkgdG8gdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBib2R5T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBkaXN0YW5jZSBmcm9tIHRoZSB0YXJnZXQgdG8gdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICB0YXJnZXRPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgc2hvdWxkIHJldHVybiBhIG5vZGUgZm9yIHRoZSB0YXJnZXQuXG4gICAgICogKHsgZ2V0UmVmOiAoKSAtPiBSZWYsIGlzU2hvd246IEJvb2wgfSkgLT4gUmVhY3QgTm9kZVxuICAgICAqL1xuICAgIHRhcmdldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgc2NhbGUgb2YgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBpbml0aWFsU2NhbGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIER1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24uXG4gICAgICovXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uQk9UVE9NLFxuICAgIGJvZHlPZmZzZXQ6IDYsXG4gICAgdGFyZ2V0T2Zmc2V0OiA2LFxuICAgIGluaXRpYWxTY2FsZTogMC45LFxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgaW5uZXJSZWY6ICgpID0+IHt9LFxuICAgIG9uT3BlbkNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBvbkNsb3NlQ29tcGxldGU6ICgpID0+IHt9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGUoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMubGF0ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF0ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgfVxuICB9XG5cbiAgZ2V0VGFyZ2V0UmVmID0gcmVmID0+IHtcbiAgICB0aGlzLnRhcmdldFJlZiA9IHJlZlxuICB9XG5cbiAgZ2V0UmVmID0gcmVmID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uZXJSZWYgPSByZWZcbiAgICB0aGlzLnByb3BzLmlubmVyUmVmKHJlZilcbiAgfVxuXG4gIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZSA9IChwcmV2SGVpZ2h0ID0gMCwgcHJldldpZHRoID0gMCkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc1Nob3duIHx8ICF0aGlzLnRhcmdldFJlZiB8fCAhdGhpcy5wb3NpdGlvbmVyUmVmKSByZXR1cm5cblxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLnRhcmdldFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGhhc0VudGVyZWQgPVxuICAgICAgdGhpcy5wb3NpdGlvbmVyUmVmLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScpID09PSAnZW50ZXJlZCdcblxuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcblxuICAgIGxldCBoZWlnaHRcbiAgICBsZXQgd2lkdGhcbiAgICBpZiAoaGFzRW50ZXJlZCkge1xuICAgICAgLy8gT25seSB3aGVuIHRoZSBhbmltYXRpb24gaXMgZG9uZSBzaG91bGQgd2Ugb3B0LWluIHRvIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgXG4gICAgICBjb25zdCBwb3NpdGlvbmVyUmVjdCA9IHRoaXMucG9zaXRpb25lclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2VnbWVudGlvL2V2ZXJncmVlbi9pc3N1ZXMvMjU1XG4gICAgICAvLyBXZSBuZWVkIHRvIGNlaWwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgdG8gcHJldmVudCBqaXR0ZXIgd2hlblxuICAgICAgLy8gdGhlIHdpbmRvdyBpcyB6b29tZWQgKHdoZW4gYHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvYCBpcyBub3QgYW4gaW50ZWdlcilcbiAgICAgIGhlaWdodCA9IE1hdGgucm91bmQocG9zaXRpb25lclJlY3QuaGVpZ2h0KVxuICAgICAgd2lkdGggPSBNYXRoLnJvdW5kKHBvc2l0aW9uZXJSZWN0LndpZHRoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXaGVuIHRoZSBhbmltYXRpb24gaXMgaW4gZmxpZ2h0IHVzZSBgb2Zmc2V0V2lkdGgvSGVpZ2h0YCB3aGljaFxuICAgICAgLy8gZG9lcyBub3QgY2FsY3VsYXRlIHRoZSBgdHJhbnNmb3JtYCBwcm9wZXJ0eSBhcyBwYXJ0IG9mIGl0cyByZXN1bHQuXG4gICAgICAvLyBUaGVyZSBpcyBzdGlsbCBjaGFuZ2Ugb24gaml0dGVyIGR1cmluZyB0aGUgYW5pbWF0aW9uIChhbHRob3VnaCB1bm90aWNhYmxlKVxuICAgICAgLy8gV2hlbiB0aGUgYnJvd3NlciBpcyB6b29tZWQgaW4g4oCUIHdlIGZpeCB0aGlzIHdpdGggYE1hdGgubWF4YC5cbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb25lclJlZi5vZmZzZXRIZWlnaHQsIHByZXZIZWlnaHQpXG4gICAgICB3aWR0aCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb25lclJlZi5vZmZzZXRXaWR0aCwgcHJldldpZHRoKVxuICAgIH1cblxuICAgIGNvbnN0IHsgcmVjdCwgdHJhbnNmb3JtT3JpZ2luIH0gPSBnZXRQb3NpdGlvbih7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5wb3NpdGlvbixcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICB0YXJnZXRPZmZzZXQ6IHRoaXMucHJvcHMudGFyZ2V0T2Zmc2V0LFxuICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9LFxuICAgICAgdmlld3BvcnQ6IHtcbiAgICAgICAgd2lkdGg6IHZpZXdwb3J0V2lkdGgsXG4gICAgICAgIGhlaWdodDogdmlld3BvcnRIZWlnaHRcbiAgICAgIH0sXG4gICAgICB2aWV3cG9ydE9mZnNldDogdGhpcy5wcm9wcy5ib2R5T2Zmc2V0XG4gICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmxhdGVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZShoZWlnaHQsIHdpZHRoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGhhbmRsZUV4aXRlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmluaXRpYWxTdGF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZUNvbXBsZXRlKClcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0LFxuICAgICAgaXNTaG93bixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaW5pdGlhbFNjYWxlLFxuICAgICAgdGFyZ2V0T2Zmc2V0LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb25cbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBsZWZ0LCB0b3AsIHRyYW5zZm9ybU9yaWdpbiB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGFjayB2YWx1ZT17U3RhY2tpbmdPcmRlci5QT1NJVElPTkVSfT5cbiAgICAgICAge3pJbmRleCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge3RhcmdldCh7IGdldFJlZjogdGhpcy5nZXRUYXJnZXRSZWYsIGlzU2hvd24gfSl9XG5cbiAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICAgICAgICBpbj17aXNTaG93bn1cbiAgICAgICAgICAgICAgICB0aW1lb3V0PXthbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICBvbkVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgICAgIG9uRW50ZXJlZD17dGhpcy5wcm9wcy5vbk9wZW5Db21wbGV0ZX1cbiAgICAgICAgICAgICAgICBvbkV4aXRlZD17dGhpcy5oYW5kbGVFeGl0ZWR9XG4gICAgICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICAgICAgICAgIDxQb3J0YWw+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgekluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGNzczogZ2V0Q1NTKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGdldFJlZjogdGhpcy5nZXRSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKVxuICB9XG59XG4iXX0=
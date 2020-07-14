import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _paneProps, _subpaneProps, _animationStylesClass;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { css } from 'glamor';
import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Overlay } from '../../overlay';
import { Position } from '../../constants';
import SheetClose from './SheetClose';
var paneProps = (_paneProps = {}, _defineProperty(_paneProps, Position.LEFT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  left: 0,
  right: 'auto'
}), _defineProperty(_paneProps, Position.RIGHT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  right: 0,
  left: 'auto'
}), _defineProperty(_paneProps, Position.TOP, {
  width: '100vw',
  position: 'absolute',
  maxHeight: '100vh',
  top: 0,
  bottom: 'auto'
}), _defineProperty(_paneProps, Position.BOTTOM, {
  width: '100vw',
  maxHeight: '100vh',
  position: 'absolute',
  bottom: 0,
  top: 'auto'
}), _paneProps);
var subpaneProps = (_subpaneProps = {}, _defineProperty(_subpaneProps, Position.LEFT, {
  height: '100vh'
}), _defineProperty(_subpaneProps, Position.RIGHT, {
  height: '100vh'
}), _defineProperty(_subpaneProps, Position.TOP, {
  width: '100vw'
}), _defineProperty(_subpaneProps, Position.BOTTOM, {
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

var animationStylesClass = (_animationStylesClass = {}, _defineProperty(_animationStylesClass, Position.LEFT, _objectSpread({
  transform: "translateX(-100%)"
}, withAnimations(css.keyframes('anchoredLeftSlideInAnimation', {
  from: {
    transform: "translateX(-100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), css.keyframes('anchoredLeftSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(-100%)"
  }
})))), _defineProperty(_animationStylesClass, Position.RIGHT, _objectSpread({
  transform: "translateX(100%)"
}, withAnimations(css.keyframes('anchoredRightSlideInAnimation', {
  from: {
    transform: "translateX(100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), css.keyframes('anchoredRightSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(100%)"
  }
})))), _defineProperty(_animationStylesClass, Position.TOP, _objectSpread({
  transform: "translateY(-100%)"
}, withAnimations(css.keyframes('anchoredTopSlideInAnimation', {
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), css.keyframes('anchoredTopSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
})))), _defineProperty(_animationStylesClass, Position.BOTTOM, _objectSpread({
  transform: "translateY(100%)"
}, withAnimations(css.keyframes('anchoredBottomSlideInAnimation', {
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), css.keyframes('anchoredBottomSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(100%)"
  }
})))), _animationStylesClass);

var SideSheet = /*#__PURE__*/function (_React$Component) {
  _inherits(SideSheet, _React$Component);

  var _super = _createSuper(SideSheet);

  function SideSheet() {
    _classCallCheck(this, SideSheet);

    return _super.apply(this, arguments);
  }

  _createClass(SideSheet, [{
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
      return React.createElement(Overlay, {
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
        return React.createElement(Pane, _extends({
          width: width
        }, paneProps[position], {
          css: animationStylesClass[position],
          "data-state": state
        }), React.createElement(SheetClose, {
          position: position,
          "data-state": state,
          isClosing: false,
          onClick: close
        }), React.createElement(Pane, _extends({
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
}(React.Component);

SideSheet.displayName = "SideSheet";

_defineProperty(SideSheet, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * When true, the Side Sheet is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the SideSheet.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * Properties to pass through the SideSheet container Pane.
   */
  containerProps: PropTypes.object,

  /**
   * Positions the sheet to the top, left, right, or bottom of the screen.
   */
  position: PropTypes.oneOf([Position.TOP, Position.BOTTOM, Position.LEFT, Position.RIGHT]).isRequired,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: PropTypes.bool
});

_defineProperty(SideSheet, "defaultProps", {
  width: 620,
  onCloseComplete: function onCloseComplete() {},
  onOpenComplete: function onOpenComplete() {},
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  position: Position.RIGHT
});

export default SideSheet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaWRlU2hlZXQuanMiXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJQYW5lIiwiT3ZlcmxheSIsIlBvc2l0aW9uIiwiU2hlZXRDbG9zZSIsInBhbmVQcm9wcyIsIkxFRlQiLCJoZWlnaHQiLCJtYXhXaWR0aCIsInBvc2l0aW9uIiwibGVmdCIsInJpZ2h0IiwiUklHSFQiLCJUT1AiLCJ3aWR0aCIsIm1heEhlaWdodCIsInRvcCIsImJvdHRvbSIsIkJPVFRPTSIsInN1YnBhbmVQcm9wcyIsImFuaW1hdGlvbkVhc2luZyIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsIkFOSU1BVElPTl9EVVJBVElPTiIsIndpdGhBbmltYXRpb25zIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsImFuaW1hdGlvbiIsImFuaW1hdGlvblN0eWxlc0NsYXNzIiwidHJhbnNmb3JtIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRvIiwiU2lkZVNoZWV0IiwicHJvcHMiLCJpc1Nob3duIiwiY2hpbGRyZW4iLCJjb250YWluZXJQcm9wcyIsIm9uT3BlbkNvbXBsZXRlIiwib25DbG9zZUNvbXBsZXRlIiwib25CZWZvcmVDbG9zZSIsInNob3VsZENsb3NlT25PdmVybGF5Q2xpY2siLCJzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MiLCJwcmV2ZW50Qm9keVNjcm9sbGluZyIsInN0YXRlIiwiY2xvc2UiLCJDb21wb25lbnQiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0Iiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FB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J3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi8uLi9vdmVybGF5J1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgU2hlZXRDbG9zZSBmcm9tICcuL1NoZWV0Q2xvc2UnXG5cbmNvbnN0IHBhbmVQcm9wcyA9IHtcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1heEhlaWdodDogJzEwMHZoJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAnYXV0bydcbiAgfSxcbiAgW1Bvc2l0aW9uLkJPVFRPTV06IHtcbiAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogJ2F1dG8nXG4gIH1cbn1cblxuY29uc3Qgc3VicGFuZVByb3BzID0ge1xuICBbUG9zaXRpb24uTEVGVF06IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCdcbiAgfSxcbiAgW1Bvc2l0aW9uLlJJR0hUXToge1xuICAgIGhlaWdodDogJzEwMHZoJ1xuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHdpZHRoOiAnMTAwdncnXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgd2lkdGg6ICcxMDB2dydcbiAgfVxufVxuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCB3aXRoQW5pbWF0aW9ucyA9IChhbmltYXRlSW4sIGFuaW1hdGVPdXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVJbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgICAgYW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvblxuICAgICAgfSBib3RoYFxuICAgIH0sXG4gICAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVPdXR9ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICAgIGFuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb25cbiAgICAgIH0gYm90aGBcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzQ2xhc3MgPSB7XG4gIFtQb3NpdGlvbi5MRUZUXToge1xuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkTGVmdFNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRMZWZ0U2xpZGVPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgwKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFJpZ2h0U2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkUmlnaHRTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLlRPUF06IHtcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFRvcFNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRUb3BTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZEJvdHRvbVNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZEJvdHRvbVNsaWRlT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNpZGVTaGVldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gY2FuIGJlIGEgc3RyaW5nLCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBTaWRlIFNoZWV0IGlzIHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBleGl0IHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvdmVybGF5IGlzIGFib3V0IHRvIGNsb3NlLlxuICAgICAqIFJldHVybiBgZmFsc2VgIHRvIHByZXZlbnQgdGhlIHNoZWV0IGZyb20gY2xvc2luZy5cbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24gLT4gQm9vbGVhbmBcbiAgICAgKi9cbiAgICBvbkJlZm9yZUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyB0aGUgb3ZlcmxheSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgU2lkZVNoZWV0LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgdG8gcGFzcyB0aHJvdWdoIHRoZSBTaWRlU2hlZXQgY29udGFpbmVyIFBhbmUuXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgdGhlIHNoZWV0IHRvIHRoZSB0b3AsIGxlZnQsIHJpZ2h0LCBvciBib3R0b20gb2YgdGhlIHNjcmVlbi5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHNjcm9sbGluZyBpbiB0aGUgb3V0ZXIgYm9keVxuICAgICAqL1xuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogNjIwLFxuICAgIG9uQ2xvc2VDb21wbGV0ZTogKCkgPT4ge30sXG4gICAgb25PcGVuQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiB0cnVlLFxuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5SSUdIVFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoLFxuICAgICAgaXNTaG93bixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29udGFpbmVyUHJvcHMsXG4gICAgICBvbk9wZW5Db21wbGV0ZSxcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZSxcbiAgICAgIG9uQmVmb3JlQ2xvc2UsXG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxuICAgICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZ1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE92ZXJsYXlcbiAgICAgICAgaXNTaG93bj17aXNTaG93bn1cbiAgICAgICAgc2hvdWxkQ2xvc2VPbkNsaWNrPXtzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrfVxuICAgICAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M9e3Nob3VsZENsb3NlT25Fc2NhcGVQcmVzc31cbiAgICAgICAgb25CZWZvcmVDbG9zZT17b25CZWZvcmVDbG9zZX1cbiAgICAgICAgb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgICAgb25FbnRlcmVkPXtvbk9wZW5Db21wbGV0ZX1cbiAgICAgICAgcHJldmVudEJvZHlTY3JvbGxpbmc9e3ByZXZlbnRCb2R5U2Nyb2xsaW5nfVxuICAgICAgPlxuICAgICAgICB7KHsgc3RhdGUsIGNsb3NlIH0pID0+IChcbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgey4uLnBhbmVQcm9wc1twb3NpdGlvbl19XG4gICAgICAgICAgICBjc3M9e2FuaW1hdGlvblN0eWxlc0NsYXNzW3Bvc2l0aW9uXX1cbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTaGVldENsb3NlXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICAgIGlzQ2xvc2luZz17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBvdmVyZmxvd1k9XCJhdXRvXCJcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICB7Li4uc3VicGFuZVByb3BzW3Bvc2l0aW9uXX1cbiAgICAgICAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oeyBjbG9zZSB9KSA6IGNoaWxkcmVufVxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgIDwvT3ZlcmxheT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZVNoZWV0XG4iXX0=
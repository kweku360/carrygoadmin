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

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _portal = require("../../portal");

var _stack = require("../../stack");

var _constants = require("../../constants");

var _getPosition2 = _interopRequireDefault(require("./getPosition"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
  (0, _inherits2["default"])(Positioner, _PureComponent);

  var _super = _createSuper(Positioner);

  function Positioner(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Positioner);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTargetRef", function (ref) {
      _this.targetRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getRef", function (ref) {
      _this.positionerRef = ref;

      _this.props.innerRef(ref);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEnter", function () {
      _this.update();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "update", function () {
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

      var _getPosition = (0, _getPosition2["default"])({
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExited", function () {
      _this.setState(function () {
        return _objectSpread({}, initialState());
      }, function () {
        _this.props.onCloseComplete();
      });
    });
    _this.state = initialState();
    return _this;
  }

  (0, _createClass2["default"])(Positioner, [{
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
      return _react["default"].createElement(_stack.Stack, {
        value: _constants.StackingOrder.POSITIONER
      }, function (zIndex) {
        return _react["default"].createElement(_react["default"].Fragment, null, target({
          getRef: _this2.getTargetRef,
          isShown: isShown
        }), _react["default"].createElement(_Transition["default"], {
          appear: true,
          "in": isShown,
          timeout: animationDuration,
          onEnter: _this2.handleEnter,
          onEntered: _this2.props.onOpenComplete,
          onExited: _this2.handleExited,
          unmountOnExit: true
        }, function (state) {
          return _react["default"].createElement(_portal.Portal, null, children({
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
}(_react.PureComponent);

exports["default"] = Positioner;
Positioner.displayName = "Positioner";
(0, _defineProperty2["default"])(Positioner, "propTypes", {
  /**
   * The position the element that is being positioned is on.
   * Smart positioning might override this.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]).isRequired,

  /**
   * When true, show the element being positioned.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Function that returns the element being positioned.
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * Function that returns the ref of the element being positioned.
   */
  innerRef: _propTypes["default"].func.isRequired,

  /**
   * The minimum distance from the body to the element being positioned.
   */
  bodyOffset: _propTypes["default"].number.isRequired,

  /**
   * The minimum distance from the target to the element being positioned.
   */
  targetOffset: _propTypes["default"].number.isRequired,

  /**
   * Function that should return a node for the target.
   * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
   */
  target: _propTypes["default"].func.isRequired,

  /**
   * Initial scale of the element being positioned.
   */
  initialScale: _propTypes["default"].number.isRequired,

  /**
   * Duration of the animation.
   */
  animationDuration: _propTypes["default"].number.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func.isRequired
});
(0, _defineProperty2["default"])(Positioner, "defaultProps", {
  position: _constants.Position.BOTTOM,
  bodyOffset: 6,
  targetOffset: 6,
  initialScale: 0.9,
  animationDuration: 300,
  innerRef: function innerRef() {},
  onOpenComplete: function onOpenComplete() {},
  onCloseComplete: function onCloseComplete() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3NpdGlvbmVyL3NyYy9Qb3NpdGlvbmVyLmpzIl0sIm5hbWVzIjpbImFuaW1hdGlvbkVhc2luZyIsInNwcmluZyIsImluaXRpYWxTdGF0ZSIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJnZXRDU1MiLCJpbml0aWFsU2NhbGUiLCJhbmltYXRpb25EdXJhdGlvbiIsInBvc2l0aW9uIiwib3BhY2l0eSIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zZm9ybSIsInZpc2liaWxpdHkiLCJQb3NpdGlvbmVyIiwicHJvcHMiLCJjb250ZXh0IiwicmVmIiwidGFyZ2V0UmVmIiwicG9zaXRpb25lclJlZiIsImlubmVyUmVmIiwidXBkYXRlIiwicHJldkhlaWdodCIsInByZXZXaWR0aCIsImlzU2hvd24iLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFzRW50ZXJlZCIsImdldEF0dHJpYnV0ZSIsInZpZXdwb3J0SGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJ2aWV3cG9ydFdpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uZXJSZWN0IiwiTWF0aCIsInJvdW5kIiwibWF4Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJ0YXJnZXRPZmZzZXQiLCJkaW1lbnNpb25zIiwidmlld3BvcnQiLCJ2aWV3cG9ydE9mZnNldCIsImJvZHlPZmZzZXQiLCJyZWN0Iiwic2V0U3RhdGUiLCJsYXRlc3RBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uQ2xvc2VDb21wbGV0ZSIsInN0YXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsIlN0YWNraW5nT3JkZXIiLCJQT1NJVElPTkVSIiwiekluZGV4IiwiZ2V0UmVmIiwiZ2V0VGFyZ2V0UmVmIiwiaGFuZGxlRW50ZXIiLCJvbk9wZW5Db21wbGV0ZSIsImhhbmRsZUV4aXRlZCIsImNzcyIsInN0eWxlIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mIiwiUG9zaXRpb24iLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiTEVGVCIsIlJJR0hUIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE1BQU07QUFEZ0IsQ0FBeEI7O0FBSUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxJQUFBQSxHQUFHLEVBQUUsSUFEcUI7QUFFMUJDLElBQUFBLElBQUksRUFBRSxJQUZvQjtBQUcxQkMsSUFBQUEsZUFBZSxFQUFFO0FBSFMsR0FBUDtBQUFBLENBQXJCOztBQU1BLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsWUFBSCxRQUFHQSxZQUFIO0FBQUEsTUFBaUJDLGlCQUFqQixRQUFpQkEsaUJBQWpCO0FBQUEsU0FBMEM7QUFDdkRDLElBQUFBLFFBQVEsRUFBRSxPQUQ2QztBQUV2REMsSUFBQUEsT0FBTyxFQUFFLENBRjhDO0FBR3ZEQyxJQUFBQSx3QkFBd0IsRUFBRVgsZUFBZSxDQUFDQyxNQUhhO0FBSXZEVyxJQUFBQSxrQkFBa0IsWUFBS0osaUJBQUwsT0FKcUM7QUFLdkRLLElBQUFBLGtCQUFrQixFQUFFLG9CQUxtQztBQU12REMsSUFBQUEsU0FBUyxrQkFBV1AsWUFBWCx1QkFOOEM7QUFPdkQseURBQXFEO0FBQ25ERyxNQUFBQSxPQUFPLEVBQUUsQ0FEMEM7QUFF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VixDQUFlRjtBQWpFZCxDO2lDQURBakUsVSxrQkFxRUc7QUFDcEJQLEVBQUFBLFFBQVEsRUFBRStELG9CQUFTSSxNQURDO0FBRXBCM0IsRUFBQUEsVUFBVSxFQUFFLENBRlE7QUFHcEJKLEVBQUFBLFlBQVksRUFBRSxDQUhNO0FBSXBCdEMsRUFBQUEsWUFBWSxFQUFFLEdBSk07QUFLcEJDLEVBQUFBLGlCQUFpQixFQUFFLEdBTEM7QUFNcEJjLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBTkU7QUFPcEIyQyxFQUFBQSxjQUFjLEVBQUUsMEJBQU0sQ0FBRSxDQVBKO0FBUXBCWCxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRTtBQVJMLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vLi4vcG9ydGFsJ1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICcuLi8uLi9zdGFjaydcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIsIFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IGdldFBvc2l0aW9uIGZyb20gJy4vZ2V0UG9zaXRpb24nXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0gKCkgPT4gKHtcbiAgdG9wOiBudWxsLFxuICBsZWZ0OiBudWxsLFxuICB0cmFuc2Zvcm1PcmlnaW46IG51bGxcbn0pXG5cbmNvbnN0IGdldENTUyA9ICh7IGluaXRpYWxTY2FsZSwgYW5pbWF0aW9uRHVyYXRpb24gfSkgPT4gKHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIG9wYWNpdHk6IDAsXG4gIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogYW5pbWF0aW9uRWFzaW5nLnNwcmluZyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHthbmltYXRpb25EdXJhdGlvbn1tc2AsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ29wYWNpdHksIHRyYW5zZm9ybScsXG4gIHRyYW5zZm9ybTogYHNjYWxlKCR7aW5pdGlhbFNjYWxlfSkgdHJhbnNsYXRlWSgtMXB4KWAsXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICB0cmFuc2Zvcm06IGBzY2FsZSgxKWBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb25lciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiB0aGUgZWxlbWVudCB0aGF0IGlzIGJlaW5nIHBvc2l0aW9uZWQgaXMgb24uXG4gICAgICogU21hcnQgcG9zaXRpb25pbmcgbWlnaHQgb3ZlcnJpZGUgdGhpcy5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgICAgUG9zaXRpb24uQk9UVE9NLFxuICAgICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgICBQb3NpdGlvbi5MRUZULFxuICAgICAgUG9zaXRpb24uUklHSFRcbiAgICBdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcmVmIG9mIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBkaXN0YW5jZSBmcm9tIHRoZSBib2R5IHRvIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgYm9keU9mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gZGlzdGFuY2UgZnJvbSB0aGUgdGFyZ2V0IHRvIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgdGFyZ2V0T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHNob3VsZCByZXR1cm4gYSBub2RlIGZvciB0aGUgdGFyZ2V0LlxuICAgICAqICh7IGdldFJlZjogKCkgLT4gUmVmLCBpc1Nob3duOiBCb29sIH0pIC0+IFJlYWN0IE5vZGVcbiAgICAgKi9cbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIHNjYWxlIG9mIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgaW5pdGlhbFNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBEdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246IFBvc2l0aW9uLkJPVFRPTSxcbiAgICBib2R5T2Zmc2V0OiA2LFxuICAgIHRhcmdldE9mZnNldDogNixcbiAgICBpbml0aWFsU2NhbGU6IDAuOSxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgIGlubmVyUmVmOiAoKSA9PiB7fSxcbiAgICBvbk9wZW5Db21wbGV0ZTogKCkgPT4ge30sXG4gICAgb25DbG9zZUNvbXBsZXRlOiAoKSA9PiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmxhdGVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhdGVzdEFuaW1hdGlvbkZyYW1lKVxuICAgIH1cbiAgfVxuXG4gIGdldFRhcmdldFJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy50YXJnZXRSZWYgPSByZWZcbiAgfVxuXG4gIGdldFJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5wb3NpdGlvbmVyUmVmID0gcmVmXG4gICAgdGhpcy5wcm9wcy5pbm5lclJlZihyZWYpXG4gIH1cblxuICBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICB1cGRhdGUgPSAocHJldkhlaWdodCA9IDAsIHByZXZXaWR0aCA9IDApID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNTaG93biB8fCAhdGhpcy50YXJnZXRSZWYgfHwgIXRoaXMucG9zaXRpb25lclJlZikgcmV0dXJuXG5cbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy50YXJnZXRSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBoYXNFbnRlcmVkID1cbiAgICAgIHRoaXMucG9zaXRpb25lclJlZi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKSA9PT0gJ2VudGVyZWQnXG5cbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgICBsZXQgaGVpZ2h0XG4gICAgbGV0IHdpZHRoXG4gICAgaWYgKGhhc0VudGVyZWQpIHtcbiAgICAgIC8vIE9ubHkgd2hlbiB0aGUgYW5pbWF0aW9uIGlzIGRvbmUgc2hvdWxkIHdlIG9wdC1pbiB0byBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YFxuICAgICAgY29uc3QgcG9zaXRpb25lclJlY3QgPSB0aGlzLnBvc2l0aW9uZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlZ21lbnRpby9ldmVyZ3JlZW4vaXNzdWVzLzI1NVxuICAgICAgLy8gV2UgbmVlZCB0byBjZWlsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IHRvIHByZXZlbnQgaml0dGVyIHdoZW5cbiAgICAgIC8vIHRoZSB3aW5kb3cgaXMgem9vbWVkICh3aGVuIGB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb2AgaXMgbm90IGFuIGludGVnZXIpXG4gICAgICBoZWlnaHQgPSBNYXRoLnJvdW5kKHBvc2l0aW9uZXJSZWN0LmhlaWdodClcbiAgICAgIHdpZHRoID0gTWF0aC5yb3VuZChwb3NpdGlvbmVyUmVjdC53aWR0aClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2hlbiB0aGUgYW5pbWF0aW9uIGlzIGluIGZsaWdodCB1c2UgYG9mZnNldFdpZHRoL0hlaWdodGAgd2hpY2hcbiAgICAgIC8vIGRvZXMgbm90IGNhbGN1bGF0ZSB0aGUgYHRyYW5zZm9ybWAgcHJvcGVydHkgYXMgcGFydCBvZiBpdHMgcmVzdWx0LlxuICAgICAgLy8gVGhlcmUgaXMgc3RpbGwgY2hhbmdlIG9uIGppdHRlciBkdXJpbmcgdGhlIGFuaW1hdGlvbiAoYWx0aG91Z2ggdW5vdGljYWJsZSlcbiAgICAgIC8vIFdoZW4gdGhlIGJyb3dzZXIgaXMgem9vbWVkIGluIOKAlCB3ZSBmaXggdGhpcyB3aXRoIGBNYXRoLm1heGAuXG4gICAgICBoZWlnaHQgPSBNYXRoLm1heCh0aGlzLnBvc2l0aW9uZXJSZWYub2Zmc2V0SGVpZ2h0LCBwcmV2SGVpZ2h0KVxuICAgICAgd2lkdGggPSBNYXRoLm1heCh0aGlzLnBvc2l0aW9uZXJSZWYub2Zmc2V0V2lkdGgsIHByZXZXaWR0aClcbiAgICB9XG5cbiAgICBjb25zdCB7IHJlY3QsIHRyYW5zZm9ybU9yaWdpbiB9ID0gZ2V0UG9zaXRpb24oe1xuICAgICAgcG9zaXRpb246IHRoaXMucHJvcHMucG9zaXRpb24sXG4gICAgICB0YXJnZXRSZWN0LFxuICAgICAgdGFyZ2V0T2Zmc2V0OiB0aGlzLnByb3BzLnRhcmdldE9mZnNldCxcbiAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aFxuICAgICAgfSxcbiAgICAgIHZpZXdwb3J0OiB7XG4gICAgICAgIHdpZHRoOiB2aWV3cG9ydFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHZpZXdwb3J0SGVpZ2h0XG4gICAgICB9LFxuICAgICAgdmlld3BvcnRPZmZzZXQ6IHRoaXMucHJvcHMuYm9keU9mZnNldFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5sYXRlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGUoaGVpZ2h0LCB3aWR0aClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBoYW5kbGVFeGl0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pbml0aWFsU3RhdGUoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2VDb21wbGV0ZSgpXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldCxcbiAgICAgIGlzU2hvd24sXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGluaXRpYWxTY2FsZSxcbiAgICAgIHRhcmdldE9mZnNldCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgbGVmdCwgdG9wLCB0cmFuc2Zvcm1PcmlnaW4gfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2sgdmFsdWU9e1N0YWNraW5nT3JkZXIuUE9TSVRJT05FUn0+XG4gICAgICAgIHt6SW5kZXggPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHt0YXJnZXQoeyBnZXRSZWY6IHRoaXMuZ2V0VGFyZ2V0UmVmLCBpc1Nob3duIH0pfVxuXG4gICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICAgICAgaW49e2lzU2hvd259XG4gICAgICAgICAgICAgICAgdGltZW91dD17YW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICAgICAgb25FbnRlcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgICAgICAgICBvbkVudGVyZWQ9e3RoaXMucHJvcHMub25PcGVuQ29tcGxldGV9XG4gICAgICAgICAgICAgICAgb25FeGl0ZWQ9e3RoaXMuaGFuZGxlRXhpdGVkfVxuICAgICAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzdGF0ZSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgIHpJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBjc3M6IGdldENTUyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRSZWY6IHRoaXMuZ2V0UmVmLFxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1N0YWNrPlxuICAgIClcbiAgfVxufVxuIl19
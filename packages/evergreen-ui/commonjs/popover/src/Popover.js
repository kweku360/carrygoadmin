"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _positioner = require("../../positioner");

var _tooltip = require("../../tooltip");

var _constants = require("../../constants");

var _PopoverStateless = _interopRequireDefault(require("./PopoverStateless"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Popover = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Popover, _Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Popover);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bringFocusInside", function () {
      // Always delay focus manipulation to just before repaint to prevent scroll jumping
      return requestAnimationFrame(function () {
        // Container ref may be undefined between component mounting and Portal rendering
        // activeElement may be undefined in some rare cases in IE
        if (_this.popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !_this.state.isShown) {
          return;
        }

        var isFocusOutsideModal = !_this.popoverNode.contains(document.activeElement);

        if (isFocusOutsideModal) {
          // Element marked autofocus has higher priority than the other clowns
          var autofocusElement = _this.popoverNode.querySelector('[autofocus]');

          var wrapperElement = _this.popoverNode.querySelector('[tabindex]');

          var buttonElements = _this.popoverNode.querySelectorAll('button, a, [role="menuitem"], [role="menuitemradio"]');

          if (autofocusElement) {
            autofocusElement.focus();
          } else if (wrapperElement) {
            wrapperElement.focus();
          } else if (buttonElements.length > 0) {
            buttonElements[0].focus();
          }
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bringFocusBackToTarget", function () {
      return requestAnimationFrame(function () {
        if (_this.popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
        ) {
            return;
          }

        var isFocusInsideModal = _this.popoverNode.contains(document.activeElement); // Bring back focus on the target.


        if (_this.targetRef && (document.activeElement === document.body || isFocusInsideModal)) {
          _this.targetRef.focus();
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBodyClick", function (e) {
      // Ignore clicks on the popover or button
      if (_this.targetRef && _this.targetRef.contains(e.target)) {
        return;
      }

      if (_this.popoverNode && _this.popoverNode.contains(e.target)) {
        return;
      } // Notify body click


      _this.props.onBodyClick(e);

      if (_this.props.shouldCloseOnExternalClick === false) {
        return;
      }

      _this.close();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27) {
        _this.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggle", function () {
      if (_this.state.isShown) {
        _this.close();
      } else {
        _this.open();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "open", function () {
      if (_this.state.isShown) {
        return;
      }

      _this.setState({
        isShown: true
      });

      document.body.addEventListener('click', _this.onBodyClick, false);
      document.body.addEventListener('keydown', _this.onEsc, false);

      _this.props.onOpen();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      if (!_this.state.isShown) {
        return;
      }

      _this.setState({
        isShown: false
      });

      document.body.removeEventListener('click', _this.onBodyClick, false);
      document.body.removeEventListener('keydown', _this.onEsc, false);

      _this.bringFocusBackToTarget();

      _this.props.onClose();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpenComplete", function () {
      if (_this.props.bringFocusInside) _this.bringFocusInside();

      _this.props.onOpenComplete();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCloseComplete", function () {
      _this.props.onCloseComplete();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowDown') {
        _this.bringFocusInside();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpenHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.open();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCloseHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTarget", function (_ref) {
      var getRef = _ref.getRef,
          isShown = _ref.isShown;
      var children = _this.props.children;
      var isTooltipInside = children && children.type === _tooltip.Tooltip;

      var getTargetRef = function getTargetRef(ref) {
        _this.targetRef = ref;
        getRef(ref);
      };
      /**
       * When a function is passed, you can control the Popover manually.
       */


      if (typeof children === 'function') {
        return children({
          toggle: _this.toggle,
          getRef: getTargetRef,
          isShown: isShown
        });
      }

      var popoverTargetProps = {
        onClick: _this.toggle,
        onMouseEnter: _this.handleOpenHover,
        onKeyDown: _this.handleKeyDown,
        role: 'button',
        'aria-expanded': isShown,
        'aria-haspopup': true
      };
      /**
       * Tooltips can be used within a Popover (not the other way around)
       * In this case the children is the Tooltip instead of a button.
       * Pass the properties to the Tooltip and let the Tooltip
       * add the properties to the target.
       */

      if (isTooltipInside) {
        return _react["default"].cloneElement(children, {
          popoverProps: _objectSpread({
            getTargetRef: getTargetRef,
            isShown: isShown
          }, popoverTargetProps)
        });
      }
      /**
       * With normal usage only popover props end up on the target.
       */


      return _react["default"].cloneElement(children, _objectSpread({
        innerRef: getTargetRef
      }, popoverTargetProps));
    });
    _this.state = {
      isShown: props.isShown
    };
    return _this;
  }

  (0, _createClass2["default"])(Popover, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.onBodyClick, false);
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
          isShown = _this$props.isShown,
          content = _this$props.content,
          display = _this$props.display,
          minWidth = _this$props.minWidth,
          position = _this$props.position,
          minHeight = _this$props.minHeight,
          _this$props$stateless = _this$props.statelessProps,
          statelessProps = _this$props$stateless === void 0 ? {} : _this$props$stateless,
          animationDuration = _this$props.animationDuration,
          onCloseComplete = _this$props.onCloseComplete;
      var stateIsShown = this.state.isShown; // If `isShown` is a boolean, popover is controlled manually, not via mouse events

      var shown = typeof isShown === 'boolean' ? isShown : stateIsShown;
      return _react["default"].createElement(_positioner.Positioner, {
        target: function target(_ref2) {
          var getRef = _ref2.getRef,
              isShown = _ref2.isShown,
              targetWidth = _ref2.targetWidth;
          return _this2.renderTarget({
            getRef: getRef,
            isShown: isShown,
            targetWidth: targetWidth
          });
        },
        isShown: shown,
        position: position,
        animationDuration: animationDuration,
        onOpenComplete: this.handleOpenComplete,
        onCloseComplete: onCloseComplete
      }, function (_ref3) {
        var css = _ref3.css,
            style = _ref3.style,
            state = _ref3.state,
            getRef = _ref3.getRef;
        return _react["default"].createElement(_PopoverStateless["default"], (0, _extends2["default"])({
          innerRef: function innerRef(ref) {
            _this2.popoverNode = ref;
            getRef(ref);
          },
          "data-state": state,
          display: display,
          minWidth: minWidth,
          minHeight: minHeight
        }, statelessProps, {
          className: (0, _classnames["default"])(statelessProps.className, css ? (0, _glamor.css)(css).toString() : undefined),
          style: statelessProps && statelessProps.style ? _objectSpread({}, style, {}, statelessProps.style) : style,
          onMouseLeave: _this2.handleCloseHover
        }), typeof content === 'function' ? content({
          close: _this2.close
        }) : content);
      });
    }
  }]);
  return Popover;
}(_react.Component);

exports["default"] = Popover;
Popover.displayName = "Popover";
(0, _defineProperty2["default"])(Popover, "propTypes", {
  /**
   * The position the Popover is on. Smart positioning might override this.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * When true, the Popover is manually shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Open the Popover based on click or hover. Default is click.
   */
  trigger: _propTypes["default"].oneOf(['click', 'hover']),

  /**
   * The content of the Popover.
   */
  content: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * The target button of the Popover.
   * When a function the following arguments are passed:
   * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]).isRequired,

  /**
   * The display property passed to the Popover card.
   */
  display: _propTypes["default"].string,

  /**
   * The min width of the Popover card.
   */
  minWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /**
   * The min height of the Popover card.
   */
  minHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /**
   * Properties passed through to the Popover card.
   */
  statelessProps: _propTypes["default"].shape(_PopoverStateless["default"].propTypes),

  /**
   * Duration of the animation.
   */
  animationDuration: _propTypes["default"].number,

  /**
   * Function called when the Popover opens.
   */
  onOpen: _propTypes["default"].func.isRequired,

  /**
   * Function fired when Popover closes.
   */
  onClose: _propTypes["default"].func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func.isRequired,

  /**
   * Function that will be called when the body is clicked.
   */
  onBodyClick: _propTypes["default"].func.isRequired,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: _propTypes["default"].bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Popover, "defaultProps", {
  position: _constants.Position.BOTTOM,
  minWidth: 200,
  minHeight: 40,
  animationDuration: 300,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onOpenComplete: function onOpenComplete() {},
  onCloseComplete: function onCloseComplete() {},
  onBodyClick: function onBodyClick() {},
  bringFocusInside: false,
  shouldCloseOnExternalClick: true,
  trigger: 'click'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyLmpzIl0sIm5hbWVzIjpbIlBvcG92ZXIiLCJwcm9wcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBvcG92ZXJOb2RlIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3RhdGUiLCJpc1Nob3duIiwiaXNGb2N1c091dHNpZGVNb2RhbCIsImNvbnRhaW5zIiwiYXV0b2ZvY3VzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyRWxlbWVudCIsImJ1dHRvbkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvY3VzIiwibGVuZ3RoIiwiaXNGb2N1c0luc2lkZU1vZGFsIiwidGFyZ2V0UmVmIiwiYm9keSIsImUiLCJ0YXJnZXQiLCJvbkJvZHlDbGljayIsInNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrIiwiY2xvc2UiLCJrZXlDb2RlIiwib3BlbiIsInNldFN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRXNjIiwib25PcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJyaW5nRm9jdXNCYWNrVG9UYXJnZXQiLCJvbkNsb3NlIiwiYnJpbmdGb2N1c0luc2lkZSIsIm9uT3BlbkNvbXBsZXRlIiwib25DbG9zZUNvbXBsZXRlIiwia2V5IiwidHJpZ2dlciIsImdldFJlZiIsImNoaWxkcmVuIiwiaXNUb29sdGlwSW5zaWRlIiwidHlwZSIsIlRvb2x0aXAiLCJnZXRUYXJnZXRSZWYiLCJyZWYiLCJ0b2dnbGUiLCJwb3BvdmVyVGFyZ2V0UHJvcHMiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwiaGFuZGxlT3BlbkhvdmVyIiwib25LZXlEb3duIiwiaGFuZGxlS2V5RG93biIsInJvbGUiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsInBvcG92ZXJQcm9wcyIsImlubmVyUmVmIiwiY29udGVudCIsImRpc3BsYXkiLCJtaW5XaWR0aCIsInBvc2l0aW9uIiwibWluSGVpZ2h0Iiwic3RhdGVsZXNzUHJvcHMiLCJhbmltYXRpb25EdXJhdGlvbiIsInN0YXRlSXNTaG93biIsInNob3duIiwidGFyZ2V0V2lkdGgiLCJyZW5kZXJUYXJnZXQiLCJoYW5kbGVPcGVuQ29tcGxldGUiLCJjc3MiLCJzdHlsZSIsImNsYXNzTmFtZSIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2xvc2VIb3ZlciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mIiwiUG9zaXRpb24iLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiTEVGVCIsIlJJR0hUIiwiYm9vbCIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImVsZW1lbnQiLCJzdHJpbmciLCJudW1iZXIiLCJzaGFwZSIsIlBvcG92ZXJTdGF0ZWxlc3MiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxPOzs7OztBQWtIbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQURpQix5R0FnQkEsWUFBTTtBQUN2QjtBQUNBLGFBQU9DLHFCQUFxQixDQUFDLFlBQU07QUFDakM7QUFDQTtBQUNBLFlBQ0UsTUFBS0MsV0FBTCxJQUFvQixJQUFwQixJQUE0QjtBQUM1QkMsUUFBQUEsUUFBUSxDQUFDQyxhQUFULElBQTBCLElBRDFCLElBQ2tDO0FBQ2xDLFNBQUMsTUFBS0MsS0FBTCxDQUFXQyxPQUhkLEVBSUU7QUFDQTtBQUNEOztBQUVELFlBQU1DLG1CQUFtQixHQUFHLENBQUMsTUFBS0wsV0FBTCxDQUFpQk0sUUFBakIsQ0FDM0JMLFFBQVEsQ0FBQ0MsYUFEa0IsQ0FBN0I7O0FBR0EsWUFBSUcsbUJBQUosRUFBeUI7QUFDdkI7QUFDQSxjQUFNRSxnQkFBZ0Is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QU0sQ0FBRSxDQVREO0FBVXBCWSxFQUFBQSxnQkFBZ0IsRUFBRSxLQVZFO0FBV3BCWCxFQUFBQSwwQkFBMEIsRUFBRSxJQVhSO0FBWXBCZSxFQUFBQSxPQUFPLEVBQUU7QUFaVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUG9zaXRpb25lciB9IGZyb20gJy4uLy4uL3Bvc2l0aW9uZXInXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi4vLi4vdG9vbHRpcCdcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFBvcG92ZXJTdGF0ZWxlc3MgZnJvbSAnLi9Qb3BvdmVyU3RhdGVsZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gdGhlIFBvcG92ZXIgaXMgb24uIFNtYXJ0IHBvc2l0aW9uaW5nIG1pZ2h0IG92ZXJyaWRlIHRoaXMuXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQb3NpdGlvbi5UT1AsXG4gICAgICBQb3NpdGlvbi5UT1BfTEVGVCxcbiAgICAgIFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9MRUZULFxuICAgICAgUG9zaXRpb24uQk9UVE9NX1JJR0hULFxuICAgICAgUG9zaXRpb24uTEVGVCxcbiAgICAgIFBvc2l0aW9uLlJJR0hUXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBQb3BvdmVyIGlzIG1hbnVhbGx5IHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIFBvcG92ZXIgYmFzZWQgb24gY2xpY2sgb3IgaG92ZXIuIERlZmF1bHQgaXMgY2xpY2suXG4gICAgICovXG4gICAgdHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mKFsnY2xpY2snLCAnaG92ZXInXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBidXR0b24gb2YgdGhlIFBvcG92ZXIuXG4gICAgICogV2hlbiBhIGZ1bmN0aW9uIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzIGFyZSBwYXNzZWQ6XG4gICAgICogKHsgdG9nZ2xlOiBGdW5jdGlvbiAtPiBWb2lkLCBnZXRSZWY6IEZ1bmN0aW9uIC0+IFJlZiwgaXNTaG93bjogQm9vbCB9KVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSBwcm9wZXJ0eSBwYXNzZWQgdG8gdGhlIFBvcG92ZXIgY2FyZC5cbiAgICAgKi9cbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiB3aWR0aCBvZiB0aGUgUG9wb3ZlciBjYXJkLlxuICAgICAqL1xuICAgIG1pbldpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgUG9wb3ZlciBjYXJkLlxuICAgICAqL1xuICAgIG1pbkhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBwYXNzZWQgdGhyb3VnaCB0byB0aGUgUG9wb3ZlciBjYXJkLlxuICAgICAqL1xuICAgIHN0YXRlbGVzc1Byb3BzOiBQcm9wVHlwZXMuc2hhcGUoUG9wb3ZlclN0YXRlbGVzcy5wcm9wVHlwZXMpLFxuXG4gICAgLyoqXG4gICAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBhbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBQb3BvdmVyIG9wZW5zLlxuICAgICAqL1xuICAgIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGZpcmVkIHdoZW4gUG9wb3ZlciBjbG9zZXMuXG4gICAgICovXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYm9keSBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uQm9keUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBicmluZyBmb2N1cyBpbnNpZGUgb2YgdGhlIFBvcG92ZXIgb24gb3Blbi5cbiAgICAgKi9cbiAgICBicmluZ0ZvY3VzSW5zaWRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyBvdXRzaWRlIHRoZSBkaWFsb2cgc2hvdWxkIGNsb3NlIHRoZSBkaWFsb2cuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbkV4dGVybmFsQ2xpY2s6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5CT1RUT00sXG4gICAgbWluV2lkdGg6IDIwMCxcbiAgICBtaW5IZWlnaHQ6IDQwLFxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgb25PcGVuOiAoKSA9PiB7fSxcbiAgICBvbkNsb3NlOiAoKSA9PiB7fSxcbiAgICBvbk9wZW5Db21wbGV0ZTogKCkgPT4ge30sXG4gICAgb25DbG9zZUNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBvbkJvZHlDbGljazogKCkgPT4ge30sXG4gICAgYnJpbmdGb2N1c0luc2lkZTogZmFsc2UsXG4gICAgc2hvdWxkQ2xvc2VPbkV4dGVybmFsQ2xpY2s6IHRydWUsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJ1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNTaG93bjogcHJvcHMuaXNTaG93blxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQm9keUNsaWNrLCBmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzIGJvcnJvd2VkIGZyb20gQmx1ZXByaW50SlNcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL3JlbGVhc2UvMi4wLjAvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkudHN4XG4gICAqL1xuICBicmluZ0ZvY3VzSW5zaWRlID0gKCkgPT4ge1xuICAgIC8vIEFsd2F5cyBkZWxheSBmb2N1cyBtYW5pcHVsYXRpb24gdG8ganVzdCBiZWZvcmUgcmVwYWludCB0byBwcmV2ZW50IHNjcm9sbCBqdW1waW5nXG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBDb250YWluZXIgcmVmIG1heSBiZSB1bmRlZmluZWQgYmV0d2VlbiBjb21wb25lbnQgbW91bnRpbmcgYW5kIFBvcnRhbCByZW5kZXJpbmdcbiAgICAgIC8vIGFjdGl2ZUVsZW1lbnQgbWF5IGJlIHVuZGVmaW5lZCBpbiBzb21lIHJhcmUgY2FzZXMgaW4gSUVcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wb3BvdmVyTm9kZSA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICAhdGhpcy5zdGF0ZS5pc1Nob3duXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRm9jdXNPdXRzaWRlTW9kYWwgPSAhdGhpcy5wb3BvdmVyTm9kZS5jb250YWlucyhcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgKVxuICAgICAgaWYgKGlzRm9jdXNPdXRzaWRlTW9kYWwpIHtcbiAgICAgICAgLy8gRWxlbWVudCBtYXJrZWQgYXV0b2ZvY3VzIGhhcyBoaWdoZXIgcHJpb3JpdHkgdGhhbiB0aGUgb3RoZXIgY2xvd25zXG4gICAgICAgIGNvbnN0IGF1dG9mb2N1c0VsZW1lbnQgPSB0aGlzLnBvcG92ZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdJylcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSB0aGlzLnBvcG92ZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleF0nKVxuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50cyA9IHRoaXMucG9wb3Zlck5vZGUucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAnYnV0dG9uLCBhLCBbcm9sZT1cIm1lbnVpdGVtXCJdLCBbcm9sZT1cIm1lbnVpdGVtcmFkaW9cIl0nXG4gICAgICAgIClcblxuICAgICAgICBpZiAoYXV0b2ZvY3VzRWxlbWVudCkge1xuICAgICAgICAgIGF1dG9mb2N1c0VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2UgaWYgKHdyYXBwZXJFbGVtZW50KSB7XG4gICAgICAgICAgd3JhcHBlckVsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbkVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBidXR0b25FbGVtZW50c1swXS5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYnJpbmdGb2N1c0JhY2tUb1RhcmdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wb3BvdmVyTm9kZSA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gbnVsbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZvY3VzSW5zaWRlTW9kYWwgPSB0aGlzLnBvcG92ZXJOb2RlLmNvbnRhaW5zKFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICApXG5cbiAgICAgIC8vIEJyaW5nIGJhY2sgZm9jdXMgb24gdGhlIHRhcmdldC5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy50YXJnZXRSZWYgJiZcbiAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgaXNGb2N1c0luc2lkZU1vZGFsKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0UmVmLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25Cb2R5Q2xpY2sgPSBlID0+IHtcbiAgICAvLyBJZ25vcmUgY2xpY2tzIG9uIHRoZSBwb3BvdmVyIG9yIGJ1dHRvblxuICAgIGlmICh0aGlzLnRhcmdldFJlZiAmJiB0aGlzLnRhcmdldFJlZi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnBvcG92ZXJOb2RlICYmIHRoaXMucG9wb3Zlck5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBOb3RpZnkgYm9keSBjbGlja1xuICAgIHRoaXMucHJvcHMub25Cb2R5Q2xpY2soZSlcblxuICAgIGlmICh0aGlzLnByb3BzLnNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBvbkVzYyA9IGUgPT4ge1xuICAgIC8vIEVzYyBrZXlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKVxuICAgIH1cbiAgfVxuXG4gIG9wZW4gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2hvd246IHRydWUgfSlcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJvZHlDbGljaywgZmFsc2UpXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbkVzYywgZmFsc2UpXG5cbiAgICB0aGlzLnByb3BzLm9uT3BlbigpXG4gIH1cblxuICBjbG9zZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2hvd246IGZhbHNlIH0pXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Cb2R5Q2xpY2ssIGZhbHNlKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuXG4gICAgdGhpcy5icmluZ0ZvY3VzQmFja1RvVGFyZ2V0KClcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKVxuICB9XG5cbiAgaGFuZGxlT3BlbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmJyaW5nRm9jdXNJbnNpZGUpIHRoaXMuYnJpbmdGb2N1c0luc2lkZSgpXG4gICAgdGhpcy5wcm9wcy5vbk9wZW5Db21wbGV0ZSgpXG4gIH1cblxuICBoYW5kbGVDbG9zZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DbG9zZUNvbXBsZXRlKClcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICB0aGlzLmJyaW5nRm9jdXNJbnNpZGUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU9wZW5Ib3ZlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLm9wZW4oKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsb3NlSG92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVGFyZ2V0ID0gKHsgZ2V0UmVmLCBpc1Nob3duIH0pID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgaXNUb29sdGlwSW5zaWRlID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4udHlwZSA9PT0gVG9vbHRpcFxuXG4gICAgY29uc3QgZ2V0VGFyZ2V0UmVmID0gcmVmID0+IHtcbiAgICAgIHRoaXMudGFyZ2V0UmVmID0gcmVmXG4gICAgICBnZXRSZWYocmVmKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwYXNzZWQsIHlvdSBjYW4gY29udHJvbCB0aGUgUG9wb3ZlciBtYW51YWxseS5cbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlLFxuICAgICAgICBnZXRSZWY6IGdldFRhcmdldFJlZixcbiAgICAgICAgaXNTaG93blxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBwb3BvdmVyVGFyZ2V0UHJvcHMgPSB7XG4gICAgICBvbkNsaWNrOiB0aGlzLnRvZ2dsZSxcbiAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVPcGVuSG92ZXIsXG4gICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBpc1Nob3duLFxuICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9vbHRpcHMgY2FuIGJlIHVzZWQgd2l0aGluIGEgUG9wb3ZlciAobm90IHRoZSBvdGhlciB3YXkgYXJvdW5kKVxuICAgICAqIEluIHRoaXMgY2FzZSB0aGUgY2hpbGRyZW4gaXMgdGhlIFRvb2x0aXAgaW5zdGVhZCBvZiBhIGJ1dHRvbi5cbiAgICAgKiBQYXNzIHRoZSBwcm9wZXJ0aWVzIHRvIHRoZSBUb29sdGlwIGFuZCBsZXQgdGhlIFRvb2x0aXBcbiAgICAgKiBhZGQgdGhlIHByb3BlcnRpZXMgdG8gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICBpZiAoaXNUb29sdGlwSW5zaWRlKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGdldFRhcmdldFJlZixcbiAgICAgICAgICBpc1Nob3duLFxuXG4gICAgICAgICAgLy8gVGhlc2UgcHJvcGV0aWVzIHdpbGwgYmUgc3ByZWFkIGFzIGBwb3BvdmVyVGFyZ2V0UHJvcHNgXG4gICAgICAgICAgLy8gaW4gdGhlIFRvb2x0aXAgY29tcG9uZW50LlxuICAgICAgICAgIC4uLnBvcG92ZXJUYXJnZXRQcm9wc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpdGggbm9ybWFsIHVzYWdlIG9ubHkgcG9wb3ZlciBwcm9wcyBlbmQgdXAgb24gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICBpbm5lclJlZjogZ2V0VGFyZ2V0UmVmLFxuICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1Nob3duLFxuICAgICAgY29udGVudCxcbiAgICAgIGRpc3BsYXksXG4gICAgICBtaW5XaWR0aCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgbWluSGVpZ2h0LFxuICAgICAgc3RhdGVsZXNzUHJvcHMgPSB7fSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgb25DbG9zZUNvbXBsZXRlXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGlzU2hvd246IHN0YXRlSXNTaG93biB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgLy8gSWYgYGlzU2hvd25gIGlzIGEgYm9vbGVhbiwgcG9wb3ZlciBpcyBjb250cm9sbGVkIG1hbnVhbGx5LCBub3QgdmlhIG1vdXNlIGV2ZW50c1xuICAgIGNvbnN0IHNob3duID0gdHlwZW9mIGlzU2hvd24gPT09ICdib29sZWFuJyA/IGlzU2hvd24gOiBzdGF0ZUlzU2hvd25cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9zaXRpb25lclxuICAgICAgICB0YXJnZXQ9eyh7IGdldFJlZiwgaXNTaG93biwgdGFyZ2V0V2lkdGggfSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhcmdldCh7IGdldFJlZiwgaXNTaG93biwgdGFyZ2V0V2lkdGggfSlcbiAgICAgICAgfX1cbiAgICAgICAgaXNTaG93bj17c2hvd259XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249e2FuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICBvbk9wZW5Db21wbGV0ZT17dGhpcy5oYW5kbGVPcGVuQ29tcGxldGV9XG4gICAgICAgIG9uQ2xvc2VDb21wbGV0ZT17b25DbG9zZUNvbXBsZXRlfVxuICAgICAgPlxuICAgICAgICB7KHsgY3NzLCBzdHlsZSwgc3RhdGUsIGdldFJlZiB9KSA9PiAoXG4gICAgICAgICAgPFBvcG92ZXJTdGF0ZWxlc3NcbiAgICAgICAgICAgIGlubmVyUmVmPXtyZWYgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBvcG92ZXJOb2RlID0gcmVmXG4gICAgICAgICAgICAgIGdldFJlZihyZWYpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICBkaXNwbGF5PXtkaXNwbGF5fVxuICAgICAgICAgICAgbWluV2lkdGg9e21pbldpZHRofVxuICAgICAgICAgICAgbWluSGVpZ2h0PXttaW5IZWlnaHR9XG4gICAgICAgICAgICB7Li4uc3RhdGVsZXNzUHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICBzdGF0ZWxlc3NQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNzcyA/IGdsYW1vckNzcyhjc3MpLnRvU3RyaW5nKCkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgIHN0YXRlbGVzc1Byb3BzICYmIHN0YXRlbGVzc1Byb3BzLnN0eWxlXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZWxlc3NQcm9wcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogc3R5bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVDbG9zZUhvdmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IGNvbnRlbnQoeyBjbG9zZTogdGhpcy5jbG9zZSB9KVxuICAgICAgICAgICAgICA6IGNvbnRlbnR9XG4gICAgICAgICAgPC9Qb3BvdmVyU3RhdGVsZXNzPlxuICAgICAgICApfVxuICAgICAgPC9Qb3NpdGlvbmVyPlxuICAgIClcbiAgfVxufVxuIl19
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

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _layers = require("../../layers");

var _portal = require("../../portal");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _AbsolutePosition = _interopRequireDefault(require("../../constants/src/AbsolutePosition"));

var _Position = _interopRequireDefault(require("../../constants/src/Position"));

var _icons = require("../../icons");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;

var openAnimation = _glamor.css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});

var closeAnimation = _glamor.css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});

var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.spring, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " 120ms ").concat(animationEasing.acceleration, " both")
  }
};

var CornerDialog = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(CornerDialog, _PureComponent);

  var _super = _createSuper(CornerDialog);

  function CornerDialog(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CornerDialog);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExited", function () {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onCloseComplete();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCancel", function () {
      _this.props.onCancel(_this.handleClose);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClose", function () {
      _this.setState({
        exiting: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleConfirm", function () {
      _this.props.onConfirm(_this.handleClose);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderChildren", function () {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: _this.handleClose
        });
      }

      if (typeof children === 'string') {
        return _react["default"].createElement(_typography.Paragraph, {
          size: 400,
          color: "muted"
        }, children);
      }

      return children;
    });
    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  (0, _createClass2["default"])(CornerDialog, [{
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          intent = _this$props.intent,
          isShown = _this$props.isShown,
          hasFooter = _this$props.hasFooter,
          hasCancel = _this$props.hasCancel,
          hasClose = _this$props.hasClose,
          cancelLabel = _this$props.cancelLabel,
          confirmLabel = _this$props.confirmLabel,
          onOpenComplete = _this$props.onOpenComplete,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          position = _this$props.position;
      var _this$state = this.state,
          exiting = _this$state.exiting,
          exited = _this$state.exited;
      if (exited) return null;
      return _react["default"].createElement(_portal.Portal, null, _react["default"].createElement(_Transition["default"], {
        appear: true,
        unmountOnExit: true,
        timeout: ANIMATION_DURATION,
        "in": isShown && !exiting,
        onExited: this.handleExited,
        onEntered: onOpenComplete
      }, function (state) {
        return _react["default"].createElement(_layers.Card, (0, _extends2["default"])({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          width: width,
          css: animationStyles,
          "data-state": state,
          padding: 32,
          position: "fixed"
        }, _AbsolutePosition["default"][Object.keys(_AbsolutePosition["default"]).includes(position) ? position : _Position["default"].BOTTOM_RIGHT], containerProps), _react["default"].createElement(_layers.Pane, {
          display: "flex",
          alignItems: "center",
          marginBottom: 12
        }, _react["default"].createElement(_typography.Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && _react["default"].createElement(_buttons.IconButton, {
          height: 32,
          icon: _react["default"].createElement(_icons.CrossIcon, null),
          appearance: "minimal",
          onClick: _this2.handleClose
        })), _react["default"].createElement(_layers.Pane, {
          overflowY: "auto",
          "data-state": state
        }, _this2.renderChildren()), hasFooter && _react["default"].createElement(_layers.Pane, {
          marginTop: 24,
          flexShrink: 0,
          display: "flex",
          flexDirection: "row-reverse"
        }, _react["default"].createElement(_buttons.Button, {
          appearance: "primary",
          intent: intent,
          marginLeft: 8,
          onClick: _this2.handleConfirm
        }, confirmLabel), hasCancel && _react["default"].createElement(_buttons.Button, {
          onClick: _this2.handleCancel
        }, cancelLabel)));
      }));
    }
  }]);
  return CornerDialog;
}(_react.PureComponent);

exports["default"] = CornerDialog;
CornerDialog.displayName = "CornerDialog";
(0, _defineProperty2["default"])(CornerDialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, the dialog is shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: _propTypes["default"].node,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: _propTypes["default"].bool,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: _propTypes["default"].func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: _propTypes["default"].string,

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: _propTypes["default"].bool,

  /**
   * When true, the close button is shown.
   */
  hasClose: _propTypes["default"].bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: _propTypes["default"].func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: _propTypes["default"].string,

  /**
   * Width of the Dialog.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Props that will set position of corner dialog
   */
  position: _propTypes["default"].oneOf([_Position["default"].TOP_LEFT, _Position["default"].TOP_RIGHT, _Position["default"].BOTTOM_LEFT, _Position["default"].BOTTOM_RIGHT])
});
(0, _defineProperty2["default"])(CornerDialog, "defaultProps", {
  width: 392,
  intent: 'none',
  hasFooter: true,
  confirmLabel: 'Learn More',
  hasCancel: true,
  hasClose: true,
  cancelLabel: 'Close',
  onCancel: function onCancel(close) {
    return close();
  },
  onConfirm: function onConfirm(close) {
    return close();
  },
  onCloseComplete: function onCloseComplete() {},
  position: _Position["default"].BOTTOM_RIGHT
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JuZXItZGlhbG9nL3NyYy9Db3JuZXJEaWFsb2cuanMiXSwibmFtZXMiOlsiYW5pbWF0aW9uRWFzaW5nIiwiZGVjZWxlcmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwic3ByaW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwib3BlbkFuaW1hdGlvbiIsImNzcyIsImtleWZyYW1lcyIsImZyb20iLCJ0cmFuc2Zvcm0iLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwib3BhY2l0eSIsImFuaW1hdGlvblN0eWxlcyIsImFuaW1hdGlvbiIsIkNvcm5lckRpYWxvZyIsInByb3BzIiwic2V0U3RhdGUiLCJleGl0aW5nIiwiZXhpdGVkIiwib25DbG9zZUNvbXBsZXRlIiwib25DYW5jZWwiLCJoYW5kbGVDbG9zZSIsIm9uQ29uZmlybSIsImNoaWxkcmVuIiwiY2xvc2UiLCJzdGF0ZSIsImlzU2hvd24iLCJwcmV2UHJvcHMiLCJ0aXRsZSIsIndpZHRoIiwiaW50ZW50IiwiaGFzRm9vdGVyIiwiaGFzQ2FuY2VsIiwiaGFzQ2xvc2UiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsIm9uT3BlbkNvbXBsZXRlIiwiY29udGFpbmVyUHJvcHMiLCJwb3NpdGlvbiIsImhhbmRsZUV4aXRlZCIsImFic29sdXRlUG9zaXRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwicG9zaXRpb25zIiwiQk9UVE9NX1JJR0hUIiwicmVuZGVyQ2hpbGRyZW4iLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlQ2FuY2VsIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNB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QUEsV0FBVyxFQUFFZ0Isc0JBQVVPLE1BekVOOztBQTJFakI7OztBQUdBNUIsRUFBQUEsS0FBSyxFQUFFcUIsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0Qsc0JBQVVPLE1BQVgsRUFBbUJQLHNCQUFVUSxNQUE3QixDQUFwQixDQTlFVTs7QUFnRmpCOzs7QUFHQXJCLEVBQUFBLGNBQWMsRUFBRWEsc0JBQVVTLE1BbkZUOztBQXFGakI7OztBQUdBckIsRUFBQUEsUUFBUSxFQUFFWSxzQkFBVUssS0FBVixDQUFnQixDQUN4QlgscUJBQVVnQixRQURjLEVBRXhCaEIscUJBQVVpQixTQUZjLEVBR3hCakIscUJBQVVrQixXQUhjLEVBSXhCbEIscUJBQVVDLFlBSmMsQ0FBaEI7QUF4Rk8sQztpQ0FEQS9CLFksa0JBaUdHO0FBQ3BCZSxFQUFBQSxLQUFLLEVBQUUsR0FEYTtBQUVwQkMsRUFBQUEsTUFBTSxFQUFFLE1BRlk7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRSxJQUhTO0FBSXBCSSxFQUFBQSxZQUFZLEVBQUUsWUFKTTtBQUtwQkgsRUFBQUEsU0FBUyxFQUFFLElBTFM7QUFNcEJDLEVBQUFBLFFBQVEsRUFBRSxJQU5VO0FBT3BCQyxFQUFBQSxXQUFXLEVBQUUsT0FQTztBQVFwQmQsRUFBQUEsUUFBUSxFQUFFLGtCQUFBSSxLQUFLO0FBQUEsV0FBSUEsS0FBSyxFQUFUO0FBQUEsR0FSSztBQVNwQkYsRUFBQUEsU0FBUyxFQUFFLG1CQUFBRSxLQUFLO0FBQUEsV0FBSUEsS0FBSyxFQUFUO0FBQUEsR0FUSTtBQVVwQkwsRUFBQUEsZUFBZSxFQUFFLDJCQUFNLENBQUUsQ0FWTDtBQVdwQm1CLEVBQUFBLFFBQVEsRUFBRU0scUJBQVVDO0FBWEEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nXG5pbXBvcnQgeyBQYW5lLCBDYXJkIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vLi4vcG9ydGFsJ1xuaW1wb3J0IHsgUGFyYWdyYXBoLCBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgYWJzb2x1dGVQb3NpdGlvbnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL3NyYy9BYnNvbHV0ZVBvc2l0aW9uJ1xuaW1wb3J0IHBvc2l0aW9ucyBmcm9tICcuLi8uLi9jb25zdGFudHMvc3JjL1Bvc2l0aW9uJ1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWAsXG4gIHNwcmluZzogYGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjE3NSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCBvcGVuQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnb3BlbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgfVxufSlcblxuY29uc3QgY2xvc2VBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdjbG9zZUFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC45KScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXMgPSB7XG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBhbmltYXRpb246IGAke29wZW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLnNwcmluZ30gYm90aGBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtjbG9zZUFuaW1hdGlvbn0gMTIwbXMgJHthbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9ufSBib3RoYFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcm5lckRpYWxvZyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENoaWxkcmVuIGNhbiBiZSBhIHN0cmluZywgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgICAqIFdoZW4gcGFzc2luZyBhIHN0cmluZywgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIiAvPiBpcyB1c2VkIHRvIHdyYXAgdGhlIHN0cmluZy5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIENvcm5lckRpYWxvZy4gVXNlZCBmb3IgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBkaWFsb2cgaXMgc2hvd24uXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaXRsZSBvZiB0aGUgRGlhbG9nLiBUaXRsZXMgc2hvdWxkIHVzZSBUaXRsZSBDYXNlLlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZm9vdGVyIHdpdGggdGhlIGNhbmNlbCBhbmQgY29uZmlybSBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzRm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY29uZmlybSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKiBUaGlzIGRvZXMgbm90IGNsb3NlIHRoZSBEaWFsb2cuIEEgY2xvc2UgZnVuY3Rpb24gd2lsbCBiZSBwYXNzZWRcbiAgICAgKiBhcyBhIHBhcmFtYXRlciB5b3UgY2FuIHVzZSB0byBjbG9zZSB0aGUgZGlhbG9nLlxuICAgICAqXG4gICAgICogYG9uQ29uZmlybT17KGNsb3NlKSA9PiBjbG9zZSgpfWBcbiAgICAgKi9cbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNvbmZpcm0gYnV0dG9uLlxuICAgICAqL1xuICAgIGNvbmZpcm1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNhbmNlbCBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNsb3NlIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKiBUaGlzIGNsb3NlcyB0aGUgRGlhbG9nIGJ5IGRlZmF1bHQuXG4gICAgICpcbiAgICAgKiBgb25DYW5jZWw9eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAgICovXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNhbmNlbCBidXR0b24uXG4gICAgICovXG4gICAgY2FuY2VsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgRGlhbG9nLlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGRpYWxvZyBjb250YWluZXIuXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IHdpbGwgc2V0IHBvc2l0aW9uIG9mIGNvcm5lciBkaWFsb2dcbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIHBvc2l0aW9ucy5UT1BfTEVGVCxcbiAgICAgIHBvc2l0aW9ucy5UT1BfUklHSFQsXG4gICAgICBwb3NpdGlvbnMuQk9UVE9NX0xFRlQsXG4gICAgICBwb3NpdGlvbnMuQk9UVE9NX1JJR0hUXG4gICAgXSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDM5MixcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBoYXNGb290ZXI6IHRydWUsXG4gICAgY29uZmlybUxhYmVsOiAnTGVhcm4gTW9yZScsXG4gICAgaGFzQ2FuY2VsOiB0cnVlLFxuICAgIGhhc0Nsb3NlOiB0cnVlLFxuICAgIGNhbmNlbExhYmVsOiAnQ2xvc2UnLFxuICAgIG9uQ2FuY2VsOiBjbG9zZSA9PiBjbG9zZSgpLFxuICAgIG9uQ29uZmlybTogY2xvc2UgPT4gY2xvc2UoKSxcbiAgICBvbkNsb3NlQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMuQk9UVE9NX1JJR0hUXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4aXRpbmc6IGZhbHNlLFxuICAgICAgZXhpdGVkOiAhcHJvcHMuaXNTaG93blxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIXByZXZQcm9wcy5pc1Nob3duICYmIHRoaXMucHJvcHMuaXNTaG93bikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXhpdGVkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFeGl0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRpbmc6IGZhbHNlLCBleGl0ZWQ6IHRydWUgfSlcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VDb21wbGV0ZSgpXG4gIH1cblxuICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzLmhhbmRsZUNsb3NlKVxuICB9XG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRpbmc6IHRydWUgfSlcbiAgfVxuXG4gIGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNvbmZpcm0odGhpcy5oYW5kbGVDbG9zZSlcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oeyBjbG9zZTogdGhpcy5oYW5kbGVDbG9zZSB9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFyYWdyYXBoIHNpemU9ezQwMH0gY29sb3I9XCJtdXRlZFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGludGVudCxcbiAgICAgIGlzU2hvd24sXG4gICAgICBoYXNGb290ZXIsXG4gICAgICBoYXNDYW5jZWwsXG4gICAgICBoYXNDbG9zZSxcbiAgICAgIGNhbmNlbExhYmVsLFxuICAgICAgY29uZmlybUxhYmVsLFxuICAgICAgb25PcGVuQ29tcGxldGUsXG4gICAgICBjb250YWluZXJQcm9wcyA9IHt9LFxuICAgICAgcG9zaXRpb25cbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBleGl0aW5nLCBleGl0ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChleGl0ZWQpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWw+XG4gICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgIHRpbWVvdXQ9e0FOSU1BVElPTl9EVVJBVElPTn1cbiAgICAgICAgICBpbj17aXNTaG93biAmJiAhZXhpdGluZ31cbiAgICAgICAgICBvbkV4aXRlZD17dGhpcy5oYW5kbGVFeGl0ZWR9XG4gICAgICAgICAgb25FbnRlcmVkPXtvbk9wZW5Db21wbGV0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtzdGF0ZSA9PiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBlbGV2YXRpb249ezR9XG4gICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgY3NzPXthbmltYXRpb25TdHlsZXN9XG4gICAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgICBwYWRkaW5nPXszMn1cbiAgICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICAgIHsuLi5hYnNvbHV0ZVBvc2l0aW9uc1tcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhYnNvbHV0ZVBvc2l0aW9ucykuaW5jbHVkZXMocG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICA/IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICA6IHBvc2l0aW9ucy5CT1RUT01fUklHSFRcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYXJnaW5Cb3R0b209ezEyfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBpcz1cImg0XCIgc2l6ZT17NjAwfSBmbGV4PVwiMVwiPlxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICB7aGFzQ2xvc2UgJiYgKFxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17PENyb3NzSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1BhbmU+XG5cbiAgICAgICAgICAgICAgPFBhbmUgb3ZlcmZsb3dZPVwiYXV0b1wiIGRhdGEtc3RhdGU9e3N0YXRlfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuICAgICAgICAgICAgICA8L1BhbmU+XG5cbiAgICAgICAgICAgICAge2hhc0Zvb3RlciAmJiAoXG4gICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17MjR9XG4gICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvdy1yZXZlcnNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAge2hhc0NhbmNlbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9PntjYW5jZWxMYWJlbH08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgIDwvUG9ydGFsPlxuICAgIClcbiAgfVxufVxuIl19
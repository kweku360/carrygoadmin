import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import Alert from '../../alert/src/Alert';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;
var openAnimation = css.keyframes('openAnimation', {
  from: {
    opacity: 0,
    transform: 'translateY(-120%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});
var closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});
var animationStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 0,
  transition: "all ".concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration),
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.spring, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " 120ms ").concat(animationEasing.acceleration, " both")
  }
});

var Toast = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Toast, _React$PureComponent);

  var _super = _createSuper(Toast);

  function Toast() {
    var _this;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isShown: true,
      height: 0
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.clearCloseTimer();

      _this.setState({
        isShown: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "startCloseTimer", function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clearCloseTimer", function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function () {
      _this.clearCloseTimer();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      _this.startCloseTimer();
    });

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      if (ref === null) return;

      var _ref$getBoundingClien = ref.getBoundingClientRect(),
          height = _ref$getBoundingClien.height;

      _this.setState({
        height: height
      });
    });

    return _this;
  }

  _createClass(Toast, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isShown !== this.props.isShown) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isShown: this.props.isShown
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        timeout: ANIMATION_DURATION,
        "in": this.state.isShown,
        onExited: this.props.onRemove
      }, function (state) {
        return React.createElement("div", {
          "data-state": state,
          className: animationStyles,
          onMouseEnter: _this2.handleMouseEnter,
          onMouseLeave: _this2.handleMouseLeave,
          style: {
            height: _this2.state.height,
            zIndex: _this2.props.zIndex,
            marginBottom: _this2.state.isShown ? 0 : -_this2.state.height
          }
        }, React.createElement("div", {
          ref: _this2.onRef,
          style: {
            padding: 8
          }
        }, React.createElement(Alert, {
          flexShrink: 0,
          appearance: "card",
          elevation: 3,
          intent: _this2.props.intent,
          title: _this2.props.title,
          isRemoveable: _this2.props.hasCloseButton,
          onRemove: function onRemove() {
            return _this2.close();
          },
          pointerEvents: "all"
        }, _this2.props.children)));
      });
    }
  }]);

  return Toast;
}(React.PureComponent);

Toast.displayName = "Toast";

_defineProperty(Toast, "propTypes", {
  /**
   * The z-index of the toast.
   */
  zIndex: PropTypes.number,

  /**
   * Duration of the toast.
   */
  duration: PropTypes.number,

  /**
   * Function called when the toast is all the way closed.
   */
  onRemove: PropTypes.func,

  /**
   * The type of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The title of the alert.
   */
  title: PropTypes.node,

  /**
   * Description of the alert.
   */
  children: PropTypes.node,

  /**
   * When true, show a close icon button inside of the toast.
   */
  hasCloseButton: PropTypes.bool,

  /**
   * When false, will close the Toast and call onRemove when finished.
   */
  isShown: PropTypes.bool
});

_defineProperty(Toast, "defaultProps", {
  intent: 'none'
});

export { Toast as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNzcyIsIlByb3BUeXBlcyIsIlRyYW5zaXRpb24iLCJBbGVydCIsImFuaW1hdGlvbkVhc2luZyIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsInNwcmluZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsIm9wZW5BbmltYXRpb24iLCJrZXlmcmFtZXMiLCJmcm9tIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInRvIiwiY2xvc2VBbmltYXRpb24iLCJhbmltYXRpb25TdHlsZXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0aW9uIiwiVG9hc3QiLCJpc1Nob3duIiwiY2xlYXJDbG9zZVRpbWVyIiwic2V0U3RhdGUiLCJwcm9wcyIsImR1cmF0aW9uIiwiY2xvc2VUaW1lciIsInNldFRpbWVvdXQiLCJjbG9zZSIsImNsZWFyVGltZW91dCIsInN0YXJ0Q2xvc2VUaW1lciIsInJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInByZXZQcm9wcyIsInN0YXRlIiwib25SZW1vdmUiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInpJbmRleCIsIm1hcmdpbkJvdHRvbSIsIm9uUmVmIiwicGFkZGluZyIsImludGVudCIsInRpdGxlIiwiaGFzQ2xvc2VCdXR0b24iLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiLCJudW1iZXIiLCJmdW5jIiwib25lT2YiLCJpc1JlcXVpcmVkIiwibm9kZSIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsbUNBQXZCO0FBQ0EsT0FBT0Ms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IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbidcbmltcG9ydCBBbGVydCBmcm9tICcuLi8uLi9hbGVydC9zcmMvQWxlcnQnXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWAsXG4gIHNwcmluZzogYGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjE3NSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCBvcGVuQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnb3BlbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTIwJSknXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgfVxufSlcblxuY29uc3QgY2xvc2VBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdjbG9zZUFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC45KScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXMgPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgaGVpZ2h0OiAwLFxuICB0cmFuc2l0aW9uOiBgYWxsICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvbn1gLFxuICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtvcGVuQW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke1xuICAgICAgYW5pbWF0aW9uRWFzaW5nLnNwcmluZ1xuICAgIH0gYm90aGBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtjbG9zZUFuaW1hdGlvbn0gMTIwbXMgJHthbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9ufSBib3RoYFxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSB6LWluZGV4IG9mIHRoZSB0b2FzdC5cbiAgICAgKi9cbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBEdXJhdGlvbiBvZiB0aGUgdG9hc3QuXG4gICAgICovXG4gICAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgdG9hc3QgaXMgYWxsIHRoZSB3YXkgY2xvc2VkLlxuICAgICAqL1xuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uIG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBjbG9zZSBpY29uIGJ1dHRvbiBpbnNpZGUgb2YgdGhlIHRvYXN0LlxuICAgICAqL1xuICAgIGhhc0Nsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gZmFsc2UsIHdpbGwgY2xvc2UgdGhlIFRvYXN0IGFuZCBjYWxsIG9uUmVtb3ZlIHdoZW4gZmluaXNoZWQuXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW50ZW50OiAnbm9uZSdcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlzU2hvd246IHRydWUsXG4gICAgaGVpZ2h0OiAwXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5pc1Nob3duICE9PSB0aGlzLnByb3BzLmlzU2hvd24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzU2hvd246IHRoaXMucHJvcHMuaXNTaG93blxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpXG4gIH1cblxuICBjbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1Nob3duOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBzdGFydENsb3NlVGltZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgIH0sIHRoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyQ2xvc2VUaW1lciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5jbG9zZVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZVRpbWVyKVxuICAgICAgdGhpcy5jbG9zZVRpbWVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhckNsb3NlVGltZXIoKVxuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpXG4gIH1cblxuICBvblJlZiA9IHJlZiA9PiB7XG4gICAgaWYgKHJlZiA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IGhlaWdodCB9ID0gcmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhlaWdodFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgIGFwcGVhclxuICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgIHRpbWVvdXQ9e0FOSU1BVElPTl9EVVJBVElPTn1cbiAgICAgICAgaW49e3RoaXMuc3RhdGUuaXNTaG93bn1cbiAgICAgICAgb25FeGl0ZWQ9e3RoaXMucHJvcHMub25SZW1vdmV9XG4gICAgICA+XG4gICAgICAgIHtzdGF0ZSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2FuaW1hdGlvblN0eWxlc31cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgICAgICAgICB6SW5kZXg6IHRoaXMucHJvcHMuekluZGV4LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IHRoaXMuc3RhdGUuaXNTaG93biA/IDAgOiAtdGhpcy5zdGF0ZS5oZWlnaHRcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMub25SZWZ9IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XG4gICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cImNhcmRcIlxuICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17M31cbiAgICAgICAgICAgICAgICBpbnRlbnQ9e3RoaXMucHJvcHMuaW50ZW50fVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIGlzUmVtb3ZlYWJsZT17dGhpcy5wcm9wcy5oYXNDbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gdGhpcy5jbG9zZSgpfVxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJhbGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICApXG4gIH1cbn1cbiJdfQ==
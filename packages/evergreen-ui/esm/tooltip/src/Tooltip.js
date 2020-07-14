import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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

import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { Positioner } from '../../positioner';
import { Position } from '../../constants';
import TooltipStateless from './TooltipStateless';
var idCounter = 0;

var Tooltip = /*#__PURE__*/function (_PureComponent) {
  _inherits(Tooltip, _PureComponent);

  var _super = _createSuper(Tooltip);

  function Tooltip(props, context) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "show", function () {
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

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      _this.setState({
        isShown: false,
        willShow: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderTarget", function (_ref) {
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
            popoverTargetProps = _objectWithoutProperties(_this$props$popoverPr, ["getTargetRef", "isShown"]);

        return React.cloneElement(children, _objectSpread({}, popoverTargetProps, {}, tooltipTargetProps, {
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


      return React.cloneElement(children, _objectSpread({}, tooltipTargetProps, {
        innerRef: function innerRef(ref) {
          getRef(ref);
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "isPopoverShown", function () {
      return (// eslint-disable-next-line react/prop-types
        _this.props.popoverProps && _this.props.popoverProps.isShown
      );
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnterTarget", function () {
      _this.setState({
        isShownByTarget: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeaveTarget", function () {
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
    _this.handleMouseLeaveTarget = debounce(_this.handleMouseLeaveTarget, _this.props.hideDelay);
    _this.hide = debounce(_this.hide, _this.props.hideDelay);
    return _this;
  }

  _createClass(Tooltip, [{
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

      return React.createElement(Positioner, {
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
        return React.createElement(TooltipStateless, _extends({
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
          className: cx(statelessProps.className, css ? glamorCss(css).toString() : undefined)
        }), content);
      });
    }
  }]);

  return Tooltip;
}(PureComponent);

Tooltip.displayName = "Tooltip";

_defineProperty(Tooltip, "propTypes", {
  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired,

  /**
   * The position the Popover is on.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * The content of the Popover.
   */
  content: PropTypes.node.isRequired,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: PropTypes.number.isRequired,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: PropTypes.number.isRequired,

  /**
   * When True, manually show the Tooltip.
   */
  isShown: PropTypes.bool,

  /**
   * The target button of the Tooltip.
   */
  children: PropTypes.node.isRequired,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: PropTypes.object
});

_defineProperty(Tooltip, "defaultProps", {
  appearance: 'default',
  position: Position.BOTTOM,
  hideDelay: 120,
  showDelay: 0
});

export { Tooltip as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbImN4IiwiY3NzIiwiZ2xhbW9yQ3NzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZGVib3VuY2UiLCJQb3NpdGlvbmVyIiwiUG9zaXRpb24iLCJUb29sdGlwU3RhdGVsZXNzIiwiaWRDb3VudGVyIiwiVG9vbHRpcCIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiaXNTaG93biIsInNldFN0YXRlIiwid2lsbFNob3ciLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInNob3dEZWxheSIsImdldFJlZiIsImNoaWxkcmVuIiwidG9vbHRpcFRhcmdldFByb3BzIiwib25Nb3VzZUVudGVyIiwic2hvdyIsIm9uTW91c2VMZWF2ZSIsImhpZGUiLCJpZCIsInBvcG92ZXJQcm9wcyIsImdldFRhcmdldFJlZiIsInBvcG92ZXJUYXJnZXRQcm9wcyIsImNsb25lRWxlbWVudCIsImlubmVyUmVmIiwicmVmIiwiaXNTaG93bkJ5VGFyZ2V0IiwiaGFuZGxlTW91c2VMZWF2ZVRhcmdldCIsImhpZGVEZWxheSIsImNsZWFyVGltZW91dCIsImFwcGVhcmFuY2UiLCJjb250ZW50IiwicG9zaXRpb24iLCJzdGF0ZWxlc3NQcm9wcyIsInN0YXRlSXNTaG93biIsInNob3duIiwiaXNQb3BvdmVyU2hvd24iLCJyZW5kZXJUYXJnZXQiLCJzdHlsZSIsImhhbmRsZU1vdXNlRW50ZXJUYXJnZXQiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJMRUZUIiwiUklHSFQiLCJub2RlIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxHQUFHLElBQUlDLFNBQWhCLFFBQWlDLFFBQWpDO0FBQ0EsT0FBT0MsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixpQkFBckI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGtCQUEzQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBRUEsSUFBSUMsU0FBUyxHQUFHLENBQWhCOztJQUVxQkMsTzs7Ozs7QUEyRG5CLG1CQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtBQUFBOztBQUFBOztBQUMxQiw4QkFBTUQsS0FBTixFQUFhQyxPQUFiOztBQUQwQiwyREFzQnJCLFlBQU07QUFDWCxVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3Qjs7QUFDeEIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLFFBQUFBLFFBQVEsRUFBRTtBQURFLE9BQWQ7O0FBR0EsWUFBS0MsT0FBTCxHQUFlQyxVQUFVLENBQUMsWUFBTTtBQUM5QixZQUFJLENBQUMsTUFBS0wsS0FBTCxDQUFXRyxRQUFoQixFQUEwQjs7QUFDMUIsY0FBS0QsUUFBTCxDQUFjO0FBQ1pELFVBQUFBLE9BQU8sRUFBRTtBQURHLFNBQWQ7QUFHRCxPQUx3QixFQUt0QixNQUFLSCxLQUFMLENBQVdRLFNBTFcsQ0FBekI7QUFNRCxLQWpDMkI7O0FBQUEsMkRBbUNyQixZQUFNO0FBQ1gsWUFBS0osUUFBTCxDQUFjO0FBQ1pELFFBQUFBLE9BQU8sRUFBRSxLQURHO0FBRVpFLFFBQUFBLFFBQVEsRUFBRTtBQUZFLE9BQWQ7QUFJRCxLQXhDMkI7O0FBQUEsbUVBMENiLGdCQUFnQjtBQUFBLFVBQWJJLE1BQWEsUUFBYkEsTUFBYTtBQUFBLFVBQ3JCQyxRQURxQixHQUNSLE1BQUtWLEtBREcsQ0FDckJVLFFBRHFCO0FBRzdCLFVBQU1DLGtCQUFrQixHQUFHO0FBQ3pCQyxRQUFBQSxZQUFZLEVBQUUsTUFBS0MsSUFETTtBQUV6QkMsUUFBQUEsWUFBWSxFQUFFLE1BQUtDLElBRk07QUFHekIsNEJBQW9CLE1BQUtiLEtBQUwsQ0FBV2M7QUFITixPQUEzQjtBQU1BOzs7OztBQUtBOztBQUNBLFVBQUksTUFBS2hCLEtBQUwsQ0FBV2lCLFlBQWYsRUFBNkI7QUFBQSxvQ0FRdkIsTUFBS2pCLEtBQUwsQ0FBV2lCLFlBUlk7QUFBQSxZQUd6QkMsWUFIeUIseUJBR3pCQSxZQUh5QjtBQUFBLFlBS3pCZixPQUx5Qix5QkFLekJBLE9BTHlCO0FBQUEsWUFNdEJnQixrQkFOc0I7O0FBVTNCLGVBQU81QixLQUFLLENBQUM2QixZQUFOLENBQW1CVixRQUFuQixvQkFFRlMsa0JBRkUsTUFJRlIsa0JBSkU7QUFNTFUsVUFBQUEsUUFBUSxFQUFFLGtCQUFBQyxHQUFHLEVBQUk7QUFDZjtBQUNBYixZQUFBQSxNQUFNLENBQUNhLEdBQUQsQ0FBTixDQUZlLENBR2Y7O0FBQ0FKLFlBQUFBLFlBQVksQ0FBQ0ksR0FBRCxDQUFaO0FBQ0Q7QUFYSSxXQUFQO0FBYUQ7QUFFRDs7Ozs7QUFHQSxhQUFPL0IsS0FBSyxDQUFDNkIsWUFBTixDQUFtQlYsUUFBbkIsb0JBQ0ZDLGtCQURFO0FBRUxVLFFBQUFBLFFBQVEsRUFBRSxrQkFBQUMsR0FBRyxFQUFJO0FBQ2ZiLFVBQUFBLE1BQU0sQ0FBQ2EsR0FBRCxDQUFOO0FBQ0Q7QUFKSSxTQUFQO0FBTUQsS0EzRjJCOztBQUFBLHFFQTZGWDtBQUFBLGFBQ2Y7QUFDQSxjQUFLdEIsS0FBTCxDQUFXaUIsWUFBWCxJQUEyQixNQUFLakIsS0FBTCxDQUFXaUIsWUFBWCxDQUF3QmQ7QUFGcEM7QUFBQSxLQTdGVzs7QUFBQSw2RUFpR0gsWUFBTTtBQUM3QixZQUFLQyxRQUFMLENBQWM7QUFDWm1CLFFBQUFBLGVBQWUsRUFBRTtBQURMLE9BQWQ7QUFHRCxLQXJHMkI7O0FBQUEsNkVBdUdILFlBQU07QUFDN0IsWUFBS25CLFFBQUwsQ0FBYztBQUNabUIsUUFBQUEsZUFBZSxFQUFFLEtBREw7QUFFWmxCLFFBQUFBLFFBQVEsRUFBRTtBQUZFLE9BQWQ7QUFJRCxLQTVHMkI7O0FBRzFCLFVBQUtILEtBQUwsR0FBYTtBQUNYYyxNQUFBQSxFQUFFLDhCQUF1QixFQUFFbEIsU0FBekIsQ0FEUztBQUVYTyxNQUFBQSxRQUFRLEVBQUUsS0FGQztBQUdYRixNQUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FISjtBQUlYb0IsTUFBQUEsZUFBZSxFQUFFO0FBSk4sS0FBYjtBQU9BLFVBQUtDLHNCQUFMLEdBQThCOUIsUUFBUSxDQUNwQyxNQUFLOEIsc0JBRCtCLEVBRXBDLE1BQUt4QixLQUFMLENBQVd5QixTQUZ5QixDQUF0QztBQUtBLFVBQUtWLElBQUwsR0FBWXJCLFFBQVEsQ0FBQyxNQUFLcUIsSUFBTixFQUFZLE1BQUtmLEtBQUwsQ0FBV3lCLFNBQXZCLENBQXBCO0FBZjBCO0FBZ0IzQjs7OzsyQ0FFc0I7QUFDckJDLE1BQUFBLFlBQVksQ0FBQyxLQUFLcEIsT0FBTixDQUFaO0FBQ0Q7Ozs2QkEwRlE7QUFBQTs7QUFBQSx3QkFPSCxLQUFLTixLQVBGO0FBQUEsVUFFTDJCLFVBRkssZUFFTEEsVUFGSztBQUFBLFVBR0x4QixPQUhLLGVBR0xBLE9BSEs7QUFBQSxVQUlMeUIsT0FKSyxlQUlMQSxPQUpLO0FBQUEsVUFLTEMsUUFMSyxlQUtMQSxRQUxLO0FBQUEsOENBTUxDLGNBTks7QUFBQSxVQU1MQSxjQU5LLHNDQU1ZLEVBTlo7QUFBQSx3QkFRNEMsS0FBSzVCLEtBUmpEO0FBQUEsVUFRVTZCLFlBUlYsZUFRQzVCLE9BUkQ7QUFBQSxVQVF3Qm9CLGVBUnhCLGVBUXdCQSxlQVJ4QjtBQVVQLFVBQUlTLEtBQUssR0FDUCxDQUFDN0IsT0FBTyxJQUFJNEIsWUFBWCxJQUEyQlIsZUFBNUIsS0FBZ0QsQ0FBQyxLQUFLVSxjQUFMLEVBRG5ELENBVk8sQ0FhUDs7QUFDQSxVQUFJOUIsT0FBTyxLQUFLLEtBQWhCLEVBQXVCO0FBQ3JCNkIsUUFBQUEsS0FBSyxHQUFHLEtBQVI7QUFDRDs7QUFFRCxhQUNFLG9CQUFDLFVBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRSx1QkFBZ0I7QUFBQSxjQUFidkIsTUFBYSxTQUFiQSxNQUFhO0FBQ3RCLGlCQUFPLE1BQUksQ0FBQ3lCLFlBQUwsQ0FBa0I7QUFBRXpCLFlBQUFBLE1BQU0sRUFBTkE7QUFBRixXQUFsQixDQUFQO0FBQ0QsU0FISDtBQUlFLFFBQUEsT0FBTyxFQUFFdUIsS0FKWDtBQUtFLFFBQUEsUUFBUSxFQUFFSCxRQUxaO0FBTUUsUUFBQSxpQkFBaUIsRUFBRTtBQU5yQixTQVFHO0FBQUEsWUFBR3hDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFlBQVE4QyxLQUFSLFNBQVFBLEtBQVI7QUFBQSxZQUFlakMsS0FBZixTQUFlQSxLQUFmO0FBQUEsWUFBc0JPLE1BQXRCLFNBQXNCQSxNQUF0QjtBQUFBLGVBQ0Msb0JBQUMsZ0JBQUQ7QUFDRSxVQUFBLEVBQUUsRUFBRSxNQUFJLENBQUNQLEtBQUwsQ0FBV2MsRUFEakI7QUFFRSxVQUFBLFVBQVUsRUFBRVcsVUFGZDtBQUdFLFVBQUEsUUFBUSxFQUFFLGtCQUFBTCxHQUFHO0FBQUEsbUJBQUliLE1BQU0sQ0FBQ2EsR0FBRCxDQUFWO0FBQUEsV0FIZjtBQUlFLHdCQUFZcEIsS0FKZDtBQUtFLFVBQUEsS0FBSyxFQUFFaUMsS0FMVDtBQU1FLFVBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQ0Msc0JBTnJCO0FBT0UsVUFBQSxZQUFZLEVBQUUsTUFBSSxDQUFDWjtBQVByQixXQVFNTSxjQVJOO0FBU0UsVUFBQSxTQUFTLEVBQUUxQyxFQUFFLENBQ1gwQyxjQUFjLENBQUNPLFNBREosRUFFWGhELEdBQUcsR0FBR0MsU0FBUyxDQUFDRCxHQUFELENBQVQsQ0FBZWlELFFBQWYsRUFBSCxHQUErQkMsU0FGdkI7QUFUZixZQWNHWCxPQWRILENBREQ7QUFBQSxPQVJILENBREY7QUE2QkQ7Ozs7RUF4TmtDcEMsYTs7QUFBaEJPLE87O2dCQUFBQSxPLGVBQ0E7QUFDakI7OztBQUdBNEIsRUFBQUEsVUFBVSxFQUFFbEMsU0FBUyxDQUFDK0MsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxNQUFaLENBQWhCLEVBQXFDQyxVQUpoQzs7QUFNakI7OztBQUdBWixFQUFBQSxRQUFRLEVBQUVwQyxTQUFTLENBQUMrQyxLQUFWLENBQWdCLENBQ3hCNUMsUUFBUSxDQUFDOEMsR0FEZSxFQUV4QjlDLFFBQVEsQ0FBQytDLFFBRmUsRUFHeEIvQyxRQUFRLENBQUNnRCxTQUhlLEVBSXhCaEQsUUFBUSxDQUFDaUQsTUFKZSxFQUt4QmpELFFBQVEsQ0FBQ2tELFdBTGUsRUFNeEJsRCxRQUFRLENBQUNtRCxZQU5lLEVBT3hCbkQsUUFBUSxDQUFDb0QsSUFQZSxFQVF4QnBELFFBQVEsQ0FBQ3FELEtBUmUsQ0FBaEIsQ0FUTzs7QUFvQmpCOzs7QUFHQXJCLEVBQUFBLE9BQU8sRUFBRW5DLFNBQVMsQ0FBQ3lELElBQVYsQ0FBZVQsVUF2QlA7O0FBeUJqQjs7O0FBR0FoQixFQUFBQSxTQUFTLEVBQUVoQyxTQUFTLENBQUMwRCxNQUFWLENBQWlCVixVQTVCWDs7QUE4QmpCOzs7QUFHQWpDLEVBQUFBLFNBQVMsRUFBRWYsU0FBUyxDQUFDMEQsTUFBVixDQUFpQlYsVUFqQ1g7O0FBbUNqQjs7O0FBR0F0QyxFQUFBQSxPQUFPLEVBQUVWLFNBQVMsQ0FBQzJELElBdENGOztBQXdDakI7OztBQUdBMUMsRUFBQUEsUUFBUSxFQUFFakIsU0FBUyxDQUFDeUQsSUFBVixDQUFlVCxVQTNDUjs7QUE2Q2pCOzs7QUFHQVgsRUFBQUEsY0FBYyxFQUFFckMsU0FBUyxDQUFDNEQ7QUFoRFQsQzs7Z0JBREF0RCxPLGtCQW9ERztBQUNwQjRCLEVBQUFBLFVBQVUsRUFBRSxTQURRO0FBRXBCRSxFQUFBQSxRQUFRLEVBQUVqQyxRQUFRLENBQUNpRCxNQUZDO0FBR3BCcEIsRUFBQUEsU0FBUyxFQUFFLEdBSFM7QUFJcEJqQixFQUFBQSxTQUFTLEVBQUU7QUFKUyxDOztTQXBESFQsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xuaW1wb3J0IHsgUG9zaXRpb25lciB9IGZyb20gJy4uLy4uL3Bvc2l0aW9uZXInXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBUb29sdGlwU3RhdGVsZXNzIGZyb20gJy4vVG9vbHRpcFN0YXRlbGVzcydcblxubGV0IGlkQ291bnRlciA9IDBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0b29sdGlwLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnY2FyZCddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIHRoZSBQb3BvdmVyIGlzIG9uLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgUG9zaXRpb24uVE9QLFxuICAgICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgICBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIFBvcG92ZXIuXG4gICAgICovXG4gICAgY29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRpbWUgaW4gbXMgYmVmb3JlIGhpZGluZyB0aGUgVG9vbHRpcC5cbiAgICAgKi9cbiAgICBoaWRlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRpbWUgaW4gbXMgYmVmb3JlIHNob3dpbmcgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgc2hvd0RlbGF5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIFRydWUsIG1hbnVhbGx5IHNob3cgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGJ1dHRvbiBvZiB0aGUgVG9vbHRpcC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgcGFzc2VkIHRocm91Z2ggdG8gdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgc3RhdGVsZXNzUHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5CT1RUT00sXG4gICAgaGlkZURlbGF5OiAxMjAsXG4gICAgc2hvd0RlbGF5OiAwXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZXZlcmdyZWVuLXRvb2x0aXAtJHsrK2lkQ291bnRlcn1gLFxuICAgICAgd2lsbFNob3c6IGZhbHNlLFxuICAgICAgaXNTaG93bjogcHJvcHMuaXNTaG93bixcbiAgICAgIGlzU2hvd25CeVRhcmdldDogZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmVUYXJnZXQgPSBkZWJvdW5jZShcbiAgICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZVRhcmdldCxcbiAgICAgIHRoaXMucHJvcHMuaGlkZURlbGF5XG4gICAgKVxuXG4gICAgdGhpcy5oaWRlID0gZGVib3VuY2UodGhpcy5oaWRlLCB0aGlzLnByb3BzLmhpZGVEZWxheSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gIH1cblxuICBzaG93ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzU2hvd24pIHJldHVyblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lsbFNob3c6IHRydWVcbiAgICB9KVxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLndpbGxTaG93KSByZXR1cm5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Nob3duOiB0cnVlXG4gICAgICB9KVxuICAgIH0sIHRoaXMucHJvcHMuc2hvd0RlbGF5KVxuICB9XG5cbiAgaGlkZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU2hvd246IGZhbHNlLFxuICAgICAgd2lsbFNob3c6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclRhcmdldCA9ICh7IGdldFJlZiB9KSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdG9vbHRpcFRhcmdldFByb3BzID0ge1xuICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLnNob3csXG4gICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGlkZSxcbiAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5zdGF0ZS5pZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBzIGNhbiBiZSB1c2VkIHdpdGhpbiBhIFBvcG92ZXIgKG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZClcbiAgICAgKiBXaGVuIGEgVG9vbHRpcCBpcyB1c2VkIHdpdGhpbiBhIFBvcG92ZXIsIHRoZSBQb3BvdmVyIHBhc3Nlc1xuICAgICAqIGl0cyBwcm9wcyB0byB0aGUgVG9vbHRpcCBpbiBhIGBwb3BvdmVyUHJvcHNgIG9iamVjdC5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIGlmICh0aGlzLnByb3BzLnBvcG92ZXJQcm9wcykge1xuICAgICAgY29uc3Qge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgICBnZXRUYXJnZXRSZWYsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgICAgIGlzU2hvd24sXG4gICAgICAgIC4uLnBvcG92ZXJUYXJnZXRQcm9wc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgfSA9IHRoaXMucHJvcHMucG9wb3ZlclByb3BzXG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgLy8gQWRkIHRoZSBQb3BvdmVyIHByb3BzIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgIC4uLnBvcG92ZXJUYXJnZXRQcm9wcyxcbiAgICAgICAgLy8gQWRkIHRoZSBUb29sdGlwIHByb3BzIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgIC4uLnRvb2x0aXBUYXJnZXRQcm9wcyxcblxuICAgICAgICBpbm5lclJlZjogcmVmID0+IHtcbiAgICAgICAgICAvLyBHZXQgdGhlIHJlZiBmb3IgdGhlIFRvb2x0aXAuXG4gICAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgICAgICAvLyBQYXNzIHRoZSByZWYgdG8gdGhlIFBvcG92ZXIuXG4gICAgICAgICAgZ2V0VGFyZ2V0UmVmKHJlZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaXRoIG5vcm1hbCB1c2FnZSBvbmx5IHRoZSBwcm9wcyBmb3IgYSBUb29sdGlwIGFyZSBwYXNzZWQgdG8gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAuLi50b29sdGlwVGFyZ2V0UHJvcHMsXG4gICAgICBpbm5lclJlZjogcmVmID0+IHtcbiAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaXNQb3BvdmVyU2hvd24gPSAoKSA9PlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgdGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMgJiYgdGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMuaXNTaG93blxuXG4gIGhhbmRsZU1vdXNlRW50ZXJUYXJnZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1Nob3duQnlUYXJnZXQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZVRhcmdldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU2hvd25CeVRhcmdldDogZmFsc2UsXG4gICAgICB3aWxsU2hvdzogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBpc1Nob3duLFxuICAgICAgY29udGVudCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgc3RhdGVsZXNzUHJvcHMgPSB7fVxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBpc1Nob3duOiBzdGF0ZUlzU2hvd24sIGlzU2hvd25CeVRhcmdldCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IHNob3duID1cbiAgICAgIChpc1Nob3duIHx8IHN0YXRlSXNTaG93biB8fCBpc1Nob3duQnlUYXJnZXQpICYmICF0aGlzLmlzUG9wb3ZlclNob3duKClcblxuICAgIC8vIFRvb2x0aXAgd2FzIGV4cGxpY2l0bHkgc2V0IHRvIG5vdCBiZSBzaG93blxuICAgIGlmIChpc1Nob3duID09PSBmYWxzZSkge1xuICAgICAgc2hvd24gPSBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9zaXRpb25lclxuICAgICAgICB0YXJnZXQ9eyh7IGdldFJlZiB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFyZ2V0KHsgZ2V0UmVmIH0pXG4gICAgICAgIH19XG4gICAgICAgIGlzU2hvd249e3Nob3dufVxuICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXsxNjB9XG4gICAgICA+XG4gICAgICAgIHsoeyBjc3MsIHN0eWxlLCBzdGF0ZSwgZ2V0UmVmIH0pID0+IChcbiAgICAgICAgICA8VG9vbHRpcFN0YXRlbGVzc1xuICAgICAgICAgICAgaWQ9e3RoaXMuc3RhdGUuaWR9XG4gICAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgICAgaW5uZXJSZWY9e3JlZiA9PiBnZXRSZWYocmVmKX1cbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJUYXJnZXR9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZVRhcmdldH1cbiAgICAgICAgICAgIHsuLi5zdGF0ZWxlc3NQcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgIHN0YXRlbGVzc1Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY3NzID8gZ2xhbW9yQ3NzKGNzcykudG9TdHJpbmcoKSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICA8L1Rvb2x0aXBTdGF0ZWxlc3M+XG4gICAgICAgICl9XG4gICAgICA8L1Bvc2l0aW9uZXI+XG4gICAgKVxuICB9XG59XG4iXX0=
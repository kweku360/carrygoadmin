import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import { IconWrapper } from '../../icons/src/IconWrapper';
import TableHeaderCell from './TableHeaderCell';
var invisibleInputClass = css({
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',
  '&:focus': {
    outline: 'none'
  },
  '&::placeholder': {
    color: "rgba(67, 90, 111, 0.7)"
  }
}).toString();

var SearchTableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(SearchTableHeaderCell, _PureComponent);

  var _super = _createSuper(SearchTableHeaderCell);

  function SearchTableHeaderCell() {
    _classCallCheck(this, SearchTableHeaderCell);

    return _super.apply(this, arguments);
  }

  _createClass(SearchTableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          children = _this$props.children,
          _onChange = _this$props.onChange,
          autoFocus = _this$props.autoFocus,
          spellCheck = _this$props.spellCheck,
          placeholder = _this$props.placeholder,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"]);

      return React.createElement(TableHeaderCell, props, React.createElement(IconWrapper, {
        icon: icon,
        color: "muted",
        marginLeft: 2,
        marginRight: 10,
        size: 12
      }), React.createElement(Text, {
        is: "input",
        size: 300,
        flex: "1",
        className: invisibleInputClass,
        value: value,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        autoFocus: autoFocus,
        spellCheck: spellCheck,
        fontWeight: 500,
        marginLeft: -2,
        paddingLeft: 0,
        placeholder: placeholder
      }));
    }
  }]);

  return SearchTableHeaderCell;
}(PureComponent);

SearchTableHeaderCell.displayName = "SearchTableHeaderCell";

_defineProperty(SearchTableHeaderCell, "propTypes", _objectSpread({}, TableHeaderCell.propTypes, {
  /**
   * The value of the input.
   */
  value: PropTypes.string,

  /**
   * Handler to be called when the input changes.
   */
  onChange: PropTypes.func,

  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: PropTypes.bool,

  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: PropTypes.bool,

  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: PropTypes.string,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: PropTypes.node
}));

_defineProperty(SearchTableHeaderCell, "defaultProps", {
  onChange: function onChange() {},
  spellCheck: true,
  placeholder: 'Filter...',
  icon: 'search'
});

export { SearchTableHeaderCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VhcmNoVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlRleHQiLCJJY29uV3JhcHBlciIsIlRhYmxlSGVhZGVyQ2VsbCIsImludmlzaWJsZUlucHV0Q2xhc3MiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJvdXRsaW5lIiwiY29sb3IiLCJ0b1N0cmluZyIsIlNlYXJjaFRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwidmFsdWUiLCJjaGlsZHJlbiIsIm9uQ2hhbmdlIiwiYXV0b0ZvY3VzIiwic3BlbGxDaGVjayIsInBsYWNlaG9sZGVyIiwiaWNvbiIsImUiLCJ0YXJnZXQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLDZCQUE1QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsbUJBQTVCO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUdQLEdBQUcsQ0FBQztBQUM5QlEsRUFBQUEsTUFBTSxFQUFFLE1BRHNCO0FBRTlCQyxFQUFBQSxlQUFlLEVBQUUsYUFGYTtBQUc5QkMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFIWTtBQUk5QkMsRUFBQUEsYUFBYSxFQUFFLE1BSmU7QUFLOUJDLEVBQUFBLG1CQUFtQixFQUFFLGFBTFM7QUFPOUIsYUFBVztBQUNUQyxJQUFBQSxPQUFPLEVBQUU7QUFEQSxHQVBtQjtBQVc5QixvQkFBa0I7QUFDaEJDLElBQUFBLEtBQUs7QUFEVztBQVhZLENBQUQsQ0FBSCxDQWN6QkMsUUFkeUIsRUFBNUI7O0lBZ0JxQkMscUI7Ozs7Ozs7Ozs7Ozs7NkJBNkNWO0FBQUEsd0JBVUgsS0FBS0MsS0FWRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBR0xDLFFBSEssZUFHTEEsUUFISztBQUFBLFVBSUxDLFNBSkssZUFJTEEsUUFKSztBQUFBLFVBS0xDLFNBTEssZUFLTEEsU0FMSztBQUFBLFVBTUxDLFVBTkssZUFNTEEsVUFOSztBQUFBLFVBT0xDLFdBUEssZUFPTEEsV0FQSztBQUFBLFVBUUxDLElBUkssZUFRTEEsSUFSSztBQUFBLFVBU0ZQLEtBVEU7O0FBWVAsYUFDRSxvQkFBQyxlQUFELEVBQXFCQSxLQUFyQixFQUNFLG9CQUFDLFdBQUQ7QUFDRSxRQUFBLElBQUksRUFBRU8sSUFEUjtBQUVFLFFBQUEsS0FBSyxFQUFDLE9BRlI7QUFHRSxRQUFBLFVBQVUsRUFBRSxDQUhkO0FBSUUsUUFBQSxXQUFXLEVBQUUsRUFKZjtBQUtFLFFBQUEsSUFBSSxFQUFFO0FBTFIsUUFERixFQVFFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxPQURMO0FBRUUsUUFBQSxJQUFJLEVBQUUsR0FGUjtBQUdFLFFBQUEsSUFBSSxFQUFDLEdBSFA7QUFJRSxRQUFBLFNBQVMsRUFBRWpCLG1CQUpiO0FBS0UsUUFBQSxLQUFLLEVBQUVXLEtBTFQ7QUFNRSxRQUFBLFFBQVEsRUFBRSxrQkFBQU8sQ0FBQztBQUFBLGlCQUFJTCxTQUFRLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTUixLQUFWLENBQVo7QUFBQSxTQU5iO0FBT0UsUUFBQSxTQUFTLEVBQUVHLFNBUGI7QUFRRSxRQUFBLFVBQVUsRUFBRUMsVUFSZDtBQVNFLFFBQUEsVUFBVSxFQUFFLEdBVGQ7QUFVRSxRQUFBLFVBQVUsRUFBRSxDQUFDLENBVmY7QUFXRSxRQUFBLFdBQVcsRUFBRSxDQVhmO0FBWUUsUUFBQSxXQUFXLEVBQUVDO0FBWmYsUUFSRixDQURGO0FBeUJEOzs7O0VBbEZnRHJCLGE7O0FBQTlCYyxxQjs7Z0JBQUFBLHFCLGlDQUtkVixlQUFlLENBQUNxQixTO0FBRW5COzs7QUFHQVQsRUFBQUEsS0FBSyxFQUFFZixTQUFTLENBQUN5QixNOztBQUVqQjs7O0FBR0FSLEVBQUFBLFFBQVEsRUFBRWpCLFNBQVMsQ0FBQzBCLEk7O0FBRXBCOzs7QUFHQVIsRUFBQUEsU0FBUyxFQUFFbEIsU0FBUyxDQUFDMkIsSTs7QUFFckI7OztBQUdBUixFQUFBQSxVQUFVLEVBQUVuQixTQUFTLENBQUMyQixJOztBQUV0Qjs7O0FBR0FQLEVBQUFBLFdBQVcsRUFBRXBCLFNBQVMsQ0FBQ3lCLE07O0FBRXZCOzs7QUFHQUosRUFBQUEsSUFBSSxFQUFFckIsU0FBUyxDQUFDNEI7OztnQkFuQ0NmLHFCLGtCQXNDRztBQUNwQkksRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FERTtBQUVwQkUsRUFBQUEsVUFBVSxFQUFFLElBRlE7QUFHcEJDLEVBQUFBLFdBQVcsRUFBRSxXQUhPO0FBSXBCQyxFQUFBQSxJQUFJLEVBQUU7QUFKYyxDOztTQXRDSFIscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uV3JhcHBlciB9IGZyb20gJy4uLy4uL2ljb25zL3NyYy9JY29uV3JhcHBlcidcbmltcG9ydCBUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9UYWJsZUhlYWRlckNlbGwnXG5cbmNvbnN0IGludmlzaWJsZUlucHV0Q2xhc3MgPSBjc3Moe1xuICBib3JkZXI6ICdub25lJyxcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIE1vekFwcGVhcmFuY2U6ICdub25lJyxcbiAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcblxuICAnJjpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZSdcbiAgfSxcblxuICAnJjo6cGxhY2Vob2xkZXInOiB7XG4gICAgY29sb3I6IGByZ2JhKDY3LCA5MCwgMTExLCAwLjcpYFxuICB9XG59KS50b1N0cmluZygpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFRhYmxlSGVhZGVyQ2VsbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUYWJsZUhlYWRlckNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRhYmxlSGVhZGVyQ2VsbC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIGlucHV0LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgaW5wdXQgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgYXV0b21hdGljYWxseSBmb2N1c2VkIG9uIGNvbXBvbmVudCByZW5kZXIuXG4gICAgICovXG4gICAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciB0byBhcHBseSBzcGVsbCBjaGVja2luZyB0byB0aGUgY29udGVudC5cbiAgICAgKi9cbiAgICBzcGVsbENoZWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRleHQgdG8gZGlzcGxheSBpbiB0aGUgaW5wdXQgaWYgdGhlIGlucHV0IGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIEV2ZXJncmVlbiBvciBjdXN0b20gaWNvbiBiZWZvcmUgdGhlIGxhYmVsLlxuICAgICAqL1xuICAgIGljb246IFByb3BUeXBlcy5ub2RlXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBzcGVsbENoZWNrOiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyOiAnRmlsdGVyLi4uJyxcbiAgICBpY29uOiAnc2VhcmNoJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIHNwZWxsQ2hlY2ssXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGljb24sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlSGVhZGVyQ2VsbCB7Li4ucHJvcHN9PlxuICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGNvbG9yPVwibXV0ZWRcIlxuICAgICAgICAgIG1hcmdpbkxlZnQ9ezJ9XG4gICAgICAgICAgbWFyZ2luUmlnaHQ9ezEwfVxuICAgICAgICAgIHNpemU9ezEyfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnZpc2libGVJbnB1dENsYXNzfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XG4gICAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgICBmb250V2VpZ2h0PXs1MDB9XG4gICAgICAgICAgbWFyZ2luTGVmdD17LTJ9XG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZUhlYWRlckNlbGw+XG4gICAgKVxuICB9XG59XG4iXX0=
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Heading } from '../../typography';
import { IconButton } from '../../buttons';
import { CrossIcon } from '../../icons';
import OptionsList from './OptionsList';
import OptionShapePropType from './OptionShapePropType';

var DefaultTitleView = function DefaultTitleView(_ref) {
  var close = _ref.close,
      title = _ref.title,
      headerHeight = _ref.headerHeight;
  return React.createElement(Pane, {
    display: "flex",
    alignItems: "center",
    borderBottom: "default",
    padding: 8,
    height: headerHeight,
    boxSizing: "border-box"
  }, React.createElement(Pane, {
    flex: "1",
    display: "flex",
    alignItems: "center"
  }, React.createElement(Heading, {
    size: 400
  }, title)), React.createElement(IconButton, {
    icon: React.createElement(CrossIcon, null),
    appearance: "minimal",
    height: 24,
    onClick: close
  }));
};

DefaultTitleView.displayName = "DefaultTitleView";
DefaultTitleView.propTypes = {
  close: PropTypes.func,
  title: PropTypes.string,
  headerHeight: PropTypes.number
};

var SelectMenuContent = /*#__PURE__*/function (_PureComponent) {
  _inherits(SelectMenuContent, _PureComponent);

  var _super = _createSuper(SelectMenuContent);

  function SelectMenuContent() {
    _classCallCheck(this, SelectMenuContent);

    return _super.apply(this, arguments);
  }

  _createClass(SelectMenuContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options,
          hasTitle = _this$props.hasTitle,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          close = _this$props.close,
          listProps = _this$props.listProps,
          titleView = _this$props.titleView,
          detailView = _this$props.detailView,
          emptyView = _this$props.emptyView,
          isMultiSelect = _this$props.isMultiSelect,
          closeOnSelect = _this$props.closeOnSelect;
      var headerHeight = 40;
      var optionsListHeight = hasTitle ? height - headerHeight : height;
      var hasDetailView = Boolean(detailView);
      var hasEmptyView = Boolean(emptyView);
      return React.createElement(Pane, {
        display: "flex",
        height: height
      }, React.createElement(Pane, {
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        borderRight: hasDetailView ? 'muted' : null
      }, hasTitle && titleView({
        close: close,
        title: title,
        headerHeight: headerHeight
      }), options.length === 0 && hasEmptyView ? React.createElement(Pane, {
        height: optionsListHeight
      }, emptyView) : React.createElement(OptionsList, _extends({
        height: optionsListHeight,
        hasFilter: hasFilter,
        filterPlaceholder: filterPlaceholder,
        filterIcon: filterIcon,
        options: options,
        isMultiSelect: isMultiSelect,
        close: close,
        closeOnSelect: closeOnSelect
      }, listProps))), hasDetailView && detailView);
    }
  }]);

  return SelectMenuContent;
}(PureComponent);

SelectMenuContent.displayName = "SelectMenuContent";

_defineProperty(SelectMenuContent, "propTypes", {
  close: PropTypes.func,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  headerHeight: PropTypes.number,
  options: PropTypes.arrayOf(OptionShapePropType),
  hasTitle: PropTypes.bool,
  hasFilter: PropTypes.bool,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.node,
  listProps: PropTypes.shape(OptionsList.propTypes),

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * Node that is placed in the header section, above the options.
   */
  titleView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Node that is placed right next to the options.
   */
  detailView: PropTypes.node,

  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView: PropTypes.node
});

_defineProperty(SelectMenuContent, "defaultProps", {
  options: [],
  hasTitle: true,
  hasFilter: true,
  titleView: DefaultTitleView
});

export { SelectMenuContent as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudUNvbnRlbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiUGFuZSIsIkhlYWRpbmciLCJJY29uQnV0dG9uIiwiQ3Jvc3NJY29uIiwiT3B0aW9uc0xpc3QiLCJPcHRpb25TaGFwZVByb3BUeXBlIiwiRGVmYXVsdFRpdGxlVmlldyIsImNsb3NlIiwidGl0bGUiLCJoZWFkZXJIZWlnaHQiLCJwcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiU2VsZWN0TWVudUNvbnRlbnQiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImhhc1RpdGxlIiwiaGFzRmlsdGVyIiwiZmlsdGVyUGxhY2Vob2xkZXIiLCJmaWx0ZXJJY29uIiwibGlzdFByb3BzIiwidGl0bGVWaWV3IiwiZGV0YWlsVmlldyIsImVtcHR5VmlldyIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0Iiwib3B0aW9uc0xpc3RIZWlnaHQiLCJoYXNEZXRhaWxWaWV3IiwiQm9vbGVhbiIsImhhc0VtcHR5VmlldyIsImxlbmd0aCIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJib29sIiwibm9kZSIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixrQkFBeEI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGVBQTNCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsZUFBeEI7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFB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QVRaO0FBVWpCVSxFQUFBQSxVQUFVLEVBQUV2QixTQUFTLENBQUNzQyxJQVZMO0FBV2pCZCxFQUFBQSxTQUFTLEVBQUV4QixTQUFTLENBQUN1QyxLQUFWLENBQWdCbEMsV0FBVyxDQUFDTSxTQUE1QixDQVhNOztBQWFqQjs7O0FBR0FpQixFQUFBQSxhQUFhLEVBQUU1QixTQUFTLENBQUNxQyxJQWhCUjs7QUFrQmpCOzs7QUFHQVIsRUFBQUEsYUFBYSxFQUFFN0IsU0FBUyxDQUFDcUMsSUFyQlI7O0FBdUJqQjs7O0FBR0FaLEVBQUFBLFNBQVMsRUFBRXpCLFNBQVMsQ0FBQ21DLFNBQVYsQ0FBb0IsQ0FBQ25DLFNBQVMsQ0FBQ1ksSUFBWCxFQUFpQlosU0FBUyxDQUFDc0MsSUFBM0IsQ0FBcEIsQ0ExQk07O0FBNEJqQjs7O0FBR0FaLEVBQUFBLFVBQVUsRUFBRTFCLFNBQVMsQ0FBQ3NDLElBL0JMOztBQWlDakI7OztBQUdBWCxFQUFBQSxTQUFTLEVBQUUzQixTQUFTLENBQUNzQztBQXBDSixDOztnQkFEQXZCLGlCLGtCQXdDRztBQUNwQkksRUFBQUEsT0FBTyxFQUFFLEVBRFc7QUFFcEJDLEVBQUFBLFFBQVEsRUFBRSxJQUZVO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUUsSUFIUztBQUlwQkksRUFBQUEsU0FBUyxFQUFFbEI7QUFKUyxDOztTQXhDSFEsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCBPcHRpb25zTGlzdCBmcm9tICcuL09wdGlvbnNMaXN0J1xuaW1wb3J0IE9wdGlvblNoYXBlUHJvcFR5cGUgZnJvbSAnLi9PcHRpb25TaGFwZVByb3BUeXBlJ1xuXG5jb25zdCBEZWZhdWx0VGl0bGVWaWV3ID0gKHsgY2xvc2UsIHRpdGxlLCBoZWFkZXJIZWlnaHQgfSkgPT4gKFxuICA8UGFuZVxuICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICBib3JkZXJCb3R0b209XCJkZWZhdWx0XCJcbiAgICBwYWRkaW5nPXs4fVxuICAgIGhlaWdodD17aGVhZGVySGVpZ2h0fVxuICAgIGJveFNpemluZz1cImJvcmRlci1ib3hcIlxuICA+XG4gICAgPFBhbmUgZmxleD1cIjFcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgIDxIZWFkaW5nIHNpemU9ezQwMH0+e3RpdGxlfTwvSGVhZGluZz5cbiAgICA8L1BhbmU+XG4gICAgPEljb25CdXR0b25cbiAgICAgIGljb249ezxDcm9zc0ljb24gLz59XG4gICAgICBhcHBlYXJhbmNlPVwibWluaW1hbFwiXG4gICAgICBoZWlnaHQ9ezI0fVxuICAgICAgb25DbGljaz17Y2xvc2V9XG4gICAgLz5cbiAgPC9QYW5lPlxuKVxuXG5EZWZhdWx0VGl0bGVWaWV3LnByb3BUeXBlcyA9IHtcbiAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RNZW51Q29udGVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihPcHRpb25TaGFwZVByb3BUeXBlKSxcbiAgICBoYXNUaXRsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWx0ZXJJY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgICBsaXN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZShPcHRpb25zTGlzdC5wcm9wVHlwZXMpLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICAgKi9cbiAgICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qXG4gICAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTm9kZSB0aGF0IGlzIHBsYWNlZCBpbiB0aGUgaGVhZGVyIHNlY3Rpb24sIGFib3ZlIHRoZSBvcHRpb25zLlxuICAgICAqL1xuICAgIHRpdGxlVmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBOb2RlIHRoYXQgaXMgcGxhY2VkIHJpZ2h0IG5leHQgdG8gdGhlIG9wdGlvbnMuXG4gICAgICovXG4gICAgZGV0YWlsVmlldzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBOb2RlIHRoYXQgaXMgZGlzcGxheWVkIGluc3RlYWQgb2Ygb3B0aW9ucyBsaXN0IHdoZW4gdGhlcmUgYXJlIG5vIG9wdGlvbnMuXG4gICAgICovXG4gICAgZW1wdHlWaWV3OiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBoYXNUaXRsZTogdHJ1ZSxcbiAgICBoYXNGaWx0ZXI6IHRydWUsXG4gICAgdGl0bGVWaWV3OiBEZWZhdWx0VGl0bGVWaWV3XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBoYXNUaXRsZSxcbiAgICAgIGhhc0ZpbHRlcixcbiAgICAgIGZpbHRlclBsYWNlaG9sZGVyLFxuICAgICAgZmlsdGVySWNvbixcbiAgICAgIGNsb3NlLFxuICAgICAgbGlzdFByb3BzLFxuICAgICAgdGl0bGVWaWV3LFxuICAgICAgZGV0YWlsVmlldyxcbiAgICAgIGVtcHR5VmlldyxcbiAgICAgIGlzTXVsdGlTZWxlY3QsXG4gICAgICBjbG9zZU9uU2VsZWN0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IDQwXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RIZWlnaHQgPSBoYXNUaXRsZSA/IGhlaWdodCAtIGhlYWRlckhlaWdodCA6IGhlaWdodFxuXG4gICAgY29uc3QgaGFzRGV0YWlsVmlldyA9IEJvb2xlYW4oZGV0YWlsVmlldylcbiAgICBjb25zdCBoYXNFbXB0eVZpZXcgPSBCb29sZWFuKGVtcHR5VmlldylcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgPFBhbmVcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGJvcmRlclJpZ2h0PXtoYXNEZXRhaWxWaWV3ID8gJ211dGVkJyA6IG51bGx9XG4gICAgICAgID5cbiAgICAgICAgICB7aGFzVGl0bGUgJiYgdGl0bGVWaWV3KHsgY2xvc2UsIHRpdGxlLCBoZWFkZXJIZWlnaHQgfSl9XG4gICAgICAgICAge29wdGlvbnMubGVuZ3RoID09PSAwICYmIGhhc0VtcHR5VmlldyA/IChcbiAgICAgICAgICAgIDxQYW5lIGhlaWdodD17b3B0aW9uc0xpc3RIZWlnaHR9PntlbXB0eVZpZXd9PC9QYW5lPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8T3B0aW9uc0xpc3RcbiAgICAgICAgICAgICAgaGVpZ2h0PXtvcHRpb25zTGlzdEhlaWdodH1cbiAgICAgICAgICAgICAgaGFzRmlsdGVyPXtoYXNGaWx0ZXJ9XG4gICAgICAgICAgICAgIGZpbHRlclBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgZmlsdGVySWNvbj17ZmlsdGVySWNvbn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgaXNNdWx0aVNlbGVjdD17aXNNdWx0aVNlbGVjdH1cbiAgICAgICAgICAgICAgY2xvc2U9e2Nsb3NlfVxuICAgICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXtjbG9zZU9uU2VsZWN0fVxuICAgICAgICAgICAgICB7Li4ubGlzdFByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIHtoYXNEZXRhaWxWaWV3ICYmIGRldGFpbFZpZXd9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXX0=
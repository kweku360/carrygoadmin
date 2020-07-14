import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import arrify from 'arrify';
import { Popover } from '../../popover';
import { Position } from '../../constants';
import { SearchIcon } from '../../icons';
import SelectMenuContent from './SelectMenuContent';
import OptionShapePropType from './OptionShapePropType';
import SelectedPropType from './SelectedPropType';

var SelectMenu = /*#__PURE__*/function (_PureComponent) {
  _inherits(SelectMenu, _PureComponent);

  var _super = _createSuper(SelectMenu);

  function SelectMenu() {
    var _this;

    _classCallCheck(this, SelectMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getDetailView", function (close, detailView) {
      if (typeof detailView === 'function') {
        return {
          detailView: detailView({
            close: close
          })
        };
      }

      if (detailView) {
        return {
          detailView: detailView
        };
      }

      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "getEmptyView", function (close, emptyView) {
      if (typeof emptyView === 'function') {
        return {
          emptyView: emptyView({
            close: close
          })
        };
      }

      if (emptyView) {
        return {
          emptyView: emptyView
        };
      }

      return {};
    });

    return _this;
  }

  _createClass(SelectMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options,
          selected = _this$props.selected,
          position = _this$props.position,
          hasTitle = _this$props.hasTitle,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          detailView = _this$props.detailView,
          emptyView = _this$props.emptyView,
          titleView = _this$props.titleView,
          isMultiSelect = _this$props.isMultiSelect,
          closeOnSelect = _this$props.closeOnSelect,
          props = _objectWithoutProperties(_this$props, ["title", "width", "height", "options", "selected", "position", "hasTitle", "hasFilter", "filterPlaceholder", "filterIcon", "detailView", "emptyView", "titleView", "isMultiSelect", "closeOnSelect"]);

      return React.createElement(Popover, _extends({
        minWidth: width,
        position: position,
        minHeight: height,
        content: function content(_ref) {
          var close = _ref.close;
          return React.createElement(SelectMenuContent, _extends({
            width: width,
            height: height,
            options: options,
            title: title,
            hasFilter: hasFilter,
            filterPlaceholder: filterPlaceholder,
            filterIcon: filterIcon,
            hasTitle: hasTitle,
            isMultiSelect: isMultiSelect,
            titleView: titleView,
            listProps: {
              onSelect: function onSelect(item) {
                _this2.props.onSelect(item);
              },
              onDeselect: function onDeselect(item) {
                _this2.props.onDeselect(item);
              },
              onFilterChange: _this2.props.onFilterChange,
              selected: arrify(selected)
            },
            close: close
          }, _this2.getDetailView(close, detailView), _this2.getEmptyView(close, emptyView), {
            closeOnSelect: closeOnSelect
          }));
        }
      }, props));
    }
  }]);

  return SelectMenu;
}(PureComponent);

SelectMenu.displayName = "SelectMenu";

_defineProperty(SelectMenu, "propTypes", {
  /**
   * The title of the Select Menu.
   */
  title: PropTypes.string,

  /**
   * The width of the Select Menu.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The height of the Select Menu.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The options to show in the menu.
   * [{ label: String, value: String | Number }]
   */
  options: PropTypes.arrayOf(OptionShapePropType),

  /**
   * Function that is called when an option is selected.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called when an option is deselected.
   */
  onDeselect: PropTypes.func,

  /**
   * The selected value/values.
   */
  selected: SelectedPropType,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, show the title.
   */
  hasTitle: PropTypes.bool,

  /**
   * When true, show the filter.
   */
  hasFilter: PropTypes.bool,

  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder: PropTypes.string,

  /**
   * The icon of the search filter.
   */
  filterIcon: PropTypes.node,

  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange: PropTypes.func,

  /**
   * The position of the Select Menu.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool
});

_defineProperty(SelectMenu, "defaultProps", {
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  width: 240,
  height: 248,
  position: Position.BOTTOM_LEFT,
  isMultiSelect: false,
  filterPlaceholder: 'Filter...',
  filterIcon: React.createElement(SearchIcon, null),
  closeOnSelect: false
});

export { SelectMenu as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJpZnkiLCJQb3BvdmVyIiwiUG9zaXRpb24iLCJTZWFyY2hJY29uIiwiU2VsZWN0TWVudUNvbnRlbnQiLCJPcHRpb25TaGFwZVByb3BUeXBlIiwiU2VsZWN0ZWRQcm9wVHlwZSIsIlNlbGVjdE1lbnUiLCJjbG9zZSIsImRldGFpbFZpZXciLCJlbXB0eVZpZXciLCJwcm9wcyIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwic2VsZWN0ZWQiLCJwb3NpdGlvbiIsImhhc1RpdGxlIiwiaGFzRmlsdGVyIiwiZmlsdGVyUGxhY2Vob2xkZXIiLCJmaWx0ZXJJY29uIiwidGl0bGVWaWV3IiwiaXNNdWx0aVNlbGVjdCIsImNsb3NlT25TZWxlY3QiLCJvblNlbGVjdCIsIml0ZW0iLCJvbkRlc2VsZWN0Iiwib25GaWx0ZXJDaGFuZ2UiLCJnZXREZXRhaWxWaWV3IiwiZ2V0RW1wdHlWaWV3Iiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXlPZiIsImZ1bmMiLCJib29sIiwibm9kZSIsIm9uZU9mIiwiVE9QIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJCT1RUT00iLCJCT1RUT01fTEVGVCIsIkJPVFRPTV9SSUdIVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixlQUF4QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixhQUEzQjtBQUNBLE9BQU9DLGlCQUFQLE1BQThCLHFCQUE5QjtBQUNBLE9BQU9DLG1CQUFQ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VSxFQUFFLHNCQUFNLENBQUUsQ0FGQTtBQUdwQmQsRUFBQUEsS0FBSyxFQUFFLEdBSGE7QUFJcEJDLEVBQUFBLE1BQU0sRUFBRSxHQUpZO0FBS3BCRyxFQUFBQSxRQUFRLEVBQUVmLFFBQVEsQ0FBQ3lDLFdBTEM7QUFNcEJwQixFQUFBQSxhQUFhLEVBQUUsS0FOSztBQU9wQkgsRUFBQUEsaUJBQWlCLEVBQUUsV0FQQztBQVFwQkMsRUFBQUEsVUFBVSxFQUFFLG9CQUFDLFVBQUQsT0FSUTtBQVNwQkcsRUFBQUEsYUFBYSxFQUFFO0FBVEssQzs7U0ExR0hqQixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBhcnJpZnkgZnJvbSAnYXJyaWZ5J1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJy4uLy4uL3BvcG92ZXInXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCBTZWxlY3RNZW51Q29udGVudCBmcm9tICcuL1NlbGVjdE1lbnVDb250ZW50J1xuaW1wb3J0IE9wdGlvblNoYXBlUHJvcFR5cGUgZnJvbSAnLi9PcHRpb25TaGFwZVByb3BUeXBlJ1xuaW1wb3J0IFNlbGVjdGVkUHJvcFR5cGUgZnJvbSAnLi9TZWxlY3RlZFByb3BUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RNZW51IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSBTZWxlY3QgTWVudS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIFNlbGVjdCBNZW51LlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbnMgdG8gc2hvdyBpbiB0aGUgbWVudS5cbiAgICAgKiBbeyBsYWJlbDogU3RyaW5nLCB2YWx1ZTogU3RyaW5nIHwgTnVtYmVyIH1dXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGFuIG9wdGlvbiBpcyBkZXNlbGVjdGVkLlxuICAgICAqL1xuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIHZhbHVlL3ZhbHVlcy5cbiAgICAgKi9cbiAgICBzZWxlY3RlZDogU2VsZWN0ZWRQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgbXVsdGkgc2VsZWN0IGlzIGFjY291bnRlZCBmb3IuXG4gICAgICovXG4gICAgaXNNdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgdGhlIHRpdGxlLlxuICAgICAqL1xuICAgIGhhc1RpdGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyB0aGUgZmlsdGVyLlxuICAgICAqL1xuICAgIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxhY2Vob2xkZXIgb2YgdGhlIHNlYXJjaCBmaWx0ZXIuXG4gICAgICovXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWNvbiBvZiB0aGUgc2VhcmNoIGZpbHRlci5cbiAgICAgKi9cbiAgICBmaWx0ZXJJY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGFzIHRoZSBvbkNoYW5nZSgpIGV2ZW50IGZvciB0aGUgZmlsdGVyLlxuICAgICAqL1xuICAgIG9uRmlsdGVyQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQb3NpdGlvbi5UT1AsXG4gICAgICBQb3NpdGlvbi5UT1BfTEVGVCxcbiAgICAgIFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9MRUZULFxuICAgICAgUG9zaXRpb24uQk9UVE9NX1JJR0hUXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBub2RlLCBvciBhIG5vZGUgaXRzZWxmLCB0aGF0IGlzXG4gICAgICogcmVuZGVyZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIFNlbGVjdCBNZW51IHRvIGdpdmUgYWRkaXRpb25hbFxuICAgICAqIGluZm9ybWF0aW9uIHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGRldGFpbFZpZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbm9kZSwgb3IgYSBub2RlIGl0c2VsZiwgdGhhdCBpc1xuICAgICAqIHJlbmRlcmVkIGluIHRoZSBoZWFkZXIgc2VjdGlvbiBvZiB0aGUgU2VsZWN0IE1lbnUgdG8gY3VzdG9taXplXG4gICAgICogdGhlIGhlYWRlci5cbiAgICAgKi9cbiAgICB0aXRsZVZpZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbm9kZSwgb3IgYSBub2RlIGl0c2VsZiwgdGhhdCBpc1xuICAgICAqIHJlbmRlcmVkIGluc3RlYWQgb2YgdGhlIG9wdGlvbnMgbGlzdCB3aGVuIHRoZXJlIGFyZSBubyBvcHRpb25zLlxuICAgICAqL1xuICAgIGVtcHR5VmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKlxuICAgICAqIFdoZW4gdHJ1ZSwgbWVudSBjbG9zZXMgb24gb3B0aW9uIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgb25EZXNlbGVjdDogKCkgPT4ge30sXG4gICAgd2lkdGg6IDI0MCxcbiAgICBoZWlnaHQ6IDI0OCxcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgaXNNdWx0aVNlbGVjdDogZmFsc2UsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6ICdGaWx0ZXIuLi4nLFxuICAgIGZpbHRlckljb246IDxTZWFyY2hJY29uIC8+LFxuICAgIGNsb3NlT25TZWxlY3Q6IGZhbHNlXG4gIH1cblxuICBnZXREZXRhaWxWaWV3ID0gKGNsb3NlLCBkZXRhaWxWaWV3KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkZXRhaWxWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZXRhaWxWaWV3OiBkZXRhaWxWaWV3KHsgY2xvc2UgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGV0YWlsVmlldykge1xuICAgICAgcmV0dXJuIHsgZGV0YWlsVmlldyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRFbXB0eVZpZXcgPSAoY2xvc2UsIGVtcHR5VmlldykgPT4ge1xuICAgIGlmICh0eXBlb2YgZW1wdHlWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbXB0eVZpZXc6IGVtcHR5Vmlldyh7IGNsb3NlIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVtcHR5Vmlldykge1xuICAgICAgcmV0dXJuIHsgZW1wdHlWaWV3IH1cbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBoYXNUaXRsZSxcbiAgICAgIGhhc0ZpbHRlcixcbiAgICAgIGZpbHRlclBsYWNlaG9sZGVyLFxuICAgICAgZmlsdGVySWNvbixcbiAgICAgIGRldGFpbFZpZXcsXG4gICAgICBlbXB0eVZpZXcsXG4gICAgICB0aXRsZVZpZXcsXG4gICAgICBpc011bHRpU2VsZWN0LFxuICAgICAgY2xvc2VPblNlbGVjdCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBtaW5XaWR0aD17d2lkdGh9XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgbWluSGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGNvbnRlbnQ9eyh7IGNsb3NlIH0pID0+IChcbiAgICAgICAgICA8U2VsZWN0TWVudUNvbnRlbnRcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgIGhhc0ZpbHRlcj17aGFzRmlsdGVyfVxuICAgICAgICAgICAgZmlsdGVyUGxhY2Vob2xkZXI9e2ZpbHRlclBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgZmlsdGVySWNvbj17ZmlsdGVySWNvbn1cbiAgICAgICAgICAgIGhhc1RpdGxlPXtoYXNUaXRsZX1cbiAgICAgICAgICAgIGlzTXVsdGlTZWxlY3Q9e2lzTXVsdGlTZWxlY3R9XG4gICAgICAgICAgICB0aXRsZVZpZXc9e3RpdGxlVmlld31cbiAgICAgICAgICAgIGxpc3RQcm9wcz17e1xuICAgICAgICAgICAgICBvblNlbGVjdDogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkRlc2VsZWN0OiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaXRlbSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25GaWx0ZXJDaGFuZ2U6IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UsXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiBhcnJpZnkoc2VsZWN0ZWQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xvc2U9e2Nsb3NlfVxuICAgICAgICAgICAgey4uLnRoaXMuZ2V0RGV0YWlsVmlldyhjbG9zZSwgZGV0YWlsVmlldyl9XG4gICAgICAgICAgICB7Li4udGhpcy5nZXRFbXB0eVZpZXcoY2xvc2UsIGVtcHR5Vmlldyl9XG4gICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXtjbG9zZU9uU2VsZWN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG4iXX0=
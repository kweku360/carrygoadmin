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
import fuzzaldrin from 'fuzzaldrin-plus';
import VirtualList from 'react-tiny-virtual-list';
import { Pane } from '../../layers';
import { SearchIcon } from '../../icons';
import { TableHead, SearchTableHeaderCell } from '../../table';
import OptionShapePropType from './OptionShapePropType';
import Option from './Option';
/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */

var fuzzyFilter = function fuzzyFilter(options, input, _ref) {
  var key = _ref.key;
  return fuzzaldrin.filter(options, input, {
    key: key
  });
};
/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */


var itemRenderer = function itemRenderer(props) {
  return React.createElement(Option, props);
};

itemRenderer.displayName = "itemRenderer";

var OptionsList = /*#__PURE__*/function (_PureComponent) {
  _inherits(OptionsList, _PureComponent);

  var _super = _createSuper(OptionsList);

  function OptionsList(props, context) {
    var _this;

    _classCallCheck(this, OptionsList);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "isSelected", function (item) {
      var selected = _this.state.selected;
      return Boolean(selected.find(function (selectedItem) {
        return selectedItem === item.value;
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "search", function (options) {
      var optionsFilter = _this.props.optionsFilter;
      var searchValue = _this.state.searchValue;

      if (searchValue.trim() === '') {
        return options;
      } // Preserve backwards compatibility with allowing custom filters, which accept array of strings


      if (typeof optionsFilter === 'function') {
        return optionsFilter(options.map(function (item) {
          return item.label;
        }), searchValue).map(function (name) {
          return options.find(function (item) {
            return item.label === name;
          });
        });
      }

      return fuzzyFilter(options, searchValue, {
        key: 'label'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentIndex", function () {
      var selected = _this.props.selected;

      var options = _this.getFilteredOptions();

      return options.findIndex(function (option) {
        return option.value === selected[selected.length - 1];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowUp') {
        _this.handleArrowUp();
      }

      if (e.key === 'ArrowDown') {
        _this.handleArrowDown();
      }

      if (e.key === 'Enter') {
        _this.handleEnter();
      }

      if (e.key === 'Escape') {
        _this.props.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleArrowUp", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() - 1;

      if (nextIndex < 0) {
        nextIndex = options.length - 1;
      }

      if (_this.isSelected(options[nextIndex])) {
        return;
      }

      onSelect(options[nextIndex]);
    });

    _defineProperty(_assertThisInitialized(_this), "handleArrowDown", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() + 1;

      if (nextIndex === options.length) {
        nextIndex = 0;
      }

      if (!_this.isSelected(options[nextIndex])) {
        onSelect(options[nextIndex]);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      var isSelected = _this.getCurrentIndex() !== -1;

      if (isSelected) {
        if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
          _this.props.close();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (searchValue) {
      _this.setState({
        searchValue: searchValue
      });

      _this.props.onFilterChange(searchValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (item) {
      if (_this.isSelected(item)) {
        _this.props.onDeselect(item);
      } else {
        _this.props.onSelect(item);
      }

      if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
        _this.props.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeselect", function (item) {
      _this.props.onDeselect(item);
    });

    _defineProperty(_assertThisInitialized(_this), "assignSearchRef", function (ref) {
      _this.searchRef = ref;
    });

    _this.state = {
      searchValue: props.defaultSearchValue,
      selected: props.selected
    };
    return _this;
  }

  _createClass(OptionsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var hasFilter = this.props.hasFilter;
      if (!hasFilter) return;
      /**
       * Hacky solution for broken autoFocus
       * https://github.com/segmentio/evergreen/issues/90
       */

      this.requestId = requestAnimationFrame(function () {
        _this2.searchRef.querySelector('input').focus();
      });
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.requestId);
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selected !== this.props.selected) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          selected: this.props.selected
        });
      }
    }
  }, {
    key: "getFilteredOptions",
    value: function getFilteredOptions() {
      var options = this.props.options;
      return this.search(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          originalOptions = _this$props.options,
          close = _this$props.close,
          closeOnSelect = _this$props.closeOnSelect,
          width = _this$props.width,
          height = _this$props.height,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          onFilterChange = _this$props.onFilterChange,
          selected = _this$props.selected,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          optionSize = _this$props.optionSize,
          _renderItem = _this$props.renderItem,
          optionsFilter = _this$props.optionsFilter,
          isMultiSelect = _this$props.isMultiSelect,
          defaultSearchValue = _this$props.defaultSearchValue,
          props = _objectWithoutProperties(_this$props, ["options", "close", "closeOnSelect", "width", "height", "onSelect", "onDeselect", "onFilterChange", "selected", "hasFilter", "filterPlaceholder", "filterIcon", "optionSize", "renderItem", "optionsFilter", "isMultiSelect", "defaultSearchValue"]);

      var options = this.search(originalOptions);
      var listHeight = height - (hasFilter ? 32 : 0);
      var currentIndex = this.getCurrentIndex();
      var scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
      return React.createElement(Pane, _extends({
        height: height,
        width: width,
        display: "flex",
        flexDirection: "column"
      }, props), hasFilter && React.createElement(TableHead, null, React.createElement(SearchTableHeaderCell, {
        onChange: this.handleChange,
        innerRef: this.assignSearchRef,
        borderRight: null,
        height: 32,
        placeholder: filterPlaceholder,
        icon: filterIcon
      })), React.createElement(Pane, {
        flex: 1
      }, React.createElement(VirtualList, {
        height: listHeight,
        width: "100%",
        itemSize: optionSize,
        itemCount: options.length,
        overscanCount: 20,
        scrollToAlignment: "auto",
        scrollToIndex: scrollToIndex || undefined,
        renderItem: function renderItem(_ref2) {
          var index = _ref2.index,
              style = _ref2.style;
          var item = options[index];

          var isSelected = _this3.isSelected(item);

          return _renderItem({
            key: item.value,
            label: item.label,
            icon: item.icon,
            style: style,
            height: optionSize,
            onSelect: function onSelect() {
              return _this3.handleSelect(item);
            },
            onDeselect: function onDeselect() {
              return _this3.handleDeselect(item);
            },
            isSelectable: !isSelected || isMultiSelect,
            isSelected: isSelected,
            disabled: item.disabled,
            tabIndex: 0
          });
        }
      })));
    }
  }]);

  return OptionsList;
}(PureComponent);

OptionsList.displayName = "OptionsList";

_defineProperty(OptionsList, "propTypes", {
  options: PropTypes.arrayOf(OptionShapePropType),
  close: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * This holds the values of the options
   */
  selected: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onFilterChange: PropTypes.func,
  hasFilter: PropTypes.bool,
  optionSize: PropTypes.number,
  renderItem: PropTypes.func,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.node,
  optionsFilter: PropTypes.func,
  defaultSearchValue: PropTypes.string
});

_defineProperty(OptionsList, "defaultProps", {
  options: [],

  /**
   * Including border bottom
   * For some reason passing height to TableRow doesn't work
   * TODO: fix hacky solution
   */
  optionSize: 33,
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onFilterChange: function onFilterChange() {},
  selected: [],
  renderItem: itemRenderer,
  filterPlaceholder: 'Filter...',
  filterIcon: React.createElement(SearchIcon, null),
  defaultSearchValue: ''
});

export { OptionsList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uc0xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnV6emFsZHJpbiIsIlZpcnR1YWxMaXN0IiwiUGFuZSIsIlNlYXJjaEljb24iLCJUYWJsZUhlYWQiLCJTZWFyY2hUYWJsZUhlYWRlckNlbGwiLCJPcHRpb25TaGFwZVByb3BUeXBlIiwiT3B0aW9uIiwiZnV6enlGaWx0ZXIiLCJvcHRpb25zIiwiaW5wdXQiLCJrZXkiLCJmaWx0ZXIiLCJpdGVtUmVuZGVyZXIiLCJwcm9wcyIsIk9wdGlvbnNMaXN0IiwiY29udGV4dCIsIml0ZW0iLCJzZWxlY3RlZCIsInN0YXRlIiwiQm9vbGVhbiIsImZpbmQiLCJzZWxlY3RlZEl0ZW0iLCJ2YWx1ZSIsIm9wdGlvbnNGaWx0ZXIiLCJzZWFyY2hWYWx1ZSIsInRyaW0iLCJtYXAiLCJsYWJlbCIsIm5hbWUiLCJnZXRGaWx0ZXJlZE9wdGlvbnMiLCJmaW5kSW5kZXgiLCJvcHRpb24iLCJsZW5ndGgiLCJlIiwiaGFuZGxlQXJyb3dVcCIsImhhbmRsZUFycm93RG93biIsImhhbmRsZUVudGVyIiwiY2xvc2UiLCJvblNlbGVjdCIsIm5leHRJbmRleCIsImdldEN1cnJlbnRJbmRleCIsImlzU2VsZWN0ZWQiLCJpc011bHRpU2VsZWN0IiwiY2xvc2VPblNlbGVjdCIsInNldFN0YXRlIiwib25GaWx0ZXJDaGFuZ2UiLCJvbkRlc2VsZWN0IiwicmVmIiwic2VhcmNoUmVmIiwiZGVmYXVsdFNlYXJjaFZhbHVlIiwiaGFzRmlsdGVyIiwicmVxdWVzdElkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmV2UHJvcHMiLCJzZWFyY2giLCJvcmlnaW5hbE9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVySWNvbiIsIm9wdGlvblNpemUiLCJyZW5kZXJJdGVtIiwibGlzdEhlaWdodCIsImN1cnJlbnRJbmRleCIsInNjcm9sbFRvSW5kZXgiLCJoYW5kbGVDaGFuZ2UiLCJhc3NpZ25TZWFyY2hSZWYiLCJ1bmRlZmluZWQiLCJpbmRleCIsInN0eWxlIiwiaWNvbiIsImhhbmRsZVNlbGVjdCIsImhhbmRsZURlc2VsZWN0IiwiaXNTZWxlY3RhYmxlIiwiZGlzYWJsZWQiLCJ0YWJJbmRleCIsImFycmF5T2YiLCJmdW5jIiwibnVtYmVyIiwiYm9vbCIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixpQkFBdkI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHlCQUF4QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGFBQTNCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMscUJBQXBCLFFBQWlELGFBQWpEO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjtBQUVBOzs7Ozs7O0FBTUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLFFBQTZCO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQy9DLFNBQU9YLFVBQVUsQ0FBQ1ksTUFBWCxDQUFrQkgsT0FBbEIsRUFBMkJDLEtBQTNCLEVBQWtDO0FBQUVDLElBQUFBLEdBQUcsRUFBSEE7QUFBRixHQUFsQyxDQUFQO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7QUFJQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFB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cEI1QixFQUFBQSxRQUFRLEVBQUUsRUFYVTtBQVlwQm1ELEVBQUFBLFVBQVUsRUFBRXhELFlBWlE7QUFhcEJxRCxFQUFBQSxpQkFBaUIsRUFBRSxXQWJDO0FBY3BCQyxFQUFBQSxVQUFVLEVBQUUsb0JBQUMsVUFBRCxPQWRRO0FBZXBCakIsRUFBQUEsa0JBQWtCLEVBQUU7QUFmQSxDOztTQW5DSG5DLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGZ1enphbGRyaW4gZnJvbSAnZnV6emFsZHJpbi1wbHVzJ1xuaW1wb3J0IFZpcnR1YWxMaXN0IGZyb20gJ3JlYWN0LXRpbnktdmlydHVhbC1saXN0J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IFRhYmxlSGVhZCwgU2VhcmNoVGFibGVIZWFkZXJDZWxsIH0gZnJvbSAnLi4vLi4vdGFibGUnXG5pbXBvcnQgT3B0aW9uU2hhcGVQcm9wVHlwZSBmcm9tICcuL09wdGlvblNoYXBlUHJvcFR5cGUnXG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJ1xuXG4vKipcbiAqIEZ1enphbGRyaW4tcGx1cyBpcyB0aGUgZGVmYXVsdCBmaWx0ZXIsIGJ1dCB5b3UgY2FuIHVzZSB5b3VyIG93blxuICogYXMgbG9uZyBhcyB0aGV5IGZvbGxvdyB0aGUgZm9sbG93aW5nIHNpZ25hdHVyZTpcbiAqIEBwYXJhbSBvcHRpb25zIDxBcnJheVtTdHJpbmddPiAtIFsnbGFiZWwnLCAnbGFiZWwyJywgLi4uXVxuICogQHBhcmFtIGlucHV0IDxTdHJpbmc+XG4gKi9cbmNvbnN0IGZ1enp5RmlsdGVyID0gKG9wdGlvbnMsIGlucHV0LCB7IGtleSB9KSA9PiB7XG4gIHJldHVybiBmdXp6YWxkcmluLmZpbHRlcihvcHRpb25zLCBpbnB1dCwgeyBrZXkgfSlcbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGl0ZW0gcmVuZGVyZXIgb2Ygb3B0aW9uc1xuICogeW91IGNhbiBwYXNzIGN1c3RvbSByZW5kZXJlcnMgYXMgbG9uZyBhcyB0aGV5IHdvcmsgdGhlIHNhbWUgYXMgdGhlIE9wdGlvblxuICovXG5jb25zdCBpdGVtUmVuZGVyZXIgPSBwcm9wcyA9PiA8T3B0aW9uIHsuLi5wcm9wc30gLz5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uc0xpc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihPcHRpb25TaGFwZVByb3BUeXBlKSxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICAgKi9cbiAgICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgbWVudSBjbG9zZXMgb24gb3B0aW9uIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaG9sZHMgdGhlIHZhbHVlcyBvZiB0aGUgb3B0aW9uc1xuICAgICAqL1xuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRmlsdGVyQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG9wdGlvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmVuZGVySXRlbTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVySWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgb3B0aW9uc0ZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGVmYXVsdFNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9wdGlvbnM6IFtdLFxuICAgIC8qKlxuICAgICAqIEluY2x1ZGluZyBib3JkZXIgYm90dG9tXG4gICAgICogRm9yIHNvbWUgcmVhc29uIHBhc3NpbmcgaGVpZ2h0IHRvIFRhYmxlUm93IGRvZXNuJ3Qgd29ya1xuICAgICAqIFRPRE86IGZpeCBoYWNreSBzb2x1dGlvblxuICAgICAqL1xuICAgIG9wdGlvblNpemU6IDMzLFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbkRlc2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbkZpbHRlckNoYW5nZTogKCkgPT4ge30sXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIHJlbmRlckl0ZW06IGl0ZW1SZW5kZXJlcixcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogJ0ZpbHRlci4uLicsXG4gICAgZmlsdGVySWNvbjogPFNlYXJjaEljb24gLz4sXG4gICAgZGVmYXVsdFNlYXJjaFZhbHVlOiAnJ1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hWYWx1ZTogcHJvcHMuZGVmYXVsdFNlYXJjaFZhbHVlLFxuICAgICAgc2VsZWN0ZWQ6IHByb3BzLnNlbGVjdGVkXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBoYXNGaWx0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWhhc0ZpbHRlcikgcmV0dXJuXG4gICAgLyoqXG4gICAgICogSGFja3kgc29sdXRpb24gZm9yIGJyb2tlbiBhdXRvRm9jdXNcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vc2VnbWVudGlvL2V2ZXJncmVlbi9pc3N1ZXMvOTBcbiAgICAgKi9cbiAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFJlZi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKClcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RJZClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bilcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnNlbGVjdGVkICE9PSB0aGlzLnByb3BzLnNlbGVjdGVkKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZDogdGhpcy5wcm9wcy5zZWxlY3RlZFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpc1NlbGVjdGVkID0gaXRlbSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIEJvb2xlYW4oc2VsZWN0ZWQuZmluZChzZWxlY3RlZEl0ZW0gPT4gc2VsZWN0ZWRJdGVtID09PSBpdGVtLnZhbHVlKSlcbiAgfVxuXG4gIHNlYXJjaCA9IG9wdGlvbnMgPT4ge1xuICAgIGNvbnN0IHsgb3B0aW9uc0ZpbHRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VhcmNoVmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChzZWFyY2hWYWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc1xuICAgIH1cblxuICAgIC8vIFByZXNlcnZlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggYWxsb3dpbmcgY3VzdG9tIGZpbHRlcnMsIHdoaWNoIGFjY2VwdCBhcnJheSBvZiBzdHJpbmdzXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zRmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc0ZpbHRlcihcbiAgICAgICAgb3B0aW9ucy5tYXAoaXRlbSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgICAgc2VhcmNoVmFsdWVcbiAgICAgICkubWFwKG5hbWUgPT4gb3B0aW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5sYWJlbCA9PT0gbmFtZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1enp5RmlsdGVyKG9wdGlvbnMsIHNlYXJjaFZhbHVlLCB7IGtleTogJ2xhYmVsJyB9KVxuICB9XG5cbiAgZ2V0Q3VycmVudEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoKVxuXG4gICAgcmV0dXJuIG9wdGlvbnMuZmluZEluZGV4KFxuICAgICAgb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRbc2VsZWN0ZWQubGVuZ3RoIC0gMV1cbiAgICApXG4gIH1cblxuICBnZXRGaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gdGhpcy5zZWFyY2gob3B0aW9ucylcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd1VwKClcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93RG93bigpXG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmhhbmRsZUVudGVyKClcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLnByb3BzLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBcnJvd1VwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoKVxuXG4gICAgbGV0IG5leHRJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgLSAxXG5cbiAgICBpZiAobmV4dEluZGV4IDwgMCkge1xuICAgICAgbmV4dEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZChvcHRpb25zW25leHRJbmRleF0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBvblNlbGVjdChvcHRpb25zW25leHRJbmRleF0pXG4gIH1cblxuICBoYW5kbGVBcnJvd0Rvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucygpXG5cbiAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSArIDFcblxuICAgIGlmIChuZXh0SW5kZXggPT09IG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBuZXh0SW5kZXggPSAwXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzU2VsZWN0ZWQob3B0aW9uc1tuZXh0SW5kZXhdKSkge1xuICAgICAgb25TZWxlY3Qob3B0aW9uc1tuZXh0SW5kZXhdKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpICE9PSAtMVxuXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpU2VsZWN0ICYmIHRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSBzZWFyY2hWYWx1ZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hWYWx1ZVxuICAgIH0pXG4gICAgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShzZWFyY2hWYWx1ZSlcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdCA9IGl0ZW0gPT4ge1xuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQoaXRlbSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25EZXNlbGVjdChpdGVtKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW0pXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLmlzTXVsdGlTZWxlY3QgJiYgdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZXNlbGVjdCA9IGl0ZW0gPT4ge1xuICAgIHRoaXMucHJvcHMub25EZXNlbGVjdChpdGVtKVxuICB9XG5cbiAgYXNzaWduU2VhcmNoUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLnNlYXJjaFJlZiA9IHJlZlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgIGNsb3NlLFxuICAgICAgY2xvc2VPblNlbGVjdCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25TZWxlY3QsXG4gICAgICBvbkRlc2VsZWN0LFxuICAgICAgb25GaWx0ZXJDaGFuZ2UsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGhhc0ZpbHRlcixcbiAgICAgIGZpbHRlclBsYWNlaG9sZGVyLFxuICAgICAgZmlsdGVySWNvbixcbiAgICAgIG9wdGlvblNpemUsXG4gICAgICByZW5kZXJJdGVtLFxuICAgICAgb3B0aW9uc0ZpbHRlcixcbiAgICAgIGlzTXVsdGlTZWxlY3QsXG4gICAgICBkZWZhdWx0U2VhcmNoVmFsdWUsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc2VhcmNoKG9yaWdpbmFsT3B0aW9ucylcbiAgICBjb25zdCBsaXN0SGVpZ2h0ID0gaGVpZ2h0IC0gKGhhc0ZpbHRlciA/IDMyIDogMClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpXG4gICAgY29uc3Qgc2Nyb2xsVG9JbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gLTEgPyAwIDogY3VycmVudEluZGV4XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7aGFzRmlsdGVyICYmIChcbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFNlYXJjaFRhYmxlSGVhZGVyQ2VsbFxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLmFzc2lnblNlYXJjaFJlZn1cbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ9e251bGx9XG4gICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgaWNvbj17ZmlsdGVySWNvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICl9XG4gICAgICAgIDxQYW5lIGZsZXg9ezF9PlxuICAgICAgICAgIDxWaXJ0dWFsTGlzdFxuICAgICAgICAgICAgaGVpZ2h0PXtsaXN0SGVpZ2h0fVxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGl0ZW1TaXplPXtvcHRpb25TaXplfVxuICAgICAgICAgICAgaXRlbUNvdW50PXtvcHRpb25zLmxlbmd0aH1cbiAgICAgICAgICAgIG92ZXJzY2FuQ291bnQ9ezIwfVxuICAgICAgICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQ9XCJhdXRvXCJcbiAgICAgICAgICAgIHNjcm9sbFRvSW5kZXg9e3Njcm9sbFRvSW5kZXggfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IG9wdGlvbnNbaW5kZXhdXG4gICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQoaXRlbSlcbiAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckl0ZW0oe1xuICAgICAgICAgICAgICAgIGtleTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBvcHRpb25TaXplLFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0OiAoKSA9PiB0aGlzLmhhbmRsZVNlbGVjdChpdGVtKSxcbiAgICAgICAgICAgICAgICBvbkRlc2VsZWN0OiAoKSA9PiB0aGlzLmhhbmRsZURlc2VsZWN0KGl0ZW0pLFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0YWJsZTogIWlzU2VsZWN0ZWQgfHwgaXNNdWx0aVNlbGVjdCxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpdGVtLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIHRhYkluZGV4OiAwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==
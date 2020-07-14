import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fuzzaldrin from 'fuzzaldrin-plus';
import Downshift from 'downshift';
import VirtualList from 'react-tiny-virtual-list';
import { Popover } from '../../popover';
import { Position } from '../../constants';
import { Heading } from '../../typography';
import { Pane } from '../../layers';
import AutocompleteItem from './AutocompleteItem';

var fuzzyFilter = function fuzzyFilter(itemToString) {
  if (itemToString) {
    return function (items, input) {
      var wrappedItems = items.map(function (item) {
        return {
          key: itemToString(item),
          item: item
        };
      });
      return fuzzaldrin.filter(wrappedItems, input, {
        key: 'key'
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };
  }

  return function (items, input) {
    return fuzzaldrin.filter(items, input);
  };
};

var noop = function noop() {};

var autocompleteItemRenderer = function autocompleteItemRenderer(props) {
  return React.createElement(AutocompleteItem, props);
};

autocompleteItemRenderer.displayName = "autocompleteItemRenderer";

// https://github.com/paypal/downshift/issues/164
var Autocomplete = /*#__PURE__*/function (_PureComponent) {
  _inherits(Autocomplete, _PureComponent);

  var _super = _createSuper(Autocomplete);

  function Autocomplete() {
    var _this;

    _classCallCheck(this, Autocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      targetWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "stateReducer", function (state, changes) {
      var items = _this.props.items;

      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
        return _objectSpread({}, changes, {
          highlightedIndex: items.indexOf(state.selectedItem)
        });
      }

      return changes;
    });

    _defineProperty(_assertThisInitialized(_this), "renderResults", function (_ref2) {
      var width = _ref2.width,
          inputValue = _ref2.inputValue,
          highlightedIndex = _ref2.highlightedIndex,
          selectedItem = _ref2.selectedItem,
          getItemProps = _ref2.getItemProps,
          getMenuProps = _ref2.getMenuProps;
      var _this$props = _this.props,
          title = _this$props.title,
          itemSize = _this$props.itemSize,
          itemsFilter = _this$props.itemsFilter,
          originalItems = _this$props.items,
          itemToString = _this$props.itemToString,
          _renderItem = _this$props.renderItem,
          popoverMaxHeight = _this$props.popoverMaxHeight,
          isFilterDisabled = _this$props.isFilterDisabled;
      var filter = itemsFilter || fuzzyFilter(itemToString);
      var items = isFilterDisabled || inputValue.trim() === '' ? originalItems : filter(originalItems, inputValue);
      if (items.length === 0) return null; // Pass the actual DOM ref to downshift, this fixes touch support

      var menuProps = getMenuProps();
      menuProps.innerRef = menuProps.ref;
      delete menuProps.ref;
      return React.createElement(Pane, _extends({
        width: width
      }, menuProps), title && React.createElement(Pane, {
        padding: 8,
        borderBottom: "muted"
      }, React.createElement(Heading, {
        size: 100
      }, title)), items.length > 0 && React.createElement(VirtualList, {
        width: "100%",
        height: Math.min(items.length * itemSize, popoverMaxHeight),
        itemSize: itemSize,
        itemCount: items.length,
        scrollToIndex: highlightedIndex || 0,
        overscanCount: 3,
        scrollToAlignment: "auto",
        renderItem: function renderItem(_ref3) {
          var index = _ref3.index,
              style = _ref3.style;
          var item = items[index];
          var itemString = itemToString(item);
          return _renderItem(getItemProps({
            item: item,
            key: itemString,
            index: index,
            style: style,
            children: itemString,
            isSelected: itemToString(selectedItem) === itemString,
            isHighlighted: highlightedIndex === index
          }));
        }
      }));
    });

    return _this;
  }

  _createClass(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        targetWidth: this.targetRef.getBoundingClientRect().width
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          itemSize = _this$props2.itemSize,
          position = _this$props2.position,
          renderItem = _this$props2.renderItem,
          itemsFilter = _this$props2.itemsFilter,
          popoverMaxHeight = _this$props2.popoverMaxHeight,
          popoverMinWidth = _this$props2.popoverMinWidth,
          props = _objectWithoutProperties(_this$props2, ["children", "itemSize", "position", "renderItem", "itemsFilter", "popoverMaxHeight", "popoverMinWidth"]);

      return React.createElement(Downshift, _extends({
        stateReducer: this.stateReducer,
        scrollIntoView: noop
      }, props), function (_ref4) {
        var isShown = _ref4.isOpen,
            inputValue = _ref4.inputValue,
            getItemProps = _ref4.getItemProps,
            getMenuProps = _ref4.getMenuProps,
            selectedItem = _ref4.selectedItem,
            highlightedIndex = _ref4.highlightedIndex,
            getRootProps = _ref4.getRootProps,
            restDownshiftProps = _objectWithoutProperties(_ref4, ["isOpen", "inputValue", "getItemProps", "getMenuProps", "selectedItem", "highlightedIndex", "getRootProps"]);

        return React.createElement(Pane, _extends({
          width: "100%"
        }, getRootProps({
          refKey: 'innerRef'
        })), React.createElement(Popover, {
          bringFocusInside: false,
          isShown: isShown,
          minWidth: popoverMinWidth,
          position: position || (_this2.state.targetWidth < popoverMinWidth ? Position.BOTTOM_LEFT : Position.BOTTOM),
          content: function content() {
            return _this2.renderResults({
              width: Math.max(_this2.state.targetWidth, popoverMinWidth),
              inputValue: inputValue,
              getItemProps: getItemProps,
              getMenuProps: getMenuProps,
              selectedItem: selectedItem,
              highlightedIndex: highlightedIndex
            });
          },
          minHeight: 0,
          animationDuration: 0
        }, function (_ref5) {
          var isShownPopover = _ref5.isShown,
              toggle = _ref5.toggle,
              _getRef = _ref5.getRef;
          return children(_objectSpread({
            isShown: isShownPopover,
            toggle: toggle,
            getRef: function getRef(ref) {
              // Use the ref internally to determine the width
              _this2.targetRef = ref;

              _getRef(ref);
            },
            inputValue: inputValue,
            selectedItem: selectedItem,
            highlightedIndex: highlightedIndex
          }, restDownshiftProps));
        }));
      });
    }
  }]);

  return Autocomplete;
}(PureComponent);

Autocomplete.displayName = "Autocomplete";

_defineProperty(Autocomplete, "propTypes", _objectSpread({
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * An array of items to be used as options for the select
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: PropTypes.any,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func.isRequired,

  /**
   * Function that will render the 'filter' component.
   */
  children: PropTypes.func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: PropTypes.number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: PropTypes.func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: PropTypes.func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: PropTypes.bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: PropTypes.number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: PropTypes.number
}, Downshift.propTypes));

_defineProperty(Autocomplete, "defaultProps", {
  itemToString: function itemToString(i) {
    return i ? String(i) : '';
  },
  itemSize: 32,
  isFilterDisabled: false,
  popoverMinWidth: 240,
  popoverMaxHeight: 240,
  renderItem: autocompleteItemRenderer
});

export { Autocomplete as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdXp6YWxkcmluIiwiRG93bnNoaWZ0IiwiVmlydHVhbExpc3QiLCJQb3BvdmVyIiwiUG9zaXRpb24iLCJIZWFkaW5nIiwiUGFuZSIsIkF1dG9jb21wbGV0ZUl0ZW0iLCJmdXp6eUZpbHRlciIsIml0ZW1Ub1N0cmluZyIsIml0ZW1zIiwiaW5wdXQiLCJ3cmFwcGVkSXRlbXMiLCJtYXAiLCJpdGVtIiwia2V5IiwiZmlsdGVyIiwibm9vcCIsImF1dG9jb21wbGV0ZUl0ZW1SZW5kZXJlciIsInByb3BzIiwiQXV0b2NvbXBsZXRlIiwidGFyZ2V0V2lkdGgiLCJzdGF0ZSIsImNoYW5nZXMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpc09wZW4iLCJoaWdobGlnaHRlZEluZGV4IiwiaW5kZXhPZiIsInNlbGVjdGVkSXRlbSIsIndpZHRoIiwiaW5wdXRWYWx1ZSIsImdldEl0ZW1Qcm9wcyIsImdldE1lbnVQcm9wcyIsInRpdGxlIiwiaXRlbVNpemUiLCJpdGVtc0ZpbHRlciIsIm9yaWdpbmFsSXRlbXMiLCJyZW5kZXJJdGVtIiwicG9wb3Zlck1heEhlaWdodCIsImlzRmlsdGVyRGlzYWJsZWQiLCJ0cmltIiwibGVuZ3RoIiwibWVudVByb3BzIiwiaW5uZXJSZWYiLCJyZWYiLCJNYXRoIiwibWluIiwiaW5kZXgiLCJzdHlsZSIsIml0ZW1TdHJpbmciLCJjaGlsZHJlbiIsImlzU2VsZWN0ZWQiLCJpc0hpZ2hsaWdodGVkIiwic2V0U3RhdGUiLCJ0YXJnZXRSZWYiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwb3NpdGlvbiIsInBvcG92ZXJNaW5XaWR0aCIsInN0YXRlUmVkdWNlciIsImlzU2hvd24iLCJnZXRSb290UHJvcHMiLCJyZXN0RG93bnNoaWZ0UHJvcHMiLCJyZWZLZXkiLCJCT1RUT01fTEVGVCIsIkJPVFRPTSIsInJlbmRlclJlc3VsdHMiLCJtYXgiLCJpc1Nob3duUG9wb3ZlciIsInRvZ2dsZSIsImdldFJlZiIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJhbnkiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTV9SSUdIVCIsIkxFRlQiLCJSSUdIVCIsImJvb2wiLCJwcm9wVHlwZXMiLCJpIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGlCQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsV0FBdEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHlCQUF4QjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsZUFBeEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGlCQUF6QjtBQUNBLFNBQVNDLE9BQVQsUUFBd0Isa0JBQXhCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG9CQUE3Qjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxZQUFZLEVBQUk7QUFDbEMsTUFBSUEsWUFBSixFQUFrQjtBQUNoQixXQUFPLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN2QixVQUFNQyxZQUFZLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxlQUFLO0FBQ3RDQyxVQUFBQSxHQUFHLEVBQUVOLFlBQVksQ0FBQ0ssSUFBRCxDQURxQjtBQUV0Q0EsVUFBQUEsSUFBSSxFQUFKQTtBQUZzQyxTQUFMO0FBQUEsT0FBZCxDQUFyQjtBQUtBLGFBQU9kLFVBQVUsQ0FDZGdCLE1BREksQ0FDR0os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QTlFSXJFLFksa0JBcUZHO0FBQ3BCWCxFQUFBQSxZQUFZLEVBQUUsc0JBQUFpRixDQUFDO0FBQUEsV0FBS0EsQ0FBQyxHQUFHQyxNQUFNLENBQUNELENBQUQsQ0FBVCxHQUFlLEVBQXJCO0FBQUEsR0FESztBQUVwQnJELEVBQUFBLFFBQVEsRUFBRSxFQUZVO0FBR3BCSyxFQUFBQSxnQkFBZ0IsRUFBRSxLQUhFO0FBSXBCa0IsRUFBQUEsZUFBZSxFQUFFLEdBSkc7QUFLcEJuQixFQUFBQSxnQkFBZ0IsRUFBRSxHQUxFO0FBTXBCRCxFQUFBQSxVQUFVLEVBQUV0QjtBQU5RLEM7O1NBckZIRSxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBmdXp6YWxkcmluIGZyb20gJ2Z1enphbGRyaW4tcGx1cydcbmltcG9ydCBEb3duc2hpZnQgZnJvbSAnZG93bnNoaWZ0J1xuaW1wb3J0IFZpcnR1YWxMaXN0IGZyb20gJ3JlYWN0LXRpbnktdmlydHVhbC1saXN0J1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJy4uLy4uL3BvcG92ZXInXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBBdXRvY29tcGxldGVJdGVtIGZyb20gJy4vQXV0b2NvbXBsZXRlSXRlbSdcblxuY29uc3QgZnV6enlGaWx0ZXIgPSBpdGVtVG9TdHJpbmcgPT4ge1xuICBpZiAoaXRlbVRvU3RyaW5nKSB7XG4gICAgcmV0dXJuIChpdGVtcywgaW5wdXQpID0+IHtcbiAgICAgIGNvbnN0IHdyYXBwZWRJdGVtcyA9IGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGtleTogaXRlbVRvU3RyaW5nKGl0ZW0pLFxuICAgICAgICBpdGVtXG4gICAgICB9KSlcblxuICAgICAgcmV0dXJuIGZ1enphbGRyaW5cbiAgICAgICAgLmZpbHRlcih3cmFwcGVkSXRlbXMsIGlucHV0LCB7IGtleTogJ2tleScgfSlcbiAgICAgICAgLm1hcCgoeyBpdGVtIH0pID0+IGl0ZW0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChpdGVtcywgaW5wdXQpID0+IGZ1enphbGRyaW4uZmlsdGVyKGl0ZW1zLCBpbnB1dClcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IGF1dG9jb21wbGV0ZUl0ZW1SZW5kZXJlciA9IHByb3BzID0+IDxBdXRvY29tcGxldGVJdGVtIHsuLi5wcm9wc30gLz5cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BheXBhbC9kb3duc2hpZnQvaXNzdWVzLzE2NFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b2NvbXBsZXRlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBOb2RlLlxuICAgICAqIEl0IHdpbGwgcHJvdmlkZSBhIHRpdGxlIGZvciB0aGUgaXRlbXNcbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGl0ZW1zIHRvIGJlIHVzZWQgYXMgb3B0aW9ucyBmb3IgdGhlIHNlbGVjdFxuICAgICAqL1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCBJdGVtIHRvIGJlIHNob3duIG9uIHRoZSBhdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBJbiBjYXNlIHRoZSBhcnJheSBvZiBpdGVtcyBpcyBub3QgYW4gYXJyYXkgb2Ygc3RyaW5ncyxcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgb24gZWFjaCBpdGVtIHRvIHJldHVybiB0aGUgc3RyaW5nIHRoYXQgd2lsbCBiZSBzaG93biBvbiB0aGUgZmlsdGVyXG4gICAgICovXG4gICAgaXRlbVRvU3RyaW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIHJlbmRlciB0aGUgJ2ZpbHRlcicgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiBlYWNoIGl0ZW0gaW4gdGhlIGxpc3RcbiAgICAgKiBCZWNhdXNlIHRoZSBsaXN0IGlzIHZpcnR1YWxpemVkIHRoaXMgaXMgcmVxdWlyZWQgYmVmb3JlaGFuZC5cbiAgICAgKi9cbiAgICBpdGVtU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNvbXBvbmVudCB0byByZW5kZXIgdGhlIGl0ZW1cbiAgICAgKi9cbiAgICByZW5kZXJJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgUG9wb3ZlciB0aGUgQXV0b2NvbXBsZXRlIGlzIHJlbmRlcmVkIGluLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgUG9zaXRpb24uVE9QLFxuICAgICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgICBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gZmlsdGVyIHRoZSBpdGVtcy5cbiAgICAgKiBJdCBzaG91bGQgcmV0dXJuIGEgc3Vic2V0IG9mIHRoZSBpbml0aWFsIGl0ZW1zLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIFwiZnV6emFsZHJpbi1wbHVzXCIgcGFja2FnZSBpcyB1c2VkLlxuICAgICAqL1xuICAgIGl0ZW1zRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFByb3AgdGhhdCBlbmFibGVzIGFuZCBkaXNhYmxlcyBmaWx0ZXJpbmdcbiAgICAgKiBUcnVlOiBFbmFibGVzIEZpbHRlcmluZ1xuICAgICAqIEZhbHNlOiBEaXNhYmxlcyBGaWx0ZXJpbmdcbiAgICAgKi9cbiAgICBpc0ZpbHRlckRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIG1pbmltdW0gaGVpZ2h0IHRoZSByZXN1bHRzIGNvbnRhaW5lciB3aWxsIGJlXG4gICAgICovXG4gICAgcG9wb3Zlck1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbWF4aW11bSBoZWlnaHQgdGhlIHJlc3VsdHMgY29udGFpbmVyIHdpbGwgYmVcbiAgICAgKi9cbiAgICBwb3BvdmVyTWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLi4uRG93bnNoaWZ0LnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdGFyZ2V0V2lkdGg6IDBcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXRlbVRvU3RyaW5nOiBpID0+IChpID8gU3RyaW5nKGkpIDogJycpLFxuICAgIGl0ZW1TaXplOiAzMixcbiAgICBpc0ZpbHRlckRpc2FibGVkOiBmYWxzZSxcbiAgICBwb3BvdmVyTWluV2lkdGg6IDI0MCxcbiAgICBwb3BvdmVyTWF4SGVpZ2h0OiAyNDAsXG4gICAgcmVuZGVySXRlbTogYXV0b2NvbXBsZXRlSXRlbVJlbmRlcmVyXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhcmdldFdpZHRoOiB0aGlzLnRhcmdldFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgIH0pXG4gIH1cblxuICBzdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGNoYW5nZXMpID0+IHtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2hhbmdlcywgJ2lzT3BlbicpICYmXG4gICAgICBjaGFuZ2VzLmlzT3BlblxuICAgICkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY2hhbmdlcyxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogaXRlbXMuaW5kZXhPZihzdGF0ZS5zZWxlY3RlZEl0ZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZXNcbiAgfVxuXG4gIHJlbmRlclJlc3VsdHMgPSAoe1xuICAgIHdpZHRoLFxuICAgIGlucHV0VmFsdWUsXG4gICAgaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICBzZWxlY3RlZEl0ZW0sXG4gICAgZ2V0SXRlbVByb3BzLFxuICAgIGdldE1lbnVQcm9wc1xuICB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICBpdGVtU2l6ZSxcbiAgICAgIGl0ZW1zRmlsdGVyLFxuICAgICAgaXRlbXM6IG9yaWdpbmFsSXRlbXMsXG4gICAgICBpdGVtVG9TdHJpbmcsXG4gICAgICByZW5kZXJJdGVtLFxuICAgICAgcG9wb3Zlck1heEhlaWdodCxcbiAgICAgIGlzRmlsdGVyRGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZmlsdGVyID0gaXRlbXNGaWx0ZXIgfHwgZnV6enlGaWx0ZXIoaXRlbVRvU3RyaW5nKVxuICAgIGNvbnN0IGl0ZW1zID1cbiAgICAgIGlzRmlsdGVyRGlzYWJsZWQgfHwgaW5wdXRWYWx1ZS50cmltKCkgPT09ICcnXG4gICAgICAgID8gb3JpZ2luYWxJdGVtc1xuICAgICAgICA6IGZpbHRlcihvcmlnaW5hbEl0ZW1zLCBpbnB1dFZhbHVlKVxuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICAgIC8vIFBhc3MgdGhlIGFjdHVhbCBET00gcmVmIHRvIGRvd25zaGlmdCwgdGhpcyBmaXhlcyB0b3VjaCBzdXBwb3J0XG4gICAgY29uc3QgbWVudVByb3BzID0gZ2V0TWVudVByb3BzKClcbiAgICBtZW51UHJvcHMuaW5uZXJSZWYgPSBtZW51UHJvcHMucmVmXG4gICAgZGVsZXRlIG1lbnVQcm9wcy5yZWZcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSB3aWR0aD17d2lkdGh9IHsuLi5tZW51UHJvcHN9PlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgIDxQYW5lIHBhZGRpbmc9ezh9IGJvcmRlckJvdHRvbT1cIm11dGVkXCI+XG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPXsxMDB9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICB7aXRlbXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPFZpcnR1YWxMaXN0XG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PXtNYXRoLm1pbihpdGVtcy5sZW5ndGggKiBpdGVtU2l6ZSwgcG9wb3Zlck1heEhlaWdodCl9XG4gICAgICAgICAgICBpdGVtU2l6ZT17aXRlbVNpemV9XG4gICAgICAgICAgICBpdGVtQ291bnQ9e2l0ZW1zLmxlbmd0aH1cbiAgICAgICAgICAgIHNjcm9sbFRvSW5kZXg9e2hpZ2hsaWdodGVkSW5kZXggfHwgMH1cbiAgICAgICAgICAgIG92ZXJzY2FuQ291bnQ9ezN9XG4gICAgICAgICAgICBzY3JvbGxUb0FsaWdubWVudD1cImF1dG9cIlxuICAgICAgICAgICAgcmVuZGVySXRlbT17KHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2luZGV4XVxuICAgICAgICAgICAgICBjb25zdCBpdGVtU3RyaW5nID0gaXRlbVRvU3RyaW5nKGl0ZW0pXG5cbiAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckl0ZW0oXG4gICAgICAgICAgICAgICAgZ2V0SXRlbVByb3BzKHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICBrZXk6IGl0ZW1TdHJpbmcsXG4gICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1TdHJpbmcsXG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBpdGVtVG9TdHJpbmcoc2VsZWN0ZWRJdGVtKSA9PT0gaXRlbVN0cmluZyxcbiAgICAgICAgICAgICAgICAgIGlzSGlnaGxpZ2h0ZWQ6IGhpZ2hsaWdodGVkSW5kZXggPT09IGluZGV4XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGl0ZW1TaXplLFxuICAgICAgcG9zaXRpb24sXG4gICAgICByZW5kZXJJdGVtLFxuICAgICAgaXRlbXNGaWx0ZXIsXG4gICAgICBwb3BvdmVyTWF4SGVpZ2h0LFxuICAgICAgcG9wb3Zlck1pbldpZHRoLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb3duc2hpZnRcbiAgICAgICAgc3RhdGVSZWR1Y2VyPXt0aGlzLnN0YXRlUmVkdWNlcn1cbiAgICAgICAgc2Nyb2xsSW50b1ZpZXc9e25vb3B9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgeyh7XG4gICAgICAgICAgaXNPcGVuOiBpc1Nob3duLFxuICAgICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgIGdldE1lbnVQcm9wcyxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgICBnZXRSb290UHJvcHMsXG4gICAgICAgICAgLi4ucmVzdERvd25zaGlmdFByb3BzXG4gICAgICAgIH0pID0+IChcbiAgICAgICAgICA8UGFuZSB3aWR0aD1cIjEwMCVcIiB7Li4uZ2V0Um9vdFByb3BzKHsgcmVmS2V5OiAnaW5uZXJSZWYnIH0pfT5cbiAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgIGJyaW5nRm9jdXNJbnNpZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBpc1Nob3duPXtpc1Nob3dufVxuICAgICAgICAgICAgICBtaW5XaWR0aD17cG9wb3Zlck1pbldpZHRofVxuICAgICAgICAgICAgICBwb3NpdGlvbj17XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS50YXJnZXRXaWR0aCA8IHBvcG92ZXJNaW5XaWR0aFxuICAgICAgICAgICAgICAgICAgPyBQb3NpdGlvbi5CT1RUT01fTEVGVFxuICAgICAgICAgICAgICAgICAgOiBQb3NpdGlvbi5CT1RUT00pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGVudD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclJlc3VsdHMoe1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IE1hdGgubWF4KHRoaXMuc3RhdGUudGFyZ2V0V2lkdGgsIHBvcG92ZXJNaW5XaWR0aCksXG4gICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgICAgICAgICAgZ2V0TWVudVByb3BzLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG1pbkhlaWdodD17MH1cbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249ezB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoeyBpc1Nob3duOiBpc1Nob3duUG9wb3ZlciwgdG9nZ2xlLCBnZXRSZWYgfSkgPT5cbiAgICAgICAgICAgICAgICBjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICBpc1Nob3duOiBpc1Nob3duUG9wb3ZlcixcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZSxcbiAgICAgICAgICAgICAgICAgIGdldFJlZjogcmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSByZWYgaW50ZXJuYWxseSB0byBkZXRlcm1pbmUgdGhlIHdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UmVmID0gcmVmXG4gICAgICAgICAgICAgICAgICAgIGdldFJlZihyZWYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAuLi5yZXN0RG93bnNoaWZ0UHJvcHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgPC9Eb3duc2hpZnQ+XG4gICAgKVxuICB9XG59XG4iXX0=
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/esm/createClass";
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
import VirtualList from 'react-tiny-virtual-list';
import debounce from 'lodash.debounce';
import { Pane } from '../../layers';

var TableVirtualBody = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableVirtualBody, _PureComponent);

  var _super = _createSuper(TableVirtualBody);

  _createClass(TableVirtualBody, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.height !== state.calculatedHeight) {
        return {
          isIntegerHeight: Number.isInteger(props.height)
        };
      } // Return null to indicate no change to state.


      return null;
    }
  }]);

  function TableVirtualBody(props) {
    var _this;

    _classCallCheck(this, TableVirtualBody);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isIntegerHeight: false,
      calculatedHeight: 0
    });

    _defineProperty(_assertThisInitialized(_this), "initializeHelpers", function () {
      _this.autoHeights = [];
      _this.autoHeightRefs = [];
      _this.averageAutoHeight = _this.props.defaultHeight;
    });

    _defineProperty(_assertThisInitialized(_this), "processAutoHeights", function () {
      var isUpdated = false; // This will determine the averageAutoHeight.

      var total = 0;
      var totalAmount = 0; // Loop through all of the refs that have height="auto".

      _this.autoHeightRefs.forEach(function (ref, index) {
        // If the height is already calculated, skip it,
        // but calculate the height for the total.
        if (_this.autoHeights[index]) {
          total += _this.autoHeights[index];
          totalAmount += 1;
          return;
        } // Make sure the ref has a child


        if (ref && ref.childNodes && ref.childNodes[0] && Number.isInteger(ref.childNodes[0].offsetHeight)) {
          var height = ref.childNodes[0].offsetHeight; // Add to the total to calculate the averageAutoHeight.

          total += height;
          totalAmount += 1; // Cache the height.

          _this.autoHeights[index] = height; // Set the update flag to true.

          isUpdated = true;
        }
      }); // Save the average height.


      _this.averageAutoHeight = total / totalAmount; // There are some new heights detected that had previously not been calculated.
      // Call forceUpdate to make sure the virtual list renders again.

      if (isUpdated) _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.paneRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "onVirtualHelperRef", function (index, ref) {
      _this.autoHeightRefs[index] = ref;
      requestAnimationFrame(function () {
        _this.processAutoHeights();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.updateOnResize();
    });

    _defineProperty(_assertThisInitialized(_this), "updateOnResize", function () {
      _this.initializeHelpers(); // Simply return when we now the height of the pane is fixed.


      if (_this.state.isIntegerHeight) return; // Return if we are in a weird edge case in which the ref is no longer valid.

      if (_this.paneRef) {
        var calculatedHeight = _this.paneRef.offsetHeight;

        if (calculatedHeight > 0) {
          // Save the calculated height which is needed for the VirtualList.
          _this.setState({
            calculatedHeight: calculatedHeight
          }); // Prevent updateOnResize being called recursively when there is a valid height.


          return;
        }
      } // When height is still 0 (or paneRef is not valid) try recursively until success.


      requestAnimationFrame(function () {
        _this.updateOnResize();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getItemSize", function (children) {
      var _this$props = _this.props,
          allowAutoHeight = _this$props.allowAutoHeight,
          useAverageAutoHeightEstimation = _this$props.useAverageAutoHeightEstimation,
          defaultHeight = _this$props.defaultHeight; // Prefer to return a array of all heights.

      if (!allowAutoHeight) {
        return children.map(function (child) {
          if (!React.isValidElement(child)) return defaultHeight;
          var height = child.props.height;

          if (Number.isInteger(height)) {
            return height;
          }

          return defaultHeight;
        });
      } // If allowAutoHeight is true, return a function instead.


      var itemSizeFn = function itemSizeFn(index) {
        if (!React.isValidElement(children[index])) return defaultHeight;
        var height = children[index].props.height; // When the height is number simply, simply return it.

        if (Number.isInteger(height)) {
          return height;
        } // When allowAutoHeight is set and  the height is set to "auto"...


        if (allowAutoHeight && children[index].props.height === 'auto') {
          // ... and the height is calculated, return the calculated height.
          if (_this.autoHeights[index]) return _this.autoHeights[index]; // ... if the height is not yet calculated, return the averge

          if (useAverageAutoHeightEstimation) return _this.averageAutoHeight;
        } // Return the default height.


        return defaultHeight;
      };

      return itemSizeFn;
    });

    _this.initializeHelpers(); // Add a onResize.


    _this.onResize = debounce(_this.onResize, 200);
    return _this;
  }

  _createClass(TableVirtualBody, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Call this to initialize and set
      this.updateOnResize();
      window.addEventListener('resize', this.onResize, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          inputChildren = _this$props2.children,
          paneHeight = _this$props2.height,
          defaultHeight = _this$props2.defaultHeight,
          allowAutoHeight = _this$props2.allowAutoHeight,
          overscanCount = _this$props2.overscanCount,
          estimatedItemSize = _this$props2.estimatedItemSize,
          useAverageAutoHeightEstimation = _this$props2.useAverageAutoHeightEstimation,
          scrollToIndex = _this$props2.scrollToIndex,
          scrollOffset = _this$props2.scrollOffset,
          scrollToAlignment = _this$props2.scrollToAlignment,
          onScroll = _this$props2.onScroll,
          props = _objectWithoutProperties(_this$props2, ["children", "height", "defaultHeight", "allowAutoHeight", "overscanCount", "estimatedItemSize", "useAverageAutoHeightEstimation", "scrollToIndex", "scrollOffset", "scrollToAlignment", "onScroll"]); // Children always needs to be an array.


      var children = Array.isArray(inputChildren) ? inputChildren : React.Children.toArray(inputChildren);
      var itemSize = this.getItemSize(children); // VirtualList needs a fixed height.

      var _this$state = this.state,
          calculatedHeight = _this$state.calculatedHeight,
          isIntegerHeight = _this$state.isIntegerHeight;
      return React.createElement(Pane, _extends({
        "data-evergreen-table-body": true,
        innerRef: this.onRef,
        height: paneHeight,
        flex: "1",
        overflow: "hidden"
      }, props), React.createElement(VirtualList, {
        height: isIntegerHeight ? paneHeight : calculatedHeight,
        width: "100%",
        estimatedItemSize: allowAutoHeight && useAverageAutoHeightEstimation ? this.averageAutoHeight : estimatedItemSize || null,
        itemSize: itemSize,
        overscanCount: overscanCount,
        itemCount: React.Children.count(children),
        scrollToIndex: scrollToIndex,
        scrollOffset: scrollOffset,
        scrollToAlignment: scrollToAlignment,
        onScroll: onScroll,
        renderItem: function renderItem(_ref) {
          var index = _ref.index,
              style = _ref.style;
          var child = children[index];
          var key = child.key || index;
          var props = {
            key: key,
            style: style
          }; // If some children are strings by accident, support this gracefully.

          if (!React.isValidElement(child)) {
            if (typeof child === 'string') {
              return React.createElement("div", props, child);
            }

            return React.createElement("div", props, "\xA0");
          } // When allowing height="auto" for rows, and a auto height item is
          // rendered for the first time...


          if (allowAutoHeight && React.isValidElement(child) && child.props.height === 'auto' && // ... and only when the height is not already been calculated.
          !_this2.autoHeights[index]) {
            // ... render the item in a helper div, the ref is used to calculate
            // the height of its children.
            return React.createElement("div", _extends({
              ref: function ref(_ref2) {
                return _this2.onVirtualHelperRef(index, _ref2);
              },
              "data-virtual-index": index
            }, props, {
              style: _objectSpread({
                opacity: 0
              }, props.style)
            }), child);
          } // When allowAutoHeight is false, or when the height is known.
          // Simply render the item.


          return React.cloneElement(child, props);
        }
      }));
    }
  }]);

  return TableVirtualBody;
}(PureComponent);

TableVirtualBody.displayName = "TableVirtualBody";

_defineProperty(TableVirtualBody, "propTypes", _objectSpread({}, Pane.propTypes, {
  /**
   * Children needs to be an array of a single node.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /**
   * Default height of each row.
   * 48 is the default height of a TableRow.
   */
  defaultHeight: PropTypes.number,

  /**
   * When true, support `height="auto"` on children being rendered.
   * This is somewhat of an expirmental feature.
   */
  allowAutoHeight: PropTypes.bool,

  /**
   * The overscanCount property passed to react-tiny-virtual-list.
   */
  overscanCount: PropTypes.number.isRequired,

  /**
   * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
   * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
   */
  estimatedItemSize: PropTypes.number,

  /**
   * When allowAutoHeight is true and this prop is true, the estimated height
   * will be computed based on the average height of auto height rows.
   */
  useAverageAutoHeightEstimation: PropTypes.bool,

  /**
   * The scrollToIndex property passed to react-tiny-virtual-list
   */
  scrollToIndex: PropTypes.number,

  /**
   * The scrollOffset property passed to react-tiny-virtual-list
   */
  scrollOffset: PropTypes.number,

  /**
   * The scrollToAlignment property passed to react-tiny-virtual-list
   */
  scrollToAlignment: PropTypes.oneOf(['start', 'center', 'end', 'auto']),

  /**
   * The onScroll callback passed to react-tiny-virtual-list
   */
  onScroll: PropTypes.func
}));

_defineProperty(TableVirtualBody, "defaultProps", {
  defaultHeight: 48,
  allowAutoHeight: false,
  overscanCount: 5,
  useAverageAutoHeightEstimation: true
});

export { TableVirtualBody as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVWaXJ0dWFsQm9keS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJWaXJ0dWFsTGlzdCIsImRlYm91bmNlIiwiUGFuZSIsIlRhYmxlVmlydHVhbEJvZHkiLCJwcm9wcyIsInN0YXRlIiwiaGVpZ2h0IiwiY2FsY3VsYXRlZEhlaWdodCIsImlzSW50ZWdlckhlaWdodCIsIk51bWJlciIsImlzSW50ZWdlciIsImF1dG9IZWlnaHRzIiwiYXV0b0hlaWdodFJlZnMiLCJhdmVyYWdlQXV0b0hlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJpc1VwZGF0ZWQiLCJ0b3RhbCIsInRvdGFsQW1vdW50IiwiZm9yRWFjaCIsInJlZiIsImluZGV4IiwiY2hpbGROb2RlcyIsIm9mZnNldEhlaWdodCIsImZvcmNlVXBkYXRlIiwicGFuZVJlZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByb2Nlc3NBdXRvSGVpZ2h0cyIsInVwZGF0ZU9uUmVzaXplIiwiaW5pdGlhbGl6ZUhlbHBlcnMiLCJzZXRTdGF0ZSIsImNoaWxkcmVuIiwiYWxsb3dBdXRvSGVpZ2h0IiwidXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsIml0ZW1TaXplRm4iLCJvblJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5wdXRDaGlsZHJlbiIsInBhbmVIZWlnaHQiLCJvdmVyc2NhbkNvdW50IiwiZXN0aW1hdGVkSXRlbVNpemUiLCJzY3JvbGxUb0luZGV4Iiwic2Nyb2xsT2Zmc2V0Iiwic2Nyb2xsVG9BbGlnbm1lbnQiLCJvblNjcm9sbCIsIkFycmF5IiwiaXNBcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIml0ZW1TaXplIiwiZ2V0SXRlbVNpemUiLCJvblJlZiIsImNvdW50Iiwic3R5bGUiLCJrZXkiLCJvblZpcnR1YWxIZWxwZXJSZWYiLCJvcGFjaXR5IiwiY2xvbmVFbGVtZW50IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJudW1iZXIiLCJib29sIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3Qix5QkFBeEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGlCQUFyQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7O0lBRXFCQyxnQjs7Ozs7Ozs2Q0EwRWFDLEssRUFBT0MsSyxFQUFPO0FBQzVDLFVBQUlELEtBQUssQ0FBQ0UsTUFBTixLQUFpQkQsS0FBSyxDQUFDRSxnQkFBM0IsRUFBNkM7QUFDM0MsZUFBTztBQUNMQyxVQUFBQSxlQUFlLEVBQUVDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQk4sS0FBSyxDQUFDRSxNQUF2QjtBQURaLFNBQVA7QUFHRCxPQUwyQyxDQU81Qzs7O0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztBQUVELDRCQUFZRixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiw0REFoQlg7QUFDTkksTUFBQUEsZUFBZSxFQUFFLEtBRFg7QUFFTkQsTUFBQUEsZ0JBQWdCLEVBQUU7QUFGWixLQWdCVzs7QUFBQSx3RUFtQkMsWUFBTTtBQUN4QixZQUFLSSxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsWUFBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFlBQUtDLGlCQUFMLEdBQXlCLE1BQUtULEtBQUwsQ0FBV1UsYUFBcEM7QUFDRCxLQXZCa0I7O0FBQUEseUVBNkJFLFlBQU07QUFDekIsVUFBSUMsU0FBUyxHQUFHLEtBQWhCLENBRHlCLENBR3pCOztBQUNBLFVBQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0Es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UyxDQUFDbUUsTUFBVixDQUFpQkUsVTs7QUFFaEM7Ozs7QUFJQXhCLEVBQUFBLGlCQUFpQixFQUFFN0MsU0FBUyxDQUFDbUUsTTs7QUFFN0I7Ozs7QUFJQWxDLEVBQUFBLDhCQUE4QixFQUFFakMsU0FBUyxDQUFDb0UsSTs7QUFFMUM7OztBQUdBdEIsRUFBQUEsYUFBYSxFQUFFOUMsU0FBUyxDQUFDbUUsTTs7QUFDekI7OztBQUdBcEIsRUFBQUEsWUFBWSxFQUFFL0MsU0FBUyxDQUFDbUUsTTs7QUFDeEI7OztBQUdBbkIsRUFBQUEsaUJBQWlCLEVBQUVoRCxTQUFTLENBQUNzRSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsS0FBcEIsRUFBMkIsTUFBM0IsQ0FBaEIsQzs7QUFDbkI7OztBQUdBckIsRUFBQUEsUUFBUSxFQUFFakQsU0FBUyxDQUFDdUU7OztnQkEzREhuRSxnQixrQkE4REc7QUFDcEJXLEVBQUFBLGFBQWEsRUFBRSxFQURLO0FBRXBCaUIsRUFBQUEsZUFBZSxFQUFFLEtBRkc7QUFHcEJZLEVBQUFBLGFBQWEsRUFBRSxDQUhLO0FBSXBCWCxFQUFBQSw4QkFBOEIsRUFBRTtBQUpaLEM7O1NBOURIN0IsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFZpcnR1YWxMaXN0IGZyb20gJ3JlYWN0LXRpbnktdmlydHVhbC1saXN0J1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlVmlydHVhbEJvZHkgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZHJlbiBuZWVkcyB0byBiZSBhbiBhcnJheSBvZiBhIHNpbmdsZSBub2RlLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcbiAgICAgIFByb3BUeXBlcy5ub2RlXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGhlaWdodCBvZiBlYWNoIHJvdy5cbiAgICAgKiA0OCBpcyB0aGUgZGVmYXVsdCBoZWlnaHQgb2YgYSBUYWJsZVJvdy5cbiAgICAgKi9cbiAgICBkZWZhdWx0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzdXBwb3J0IGBoZWlnaHQ9XCJhdXRvXCJgIG9uIGNoaWxkcmVuIGJlaW5nIHJlbmRlcmVkLlxuICAgICAqIFRoaXMgaXMgc29tZXdoYXQgb2YgYW4gZXhwaXJtZW50YWwgZmVhdHVyZS5cbiAgICAgKi9cbiAgICBhbGxvd0F1dG9IZWlnaHQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG92ZXJzY2FuQ291bnQgcHJvcGVydHkgcGFzc2VkIHRvIHJlYWN0LXRpbnktdmlydHVhbC1saXN0LlxuICAgICAqL1xuICAgIG92ZXJzY2FuQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gcGFzc2VkLCB0aGlzIGlzIHVzZWQgYXMgdGhlIGBlc3RpbWF0ZWRJdGVtU2l6ZWAgaW4gcmVhY3QtdGlueS12aXJ0dWFsLWxpc3QuXG4gICAgICogT25seSB3aGVuIGBhbGxvd0F1dG9IZWlnaHRgIGFuZGB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb25gIGFyZSBmYWxzZS5cbiAgICAgKi9cbiAgICBlc3RpbWF0ZWRJdGVtU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYWxsb3dBdXRvSGVpZ2h0IGlzIHRydWUgYW5kIHRoaXMgcHJvcCBpcyB0cnVlLCB0aGUgZXN0aW1hdGVkIGhlaWdodFxuICAgICAqIHdpbGwgYmUgY29tcHV0ZWQgYmFzZWQgb24gdGhlIGF2ZXJhZ2UgaGVpZ2h0IG9mIGF1dG8gaGVpZ2h0IHJvd3MuXG4gICAgICovXG4gICAgdXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY3JvbGxUb0luZGV4IHByb3BlcnR5IHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdFxuICAgICAqL1xuICAgIHNjcm9sbFRvSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogVGhlIHNjcm9sbE9mZnNldCBwcm9wZXJ0eSBwYXNzZWQgdG8gcmVhY3QtdGlueS12aXJ0dWFsLWxpc3RcbiAgICAgKi9cbiAgICBzY3JvbGxPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogVGhlIHNjcm9sbFRvQWxpZ25tZW50IHByb3BlcnR5IHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdFxuICAgICAqL1xuICAgIHNjcm9sbFRvQWxpZ25tZW50OiBQcm9wVHlwZXMub25lT2YoWydzdGFydCcsICdjZW50ZXInLCAnZW5kJywgJ2F1dG8nXSksXG4gICAgLyoqXG4gICAgICogVGhlIG9uU2Nyb2xsIGNhbGxiYWNrIHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdFxuICAgICAqL1xuICAgIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWZhdWx0SGVpZ2h0OiA0OCxcbiAgICBhbGxvd0F1dG9IZWlnaHQ6IGZhbHNlLFxuICAgIG92ZXJzY2FuQ291bnQ6IDUsXG4gICAgdXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uOiB0cnVlXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpc0ludGVnZXJIZWlnaHQ6IGZhbHNlLFxuICAgIGNhbGN1bGF0ZWRIZWlnaHQ6IDBcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmhlaWdodCAhPT0gc3RhdGUuY2FsY3VsYXRlZEhlaWdodCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNJbnRlZ2VySGVpZ2h0OiBOdW1iZXIuaXNJbnRlZ2VyKHByb3BzLmhlaWdodClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gbnVsbCB0byBpbmRpY2F0ZSBubyBjaGFuZ2UgdG8gc3RhdGUuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmluaXRpYWxpemVIZWxwZXJzKClcblxuICAgIC8vIEFkZCBhIG9uUmVzaXplLlxuICAgIHRoaXMub25SZXNpemUgPSBkZWJvdW5jZSh0aGlzLm9uUmVzaXplLCAyMDApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBDYWxsIHRoaXMgdG8gaW5pdGlhbGl6ZSBhbmQgc2V0XG4gICAgdGhpcy51cGRhdGVPblJlc2l6ZSgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gIH1cblxuICBpbml0aWFsaXplSGVscGVycyA9ICgpID0+IHtcbiAgICB0aGlzLmF1dG9IZWlnaHRzID0gW11cbiAgICB0aGlzLmF1dG9IZWlnaHRSZWZzID0gW11cbiAgICB0aGlzLmF2ZXJhZ2VBdXRvSGVpZ2h0ID0gdGhpcy5wcm9wcy5kZWZhdWx0SGVpZ2h0XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHByb2Nlc3MgYWxsIGl0ZW1zIHRoYXQgaGF2ZSBoZWlnaHQ9XCJhdXRvXCIgc2V0LlxuICAgKiBJdCB3aWxsIGxvb3AgdGhyb3VnaCBhbGwgcmVmcyBhbmQgZ2V0IGNhbGN1bGF0ZSB0aGUgaGVpZ2h0LlxuICAgKi9cbiAgcHJvY2Vzc0F1dG9IZWlnaHRzID0gKCkgPT4ge1xuICAgIGxldCBpc1VwZGF0ZWQgPSBmYWxzZVxuXG4gICAgLy8gVGhpcyB3aWxsIGRldGVybWluZSB0aGUgYXZlcmFnZUF1dG9IZWlnaHQuXG4gICAgbGV0IHRvdGFsID0gMFxuICAgIGxldCB0b3RhbEFtb3VudCA9IDBcblxuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIHJlZnMgdGhhdCBoYXZlIGhlaWdodD1cImF1dG9cIi5cbiAgICB0aGlzLmF1dG9IZWlnaHRSZWZzLmZvckVhY2goKHJlZiwgaW5kZXgpID0+IHtcbiAgICAgIC8vIElmIHRoZSBoZWlnaHQgaXMgYWxyZWFkeSBjYWxjdWxhdGVkLCBza2lwIGl0LFxuICAgICAgLy8gYnV0IGNhbGN1bGF0ZSB0aGUgaGVpZ2h0IGZvciB0aGUgdG90YWwuXG4gICAgICBpZiAodGhpcy5hdXRvSGVpZ2h0c1tpbmRleF0pIHtcbiAgICAgICAgdG90YWwgKz0gdGhpcy5hdXRvSGVpZ2h0c1tpbmRleF1cbiAgICAgICAgdG90YWxBbW91bnQgKz0gMVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBzdXJlIHRoZSByZWYgaGFzIGEgY2hpbGRcbiAgICAgIGlmIChcbiAgICAgICAgcmVmICYmXG4gICAgICAgIHJlZi5jaGlsZE5vZGVzICYmXG4gICAgICAgIHJlZi5jaGlsZE5vZGVzWzBdICYmXG4gICAgICAgIE51bWJlci5pc0ludGVnZXIocmVmLmNoaWxkTm9kZXNbMF0ub2Zmc2V0SGVpZ2h0KVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHJlZi5jaGlsZE5vZGVzWzBdLm9mZnNldEhlaWdodFxuXG4gICAgICAgIC8vIEFkZCB0byB0aGUgdG90YWwgdG8gY2FsY3VsYXRlIHRoZSBhdmVyYWdlQXV0b0hlaWdodC5cbiAgICAgICAgdG90YWwgKz0gaGVpZ2h0XG4gICAgICAgIHRvdGFsQW1vdW50ICs9IDFcblxuICAgICAgICAvLyBDYWNoZSB0aGUgaGVpZ2h0LlxuICAgICAgICB0aGlzLmF1dG9IZWlnaHRzW2luZGV4XSA9IGhlaWdodFxuXG4gICAgICAgIC8vIFNldCB0aGUgdXBkYXRlIGZsYWcgdG8gdHJ1ZS5cbiAgICAgICAgaXNVcGRhdGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBTYXZlIHRoZSBhdmVyYWdlIGhlaWdodC5cbiAgICB0aGlzLmF2ZXJhZ2VBdXRvSGVpZ2h0ID0gdG90YWwgLyB0b3RhbEFtb3VudFxuXG4gICAgLy8gVGhlcmUgYXJlIHNvbWUgbmV3IGhlaWdodHMgZGV0ZWN0ZWQgdGhhdCBoYWQgcHJldmlvdXNseSBub3QgYmVlbiBjYWxjdWxhdGVkLlxuICAgIC8vIENhbGwgZm9yY2VVcGRhdGUgdG8gbWFrZSBzdXJlIHRoZSB2aXJ0dWFsIGxpc3QgcmVuZGVycyBhZ2Fpbi5cbiAgICBpZiAoaXNVcGRhdGVkKSB0aGlzLmZvcmNlVXBkYXRlKClcbiAgfVxuXG4gIG9uUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLnBhbmVSZWYgPSByZWZcbiAgfVxuXG4gIG9uVmlydHVhbEhlbHBlclJlZiA9IChpbmRleCwgcmVmKSA9PiB7XG4gICAgdGhpcy5hdXRvSGVpZ2h0UmVmc1tpbmRleF0gPSByZWZcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnByb2Nlc3NBdXRvSGVpZ2h0cygpXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlT25SZXNpemUoKVxuICB9XG5cbiAgdXBkYXRlT25SZXNpemUgPSAoKSA9PiB7XG4gICAgdGhpcy5pbml0aWFsaXplSGVscGVycygpXG5cbiAgICAvLyBTaW1wbHkgcmV0dXJuIHdoZW4gd2Ugbm93IHRoZSBoZWlnaHQgb2YgdGhlIHBhbmUgaXMgZml4ZWQuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNJbnRlZ2VySGVpZ2h0KSByZXR1cm5cblxuICAgIC8vIFJldHVybiBpZiB3ZSBhcmUgaW4gYSB3ZWlyZCBlZGdlIGNhc2UgaW4gd2hpY2ggdGhlIHJlZiBpcyBubyBsb25nZXIgdmFsaWQuXG4gICAgaWYgKHRoaXMucGFuZVJlZikge1xuICAgICAgY29uc3QgY2FsY3VsYXRlZEhlaWdodCA9IHRoaXMucGFuZVJlZi5vZmZzZXRIZWlnaHRcblxuICAgICAgaWYgKGNhbGN1bGF0ZWRIZWlnaHQgPiAwKSB7XG4gICAgICAgIC8vIFNhdmUgdGhlIGNhbGN1bGF0ZWQgaGVpZ2h0IHdoaWNoIGlzIG5lZWRlZCBmb3IgdGhlIFZpcnR1YWxMaXN0LlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjYWxjdWxhdGVkSGVpZ2h0XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gUHJldmVudCB1cGRhdGVPblJlc2l6ZSBiZWluZyBjYWxsZWQgcmVjdXJzaXZlbHkgd2hlbiB0aGVyZSBpcyBhIHZhbGlkIGhlaWdodC5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2hlbiBoZWlnaHQgaXMgc3RpbGwgMCAob3IgcGFuZVJlZiBpcyBub3QgdmFsaWQpIHRyeSByZWN1cnNpdmVseSB1bnRpbCBzdWNjZXNzLlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZU9uUmVzaXplKClcbiAgICB9KVxuICB9XG5cbiAgZ2V0SXRlbVNpemUgPSBjaGlsZHJlbiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYWxsb3dBdXRvSGVpZ2h0LFxuICAgICAgdXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uLFxuICAgICAgZGVmYXVsdEhlaWdodFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyBQcmVmZXIgdG8gcmV0dXJuIGEgYXJyYXkgb2YgYWxsIGhlaWdodHMuXG4gICAgaWYgKCFhbGxvd0F1dG9IZWlnaHQpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkgcmV0dXJuIGRlZmF1bHRIZWlnaHRcbiAgICAgICAgY29uc3QgeyBoZWlnaHQgfSA9IGNoaWxkLnByb3BzXG5cbiAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIoaGVpZ2h0KSkge1xuICAgICAgICAgIHJldHVybiBoZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0SGVpZ2h0XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIElmIGFsbG93QXV0b0hlaWdodCBpcyB0cnVlLCByZXR1cm4gYSBmdW5jdGlvbiBpbnN0ZWFkLlxuICAgIGNvbnN0IGl0ZW1TaXplRm4gPSBpbmRleCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuW2luZGV4XSkpIHJldHVybiBkZWZhdWx0SGVpZ2h0XG4gICAgICBjb25zdCB7IGhlaWdodCB9ID0gY2hpbGRyZW5baW5kZXhdLnByb3BzXG5cbiAgICAgIC8vIFdoZW4gdGhlIGhlaWdodCBpcyBudW1iZXIgc2ltcGx5LCBzaW1wbHkgcmV0dXJuIGl0LlxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIoaGVpZ2h0KSkge1xuICAgICAgICByZXR1cm4gaGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gYWxsb3dBdXRvSGVpZ2h0IGlzIHNldCBhbmQgIHRoZSBoZWlnaHQgaXMgc2V0IHRvIFwiYXV0b1wiLi4uXG4gICAgICBpZiAoYWxsb3dBdXRvSGVpZ2h0ICYmIGNoaWxkcmVuW2luZGV4XS5wcm9wcy5oZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgICAvLyAuLi4gYW5kIHRoZSBoZWlnaHQgaXMgY2FsY3VsYXRlZCwgcmV0dXJuIHRoZSBjYWxjdWxhdGVkIGhlaWdodC5cbiAgICAgICAgaWYgKHRoaXMuYXV0b0hlaWdodHNbaW5kZXhdKSByZXR1cm4gdGhpcy5hdXRvSGVpZ2h0c1tpbmRleF1cblxuICAgICAgICAvLyAuLi4gaWYgdGhlIGhlaWdodCBpcyBub3QgeWV0IGNhbGN1bGF0ZWQsIHJldHVybiB0aGUgYXZlcmdlXG4gICAgICAgIGlmICh1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb24pIHJldHVybiB0aGlzLmF2ZXJhZ2VBdXRvSGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiB0aGUgZGVmYXVsdCBoZWlnaHQuXG4gICAgICByZXR1cm4gZGVmYXVsdEhlaWdodFxuICAgIH1cblxuICAgIHJldHVybiBpdGVtU2l6ZUZuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW46IGlucHV0Q2hpbGRyZW4sXG4gICAgICBoZWlnaHQ6IHBhbmVIZWlnaHQsXG4gICAgICBkZWZhdWx0SGVpZ2h0LFxuICAgICAgYWxsb3dBdXRvSGVpZ2h0LFxuICAgICAgb3ZlcnNjYW5Db3VudCxcbiAgICAgIGVzdGltYXRlZEl0ZW1TaXplLFxuICAgICAgdXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uLFxuICAgICAgc2Nyb2xsVG9JbmRleCxcbiAgICAgIHNjcm9sbE9mZnNldCxcbiAgICAgIHNjcm9sbFRvQWxpZ25tZW50LFxuICAgICAgb25TY3JvbGwsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyBDaGlsZHJlbiBhbHdheXMgbmVlZHMgdG8gYmUgYW4gYXJyYXkuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGlucHV0Q2hpbGRyZW4pXG4gICAgICA/IGlucHV0Q2hpbGRyZW5cbiAgICAgIDogUmVhY3QuQ2hpbGRyZW4udG9BcnJheShpbnB1dENoaWxkcmVuKVxuXG4gICAgY29uc3QgaXRlbVNpemUgPSB0aGlzLmdldEl0ZW1TaXplKGNoaWxkcmVuKVxuXG4gICAgLy8gVmlydHVhbExpc3QgbmVlZHMgYSBmaXhlZCBoZWlnaHQuXG4gICAgY29uc3QgeyBjYWxjdWxhdGVkSGVpZ2h0LCBpc0ludGVnZXJIZWlnaHQgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBkYXRhLWV2ZXJncmVlbi10YWJsZS1ib2R5XG4gICAgICAgIGlubmVyUmVmPXt0aGlzLm9uUmVmfVxuICAgICAgICBoZWlnaHQ9e3BhbmVIZWlnaHR9XG4gICAgICAgIGZsZXg9XCIxXCJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxWaXJ0dWFsTGlzdFxuICAgICAgICAgIGhlaWdodD17aXNJbnRlZ2VySGVpZ2h0ID8gcGFuZUhlaWdodCA6IGNhbGN1bGF0ZWRIZWlnaHR9XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBlc3RpbWF0ZWRJdGVtU2l6ZT17XG4gICAgICAgICAgICBhbGxvd0F1dG9IZWlnaHQgJiYgdXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uXG4gICAgICAgICAgICAgID8gdGhpcy5hdmVyYWdlQXV0b0hlaWdodFxuICAgICAgICAgICAgICA6IGVzdGltYXRlZEl0ZW1TaXplIHx8IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbVNpemU9e2l0ZW1TaXplfVxuICAgICAgICAgIG92ZXJzY2FuQ291bnQ9e292ZXJzY2FuQ291bnR9XG4gICAgICAgICAgaXRlbUNvdW50PXtSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbil9XG4gICAgICAgICAgc2Nyb2xsVG9JbmRleD17c2Nyb2xsVG9JbmRleH1cbiAgICAgICAgICBzY3JvbGxPZmZzZXQ9e3Njcm9sbE9mZnNldH1cbiAgICAgICAgICBzY3JvbGxUb0FsaWdubWVudD17c2Nyb2xsVG9BbGlnbm1lbnR9XG4gICAgICAgICAgb25TY3JvbGw9e29uU2Nyb2xsfVxuICAgICAgICAgIHJlbmRlckl0ZW09eyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuICAgICAgICAgICAgY29uc3Qga2V5ID0gY2hpbGQua2V5IHx8IGluZGV4XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICBzdHlsZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBzb21lIGNoaWxkcmVuIGFyZSBzdHJpbmdzIGJ5IGFjY2lkZW50LCBzdXBwb3J0IHRoaXMgZ3JhY2VmdWxseS5cbiAgICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT57Y2hpbGR9PC9kaXY+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIGFsbG93aW5nIGhlaWdodD1cImF1dG9cIiBmb3Igcm93cywgYW5kIGEgYXV0byBoZWlnaHQgaXRlbSBpc1xuICAgICAgICAgICAgLy8gcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lLi4uXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGFsbG93QXV0b0hlaWdodCAmJlxuICAgICAgICAgICAgICBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiZcbiAgICAgICAgICAgICAgY2hpbGQucHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgJiZcbiAgICAgICAgICAgICAgLy8gLi4uIGFuZCBvbmx5IHdoZW4gdGhlIGhlaWdodCBpcyBub3QgYWxyZWFkeSBiZWVuIGNhbGN1bGF0ZWQuXG4gICAgICAgICAgICAgICF0aGlzLmF1dG9IZWlnaHRzW2luZGV4XVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIC8vIC4uLiByZW5kZXIgdGhlIGl0ZW0gaW4gYSBoZWxwZXIgZGl2LCB0aGUgcmVmIGlzIHVzZWQgdG8gY2FsY3VsYXRlXG4gICAgICAgICAgICAgIC8vIHRoZSBoZWlnaHQgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMub25WaXJ0dWFsSGVscGVyUmVmKGluZGV4LCByZWYpfVxuICAgICAgICAgICAgICAgICAgZGF0YS12aXJ0dWFsLWluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIC4uLnByb3BzLnN0eWxlXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIGFsbG93QXV0b0hlaWdodCBpcyBmYWxzZSwgb3Igd2hlbiB0aGUgaGVpZ2h0IGlzIGtub3duLlxuICAgICAgICAgICAgLy8gU2ltcGx5IHJlbmRlciB0aGUgaXRlbS5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXX0=
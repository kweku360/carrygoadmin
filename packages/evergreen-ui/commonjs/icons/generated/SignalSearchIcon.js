"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignalSearchIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M5.474 7.971A5.31 5.31 0 006.66 8.9l.007.019.018.056c.015.038.038.06.045.098l1.5 5.999a.75.75 0 01-1.455.36l-.42-1.68h-.704l-.42 1.68a.746.746 0 01-.907.547.746.746 0 01-.547-.907l1.5-6c.007-.037.03-.06.044-.097.015-.037.015-.075.038-.112a.722.722 0 01-.105-.36c0-.207.084-.394.22-.53zM2.795 5.277a.763.763 0 00-.015-1.065.756.756 0 00-1.065.015c-2.286 2.34-2.286 6.21 0 8.549a.747.747 0 101.072-1.042c-1.709-1.763-1.709-4.702.008-6.457zM7.808 9.388a5.318 5.318 0 001.58.211 2.236 2.236 0 01-.656.98.756.756 0 01-1.057-.098.756.756 0 01.097-1.057l.036-.036zM11.544 9.105l.378.378a6.02 6.02 0 01-1.638 3.285c-.285.3-.757.3-1.057.015a.74.74 0 01-.015-1.057 4.52 4.52 0 001.185-2.24c.4-.083.785-.212 1.147-.381z', 'M4.054 9.424c-.427-.352-.352-1.582-.03-1.822a.752.752 0 00.15-1.05.752.752 0 00-1.05-.15c-1.079.802-1.221 3.18-.03 4.177a.75.75 0 10.96-1.155zM9.318 0a4.318 4.318 0 014.317 4.318c0 .206-.02.402-.049.598-.01.05-.01.088-.02.138-.039.196-.078.382-.137.569v.01c-.059.186-.137.363-.216.54l-.039.087a5.285 5.285 0 01-.294.51l2.884 2.886a.878.878 0 01.236.559.787.787 0 01-.785.785.785.785 0 01-.56-.226L11.772 7.89a5.285 5.285 0 01-.51.295l-.089.039c-.176.079-.353.157-.54.216h-.01a3.701 3.701 0 01-.568.137c-.05.01-.099.02-.138.02-.196.03-.392.049-.598.049A4.318 4.318 0 015 4.327 4.332 4.332 0 019.318 0zm-.02 1.1A3.195 3.195 0 006.1 4.298a3.195 3.195 0 003.198 3.198 3.195 3.195 0 003.198-3.198A3.195 3.195 0 009.298 1.1z'];
var svgPaths20 = ['M7.15 10.33c.888.8 1.999 1.36 3.228 1.574l2.326 6.98a.846.846 0 01-.535 1.07.844.844 0 01-1.072-.535l-1.225-3.671H7.125L5.9 19.419a.85.85 0 01-1.072.536.85.85 0 01-.536-1.071l2.857-8.555zm1.353 1.305l-.808 2.413h1.607l-.8-2.413zM5 5.5c0 .76.13 1.49.37 2.17-.496 1.056-.313 2.356.704 3.29.385.353.404.94.038 1.311a.982.982 0 01-1.356.038c-2.183-2.01-2-5.125.01-6.94a.95.95 0 01.24-.156A6.421 6.421 0 005 5.5z', 'M3.874 13.185c-1.346-.918-2.187-2.67-2.187-4.34 0-1.752.757-3.254 2.187-4.339.42-.25.42-.834.168-1.168-.252-.418-.84-.418-1.177-.167C1.014 4.59-.08 6.509.005 8.846c.084 2.253 1.177 4.423 2.86 5.675.168.083.336.166.504.166.253 0 .505-.083.673-.333.337-.418.253-.918-.168-1.169zM12.246 12.309a.98.98 0 01-1.354-.037.917.917 0 01-.206-.324 6.54 6.54 0 001.959-.049 5.125 5.125 0 01-.399.41zM14.631 11.476l1.228 1.229a6.6 6.6 0 01-1.723 1.816c-.169.083-.337.166-.505.166-.253 0-.505-.083-.673-.333-.337-.418-.253-.918.168-1.169.62-.422 1.133-1.022 1.505-1.709z', 'M11.5 0C14.54 0 17 2.46 17 5.5c0 .26-.02.51-.06.75l-.03.17c-.04.25-.1.49-.17.73v.01c-.08.24-.17.47-.28.69-.01.04-.03.07-.05.11-.11.23-.24.44-.38.65l3.68 3.68A1.003 1.003 0 0119 14c-.28 0-.53-.11-.7-.29l-3.68-3.68c-.21.14-.42.27-.65.38-.04.01-.07.03-.11.05-.22.11-.45.2-.69.28h-.01c-.24.07-.48.13-.73.17l-.17.03c-.25.04-.5.06-.76.06C8.46 11 6 8.54 6 5.5S8.46 0 11.5 0zm0 1.5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'];
var SignalSearchIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "signal-search"
  }, props));
}));
exports.SignalSearchIcon = SignalSearchIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU2lnbmFsU2VhcmNoSWNvbi5qcyJdLCJuYW1lcyI6WyJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsIlNpZ25hbFNlYXJjaEljb24iLCJwcm9wcyIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQixzc0JBRGlCLEVBRWpCLGd0QkFGaUIsQ0FBbkI7QUFJQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIseVpBRGlCLEVBRWpCLDhpQkFGaUIsRUFHakIsNGFBSGlCLENBQW5CO0FBTU8sSUFBTUMsZ0JBQWdCLEdBQUcsaUJBQzlCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FEOEIsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNNS40NzQgNy45NzFBNS4zMSA1LjMxIDAgMDA2LjY2IDguOWwuMDA3LjAxOS4wMTguMDU2Yy4wMTUuMDM4LjAzOC4wNi4wNDUuMDk4bDEuNSA1Ljk5OWEuNzUuNzUgMCAwMS0xLjQ1NS4zNmwtLjQyLTEuNjhoLS43MDRsLS40MiAxLjY4YS43NDYuNzQ2IDAgMDEtLjkwNy41NDcuNzQ2Ljc0NiAwIDAxLS41NDctLjkwN2wxLjUtNmMuMDA3LS4wMzcuMDMtLjA2LjA0NC0uMDk3LjAxNS0uMDM3LjAxNS0uMDc1LjAzOC0uMTEyYS43MjIuNzIyIDAgMDEtLjEwNS0uMzZjMC0uMjA3LjA4NC0uMzk0LjIyLS41M3pNMi43OTUgNS4yNzdhLjc2My43NjMgMCAwMC0uMDE1LTEuMDY1Ljc1Ni43NTYgMCAwMC0xLjA2NS4wMTVjLTIuMjg2IDIuMzQtMi4yODYgNi4yMSAwIDguNTQ5YS43NDcuNzQ3IDAgMTAxLjA3Mi0xLjA0MmMtMS43MDktMS43NjMtMS43MDktNC43MDIuMDA4LTYuNDU3ek03LjgwOCA5LjM4OGE1LjMxOCA1LjMxOCAwIDAwMS41OC4yMTEgMi4yMzYgMi4yMzYgMCAwMS0uNjU2Ljk4Ljc1Ni43NTYgMCAwMS0xLjA1Ny0uMDk4Ljc1Ni43NTYgMCAwMS4wOTctMS4wNTdsLjAzNi0uMDM2ek0xMS41NDQgOS4xMDVsLjM3OC4zNzhhNi4wMiA2LjAyIDAgMDEtMS42MzggMy4yODVjLS4yODUuMy0uNzU3LjMtMS4wNTcuMDE1YS43NC43NCAwIDAxLS4wMTUtMS4wNTcgNC41MiA0LjUyIDAgMDAxLjE4NS0yLjI0Yy40LS4wODMuNzg1LS4yMTIgMS4xNDctLjM4MXonLFxuICAnTTQuMDU0IDkuNDI0Yy0uNDI3LS4zNTItLjM1Mi0xLjU4Mi0uMDMtMS44MjJhLjc1Mi43NTIgMCAwMC4xNS0xLjA1Ljc1Mi43NTIgMCAwMC0xLjA1LS4xNWMtMS4wNzkuODAyLTEuMjIxIDMuMTgtLjAzIDQuMTc3YS43NS43NSAwIDEwLjk2LTEuMTU1ek05LjMxOCAwYTQuMzE4IDQuMzE4IDAgMDE0LjMxNyA0LjMxOGMwIC4yMDYtLjAyLjQwMi0uMDQ5LjU5OC0uMDEuMDUtLjAxLjA4OC0uMDIuMTM4LS4wMzkuMTk2LS4wNzguMzgyLS4xMzcuNTY5di4wMWMtLjA1OS4xODYtLjEzNy4zNjMtLjIxNi41NGwtLjAzOS4wODdhNS4yODUgNS4yODUgMCAwMS0uMjk0LjUxbDIuODg0IDIuODg2YS44NzguODc4IDAgMDEuMjM2LjU1OS43ODcuNzg3IDAgMDEtLjc4NS43ODUuNzg1Ljc4NSAwIDAxLS41Ni0uMjI2TDExLjc3MiA3Ljg5YTUuMjg1IDUuMjg1IDAgMDEtLjUxLjI5NWwtLjA4OS4wMzljLS4xNzYuMDc5LS4zNTMuMTU3LS41NC4yMTZoLS4wMWEzLjcwMSAzLjcwMSAwIDAxLS41NjguMTM3Yy0uMDUuMDEtLjA5OS4wMi0uMTM4LjAyLS4xOTYuMDMtLjM5Mi4wNDktLjU5OC4wNDlBNC4zMTggNC4zMTggMCAwMTUgNC4zMjcgNC4zMzIgNC4zMzIgMCAwMTkuMzE4IDB6bS0uMDIgMS4xQTMuMTk1IDMuMTk1IDAgMDA2LjEgNC4yOThhMy4xOTUgMy4xOTUgMCAwMDMuMTk4IDMuMTk4IDMuMTk1IDMuMTk1IDAgMDAzLjE5OC0zLjE5OEEzLjE5NSAzLjE5NSAwIDAwOS4yOTggMS4xeidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNNy4xNSAxMC4zM2MuODg4LjggMS45OTkgMS4zNiAzLjIyOCAxLjU3NGwyLjMyNiA2Ljk4YS44NDYuODQ2IDAgMDEtLjUzNSAxLjA3Ljg0NC44NDQgMCAwMS0xLjA3Mi0uNTM1bC0xLjIyNS0zLjY3MUg3LjEyNUw1LjkgMTkuNDE5YS44NS44NSAwIDAxLTEuMDcyLjUzNi44NS44NSAwIDAxLS41MzYtMS4wNzFsMi44NTctOC41NTV6bTEuMzUzIDEuMzA1bC0uODA4IDIuNDEzaDEuNjA3bC0uOC0yLjQxM3pNNSA1LjVjMCAuNzYuMTMgMS40OS4zNyAyLjE3LS40OTYgMS4wNTYtLjMxMyAyLjM1Ni43MDQgMy4yOS4zODUuMzUzLjQwNC45NC4wMzggMS4zMTFhLjk4Mi45ODIgMCAwMS0xLjM1Ni4wMzhjLTIuMTgzLTIuMDEtMi01LjEyNS4wMS02Ljk0YS45NS45NSAwIDAxLjI0LS4xNTZBNi40MjEgNi40MjEgMCAwMDUgNS41eicsXG4gICdNMy44NzQgMTMuMTg1Yy0xLjM0Ni0uOTE4LTIuMTg3LTIuNjctMi4xODctNC4zNCAwLTEuNzUyLjc1Ny0zLjI1NCAyLjE4Ny00LjMzOS40Mi0uMjUuNDItLjgzNC4xNjgtMS4xNjgtLjI1Mi0uNDE4LS44NC0uNDE4LTEuMTc3LS4xNjdDMS4wMTQgNC41OS0uMDggNi41MDkuMDA1IDguODQ2Yy4wODQgMi4yNTMgMS4xNzcgNC40MjMgMi44NiA1LjY3NS4xNjguMDgzLjMzNi4xNjYuNTA0LjE2Ni4yNTMgMCAuNTA1LS4wODMuNjczLS4zMzMuMzM3LS40MTguMjUzLS45MTgtLjE2OC0xLjE2OXpNMTIuMjQ2IDEyLjMwOWEuOTguOTggMCAwMS0xLjM1NC0uMDM3LjkxNy45MTcgMCAwMS0uMjA2LS4zMjQgNi41NCA2LjU0IDAgMDAxLjk1OS0uMDQ5IDUuMTI1IDUuMTI1IDAgMDEtLjM5OS40MXpNMTQuNjMxIDExLjQ3NmwxLjIyOCAxLjIyOWE2LjYgNi42IDAgMDEtMS43MjMgMS44MTZjLS4xNjkuMDgzLS4zMzcuMTY2LS41MDUuMTY2LS4yNTMgMC0uNTA1LS4wODMtLjY3My0uMzMzLS4zMzctLjQxOC0uMjUzLS45MTguMTY4LTEuMTY5LjYyLS40MjIgMS4xMzMtMS4wMjIgMS41MDUtMS43MDl6JyxcbiAgJ00xMS41IDBDMTQuNTQgMCAxNyAyLjQ2IDE3IDUuNWMwIC4yNi0uMDIuNTEtLjA2Ljc1bC0uMDMuMTdjLS4wNC4yNS0uMS40OS0uMTcuNzN2LjAxYy0uMDguMjQtLjE3LjQ3LS4yOC42OS0uMDEuMDQtLjAzLjA3LS4wNS4xMS0uMTEuMjMtLjI0LjQ0LS4zOC42NWwzLjY4IDMuNjhBMS4wMDMgMS4wMDMgMCAwMTE5IDE0Yy0uMjggMC0uNTMtLjExLS43LS4yOWwtMy42OC0zLjY4Yy0uMjEuMTQtLjQyLjI3LS42NS4zOC0uMDQuMDEtLjA3LjAzLS4xMS4wNS0uMjIuMTEtLjQ1LjItLjY5LjI4aC0uMDFjLS4yNC4wNy0uNDguMTMtLjczLjE3bC0uMTcuMDNjLS4yNS4wNC0uNS4wNi0uNzYuMDZDOC40NiAxMSA2IDguNTQgNiA1LjVTOC40NiAwIDExLjUgMHptMCAxLjVjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00eidcbl1cblxuZXhwb3J0IGNvbnN0IFNpZ25hbFNlYXJjaEljb24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiAoXG4gICAgPEljb25cbiAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBuYW1lPVwic2lnbmFsLXNlYXJjaFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSlcbilcbiJdfQ==
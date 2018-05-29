(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _modules = require('./modules/');

var modules = _interopRequireWildcard(_modules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

modules.myAwesomeModule.consoleMessage("Hello World!");
modules.myAwesomeModule.consoleList(['a', 'b', 'c']);

},{"./modules/":2}],2:[function(require,module,exports){
'use strict';

var _myAwesomeModule = require('./myAwesomeModule');

var _myAwesomeModule2 = _interopRequireDefault(_myAwesomeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { myAwesomeModule: _myAwesomeModule2.default };

},{"./myAwesomeModule":3}],3:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var consoleMessage = function consoleMessage(message) {
	console.log(message);
};

var consoleList = function consoleList(list) {
	var _console;

	(_console = console).log.apply(_console, _toConsumableArray(list));
};

module.exports = { consoleMessage: consoleMessage, consoleList: consoleList };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL21haW4uanMiLCJjbGllbnQvYXBwL21vZHVsZXMvaW5kZXguanMiLCJjbGllbnQvYXBwL21vZHVsZXMvbXlBd2Vzb21lTW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7SUFBWSxPOzs7O0FBRVosUUFBUSxlQUFSLENBQXdCLGNBQXhCLENBQXVDLGNBQXZDO0FBQ0EsUUFBUSxlQUFSLENBQXdCLFdBQXhCLENBQW9DLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxHQUFULENBQXBDOzs7OztBQ0hBOzs7Ozs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsRUFBRSwwQ0FBRixFQUFqQjs7Ozs7OztBQ0ZBLElBQU0saUJBQWlCLFNBQWpCLGNBQWlCLFVBQVc7QUFDakMsU0FBUSxHQUFSLENBQVksT0FBWjtBQUNBLENBRkQ7O0FBSUEsSUFBTSxjQUFjLFNBQWQsV0FBYyxPQUFRO0FBQUE7O0FBQzNCLHNCQUFRLEdBQVIsb0NBQWUsSUFBZjtBQUNBLENBRkQ7O0FBSUEsT0FBTyxPQUFQLEdBQWlCLEVBQUUsOEJBQUYsRUFBa0Isd0JBQWxCLEVBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0ICogYXMgbW9kdWxlcyBmcm9tICcuL21vZHVsZXMvJ1xuXG5tb2R1bGVzLm15QXdlc29tZU1vZHVsZS5jb25zb2xlTWVzc2FnZShcIkhlbGxvIFdvcmxkIVwiKTtcbm1vZHVsZXMubXlBd2Vzb21lTW9kdWxlLmNvbnNvbGVMaXN0KFsnYScsJ2InLCdjJ10pO1xuIiwiaW1wb3J0IG15QXdlc29tZU1vZHVsZSBmcm9tICcuL215QXdlc29tZU1vZHVsZSc7XG5cbm1vZHVsZS5leHBvcnRzID0geyBteUF3ZXNvbWVNb2R1bGUgfVxuIiwiY29uc3QgY29uc29sZU1lc3NhZ2UgPSBtZXNzYWdlID0+IHtcblx0Y29uc29sZS5sb2cobWVzc2FnZSlcbn1cblxuY29uc3QgY29uc29sZUxpc3QgPSBsaXN0ID0+IHtcblx0Y29uc29sZS5sb2coLi4ubGlzdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGNvbnNvbGVNZXNzYWdlLCBjb25zb2xlTGlzdCB9XG4iXX0=

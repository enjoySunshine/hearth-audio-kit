"use strict";
var standardizedAudioContext = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@babel/runtime/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayWithHoles.js"(exports, module) {
      function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
      }
      module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS({
    "node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"(exports, module) {
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e, n, i, u, a = [], f = true, o = false;
          try {
            if (i = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = false;
            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
          } catch (r2) {
            o = true, n = r2;
          } finally {
            try {
              if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally {
              if (o) throw n;
            }
          }
          return a;
        }
      }
      module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
      function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
      }
      module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
      var arrayLikeToArray = require_arrayLikeToArray();
      function _unsupportedIterableToArray(r, a) {
        if (r) {
          if ("string" == typeof r) return arrayLikeToArray(r, a);
          var t = {}.toString.call(r).slice(8, -1);
          return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
        }
      }
      module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS({
    "node_modules/@babel/runtime/helpers/nonIterableRest.js"(exports, module) {
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/slicedToArray.js"(exports, module) {
      var arrayWithHoles = require_arrayWithHoles();
      var iterableToArrayLimit = require_iterableToArrayLimit();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableRest = require_nonIterableRest();
      function _slicedToArray(r, e) {
        return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
      }
      module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/classCallCheck.js
  var require_classCallCheck = __commonJS({
    "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
      function _classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/toPrimitive.js
  var require_toPrimitive = __commonJS({
    "node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != _typeof(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/toPropertyKey.js
  var require_toPropertyKey = __commonJS({
    "node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      var toPrimitive = require_toPrimitive();
      function toPropertyKey(t) {
        var i = toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
      }
      module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/createClass.js
  var require_createClass = __commonJS({
    "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
      var toPropertyKey = require_toPropertyKey();
      function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
        }
      }
      function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
          writable: false
        }), e;
      }
      module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/automation-events/build/es5/bundle.js
  var require_bundle = __commonJS({
    "node_modules/automation-events/build/es5/bundle.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_slicedToArray(), require_classCallCheck(), require_createClass()) : typeof define === "function" && define.amd ? define(["exports", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.automationEvents = {}, global._slicedToArray, global._classCallCheck, global._createClass));
      })(exports, (function(exports2, _slicedToArray, _classCallCheck, _createClass) {
        "use strict";
        var createExtendedExponentialRampToValueAutomationEvent = function createExtendedExponentialRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createExtendedLinearRampToValueAutomationEvent = function createExtendedLinearRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetValueAutomationEvent2 = function createSetValueAutomationEvent3(value, startTime) {
          return {
            startTime,
            type: "setValue",
            value
          };
        };
        var createSetValueCurveAutomationEvent2 = function createSetValueCurveAutomationEvent3(values, startTime, duration) {
          return {
            duration,
            startTime,
            type: "setValueCurve",
            values
          };
        };
        var getTargetValueAtTime = function getTargetValueAtTime2(time, valueAtStartTime, _ref) {
          var startTime = _ref.startTime, target = _ref.target, timeConstant = _ref.timeConstant;
          return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
        };
        var isExponentialRampToValueAutomationEvent = function isExponentialRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "exponentialRampToValue";
        };
        var isLinearRampToValueAutomationEvent = function isLinearRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "linearRampToValue";
        };
        var isAnyRampToValueAutomationEvent = function isAnyRampToValueAutomationEvent2(automationEvent) {
          return isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent);
        };
        var isSetValueAutomationEvent = function isSetValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValue";
        };
        var isSetValueCurveAutomationEvent = function isSetValueCurveAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValueCurve";
        };
        var _getValueOfAutomationEventAtIndexAtTime = function getValueOfAutomationEventAtIndexAtTime(automationEvents, index, time, defaultValue) {
          var automationEvent = automationEvents[index];
          return automationEvent === void 0 ? defaultValue : isAnyRampToValueAutomationEvent(automationEvent) || isSetValueAutomationEvent(automationEvent) ? automationEvent.value : isSetValueCurveAutomationEvent(automationEvent) ? automationEvent.values[automationEvent.values.length - 1] : getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, automationEvent.startTime, defaultValue), automationEvent);
        };
        var getEndTimeAndValueOfPreviousAutomationEvent = function getEndTimeAndValueOfPreviousAutomationEvent2(automationEvents, index, currentAutomationEvent, nextAutomationEvent, defaultValue) {
          return currentAutomationEvent === void 0 ? [nextAutomationEvent.insertTime, defaultValue] : isAnyRampToValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.endTime, currentAutomationEvent.value] : isSetValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime, currentAutomationEvent.value] : isSetValueCurveAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime + currentAutomationEvent.duration, currentAutomationEvent.values[currentAutomationEvent.values.length - 1]] : [currentAutomationEvent.startTime, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, currentAutomationEvent.startTime, defaultValue)];
        };
        var isCancelAndHoldAutomationEvent = function isCancelAndHoldAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelAndHold";
        };
        var isCancelScheduledValuesAutomationEvent = function isCancelScheduledValuesAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelScheduledValues";
        };
        var getEventTime = function getEventTime2(automationEvent) {
          if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
            return automationEvent.cancelTime;
          }
          if (isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent)) {
            return automationEvent.endTime;
          }
          return automationEvent.startTime;
        };
        var getExponentialRampValueAtTime = function getExponentialRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          if (valueAtStartTime === value) {
            return value;
          }
          if (0 < valueAtStartTime && 0 < value || valueAtStartTime < 0 && value < 0) {
            return valueAtStartTime * Math.pow(value / valueAtStartTime, (time - startTime) / (endTime - startTime));
          }
          return time < endTime ? valueAtStartTime : value;
        };
        var getLinearRampValueAtTime = function getLinearRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          return valueAtStartTime + (time - startTime) / (endTime - startTime) * (value - valueAtStartTime);
        };
        var interpolateValue = function interpolateValue2(values, theoreticIndex) {
          var lowerIndex = Math.floor(theoreticIndex);
          if (lowerIndex === theoreticIndex) {
            return values[lowerIndex];
          }
          var upperIndex = Math.ceil(theoreticIndex);
          return (1 - (theoreticIndex - lowerIndex)) * values[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * values[upperIndex];
        };
        var getValueCurveValueAtTime = function getValueCurveValueAtTime2(time, _ref) {
          var duration = _ref.duration, startTime = _ref.startTime, values = _ref.values;
          var theoreticIndex = (time - startTime) / duration * (values.length - 1);
          return interpolateValue(values, theoreticIndex);
        };
        var truncateValueCurve = function truncateValueCurve2(values, originalDuration, targetDuration) {
          var length = values.length;
          var truncatedLength = Math.max(1, Math.floor(targetDuration / originalDuration * length)) + 1;
          var truncatedValues = values instanceof Float32Array ? new Float32Array(truncatedLength) : values.slice(0, truncatedLength);
          for (var i = 0; i < truncatedLength; i += 1) {
            var time = i / (truncatedLength - 1) * targetDuration;
            var theoreticIndex = time / originalDuration * (length - 1);
            truncatedValues[i] = interpolateValue(values, theoreticIndex);
          }
          return truncatedValues;
        };
        var isSetTargetAutomationEvent = function isSetTargetAutomationEvent2(automationEvent) {
          return automationEvent.type === "setTarget";
        };
        var AutomationEventList2 = /* @__PURE__ */ (function() {
          function AutomationEventList3(defaultValue) {
            _classCallCheck(this, AutomationEventList3);
            this._automationEvents = [];
            this._currenTime = 0;
            this._defaultValue = defaultValue;
          }
          return _createClass(AutomationEventList3, [{
            key: Symbol.iterator,
            value: function value() {
              return this._automationEvents[Symbol.iterator]();
            }
          }, {
            key: "add",
            value: function add(automationEvent) {
              var eventTime = getEventTime(automationEvent);
              if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
                var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  if (isCancelScheduledValuesAutomationEvent(automationEvent) && isSetValueCurveAutomationEvent(currentAutomationEvent)) {
                    return currentAutomationEvent.startTime + currentAutomationEvent.duration >= eventTime;
                  }
                  return getEventTime(currentAutomationEvent) >= eventTime;
                });
                var removedAutomationEvent = this._automationEvents[index];
                if (index !== -1) {
                  this._automationEvents = this._automationEvents.slice(0, index);
                }
                if (isCancelAndHoldAutomationEvent(automationEvent)) {
                  var lastAutomationEvent = this._automationEvents[this._automationEvents.length - 1];
                  if (removedAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(removedAutomationEvent)) {
                    if (lastAutomationEvent !== void 0 && isSetTargetAutomationEvent(lastAutomationEvent)) {
                      throw new Error("The internal list is malformed.");
                    }
                    var startTime = lastAutomationEvent === void 0 ? removedAutomationEvent.insertTime : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.startTime + lastAutomationEvent.duration : getEventTime(lastAutomationEvent);
                    var startValue = lastAutomationEvent === void 0 ? this._defaultValue : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.values[lastAutomationEvent.values.length - 1] : lastAutomationEvent.value;
                    var value = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? getExponentialRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent) : getLinearRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent);
                    var truncatedAutomationEvent = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? createExtendedExponentialRampToValueAutomationEvent(value, eventTime, this._currenTime) : createExtendedLinearRampToValueAutomationEvent(value, eventTime, this._currenTime);
                    this._automationEvents.push(truncatedAutomationEvent);
                  }
                  if (lastAutomationEvent !== void 0 && isSetTargetAutomationEvent(lastAutomationEvent)) {
                    this._automationEvents.push(createSetValueAutomationEvent2(this.getValue(eventTime), eventTime));
                  }
                  if (lastAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(lastAutomationEvent) && lastAutomationEvent.startTime + lastAutomationEvent.duration > eventTime) {
                    var duration = eventTime - lastAutomationEvent.startTime;
                    this._automationEvents[this._automationEvents.length - 1] = createSetValueCurveAutomationEvent2(truncateValueCurve(lastAutomationEvent.values, lastAutomationEvent.duration, duration), lastAutomationEvent.startTime, duration);
                  }
                }
              } else {
                var _index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  return getEventTime(currentAutomationEvent) > eventTime;
                });
                var previousAutomationEvent = _index === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[_index - 1];
                if (previousAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(previousAutomationEvent) && getEventTime(previousAutomationEvent) + previousAutomationEvent.duration > eventTime) {
                  return false;
                }
                var persistentAutomationEvent = isExponentialRampToValueAutomationEvent(automationEvent) ? createExtendedExponentialRampToValueAutomationEvent(automationEvent.value, automationEvent.endTime, this._currenTime) : isLinearRampToValueAutomationEvent(automationEvent) ? createExtendedLinearRampToValueAutomationEvent(automationEvent.value, eventTime, this._currenTime) : automationEvent;
                if (_index === -1) {
                  this._automationEvents.push(persistentAutomationEvent);
                } else {
                  if (isSetValueCurveAutomationEvent(automationEvent) && eventTime + automationEvent.duration > getEventTime(this._automationEvents[_index])) {
                    return false;
                  }
                  this._automationEvents.splice(_index, 0, persistentAutomationEvent);
                }
              }
              return true;
            }
          }, {
            key: "flush",
            value: function flush(time) {
              var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                return getEventTime(currentAutomationEvent) > time;
              });
              if (index > 1) {
                var remainingAutomationEvents = this._automationEvents.slice(index - 1);
                var firstRemainingAutomationEvent = remainingAutomationEvents[0];
                if (isSetTargetAutomationEvent(firstRemainingAutomationEvent)) {
                  remainingAutomationEvents.unshift(createSetValueAutomationEvent2(_getValueOfAutomationEventAtIndexAtTime(this._automationEvents, index - 2, firstRemainingAutomationEvent.startTime, this._defaultValue), firstRemainingAutomationEvent.startTime));
                }
                this._automationEvents = remainingAutomationEvents;
              }
            }
          }, {
            key: "getValue",
            value: function getValue(time) {
              if (this._automationEvents.length === 0) {
                return this._defaultValue;
              }
              var indexOfNextEvent = this._automationEvents.findIndex(function(automationEvent) {
                return getEventTime(automationEvent) > time;
              });
              var nextAutomationEvent = this._automationEvents[indexOfNextEvent];
              var indexOfCurrentEvent = (indexOfNextEvent === -1 ? this._automationEvents.length : indexOfNextEvent) - 1;
              var currentAutomationEvent = this._automationEvents[indexOfCurrentEvent];
              if (currentAutomationEvent !== void 0 && isSetTargetAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || nextAutomationEvent.insertTime > time)) {
                return getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(this._automationEvents, indexOfCurrentEvent - 1, currentAutomationEvent.startTime, this._defaultValue), currentAutomationEvent);
              }
              if (currentAutomationEvent !== void 0 && isSetValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (currentAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || currentAutomationEvent.startTime + currentAutomationEvent.duration > time)) {
                if (time < currentAutomationEvent.startTime + currentAutomationEvent.duration) {
                  return getValueCurveValueAtTime(time, currentAutomationEvent);
                }
                return currentAutomationEvent.values[currentAutomationEvent.values.length - 1];
              }
              if (currentAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (nextAutomationEvent !== void 0 && isExponentialRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf2 = _slicedToArray(_getEndTimeAndValueOf, 2), startTime = _getEndTimeAndValueOf2[0], value = _getEndTimeAndValueOf2[1];
                return getExponentialRampValueAtTime(time, startTime, value, nextAutomationEvent);
              }
              if (nextAutomationEvent !== void 0 && isLinearRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf3 = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf4 = _slicedToArray(_getEndTimeAndValueOf3, 2), _startTime = _getEndTimeAndValueOf4[0], _value = _getEndTimeAndValueOf4[1];
                return getLinearRampValueAtTime(time, _startTime, _value, nextAutomationEvent);
              }
              return this._defaultValue;
            }
          }]);
        })();
        var createCancelAndHoldAutomationEvent2 = function createCancelAndHoldAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelAndHold"
          };
        };
        var createCancelScheduledValuesAutomationEvent2 = function createCancelScheduledValuesAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelScheduledValues"
          };
        };
        var createExponentialRampToValueAutomationEvent2 = function createExponentialRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createLinearRampToValueAutomationEvent2 = function createLinearRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetTargetAutomationEvent2 = function createSetTargetAutomationEvent3(target, startTime, timeConstant) {
          return {
            startTime,
            target,
            timeConstant,
            type: "setTarget"
          };
        };
        exports2.AutomationEventList = AutomationEventList2;
        exports2.createCancelAndHoldAutomationEvent = createCancelAndHoldAutomationEvent2;
        exports2.createCancelScheduledValuesAutomationEvent = createCancelScheduledValuesAutomationEvent2;
        exports2.createExponentialRampToValueAutomationEvent = createExponentialRampToValueAutomationEvent2;
        exports2.createLinearRampToValueAutomationEvent = createLinearRampToValueAutomationEvent2;
        exports2.createSetTargetAutomationEvent = createSetTargetAutomationEvent2;
        exports2.createSetValueAutomationEvent = createSetValueAutomationEvent2;
        exports2.createSetValueCurveAutomationEvent = createSetValueCurveAutomationEvent2;
      }));
    }
  });

  // src/module.ts
  var module_exports = {};
  __export(module_exports, {
    AnalyserNode: () => analyserNodeConstructor,
    AudioBuffer: () => audioBufferConstructor,
    AudioBufferSourceNode: () => audioBufferSourceNodeConstructor,
    AudioContext: () => audioContextConstructor,
    AudioWorkletNode: () => audioWorkletNodeConstructor,
    BiquadFilterNode: () => biquadFilterNodeConstructor,
    ChannelMergerNode: () => channelMergerNodeConstructor,
    ChannelSplitterNode: () => channelSplitterNodeConstructor,
    ConstantSourceNode: () => constantSourceNodeConstructor,
    ConvolverNode: () => convolverNodeConstructor,
    DelayNode: () => delayNodeConstructor,
    DynamicsCompressorNode: () => dynamicsCompressorNodeConstructor,
    GainNode: () => gainNodeConstructor,
    IIRFilterNode: () => iIRFilterNodeConstructor,
    MediaElementAudioSourceNode: () => mediaElementAudioSourceNodeConstructor,
    MediaStreamAudioDestinationNode: () => mediaStreamAudioDestinationNodeConstructor,
    MediaStreamAudioSourceNode: () => mediaStreamAudioSourceNodeConstructor,
    MediaStreamTrackAudioSourceNode: () => mediaStreamTrackAudioSourceNodeConstructor,
    MinimalAudioContext: () => minimalAudioContextConstructor,
    MinimalOfflineAudioContext: () => minimalOfflineAudioContextConstructor,
    OfflineAudioContext: () => offlineAudioContextConstructor,
    OscillatorNode: () => oscillatorNodeConstructor,
    PannerNode: () => pannerNodeConstructor,
    PeriodicWave: () => periodicWaveConstructor,
    StereoPannerNode: () => stereoPannerNodeConstructor,
    WaveShaperNode: () => waveShaperNodeConstructor,
    addAudioWorkletModule: () => addAudioWorkletModule,
    decodeAudioData: () => decodeAudioData,
    isAnyAudioContext: () => isAnyAudioContext,
    isAnyAudioNode: () => isAnyAudioNode,
    isAnyAudioParam: () => isAnyAudioParam,
    isAnyOfflineAudioContext: () => isAnyOfflineAudioContext,
    isSupported: () => isSupported
  });
  var import_automation_events2 = __toESM(require_bundle());

  // src/factories/abort-error.ts
  var createAbortError = () => new DOMException("", "AbortError");

  // src/factories/add-active-input-connection-to-audio-node.ts
  var createAddActiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (activeInputs, source, [output, input, eventListener], ignoreDuplicates) => {
      insertElementInSet2(
        activeInputs[input],
        [source, output, eventListener],
        (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output,
        ignoreDuplicates
      );
    };
  };

  // src/factories/add-audio-node-connections.ts
  var createAddAudioNodeConnections = (audioNodeConnectionsStore) => {
    return (audioNode, audioNodeRenderer, nativeAudioNode) => {
      const activeInputs = [];
      for (let i = 0; i < nativeAudioNode.numberOfInputs; i += 1) {
        activeInputs.push(/* @__PURE__ */ new Set());
      }
      audioNodeConnectionsStore.set(audioNode, {
        activeInputs,
        outputs: /* @__PURE__ */ new Set(),
        passiveInputs: /* @__PURE__ */ new WeakMap(),
        renderer: audioNodeRenderer
      });
    };
  };

  // src/factories/add-audio-param-connections.ts
  var createAddAudioParamConnections = (audioParamConnectionsStore) => {
    return (audioParam) => {
      audioParamConnectionsStore.set(audioParam, { activeInputs: /* @__PURE__ */ new Set(), passiveInputs: /* @__PURE__ */ new WeakMap() });
    };
  };

  // src/helpers/split-import-statements.ts
  var IMPORT_STATEMENT_REGEX = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/;
  var splitImportStatements = (source, url) => {
    const importStatements = [];
    let sourceWithoutImportStatements = source.replace(/^[\s]+/, "");
    let result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    while (result !== null) {
      const unresolvedUrl = result[1].slice(1, -1);
      const importStatementWithResolvedUrl = result[0].replace(/([\s]+)?;?$/, "").replace(unresolvedUrl, new URL(unresolvedUrl, url).toString());
      importStatements.push(importStatementWithResolvedUrl);
      sourceWithoutImportStatements = sourceWithoutImportStatements.slice(result[0].length).replace(/^[\s]+/, "");
      result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    }
    return [importStatements.join(";"), sourceWithoutImportStatements];
  };

  // src/factories/add-audio-worklet-module.ts
  var createAddAudioWorkletModule = (cacheTestResult2, fetchSource, getNativeContext2, getOrCreateBackupOfflineAudioContext2, isNativeOfflineAudioContext2, ongoingRequests, resolvedRequests, testAudioWorkletProcessorPostMessageSupport) => {
    return (context, moduleURL, options = { credentials: "omit" }) => {
      const resolvedRequestsOfContext = resolvedRequests.get(context);
      if (resolvedRequestsOfContext !== void 0 && resolvedRequestsOfContext.has(moduleURL)) {
        return Promise.resolve();
      }
      const ongoingRequestsOfContext = ongoingRequests.get(context);
      if (ongoingRequestsOfContext !== void 0) {
        const promiseOfOngoingRequest = ongoingRequestsOfContext.get(moduleURL);
        if (promiseOfOngoingRequest !== void 0) {
          return promiseOfOngoingRequest;
        }
      }
      const nativeContext = getNativeContext2(context);
      const promise = Promise.all([
        fetchSource(moduleURL),
        Promise.resolve(cacheTestResult2(testAudioWorkletProcessorPostMessageSupport, testAudioWorkletProcessorPostMessageSupport))
      ]).then(([[source, absoluteUrl], isSupportingPostMessage]) => {
        const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
        const patchedAudioWorkletProcessor = isSupportingPostMessage ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}";
        const memberDefinition = isSupportingPostMessage ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));";
        const bufferRegistration = isSupportingPostMessage ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));";
        const wrappedSource = `${importStatements};((AudioWorkletProcessor,registerProcessor)=>{${sourceWithoutImportStatements}
})(${patchedAudioWorkletProcessor},(n,p)=>registerProcessor(n,class extends p{${memberDefinition}process(i,o,p){${bufferRegistration}return super.process(i,o,p)}}))`;
        const blob = new Blob([wrappedSource], { type: "application/javascript; charset=utf-8" });
        const url = URL.createObjectURL(blob);
        return nativeContext.audioWorklet.addModule(url, options).then(() => {
          if (isNativeOfflineAudioContext2(nativeContext)) {
            return;
          }
          const backupOfflineAudioContext = getOrCreateBackupOfflineAudioContext2(nativeContext);
          return backupOfflineAudioContext.audioWorklet.addModule(url, options);
        }).finally(() => URL.revokeObjectURL(url));
      });
      if (ongoingRequestsOfContext === void 0) {
        ongoingRequests.set(context, /* @__PURE__ */ new Map([[moduleURL, promise]]));
      } else {
        ongoingRequestsOfContext.set(moduleURL, promise);
      }
      promise.then(
        () => {
          const updatedResolvedRequestsOfContext = resolvedRequests.get(context);
          if (updatedResolvedRequestsOfContext === void 0) {
            resolvedRequests.set(context, /* @__PURE__ */ new Set([moduleURL]));
          } else {
            updatedResolvedRequestsOfContext.add(moduleURL);
          }
        },
        () => {
        }
      ).finally(() => {
        const updatedOngoingRequestsOfContext = ongoingRequests.get(context);
        if (updatedOngoingRequestsOfContext !== void 0) {
          updatedOngoingRequestsOfContext.delete(moduleURL);
        }
      });
      return promise;
    };
  };

  // src/helpers/get-value-for-key.ts
  var getValueForKey = (map, key) => {
    const value = map.get(key);
    if (value === void 0) {
      throw new Error("A value with the given key could not be found.");
    }
    return value;
  };

  // src/helpers/pick-element-from-set.ts
  var pickElementFromSet = (set, predicate) => {
    const matchingElements = Array.from(set).filter(predicate);
    if (matchingElements.length > 1) {
      throw Error("More than one element was found.");
    }
    if (matchingElements.length === 0) {
      throw Error("No element was found.");
    }
    const [matchingElement] = matchingElements;
    set.delete(matchingElement);
    return matchingElement;
  };

  // src/helpers/delete-passive-input-connection-to-audio-node.ts
  var deletePassiveInputConnectionToAudioNode = (passiveInputs, source, output, input) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(
      passiveInputConnections,
      (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input
    );
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // src/globals.ts
  var ACTIVE_AUDIO_NODE_STORE = /* @__PURE__ */ new WeakSet();
  var AUDIO_NODE_CONNECTIONS_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_NODE_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_PARAM_CONNECTIONS_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_PARAM_STORE = /* @__PURE__ */ new WeakMap();
  var CONTEXT_STORE = /* @__PURE__ */ new WeakMap();
  var EVENT_LISTENERS = /* @__PURE__ */ new WeakMap();
  var CYCLE_COUNTERS = /* @__PURE__ */ new WeakMap();

  // src/helpers/get-event-listeners-of-audio-node.ts
  var getEventListenersOfAudioNode = (audioNode) => {
    return getValueForKey(EVENT_LISTENERS, audioNode);
  };

  // src/helpers/set-internal-state-to-active.ts
  var setInternalStateToActive = (audioNode) => {
    if (ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is already stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.add(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(true));
  };

  // src/guards/audio-worklet-node.ts
  var isAudioWorkletNode = (audioNode) => {
    return "port" in audioNode;
  };

  // src/helpers/set-internal-state-to-passive.ts
  var setInternalStateToPassive = (audioNode) => {
    if (!ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is not stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.delete(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(false));
  };

  // src/helpers/set-internal-state-to-passive-when-necessary.ts
  var setInternalStateToPassiveWhenNecessary = (audioNode, activeInputs) => {
    if (!isAudioWorkletNode(audioNode) && activeInputs.every((connections) => connections.size === 0)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // src/factories/add-connection-to-audio-node.ts
  var createAddConnectionToAudioNode = (addActiveInputConnectionToAudioNode2, addPassiveInputConnectionToAudioNode2, connectNativeAudioNodeToNativeAudioNode2, deleteActiveInputConnectionToAudioNode2, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getAudioNodeTailTime2, getEventListenersOfAudioNode2, getNativeAudioNode2, insertElementInSet2, isActiveAudioNode2, isPartOfACycle2, isPassiveAudioNode2) => {
    const tailTimeTimeoutIds = /* @__PURE__ */ new WeakMap();
    return (source, destination, output, input, isOffline) => {
      const { activeInputs, passiveInputs } = getAudioNodeConnections2(destination);
      const { outputs } = getAudioNodeConnections2(source);
      const eventListeners = getEventListenersOfAudioNode2(source);
      const eventListener = (isActive) => {
        const nativeDestinationAudioNode = getNativeAudioNode2(destination);
        const nativeSourceAudioNode = getNativeAudioNode2(source);
        if (isActive) {
          const partialConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
          addActiveInputConnectionToAudioNode2(activeInputs, source, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          if (isPassiveAudioNode2(destination)) {
            setInternalStateToActive(destination);
          }
        } else {
          const partialConnection = deleteActiveInputConnectionToAudioNode2(activeInputs, source, output, input);
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          const tailTime = getAudioNodeTailTime2(destination);
          if (tailTime === 0) {
            if (isActiveAudioNode2(destination)) {
              setInternalStateToPassiveWhenNecessary(destination, activeInputs);
            }
          } else {
            const tailTimeTimeoutId = tailTimeTimeoutIds.get(destination);
            if (tailTimeTimeoutId !== void 0) {
              clearTimeout(tailTimeTimeoutId);
            }
            tailTimeTimeoutIds.set(
              destination,
              setTimeout(() => {
                if (isActiveAudioNode2(destination)) {
                  setInternalStateToPassiveWhenNecessary(destination, activeInputs);
                }
              }, tailTime * 1e3)
            );
          }
        }
      };
      if (insertElementInSet2(
        outputs,
        [destination, output, input],
        (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output && outputConnection[2] === input,
        true
      )) {
        eventListeners.add(eventListener);
        if (isActiveAudioNode2(source)) {
          addActiveInputConnectionToAudioNode2(activeInputs, source, [output, input, eventListener], true);
        } else {
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, [source, output, eventListener], true);
        }
        return true;
      }
      return false;
    };
  };

  // src/factories/add-passive-input-connection-to-audio-node.ts
  var createAddPassiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (passiveInputs, input, [source, output, eventListener], ignoreDuplicates) => {
      const passiveInputConnections = passiveInputs.get(source);
      if (passiveInputConnections === void 0) {
        passiveInputs.set(source, /* @__PURE__ */ new Set([[output, input, eventListener]]));
      } else {
        insertElementInSet2(
          passiveInputConnections,
          [output, input, eventListener],
          (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input,
          ignoreDuplicates
        );
      }
    };
  };

  // src/factories/add-silent-connection.ts
  var createAddSilentConnection = (createNativeGainNode2) => {
    return (nativeContext, nativeAudioScheduledSourceNode) => {
      const nativeGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      nativeAudioScheduledSourceNode.connect(nativeGainNode).connect(nativeContext.destination);
      const disconnect = () => {
        nativeAudioScheduledSourceNode.removeEventListener("ended", disconnect);
        nativeAudioScheduledSourceNode.disconnect(nativeGainNode);
        nativeGainNode.disconnect();
      };
      nativeAudioScheduledSourceNode.addEventListener("ended", disconnect);
    };
  };

  // src/factories/add-unrendered-audio-worklet-node.ts
  var createAddUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).add(audioWorkletNode);
    };
  };

  // src/factories/analyser-node-constructor.ts
  var DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    fftSize: 2048,
    maxDecibels: -30,
    minDecibels: -100,
    smoothingTimeConstant: 0.8
  };
  var createAnalyserNodeConstructor = (audionNodeConstructor, createAnalyserNodeRenderer2, createNativeAnalyserNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class AnalyserNode extends audionNodeConstructor {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
        const nativeAnalyserNode = createNativeAnalyserNode2(nativeContext, mergedOptions);
        const analyserNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createAnalyserNodeRenderer2() : null;
        super(context, false, nativeAnalyserNode, analyserNodeRenderer);
        this._nativeAnalyserNode = nativeAnalyserNode;
      }
      get fftSize() {
        return this._nativeAnalyserNode.fftSize;
      }
      set fftSize(value) {
        this._nativeAnalyserNode.fftSize = value;
      }
      get frequencyBinCount() {
        return this._nativeAnalyserNode.frequencyBinCount;
      }
      get maxDecibels() {
        return this._nativeAnalyserNode.maxDecibels;
      }
      set maxDecibels(value) {
        this._nativeAnalyserNode.maxDecibels = value;
      }
      get minDecibels() {
        return this._nativeAnalyserNode.minDecibels;
      }
      set minDecibels(value) {
        this._nativeAnalyserNode.minDecibels = value;
      }
      get smoothingTimeConstant() {
        return this._nativeAnalyserNode.smoothingTimeConstant;
      }
      set smoothingTimeConstant(value) {
        this._nativeAnalyserNode.smoothingTimeConstant = value;
      }
      getByteFrequencyData(array) {
        this._nativeAnalyserNode.getByteFrequencyData(array);
      }
      getByteTimeDomainData(array) {
        this._nativeAnalyserNode.getByteTimeDomainData(array);
      }
      getFloatFrequencyData(array) {
        this._nativeAnalyserNode.getFloatFrequencyData(array);
      }
      getFloatTimeDomainData(array) {
        this._nativeAnalyserNode.getFloatTimeDomainData(array);
      }
    };
  };

  // src/factories/analyser-node-renderer-factory.ts
  var createAnalyserNodeRendererFactory = (getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAnalyserNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAnalyserNode = renderedNativeAnalyserNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAnalyserNode !== void 0) {
            return renderedNativeAnalyserNode;
          }
          const nativeAnalyserNode = getNativeAudioNode2(proxy);
          renderedNativeAnalyserNodes.set(nativeOfflineAudioContext, nativeAnalyserNode);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAnalyserNode);
          return nativeAnalyserNode;
        }
      };
    };
  };

  // src/factories/audio-buffer-constructor.ts
  var DEFAULT_OPTIONS2 = {
    numberOfChannels: 1
  };
  var createAudioBufferConstructor = (audioBufferStore2, nativeAudioBufferConstructor2) => {
    return class AudioBuffer {
      constructor(options) {
        if (nativeAudioBufferConstructor2 === null) {
          throw new Error("Missing the native AudioBuffer constructor.");
        }
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS2, ...options };
        const audioBuffer = new nativeAudioBufferConstructor2({ length, numberOfChannels, sampleRate });
        audioBufferStore2.add(audioBuffer);
        return audioBuffer;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === AudioBuffer.prototype || audioBufferStore2.has(instance);
      }
    };
  };

  // src/helpers/is-active-audio-node.ts
  var isActiveAudioNode = (audioNode) => ACTIVE_AUDIO_NODE_STORE.has(audioNode);

  // src/factories/audio-buffer-source-node-constructor.ts
  var DEFAULT_OPTIONS3 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    detune: 0,
    loop: false,
    loopEnd: 0,
    loopStart: 0,
    playbackRate: 1
  };
  var createAudioBufferSourceNodeConstructor = (audioNodeConstructor2, createAudioBufferSourceNodeRenderer2, createAudioParam2, createNativeAudioBufferSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class AudioBufferSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS3, ...options };
        const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const audioBufferSourceNodeRenderer = isOffline ? createAudioBufferSourceNodeRenderer2() : null;
        super(context, false, nativeAudioBufferSourceNode, audioBufferSourceNodeRenderer);
        this._detune = createAudioParam2(this, isOffline, nativeAudioBufferSourceNode.detune);
        this._nativeAudioBufferSourceNode = nativeAudioBufferSourceNode;
        this._onended = null;
        this._playbackRate = createAudioParam2(this, isOffline, nativeAudioBufferSourceNode.playbackRate);
      }
      get buffer() {
        return this._nativeAudioBufferSourceNode.buffer;
      }
      set buffer(value) {
        this._nativeAudioBufferSourceNode.buffer = value;
      }
      get detune() {
        return this._detune;
      }
      get loop() {
        return this._nativeAudioBufferSourceNode.loop;
      }
      set loop(value) {
        this._nativeAudioBufferSourceNode.loop = value;
      }
      get loopEnd() {
        return this._nativeAudioBufferSourceNode.loopEnd;
      }
      set loopEnd(value) {
        this._nativeAudioBufferSourceNode.loopEnd = value;
      }
      get loopStart() {
        return this._nativeAudioBufferSourceNode.loopStart;
      }
      set loopStart(value) {
        this._nativeAudioBufferSourceNode.loopStart = value;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioBufferSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeAudioBufferSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get playbackRate() {
        return this._playbackRate;
      }
      start(when = 0, offset = 0, duration) {
        this._nativeAudioBufferSourceNode.start(when, offset, duration);
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeAudioBufferSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeAudioBufferSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeAudioBufferSourceNode.stop(when);
      }
    };
  };

  // src/factories/audio-buffer-source-node-renderer-factory.ts
  var createAudioBufferSourceNodeRendererFactory = (connectAudioParam2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioBufferSourceNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioBufferSourceNode = renderedNativeAudioBufferSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioBufferSourceNode !== void 0) {
            return renderedNativeAudioBufferSourceNode;
          }
          const nativeAudioBufferSourceNode = getNativeAudioNode2(proxy);
          renderedNativeAudioBufferSourceNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeAudioBufferSourceNode.detune);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioBufferSourceNode);
          return nativeAudioBufferSourceNode;
        }
      };
    };
  };

  // src/guards/audio-buffer-source-node.ts
  var isAudioBufferSourceNode = (audioNode) => {
    return "playbackRate" in audioNode;
  };

  // src/guards/biquad-filter-node.ts
  var isBiquadFilterNode = (audioNode) => {
    return "frequency" in audioNode && "gain" in audioNode;
  };

  // src/guards/constant-source-node.ts
  var isConstantSourceNode = (audioNode) => {
    return "offset" in audioNode;
  };

  // src/guards/gain-node.ts
  var isGainNode = (audioNode) => {
    return !("frequency" in audioNode) && "gain" in audioNode;
  };

  // src/guards/oscillator-node.ts
  var isOscillatorNode = (audioNode) => {
    return "detune" in audioNode && "frequency" in audioNode && !("gain" in audioNode);
  };

  // src/guards/stereo-panner-node.ts
  var isStereoPannerNode = (audioNode) => {
    return "pan" in audioNode;
  };

  // src/helpers/get-audio-node-connections.ts
  var getAudioNodeConnections = (audioNode) => {
    return getValueForKey(AUDIO_NODE_CONNECTIONS_STORE, audioNode);
  };

  // src/helpers/get-audio-param-connections.ts
  var getAudioParamConnections = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_CONNECTIONS_STORE, audioParam);
  };

  // src/helpers/deactivate-active-audio-node-input-connections.ts
  var deactivateActiveAudioNodeInputConnections = (audioNode, trace) => {
    const { activeInputs } = getAudioNodeConnections(audioNode);
    activeInputs.forEach(
      (connections) => connections.forEach(([source]) => {
        if (!trace.includes(audioNode)) {
          deactivateActiveAudioNodeInputConnections(source, [...trace, audioNode]);
        }
      })
    );
    const audioParams = isAudioBufferSourceNode(audioNode) ? [audioNode.detune, audioNode.playbackRate] : isAudioWorkletNode(audioNode) ? Array.from(audioNode.parameters.values()) : isBiquadFilterNode(audioNode) ? [audioNode.Q, audioNode.detune, audioNode.frequency, audioNode.gain] : isConstantSourceNode(audioNode) ? [audioNode.offset] : isGainNode(audioNode) ? [audioNode.gain] : isOscillatorNode(audioNode) ? [audioNode.detune, audioNode.frequency] : isStereoPannerNode(audioNode) ? [audioNode.pan] : [];
    for (const audioParam of audioParams) {
      const audioParamConnections = getAudioParamConnections(audioParam);
      if (audioParamConnections !== void 0) {
        audioParamConnections.activeInputs.forEach(([source]) => deactivateActiveAudioNodeInputConnections(source, trace));
      }
    }
    if (isActiveAudioNode(audioNode)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // src/helpers/deactivate-audio-graph.ts
  var deactivateAudioGraph = (context) => {
    deactivateActiveAudioNodeInputConnections(context.destination, []);
  };

  // src/helpers/is-valid-latency-hint.ts
  var isValidLatencyHint = (latencyHint) => {
    return latencyHint === void 0 || typeof latencyHint === "number" || typeof latencyHint === "string" && (latencyHint === "balanced" || latencyHint === "interactive" || latencyHint === "playback");
  };

  // src/factories/audio-context-constructor.ts
  var createAudioContextConstructor = (baseAudioContextConstructor2, createInvalidStateError2, mediaElementAudioSourceNodeConstructor2, mediaStreamAudioDestinationNodeConstructor2, mediaStreamAudioSourceNodeConstructor2, mediaStreamTrackAudioSourceNodeConstructor2, nativeAudioContextConstructor2) => {
    return class AudioContext extends baseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        const nativeAudioContext = new nativeAudioContextConstructor2(options);
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(
            `The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
          );
        }
        super(nativeAudioContext, nativeAudioContext.destination.channelCount);
        this._nativeAudioContext = nativeAudioContext;
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._nativeAudioContext.baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => deactivateAudioGraph(this));
      }
      createMediaElementSource(mediaElement) {
        return new mediaElementAudioSourceNodeConstructor2(this, { mediaElement });
      }
      createMediaStreamDestination() {
        return new mediaStreamAudioDestinationNodeConstructor2(this);
      }
      createMediaStreamSource(mediaStream) {
        return new mediaStreamAudioSourceNodeConstructor2(this, { mediaStream });
      }
      createMediaStreamTrackSource(mediaStreamTrack) {
        return new mediaStreamTrackAudioSourceNodeConstructor2(this, { mediaStreamTrack });
      }
      getOutputTimestamp() {
        return this._nativeAudioContext.getOutputTimestamp();
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume();
      }
      suspend() {
        return this._nativeAudioContext.suspend();
      }
    };
  };

  // src/factories/audio-destination-node-constructor.ts
  var createAudioDestinationNodeConstructor = (audioNodeConstructor2, createAudioDestinationNodeRenderer2, createInvalidStateError2, createNativeAudioDestinationNode, getNativeContext2, isNativeOfflineAudioContext2, renderInputsOfAudioNode2) => {
    return class AudioDestinationNode extends audioNodeConstructor2 {
      constructor(context, channelCount) {
        const nativeContext = getNativeContext2(context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const nativeAudioDestinationNode = createNativeAudioDestinationNode(nativeContext, channelCount);
        const audioDestinationNodeRenderer = isOffline ? createAudioDestinationNodeRenderer2(renderInputsOfAudioNode2) : null;
        super(context, false, nativeAudioDestinationNode, audioDestinationNodeRenderer);
        this._isNodeOfNativeOfflineAudioContext = isOffline;
        this._nativeAudioDestinationNode = nativeAudioDestinationNode;
      }
      get channelCount() {
        return this._nativeAudioDestinationNode.channelCount;
      }
      set channelCount(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        this._nativeAudioDestinationNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioDestinationNode.channelCountMode;
      }
      set channelCountMode(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        this._nativeAudioDestinationNode.channelCountMode = value;
      }
      get maxChannelCount() {
        return this._nativeAudioDestinationNode.maxChannelCount;
      }
    };
  };

  // src/factories/audio-destination-node-renderer-factory.ts
  var createAudioDestinationNodeRenderer = (renderInputsOfAudioNode2) => {
    const renderedNativeAudioDestinationNodes = /* @__PURE__ */ new WeakMap();
    return {
      async render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAudioDestinationNode = renderedNativeAudioDestinationNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioDestinationNode !== void 0) {
          return renderedNativeAudioDestinationNode;
        }
        const nativeAudioDestinationNode = nativeOfflineAudioContext.destination;
        renderedNativeAudioDestinationNodes.set(nativeOfflineAudioContext, nativeAudioDestinationNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);
        return nativeAudioDestinationNode;
      }
    };
  };

  // src/factories/audio-listener-factory.ts
  var createAudioListenerFactory = (createAudioParam2, createNativeChannelMergerNode2, createNativeConstantSourceNode2, createNativeScriptProcessorNode2, createNotSupportedError2, getFirstSample2, isNativeOfflineAudioContext2, overwriteAccessors2) => {
    return (context, nativeContext) => {
      const nativeListener = nativeContext.listener;
      const createFakeAudioParams = () => {
        const buffer = new Float32Array(1);
        const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 9
        });
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        let isScriptProcessorNodeCreated = false;
        let lastOrientation = [0, 0, -1, 0, 1, 0];
        let lastPosition = [0, 0, 0];
        const createScriptProcessorNode = () => {
          if (isScriptProcessorNodeCreated) {
            return;
          }
          isScriptProcessorNodeCreated = true;
          const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, 256, 9, 0);
          scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
            const orientation = [
              getFirstSample2(inputBuffer, buffer, 0),
              getFirstSample2(inputBuffer, buffer, 1),
              getFirstSample2(inputBuffer, buffer, 2),
              getFirstSample2(inputBuffer, buffer, 3),
              getFirstSample2(inputBuffer, buffer, 4),
              getFirstSample2(inputBuffer, buffer, 5)
            ];
            if (orientation.some((value, index) => value !== lastOrientation[index])) {
              nativeListener.setOrientation(...orientation);
              lastOrientation = orientation;
            }
            const positon = [
              getFirstSample2(inputBuffer, buffer, 6),
              getFirstSample2(inputBuffer, buffer, 7),
              getFirstSample2(inputBuffer, buffer, 8)
            ];
            if (positon.some((value, index) => value !== lastPosition[index])) {
              nativeListener.setPosition(...positon);
              lastPosition = positon;
            }
          };
          channelMergerNode.connect(scriptProcessorNode);
        };
        const createSetOrientation = (index) => (value) => {
          if (value !== lastOrientation[index]) {
            lastOrientation[index] = value;
            nativeListener.setOrientation(...lastOrientation);
          }
        };
        const createSetPosition = (index) => (value) => {
          if (value !== lastPosition[index]) {
            lastPosition[index] = value;
            nativeListener.setPosition(...lastPosition);
          }
        };
        const createFakeAudioParam = (input, initialValue, setValue) => {
          const constantSourceNode = createNativeConstantSourceNode2(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            offset: initialValue
          });
          constantSourceNode.connect(channelMergerNode, 0, input);
          constantSourceNode.start();
          Object.defineProperty(constantSourceNode.offset, "defaultValue", {
            get() {
              return initialValue;
            }
          });
          const audioParam = createAudioParam2({ context }, isOffline, constantSourceNode.offset);
          overwriteAccessors2(
            audioParam,
            "value",
            (get) => () => get.call(audioParam),
            (set) => (value) => {
              try {
                set.call(audioParam, value);
              } catch (err) {
                if (err.code !== 9) {
                  throw err;
                }
              }
              createScriptProcessorNode();
              if (isOffline) {
                setValue(value);
              }
            }
          );
          audioParam.cancelAndHoldAtTime = ((cancelAndHoldAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelAndHoldAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelAndHoldAtTime);
          audioParam.cancelScheduledValues = ((cancelScheduledValues) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelScheduledValues.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelScheduledValues);
          audioParam.exponentialRampToValueAtTime = ((exponentialRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = exponentialRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.exponentialRampToValueAtTime);
          audioParam.linearRampToValueAtTime = ((linearRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = linearRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.linearRampToValueAtTime);
          audioParam.setTargetAtTime = ((setTargetAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setTargetAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setTargetAtTime);
          audioParam.setValueAtTime = ((setValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueAtTime);
          audioParam.setValueCurveAtTime = ((setValueCurveAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueCurveAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueCurveAtTime);
          return audioParam;
        };
        return {
          forwardX: createFakeAudioParam(0, 0, createSetOrientation(0)),
          forwardY: createFakeAudioParam(1, 0, createSetOrientation(1)),
          forwardZ: createFakeAudioParam(2, -1, createSetOrientation(2)),
          positionX: createFakeAudioParam(6, 0, createSetPosition(0)),
          positionY: createFakeAudioParam(7, 0, createSetPosition(1)),
          positionZ: createFakeAudioParam(8, 0, createSetPosition(2)),
          upX: createFakeAudioParam(3, 0, createSetOrientation(3)),
          upY: createFakeAudioParam(4, 1, createSetOrientation(4)),
          upZ: createFakeAudioParam(5, 0, createSetOrientation(5))
        };
      };
      const { forwardX, forwardY, forwardZ, positionX, positionY, positionZ, upX, upY, upZ } = nativeListener.forwardX === void 0 ? createFakeAudioParams() : nativeListener;
      return {
        get forwardX() {
          return forwardX;
        },
        get forwardY() {
          return forwardY;
        },
        get forwardZ() {
          return forwardZ;
        },
        get positionX() {
          return positionX;
        },
        get positionY() {
          return positionY;
        },
        get positionZ() {
          return positionZ;
        },
        get upX() {
          return upX;
        },
        get upY() {
          return upY;
        },
        get upZ() {
          return upZ;
        }
      };
    };
  };

  // src/guards/audio-node.ts
  var isAudioNode = (audioNodeOrAudioParam) => {
    return "context" in audioNodeOrAudioParam;
  };

  // src/guards/audio-node-output-connection.ts
  var isAudioNodeOutputConnection = (outputConnection) => {
    return isAudioNode(outputConnection[0]);
  };

  // src/helpers/insert-element-in-set.ts
  var insertElementInSet = (set, element, predicate, ignoreDuplicates) => {
    for (const lmnt of set) {
      if (predicate(lmnt)) {
        if (ignoreDuplicates) {
          return false;
        }
        throw Error("The set contains at least one similar element.");
      }
    }
    set.add(element);
    return true;
  };

  // src/helpers/add-active-input-connection-to-audio-param.ts
  var addActiveInputConnectionToAudioParam = (activeInputs, source, [output, eventListener], ignoreDuplicates) => {
    insertElementInSet(
      activeInputs,
      [source, output, eventListener],
      (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output,
      ignoreDuplicates
    );
  };

  // src/helpers/add-passive-input-connection-to-audio-param.ts
  var addPassiveInputConnectionToAudioParam = (passiveInputs, [source, output, eventListener], ignoreDuplicates) => {
    const passiveInputConnections = passiveInputs.get(source);
    if (passiveInputConnections === void 0) {
      passiveInputs.set(source, /* @__PURE__ */ new Set([[output, eventListener]]));
    } else {
      insertElementInSet(
        passiveInputConnections,
        [output, eventListener],
        (passiveInputConnection) => passiveInputConnection[0] === output,
        ignoreDuplicates
      );
    }
  };

  // src/helpers/connect-native-audio-node-to-native-audio-node.ts
  var connectNativeAudioNodeToNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    nativeSourceAudioNode.connect(nativeDestinationAudioNode, output, input);
    return [nativeDestinationAudioNode, output, input];
  };

  // src/helpers/delete-active-input-connection.ts
  var deleteActiveInputConnection = (activeInputConnections, source, output) => {
    for (const activeInputConnection of activeInputConnections) {
      if (activeInputConnection[0] === source && activeInputConnection[1] === output) {
        activeInputConnections.delete(activeInputConnection);
        return activeInputConnection;
      }
    }
    return null;
  };

  // src/helpers/delete-active-input-connection-to-audio-param.ts
  var deleteActiveInputConnectionToAudioParam = (activeInputs, source, output) => {
    return pickElementFromSet(
      activeInputs,
      (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output
    );
  };

  // src/helpers/delete-event-listeners-of-audio-node.ts
  var deleteEventListenerOfAudioNode = (audioNode, eventListener) => {
    const eventListeners = getEventListenersOfAudioNode(audioNode);
    if (!eventListeners.delete(eventListener)) {
      throw new Error("Missing the expected event listener.");
    }
  };

  // src/helpers/delete-passive-input-connection-to-audio-param.ts
  var deletePassiveInputConnectionToAudioParam = (passiveInputs, source, output) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(
      passiveInputConnections,
      (passiveInputConnection) => passiveInputConnection[0] === output
    );
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // src/helpers/disconnect-native-audio-node-from-native-audio-node.ts
  var disconnectNativeAudioNodeFromNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    nativeSourceAudioNode.disconnect(nativeDestinationAudioNode, output, input);
  };

  // src/helpers/get-native-audio-node.ts
  var getNativeAudioNode = (audioNode) => {
    return getValueForKey(AUDIO_NODE_STORE, audioNode);
  };

  // src/helpers/get-native-audio-param.ts
  var getNativeAudioParam = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_STORE, audioParam);
  };

  // src/helpers/is-part-of-a-cycle.ts
  var isPartOfACycle = (audioNode) => {
    return CYCLE_COUNTERS.has(audioNode);
  };

  // src/helpers/is-passive-audio-node.ts
  var isPassiveAudioNode = (audioNode) => {
    return !ACTIVE_AUDIO_NODE_STORE.has(audioNode);
  };

  // src/helpers/visit-each-audio-node-once.ts
  var visitEachAudioNodeOnce = (cycles, visitor) => {
    const counts = /* @__PURE__ */ new Map();
    for (const cycle of cycles) {
      for (const audioNode of cycle) {
        const count = counts.get(audioNode);
        counts.set(audioNode, count === void 0 ? 1 : count + 1);
      }
    }
    counts.forEach((count, audioNode) => visitor(audioNode, count));
  };

  // src/factories/audio-node-constructor.ts
  var addConnectionToAudioParamOfAudioContext = (source, destination, output, isOffline) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const { outputs } = getAudioNodeConnections(source);
    const eventListeners = getEventListenersOfAudioNode(source);
    const eventListener = (isActive) => {
      const nativeAudioNode = getNativeAudioNode(source);
      const nativeAudioParam = getNativeAudioParam(destination);
      if (isActive) {
        const partialConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
        addActiveInputConnectionToAudioParam(activeInputs, source, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.connect(nativeAudioParam, output);
        }
      } else {
        const partialConnection = deleteActiveInputConnectionToAudioParam(activeInputs, source, output);
        addPassiveInputConnectionToAudioParam(passiveInputs, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.disconnect(nativeAudioParam, output);
        }
      }
    };
    if (insertElementInSet(
      outputs,
      [destination, output],
      (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output,
      true
    )) {
      eventListeners.add(eventListener);
      if (isActiveAudioNode(source)) {
        addActiveInputConnectionToAudioParam(activeInputs, source, [output, eventListener], true);
      } else {
        addPassiveInputConnectionToAudioParam(passiveInputs, [source, output, eventListener], true);
      }
      return true;
    }
    return false;
  };
  var deleteInputConnectionOfAudioNode = (source, destination, output, input) => {
    const { activeInputs, passiveInputs } = getAudioNodeConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs[input], source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
      return [passiveInputConnection[2], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputConnectionOfAudioParam = (source, destination, output) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs, source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
      return [passiveInputConnection[1], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputsOfAudioNode = (source, isOffline, destination, output, input) => {
    const [listener, isActive] = deleteInputConnectionOfAudioNode(source, destination, output, input);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        disconnectNativeAudioNodeFromNativeAudioNode(getNativeAudioNode(source), getNativeAudioNode(destination), output, input);
      }
    }
    if (isActiveAudioNode(destination)) {
      const { activeInputs } = getAudioNodeConnections(destination);
      setInternalStateToPassiveWhenNecessary(destination, activeInputs);
    }
  };
  var deleteInputsOfAudioParam = (source, isOffline, destination, output) => {
    const [listener, isActive] = deleteInputConnectionOfAudioParam(source, destination, output);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        getNativeAudioNode(source).disconnect(getNativeAudioParam(destination), output);
      }
    }
  };
  var deleteAnyConnection = (source, isOffline) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      destinations.push(outputConnection[0]);
    }
    audioNodeConnectionsOfSource.outputs.clear();
    return destinations;
  };
  var deleteConnectionAtOutput = (source, isOffline, output) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (outputConnection[1] === output) {
        if (isAudioNodeOutputConnection(outputConnection)) {
          deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
        } else {
          deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
        }
        destinations.push(outputConnection[0]);
        audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      }
    }
    return destinations;
  };
  var deleteConnectionToDestination = (source, isOffline, destination, output, input) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    return Array.from(audioNodeConnectionsOfSource.outputs).filter(
      (outputConnection) => outputConnection[0] === destination && (output === void 0 || outputConnection[1] === output) && (input === void 0 || outputConnection[2] === input)
    ).map((outputConnection) => {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      return outputConnection[0];
    });
  };
  var createAudioNodeConstructor = (addAudioNodeConnections, addConnectionToAudioNode, createIncrementCycleCounter, createIndexSizeError2, createInvalidAccessError2, decrementCycleCounter, detectCycles, eventTargetConstructor2, getNativeContext2, isNativeAudioNode2, isNativeAudioParam2, isNativeOfflineAudioContext2) => {
    return class AudioNode extends eventTargetConstructor2 {
      constructor(context, isActive, nativeAudioNode, audioNodeRenderer) {
        super(nativeAudioNode);
        this._context = context;
        this._nativeAudioNode = nativeAudioNode;
        AUDIO_NODE_STORE.set(this, nativeAudioNode);
        EVENT_LISTENERS.set(this, /* @__PURE__ */ new Set());
        if (context.state !== "closed" && isActive) {
          setInternalStateToActive(this);
        }
        addAudioNodeConnections(this, audioNodeRenderer, nativeAudioNode);
      }
      get channelCount() {
        return this._nativeAudioNode.channelCount;
      }
      set channelCount(value) {
        this._nativeAudioNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioNode.channelCountMode;
      }
      set channelCountMode(value) {
        this._nativeAudioNode.channelCountMode = value;
      }
      get channelInterpretation() {
        return this._nativeAudioNode.channelInterpretation;
      }
      set channelInterpretation(value) {
        this._nativeAudioNode.channelInterpretation = value;
      }
      get context() {
        return this._context;
      }
      get numberOfInputs() {
        return this._nativeAudioNode.numberOfInputs;
      }
      get numberOfOutputs() {
        return this._nativeAudioNode.numberOfOutputs;
      }
      // tslint:disable-next-line:invalid-void
      connect(destination, output = 0, input = 0) {
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (isNativeAudioNode2(destination) || isNativeAudioParam2(destination)) {
          throw createInvalidAccessError2();
        }
        if (isAudioNode(destination)) {
          const nativeDestinationAudioNode = getNativeAudioNode(destination);
          const connection = connectNativeAudioNodeToNativeAudioNode(
            this._nativeAudioNode,
            nativeDestinationAudioNode,
            output,
            input
          );
          const isPassive = isPassiveAudioNode(this);
          if (isOffline || isPassive) {
            this._nativeAudioNode.disconnect(...connection);
          }
          if (this.context.state !== "closed" && !isPassive && isPassiveAudioNode(destination)) {
            setInternalStateToActive(destination);
          }
          const isNewConnectionToAudioNode = addConnectionToAudioNode(
            this,
            destination,
            output,
            input,
            isOffline
          );
          if (isNewConnectionToAudioNode) {
            const cycles = detectCycles([this], destination);
            visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
          }
          return destination;
        }
        const nativeAudioParam = getNativeAudioParam(destination);
        this._nativeAudioNode.connect(nativeAudioParam, output);
        if (isOffline || isPassiveAudioNode(this)) {
          this._nativeAudioNode.disconnect(nativeAudioParam, output);
        }
        const isNewConnectionToAudioParam = addConnectionToAudioParamOfAudioContext(this, destination, output, isOffline);
        if (isNewConnectionToAudioParam) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
        }
      }
      disconnect(destinationOrOutput, output, input) {
        let destinations;
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (destinationOrOutput === void 0) {
          destinations = deleteAnyConnection(this, isOffline);
        } else if (typeof destinationOrOutput === "number") {
          if (destinationOrOutput < 0 || destinationOrOutput >= this.numberOfOutputs) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionAtOutput(this, isOffline, destinationOrOutput);
        } else {
          if (output !== void 0 && (output < 0 || output >= this.numberOfOutputs)) {
            throw createIndexSizeError2();
          }
          if (isAudioNode(destinationOrOutput) && input !== void 0 && (input < 0 || input >= destinationOrOutput.numberOfInputs)) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionToDestination(this, isOffline, destinationOrOutput, output, input);
          if (destinations.length === 0) {
            throw createInvalidAccessError2();
          }
        }
        for (const destination of destinations) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, decrementCycleCounter);
        }
      }
    };
  };

  // src/factories/audio-param-factory.ts
  var import_automation_events = __toESM(require_bundle());
  var createAudioParamFactory = (addAudioParamConnections, audioParamAudioNodeStore2, audioParamStore, createCancelAndHoldAutomationEvent2, createCancelScheduledValuesAutomationEvent2, createExponentialRampToValueAutomationEvent2, createLinearRampToValueAutomationEvent2, createSetTargetAutomationEvent2, createSetValueAutomationEvent2, createSetValueCurveAutomationEvent2) => {
    return (audioNode, isAudioParamOfOfflineAudioContext, nativeAudioParam, maxValue = null, minValue = null) => {
      const defaultValue = nativeAudioParam.value;
      const automationEventList = new import_automation_events.AutomationEventList(defaultValue);
      const audioParam = {
        get defaultValue() {
          return defaultValue;
        },
        get maxValue() {
          return maxValue === null ? nativeAudioParam.maxValue : maxValue;
        },
        get minValue() {
          return minValue === null ? nativeAudioParam.minValue : minValue;
        },
        get value() {
          return nativeAudioParam.value;
        },
        set value(value) {
          nativeAudioParam.value = value;
        },
        cancelAndHoldAtTime(cancelTime) {
          if (typeof nativeAudioParam.cancelAndHoldAtTime === "function") {
            if (!isAudioParamOfOfflineAudioContext) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            nativeAudioParam.cancelAndHoldAtTime(cancelTime);
          } else {
            const previousLastEvent = Array.from(automationEventList).pop();
            if (!isAudioParamOfOfflineAudioContext) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            const currentLastEvent = Array.from(automationEventList).pop();
            nativeAudioParam.cancelScheduledValues(cancelTime);
            if (previousLastEvent !== currentLastEvent && currentLastEvent !== void 0) {
              if (currentLastEvent.type === "exponentialRampToValue") {
                nativeAudioParam.exponentialRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "linearRampToValue") {
                nativeAudioParam.linearRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "setValue") {
                nativeAudioParam.setValueAtTime(currentLastEvent.value, currentLastEvent.startTime);
              } else if (currentLastEvent.type === "setValueCurve") {
                nativeAudioParam.setValueCurveAtTime(
                  currentLastEvent.values,
                  currentLastEvent.startTime,
                  currentLastEvent.duration
                );
              }
            }
          }
          return audioParam;
        },
        cancelScheduledValues(cancelTime) {
          if (!isAudioParamOfOfflineAudioContext) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createCancelScheduledValuesAutomationEvent2(cancelTime));
          nativeAudioParam.cancelScheduledValues(cancelTime);
          return audioParam;
        },
        exponentialRampToValueAtTime(value, endTime) {
          const currentTime = audioNode.context.currentTime;
          if (!isAudioParamOfOfflineAudioContext) {
            automationEventList.flush(currentTime);
          }
          if (Array.from(automationEventList).length === 0) {
            automationEventList.add(createSetValueAutomationEvent2(defaultValue, currentTime));
            nativeAudioParam.setValueAtTime(defaultValue, currentTime);
          }
          automationEventList.add(createExponentialRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.exponentialRampToValueAtTime(value, endTime);
          return audioParam;
        },
        linearRampToValueAtTime(value, endTime) {
          const currentTime = audioNode.context.currentTime;
          if (!isAudioParamOfOfflineAudioContext) {
            automationEventList.flush(currentTime);
          }
          if (Array.from(automationEventList).length === 0) {
            automationEventList.add(createSetValueAutomationEvent2(defaultValue, currentTime));
            nativeAudioParam.setValueAtTime(defaultValue, currentTime);
          }
          automationEventList.add(createLinearRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.linearRampToValueAtTime(value, endTime);
          return audioParam;
        },
        setTargetAtTime(target, startTime, timeConstant) {
          if (!isAudioParamOfOfflineAudioContext) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetTargetAutomationEvent2(target, startTime, timeConstant));
          nativeAudioParam.setTargetAtTime(target, startTime, timeConstant);
          return audioParam;
        },
        setValueAtTime(value, startTime) {
          if (!isAudioParamOfOfflineAudioContext) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetValueAutomationEvent2(value, startTime));
          nativeAudioParam.setValueAtTime(value, startTime);
          return audioParam;
        },
        setValueCurveAtTime(values, startTime, duration) {
          if (!isAudioParamOfOfflineAudioContext) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetValueCurveAutomationEvent2(values, startTime, duration));
          nativeAudioParam.setValueCurveAtTime(values, startTime, duration);
          return audioParam;
        }
      };
      audioParamStore.set(audioParam, nativeAudioParam);
      audioParamAudioNodeStore2.set(audioParam, audioNode);
      addAudioParamConnections(audioParam);
      return audioParam;
    };
  };

  // src/read-only-map.ts
  var ReadOnlyMap = class {
    constructor(parameters) {
      this._map = new Map(parameters);
    }
    get size() {
      return this._map.size;
    }
    entries() {
      return this._map.entries();
    }
    forEach(callback, thisArg = null) {
      return this._map.forEach((value, key) => callback.call(thisArg, value, key, this));
    }
    get(name) {
      return this._map.get(name);
    }
    has(name) {
      return this._map.has(name);
    }
    keys() {
      return this._map.keys();
    }
    values() {
      return this._map.values();
    }
  };

  // src/factories/audio-worklet-node-constructor.ts
  var DEFAULT_OPTIONS4 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    numberOfInputs: 1,
    numberOfOutputs: 1,
    parameterData: {},
    processorOptions: {}
  };
  var createAudioWorkletNodeConstructor = (addUnrenderedAudioWorkletNode2, audioNodeConstructor2, createAudioParam2, createAudioWorkletNodeRenderer2, createNativeAudioWorkletNode2, getAudioNodeConnections2, getBackupOfflineAudioContext2, getNativeContext2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2, setActiveAudioWorkletNodeInputs2, testAudioWorkletNodeOptionsClonability2, wrapEventListener2) => {
    return class AudioWorkletNode extends audioNodeConstructor2 {
      constructor(context, name, options) {
        const nativeContext = getNativeContext2(context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = { ...DEFAULT_OPTIONS4, ...options };
        testAudioWorkletNodeOptionsClonability2(mergedOptions);
        const nativeContextOrBackupOfflineAudioContext = isOffline || nativeContext.state !== "closed" ? nativeContext : getBackupOfflineAudioContext2(nativeContext) ?? nativeContext;
        const nativeAudioWorkletNode = createNativeAudioWorkletNode2(
          nativeContextOrBackupOfflineAudioContext,
          nativeAudioWorkletNodeConstructor2,
          name,
          mergedOptions
        );
        const audioWorkletNodeRenderer = isOffline ? createAudioWorkletNodeRenderer2() : null;
        super(context, true, nativeAudioWorkletNode, audioWorkletNodeRenderer);
        const parameters = [];
        nativeAudioWorkletNode.parameters.forEach((nativeAudioParam, nm) => {
          const audioParam = createAudioParam2(this, isOffline, nativeAudioParam);
          parameters.push([nm, audioParam]);
        });
        this._nativeAudioWorkletNode = nativeAudioWorkletNode;
        this._onprocessorerror = null;
        this._parameters = new ReadOnlyMap(parameters);
        if (isOffline) {
          addUnrenderedAudioWorkletNode2(nativeContext, this);
        }
        const { activeInputs } = getAudioNodeConnections2(this);
        setActiveAudioWorkletNodeInputs2(nativeAudioWorkletNode, activeInputs);
      }
      get onprocessorerror() {
        return this._onprocessorerror;
      }
      set onprocessorerror(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioWorkletNode.onprocessorerror = wrappedListener;
        const nativeOnProcessorError = this._nativeAudioWorkletNode.onprocessorerror;
        this._onprocessorerror = nativeOnProcessorError !== null && nativeOnProcessorError === wrappedListener ? value : nativeOnProcessorError;
      }
      get parameters() {
        return this._parameters;
      }
      get port() {
        return this._nativeAudioWorkletNode.port;
      }
    };
  };

  // src/factories/audio-worklet-node-renderer-factory.ts
  var createAudioWorkletNodeRendererFactory = (connectAudioParam2, deleteUnrenderedAudioWorkletNode2, getNativeAudioNode2, nativeAudioWorkletNodeConstructor2, renderInputsOfAudioNode2) => {
    return () => {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        throw new Error("Missing the native AudioWorkletNode constructor.");
      }
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          deleteUnrenderedAudioWorkletNode2(nativeOfflineAudioContext, proxy);
          const renderedNativeAudioWorkletNodeOrGainNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioWorkletNodeOrGainNode !== void 0) {
            return renderedNativeAudioWorkletNodeOrGainNode;
          }
          const nativeAudioWorkletNode = getNativeAudioNode2(proxy);
          renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioWorkletNode);
          for (const [nm, audioParam] of proxy.parameters.entries()) {
            await connectAudioParam2(
              nativeOfflineAudioContext,
              audioParam,
              // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
              nativeAudioWorkletNode.parameters.get(nm)
            );
          }
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioWorkletNode);
          return nativeAudioWorkletNode;
        }
      };
    };
  };

  // src/factories/base-audio-context-constructor.ts
  var createBaseAudioContextConstructor = (addAudioWorkletModule2, analyserNodeConstructor2, audioBufferConstructor2, audioBufferSourceNodeConstructor2, biquadFilterNodeConstructor2, channelMergerNodeConstructor2, channelSplitterNodeConstructor2, constantSourceNodeConstructor2, convolverNodeConstructor2, decodeAudioData2, delayNodeConstructor2, dynamicsCompressorNodeConstructor2, gainNodeConstructor2, iIRFilterNodeConstructor2, minimalBaseAudioContextConstructor2, oscillatorNodeConstructor2, pannerNodeConstructor2, periodicWaveConstructor2, stereoPannerNodeConstructor2, waveShaperNodeConstructor2) => {
    return class BaseAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext, numberOfChannels);
        this._nativeContext = _nativeContext;
        this._audioWorklet = addAudioWorkletModule2 === void 0 ? void 0 : {
          addModule: (moduleURL, options) => {
            return addAudioWorkletModule2(this, moduleURL, options);
          }
        };
      }
      get audioWorklet() {
        return this._audioWorklet;
      }
      createAnalyser() {
        return new analyserNodeConstructor2(this);
      }
      createBiquadFilter() {
        return new biquadFilterNodeConstructor2(this);
      }
      createBuffer(numberOfChannels, length, sampleRate) {
        return new audioBufferConstructor2({ length, numberOfChannels, sampleRate });
      }
      createBufferSource() {
        return new audioBufferSourceNodeConstructor2(this);
      }
      createChannelMerger(numberOfInputs = 6) {
        return new channelMergerNodeConstructor2(this, { numberOfInputs });
      }
      createChannelSplitter(numberOfOutputs = 6) {
        return new channelSplitterNodeConstructor2(this, { numberOfOutputs });
      }
      createConstantSource() {
        return new constantSourceNodeConstructor2(this);
      }
      createConvolver() {
        return new convolverNodeConstructor2(this);
      }
      createDelay(maxDelayTime = 1) {
        return new delayNodeConstructor2(this, { maxDelayTime });
      }
      createDynamicsCompressor() {
        return new dynamicsCompressorNodeConstructor2(this);
      }
      createGain() {
        return new gainNodeConstructor2(this);
      }
      createIIRFilter(feedforward, feedback) {
        return new iIRFilterNodeConstructor2(this, { feedback, feedforward });
      }
      createOscillator() {
        return new oscillatorNodeConstructor2(this);
      }
      createPanner() {
        return new pannerNodeConstructor2(this);
      }
      createPeriodicWave(real, imag, constraints = { disableNormalization: false }) {
        return new periodicWaveConstructor2(this, { ...constraints, imag, real });
      }
      createStereoPanner() {
        return new stereoPannerNodeConstructor2(this);
      }
      createWaveShaper() {
        return new waveShaperNodeConstructor2(this);
      }
      decodeAudioData(audioData, successCallback, errorCallback) {
        return decodeAudioData2(this._nativeContext, audioData).then(
          (audioBuffer) => {
            if (typeof successCallback === "function") {
              successCallback(audioBuffer);
            }
            return audioBuffer;
          },
          (err) => {
            if (typeof errorCallback === "function") {
              errorCallback(err);
            }
            throw err;
          }
        );
      }
    };
  };

  // src/constants.ts
  var MOST_NEGATIVE_SINGLE_FLOAT = -34028234663852886e22;
  var MOST_POSITIVE_SINGLE_FLOAT = -MOST_NEGATIVE_SINGLE_FLOAT;

  // src/factories/biquad-filter-node-constructor.ts
  var DEFAULT_OPTIONS5 = {
    Q: 1,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    detune: 0,
    frequency: 350,
    gain: 0,
    type: "lowpass"
  };
  var createBiquadFilterNodeConstructor = (audioNodeConstructor2, createAudioParam2, createBiquadFilterNodeRenderer2, createNativeBiquadFilterNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class BiquadFilterNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS5, ...options };
        const nativeBiquadFilterNode = createNativeBiquadFilterNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const biquadFilterNodeRenderer = isOffline ? createBiquadFilterNodeRenderer2() : null;
        super(context, false, nativeBiquadFilterNode, biquadFilterNodeRenderer);
        this._Q = createAudioParam2(this, isOffline, nativeBiquadFilterNode.Q);
        this._detune = createAudioParam2(
          this,
          isOffline,
          nativeBiquadFilterNode.detune,
          1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT),
          -1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT)
        );
        this._frequency = createAudioParam2(this, isOffline, nativeBiquadFilterNode.frequency, context.sampleRate / 2, 0);
        this._gain = createAudioParam2(
          this,
          isOffline,
          nativeBiquadFilterNode.gain,
          40 * Math.log10(MOST_POSITIVE_SINGLE_FLOAT),
          MOST_NEGATIVE_SINGLE_FLOAT
        );
        this._nativeBiquadFilterNode = nativeBiquadFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get gain() {
        return this._gain;
      }
      get Q() {
        return this._Q;
      }
      get type() {
        return this._nativeBiquadFilterNode.type;
      }
      set type(value) {
        this._nativeBiquadFilterNode.type = value;
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        this._nativeBiquadFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
      }
    };
  };

  // src/factories/biquad-filter-node-renderer-factory.ts
  var createBiquadFilterNodeRendererFactory = (connectAudioParam2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeBiquadFilterNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeBiquadFilterNode = renderedNativeBiquadFilterNodes.get(nativeOfflineAudioContext);
          if (renderedNativeBiquadFilterNode !== void 0) {
            return renderedNativeBiquadFilterNode;
          }
          const nativeBiquadFilterNode = getNativeAudioNode2(proxy);
          renderedNativeBiquadFilterNodes.set(nativeOfflineAudioContext, nativeBiquadFilterNode);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeBiquadFilterNode);
          return nativeBiquadFilterNode;
        }
      };
    };
  };

  // src/factories/cache-test-result.ts
  var createCacheTestResult = (ongoingTests, testResults) => {
    return (tester, test) => {
      const cachedTestResult = testResults.get(tester);
      if (cachedTestResult !== void 0) {
        return cachedTestResult;
      }
      const ongoingTest = ongoingTests.get(tester);
      if (ongoingTest !== void 0) {
        return ongoingTest;
      }
      try {
        const synchronousTestResult = test();
        if (synchronousTestResult instanceof Promise) {
          const promise = synchronousTestResult.catch(() => false);
          ongoingTests.set(tester, promise);
          promise.then((asynchronousTestResult) => {
            ongoingTests.delete(tester);
            testResults.set(tester, asynchronousTestResult);
          });
          return promise;
        }
        testResults.set(tester, synchronousTestResult);
        return synchronousTestResult;
      } catch {
        testResults.set(tester, false);
        return false;
      }
    };
  };

  // src/factories/channel-merger-node-constructor.ts
  var DEFAULT_OPTIONS6 = {
    channelCount: 1,
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 6
  };
  var createChannelMergerNodeConstructor = (audioNodeConstructor2, createChannelMergerNodeRenderer2, createNativeChannelMergerNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class ChannelMergerNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS6, ...options };
        const nativeChannelMergerNode = createNativeChannelMergerNode2(nativeContext, mergedOptions);
        const channelMergerNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelMergerNodeRenderer2() : null;
        super(context, false, nativeChannelMergerNode, channelMergerNodeRenderer);
      }
    };
  };

  // src/factories/channel-merger-node-renderer-factory.ts
  var createChannelMergerNodeRendererFactory = (getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return renderedNativeAudioNode;
          }
          const nativeAudioNode = getNativeAudioNode2(proxy);
          renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
          return nativeAudioNode;
        }
      };
    };
  };

  // src/factories/channel-splitter-node-constructor.ts
  var DEFAULT_OPTIONS7 = {
    channelCount: 6,
    channelCountMode: "explicit",
    channelInterpretation: "discrete",
    numberOfOutputs: 6
  };
  var createChannelSplitterNodeConstructor = (audioNodeConstructor2, createChannelSplitterNodeRenderer2, createNativeChannelSplitterNode2, getNativeContext2, isNativeOfflineAudioContext2, sanitizeChannelSplitterOptions2) => {
    return class ChannelSplitterNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = sanitizeChannelSplitterOptions2({ ...DEFAULT_OPTIONS7, ...options });
        const nativeChannelSplitterNode = createNativeChannelSplitterNode2(nativeContext, mergedOptions);
        const channelSplitterNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelSplitterNodeRenderer2() : null;
        super(context, false, nativeChannelSplitterNode, channelSplitterNodeRenderer);
      }
    };
  };

  // src/factories/channel-splitter-node-renderer-factory.ts
  var createChannelSplitterNodeRendererFactory = (getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return renderedNativeAudioNode;
          }
          const nativeAudioNode = getNativeAudioNode2(proxy);
          renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
          return nativeAudioNode;
        }
      };
    };
  };

  // src/factories/connect-audio-param.ts
  var createConnectAudioParam = (renderInputsOfAudioParam2) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
      return renderInputsOfAudioParam2(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
  };

  // src/factories/connected-native-audio-buffer-source-node-factory.ts
  var createConnectedNativeAudioBufferSourceNodeFactory = (createNativeAudioBufferSourceNode2) => {
    return (nativeContext, nativeAudioNode) => {
      const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        detune: 0,
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      });
      const nativeAudioBuffer = nativeContext.createBuffer(1, 2, 44100);
      nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
      nativeAudioBufferSourceNode.loop = true;
      nativeAudioBufferSourceNode.connect(nativeAudioNode);
      nativeAudioBufferSourceNode.start();
      return () => {
        nativeAudioBufferSourceNode.stop();
        nativeAudioBufferSourceNode.disconnect(nativeAudioNode);
      };
    };
  };

  // src/factories/constant-source-node-constructor.ts
  var DEFAULT_OPTIONS8 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    offset: 1
  };
  var createConstantSourceNodeConstructor = (audioNodeConstructor2, createAudioParam2, createConstantSourceNodeRendererFactory2, createNativeConstantSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class ConstantSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS8, ...options };
        const nativeConstantSourceNode = createNativeConstantSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const constantSourceNodeRenderer = isOffline ? createConstantSourceNodeRendererFactory2() : null;
        super(context, false, nativeConstantSourceNode, constantSourceNodeRenderer);
        this._nativeConstantSourceNode = nativeConstantSourceNode;
        this._offset = createAudioParam2(this, isOffline, nativeConstantSourceNode.offset);
        this._onended = null;
      }
      get offset() {
        return this._offset;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeConstantSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeConstantSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      start(when = 0) {
        this._nativeConstantSourceNode.start(when);
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeConstantSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeConstantSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeConstantSourceNode.stop(when);
      }
    };
  };

  // src/factories/constant-source-node-renderer-factory.ts
  var createConstantSourceNodeRendererFactory = (connectAudioParam2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConstantSourceNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConstantSourceNode = renderedNativeConstantSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConstantSourceNode !== void 0) {
            return renderedNativeConstantSourceNode;
          }
          const nativeConstantSourceNode = getNativeAudioNode2(proxy);
          renderedNativeConstantSourceNodes.set(nativeOfflineAudioContext, nativeConstantSourceNode);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConstantSourceNode);
          return nativeConstantSourceNode;
        }
      };
    };
  };

  // src/factories/convolver-node-constructor.ts
  var DEFAULT_OPTIONS9 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    disableNormalization: false
  };
  var createConvolverNodeConstructor = (audioNodeConstructor2, createConvolverNodeRenderer2, createNativeConvolverNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class ConvolverNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS9, ...options };
        const nativeConvolverNode = createNativeConvolverNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const convolverNodeRenderer = isOffline ? createConvolverNodeRenderer2() : null;
        super(context, false, nativeConvolverNode, convolverNodeRenderer);
        this._isBufferNullified = false;
        this._nativeConvolverNode = nativeConvolverNode;
        if (mergedOptions.buffer !== null) {
          setAudioNodeTailTime2(this, mergedOptions.buffer.duration);
        }
      }
      get buffer() {
        if (this._isBufferNullified) {
          return null;
        }
        return this._nativeConvolverNode.buffer;
      }
      set buffer(value) {
        this._nativeConvolverNode.buffer = value;
        if (value === null && this._nativeConvolverNode.buffer !== null) {
          const nativeContext = this._nativeConvolverNode.context;
          this._nativeConvolverNode.buffer = nativeContext.createBuffer(1, 1, nativeContext.sampleRate);
          this._isBufferNullified = true;
          setAudioNodeTailTime2(this, 0);
        } else {
          this._isBufferNullified = false;
          setAudioNodeTailTime2(this, this._nativeConvolverNode.buffer === null ? 0 : this._nativeConvolverNode.buffer.duration);
        }
      }
      get normalize() {
        return this._nativeConvolverNode.normalize;
      }
      set normalize(value) {
        this._nativeConvolverNode.normalize = value;
      }
    };
  };

  // src/factories/convolver-node-renderer-factory.ts
  var createConvolverNodeRendererFactory = (getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConvolverNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConvolverNode = renderedNativeConvolverNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConvolverNode !== void 0) {
            return renderedNativeConvolverNode;
          }
          const nativeConvolverNode = getNativeAudioNode2(proxy);
          renderedNativeConvolverNodes.set(nativeOfflineAudioContext, nativeConvolverNode);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConvolverNode);
          return nativeConvolverNode;
        }
      };
    };
  };

  // src/factories/create-native-offline-audio-context.ts
  var createCreateNativeOfflineAudioContext = (nativeOfflineAudioContextConstructor2) => {
    return (numberOfChannels, length, sampleRate) => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      return new nativeOfflineAudioContextConstructor2(numberOfChannels, length, sampleRate);
    };
  };

  // src/factories/data-clone-error.ts
  var createDataCloneError = () => new DOMException("", "DataCloneError");

  // src/helpers/detach-array-buffer.ts
  var detachArrayBuffer = (arrayBuffer) => {
    const { port1, port2 } = new MessageChannel();
    return new Promise((resolve) => {
      const closeAndResolve = () => {
        port2.onmessage = null;
        port1.close();
        port2.close();
        resolve();
      };
      port2.onmessage = () => closeAndResolve();
      try {
        port1.postMessage(arrayBuffer, [arrayBuffer]);
      } catch {
      } finally {
        closeAndResolve();
      }
    });
  };

  // src/factories/decode-audio-data.ts
  var createDecodeAudioData = (audioBufferStore2, createDataCloneError2, detachedArrayBuffers, getNativeContext2, isNativeContext2) => {
    return (anyContext, audioData) => {
      const nativeContext = isNativeContext2(anyContext) ? anyContext : getNativeContext2(anyContext);
      if (detachedArrayBuffers.has(audioData)) {
        const err = createDataCloneError2();
        return Promise.reject(err);
      }
      try {
        detachedArrayBuffers.add(audioData);
      } catch {
      }
      return nativeContext.decodeAudioData(audioData).then((audioBuffer) => {
        detachArrayBuffer(audioData).catch(() => {
        });
        audioBufferStore2.add(audioBuffer);
        return audioBuffer;
      });
    };
  };

  // src/factories/decrement-cycle-counter.ts
  var createDecrementCycleCounter = (connectNativeAudioNodeToNativeAudioNode2, cycleCounters, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, getNativeContext2, isActiveAudioNode2, isNativeOfflineAudioContext2) => {
    return (audioNode, count) => {
      const cycleCounter = cycleCounters.get(audioNode);
      if (cycleCounter === void 0) {
        throw new Error("Missing the expected cycle count.");
      }
      const nativeContext = getNativeContext2(audioNode.context);
      const isOffline = isNativeOfflineAudioContext2(nativeContext);
      if (cycleCounter === count) {
        cycleCounters.delete(audioNode);
        if (!isOffline && isActiveAudioNode2(audioNode)) {
          const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
          const { outputs } = getAudioNodeConnections2(audioNode);
          for (const output of outputs) {
            if (isAudioNodeOutputConnection(output)) {
              const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
              connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
            } else {
              const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
              nativeSourceAudioNode.connect(nativeDestinationAudioParam, output[1]);
            }
          }
        }
      } else {
        cycleCounters.set(audioNode, cycleCounter - count);
      }
    };
  };

  // src/factories/delay-node-constructor.ts
  var DEFAULT_OPTIONS10 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    delayTime: 0,
    maxDelayTime: 1
  };
  var createDelayNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDelayNodeRenderer2, createNativeDelayNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DelayNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS10, ...options };
        const nativeDelayNode = createNativeDelayNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const delayNodeRenderer = isOffline ? createDelayNodeRenderer2() : null;
        super(context, false, nativeDelayNode, delayNodeRenderer);
        this._delayTime = createAudioParam2(this, isOffline, nativeDelayNode.delayTime);
        setAudioNodeTailTime2(this, mergedOptions.maxDelayTime);
      }
      get delayTime() {
        return this._delayTime;
      }
    };
  };

  // src/factories/delay-node-renderer-factory.ts
  var createDelayNodeRendererFactory = (connectAudioParam2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeDelayNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDelayNode = renderedNativeDelayNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDelayNode !== void 0) {
            return renderedNativeDelayNode;
          }
          const nativeDelayNode = getNativeAudioNode2(proxy);
          renderedNativeDelayNodes.set(nativeOfflineAudioContext, nativeDelayNode);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDelayNode);
          return nativeDelayNode;
        }
      };
    };
  };

  // src/factories/delete-active-input-connection-to-audio-node.ts
  var createDeleteActiveInputConnectionToAudioNode = (pickElementFromSet2) => {
    return (activeInputs, source, output, input) => {
      return pickElementFromSet2(
        activeInputs[input],
        (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output
      );
    };
  };

  // src/factories/delete-unrendered-audio-worklet-node.ts
  var createDeleteUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).delete(audioWorkletNode);
    };
  };

  // src/guards/delay-node.ts
  var isDelayNode = (audioNode) => {
    return "delayTime" in audioNode;
  };

  // src/factories/detect-cycles.ts
  var createDetectCycles = (audioParamAudioNodeStore2, getAudioNodeConnections2, getValueForKey2) => {
    return function detectCycles(chain, nextLink) {
      const audioNode = isAudioNode(nextLink) ? nextLink : getValueForKey2(audioParamAudioNodeStore2, nextLink);
      if (isDelayNode(audioNode)) {
        return [];
      }
      if (chain[0] === audioNode) {
        return [chain];
      }
      if (chain.includes(audioNode)) {
        return [];
      }
      const { outputs } = getAudioNodeConnections2(audioNode);
      return Array.from(outputs).map((outputConnection) => detectCycles([...chain, audioNode], outputConnection[0])).reduce((mergedCycles, nestedCycles) => mergedCycles.concat(nestedCycles), []);
    };
  };

  // src/factories/dynamics-compressor-node-constructor.ts
  var DEFAULT_OPTIONS11 = {
    attack: 3e-3,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    knee: 30,
    ratio: 12,
    release: 0.25,
    threshold: -24
  };
  var createDynamicsCompressorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDynamicsCompressorNodeRenderer2, createNativeDynamicsCompressorNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DynamicsCompressorNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS11, ...options };
        const nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const dynamicsCompressorNodeRenderer = isOffline ? createDynamicsCompressorNodeRenderer2() : null;
        super(context, false, nativeDynamicsCompressorNode, dynamicsCompressorNodeRenderer);
        this._attack = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.attack);
        this._knee = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.knee);
        this._nativeDynamicsCompressorNode = nativeDynamicsCompressorNode;
        this._ratio = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.ratio);
        this._release = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.release);
        this._threshold = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.threshold);
        setAudioNodeTailTime2(this, 6e-3);
      }
      get attack() {
        return this._attack;
      }
      get knee() {
        return this._knee;
      }
      get ratio() {
        return this._ratio;
      }
      get reduction() {
        return this._nativeDynamicsCompressorNode.reduction;
      }
      get release() {
        return this._release;
      }
      get threshold() {
        return this._threshold;
      }
    };
  };

  // src/factories/dynamics-compressor-node-renderer-factory.ts
  var createDynamicsCompressorNodeRendererFactory = (connectAudioParam2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeDynamicsCompressorNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDynamicsCompressorNode = renderedNativeDynamicsCompressorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDynamicsCompressorNode !== void 0) {
            return renderedNativeDynamicsCompressorNode;
          }
          const nativeDynamicsCompressorNode = getNativeAudioNode2(proxy);
          renderedNativeDynamicsCompressorNodes.set(nativeOfflineAudioContext, nativeDynamicsCompressorNode);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDynamicsCompressorNode);
          return nativeDynamicsCompressorNode;
        }
      };
    };
  };

  // src/factories/event-target-constructor.ts
  var createEventTargetConstructor = (wrapEventListener2) => {
    return class EventTarget {
      constructor(_nativeEventTarget) {
        this._nativeEventTarget = _nativeEventTarget;
        this._listeners = /* @__PURE__ */ new WeakMap();
      }
      addEventListener(type, listener, options) {
        if (listener !== null) {
          let wrappedEventListener = this._listeners.get(listener);
          if (wrappedEventListener === void 0) {
            wrappedEventListener = wrapEventListener2(this, listener);
            if (typeof listener === "function") {
              this._listeners.set(listener, wrappedEventListener);
            }
          }
          this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
        }
      }
      dispatchEvent(event) {
        return this._nativeEventTarget.dispatchEvent(event);
      }
      removeEventListener(type, listener, options) {
        const wrappedEventListener = listener === null ? void 0 : this._listeners.get(listener);
        this._nativeEventTarget.removeEventListener(type, wrappedEventListener === void 0 ? null : wrappedEventListener, options);
      }
    };
  };

  // src/factories/fetch-source.ts
  var createFetchSource = (createAbortError2) => {
    return async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return [await response.text(), response.url];
        }
      } catch {
      }
      throw createAbortError2();
    };
  };

  // src/factories/gain-node-constructor.ts
  var DEFAULT_OPTIONS12 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    gain: 1
  };
  var createGainNodeConstructor = (audioNodeConstructor2, createAudioParam2, createGainNodeRenderer2, createNativeGainNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class GainNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS12, ...options };
        const nativeGainNode = createNativeGainNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const gainNodeRenderer = isOffline ? createGainNodeRenderer2() : null;
        super(context, false, nativeGainNode, gainNodeRenderer);
        this._gain = createAudioParam2(this, isOffline, nativeGainNode.gain);
      }
      get gain() {
        return this._gain;
      }
    };
  };

  // src/factories/gain-node-renderer-factory.ts
  var createGainNodeRendererFactory = (connectAudioParam2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeGainNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNode = renderedNativeGainNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNode !== void 0) {
            return renderedNativeGainNode;
          }
          const nativeGainNode = getNativeAudioNode2(proxy);
          renderedNativeGainNodes.set(nativeOfflineAudioContext, nativeGainNode);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeGainNode);
          return nativeGainNode;
        }
      };
    };
  };

  // src/factories/get-audio-node-renderer.ts
  var createGetAudioNodeRenderer = (getAudioNodeConnections2) => {
    return (audioNode) => {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      if (audioNodeConnections.renderer === null) {
        throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
      }
      return audioNodeConnections.renderer;
    };
  };

  // src/factories/get-audio-node-tail-time.ts
  var createGetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode) => audioNodeTailTimeStore2.get(audioNode) ?? 0;
  };

  // src/factories/get-backup-offline-audio-context.ts
  var createGetBackupOfflineAudioContext = (backupOfflineAudioContextStore2) => {
    return (nativeContext) => {
      return backupOfflineAudioContextStore2.get(nativeContext);
    };
  };

  // src/factories/invalid-state-error.ts
  var createInvalidStateError = () => new DOMException("", "InvalidStateError");

  // src/factories/get-native-context.ts
  var createGetNativeContext = (contextStore) => {
    return (context) => {
      const nativeContext = contextStore.get(context);
      if (nativeContext === void 0) {
        throw createInvalidStateError();
      }
      return nativeContext;
    };
  };

  // src/factories/get-or-create-backup-offline-audio-context.ts
  var createGetOrCreateBackupOfflineAudioContext = (backupOfflineAudioContextStore2, nativeOfflineAudioContextConstructor2) => {
    return (nativeContext) => {
      let backupOfflineAudioContext = backupOfflineAudioContextStore2.get(nativeContext);
      if (backupOfflineAudioContext !== void 0) {
        return backupOfflineAudioContext;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      backupOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, nativeContext.sampleRate);
      backupOfflineAudioContextStore2.set(nativeContext, backupOfflineAudioContext);
      return backupOfflineAudioContext;
    };
  };

  // src/factories/get-unrendered-audio-worklet-nodes.ts
  var createGetUnrenderedAudioWorkletNodes = (unrenderedAudioWorkletNodeStore2) => {
    return (nativeContext) => {
      const unrenderedAudioWorkletNodes = unrenderedAudioWorkletNodeStore2.get(nativeContext);
      if (unrenderedAudioWorkletNodes === void 0) {
        throw new Error("The context has no set of AudioWorkletNodes.");
      }
      return unrenderedAudioWorkletNodes;
    };
  };

  // src/factories/invalid-access-error.ts
  var createInvalidAccessError = () => new DOMException("", "InvalidAccessError");

  // src/helpers/wrap-iir-filter-node-get-frequency-response-method.ts
  var wrapIIRFilterNodeGetFrequencyResponseMethod = (nativeIIRFilterNode) => {
    nativeIIRFilterNode.getFrequencyResponse = /* @__PURE__ */ ((getFrequencyResponse) => {
      return (frequencyHz, magResponse, phaseResponse) => {
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError();
        }
        return getFrequencyResponse.call(nativeIIRFilterNode, frequencyHz, magResponse, phaseResponse);
      };
    })(nativeIIRFilterNode.getFrequencyResponse);
  };

  // src/factories/iir-filter-node-constructor.ts
  var DEFAULT_OPTIONS13 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers"
  };
  var createIIRFilterNodeConstructor = (audioNodeConstructor2, createNativeIIRFilterNode2, createIIRFilterNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class IIRFilterNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = { ...DEFAULT_OPTIONS13, ...options };
        const nativeIIRFilterNode = createNativeIIRFilterNode2(nativeContext, mergedOptions);
        const iirFilterNodeRenderer = isOffline ? createIIRFilterNodeRenderer2() : null;
        super(context, false, nativeIIRFilterNode, iirFilterNodeRenderer);
        wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);
        this._nativeIIRFilterNode = nativeIIRFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
      }
    };
  };

  // src/factories/iir-filter-node-renderer-factory.ts
  var createIIRFilterNodeRendererFactory = (getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return renderedNativeAudioNode;
          }
          const nativeIIRFilterNode = getNativeAudioNode2(proxy);
          renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeIIRFilterNode);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeIIRFilterNode);
          return nativeIIRFilterNode;
        }
      };
    };
  };

  // src/factories/increment-cycle-counter-factory.ts
  var createIncrementCycleCounterFactory = (cycleCounters, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, isActiveAudioNode2) => {
    return (isOffline) => {
      return (audioNode, count) => {
        const cycleCounter = cycleCounters.get(audioNode);
        if (cycleCounter === void 0) {
          if (!isOffline && isActiveAudioNode2(audioNode)) {
            const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
            const { outputs } = getAudioNodeConnections2(audioNode);
            for (const output of outputs) {
              if (isAudioNodeOutputConnection(output)) {
                const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
                disconnectNativeAudioNodeFromNativeAudioNode2(
                  nativeSourceAudioNode,
                  nativeDestinationAudioNode,
                  output[1],
                  output[2]
                );
              } else {
                const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
                nativeSourceAudioNode.disconnect(nativeDestinationAudioParam, output[1]);
              }
            }
          }
          cycleCounters.set(audioNode, count);
        } else {
          cycleCounters.set(audioNode, cycleCounter + count);
        }
      };
    };
  };

  // src/factories/index-size-error.ts
  var createIndexSizeError = () => new DOMException("", "IndexSizeError");

  // src/factories/is-any-audio-context.ts
  var createIsAnyAudioContext = (contextStore, isNativeAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeAudioContext2(nativeContext) || isNativeAudioContext2(anything);
    };
  };

  // src/factories/is-any-audio-node.ts
  var createIsAnyAudioNode = (audioNodeStore, isNativeAudioNode2) => {
    return (anything) => audioNodeStore.has(anything) || isNativeAudioNode2(anything);
  };

  // src/factories/is-any-audio-param.ts
  var createIsAnyAudioParam = (audioParamStore, isNativeAudioParam2) => {
    return (anything) => audioParamStore.has(anything) || isNativeAudioParam2(anything);
  };

  // src/factories/is-any-offline-audio-context.ts
  var createIsAnyOfflineAudioContext = (contextStore, isNativeOfflineAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeOfflineAudioContext2(nativeContext) || isNativeOfflineAudioContext2(anything);
    };
  };

  // src/factories/is-native-audio-context.ts
  var createIsNativeAudioContext = (nativeAudioContextConstructor2) => {
    return (anything) => {
      return nativeAudioContextConstructor2 !== null && anything instanceof nativeAudioContextConstructor2;
    };
  };

  // src/factories/is-native-audio-node.ts
  var createIsNativeAudioNode = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioNode === "function" && anything instanceof window3.AudioNode;
    };
  };

  // src/factories/is-native-audio-param.ts
  var createIsNativeAudioParam = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioParam === "function" && anything instanceof window3.AudioParam;
    };
  };

  // src/factories/is-native-context.ts
  var createIsNativeContext = (isNativeAudioContext2, isNativeOfflineAudioContext2) => {
    return (anything) => {
      return isNativeAudioContext2(anything) || isNativeOfflineAudioContext2(anything);
    };
  };

  // src/factories/is-native-offline-audio-context.ts
  var createIsNativeOfflineAudioContext = (nativeOfflineAudioContextConstructor2) => {
    return (anything) => {
      return nativeOfflineAudioContextConstructor2 !== null && anything instanceof nativeOfflineAudioContextConstructor2;
    };
  };

  // src/factories/is-secure-context.ts
  var createIsSecureContext = (window3) => window3 !== null && window3.isSecureContext;

  // src/factories/is-supported-promise.ts
  var createIsSupportedPromise = async (cacheTestResult2, testAudioBufferConstructorSupport, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, testAudioBufferCopyChannelMethodsSubarraySupport, testAudioBufferFactoryMethodSupport, testAudioBufferSourceNodeBufferReassignmentSupport, testAudioContextCloseMethodSupport, testAudioContextDecodeAudioDataMethodTypeErrorSupport, testAudioContextGetOutputTimestampSupport, testAudioContextOptionsSupport, testAudioContextResumeSupport, testAudioNodeConnectMethodChainabilitySupport, testAudioNodeConnectMethodVerificationSupport, testAudioParamValueSetterSupport, testAudioWorkletAddModuleMethodSupport, testAudioWorkletNodeConstructorSupport, testAudioWorkletProcessorNoInputsSupport, testAudioWorkletProcessorNoOutputsSupport, testBiquadFilterNodeGetFrequencyResponseMethodSupport, testChannelMergerNodeChannelCountSupport, testConstantSourceNodeAccurateSchedulingSupport, testConvolverNodeBufferReassignabilitySupport, testConvolverNodeChannelCountSupport, testDomExceptionConstructorSupport2, testErrorEventErrorPropertySupport2, testIsSecureContextSupport, testMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport, testPeriodicWaveConstructorSupport, testStereoPannerNodeDefaultValueSupport, testTransferablesSupport2) => {
    if (cacheTestResult2(testAudioBufferConstructorSupport, testAudioBufferConstructorSupport) && cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport, testAudioBufferCopyChannelMethodsOutOfBoundsSupport) && cacheTestResult2(testAudioBufferCopyChannelMethodsSubarraySupport, testAudioBufferCopyChannelMethodsSubarraySupport) && cacheTestResult2(testAudioBufferFactoryMethodSupport, testAudioBufferFactoryMethodSupport) && cacheTestResult2(testAudioBufferSourceNodeBufferReassignmentSupport, testAudioBufferSourceNodeBufferReassignmentSupport) && cacheTestResult2(testAudioContextCloseMethodSupport, testAudioContextCloseMethodSupport) && cacheTestResult2(testAudioContextOptionsSupport, testAudioContextOptionsSupport) && cacheTestResult2(testAudioNodeConnectMethodChainabilitySupport, testAudioNodeConnectMethodChainabilitySupport) && cacheTestResult2(testAudioNodeConnectMethodVerificationSupport, testAudioNodeConnectMethodVerificationSupport) && cacheTestResult2(testAudioWorkletNodeConstructorSupport, testAudioWorkletNodeConstructorSupport) && cacheTestResult2(testBiquadFilterNodeGetFrequencyResponseMethodSupport, testBiquadFilterNodeGetFrequencyResponseMethodSupport) && cacheTestResult2(testChannelMergerNodeChannelCountSupport, testChannelMergerNodeChannelCountSupport) && cacheTestResult2(testConstantSourceNodeAccurateSchedulingSupport, testConstantSourceNodeAccurateSchedulingSupport) && cacheTestResult2(testConvolverNodeBufferReassignabilitySupport, testConvolverNodeBufferReassignabilitySupport) && cacheTestResult2(testConvolverNodeChannelCountSupport, testConvolverNodeChannelCountSupport) && cacheTestResult2(testDomExceptionConstructorSupport2, testDomExceptionConstructorSupport2) && cacheTestResult2(testErrorEventErrorPropertySupport2, testErrorEventErrorPropertySupport2) && cacheTestResult2(testIsSecureContextSupport, testIsSecureContextSupport) && cacheTestResult2(
      testMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport,
      testMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport
    ) && cacheTestResult2(testPeriodicWaveConstructorSupport, testPeriodicWaveConstructorSupport)) {
      const results = await Promise.all([
        cacheTestResult2(testAudioContextDecodeAudioDataMethodTypeErrorSupport, testAudioContextDecodeAudioDataMethodTypeErrorSupport),
        cacheTestResult2(testAudioContextGetOutputTimestampSupport, testAudioContextGetOutputTimestampSupport),
        cacheTestResult2(testAudioContextResumeSupport, testAudioContextResumeSupport),
        cacheTestResult2(testAudioParamValueSetterSupport, testAudioParamValueSetterSupport),
        cacheTestResult2(testAudioWorkletAddModuleMethodSupport, testAudioWorkletAddModuleMethodSupport),
        cacheTestResult2(testAudioWorkletProcessorNoInputsSupport, testAudioWorkletProcessorNoInputsSupport),
        cacheTestResult2(testAudioWorkletProcessorNoOutputsSupport, testAudioWorkletProcessorNoOutputsSupport),
        cacheTestResult2(testStereoPannerNodeDefaultValueSupport, testStereoPannerNodeDefaultValueSupport),
        cacheTestResult2(testTransferablesSupport2, testTransferablesSupport2)
      ]);
      return results.every((result) => result);
    }
    return false;
  };

  // src/factories/media-element-audio-source-node-constructor.ts
  var createMediaElementAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaElementAudioSourceNode2, getNativeContext2) => {
    return class MediaElementAudioSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const nativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNode2(nativeContext, options);
        super(context, true, nativeMediaElementAudioSourceNode, null);
        this._nativeMediaElementAudioSourceNode = nativeMediaElementAudioSourceNode;
      }
      get mediaElement() {
        return this._nativeMediaElementAudioSourceNode.mediaElement;
      }
    };
  };

  // src/factories/media-stream-audio-destination-node-constructor.ts
  var DEFAULT_OPTIONS14 = {
    channelCount: 2,
    channelCountMode: "explicit",
    channelInterpretation: "speakers"
  };
  var createMediaStreamAudioDestinationNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioDestinationNode2, getNativeContext2) => {
    return class MediaStreamAudioDestinationNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS14, ...options };
        const nativeMediaStreamAudioDestinationNode = createNativeMediaStreamAudioDestinationNode2(nativeContext, mergedOptions);
        super(context, false, nativeMediaStreamAudioDestinationNode, null);
        this._nativeMediaStreamAudioDestinationNode = nativeMediaStreamAudioDestinationNode;
      }
      get stream() {
        return this._nativeMediaStreamAudioDestinationNode.stream;
      }
    };
  };

  // src/factories/media-stream-audio-source-node-constructor.ts
  var createMediaStreamAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioSourceNode2, getNativeContext2) => {
    return class MediaStreamAudioSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const nativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNode2(nativeContext, options);
        super(context, true, nativeMediaStreamAudioSourceNode, null);
        this._nativeMediaStreamAudioSourceNode = nativeMediaStreamAudioSourceNode;
      }
      get mediaStream() {
        return this._nativeMediaStreamAudioSourceNode.mediaStream;
      }
    };
  };

  // src/factories/media-stream-track-audio-source-node-constructor.ts
  var createMediaStreamTrackAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamTrackAudioSourceNode2, getNativeContext2) => {
    return class MediaStreamTrackAudioSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const nativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNode2(nativeContext, options);
        super(context, true, nativeMediaStreamTrackAudioSourceNode, null);
      }
    };
  };

  // src/factories/minimal-audio-context-constructor.ts
  var createMinimalAudioContextConstructor = (createInvalidStateError2, minimalBaseAudioContextConstructor2, nativeAudioContextConstructor2) => {
    return class MinimalAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        const nativeAudioContext = new nativeAudioContextConstructor2(options);
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(
            `The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
          );
        }
        super(nativeAudioContext, nativeAudioContext.destination.channelCount);
        this._nativeAudioContext = nativeAudioContext;
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._nativeAudioContext.baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => deactivateAudioGraph(this));
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume();
      }
      suspend() {
        return this._nativeAudioContext.suspend();
      }
    };
  };

  // src/factories/minimal-base-audio-context-constructor.ts
  var createMinimalBaseAudioContextConstructor = (audioDestinationNodeConstructor2, createAudioListener2, eventTargetConstructor2, isNativeOfflineAudioContext2, unrenderedAudioWorkletNodeStore2, wrapEventListener2) => {
    return class MinimalBaseAudioContext extends eventTargetConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext);
        this._nativeContext = _nativeContext;
        CONTEXT_STORE.set(this, _nativeContext);
        if (isNativeOfflineAudioContext2(_nativeContext)) {
          unrenderedAudioWorkletNodeStore2.set(_nativeContext, /* @__PURE__ */ new Set());
        }
        this._destination = new audioDestinationNodeConstructor2(this, numberOfChannels);
        this._listener = createAudioListener2(this, _nativeContext);
        this._onstatechange = null;
      }
      get currentTime() {
        return this._nativeContext.currentTime;
      }
      get destination() {
        return this._destination;
      }
      get listener() {
        return this._listener;
      }
      get onstatechange() {
        return this._onstatechange;
      }
      set onstatechange(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeContext.onstatechange = wrappedListener;
        const nativeOnStateChange = this._nativeContext.onstatechange;
        this._onstatechange = nativeOnStateChange !== null && nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
      }
      get sampleRate() {
        return this._nativeContext.sampleRate;
      }
      get state() {
        return this._nativeContext.state;
      }
    };
  };

  // src/factories/minimal-offline-audio-context-constructor.ts
  var DEFAULT_OPTIONS15 = {
    numberOfChannels: 1
  };
  var createMinimalOfflineAudioContextConstructor = (createInvalidStateError2, createNativeOfflineAudioContext2, minimalBaseAudioContextConstructor2, startRendering2) => {
    return class MinimalOfflineAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options) {
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS15, ...options };
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        super(nativeOfflineAudioContext, numberOfChannels);
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
    };
  };

  // src/factories/monitor-connections.ts
  var createMonitorConnections = (insertElementInSet2, isNativeAudioNode2) => {
    return (nativeAudioNode, whenConnected, whenDisconnected) => {
      const connections = /* @__PURE__ */ new Set();
      nativeAudioNode.connect = /* @__PURE__ */ ((connect) => {
        return (destination, output = 0, input = 0) => {
          const wasDisconnected = connections.size === 0;
          if (isNativeAudioNode2(destination)) {
            connect.call(
              nativeAudioNode,
              destination,
              output,
              input
            );
            insertElementInSet2(
              connections,
              [destination, output, input],
              (connection) => connection[0] === destination && connection[1] === output && connection[2] === input,
              true
            );
            if (wasDisconnected) {
              whenConnected();
            }
            return destination;
          }
          connect.call(nativeAudioNode, destination, output);
          insertElementInSet2(
            connections,
            [destination, output],
            (connection) => connection[0] === destination && connection[1] === output,
            true
          );
          if (wasDisconnected) {
            whenConnected();
          }
          return;
        };
      })(nativeAudioNode.connect);
      nativeAudioNode.disconnect = /* @__PURE__ */ ((disconnect) => {
        return (destinationOrOutput, output, input) => {
          const wasConnected = connections.size > 0;
          if (destinationOrOutput === void 0) {
            disconnect.apply(nativeAudioNode);
            connections.clear();
          } else if (typeof destinationOrOutput === "number") {
            disconnect.call(nativeAudioNode, destinationOrOutput);
            for (const connection of connections) {
              if (connection[1] === destinationOrOutput) {
                connections.delete(connection);
              }
            }
          } else {
            if (isNativeAudioNode2(destinationOrOutput)) {
              disconnect.call(
                nativeAudioNode,
                destinationOrOutput,
                output,
                input
              );
            } else {
              disconnect.call(
                nativeAudioNode,
                destinationOrOutput,
                output
              );
            }
            for (const connection of connections) {
              if (connection[0] === destinationOrOutput && (output === void 0 || connection[1] === output) && (input === void 0 || connection[2] === input)) {
                connections.delete(connection);
              }
            }
          }
          const isDisconnected = connections.size === 0;
          if (wasConnected && isDisconnected) {
            whenDisconnected();
          }
        };
      })(nativeAudioNode.disconnect);
      return nativeAudioNode;
    };
  };

  // src/helpers/assign-native-audio-node-option.ts
  var assignNativeAudioNodeOption = (nativeAudioNode, options, option) => {
    const value = options[option];
    if (value !== void 0 && value !== nativeAudioNode[option]) {
      nativeAudioNode[option] = value;
    }
  };

  // src/helpers/assign-native-audio-node-options.ts
  var assignNativeAudioNodeOptions = (nativeAudioNode, options) => {
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCount");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCountMode");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelInterpretation");
  };

  // src/factories/native-analyser-node-factory.ts
  var createNativeAnalyserNodeFactory = (createIndexSizeError2) => {
    return (nativeContext, options) => {
      const nativeAnalyserNode = nativeContext.createAnalyser();
      assignNativeAudioNodeOptions(nativeAnalyserNode, options);
      if (!(options.maxDecibels > options.minDecibels)) {
        throw createIndexSizeError2();
      }
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "fftSize");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "maxDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "minDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "smoothingTimeConstant");
      return nativeAnalyserNode;
    };
  };

  // src/factories/native-audio-buffer-constructor.ts
  var createNativeAudioBufferConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("AudioBuffer")) {
      return window3.AudioBuffer;
    }
    return null;
  };

  // src/helpers/assign-native-audio-node-audio-param-value.ts
  var assignNativeAudioNodeAudioParamValue = (nativeAudioNode, options, audioParam) => {
    const value = options[audioParam];
    if (value !== void 0 && value !== nativeAudioNode[audioParam].value) {
      nativeAudioNode[audioParam].value = value;
    }
  };

  // src/helpers/wrap-audio-scheduled-source-node-stop-method-negative-parameters.ts
  var wrapAudioScheduledSourceNodeStopMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.stop = /* @__PURE__ */ ((stop) => {
      return (when = 0) => {
        if (when < 0) {
          throw new RangeError("The parameter can't be negative.");
        }
        stop.call(nativeAudioScheduledSourceNode, when);
      };
    })(nativeAudioScheduledSourceNode.stop);
  };

  // src/factories/native-audio-buffer-source-node-factory.ts
  var createNativeAudioBufferSourceNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2) => {
    return (nativeContext, options) => {
      const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
      assignNativeAudioNodeOptions(nativeAudioBufferSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeAudioBufferSourceNode, options, "detune");
      assignNativeAudioNodeAudioParamValue(nativeAudioBufferSourceNode, options, "playbackRate");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "buffer");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loop");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopEnd");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopStart");
      if (!cacheTestResult2(
        testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2,
        () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext)
      )) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioBufferSourceNode);
      }
      addSilentConnection2(nativeContext, nativeAudioBufferSourceNode);
      return nativeAudioBufferSourceNode;
    };
  };

  // src/factories/native-audio-context-constructor.ts
  var createNativeAudioContextConstructor = (window3) => {
    if (window3 !== null && "AudioContext" in window3) {
      return window3.AudioContext;
    }
    return null;
  };

  // src/factories/native-audio-destination-node.ts
  var createNativeAudioDestinationNodeFactory = (createNativeGainNode2, overwriteAccessors2) => {
    return (nativeContext, channelCount) => {
      const nativeAudioDestinationNode = nativeContext.destination;
      const gainNode = createNativeGainNode2(nativeContext, {
        channelCount,
        channelCountMode: nativeAudioDestinationNode.channelCountMode,
        channelInterpretation: nativeAudioDestinationNode.channelInterpretation,
        gain: 1
      });
      overwriteAccessors2(
        gainNode,
        "channelCount",
        (get) => () => get.call(gainNode),
        (set) => (value) => {
          set.call(gainNode, value);
          nativeAudioDestinationNode.channelCount = value;
        }
      );
      overwriteAccessors2(
        gainNode,
        "channelCountMode",
        (get) => () => get.call(gainNode),
        (set) => (value) => {
          set.call(gainNode, value);
          nativeAudioDestinationNode.channelCountMode = value;
        }
      );
      overwriteAccessors2(
        gainNode,
        "channelInterpretation",
        (get) => () => get.call(gainNode),
        (set) => (value) => {
          set.call(gainNode, value);
          nativeAudioDestinationNode.channelInterpretation = value;
        }
      );
      Object.defineProperty(gainNode, "maxChannelCount", {
        get: () => nativeAudioDestinationNode.maxChannelCount
      });
      gainNode.connect(nativeAudioDestinationNode);
      return gainNode;
    };
  };

  // src/factories/native-audio-worklet-node-constructor.ts
  var createNativeAudioWorkletNodeConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    return window3.hasOwnProperty("AudioWorkletNode") ? window3.AudioWorkletNode : null;
  };

  // src/factories/native-audio-worklet-node-factory.ts
  var createNativeAudioWorkletNodeFactory = (createNotSupportedError2) => {
    return (nativeContext, nativeAudioWorkletNodeConstructor2, name, options) => {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        throw new Error("Missing the native AudioWorkletNode constructor.");
      }
      try {
        const nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor2(
          nativeContext,
          name,
          options
        );
        const patchedEventListeners = /* @__PURE__ */ new Map();
        let onprocessorerror = null;
        Object.defineProperties(nativeAudioWorkletNode, {
          // Bug #178: Chrome dispatches an event of type error.
          onprocessorerror: {
            get: () => onprocessorerror,
            set: (value) => {
              if (typeof onprocessorerror === "function") {
                nativeAudioWorkletNode.removeEventListener("processorerror", onprocessorerror);
              }
              onprocessorerror = typeof value === "function" ? value : null;
              if (typeof onprocessorerror === "function") {
                nativeAudioWorkletNode.addEventListener("processorerror", onprocessorerror);
              }
            }
          }
        });
        nativeAudioWorkletNode.addEventListener = /* @__PURE__ */ ((addEventListener) => {
          return (...args) => {
            if (args[0] === "processorerror") {
              const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
              if (unpatchedEventListener !== null) {
                const patchedEventListener = patchedEventListeners.get(args[1]);
                if (patchedEventListener !== void 0) {
                  args[1] = patchedEventListener;
                } else {
                  args[1] = (event) => {
                    if (event instanceof ErrorEvent && event.error === null) {
                      Object.defineProperties(event, {
                        error: { value: void 0 }
                      });
                    }
                    if (event.type === "error") {
                      Object.defineProperties(event, {
                        type: { value: "processorerror" }
                      });
                    }
                    unpatchedEventListener(event);
                  };
                  patchedEventListeners.set(unpatchedEventListener, args[1]);
                }
              }
            }
            addEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
            return addEventListener.call(nativeAudioWorkletNode, ...args);
          };
        })(nativeAudioWorkletNode.addEventListener);
        nativeAudioWorkletNode.removeEventListener = /* @__PURE__ */ ((removeEventListener) => {
          return (...args) => {
            if (args[0] === "processorerror") {
              const patchedEventListener = patchedEventListeners.get(args[1]);
              if (patchedEventListener !== void 0) {
                patchedEventListeners.delete(args[1]);
                args[1] = patchedEventListener;
              }
            }
            removeEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
            return removeEventListener.call(nativeAudioWorkletNode, args[0], args[1], args[2]);
          };
        })(nativeAudioWorkletNode.removeEventListener);
        return nativeAudioWorkletNode;
      } catch (err) {
        if (err.code === 11) {
          throw createNotSupportedError2();
        }
        throw err;
      }
    };
  };

  // src/factories/native-biquad-filter-node.ts
  var createNativeBiquadFilterNode = (nativeContext, options) => {
    const nativeBiquadFilterNode = nativeContext.createBiquadFilter();
    assignNativeAudioNodeOptions(nativeBiquadFilterNode, options);
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "Q");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "detune");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "frequency");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "gain");
    assignNativeAudioNodeOption(nativeBiquadFilterNode, options, "type");
    return nativeBiquadFilterNode;
  };

  // src/factories/native-channel-merger-node.ts
  var createNativeChannelMergerNode = (nativeContext, options) => {
    const nativeChannelMergerNode = nativeContext.createChannelMerger(options.numberOfInputs);
    assignNativeAudioNodeOptions(nativeChannelMergerNode, options);
    return nativeChannelMergerNode;
  };

  // src/factories/native-channel-splitter-node.ts
  var createNativeChannelSplitterNode = (nativeContext, options) => {
    const nativeChannelSplitterNode = nativeContext.createChannelSplitter(options.numberOfOutputs);
    assignNativeAudioNodeOptions(nativeChannelSplitterNode, options);
    return nativeChannelSplitterNode;
  };

  // src/factories/native-constant-source-node-factory.ts
  var createNativeConstantSourceNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2) => {
    return (nativeContext, options) => {
      const nativeConstantSourceNode = nativeContext.createConstantSource();
      assignNativeAudioNodeOptions(nativeConstantSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeConstantSourceNode, options, "offset");
      if (!cacheTestResult2(
        testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2,
        () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext)
      )) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeConstantSourceNode);
      }
      addSilentConnection2(nativeContext, nativeConstantSourceNode);
      return nativeConstantSourceNode;
    };
  };

  // src/factories/native-convolver-node.ts
  var createNativeConvolverNode = (nativeContext, options) => {
    const nativeConvolverNode = nativeContext.createConvolver();
    assignNativeAudioNodeOptions(nativeConvolverNode, options);
    if (options.disableNormalization === nativeConvolverNode.normalize) {
      nativeConvolverNode.normalize = !options.disableNormalization;
    }
    assignNativeAudioNodeOption(nativeConvolverNode, options, "buffer");
    return nativeConvolverNode;
  };

  // src/factories/native-delay-node.ts
  var createNativeDelayNode = (nativeContext, options) => {
    const nativeDelayNode = nativeContext.createDelay(options.maxDelayTime);
    assignNativeAudioNodeOptions(nativeDelayNode, options);
    assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, "delayTime");
    return nativeDelayNode;
  };

  // src/factories/native-dynamics-compressor-node.ts
  var createNativeDynamicsCompressorNode = (nativeContext, options) => {
    const nativeDynamicsCompressorNode = nativeContext.createDynamicsCompressor();
    assignNativeAudioNodeOptions(nativeDynamicsCompressorNode, options);
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "attack");
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "knee");
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "ratio");
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "release");
    assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "threshold");
    return nativeDynamicsCompressorNode;
  };

  // src/factories/native-gain-node.ts
  var createNativeGainNode = (nativeContext, options) => {
    const nativeGainNode = nativeContext.createGain();
    assignNativeAudioNodeOptions(nativeGainNode, options);
    assignNativeAudioNodeAudioParamValue(nativeGainNode, options, "gain");
    return nativeGainNode;
  };

  // src/factories/native-iir-filter-node.ts
  var createNativeIIRFilterNode = (nativeContext, options) => {
    const nativeIIRFilterNode = nativeContext.createIIRFilter(options.feedforward, options.feedback);
    assignNativeAudioNodeOptions(nativeIIRFilterNode, options);
    return nativeIIRFilterNode;
  };

  // src/factories/native-media-element-audio-source-node.ts
  var createNativeMediaElementAudioSourceNode = (nativeAudioContext, options) => {
    return nativeAudioContext.createMediaElementSource(options.mediaElement);
  };

  // src/factories/native-media-stream-audio-destination-node.ts
  var createNativeMediaStreamAudioDestinationNode = (nativeAudioContext, options) => {
    const nativeMediaStreamAudioDestinationNode = nativeAudioContext.createMediaStreamDestination();
    assignNativeAudioNodeOptions(nativeMediaStreamAudioDestinationNode, options);
    return nativeMediaStreamAudioDestinationNode;
  };

  // src/factories/native-media-stream-audio-source-node.ts
  var createNativeMediaStreamAudioSourceNode = (nativeAudioContext, { mediaStream }) => {
    const audioStreamTracks = mediaStream.getAudioTracks();
    audioStreamTracks.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    const filteredAudioStreamTracks = audioStreamTracks.slice(0, 1);
    const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(new MediaStream(filteredAudioStreamTracks));
    Object.defineProperty(nativeMediaStreamAudioSourceNode, "mediaStream", { value: mediaStream });
    return nativeMediaStreamAudioSourceNode;
  };

  // src/factories/native-media-stream-track-audio-source-node-factory.ts
  var createNativeMediaStreamTrackAudioSourceNodeFactory = (createInvalidStateError2) => {
    return (nativeAudioContext, { mediaStreamTrack }) => {
      if (typeof nativeAudioContext.createMediaStreamTrackSource === "function") {
        return nativeAudioContext.createMediaStreamTrackSource(mediaStreamTrack);
      }
      const mediaStream = new MediaStream([mediaStreamTrack]);
      const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(mediaStream);
      if (mediaStreamTrack.kind !== "audio") {
        throw createInvalidStateError2();
      }
      return nativeMediaStreamAudioSourceNode;
    };
  };

  // src/factories/native-offline-audio-context-constructor.ts
  var createNativeOfflineAudioContextConstructor = (window3) => {
    if (window3 !== null && "OfflineAudioContext" in window3) {
      return window3.OfflineAudioContext;
    }
    return null;
  };

  // src/factories/native-oscillator-node-factory.ts
  var createNativeOscillatorNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2) => {
    return (nativeContext, options) => {
      const nativeOscillatorNode = nativeContext.createOscillator();
      assignNativeAudioNodeOptions(nativeOscillatorNode, options);
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "detune");
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "frequency");
      if (options.periodicWave !== void 0) {
        nativeOscillatorNode.setPeriodicWave(options.periodicWave);
      } else {
        assignNativeAudioNodeOption(nativeOscillatorNode, options, "type");
      }
      if (!cacheTestResult2(
        testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2,
        () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext)
      )) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeOscillatorNode);
      }
      addSilentConnection2(nativeContext, nativeOscillatorNode);
      return nativeOscillatorNode;
    };
  };

  // src/factories/native-panner-node.ts
  var createNativePannerNode = (nativeContext, options) => {
    const nativePannerNode = nativeContext.createPanner();
    assignNativeAudioNodeOptions(nativePannerNode, options);
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationX");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationY");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationZ");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionX");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionY");
    assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionZ");
    assignNativeAudioNodeOption(nativePannerNode, options, "coneInnerAngle");
    assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterAngle");
    assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterGain");
    assignNativeAudioNodeOption(nativePannerNode, options, "distanceModel");
    assignNativeAudioNodeOption(nativePannerNode, options, "maxDistance");
    assignNativeAudioNodeOption(nativePannerNode, options, "panningModel");
    assignNativeAudioNodeOption(nativePannerNode, options, "refDistance");
    assignNativeAudioNodeOption(nativePannerNode, options, "rolloffFactor");
    return nativePannerNode;
  };

  // src/factories/native-periodic-wave.ts
  var createNativePeriodicWave = (nativeContext, { disableNormalization, imag, real }) => nativeContext.createPeriodicWave(real, imag, { disableNormalization });

  // src/factories/native-periodic-wave-constructor.ts
  var createNativePeriodicWaveConstructor = (window3) => {
    if (window3 !== null && "PeriodicWave" in window3) {
      return window3.PeriodicWave;
    }
    return null;
  };

  // src/factories/native-script-processor-node.ts
  var createNativeScriptProcessorNode = (nativeContext, bufferSize, numberOfInputChannels, numberOfOutputChannels) => {
    return nativeContext.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
  };

  // src/factories/native-stereo-panner-node.ts
  var createNativeStereoPannerNode = (nativeContext, options) => {
    const nativeStereoPannerNode = nativeContext.createStereoPanner();
    assignNativeAudioNodeOptions(nativeStereoPannerNode, options);
    assignNativeAudioNodeAudioParamValue(nativeStereoPannerNode, options, "pan");
    return nativeStereoPannerNode;
  };

  // src/factories/native-wave-shaper-node-factory.ts
  var createNativeWaveShaperNodeFactory = (createConnectedNativeAudioBufferSourceNode2, createInvalidStateError2, isDCCurve2, monitorConnections2, overwriteAccessors2) => {
    return (nativeContext, options) => {
      const nativeWaveShaperNode = nativeContext.createWaveShaper();
      assignNativeAudioNodeOptions(nativeWaveShaperNode, options);
      const curve = options.curve === null || options.curve instanceof Float32Array ? options.curve : new Float32Array(options.curve);
      if (curve !== null && curve.length < 2) {
        throw createInvalidStateError2();
      }
      assignNativeAudioNodeOption(nativeWaveShaperNode, { curve }, "curve");
      assignNativeAudioNodeOption(nativeWaveShaperNode, options, "oversample");
      let disconnectNativeAudioBufferSourceNode = null;
      let isConnected = false;
      overwriteAccessors2(
        nativeWaveShaperNode,
        "curve",
        (get) => () => get.call(nativeWaveShaperNode),
        (set) => (value) => {
          set.call(nativeWaveShaperNode, value);
          if (isConnected) {
            if (isDCCurve2(value) && disconnectNativeAudioBufferSourceNode === null) {
              disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(
                nativeContext,
                nativeWaveShaperNode
              );
            } else if (!isDCCurve2(value) && disconnectNativeAudioBufferSourceNode !== null) {
              disconnectNativeAudioBufferSourceNode();
              disconnectNativeAudioBufferSourceNode = null;
            }
          }
          return value;
        }
      );
      const whenConnected = () => {
        isConnected = true;
        if (isDCCurve2(nativeWaveShaperNode.curve)) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, nativeWaveShaperNode);
        }
      };
      const whenDisconnected = () => {
        isConnected = false;
        if (disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      };
      return monitorConnections2(nativeWaveShaperNode, whenConnected, whenDisconnected);
    };
  };

  // src/factories/not-supported-error.ts
  var createNotSupportedError = () => new DOMException("", "NotSupportedError");

  // src/factories/offline-audio-context-constructor.ts
  var DEFAULT_OPTIONS16 = {
    numberOfChannels: 1
  };
  var createOfflineAudioContextConstructor = (baseAudioContextConstructor2, createInvalidStateError2, createNativeOfflineAudioContext2, startRendering2) => {
    return class OfflineAudioContext extends baseAudioContextConstructor2 {
      constructor(a, b, c) {
        let options;
        if (typeof a === "number" && b !== void 0 && c !== void 0) {
          options = { length: b, numberOfChannels: a, sampleRate: c };
        } else if (typeof a === "object") {
          options = a;
        } else {
          throw new Error("The given parameters are not valid.");
        }
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS16, ...options };
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        super(nativeOfflineAudioContext, numberOfChannels);
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
    };
  };

  // src/factories/oscillator-node-constructor.ts
  var DEFAULT_OPTIONS17 = {
    channelCount: 2,
    channelCountMode: "max",
    // This attribute has no effect for nodes with no inputs.
    channelInterpretation: "speakers",
    // This attribute has no effect for nodes with no inputs.
    detune: 0,
    frequency: 440,
    periodicWave: void 0,
    type: "sine"
  };
  var createOscillatorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeOscillatorNode2, createOscillatorNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class OscillatorNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS17, ...options };
        const nativeOscillatorNode = createNativeOscillatorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const oscillatorNodeRenderer = isOffline ? createOscillatorNodeRenderer2() : null;
        super(context, false, nativeOscillatorNode, oscillatorNodeRenderer);
        this._detune = createAudioParam2(this, isOffline, nativeOscillatorNode.detune, 153600, -153600);
        this._frequency = createAudioParam2(this, isOffline, nativeOscillatorNode.frequency);
        this._nativeOscillatorNode = nativeOscillatorNode;
        this._onended = null;
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeOscillatorNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeOscillatorNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get type() {
        return this._nativeOscillatorNode.type;
      }
      set type(value) {
        this._nativeOscillatorNode.type = value;
      }
      setPeriodicWave(periodicWave) {
        this._nativeOscillatorNode.setPeriodicWave(periodicWave);
      }
      start(when = 0) {
        this._nativeOscillatorNode.start(when);
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeOscillatorNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeOscillatorNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeOscillatorNode.stop(when);
      }
    };
  };

  // src/factories/oscillator-node-renderer-factory.ts
  var createOscillatorNodeRendererFactory = (connectAudioParam2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeOscillatorNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeOscillatorNode = renderedNativeOscillatorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeOscillatorNode !== void 0) {
            return renderedNativeOscillatorNode;
          }
          const nativeOscillatorNode = getNativeAudioNode2(proxy);
          renderedNativeOscillatorNodes.set(nativeOfflineAudioContext, nativeOscillatorNode);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeOscillatorNode);
          return nativeOscillatorNode;
        }
      };
    };
  };

  // src/factories/panner-node-constructor.ts
  var DEFAULT_OPTIONS18 = {
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    coneInnerAngle: 360,
    coneOuterAngle: 360,
    coneOuterGain: 0,
    distanceModel: "inverse",
    maxDistance: 1e4,
    orientationX: 1,
    orientationY: 0,
    orientationZ: 0,
    panningModel: "equalpower",
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    refDistance: 1,
    rolloffFactor: 1
  };
  var createPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativePannerNode2, createPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class PannerNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS18, ...options };
        const nativePannerNode = createNativePannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const pannerNodeRenderer = isOffline ? createPannerNodeRenderer2() : null;
        super(context, false, nativePannerNode, pannerNodeRenderer);
        this._nativePannerNode = nativePannerNode;
        this._orientationX = createAudioParam2(this, isOffline, nativePannerNode.orientationX);
        this._orientationY = createAudioParam2(this, isOffline, nativePannerNode.orientationY);
        this._orientationZ = createAudioParam2(this, isOffline, nativePannerNode.orientationZ);
        this._positionX = createAudioParam2(this, isOffline, nativePannerNode.positionX);
        this._positionY = createAudioParam2(this, isOffline, nativePannerNode.positionY);
        this._positionZ = createAudioParam2(this, isOffline, nativePannerNode.positionZ);
        setAudioNodeTailTime2(this, 1);
      }
      get coneInnerAngle() {
        return this._nativePannerNode.coneInnerAngle;
      }
      set coneInnerAngle(value) {
        this._nativePannerNode.coneInnerAngle = value;
      }
      get coneOuterAngle() {
        return this._nativePannerNode.coneOuterAngle;
      }
      set coneOuterAngle(value) {
        this._nativePannerNode.coneOuterAngle = value;
      }
      get coneOuterGain() {
        return this._nativePannerNode.coneOuterGain;
      }
      set coneOuterGain(value) {
        this._nativePannerNode.coneOuterGain = value;
      }
      get distanceModel() {
        return this._nativePannerNode.distanceModel;
      }
      set distanceModel(value) {
        this._nativePannerNode.distanceModel = value;
      }
      get maxDistance() {
        return this._nativePannerNode.maxDistance;
      }
      set maxDistance(value) {
        this._nativePannerNode.maxDistance = value;
      }
      get orientationX() {
        return this._orientationX;
      }
      get orientationY() {
        return this._orientationY;
      }
      get orientationZ() {
        return this._orientationZ;
      }
      get panningModel() {
        return this._nativePannerNode.panningModel;
      }
      set panningModel(value) {
        this._nativePannerNode.panningModel = value;
      }
      get positionX() {
        return this._positionX;
      }
      get positionY() {
        return this._positionY;
      }
      get positionZ() {
        return this._positionZ;
      }
      get refDistance() {
        return this._nativePannerNode.refDistance;
      }
      set refDistance(value) {
        this._nativePannerNode.refDistance = value;
      }
      get rolloffFactor() {
        return this._nativePannerNode.rolloffFactor;
      }
      set rolloffFactor(value) {
        this._nativePannerNode.rolloffFactor = value;
      }
    };
  };

  // src/factories/panner-node-renderer-factory.ts
  var createPannerNodeRendererFactory = (connectAudioParam2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNodeOrNativePannerNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNodeOrNativePannerNode !== void 0) {
            return renderedNativeGainNodeOrNativePannerNode;
          }
          const nativePannerNode = getNativeAudioNode2(proxy);
          renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativePannerNode);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativePannerNode);
          return nativePannerNode;
        }
      };
    };
  };

  // src/factories/periodic-wave-constructor.ts
  var DEFAULT_OPTIONS19 = {
    disableNormalization: false
  };
  var createPeriodicWaveConstructor = (createNativePeriodicWave2, getNativeContext2, periodicWaveStore, sanitizePeriodicWaveOptions2) => {
    return class PeriodicWave {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = sanitizePeriodicWaveOptions2({ ...DEFAULT_OPTIONS19, ...options });
        const periodicWave = createNativePeriodicWave2(nativeContext, mergedOptions);
        periodicWaveStore.add(periodicWave);
        return periodicWave;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === PeriodicWave.prototype || periodicWaveStore.has(instance);
      }
    };
  };

  // src/factories/render-inputs-of-audio-node.ts
  var createRenderInputsOfAudioNode = (getAudioNodeConnections2, getAudioNodeRenderer2, isPartOfACycle2) => {
    return async (audioNode, nativeOfflineAudioContext, nativeAudioNode) => {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      await Promise.all(
        audioNodeConnections.activeInputs.map(
          (connections, input) => Array.from(connections).map(async ([source, output]) => {
            const audioNodeRenderer = getAudioNodeRenderer2(source);
            const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
            const destination = audioNode.context.destination;
            if (!isPartOfACycle2(source) && (audioNode !== destination || !isPartOfACycle2(audioNode))) {
              renderedNativeAudioNode.connect(nativeAudioNode, output, input);
            }
          })
        ).reduce((allRenderingPromises, renderingPromises) => [...allRenderingPromises, ...renderingPromises], [])
      );
    };
  };

  // src/factories/render-inputs-of-audio-param.ts
  var createRenderInputsOfAudioParam = (getAudioNodeRenderer2, getAudioParamConnections2, isPartOfACycle2) => {
    return async (audioParam, nativeOfflineAudioContext, nativeAudioParam) => {
      const audioParamConnections = getAudioParamConnections2(audioParam);
      await Promise.all(
        Array.from(audioParamConnections.activeInputs).map(async ([source, output]) => {
          const audioNodeRenderer = getAudioNodeRenderer2(source);
          const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
          if (!isPartOfACycle2(source)) {
            renderedNativeAudioNode.connect(nativeAudioParam, output);
          }
        })
      );
    };
  };

  // src/factories/set-active-audio-worklet-node-inputs.ts
  var createSetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore2) => {
    return (nativeAudioWorkletNode, activeInputs) => {
      activeAudioWorkletNodeInputsStore2.set(nativeAudioWorkletNode, activeInputs);
    };
  };

  // src/factories/set-audio-node-tail-time.ts
  var createSetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode, tailTime) => audioNodeTailTimeStore2.set(audioNode, tailTime);
  };

  // src/factories/start-rendering.ts
  var createStartRendering = (audioBufferStore2, getAudioNodeRenderer2, getUnrenderedAudioWorkletNodes2) => {
    return (destination, nativeOfflineAudioContext) => getAudioNodeRenderer2(destination).render(destination, nativeOfflineAudioContext).then(
      () => Promise.all(
        Array.from(getUnrenderedAudioWorkletNodes2(nativeOfflineAudioContext)).map(
          (audioWorkletNode) => getAudioNodeRenderer2(audioWorkletNode).render(audioWorkletNode, nativeOfflineAudioContext)
        )
      )
    ).then(() => nativeOfflineAudioContext.startRendering()).then((audioBuffer) => {
      audioBufferStore2.add(audioBuffer);
      return audioBuffer;
    });
  };

  // src/factories/stereo-panner-node-constructor.ts
  var DEFAULT_OPTIONS20 = {
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    pan: 0
  };
  var createStereoPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeStereoPannerNode2, createStereoPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class StereoPannerNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS20, ...options };
        const nativeStereoPannerNode = createNativeStereoPannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const stereoPannerNodeRenderer = isOffline ? createStereoPannerNodeRenderer2() : null;
        super(context, false, nativeStereoPannerNode, stereoPannerNodeRenderer);
        this._pan = createAudioParam2(this, isOffline, nativeStereoPannerNode.pan);
      }
      get pan() {
        return this._pan;
      }
    };
  };

  // src/factories/stereo-panner-node-renderer-factory.ts
  var createStereoPannerNodeRendererFactory = (connectAudioParam2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeStereoPannerNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeStereoPannerNode = renderedNativeStereoPannerNodes.get(nativeOfflineAudioContext);
          if (renderedNativeStereoPannerNode !== void 0) {
            return renderedNativeStereoPannerNode;
          }
          const nativeStereoPannerNode = getNativeAudioNode2(proxy);
          renderedNativeStereoPannerNodes.set(nativeOfflineAudioContext, nativeStereoPannerNode);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeStereoPannerNode);
          return nativeStereoPannerNode;
        }
      };
    };
  };

  // src/factories/test-audio-buffer-constructor-support.ts
  var createTestAudioBufferConstructorSupport = (nativeAudioBufferConstructor2) => {
    return () => {
      if (nativeAudioBufferConstructor2 === null) {
        return false;
      }
      try {
        new nativeAudioBufferConstructor2({ length: 1, sampleRate: 44100 });
      } catch {
        return false;
      }
      return true;
    };
  };

  // src/factories/test-audio-buffer-copy-channel-methods-out-of-bounds-support.ts
  var createTestAudioBufferCopyChannelMethodsOutOfBoundsSupport = (nativeOfflineAudioContextConstructor2) => () => {
    if (nativeOfflineAudioContextConstructor2 === null) {
      return false;
    }
    const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
    const nativeAudioBuffer = nativeOfflineAudioContext.createBuffer(1, 1, 44100);
    const source = new Float32Array(2);
    try {
      nativeAudioBuffer.copyToChannel(source, 0, 3);
    } catch {
      return false;
    }
    return true;
  };

  // src/factories/test-audio-buffer-copy-channel-methods-subarray-support.ts
  var createTestAudioBufferCopyChannelMethodsSubarraySupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeAudioBuffer = nativeOfflineAudioContext.createBuffer(1, 1, 44100);
      const source = new Float32Array(2);
      try {
        nativeAudioBuffer.copyFromChannel(source, 0, 0);
      } catch {
        return false;
      }
      return true;
    };
  };

  // src/factories/test-audio-buffer-factory-method-support.ts
  var createTestAudioBufferFactoryMethodSupport = (nativeOfflineAudioContextConstructor2) => () => {
    if (nativeOfflineAudioContextConstructor2 === null) {
      return false;
    }
    const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
    try {
      offlineAudioContext.createBuffer(0, 10, 44100);
    } catch (err) {
      return err.code === 9;
    }
    return false;
  };

  // src/factories/test-audio-buffer-source-node-buffer-reassignment-support.ts
  var createTestAudioBufferSourceNodeBufferReassignmentSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeAudioBufferSourceNode = nativeOfflineAudioContext.createBufferSource();
      nativeAudioBufferSourceNode.buffer = nativeOfflineAudioContext.createBuffer(1, 1, 44100);
      try {
        nativeAudioBufferSourceNode.buffer = nativeOfflineAudioContext.createBuffer(1, 1, 44100);
      } catch (err) {
        return err.code === 11;
      }
      return false;
    };
  };

  // src/factories/test-audio-context-close-method-support.ts
  var createTestAudioContextCloseMethodSupport = (nativeAudioContextConstructor2) => {
    return () => {
      if (nativeAudioContextConstructor2 === null) {
        return false;
      }
      if (nativeAudioContextConstructor2.prototype !== void 0 && nativeAudioContextConstructor2.prototype.close !== void 0) {
        return true;
      }
      const audioContext = new nativeAudioContextConstructor2();
      const isAudioContextClosable = audioContext.close !== void 0;
      try {
        audioContext.close();
      } catch {
      }
      return isAudioContextClosable;
    };
  };

  // src/factories/test-audio-context-decode-audio-data-method-type-error-support.ts
  var createTestAudioContextDecodeAudioDataMethodTypeErrorSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return Promise.resolve(false);
      }
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      return new Promise((resolve) => {
        let isPending = true;
        const resolvePromise = (err) => {
          if (isPending) {
            isPending = false;
            offlineAudioContext.startRendering();
            resolve(err instanceof TypeError);
          }
        };
        const promise = offlineAudioContext.decodeAudioData(
          null,
          () => {
          },
          resolvePromise
        );
        if (promise !== void 0) {
          promise.catch(resolvePromise);
        }
      });
    };
  };

  // src/factories/test-audio-context-get-output-timestamp-support.ts
  var createTestAudioContextGetOutputTimestampSupport = (nativeAudioContextConstructor2) => {
    return () => {
      if (nativeAudioContextConstructor2 === null) {
        return Promise.resolve(false);
      }
      const audioContext = new nativeAudioContextConstructor2();
      if (audioContext.getOutputTimestamp === void 0) {
        audioContext.close();
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          const { contextTime } = audioContext.getOutputTimestamp();
          if (typeof contextTime === "number" && contextTime > 0) {
            const { currentTime, sampleRate } = audioContext;
            if (currentTime > 0) {
              clearInterval(interval);
              audioContext.close();
              resolve(Math.abs(contextTime * sampleRate - currentTime) > Math.abs(contextTime - currentTime));
            }
          }
        });
      });
    };
  };

  // src/factories/test-audio-context-options-support.ts
  var createTestAudioContextOptionsSupport = (nativeAudioContextConstructor2) => {
    return () => {
      if (nativeAudioContextConstructor2 === null) {
        return false;
      }
      let audioContext;
      try {
        audioContext = new nativeAudioContextConstructor2({ latencyHint: "balanced" });
      } catch {
        return false;
      }
      audioContext.close();
      return true;
    };
  };

  // src/factories/test-audio-context-resume-support.ts
  var createTestAudioContextResumeSupport = (nativeAudioContextConstructor2) => {
    return async () => {
      if (nativeAudioContextConstructor2 === null) {
        return false;
      }
      const audioContext = new nativeAudioContextConstructor2();
      try {
        await audioContext.close();
      } catch {
        return false;
      }
      try {
        await audioContext.resume();
      } catch (err) {
        return err.code === 11;
      }
      return false;
    };
  };

  // src/factories/test-audio-node-connect-method-chainability-support.ts
  var createTestAudioNodeConnectMethodChainabilitySupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeGainNode = nativeOfflineAudioContext.createGain();
      const isSupported2 = nativeGainNode.connect(nativeGainNode) === nativeGainNode;
      nativeGainNode.disconnect(nativeGainNode);
      return isSupported2;
    };
  };

  // src/factories/test-audio-node-connect-method-verification-support.ts
  var createTestAudioNodeConnectMethodVerificationSupport = (nativeOfflineAudioContextConstructor2) => () => {
    if (nativeOfflineAudioContextConstructor2 === null) {
      return false;
    }
    const offlineAudioContextA = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
    const offlineAudioContextB = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
    try {
      offlineAudioContextA.createGain().connect(offlineAudioContextB.createGain().gain);
    } catch (err) {
      return err.code === 15;
    }
    return false;
  };

  // src/factories/test-audio-param-value-setter-support.ts
  var createTestAudioParamValueSetterSupport = (nativeOfflineAudioContextConstructor2) => () => {
    if (nativeOfflineAudioContextConstructor2 === null) {
      return Promise.resolve(false);
    }
    const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 44100, 44100);
    const constantSourceNode = offlineAudioContext.createConstantSource();
    const gainNode = offlineAudioContext.createGain();
    gainNode.gain.setValueAtTime(-1, 0);
    gainNode.gain.linearRampToValueAtTime(1, 1);
    gainNode.gain.value = 100;
    constantSourceNode.connect(gainNode).connect(offlineAudioContext.destination);
    constantSourceNode.start();
    return offlineAudioContext.startRendering().then((renderedBuffer) => {
      const channelData = new Float32Array(0.5 * offlineAudioContext.sampleRate);
      renderedBuffer.copyFromChannel(channelData, 0);
      for (const sample of channelData) {
        if (sample > 1) {
          return true;
        }
      }
      return false;
    });
  };

  // src/factories/test-audio-worklet-add-module-method-support.ts
  var createTestAudioWorkletAddModuleMethodSupport = (nativeOfflineAudioContextConstructor2) => async () => {
    if (nativeOfflineAudioContextConstructor2 === null) {
      return false;
    }
    const blob = new Blob(["!"], { type: "application/javascript; charset=utf-8" });
    const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
    const url = URL.createObjectURL(blob);
    try {
      await offlineAudioContext.audioWorklet.addModule(url);
    } catch (err) {
      return err instanceof SyntaxError;
    } finally {
      URL.revokeObjectURL(url);
    }
    return false;
  };

  // src/factories/test-audio-worklet-node-constructor-support.ts
  var createTestAudioWorkletNodeConstructorSupport = (isSecureContext2, nativeAudioWorkletNodeConstructor2) => () => isSecureContext2 ? true : nativeAudioWorkletNodeConstructor2 !== null;

  // src/factories/test-audio-worklet-processor-no-inputs-support.ts
  var createTestAudioWorkletProcessorNoInputsSupport = (nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2) => {
    return async () => {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        return false;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const blob = new Blob(
        [
          'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i.length===1&&i[0].length===0)}}registerProcessor("a",A);'
        ],
        { type: "application/javascript; charset=utf-8" }
      );
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 128, 44100);
      const url = URL.createObjectURL(blob);
      let hasExpectedInputs = false;
      try {
        await offlineAudioContext.audioWorklet.addModule(url);
        const audioWorkletNode = new nativeAudioWorkletNodeConstructor2(offlineAudioContext, "a");
        audioWorkletNode.connect(offlineAudioContext.destination);
        hasExpectedInputs = await new Promise((resolve, reject) => {
          audioWorkletNode.port.onmessage = ({ data }) => {
            audioWorkletNode.port.onmessage = null;
            resolve(data);
          };
          offlineAudioContext.startRendering().catch(reject);
        });
      } catch {
      } finally {
        URL.revokeObjectURL(url);
      }
      return hasExpectedInputs;
    };
  };

  // src/factories/test-audio-worklet-processor-no-outputs-support.ts
  var createTestAudioWorkletProcessorNoOutputsSupport = (nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2) => {
    return async () => {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        return false;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const blob = new Blob(
        [
          'let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'
        ],
        {
          type: "application/javascript; charset=utf-8"
        }
      );
      const messageChannel = new MessageChannel();
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 128, 44100);
      const url = URL.createObjectURL(blob);
      let isCallingProcess = false;
      try {
        await offlineAudioContext.audioWorklet.addModule(url);
        const audioWorkletNode = new nativeAudioWorkletNodeConstructor2(offlineAudioContext, "a", { numberOfOutputs: 0 });
        const oscillator = offlineAudioContext.createOscillator();
        await new Promise((resolve) => {
          audioWorkletNode.port.onmessage = () => resolve();
          audioWorkletNode.port.postMessage(messageChannel.port2, [messageChannel.port2]);
        });
        audioWorkletNode.port.onmessage = () => isCallingProcess = true;
        oscillator.connect(audioWorkletNode);
        oscillator.start(0);
        await offlineAudioContext.startRendering();
        isCallingProcess = await new Promise((resolve) => {
          messageChannel.port1.onmessage = ({ data }) => resolve(data === 1);
          messageChannel.port1.postMessage(0);
        });
      } catch {
      } finally {
        messageChannel.port1.close();
        URL.revokeObjectURL(url);
      }
      return isCallingProcess;
    };
  };

  // src/factories/test-audio-worklet-processor-post-message-support.ts
  var createTestAudioWorkletProcessorPostMessageSupport = (nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2) => {
    return async () => {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        return false;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const blob = new Blob(
        ['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],
        {
          type: "application/javascript; charset=utf-8"
        }
      );
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 128, 44100);
      const url = URL.createObjectURL(blob);
      let isEmittingMessageEvents = false;
      let isEmittingProcessorErrorEvents = false;
      try {
        await offlineAudioContext.audioWorklet.addModule(url);
        const audioWorkletNode = new nativeAudioWorkletNodeConstructor2(offlineAudioContext, "a", { numberOfOutputs: 0 });
        const oscillator = offlineAudioContext.createOscillator();
        audioWorkletNode.port.onmessage = () => isEmittingMessageEvents = true;
        audioWorkletNode.onprocessorerror = () => isEmittingProcessorErrorEvents = true;
        oscillator.connect(audioWorkletNode);
        oscillator.start(0);
        await offlineAudioContext.startRendering();
        await new Promise((resolve) => setTimeout(resolve));
      } catch {
      } finally {
        URL.revokeObjectURL(url);
      }
      return isEmittingMessageEvents && !isEmittingProcessorErrorEvents;
    };
  };

  // src/factories/test-biquad-filter-node-get-frequency-response-method-support.ts
  var createTestBiquadFilterNodeGetFrequencyResponseMethodSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeBiquadFilterNode = nativeOfflineAudioContext.createBiquadFilter();
      try {
        nativeBiquadFilterNode.getFrequencyResponse(new Float32Array(), new Float32Array(1), new Float32Array(1));
      } catch (err) {
        return err.code === 15;
      }
      return false;
    };
  };

  // src/factories/test-channel-merger-node-channel-count-support.ts
  var createTestChannelMergerNodeChannelCountSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeChannelMergerNode = offlineAudioContext.createChannelMerger();
      try {
        nativeChannelMergerNode.channelCount = 2;
      } catch {
        return true;
      }
      return false;
    };
  };

  // src/factories/test-constant-source-node-accurate-scheduling-support.ts
  var createTestConstantSourceNodeAccurateSchedulingSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeConstantSourceNode = nativeOfflineAudioContext.createConstantSource();
      return nativeConstantSourceNode.offset.maxValue !== Number.POSITIVE_INFINITY;
    };
  };

  // src/factories/test-convolver-node-buffer-reassignability-support.ts
  var createTestConvolverNodeBufferReassignabilitySupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeConvolverNode = offlineAudioContext.createConvolver();
      nativeConvolverNode.buffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
      try {
        nativeConvolverNode.buffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
      } catch {
        return false;
      }
      return true;
    };
  };

  // src/factories/test-convolver-node-channel-count-support.ts
  var createTestConvolverNodeChannelCountSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeConvolverNode = offlineAudioContext.createConvolver();
      try {
        nativeConvolverNode.channelCount = 1;
      } catch {
        return false;
      }
      return true;
    };
  };

  // src/factories/test-is-secure-context-support.ts
  var createTestIsSecureContextSupport = (window3) => {
    return () => window3 !== null && window3.hasOwnProperty("isSecureContext");
  };

  // src/factories/test-media-stream-audio-source-node-media-stream-without-audio-track-support.ts
  var createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport = (nativeAudioContextConstructor2) => {
    return () => {
      if (nativeAudioContextConstructor2 === null) {
        return false;
      }
      const audioContext = new nativeAudioContextConstructor2();
      try {
        audioContext.createMediaStreamSource(new MediaStream());
        return false;
      } catch (err) {
        return true;
      } finally {
        audioContext.close();
      }
    };
  };

  // src/factories/test-periodic-wave-constructor-support.ts
  var createTestPeriodicWaveConstructorSupport = (nativeOfflineAudioContextConstructor2, nativePeriodicWaveConstructor) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      if (nativePeriodicWaveConstructor === null) {
        return false;
      }
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      try {
        new nativePeriodicWaveConstructor(offlineAudioContext, { imag: [1], real: [1] });
      } catch {
        return true;
      }
      return false;
    };
  };

  // src/factories/test-stereo-panner-node-default-value-support.ts
  var createTestStereoPannerNodeDefaultValueSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return Promise.resolve(false);
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const constantSourceNode = nativeOfflineAudioContext.createConstantSource();
      const stereoPanner = nativeOfflineAudioContext.createStereoPanner();
      constantSourceNode.channelCount = 1;
      constantSourceNode.offset.value = 1;
      stereoPanner.channelCount = 1;
      constantSourceNode.start();
      constantSourceNode.connect(stereoPanner).connect(nativeOfflineAudioContext.destination);
      return nativeOfflineAudioContext.startRendering().then((buffer) => buffer.getChannelData(0)[0] !== 1);
    };
  };

  // src/factories/wave-shaper-node-constructor.ts
  var DEFAULT_OPTIONS21 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    curve: null,
    oversample: "none"
  };
  var createWaveShaperNodeConstructor = (audioNodeConstructor2, createInvalidStateError2, createNativeWaveShaperNode2, createWaveShaperNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class WaveShaperNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS21, ...options };
        const nativeWaveShaperNode = createNativeWaveShaperNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const waveShaperNodeRenderer = isOffline ? createWaveShaperNodeRenderer2() : null;
        super(context, true, nativeWaveShaperNode, waveShaperNodeRenderer);
        this._nativeWaveShaperNode = nativeWaveShaperNode;
        setAudioNodeTailTime2(this, 1);
      }
      get curve() {
        return this._nativeWaveShaperNode.curve;
      }
      set curve(value) {
        if (value !== null && value.length < 2) {
          throw createInvalidStateError2();
        }
        this._nativeWaveShaperNode.curve = value;
      }
      get oversample() {
        return this._nativeWaveShaperNode.oversample;
      }
      set oversample(value) {
        this._nativeWaveShaperNode.oversample = value;
      }
    };
  };

  // src/factories/wave-shaper-node-renderer-factory.ts
  var createWaveShaperNodeRendererFactory = (getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeWaveShaperNodes = /* @__PURE__ */ new WeakMap();
      return {
        async render(proxy, nativeOfflineAudioContext) {
          const renderedNativeWaveShaperNode = renderedNativeWaveShaperNodes.get(nativeOfflineAudioContext);
          if (renderedNativeWaveShaperNode !== void 0) {
            return renderedNativeWaveShaperNode;
          }
          const nativeWaveShaperNode = getNativeAudioNode2(proxy);
          renderedNativeWaveShaperNodes.set(nativeOfflineAudioContext, nativeWaveShaperNode);
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);
          return nativeWaveShaperNode;
        }
      };
    };
  };

  // src/factories/window.ts
  var createWindow = () => typeof window === "undefined" ? null : window;

  // src/helpers/get-first-sample.ts
  var getFirstSample = (audioBuffer, buffer, channelNumber) => {
    audioBuffer.copyFromChannel(buffer, channelNumber);
    return buffer[0];
  };

  // src/helpers/is-dc-curve.ts
  var isDCCurve = (curve) => {
    if (curve === null) {
      return false;
    }
    const length = curve.length;
    if (length % 2 !== 0) {
      return curve[Math.floor(length / 2)] !== 0;
    }
    return curve[length / 2 - 1] + curve[length / 2] !== 0;
  };

  // src/helpers/overwrite-accessors.ts
  var overwriteAccessors = (object, property, createGetter, createSetter) => {
    let prototype = object;
    while (!prototype.hasOwnProperty(property)) {
      prototype = Object.getPrototypeOf(prototype);
    }
    const { get, set } = Object.getOwnPropertyDescriptor(prototype, property);
    Object.defineProperty(object, property, { get: createGetter(get), set: createSetter(set) });
  };

  // src/helpers/sanitize-channel-splitter-options.ts
  var sanitizeChannelSplitterOptions = (options) => {
    return { ...options, channelCount: options.numberOfOutputs };
  };

  // src/helpers/sanitize-periodic-wave-options.ts
  var sanitizePeriodicWaveOptions = (options) => {
    const { imag, real } = options;
    if (imag === void 0) {
      if (real === void 0) {
        return { ...options, imag: [0, 0], real: [0, 0] };
      }
      return { ...options, imag: Array.from(real, () => 0), real };
    }
    if (real === void 0) {
      return { ...options, imag, real: Array.from(imag, () => 0) };
    }
    return { ...options, imag, real };
  };

  // src/helpers/test-audio-scheduled-source-node-stop-method-negative-parameters-support.ts
  var testAudioScheduledSourceNodeStopMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
      nativeAudioBufferSourceNode.stop(-1);
    } catch (err) {
      return err instanceof RangeError;
    }
    return false;
  };

  // src/helpers/test-audio-worklet-node-options-clonability.ts
  var testAudioWorkletNodeOptionsClonability = (audioWorkletNodeOptions) => {
    const { port1, port2 } = new MessageChannel();
    try {
      port1.postMessage(audioWorkletNodeOptions);
    } finally {
      port1.close();
      port2.close();
    }
  };

  // src/helpers/test-dom-exception-constructor-support.ts
  var testDomExceptionConstructorSupport = () => {
    try {
      new DOMException();
    } catch {
      return false;
    }
    return true;
  };

  // src/helpers/test-error-event-error-property-support.ts
  var testErrorEventErrorPropertySupport = () => {
    const errorEvent = new ErrorEvent("error");
    return errorEvent.error === void 0;
  };

  // src/helpers/test-transferables-support.ts
  var testTransferablesSupport = () => new Promise((resolve) => {
    const arrayBuffer = new ArrayBuffer(0);
    const { port1, port2 } = new MessageChannel();
    port1.onmessage = ({ data }) => {
      port1.onmessage = null;
      port1.close();
      port2.close();
      resolve(data !== null);
    };
    port2.postMessage(arrayBuffer, [arrayBuffer]);
  });

  // src/helpers/wrap-event-listener.ts
  var wrapEventListener = (target, eventListener) => {
    return (event) => {
      const descriptor = { value: target };
      Object.defineProperties(event, {
        currentTarget: descriptor,
        target: descriptor
      });
      if (typeof eventListener === "function") {
        return eventListener.call(target, event);
      }
      return eventListener.handleEvent.call(target, event);
    };
  };

  // src/module.ts
  var addActiveInputConnectionToAudioNode = createAddActiveInputConnectionToAudioNode(insertElementInSet);
  var addPassiveInputConnectionToAudioNode = createAddPassiveInputConnectionToAudioNode(insertElementInSet);
  var deleteActiveInputConnectionToAudioNode = createDeleteActiveInputConnectionToAudioNode(pickElementFromSet);
  var audioNodeTailTimeStore = /* @__PURE__ */ new WeakMap();
  var getAudioNodeTailTime = createGetAudioNodeTailTime(audioNodeTailTimeStore);
  var cacheTestResult = createCacheTestResult(/* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakMap());
  var window2 = createWindow();
  var createNativeAnalyserNode = createNativeAnalyserNodeFactory(createIndexSizeError);
  var getAudioNodeRenderer = createGetAudioNodeRenderer(getAudioNodeConnections);
  var renderInputsOfAudioNode = createRenderInputsOfAudioNode(getAudioNodeConnections, getAudioNodeRenderer, isPartOfACycle);
  var createAnalyserNodeRenderer = createAnalyserNodeRendererFactory(getNativeAudioNode, renderInputsOfAudioNode);
  var getNativeContext = createGetNativeContext(CONTEXT_STORE);
  var nativeOfflineAudioContextConstructor = createNativeOfflineAudioContextConstructor(window2);
  var isNativeOfflineAudioContext = createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
  var audioParamAudioNodeStore = /* @__PURE__ */ new WeakMap();
  var eventTargetConstructor = createEventTargetConstructor(wrapEventListener);
  var nativeAudioContextConstructor = createNativeAudioContextConstructor(window2);
  var isNativeAudioContext = createIsNativeAudioContext(nativeAudioContextConstructor);
  var isNativeAudioNode = createIsNativeAudioNode(window2);
  var isNativeAudioParam = createIsNativeAudioParam(window2);
  var nativeAudioWorkletNodeConstructor = createNativeAudioWorkletNodeConstructor(window2);
  var audioNodeConstructor = createAudioNodeConstructor(
    createAddAudioNodeConnections(AUDIO_NODE_CONNECTIONS_STORE),
    createAddConnectionToAudioNode(
      addActiveInputConnectionToAudioNode,
      addPassiveInputConnectionToAudioNode,
      connectNativeAudioNodeToNativeAudioNode,
      deleteActiveInputConnectionToAudioNode,
      disconnectNativeAudioNodeFromNativeAudioNode,
      getAudioNodeConnections,
      getAudioNodeTailTime,
      getEventListenersOfAudioNode,
      getNativeAudioNode,
      insertElementInSet,
      isActiveAudioNode,
      isPartOfACycle,
      isPassiveAudioNode
    ),
    createIncrementCycleCounterFactory(
      CYCLE_COUNTERS,
      disconnectNativeAudioNodeFromNativeAudioNode,
      getAudioNodeConnections,
      getNativeAudioNode,
      getNativeAudioParam,
      isActiveAudioNode
    ),
    createIndexSizeError,
    createInvalidAccessError,
    createDecrementCycleCounter(
      connectNativeAudioNodeToNativeAudioNode,
      CYCLE_COUNTERS,
      getAudioNodeConnections,
      getNativeAudioNode,
      getNativeAudioParam,
      getNativeContext,
      isActiveAudioNode,
      isNativeOfflineAudioContext
    ),
    createDetectCycles(audioParamAudioNodeStore, getAudioNodeConnections, getValueForKey),
    eventTargetConstructor,
    getNativeContext,
    isNativeAudioNode,
    isNativeAudioParam,
    isNativeOfflineAudioContext
  );
  var analyserNodeConstructor = createAnalyserNodeConstructor(
    audioNodeConstructor,
    createAnalyserNodeRenderer,
    createNativeAnalyserNode,
    getNativeContext,
    isNativeOfflineAudioContext
  );
  var audioBufferStore = /* @__PURE__ */ new WeakSet();
  var nativeAudioBufferConstructor = createNativeAudioBufferConstructor(window2);
  var audioBufferConstructor = createAudioBufferConstructor(audioBufferStore, nativeAudioBufferConstructor);
  var addSilentConnection = createAddSilentConnection(createNativeGainNode);
  var renderInputsOfAudioParam = createRenderInputsOfAudioParam(getAudioNodeRenderer, getAudioParamConnections, isPartOfACycle);
  var connectAudioParam = createConnectAudioParam(renderInputsOfAudioParam);
  var createNativeAudioBufferSourceNode = createNativeAudioBufferSourceNodeFactory(
    addSilentConnection,
    cacheTestResult,
    testAudioScheduledSourceNodeStopMethodNegativeParametersSupport
  );
  var createAudioBufferSourceNodeRenderer = createAudioBufferSourceNodeRendererFactory(
    connectAudioParam,
    getNativeAudioNode,
    renderInputsOfAudioNode
  );
  var createAudioParam = createAudioParamFactory(
    createAddAudioParamConnections(AUDIO_PARAM_CONNECTIONS_STORE),
    audioParamAudioNodeStore,
    AUDIO_PARAM_STORE,
    import_automation_events2.createCancelAndHoldAutomationEvent,
    import_automation_events2.createCancelScheduledValuesAutomationEvent,
    import_automation_events2.createExponentialRampToValueAutomationEvent,
    import_automation_events2.createLinearRampToValueAutomationEvent,
    import_automation_events2.createSetTargetAutomationEvent,
    import_automation_events2.createSetValueAutomationEvent,
    import_automation_events2.createSetValueCurveAutomationEvent
  );
  var audioBufferSourceNodeConstructor = createAudioBufferSourceNodeConstructor(
    audioNodeConstructor,
    createAudioBufferSourceNodeRenderer,
    createAudioParam,
    createNativeAudioBufferSourceNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    wrapEventListener
  );
  var audioDestinationNodeConstructor = createAudioDestinationNodeConstructor(
    audioNodeConstructor,
    createAudioDestinationNodeRenderer,
    createInvalidStateError,
    createNativeAudioDestinationNodeFactory(createNativeGainNode, overwriteAccessors),
    getNativeContext,
    isNativeOfflineAudioContext,
    renderInputsOfAudioNode
  );
  var createBiquadFilterNodeRenderer = createBiquadFilterNodeRendererFactory(
    connectAudioParam,
    getNativeAudioNode,
    renderInputsOfAudioNode
  );
  var setAudioNodeTailTime = createSetAudioNodeTailTime(audioNodeTailTimeStore);
  var biquadFilterNodeConstructor = createBiquadFilterNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createBiquadFilterNodeRenderer,
    createNativeBiquadFilterNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
  );
  var monitorConnections = createMonitorConnections(insertElementInSet, isNativeAudioNode);
  var createChannelMergerNodeRenderer = createChannelMergerNodeRendererFactory(getNativeAudioNode, renderInputsOfAudioNode);
  var channelMergerNodeConstructor = createChannelMergerNodeConstructor(
    audioNodeConstructor,
    createChannelMergerNodeRenderer,
    createNativeChannelMergerNode,
    getNativeContext,
    isNativeOfflineAudioContext
  );
  var createChannelSplitterNodeRenderer = createChannelSplitterNodeRendererFactory(getNativeAudioNode, renderInputsOfAudioNode);
  var channelSplitterNodeConstructor = createChannelSplitterNodeConstructor(
    audioNodeConstructor,
    createChannelSplitterNodeRenderer,
    createNativeChannelSplitterNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    sanitizeChannelSplitterOptions
  );
  var createNativeConstantSourceNode = createNativeConstantSourceNodeFactory(
    addSilentConnection,
    cacheTestResult,
    testAudioScheduledSourceNodeStopMethodNegativeParametersSupport
  );
  var createConstantSourceNodeRenderer = createConstantSourceNodeRendererFactory(
    connectAudioParam,
    getNativeAudioNode,
    renderInputsOfAudioNode
  );
  var constantSourceNodeConstructor = createConstantSourceNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createConstantSourceNodeRenderer,
    createNativeConstantSourceNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    wrapEventListener
  );
  var createConvolverNodeRenderer = createConvolverNodeRendererFactory(getNativeAudioNode, renderInputsOfAudioNode);
  var convolverNodeConstructor = createConvolverNodeConstructor(
    audioNodeConstructor,
    createConvolverNodeRenderer,
    createNativeConvolverNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
  );
  var createDelayNodeRenderer = createDelayNodeRendererFactory(connectAudioParam, getNativeAudioNode, renderInputsOfAudioNode);
  var delayNodeConstructor = createDelayNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createDelayNodeRenderer,
    createNativeDelayNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
  );
  var createDynamicsCompressorNodeRenderer = createDynamicsCompressorNodeRendererFactory(
    connectAudioParam,
    getNativeAudioNode,
    renderInputsOfAudioNode
  );
  var dynamicsCompressorNodeConstructor = createDynamicsCompressorNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createDynamicsCompressorNodeRenderer,
    createNativeDynamicsCompressorNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
  );
  var createGainNodeRenderer = createGainNodeRendererFactory(connectAudioParam, getNativeAudioNode, renderInputsOfAudioNode);
  var gainNodeConstructor = createGainNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createGainNodeRenderer,
    createNativeGainNode,
    getNativeContext,
    isNativeOfflineAudioContext
  );
  var createIIRFilterNodeRenderer = createIIRFilterNodeRendererFactory(getNativeAudioNode, renderInputsOfAudioNode);
  var iIRFilterNodeConstructor = createIIRFilterNodeConstructor(
    audioNodeConstructor,
    createNativeIIRFilterNode,
    createIIRFilterNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
  );
  var createAudioListener = createAudioListenerFactory(
    createAudioParam,
    createNativeChannelMergerNode,
    createNativeConstantSourceNode,
    createNativeScriptProcessorNode,
    createNotSupportedError,
    getFirstSample,
    isNativeOfflineAudioContext,
    overwriteAccessors
  );
  var unrenderedAudioWorkletNodeStore = /* @__PURE__ */ new WeakMap();
  var minimalBaseAudioContextConstructor = createMinimalBaseAudioContextConstructor(
    audioDestinationNodeConstructor,
    createAudioListener,
    eventTargetConstructor,
    isNativeOfflineAudioContext,
    unrenderedAudioWorkletNodeStore,
    wrapEventListener
  );
  var createNativeOscillatorNode = createNativeOscillatorNodeFactory(
    addSilentConnection,
    cacheTestResult,
    testAudioScheduledSourceNodeStopMethodNegativeParametersSupport
  );
  var createOscillatorNodeRenderer = createOscillatorNodeRendererFactory(connectAudioParam, getNativeAudioNode, renderInputsOfAudioNode);
  var oscillatorNodeConstructor = createOscillatorNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createNativeOscillatorNode,
    createOscillatorNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    wrapEventListener
  );
  var createConnectedNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNodeFactory(createNativeAudioBufferSourceNode);
  var createNativeWaveShaperNode = createNativeWaveShaperNodeFactory(
    createConnectedNativeAudioBufferSourceNode,
    createInvalidStateError,
    isDCCurve,
    monitorConnections,
    overwriteAccessors
  );
  var createPannerNodeRenderer = createPannerNodeRendererFactory(connectAudioParam, getNativeAudioNode, renderInputsOfAudioNode);
  var pannerNodeConstructor = createPannerNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createNativePannerNode,
    createPannerNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
  );
  var periodicWaveConstructor = createPeriodicWaveConstructor(
    createNativePeriodicWave,
    getNativeContext,
    /* @__PURE__ */ new WeakSet(),
    sanitizePeriodicWaveOptions
  );
  var createStereoPannerNodeRenderer = createStereoPannerNodeRendererFactory(
    connectAudioParam,
    getNativeAudioNode,
    renderInputsOfAudioNode
  );
  var stereoPannerNodeConstructor = createStereoPannerNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createNativeStereoPannerNode,
    createStereoPannerNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext
  );
  var createWaveShaperNodeRenderer = createWaveShaperNodeRendererFactory(getNativeAudioNode, renderInputsOfAudioNode);
  var waveShaperNodeConstructor = createWaveShaperNodeConstructor(
    audioNodeConstructor,
    createInvalidStateError,
    createNativeWaveShaperNode,
    createWaveShaperNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
  );
  var isSecureContext = createIsSecureContext(window2);
  var backupOfflineAudioContextStore = /* @__PURE__ */ new WeakMap();
  var getOrCreateBackupOfflineAudioContext = createGetOrCreateBackupOfflineAudioContext(
    backupOfflineAudioContextStore,
    nativeOfflineAudioContextConstructor
  );
  var addAudioWorkletModule = isSecureContext ? createAddAudioWorkletModule(
    cacheTestResult,
    createFetchSource(createAbortError),
    getNativeContext,
    getOrCreateBackupOfflineAudioContext,
    isNativeOfflineAudioContext,
    /* @__PURE__ */ new WeakMap(),
    /* @__PURE__ */ new WeakMap(),
    createTestAudioWorkletProcessorPostMessageSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor)
  ) : void 0;
  var isNativeContext = createIsNativeContext(isNativeAudioContext, isNativeOfflineAudioContext);
  var decodeAudioData = createDecodeAudioData(audioBufferStore, createDataCloneError, /* @__PURE__ */ new WeakSet(), getNativeContext, isNativeContext);
  var baseAudioContextConstructor = createBaseAudioContextConstructor(
    addAudioWorkletModule,
    analyserNodeConstructor,
    audioBufferConstructor,
    audioBufferSourceNodeConstructor,
    biquadFilterNodeConstructor,
    channelMergerNodeConstructor,
    channelSplitterNodeConstructor,
    constantSourceNodeConstructor,
    convolverNodeConstructor,
    decodeAudioData,
    delayNodeConstructor,
    dynamicsCompressorNodeConstructor,
    gainNodeConstructor,
    iIRFilterNodeConstructor,
    minimalBaseAudioContextConstructor,
    oscillatorNodeConstructor,
    pannerNodeConstructor,
    periodicWaveConstructor,
    stereoPannerNodeConstructor,
    waveShaperNodeConstructor
  );
  var mediaElementAudioSourceNodeConstructor = createMediaElementAudioSourceNodeConstructor(
    audioNodeConstructor,
    createNativeMediaElementAudioSourceNode,
    getNativeContext
  );
  var mediaStreamAudioDestinationNodeConstructor = createMediaStreamAudioDestinationNodeConstructor(
    audioNodeConstructor,
    createNativeMediaStreamAudioDestinationNode,
    getNativeContext,
    isNativeOfflineAudioContext
  );
  var mediaStreamAudioSourceNodeConstructor = createMediaStreamAudioSourceNodeConstructor(
    audioNodeConstructor,
    createNativeMediaStreamAudioSourceNode,
    getNativeContext
  );
  var createNativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNodeFactory(createInvalidStateError);
  var mediaStreamTrackAudioSourceNodeConstructor = createMediaStreamTrackAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamTrackAudioSourceNode, getNativeContext);
  var audioContextConstructor = createAudioContextConstructor(
    baseAudioContextConstructor,
    createInvalidStateError,
    mediaElementAudioSourceNodeConstructor,
    mediaStreamAudioDestinationNodeConstructor,
    mediaStreamAudioSourceNodeConstructor,
    mediaStreamTrackAudioSourceNodeConstructor,
    nativeAudioContextConstructor
  );
  var getUnrenderedAudioWorkletNodes = createGetUnrenderedAudioWorkletNodes(unrenderedAudioWorkletNodeStore);
  var addUnrenderedAudioWorkletNode = createAddUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var deleteUnrenderedAudioWorkletNode = createDeleteUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var activeAudioWorkletNodeInputsStore = /* @__PURE__ */ new WeakMap();
  var createNativeAudioWorkletNode = createNativeAudioWorkletNodeFactory(createNotSupportedError);
  var createAudioWorkletNodeRenderer = createAudioWorkletNodeRendererFactory(
    connectAudioParam,
    deleteUnrenderedAudioWorkletNode,
    getNativeAudioNode,
    nativeAudioWorkletNodeConstructor,
    renderInputsOfAudioNode
  );
  var getBackupOfflineAudioContext = createGetBackupOfflineAudioContext(backupOfflineAudioContextStore);
  var setActiveAudioWorkletNodeInputs = createSetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore);
  var audioWorkletNodeConstructor = isSecureContext ? createAudioWorkletNodeConstructor(
    addUnrenderedAudioWorkletNode,
    audioNodeConstructor,
    createAudioParam,
    createAudioWorkletNodeRenderer,
    createNativeAudioWorkletNode,
    getAudioNodeConnections,
    getBackupOfflineAudioContext,
    getNativeContext,
    isNativeOfflineAudioContext,
    nativeAudioWorkletNodeConstructor,
    setActiveAudioWorkletNodeInputs,
    testAudioWorkletNodeOptionsClonability,
    wrapEventListener
  ) : void 0;
  var minimalAudioContextConstructor = createMinimalAudioContextConstructor(
    createInvalidStateError,
    minimalBaseAudioContextConstructor,
    nativeAudioContextConstructor
  );
  var createNativeOfflineAudioContext = createCreateNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
  var startRendering = createStartRendering(audioBufferStore, getAudioNodeRenderer, getUnrenderedAudioWorkletNodes);
  var minimalOfflineAudioContextConstructor = createMinimalOfflineAudioContextConstructor(
    createInvalidStateError,
    createNativeOfflineAudioContext,
    minimalBaseAudioContextConstructor,
    startRendering
  );
  var offlineAudioContextConstructor = createOfflineAudioContextConstructor(
    baseAudioContextConstructor,
    createInvalidStateError,
    createNativeOfflineAudioContext,
    startRendering
  );
  var isAnyAudioContext = createIsAnyAudioContext(CONTEXT_STORE, isNativeAudioContext);
  var isAnyAudioNode = createIsAnyAudioNode(AUDIO_NODE_STORE, isNativeAudioNode);
  var isAnyAudioParam = createIsAnyAudioParam(AUDIO_PARAM_STORE, isNativeAudioParam);
  var isAnyOfflineAudioContext = createIsAnyOfflineAudioContext(CONTEXT_STORE, isNativeOfflineAudioContext);
  var isSupported = () => createIsSupportedPromise(
    cacheTestResult,
    createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor),
    createTestAudioBufferCopyChannelMethodsOutOfBoundsSupport(nativeOfflineAudioContextConstructor),
    createTestAudioBufferCopyChannelMethodsSubarraySupport(nativeOfflineAudioContextConstructor),
    createTestAudioBufferFactoryMethodSupport(nativeOfflineAudioContextConstructor),
    createTestAudioBufferSourceNodeBufferReassignmentSupport(nativeOfflineAudioContextConstructor),
    createTestAudioContextCloseMethodSupport(nativeAudioContextConstructor),
    createTestAudioContextDecodeAudioDataMethodTypeErrorSupport(nativeOfflineAudioContextConstructor),
    createTestAudioContextGetOutputTimestampSupport(nativeAudioContextConstructor),
    createTestAudioContextOptionsSupport(nativeAudioContextConstructor),
    createTestAudioContextResumeSupport(nativeAudioContextConstructor),
    createTestAudioNodeConnectMethodChainabilitySupport(nativeOfflineAudioContextConstructor),
    createTestAudioNodeConnectMethodVerificationSupport(nativeOfflineAudioContextConstructor),
    createTestAudioParamValueSetterSupport(nativeOfflineAudioContextConstructor),
    createTestAudioWorkletAddModuleMethodSupport(nativeOfflineAudioContextConstructor),
    createTestAudioWorkletNodeConstructorSupport(isSecureContext, nativeAudioWorkletNodeConstructor),
    createTestAudioWorkletProcessorNoInputsSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor),
    createTestAudioWorkletProcessorNoOutputsSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor),
    createTestBiquadFilterNodeGetFrequencyResponseMethodSupport(nativeOfflineAudioContextConstructor),
    createTestChannelMergerNodeChannelCountSupport(nativeOfflineAudioContextConstructor),
    createTestConstantSourceNodeAccurateSchedulingSupport(nativeOfflineAudioContextConstructor),
    createTestConvolverNodeBufferReassignabilitySupport(nativeOfflineAudioContextConstructor),
    createTestConvolverNodeChannelCountSupport(nativeOfflineAudioContextConstructor),
    testDomExceptionConstructorSupport,
    testErrorEventErrorPropertySupport,
    createTestIsSecureContextSupport(window2),
    createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport(nativeAudioContextConstructor),
    createTestPeriodicWaveConstructorSupport(nativeOfflineAudioContextConstructor, createNativePeriodicWaveConstructor(window2)),
    createTestStereoPannerNodeDefaultValueSupport(nativeOfflineAudioContextConstructor),
    testTransferablesSupport
  );
  return __toCommonJS(module_exports);
})();

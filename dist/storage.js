(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.storage = factory());
}(this, (function () { 'use strict';

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // simple localstorage kit use native or fallback to memorystorage
  var TEST_KEY = "__test__";
  // memory storage

  var memoryStorage = function () {
    function memoryStorage() {
      _classCallCheck(this, memoryStorage);

      this._data = {};
    }

    _createClass(memoryStorage, [{
      key: "getItem",
      value: function getItem(key) {
        return this._data.hasOwnProperty(key) ? this._data[key] : undefined;
      }
    }, {
      key: "setItem",
      value: function setItem(key, value) {
        return this._data[key] = String(value);
      }
    }, {
      key: "removeItem",
      value: function removeItem(key) {
        return delete this._data[key];
      }
    }, {
      key: "key",
      value: function key(index) {
        return Object.keys(this._data)[index] || null;
      }
    }, {
      key: "clear",
      value: function clear() {
        return this._data = {};
      }
    }]);

    return memoryStorage;
  }();

  var ls = function () {
    try {
      window.localStorage.setItem(TEST_KEY, "1");
      window.localStorage.removeItem(TEST_KEY);
      return window.localStorage;
    } catch (error) {}
    return new memoryStorage();
  }();

  return ls;

})));

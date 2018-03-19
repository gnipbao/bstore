(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.storage = factory());
}(this, (function () { 'use strict';

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var TEST_KEY = "__test__";
  // has native localStorage
  var hasLocalStorage = function hasLocalStorage() {
    try {
      window.localStorage.setItem(TEST_KEY, "1");
      window.localStorage.removeItem(TEST_KEY);
      return true;
    } catch (error) {
      return false;
    }
  };

  var stringify = function stringify(str) {
    var ret = "";
    try {
      ret = typeof str !== "string" ? JSON.stringify(str) : str;
    } catch (error) {}
    return ret;
  };

  var jsonParse = function jsonParse(val) {
    if (typeof val !== "string") return undefined;
    try {
      return JSON.parse(val);
    } catch (e) {
      return val || undefined;
    }
  };

  var Storage = function () {
    function Storage() {
      _classCallCheck(this, Storage);

      this._data = {};
      this.hasLS = hasLocalStorage();
      // use native localStorage
      if (this.hasLS) this.storage = window.localStorage;
    }

    _createClass(Storage, [{
      key: "get",
      value: function get(key) {
        if (this.hasLS) return jsonParse(this.storage.getItem(key));

        return this._data.hasOwnProperty(key) ? jsonParse(this._data[key]) : undefined;
      }
    }, {
      key: "set",
      value: function set(key, value) {
        if (this.hasLS) return this.storage.setItem(key, stringify(value));

        return this._data[key] = String(value);
      }
    }, {
      key: "remove",
      value: function remove(key) {
        if (this.hasLS) return this.storage.removeItem(key);
        return delete this._data[key];
      }
    }, {
      key: "key",
      value: function key(index) {
        if (this.hasLS) return this.storage.key(index);
        return Object.keys(this._data)[index] || null;
      }
    }, {
      key: "has",
      value: function has(key) {
        return this.get(key) !== undefined;
      }
    }, {
      key: "clear",
      value: function clear() {
        if (this.hasLS) return this.storage.clear();
        return this._data = {};
      }
    }, {
      key: "forEach",
      value: function forEach(cb) {
        if (!this.hasLS) {
          this.storage = this._data;
        }
        for (var i = 0; i < this.storage.length; i++) {
          var key = this.key(i);
          cb(key, this.get(key));
        }
      }
    }, {
      key: "getAll",
      value: function getAll() {
        var ret = {};
        this.forEach(function (key, val) {
          ret[key] = val;
        });
        return ret;
      }
    }]);

    return Storage;
  }();

  var storage = new Storage();

  return storage;

})));

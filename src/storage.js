// simple localstorage kit use native or fallback to memorystorage
const TEST_KEY = "__test__";
// memory storage
class memoryStorage {
  constructor() {
    this._data = {};
  }

  getItem(key) {
    return this._data.hasOwnProperty(key) ? this._data[key] : undefined;
  }

  setItem(key, value) {
    return (this._data[key] = String(value));
  }

  removeItem(key) {
    return delete this._data[key];
  }

  key(index) {
    return Object.keys(this._data)[index] || null;
  }

  clear() {
    return (this._data = {});
  }
}

let ls = (() => {
  try {
    window.localStorage.setItem(TEST_KEY, "1");
    window.localStorage.removeItem(TEST_KEY);
    return window.localStorage;
  } catch (error) {}
  return new memoryStorage();
})();

export default ls;

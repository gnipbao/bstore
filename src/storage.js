const TEST_KEY = "__test__";
// has native localStorage
let hasLocalStorage = () => {
  try {
    window.localStorage.setItem(TEST_KEY, "1");
    window.localStorage.removeItem(TEST_KEY);
    return true;
  } catch (error) {
    return false;
  }
};

let stringify = str => {
  let ret = "";
  try {
    ret = typeof str !== "string" ? JSON.stringify(str) : str;
  } catch (error) {}
  return ret;
};

let jsonParse = val => {
  if (typeof val !== "string") return undefined;
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
};

class Storage {
  constructor() {
    this._data = {};
    this.hasLS = hasLocalStorage();
    // use native localStorage
    if (this.hasLS) this.storage = window.localStorage;
  }

  get(key) {
    if (this.hasLS) return jsonParse(this.storage.getItem(key));

    return this._data.hasOwnProperty(key)
      ? jsonParse(this._data[key])
      : undefined;
  }

  set(key, value) {
    if (this.hasLS) return this.storage.setItem(key, stringify(value));

    return (this._data[key] = String(value));
  }

  remove(key) {
    if (this.hasLS) return this.storage.removeItem(key);
    return delete this._data[key];
  }

  key(index) {
    if (this.hasLS) return this.storage.key(index);
    return Object.keys(this._data)[index] || null;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  clear() {
    if (this.hasLS) return this.storage.clear();
    return (this._data = {});
  }

  forEach(cb) {
    if (!this.hasLS) {
      this.storage = this._data;
    }
    for (let i = 0; i < this.storage.length; i++) {
      let key = this.key(i);
      cb(key, this.get(key));
    }
  }

  getAll() {
    let ret = {};
    this.forEach((key, val) => {
      ret[key] = val;
    });
    return ret;
  }
}

export default new Storage();

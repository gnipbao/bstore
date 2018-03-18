# bstore
> a simple localstorage with memory fallback for browser.

[![Build Status](https://travis-ci.org/gnipbao/bstore.svg?branch=master)](https://travis-ci.org/gnipbao/bstore)
[![GitHub license](https://img.shields.io/github/license/gnipbao/bstore.svg)](https://github.com/gnipbao/bstore/blob/master/LICENSE)


## Install
```js
$ npm install --save bstore
```
## Usage
```js
import ls from bstore;
ls.setItem('key','value');
ls.getItem('key'); // value
ls.removeItem('key');
```
## API

### localstorage
firstly use native LocalStorage see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)

### memory storage

+ **setItem(key, value)**

  set storage with key and value.
+ **getItem(key)**

  get storage with key, return undefined if not find.
+ **removeItem(key)**

  remove storage with key.
+ **key(index)**  

  use `Object.keys()` get key by index.
+ **clear()**

  clear all storage
  




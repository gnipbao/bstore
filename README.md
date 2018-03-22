# bstore
> A simple localStorage with memory storage fallback in browser.

[![Build Status](https://travis-ci.org/gnipbao/bstore.svg?branch=master)](https://travis-ci.org/gnipbao/bstore)
[![GitHub license](https://img.shields.io/github/license/gnipbao/bstore.svg)](https://github.com/gnipbao/bstore/blob/master/LICENSE)
[![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg)](https://github.com/gnipbao/bstore)



## Install
```js
$ npm install --save bstore
```
## Usage
```js
// import
import ls from bstore;

ls.set('key','value');
ls.get('key'); // value

ls.remove('key');

// require
const ls = require('bstore')

ls.set('key','value');
ls.get('key'); // value

ls.remove('key');
```

## API

### set(key, value)
set storage with key and value
### get(key)
get storage with key, return undefined if not find.
### remove(key)
remove storage with key.
### key(index) 
get key by index.
### has(key)
if has key return true else false.
### clear()
clear all storage
### forEach(cb) 
forEach the storages and call the cb function with each storage
### getAll()
get all the storages.




# bstore
a simple localstorage with memory fallback use es6 for browser.

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
+ localstorage

use native LocalStorage see https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

+ memory storage


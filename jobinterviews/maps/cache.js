'use strict';

let _cache = new Map();

class Cache {
  constructor(name) {
    this.name = name;
    console.log(this);
  }

  set(options) {
    console.log('set');
    this.cache = options || {};

    _cache.set(this.name, this.cache);
    console.log(_cache.get(this.name));
    console.log(_cache.values());
    console.log(_cache.has(this.name));
  }

  get() {
    return _cache.get(this.name);
  }
}

module.exports = Cache;

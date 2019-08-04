'use strict';

const moduleA = require('./moduleA');
require('./moduleB');

moduleA.publishEvent();
moduleA.publishEvent();
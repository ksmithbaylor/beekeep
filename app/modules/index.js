'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./layout')
], function(x) { return x.name; });

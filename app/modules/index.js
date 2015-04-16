'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./sandbox'),
    require('./scanner'),
    require('./overview'),
    require('./navigation'),
    require('./db')
], function(x) { return x.name; });

'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./home'),
    require('./scanner'),
    require('./overview'),
    require('./navigation'),
    require('./db')
], function(x) { return x.name; });

'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./header'),
    require('./home'),
    require('./scanner')
], function(x) { return x.name; });

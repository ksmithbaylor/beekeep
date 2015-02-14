'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./home'),
    require('./scanner'),
    require('./overview'),
    require('./sidemenu')
], function(x) { return x.name; });

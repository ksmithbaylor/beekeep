'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./views/sandbox'),
    require('./views/overview'),
    require('./views/navigation'),
    require('./common/scanner'),
    require('./common/db')
], function(x) { return x.name; });

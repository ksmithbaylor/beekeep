'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./views/navigation'),
    require('./views/overview'),
    require('./views/build'),
    require('./views/sandbox'),
    require('./common/scanner'),
    require('./common/db')
], function(x) { return x.name; });

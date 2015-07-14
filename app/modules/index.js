'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./views/navigation'),

    require('./views/yards'),
    require('./views/activity'),
    require('./views/sandbox'),

    require('./common/scanner'),
    require('./common/db')
], function(x) { return x.name; });

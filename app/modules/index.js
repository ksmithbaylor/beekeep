'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./views/navigation'),

    require('./views/home'),
    require('./views/browse'),
    require('./views/activity'),
    require('./views/todo'),
    require('./views/sandbox'),

    require('./common/scanner'),
    require('./common/db')
], function(x) { return x.name; });

'use strict';

var _ = require('lodash');

module.exports = _.map([
    require('./views/navigation'),

    require('./views/yards'),
    require('./views/hives'),
    require('./views/actions'),
    require('./views/sandbox'),

    require('./common/scanner'),
    require('./common/db')
], function(x) { return x.name; });

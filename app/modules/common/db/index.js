'use strict';

var _ = require('lodash');
var createORM = require('./createORM');

var PouchDB = window.PouchDB = require('pouchdb');
PouchDB.plugin(require('relational-pouch'));
// TODO: add pouchdb-persist plugin for easier syncing
require('angular-pouchdb');

module.exports = require('angular').module('beekeep.db', ['pouchdb']);

module.exports.factory('DB', function(pouchDB, pouchDecorators) {
  var db = pouchDB('beekeep', { adapter: 'websql' });

  var Queen = createORM(db, 'queen', 'queens', {
    hive: {belongsTo: 'hive'}
  });

  var Hive = createORM(db, 'hive', 'hives', {
    pallet: {belongsTo: 'pallet'},
    queen: {belongsTo: 'queen'}
  });

  var Pallet = createORM(db, 'pallet', 'pallets', {
    yard: {belongsTo: 'yard'},
    hives: {hasMany: 'hive'}
  });

  var Yard = createORM(db, 'yard', 'yards', {
    pallets: {hasMany: 'pallet'}
  });

  db.setSchema([
    Queen.schema,
    Hive.schema,
    Pallet.schema,
    Yard.schema
  ]);

  _.each([
    'save', 'find', 'del', 'putAttachment', 'getAttachment',
    'removeAttachment', 'parseDocID', 'makeDocID'
  ], function(fn) {
    db.rel[fn] = pouchDecorators.qify(db.rel[fn]);
  });

  return {
    db: db,
    Queen: Queen,
    Hive: Hive,
    Pallet: Pallet,
    Yard: Yard
  };
});

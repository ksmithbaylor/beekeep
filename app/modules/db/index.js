'use strict';

var _ = require('lodash');

// Load PouchDB, initiate plugins, and expose globally
var PouchDB = require('pouchdb');
PouchDB.plugin(require('relational-pouch'));
// TODO: add pouchdb-persist plugin for easier syncing
window.PouchDB = PouchDB;

// Load angular PouchDB wrapper
require('angular-pouchdb');

module.exports = require('angular').module('beekeep.db', ['pouchdb']);

module.exports.factory('DB', function(pouchDB, pouchDecorators) {
  console.log('opening db');
  var db = pouchDB('beekeep', {
    adapter: 'websql'
  });

  db.setSchema([
    {singular: 'hive', plural: 'hives'}
  ]);

  _.each([
    'save',
    'find',
    'del',
    'putAttachment',
    'getAttachment',
    'removeAttachment',
    'parseDocID',
    'makeDocID'
  ], function(fn) {
    db.rel[fn] = pouchDecorators.qify(db.rel[fn]);
  });

  return db;
});

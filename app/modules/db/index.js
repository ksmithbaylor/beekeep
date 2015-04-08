'use strict';

// Load PouchDB, initiate plugins, and expose globally
var PouchDB = require('pouchdb');
PouchDB.plugin(require('relational-pouch'));
// TODO: add pouchdb-persist plugin for easier syncing
window.PouchDB = PouchDB;

// Load angular PouchDB wrapper
require('angular-pouchdb');

module.exports = require('angular').module('beekeep.db', ['pouchdb']);

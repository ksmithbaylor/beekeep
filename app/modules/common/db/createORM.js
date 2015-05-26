'use strict';

module.exports = function (db, singular, plural, relations) {
  return {
    create: function* (object) {
      var created = yield db.rel.save(singular, object || {});
      if (window.DEBUG) console.log('created a ' + this.schema.singular + ':', created);
      return created[plural][0];
    },

    find: function* (id, eager) {
      var found = yield db.rel.find(singular, id);
      if (window.DEBUG) console.log('found a ' + this.schema.singular + ':', found);
      if (eager) return found;
      if (typeof id === 'object') return found[plural];
      return found[plural][0];
    },

    all: function* (eager) {
      var all = yield db.rel.find(singular);
      if (window.DEBUG) console.log('got all ' + this.schema.plural + ':', all);
      if (eager) return all;
      return all[plural];
    },

    first: function* () {
      var first = yield db.rel.find(singular);
      if (window.DEBUG) console.log('got first ' + this.schema.singular + ':', first);
      return first[plural] ? first[plural][0] : undefined;
    },

    destroy: function* (object) {
      var destroyed = yield db.rel.del(singular, object);
      if (window.DEBUG) console.log('destroyed a ' + this.schema.singular + ':', destroyed);
      return destroyed.deleted;
    },

    schema: {
      singular: singular,
      plural: plural,
      relations: relations
    }
  };
};

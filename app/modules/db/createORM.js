'use strict';

module.exports = function (db, singular, plural, relations) {
  return {
    create: function* (object) {
      return (yield db.rel.save(singular, object || {}))[plural][0];
    },

    find: function* (id, eager) {
      var res = yield db.rel.find(singular, id);
      if (eager) return res;
      if (typeof id === 'object') return res[plural];
      return res[plural][0];
    },

    all: function* (eager) {
      var res = yield db.rel.find(singular);
      if (eager) return res;
      return res[plural];
    },

    first: function* () {
      var res = yield db.rel.find(singular);
      return res[plural] ? res[plural][0] : undefined;
    }

    destroy: function* (object) {
      return (yield db.rel.del(singular, object)).deleted;
    },

    schema: {
      singular: singular,
      plural: plural,
      relations: relations
    }
  };
};

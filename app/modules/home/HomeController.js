'use strict';

module.exports = function($scope, $rootScope, DB) {
  console.log('in home controller');
  DB.rel.save('hive', {
    a: 123,
    b: 456
  }).then(function(hives) {
    console.dir(hives);
    DB.rel.find('hive', function(hives) {
      console.log(hives);
    });
  });
};

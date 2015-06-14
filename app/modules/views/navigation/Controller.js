'use strict';

module.exports = function ($scope, $ionicPopup, ScannerService) {
  $scope.scan = function() {
    ScannerService.scan('Scan a hive!', function(result) {
      result.cancelled ?
        $ionicPopup.alert({title: 'Cancelled', template: 'You cancelled the scan.'}) :
        $ionicPopup.alert({title: 'Result', template: result.text});
    }, function(error) {
      $ionicPopup.alert({title: 'Error', template: 'Something went wrong.'});
    });
  };
};

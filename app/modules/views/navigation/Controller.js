'use strict';

function popup($ionicPopup, title, text) {
  return $ionicPopup.alert({
    title: title,
    template: text
  });
}

module.exports = function ($scope, $ionicSideMenuDelegate, $ionicPopup, ScannerService, $ionicModal) {
    $scope.scan = function() {
        ScannerService.scan('Scan a hive!', function(result) {
            if (result.cancelled) {
              popup($ionicPopup, 'Cancelled', 'You cancelled the scan.');
            } else {
              popup($ionicPopup, 'Result', result.text);
            }
        }, function(error) {
          popup($ionicPopup, 'Error', 'Something went wrong.');
        });
    };
};

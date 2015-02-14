'use strict';

function popup($ionicPopup, title, text) {
  $ionicPopup.alert({
    title: title,
    template: text
  });
}

module.exports = function ($scope, $ionicSideMenuDelegate, $ionicPopup, ScannerService, $ionicModal) {
    $scope.scan = function() {
        ScannerService.scan('Scan a hive!', function(result) {
            if (result.cancelled) {
                // this is a super hack. When QR scan gets cancelled by
                // clicking the back button on android, the app quits...
                // doing a blank modal to catch the back button press event
                $ionicModal.fromTemplate('').show().then(function() {
                  popup($ionicPopup, 'Result', 'You cancelled the scan.');
                });
            } else {
              popup($ionicPopup, 'Result', result.text);
            }
        }, function(error) {
          popup($ionicPopup, 'Error', 'Something went wrong.');
        });
    };
};

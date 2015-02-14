'use strict';

module.exports = function ($scope, $ionicSideMenuDelegate, $ionicPopup, ScannerService, $ionicModal) {
    $scope.data = {};

    $scope.toggleLeftMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.enterHiveNumber = function() {
        $scope.hiveNumber = '';
        $ionicPopup.show({
            template: '<div hive-number-entry></div>',
            title: 'Enter a hive number',
            scope: $scope,
            buttons: [
                {text: 'Cancel'},
                {
                    text: '<b>Go</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        return $scope.data.hiveNumber;
                    }
                }
            ]
        }).then(function(hiveNumber) {
            // TODO go to url based on that hive number
            console.log('entered hive #' + hiveNumber);
        });
    };

    $scope.scan = function() {
        ScannerService.scanRaw('Scan a hive!', function(result) {
            if (result.cancelled) {
                // this is a super hack. When QR scan gets cancelled by
                // clicking the back button on android, the app quits...
                // doing a blank modal to catch the back button press event
                $ionicModal.fromTemplate('').show().then(function() {
                    $ionicPopup.alert({
                        title: 'QR Scan Cancelled',
                        template: 'You cancelled it!'
                    });
                });
            } else {
                $ionicPopup.alert({
                    template: 'Result: ' + result.text
                });
            }
        }, function(error) {
            $ionicPopup.alert({
                title: 'Unable to scan the QR code',
                template: 'Too bad, something went wrong.'
            });
        });
    };

};

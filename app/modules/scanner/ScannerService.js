'use strict';

module.exports = function($ionicPopup, $ionicPlatform) {
  return {
    scan: function (label, success, fail) {
      if (window.cordova) {
        var successCB = function (result) { success(result) };
        var failCB = function (error) { fail(error) };

        if (window.ionic.Platform.isAndroid()) {
          cordova.plugins.barcodeScanner.scan(successCB, failCB, 'Scan a hive');
        } else {
          cordova.plugins.barcodeScanner.scan(successCB, failCB);
        }
      } else {
        $ionicPopup.prompt({
          title: 'Fake Scanner',
          template: 'Enter a Hive Number',
          inputType: 'text',
          inputPlaceholder: '0000'
        }).then(function (response) {
          if (response || response === '') {
            success({text: response});
          } else {
            success({cancelled: true});
          }
        });
      }
    }
  }
};

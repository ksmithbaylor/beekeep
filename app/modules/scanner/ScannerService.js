'use strict';

module.exports = function($ionicPopup, $ionicPlatform) {
  return {
    scan: function (label, success, fail) {
      if (window.cordova) {
        var label = window.ionic.Platform.isAndroid() ? 'Scan a hive' : null;
        cordova.plugins.barcodeScanner.scan(success, fail, label);
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

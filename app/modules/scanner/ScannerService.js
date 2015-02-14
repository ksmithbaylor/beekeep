'use strict';

module.exports = function($ionicPopup) {
  return {
    scan: function (label, success, fail) {
      if (window.cordova) {
        cordova.plugins.barcodeScanner.scan(
          function (result) { success(result); },
          function (error) { fail(error); },
          label
        );
      } else {
        $ionicPopup.prompt({
          title: 'Fake Scanner',
          template: 'Enter a Hive Number',
          inputType: 'text',
          inputPlaceholder: '0000'
        }).then(function (response) {
          if (response) {
            success({text: response});
          } else {
            success({text: 'You cancelled the scan.'});
          }
        });
      }
    }
  }
};

'use strict';

module.exports = function($ionicPopup) {
  function realScan(label, success, fail) {
    // Only iOS supports passing a label to the scanner
    var text = window.ionic.Platform.isAndroid() ? label : null;
    cordova.plugins.barcodeScanner.scan(success, fail, text);
  }

  function fakeScan(success) {
    var popupOptions = {
      title: 'Fake Scanner',
      template: 'Enter a Hive Number',
      inputType: 'text',
      inputPlaceholder: '0000'
    };

    $ionicPopup.prompt(popupOptions).then(function (response) {
      response || response === '' ?
        success({text: response}) :
        success({cancelled: true});
    });
  }

  return {
    scan: function (label, success, fail) {
      window.cordova ?
        realScan(label, success, fail) :
        fakeScan(success);
    }
  }
};

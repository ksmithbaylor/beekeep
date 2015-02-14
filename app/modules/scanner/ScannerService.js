'use strict';

function scanRaw(label, success, fail) {
    if (window.cordova) {
        cordova.plugins.barcodeScanner.scan(
            function (result) { success(result); },
            function (error) { fail(error); },
            label
        );
    } else {
        success({text:'fake scanner output'});
    }
}

function scan() {
    console.log('starting scan');
    if (window.cordova) {
        cordova.plugins.barcodeScanner.scan(function(result) {
            console.log('ScannerService sent scanCompleted: ' + result.text);
            $rootScope.$broadcast('scanCompleted', result.text);
        }, function (err) {
            console.log('ScannerService sent scanCompleted: ' + 'error scanning');
            $rootScope.$broadcast('scanCompleted', 'error scanning');
        }, 'Scan a beehive!');
    } else {
        console.log('ScannerService sent scanCompleted: ' + 'fake scan');
        $rootScope.$broadcast('scanCompleted', 'fake scan');
    }
}

module.exports = function($rootScope, $cordovaBarcodeScanner) {
    return {
        scan: scan,
        scanRaw: scanRaw
    };
};

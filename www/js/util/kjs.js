'use strict';

var kjs = {
    appName: 'beekeep',
    nameModule: function(name) {
        return this.appName + '.' + name;
    },
    addController: function(module, controller) {
        angular.module(this.nameModule(module)).controller(controller.name, controller);
    }
}

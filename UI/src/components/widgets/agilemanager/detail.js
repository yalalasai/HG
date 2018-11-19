/**
 * Detail controller for the build widget
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('AgileManagerWidgetDetailController', AgileManagerWidgetDetailController);

        AgileManagerWidgetDetailController.$inject = ['$scope', '$uibModalInstance', 'collectorName', 'collectorNiceName'];
    function AgileManagerWidgetDetailController($scope, $uibModalInstance,  collectorName, collectorNiceName) {
        var ctrl = this;

        ctrl.collectorName = collectorName;
        ctrl.collectorNiceName = collectorNiceName;

        ctrl.buildUrlNiceName = buildUrlNiceName;
        ctrl.buildPassed = buildPassed;
        ctrl.close = close;

        function buildUrlNiceName() {
            if (!isEmpty(collectorNiceName)) {
                return collectorNiceName;
            } else {
                return collectorName;
            }
        }

        function isEmpty(str) {
            //!str returns true for uninitialized, null and empty strings
            //the test checks if the string only contains whitespaces and returns true.
            return !str || /^[\s]*$/.test(str);
        }

        function buildPassed() {
            return ctrl.build.buildStatus === 'Success';
        }

        function close() {
            $uibModalInstance.dismiss('close');
        }
    }
})();

/**
 * View controller for the build widget
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('AgileManagerWidgetViewController', AgileManagerWidgetViewController);


    AgileManagerWidgetViewController.$inject = ['$scope', 'agilemanagerData', '$q', '$uibModal'];
    function AgileManagerWidgetViewController($scope, agilemanagerData, $q, $uibModal) {
debugger;
        var ctrl = this;
        var builds = [];
        ctrl.agileManagerDetails=[];
        ctrl.load = function () {
            debugger;
           // var deferred = $q.defer();
            agilemanagerData.details($scope.widgetConfig.componentId).
            then(function (data) {
                ctrl.agileManagerDetails = data.data;
              //  deferred.resolve(data.lastUpdated);
            });
           // return deferred.promise;
        };

        ctrl.open = function (url) {
            window.open(url);
        };

        ctrl.detail = function (build) {
            $uibModal.open({
                templateUrl: 'components/widgets/agilemanager/detail.html',
                controller: 'AgileManagerWidgetDetailController',
                controllerAs: 'detail',
                size: 'lg',
                resolve: {
                    build: function () {
                        return _.find(builds, { number: build.number });
                    },
                    collectorName: function () {
                        return $scope.dashboard.application.components[0].collectorItems.Build[0].collector.name;
                    },
                    collectorNiceName: function () {
                        return $scope.dashboard.application.components[0].collectorItems.Build[0].niceName;
                    }
                }
            });
        };
    }
})();

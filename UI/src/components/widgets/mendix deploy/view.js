/**
 * View controller for the build widget
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('MendixDeployWidgetViewController', MendixDeployWidgetViewController);


    MendixDeployWidgetViewController.$inject = ['$scope', 'mendixData', '$q', '$uibModal'];
    function MendixDeployWidgetViewController($scope, mendixData, $q, $uibModal) {
debugger;
        var ctrl = this;
        var builds = [];
        ctrl.mendixDeployDetails=[];
        ctrl.load = function () {
           // var deferred = $q.defer();
            mendixData.details($scope.widgetConfig.componentId).
            then(function (data) {
                ctrl.mendixDeployDetails = data.data;
              //  deferred.resolve(data.lastUpdated);
            });
           // return deferred.promise;
        };

        ctrl.open = function (url) {
            window.open(url);
        };

        ctrl.detail = function (build) {
            $uibModal.open({
                templateUrl: 'components/widgets/mendix deploy/detail.html',
                controller: 'MendixDeployWidgetDetailController',
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

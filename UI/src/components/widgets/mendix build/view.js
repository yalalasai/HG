/**
 * View controller for the build widget
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('MendixBuildWidgetViewController', MendixBuildWidgetViewController);


    MendixBuildWidgetViewController.$inject = ['$scope', 'mendixData', '$q', '$uibModal'];
    function MendixBuildWidgetViewController($scope, mendixData, $q, $uibModal) {
debugger;
        var ctrl = this;
        var builds = [];
        ctrl.mendixBuildDetails=[];
        ctrl.load = function () {
            debugger;
           // var deferred = $q.defer();
            mendixData.details($scope.widgetConfig.componentId).
            then(function (data) {
                ctrl.mendixBuildDetails = data.data;
              //  deferred.resolve(data.lastUpdated);
            });
           // return deferred.promise;
        };

        ctrl.open = function (url) {
            window.open(url);
        };

        ctrl.detail = function (build) {
            $uibModal.open({
                templateUrl: 'components/widgets/mendix build/detail.html',
                controller: 'MendixBuildWidgetDetailController',
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

/**
 * View controller for the build widget
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('MendixTeamServerWidgetViewController', MendixTeamServerWidgetViewController);


    MendixTeamServerWidgetViewController.$inject = ['$scope', 'mendixData', '$q', '$uibModal'];
    function MendixTeamServerWidgetViewController($scope, mendixData, $q, $uibModal) {
debugger;
        var ctrl = this;
        var builds = [];
        ctrl.mendixTeamServerDetails=[];
        ctrl.load = function () {
            debugger;
           // var deferred = $q.defer();
            mendixData.details($scope.widgetConfig.componentId).
            then(function (data) {
                ctrl.mendixTeamServerDetails = data.data;
              //  deferred.resolve(data.lastUpdated);
            });
           // return deferred.promise;
        };

        ctrl.open = function (url) {
            window.open(url);
        };

        ctrl.detail = function (build) {
            $uibModal.open({
                templateUrl: 'components/widgets/mendix teamserver/detail.html',
                controller: 'MendixTeamServerWidgetDetailController',
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

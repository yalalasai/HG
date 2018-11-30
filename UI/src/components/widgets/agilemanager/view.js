/**
 * View controller for the build widget
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('AgileManagerWidgetViewController', AgileManagerWidgetViewController);


    AgileManagerWidgetViewController.$inject = ['$scope', 'hpamData', '$q', '$uibModal'];
    function AgileManagerWidgetViewController($scope, hpamData, $q, $uibModal) {
        console.log(hpamData)
        var ctrl = this;
        var builds = [];
        ctrl.agileManagerDetails = [];
        ctrl.backlogPieChart = [];
        ctrl.uniqueReleaseIds = [];
        ctrl.selectedReleaseId = 0;
        ctrl.uniquefeatureIds = [];
        ctrl.agileManagerUniqueIds = {
            releaseid: [],
            teamid: [],
            themeid: [],
            featureid: [],
            applicationid: [],
            sprintid: [],
            selectedreleaseId: '',
            selectedteam: '',
            selectedtheme: '',
            selectedfeature: '',
            selectedapplication: '',
            selectedsprint: ''
        };
        ctrl.copyAgileManagerDetails = [];

        ctrl.onChangeReleaseId = function (releaseId) {
            var arr = [];

            ctrl.agileManagerDetails[0].hpamBacklog.forEach((item, index) => {
                if (item.status == 'Done') {
                    arr.push({ id: item.releaseid.id, status: 'Done' });
                }
                else if (item.status == 'new') {
                    arr.push({ id: item.releaseid.id, status: 'new' });
                }

            });
            var result = { id: 0, new: 0, Done: 0 };
            arr.forEach((item) => {
                if (item.id == releaseId) {
                    result.id = releaseId;
                    result[item.status] = result[item.status] + 1;
                }
            });

            ctrl.loadChart(result.Done, result.new);
        }

        ctrl.GetFilterBy = function (filterBy, value) {

            var filtered = ctrl.agileManagerDetails[0].hpamBacklog.filter(function (item) {
                if(item[filterBy].id){
                    return item[filterBy].id.toString().toLowerCase().indexOf(value) > -1;
                }
                else {
                    return null;
                }
            });

            ctrl.copyAgileManagerDetails[0].hpamBacklog = angular.copy(filtered);

        }

        ctrl.filterfeatures = function () {
            ctrl.uniquefeatureIds = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => item.featureid.id))];

            var featureStrory = [];

            ctrl.uniquefeatureIds.forEach((unique, uniqIndex) => {
                var storyPoints = 0;
                ctrl.agileManagerDetails[0].hpamBacklog.forEach((item, index) => {
                    if (unique == item.featureid.id) {
                        storyPoints = Number(storyPoints) + Number(item.storypoints);
                    }
                });
                featureStrory.push({ id: unique, storyPoints: storyPoints });
            });

            ctrl.loadlinechart(featureStrory);
        }

        ctrl.teamvelocity = function () {

            var estimatedVelocity = [];
            ctrl.agileManagerDetails[0].hpamTeam.forEach((item, index) =>{
                estimatedVelocity.push({name: item.name , velocity: item.estimatedvelocity })
            });

            ctrl.loadbarchart(estimatedVelocity);
        }

        $scope.$on('eventEmitedName', function (event, data) {
            console.log('event fired');
        });

        function getRandomColorHex() {
            var hex = "0123456789ABCDEF",
                color = "#";
            for (var i = 1; i <= 6; i++) {
              color += hex[Math.floor(Math.random() * 16)];
            }
            return color;
          }

        ctrl.loadChart = function (done, newvalue) {
            var pieData = {
                labels: ["BackLogs(Done)", "BacklLogs(New)"],
                datasets: [{
                    data: [done, newvalue],
                    backgroundColor: ["#878BB6", "#FF8153"]
                }]
            };

            // Get the context of the canvas element we want to select
            var piechart = document.getElementById("pie-chart").getContext("2d");
            new Chart(piechart, {
                type: 'pie',
                data: pieData
            });
        }

        ctrl.loadlinechart = function (featuresList) {
            let data = [];
            let lables = [];
            let colors = [];
            featuresList.forEach((item, index) => {
                data.push(item.storyPoints);
                lables.push(`feature-${item.id}`);
                colors.push(getRandomColorHex())
            });

            var linechartdata = {
                labels: lables,
                datasets: [{
                    label: "StoryPoints (Completed)",
                    data: data,
                    backgroundColor: colors,
                }],
            };

            var ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'horizontalBar',
                data: linechartdata,
                options: {
                    scales: {
                        xAxes: [{

                            stacked: true,

                        }],
                        yAxes: [{
                            categorySpacing: 20,
                            barThickness: 10,
                            barPercentage: 0.5,
                            stacked: true
                        }]
                    }
                }
            });
        }

        ctrl.loadbarchart = function (teamList) {
            let data = [];
            let lables = [];
            let colors = [];
            teamList.forEach((item, index) => {
                data.push(item.velocity);
                lables.push(item.name);
                colors.push(getRandomColorHex());
            });
            var linechartdata = {
                labels: lables,
                datasets: [{
                    label: "Estimated Velocity",
                    data: data,
                    backgroundColor: colors
                }],
            };

            var ctx = document.getElementById('barChart').getContext('2d');
            new Chart(ctx, {
                type: 'horizontalBar',
                data: linechartdata,
                options: {
                    scales: {
                        xAxes: [{

                            stacked: true,

                        }],
                        yAxes: [{
                            categorySpacing: 20,
                            barThickness: 10,
                            barPercentage: 0.5,
                            stacked: true
                        }]
                    }
                }
            });
        }
   
        ctrl.load = function () {

            //$scope.widgetConfig.options.workspaceid

            hpamData.details($scope.widgetConfig.componentId).
                then(function (data) {
                    ctrl.agileManagerDetails = angular.copy(data.data);
                    ctrl.copyAgileManagerDetails = angular.copy(data.data);
                    var filtered = ctrl.agileManagerDetails[0].hpamBacklog.filter(function (item) {
                        return item.workspaceid.toString().toLowerCase().indexOf($scope.widgetConfig.options.workspaceid) > -1;
                    });

                    ctrl.agileManagerDetails[0].hpamBacklog = angular.copy(filtered);
                    ctrl.copyAgileManagerDetails[0].hpamBacklog = angular.copy(filtered);

                    ctrl.uniqueReleaseIds = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => item.releaseid.id))];

                    ctrl.agileManagerUniqueIds.releaseid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => item.releaseid.id))];
                    ctrl.agileManagerUniqueIds.teamid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => item.teamid.id))];
                    ctrl.agileManagerUniqueIds.themeid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => item.themeid.id))];
                    ctrl.agileManagerUniqueIds.featureid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => item.featureid.id))];
                    ctrl.agileManagerUniqueIds.applicationid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => item.applicationid.id))];
                    ctrl.agileManagerUniqueIds.sprintid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => item.sprintid.id))];
                    ctrl.filterfeatures();
                    ctrl.teamvelocity();
                });


        }

        ctrl.open = function (url) {
            window.open(url);
        }
    }
})();

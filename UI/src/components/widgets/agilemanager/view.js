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

        var ctrl = this;
        var builds = [];
        ctrl.openStoryPoints = [];
        ctrl.teamfiltered = [];
        ctrl.agileManagerDetails = [];
        ctrl.backlogPieChart = [];
        ctrl.uniqueReleaseIds = [];
        ctrl.selectedReleaseId = 0;
        ctrl.selectedReleaseIdfeature = 0;
        ctrl.uniquefeatureIds = [];
        ctrl.agileManagerUniqueIds = {
            releaseid: [],
            teamid: [],
            themeid: [],
            featureid: [],
            applicationid: [],
            sprintid: [],
            selectedreleaseId: '',
            selectedReleaseIdfeature: '',
            selectedteam: '',
            selectedtheme: '',
            selectedfeature: '',
            selectedapplication: '',
            selectedsprint: ''
        };
        ctrl.copyAgileManagerDetails = [];
        ctrl.copyagileManagerDetails = [];
        // ctrl.onChangeReleaseId = function (releaseId) {
        //     var arr = [];

        //     ctrl.agileManagerDetails[0].hpamBacklog.forEach((item, index) => {
        //         if (item.status == 'Done') {
        //             arr.push({ id: item.releaseid ? item.releaseid.id : null, status: 'Done' });
        //         }
        //         else if (item.status == 'new') {
        //             arr.push({ id: item.releaseid ? item.releaseid.id : null, status: 'new' });
        //         }
        //         else if (item.status == 'In Progress') {
        //             arr.push({ id: item.releaseid ? item.releaseid.id : null, status: 'Inprogress' })
        //         }

        //     });

        //     var result = { id: 0, new: 0, Done: 0, Inprogress: 0 };
        //     arr.forEach((item) => {
        //         if (item.id == releaseId) {
        //             result.id = releaseId;
        //             result[item.status] = result[item.status] + 1;
        //         }
        //     });

        //     ctrl.loadChart(result.Done, result.new, result.Inprogress);
        // }

        ctrl.GetFilterBy = function (filterBy, value) {

            var filtered = ctrl.agileManagerDetails[0].hpamFeature.filter(function (item) {
                if (item[filterBy] != null) {
                    return item[filterBy].id.toString().toLowerCase().indexOf(value) > -1;
                }
                else {
                    return null;
                }
            });
            
            // var filtered2 = ctrl.agileManagerDetails[0].hpamRelease.filter(function (item) {
            //     if (item[filterBy] != null) {
            //         return item[filterBy].id.toString().toLowerCase().indexOf(value) > -1;
            //     }
            //     else {
            //         return null;
            //     }
            // });

            ctrl.copyAgileManagerDetails[0].hpamBacklog = angular.copy(filtered);
            

        }

        // ctrl.filterfeatures = function (releaseId) {

        //     ctrl.uniquefeatureIds = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => {
        //         if (item.releaseid != null && item.releaseid.id == releaseId && item.featureid != null || "" ){
        //             return item.featureid.id;
        //         }
        //     }))];
        //     //console.log(ctrl.uniquefeatureIds);
        //     var featureStrory = [];

        //     ctrl.uniquefeatureIds.forEach((unique, uniqIndex) => {
        //         var storyPoints = 0;
        //         ctrl.agileManagerDetails[0].hpamBacklog.forEach((item, index) => {
        //             if (item.featureid != null && unique == item.featureid.id ) {
        //                 storyPoints = Number(storyPoints) + Number(item.storypoints);
        //             }
        //         });
        //         featureStrory.push({ id: unique, storyPoints: storyPoints });
        //     });

        //     ctrl.loadlinechart(featureStrory);
        // }

        // ctrl.teamvelocity = function () {
           
        //     var estimatedVelocity = [];
        //     ctrl.teamfiltered.forEach((item, index) => {
        //         estimatedVelocity.push({ name: item.name, velocity: item.estimatedvelocity })
        //     });

        //     ctrl.loadbarchart(estimatedVelocity);
        // }

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

        // ctrl.loadChart = function (done, newvalue, inprogress) {
        //     var pieData = {
        //         labels: ["BackLogs(Done)", "BackLogs(New)", "BackLogs(WIP)"],
        //         datasets: [{
        //             data: [done, newvalue, inprogress],
        //             backgroundColor: ["#00ff00", "#878BB6", "#FF8153"]
        //         }]
        //     };

        //     // Get the context of the canvas element we want to select
        //     var piechart = document.getElementById("pie-chart").getContext("2d");
        //     new Chart(piechart, {
        //         type: 'pie',
        //         data: pieData
        //     });
        // }

        // ctrl.loadlinechart = function (featuresList) {
        //     let data = [];
        //     let lables = [];
        //     let colors = [];
        //     featuresList.forEach((item, index) => {
        //         data.push(item.storyPoints);
        //         lables.push(`feature-${item.id}`);
        //         colors.push(getRandomColorHex())
        //     });

        //     var linechartdata = {
        //         labels: lables,
        //         datasets: [{
        //             label: "StoryPoints (Completed)",
        //             data: data,
        //             backgroundColor: colors,
        //         }],
        //     };

        //     var ctx = document.getElementById('myChart').getContext('2d');
        //     new Chart(ctx, {
        //         type: 'horizontalBar',
        //         data: linechartdata,
        //         options: {
        //             scales: {
        //                 xAxes: [{

        //                     stacked: true,

        //                 }],
        //                 yAxes: [{
        //                     categorySpacing: 20,
        //                     barThickness: 10,
        //                     barPercentage: 0.5,
        //                     stacked: true
        //                 }]
        //             }
        //         }
        //     });
        // }

        // ctrl.loadbarchart = function (teamList) {
        //     let data = [];
        //     let lables = [];
        //     let colors = [];
        //     teamList.forEach((item, index) => {
        //         data.push(item.velocity);
        //         lables.push(item.name);
        //         colors.push(getRandomColorHex());
        //     });
        //     var linechartdata = {
        //         labels: lables,
        //         datasets: [{
        //             label: "Estimated Velocity",
        //             data: data,
        //             backgroundColor: colors
        //         }],
        //     };

        //     var ctx = document.getElementById('barChart').getContext('2d');
        //     new Chart(ctx, {
        //         type: 'horizontalBar',
        //         data: linechartdata,
        //         options: {
        //             scales: {
        //                 xAxes: [{

        //                     stacked: true,

        //                 }],
        //                 yAxes: [{
        //                     categorySpacing: 20,
        //                     barThickness: 10,
        //                     barPercentage: 0.5,
        //                     stacked: true
        //                 }]
        //             }
        //         }
        //     });
        // }

        ctrl.load = function () {

            //$scope.widgetConfig.options.workspaceid

            hpamData.details($scope.widgetConfig.componentId).
                then(function (data) {
                    ctrl.agileManagerDetails = angular.copy(data.data);
                   // ctrl.openStoryPoints = angular.copy(data.data)

                    //console.log(ctrl.openStoryPoints)
                    ctrl.copyAgileManagerDetails = angular.copy(data.data);
                    //ctrl.copyopenStoryPoints = angular.copy(data.data);

                    var filtered = ctrl.agileManagerDetails[0].hpamFeature.filter(function (item) {
                        return item.releaseid == $scope.widgetConfig.options.releaseid;
                    });

                    var filtered2 = ctrl.agileManagerDetails[0].hpamRelease.filter(function (item) {
                        return item.releaseid == $scope.widgetConfig.options.releaseid;
                    });
                    
                    // ctrl.teamfiltered = ctrl.agileManagerDetails[0].hpamTeam.filter(function (item) {
                    //     return item.workspaceid == $scope.widgetConfig.options.workspaceid;
                    // });

                    ctrl.agileManagerDetails[0].hpamFeature = angular.copy(filtered);
                    ctrl.agileManagerDetails[0].hpamRelease=angular.copy(filtered2)
                    
                    ctrl.copyAgileManagerDetails[0].hpamFeature = angular.copy(filtered);
                    ctrl.copyAgileManagerDetails[0].hpamRelease=angular.copy(filtered2)
                   
                    console.log(ctrl.copyAgileManagerDetails)
                    // ctrl.uniqueReleaseIds = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => {
                    //     if (item.releaseid && item.releaseid.id) {
                    //         return item.releaseid.id;
                    //     }
                    // }
                    // ))];

                    //ctrl.agileManagerUniqueIds.releaseid = [...new Set(ctrl.agileManagerDetails[0].hpamFeature.map(item => item.releaseid ))];
                    // ctrl.agileManagerUniqueIds.teamid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => {
                    //     if (item.teamid && item.teamid.id){
                    //         return item.teamid.id;
                    //     }
                    // }))];
                    // ctrl.agileManagerUniqueIds.themeid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => {
                    //     if (item.themeid && item.themeid.id){
                    //         return item.themeid.id;
                    //     }
                    // } ))];
                    // ctrl.agileManagerUniqueIds.featureid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => {
                    //     if (item.featureid && item.featureid.id){
                    //         return item.featureid.id;
                    //     }
                    // }))];
                    // ctrl.agileManagerUniqueIds.applicationid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => {
                    //     if (item.applicationid && item.applicationid.id){
                    //         return item.applicationid.id;
                    //     }
                    // }
                    // ))];
                    // ctrl.agileManagerUniqueIds.sprintid = [...new Set(ctrl.agileManagerDetails[0].hpamBacklog.map(item => {
                    //     if (item.sprintid && item.sprintid.id){
                    //         return item.sprintid.id;
                    //     }
                    // }))];
                    // ctrl.filterfeatures();
                    // ctrl.teamvelocity();
                });


        }

        ctrl.open = function (url) {
            window.open(url);
        }
    }
})();

/**
 * Build widget configuration
 */
(function () {
    'use strict';
    angular
        .module(HygieiaConfig.module)
        .controller('AgileManagerWidgetConfigController', AgileManagerWidgetConfigController);
        AgileManagerWidgetConfigController.$inject = ['modalData', '$scope', 'hpamData', '$uibModalInstance'];
    function AgileManagerWidgetConfigController(modalData, $scope, hpamData, $uibModalInstance) {
        var ctrl = this,
        widgetConfig = modalData.widgetConfig;
        ctrl.selectedworkspaceIds = null;
        ctrl.selectreleaseIds = null;
        ctrl.selectreleaseNames = null;
        ctrl.agileManagerUniqueIds = {
            workspaceid: [],
            selectedworkspaceIds: '',
            releaseid: [],
            selectreleaseIds: '',
            releasename: [],
            selectreleaseNames: ''
        };
        

        // public variables
        //ctrl.buildDurationThreshold = 3;
        //ctrl.buildConsecutiveFailureThreshold = 5;
        
        // $scope.getJobs = function (filter) {
        // 	return hpamData.itemsByType('agilemanager', {"search": filter, "size": 20}).then(function (response){
        // 		return response;
        // 	});
        // }

        ctrl.load = function () {
            hpamData.details(widgetConfig.options.id).
                then(function (data) {
                    //ctrl.agileManagerUniqueIds.workspaceid = [...new Set(data.data[0].hpamFeature.map(item => item.workspacename))]; 
                    ctrl.agileManagerUniqueIds.releaseid = [...new Set(data.data[0].hpamFeature.map(item => item.releaseid))];               
                })
            };
            

        
        
 
        //loadSavedBuildJob();
        // set values from config
        // if (widgetConfig) {
        //     if (widgetConfig.options.buildDurationThreshold) {
        //         ctrl.buildDurationThreshold = widgetConfig.options.buildDurationThreshold;
        //     }
        //     if (widgetConfig.options.consecutiveFailureThreshold) {
        //         ctrl.buildConsecutiveFailureThreshold = widgetConfig.options.consecutiveFailureThreshold;
        //     }
        // }
        // public methods
        ctrl.submit = submitForm;

        // method implementations
        function loadSavedBuildJob(){
            ctrl.buildId ="";
        	var buildCollector = modalData.dashboard.application.components[0].collectorItems.Build,
            savedCollectorBuildJob = buildCollector ? buildCollector[0].description : null;

            if(savedCollectorBuildJob) {
                ctrl.buildId = buildCollector[0].id;
            	$scope.getJobsById(ctrl.buildId).then(getBuildsCallback)
            }
        }
        
        // function getBuildsCallback(data) {
        //     ctrl.collectorItemId = data;
        // }

        function submitForm(valid, collector) {
            if (valid) {
                $scope.$emit('eventEmitedName');
                var form = document.buildConfigForm;
                var postObj = {
                    name: 'agilemanager',
                    options: {
                        id: widgetConfig.options.id,
                        releaseid: ctrl.selectreleaseIds
                    },
                    componentId: modalData.dashboard.application.components[0].id
                };
                
                                
                // pass this new config to the modal closing so it's saved
                $uibModalInstance.close(postObj);
            }
        }
    }
})();


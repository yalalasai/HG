(function () {
    'use strict';

    var widget_state,
        config = {
            view: {
                defaults: {
                    title: 'MendixDeploy' // widget title
                },
                controller: 'MendixDeployWidgetViewController',
                controllerAs: 'mendixDeployView',
                templateUrl: 'components/widgets/mendix deploy/view.html'
            },
            config: {
                controller: 'MendixDeployWidgetConfigController',
                controllerAs: 'mendixdeployConfig',
                templateUrl: 'components/widgets/mendix deploy/config.html'
            },
            getState: getState,
            collectors: ['mendixdeploy']
        };

    angular
        .module(HygieiaConfig.module)
        .config(register);

    register.$inject = ['widgetManagerProvider', 'WidgetState'];
    function register(widgetManagerProvider, WidgetState) {
        widget_state = WidgetState;
        widgetManagerProvider.register('mendixdeploy', config);
    }

    function getState(widgetConfig) {
        // make sure config values are set
        return HygieiaConfig.local || widgetConfig.id ?
        widget_state.READY :
        widget_state.CONFIGURE;
    }
})();

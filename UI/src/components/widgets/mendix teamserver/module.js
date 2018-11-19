(function () {
    'use strict';

    var widget_state,
        config = {
            view: {
                defaults: {
                    title: 'MendixTeamServer' // widget title
                },
                controller: 'MendixTeamServerWidgetViewController',
                controllerAs: 'mendixTeamServerView',
                templateUrl: 'components/widgets/mendix teamserver/view.html'
            },
            config: {
                controller: 'MendixTeamServerWidgetConfigController',
                controllerAs: 'mendixteamserverConfig',
                templateUrl: 'components/widgets/mendix teamserver/config.html'
            },
            getState: getState,
            collectors: ['mendixteamserver']
        };

    angular
        .module(HygieiaConfig.module)
        .config(register);

    register.$inject = ['widgetManagerProvider', 'WidgetState'];
    function register(widgetManagerProvider, WidgetState) {
        widget_state = WidgetState;
        widgetManagerProvider.register('mendixteamserver', config);
    }

    function getState(widgetConfig) {
        // make sure config values are set
        return HygieiaConfig.local || widgetConfig.id ?
        widget_state.READY :
        widget_state.CONFIGURE;
    }
})();

(function () {
    'use strict';

    var widget_state,
        config = {
            view: {
                defaults: {
                    title: 'MendixBuild' // widget title
                },
                controller: 'MendixBuildWidgetViewController',
                controllerAs: 'mendixBuildView',
                templateUrl: 'components/widgets/mendix build/view.html'
            },
            config: {
                controller: 'MendixBuildWidgetConfigController',
                controllerAs: 'mendixbuildConfig',
                templateUrl: 'components/widgets/mendix build/config.html'
            },
            getState: getState,
            collectors: ['mendixbuild']
        };

    angular
        .module(HygieiaConfig.module)
        .config(register);

    register.$inject = ['widgetManagerProvider', 'WidgetState'];
    function register(widgetManagerProvider, WidgetState) {
        widget_state = WidgetState;
        widgetManagerProvider.register('mendixbuild', config);
    }

    function getState(widgetConfig) {
        // make sure config values are set
        return HygieiaConfig.local || widgetConfig.id ?
        widget_state.READY :
        widget_state.CONFIGURE;
    }
})();

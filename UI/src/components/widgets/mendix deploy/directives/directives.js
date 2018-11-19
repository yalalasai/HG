(function () {
    'use strict';

    var app = angular
        .module(HygieiaConfig.module);

    var directives = [
        'buildsPerDay',
        'averageBuildDuration',
        'totalBuilds',
        'latestBuilds'
    ];

    _(directives).forEach(function (name) {
        app.directive(name, function () {
            return {
                restrict: 'E',
                //templateUrl: 'components/widgets/mendix deploy/directives/'+ name + '.html'
            };
        });
    });


})();

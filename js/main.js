// This tells require.js in which order to load dependencies and javascript resources.
require.config({
    paths: {
        'jquery'                : '//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min',
        'jquery.mobile'         : 'http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min',
        'jquery.mobile-config'  : 'lib/jqm-config',
        'underscore'            : 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min',
        'backbone'              : 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
        'handlebars'            : '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.rc.1/handlebars.min',
        'google.maps'           : 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&sensor=SET_TO_TRUE_OR_FALSE'
    },
    shim: {
        'jquery.mobile'         : {
            deps: ['jquery']
        },
        'jquery.mobile-config'  : {
            deps: ['jquery.mobile', 'jquery']
        },
        'backbone'              : {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'underscore'            : {
            exports: '_'
        },
        'handlebars'            : {
            exports: 'Handlebars'
        },
        'router/main'           : {
            deps: ['backbone']
        },
        'app'                   : {
            deps: ['router/main']
        }
    }
});

require(['jquery', 
        'underscore', 'backbone',
        'app',
        'jquery.mobile', 'jquery.mobile-config'], 
    function($, _, Backbone, App) {

        $(document).ready(function() {
            App.init();
        });
    }
);
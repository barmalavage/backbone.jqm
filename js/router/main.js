define('router/main',
	['jquery', 'underscore', 'backbone',
	'views/base'],
	function($, _, Backbone, BaseView) {

		return Backbone.Router.extend({
			
			routes: {
				""		: "home",
				"home"	: "home",
				"sub"	: "sub",
				"third"	: "dynamic"
			},

			initialize: function() {
				
			},

			home: function() {
				
				

				$.mobile.changePage("#home", { reverse: false, changeHash: false } );

				return false;
			},

			sub: function() {
				
				$.mobile.changePage("#sub", { reverse: false, changeHash: false } );

				return false;
			},

			dynamic: function() {

				var view = new BaseView();
				view.render();

				$.mobile.changePage("#default", { reverse: false, changeHash: false} );
			}

		});

	}
);
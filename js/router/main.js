define('router/main',
	['underscore', 'backbone'],
	function(_, Backbone) {

		return Backbone.Router.extend({
			
			routes: {
				""		: "home",
				"home"	: "home"
			},

			initialize: function() {
				console.log("router init.");				
			},

			home: function() {
				console.log("navigated home.");
			}
		});

	}
);
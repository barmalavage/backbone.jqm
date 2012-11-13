define('app',
	['underscore', 'backbone',
	'router/main'],	
	function(_, Backbone, MainRouter) {

		return {
			init: function() {
				console.log("app init.");
				var Main = new MainRouter();
				Backbone.history.start({pushState: false, silent: false});
				
			}
		};

	}
);
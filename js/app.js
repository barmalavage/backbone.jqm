define('app',
	['underscore', 'backbone',
	'router/main'],	
	function(_, Backbone, MainRouter) {

		return {
			init: function() {
				
				var Main = new MainRouter();
				Backbone.history.start({pushState: false, silent: false});				
			}
		};

	}
);
define('router/main',
	['jquery', 'underscore', 'backbone',
	'views/abstract-page'],
	function($, _, Backbone, AbstractPageView) {

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

				this.renderPage("home");				

				return false;
			},

			sub: function() {
				
				var view = new AbstractPageView();
				view.render();

				$.mobile.changePage("#sub", { reverse: false, changeHash: false } );

				return false;
			},

			dynamic: function() {

				var view = new AbstractPageView();
				view.render();

				$.mobile.changePage("#default", { reverse: false, changeHash: false} );
			},

			/* "internal" methods */

			renderPage: function(id) {

				var view = new AbstractPageView( { header: "Home Page", id: id } );
				view.render();

				$.mobile.changePage("#" + id, { reverse: false, changeHash: false } );
			}

		});

	}
);
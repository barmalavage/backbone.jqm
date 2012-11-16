define('router/main',
	['jquery', 'underscore', 'backbone',
	'views/page-base', 'views/partial-form-search'],
	function($, _, Backbone, BasePage, SearchFormPartial) {

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

				var pageId = "home",
					view = new BasePage( { header: "Home Page", id: pageId } );
				
				view.views.searchForm = new SearchFormPartial();				
				
				view.render();

				this.changePage(pageId);

				return false;
			},

			sub: function() {
				
				var view = new BasePage();
				view.render();

				$.mobile.changePage("#sub", { reverse: false, changeHash: false } );

				return false;
			},

			dynamic: function() {

				var view = new BasePage();
				view.render();

				$.mobile.changePage("#default", { reverse: false, changeHash: false} );
			},

			/* "internal" methods */

			changePage: function(id) {				

				$.mobile.changePage("#" + id, { reverse: false, changeHash: false } );
			}

		});

	}
);
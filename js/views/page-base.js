define('views/page-base',
	['jquery', 'underscore', 'backbone', 'handlebars',
	'views/abstract-page'],
	function($, _, Backbone, Handlebars, AbstractPageView) {

		return AbstractPageView.extend({
			
			tagName: "div",

			id: "home",

			templateId: "#template-page",

			pageId: "default",

			container: "body",

			header: "Default Header",

			body: null,

			contentContainer: ".page-content",
			
			views: {},

			attributes: {

				"data-role": "page"
			},			

			getTemplateContext: function() {

				return {
					pageId: this.pageId,
					header: this.header,
					body: this.body
				};
			},

			initialize: function(args) {

				AbstractPageView.prototype.initialize.call(this, args);
								
			},

			render: function() {

				AbstractPageView.prototype.render.call(this);

				// this.views.searchForm = new SearchFormPartial();
				// this.views.searchForm.render();
				// this.$el.find(this.contentContainer).append(this.views.searchForm.$el);
				var _this = this;

				_.each(this.views, function(view) {

					view.render();
					_this.$el.find(_this.contentContainer).append(view.$el);
				});

				$(this.container).append(this.$el);

				return this;
			}

		});

	}
);
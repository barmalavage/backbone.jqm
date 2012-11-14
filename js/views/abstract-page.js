define('views/abstract-page',
	['jquery', 'underscore', 'backbone', 'handlebars',
	'views/base'],
	function($, _, Backbone, Handlebars, BaseView) {

		return Backbone.View.extend({
			
			templateId: "#template-page",

			pageId: "default",

			container: "body",

			header: "Default Header",

			body: "This is just some body text",

			getTemplateContext: function() {

				return {
					pageId: this.pageId,
					header: this.header,
					body: this.body
				};
			},

			initialize: function(args) {

				BaseView.prototype.initialize.call(this, args);
				
			},

			render: function() {

				BaseView.prototype.render.call(this);

				$(this.container).append(this.$el);

				return this;
			}

		});

	}
);
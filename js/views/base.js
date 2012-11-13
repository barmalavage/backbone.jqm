define('views/base',
	['jquery', 'underscore', 'backbone', 'handlebars'],
	function($, _, Backbone, Handlebars) {

		return Backbone.View.extend({
			
			templateId: "#template-page",

			pageId: "default",

			container: "body",

			render: function() {

				var src = $(this.templateId).html(),
					templ = Handlebars.compile(src),
					ctx = {
						pageId: this.pageId
					},
					rendered = templ(ctx);

				this.setElement(rendered);
				this.delegateEvents();

				$(this.container).append(this.$el);

				return this;
			}

		});

	}
);
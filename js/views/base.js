define('views/base',
	['jquery', 'underscore', 'backbone', 'handlebars'],
	function($, _, Backbone, Handlebars) {

		return Backbone.View.extend({
			
			templateId: null,

			// Override this. 
			getTemplateContext: function() {

				return {
					
				};
			},

			initialize: function(args) {

				if (_.isObject(args)) {
					_.extend(this, args);
				}
			},

			render: function() {

				var src = $(this.templateId).html(),
					templ = Handlebars.compile(src),
					ctx = this.getTemplateContext(),
					rendered = templ(ctx);

				this.setElement(rendered);
				this.delegateEvents();				

				return this;
			}

		});

	}
);
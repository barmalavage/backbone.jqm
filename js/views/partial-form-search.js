define('views/partial-form-search',
	['jquery', 'underscore', 'backbone', 'handlebars',
	'views/abstract-page'],
	function($, _, Backbone, Handlebars, AbstractPageView) {

		return AbstractPageView.extend({
			
			tagName: "form",

			id: "search",			

			events: {

				"click .form-submit"	: "onSubmitClick"		
			},

			templateId: "#form-search",			

			container: "body",			

			body: null,			

			attributes: {

				"action": "search/",
				"method": "get"
			},

			formDefaults: {

				form_zip: "12345",
				form_radius: "2.0",
				form_product: "Coca-Cola"
			},

			submitEvent: "Form_Submit",

			resetEvent: "Form_Reset",

			initialize: function(args) {

				AbstractPageView.prototype.initialize.call(this, args);
				
			},

			getTemplateContext: function() {

				return this.formDefaults;
			},

			render: function() {

				AbstractPageView.prototype.render.call(this);

				this.delegateEvents();

				return this;
			},

			onSubmitClick: function() {

				this.$el.submit();

				this.trigger(this.submitEvent);
				return false;
			},

			onResetClick: function() {


				this.trigger(this.resetEvent);
				return false;
			}

		});

	}
);
'use strict';
(function($){
	// A BackboneJs Router...
	var BackboneJsRouter = Backbone.Router.extend({
		routes: {
			// If logged out or needs to sign up; this route...
			'': 'defaultLandingIndexRoute',
			// If logged in: '': 'questListingsRoute',
			'quest-listings': 'questListingsRoute',
			'quest-display/:quest': 'questDisplayRoute'
		},
		initialize: function() {
			console.log('BackboneJsRouter init...');
		},
		defaultLandingIndexRoute: function() {
			var backboneJsIndexView = new BackboneJsIndexView;
			backboneJsIndexView.render();
		}
	});
	// A BackboneJs Model...
	var BackboneJsModel = Backbone.Model.extend({
		defaults: {
			title: 'Park Hop',
			age: 24
			// {} or [] for 'skill' data?...
		},
		initialize: function() {
			console.log('BackboneJsModel init...');
		}
	});
	var backboneJsModel = new BackboneJsModel({
		title: 'Lantern Sailing...'
	});
	// Another BackboneJs Model...
	var TestBackboneJsModel = Backbone.Model.extend({
		test: 'This is a test...',
		initialize: function() {
			console.log('TestBackboneJsModel init...');
		}
	});	
	// A BackboneJs Collection....
	var TestBackboneJsCollection = Backbone.Collection.extend({
		model: TestBackboneJsModel,
		initialize: function() {
			console.log('BackboneJsCollection init...');
		}
	});
	// Add the two Model init's to the Collection!
	// Make the Collection print out Subviews into the '#spa' element!
	// A BackboneJs View...
	var BackboneJsIndexView = Backbone.View.extend({
		tagName: 'div',
		el: '#spa',
		template: _.template($('#index-view-template').html()),
		model: backboneJsModel,
		render: function() {
			var backboneJsModel = new BackboneJsModel({
				title: 'Park Hop...'
			});
			var html = this.template({
				title: this.model.get('title')
			});
			this.$el.html(html);
		}
	});
	// Is this now relevant?...
	$(function(){
		var Application = new BackboneJsRouter;
		Backbone.history.start(); 
	});
}(jQuery));
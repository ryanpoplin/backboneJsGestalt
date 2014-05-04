'use strict';

(function($){

	var BackboneJsRouter = Backbone.Router.extend({
		routes: {
			// If logged out or needs to sign up; this route...
			'': 'defaultLandingIndexRoute',
			// If logged in: '': 'questListingsRoute',
			'quest-listings': 'questListingsRoute',
			'quest-display/:quest': 'questDisplayRoute'
		},
		initialize: function() {
		},
		defaultLandingIndexRoute: function() {
			var indexBackboneJsView = new IndexBackboneJsView({});
			indexBackboneJsView.render();
		},
		questListingsRoute: function() {
			var questListingsBackboneJsView = new questListingsBackboneJsView({});
			questListingsBackboneJsView.render();
		}
	});
	
	var IndexBackboneJsModel = Backbone.Model.extend({
		defaults: {
			indexPrimaryHeading: 'Explore More',
			indexSubPrimaryHeading: 'Real World Quests...',
			indexQuestListingsBtn: 'Go To Quests Library...',
			// {} or [] for 'skill' data?...
		},
		initialize: function() {
		}
	});

	var indexBackboneJsModel = new IndexBackboneJsModel({});
	
	// Add the two Model init's to the Collection!
	// Make the Collection print out Subviews into the '#spa' element!
	
	var IndexBackboneJsView = Backbone.View.extend({
		tagName: 'div',
		el: '#spa',
		footerSubView: '.footer-drawer-sub-view',
		template: _.template($('#index-view-template').html()),
		model: indexBackboneJsModel,
		render: function() {
			var html = this.template({
				indexPrimaryHeading: this.model.get('indexPrimaryHeading'),
				indexSubPrimaryHeading: this.model.get('indexSubPrimaryHeading'),
				indexQuestListingsBtn: this.model.get('indexQuestListingsBtn')			});
			this.$el.html(html);
			var footerDrawerSubViewView = new FooterDrawerSubViewView({});
			footerDrawerSubViewView.render();
			// .$el ...
			$(this.footerSubView).append(footerDrawerSubViewView.$el);
		},
		initialize: function() {
		}
	});

	var QuestListingsBackboneJsModel = Backbone.Model.extend({

	});

	var QuestListingsBackboneJsCollection = Backbone.Collection.extend({

	});

	var QuestListingsBackboneJsViewView = Backbone.View.extend({

	});

	var FooterDrawerSubViewModel = Backbone.Model.extend({
		defaults: {
			retractedText: 'Log In / Sign Up',
			signUpWithFacebookBtn: 'Sign Up with Facebook',
			facebookDisclaimer: 'We will never post anything on your profile with out your permission.',
			spacingText: 'OR',
			signUpWithEmailBtn: 'Sign Up with Email',
			alreadySignedUpText: 'Already signed in?',
			logInLinkText: 'Login now!'
		},
		initialize: function() {
		}
	});

	var footerDrawerSubViewModel = new FooterDrawerSubViewModel({});

	var FooterDrawerSubViewView = Backbone.View.extend({
		template: _.template($('#footer-drawer-sub-view-template').html()),
		model: footerDrawerSubViewModel,
		render: function() {
			var html = this.template({
				retractedText: this.model.get('retractedText'),
				signUpWithFacebookBtn: this.model.get('signUpWithFacebookBtn'),
				facebookDisclaimer: this.model.get('facebookDisclaimer'),
				spacingText: this.model.get('spacingText'),
				signUpWithEmailBtn: this.model.get('signUpWithEmailBtn'),
				alreadySignedUpText: this.model.get('alreadySignedUpText'),
				logInLinkText: this.model.get('logInLinkText')
			});
			this.$el.html(html);
		},
		initialize: function() {
		}
	});

	$(function(){
		var application = new BackboneJsRouter;
		Backbone.history.start(); 
	});

}(jQuery));
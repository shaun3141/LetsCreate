define(['backbone'],
    function(Backbone) {
      	return Backbone.View.extend({
		  	initialize: function(){
				
			},
			setRootScope: function(router, main_user) {
				this.app_router = router;
				this.main_user = main_user;
			},
			render: function(){
				var that = this;
				// Compile the template using underscore
				var data_to_passed = "Hello";
				$.get('/templates/home.html', function (data) {
				    var template = _.template(data);
				    var html =  template({ foo : "bar" } );
				    that.$el.html(html); 
				    
				}, 'html');
			}
		});
    }
);
define(["backbone"],
    function(Backbone) {
      	return Backbone.Model.extend({
	  		urlRoot: 'http://localhost:1337/user/create',
	        defaults: {
	            firstName: "",
	            lastName: "",
	            email: "",
	            password: "",
	            confirmPassword: ""
	        },
	        validate: function( object ){
	        	// if(firstName==null || lastName==null || email==null || password==null || confirmPassword==null ) {
	        	// 	return {error: "You have an invalid first and last name"};
	        	// }
	         //    if(attributes.firstName == "" || attributes.lastName == "" ){
	         //        return {error: "You have an invalid first and last name"};
	         //    }
	         //    if(attributes.password == attributes.confirmPassword ){
	         //        return {error: "Your passwords do not match"};
	         //    }
	         //    if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
	         //        return {error: "Your email is invalid"};
	         //    }
	         //     return {status: "New user is valid"};
	        },
	        initialize: function(){
	            console.log("New User Has Asked To Be Created");
	            //this.model({firstName:"luke",lastName:"geiken", email: "luke.geiken@gmail.com", password:"fake.1234", confirmPassword:"fake.1234"});
	        }
	    });
    }
);
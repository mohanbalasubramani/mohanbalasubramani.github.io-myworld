app.config(function($routeProvider){
	$routeProvider 
	.when('/',{
		templateUrl : 'templates/home.html',
		controller: 'homeController'
	})

	.when('/about',{
		templateUrl: 'templates/about.html',
		controller: 'aboutController'
	})

	.when('/service', {
		templateUrl: 'templates/service.html',
		controller: 'serviceController'
	})

	.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'contactController'
	})

	.when('/wiki', {
		templateUrl: 'templates/wiki.html',
		controller: 'wikiController'
	})
	.otherwise({
		redirect: '/'
	})
})
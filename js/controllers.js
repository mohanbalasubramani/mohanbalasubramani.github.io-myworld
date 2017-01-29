/*controller Aboutus*/
app.controller('aboutController',['$scope', '$resource', function($scope,$resource){

	$scope.dataAPI = $resource('data/about.json'); 
	$scope.data = $scope.dataAPI.query(function(){
		$scope.data = $scope.data[0];
		 
	});

}]);

/*Contact us*/
app.controller('contactController', ['$scope','$resource', function($scope,$resource) {
     $scope.dataAPI = $resource('data/contact.json');
     $scope.data = $scope.dataAPI.query(function(){
    	$scope.data = $scope.data[0];
    });
}]);
/*Services*/
app.controller('serviceController', ['$scope','$resource', function($scope,$resource) {
    $scope.dataAPI = $resource('data/service.json');
     $scope.data = $scope.dataAPI.query(function(){
    	$scope.data = $scope.data[0];
    });
/*tab function*/
     $scope.onClick =function(index){
     	 $scope.currenttab = index; 
     };

}]);
/*Home*/
app.controller('homeController', ['$scope', '$resource', function($scope,$resource) {
    $scope.dataAPI = $resource('data/home.json');
    $scope.data = $scope.dataAPI.query(function(){
    	$scope.data = $scope.data[0];
    });
}]);
/*wiki*/
app.controller('wikiController', ['$scope','$http', function($scope,$http){

	$scope.api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
	$scope.onSearch = function(event){
		if(event.keyCode === 13 || event.which === 13) {
                $scope.query = angular.element('#search').val();    
                angular.element('#search').val('');
                $scope.getResults();
            }
	};

	$scope.getResults = function() {
        $http.jsonp($scope.api +  $scope.query + '&callback=JSON_CALLBACK')
        .success(function(r){
            $scope.results = r.query.pages;
            console.log($scope.results);
        });
    };

    /*friends name*/
    $scope.friendslist=[];

	    $scope.add= function(){
		  $scope.friendslist.push(
		  	{
	  		inputboxkey1:$scope.inputbox1,
			inputboxkey2:$scope.inputbox2
		  });
		  /*if($scope.friendslist.length >= 5 ){
		 	 console.log($scope.friendslist.length)
			}*/

	    };
/*remove from the list*/
	    $scope.remove= function(index){
	    	console.log(index)
	    	$scope.friendslist.splice(index , 1);
	    }

/*directives*/	


}]);


app.directive('friendslist', function(){
	return{
		restrict: 'EA',
		templateUrl:'directives/friendlist.html'
	}
});
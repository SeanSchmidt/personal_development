angular.module('myApp',[]).controller('myCtrl', function($scope, $http) {
  $scope.firstName;
  $scope.lastName;
  $scope.fullName = function() {
    return $scope.firstName + " " + $scope.lastName;
  }
  $scope.changeName = function() {
    $scope.firstName = "Mary";
  }
  $scope.names = [
    {name: 'White', first: 'Christopher'},
    {name: 'Daddona', first: 'Nick'},
    {name: 'Price', first: 'Zachary'},
    {name: 'Schmidt', first: 'Sean'}
  ];
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
  $http.get("https://www.w3schools.com/angular/customers.php").then(function (response) {
      $scope.myData = response.data.records;
  });

  $scope.cars = [
    {model : "Ford Mustang", color : "blue"},
    {model : "Cheverolt Camaro", color : "red"},
    {model : "Dodge Charger", color : "black"}
  ];

  $scope.autos = {
    auto1 : {brand : "Ford", model : "Mustang", color : "blue"},
    auto2 : {brand : "Cheverolt", model : "Camaro", color : "red"},
    auto3 : {brand : "Dodge", model : "Charger", color : "black"}
  };

  $scope.events = [
    {event: "ng-blur"},
    {event: "ng-change"},
    {event: "ng-click"},
    {event: "ng-copy"},
    {event: "ng-cut"},
    {event: "ng-dblclick"},
    {event: "ng-focus"},
    {event: "ng-keydown"},
    {event: "ng-keypress"},
    {event: "ng-keyup"},
    {event: "ng-mousedown"},
    {event: "ng-mouseenter"},
    {event: "ng-mouseleave"},
    {event: "ng-mousemove"},
    {event: "ng-mouseover"},
    {event: "ng-mouseup"},
    {event: "ng-paste"}
  ];

  $scope.count = 0;

  $scope.myFunction = function() {
    $scope.count++;
  }

  $scope.showMe = false;
  $scope.myFunc = function() {
    $scope.showMe = !$scope.showMe;
  }

  $scope.myFunc2 = function(myE) {
    $scope.x = myE.clientX;
    $scope.y = myE.clientY;
  }

});

var app = angular.module('firstApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {


    $scope.repList = [];
    $scope.demList = [];

    $scope.winner = [];

    $scope.candidates = function () {
        $scope.showCan = true;
    };

    $scope.pickWinner = function() {
        var repOrDem = findWinningNumber(0,1);

        var candidateIndex = findWinningNumber(0,4);

        if (repOrDem === 0) {
            $scope.winner = $scope.repList[candidateIndex];
        }else {
            $scope.winner = $scope.demList[candidateIndex];
        }
    }

    var fetchRep = function() {

        $http.get('/getRepublicanData').then(function(response) {
            //console.log(response.data);

    $scope.repList = response.data;
    return response.data;

    })
    };
    fetchRep();

    var fetchDem = function() {

        //console.log('called fetchDem function');

        $http.get('/getDemocraticData').then(function(response) {
            //console.log(response.data);

            $scope.demList = response.data;
            return response.data;

        })
    };
    fetchDem();

    function findWinningNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


}]);



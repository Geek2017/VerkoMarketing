'use strict';


angular.module('newApp').controller('SettingsCtrl', function($firebaseArray, $scope) {

    // console.log("Settings");

    var ref = firebase.database().ref('datasets/users');

    var username, email, role, id;

    $scope.clickedUser = {};

    $scope.data = $firebaseArray(ref);
    ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            // var childKey = childSnapshot.key();
            var childData = childSnapshot.val();
            // $scope.data = childSnapshot.val();
            // console.log($scope.data);

            username = childSnapshot.child('username').val();
            // fullname = childSnapshot.child('fullname').val();
            // address = childSnapshot.child('address').val();
            // country = childSnapshot.child('country').val();
            // number = childSnapshot.child('number').val();
            email = childSnapshot.child('email').val();
            role = childSnapshot.child('role').val();

        })
    });

    $scope.selectUser = function(users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;
    };

    $scope.updateUser = function() {
        var ref2 = firebase.database().ref("datasets/users/" + id.$id);
        ref2.update({
            username: $scope.clickedUser.username,
            email: $scope.clickedUser.email,
            // country: $scope.clickedUser.country,
            // gender: $scope.clickedUser.gender,
            role: $scope.clickedUser.role
        })

    };

    $scope.deleteUser = function() {
        var ref = firebase.database().ref("datasets/users/" + id.$id);
        ref.remove();
    };


    // console.log(email);





});
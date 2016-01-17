'use strict';

// gives access to a module ngRoute that we're using in our own module
// creates a new module for view1
angular.module('myApp.view1', ['ngRoute'])

// .config allows declaring a controller without using ng-controller in the view
// $routeProvider is a module - declare view template used when pointing to a particular path
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function(scope) {

  var startingList = [];

  // sets starting notesList in local storage
  if (localStorage.getItem('notes') == null) {
    localStorage.setItem('notes', JSON.stringify(startingList));
  }

  // Gets notesList from local storage
  scope.notesList = JSON.parse(localStorage.getItem('notes'));

  // adds a new note to the notesList in local storage
  scope.addNote = function (note) {

    scope.notesList.push({
      Note: {
        title: scope.noteTitle,
        body: scope.noteBody
      }
    });

    localStorage.setItem('notes', JSON.stringify(scope.notesList));

    // Resets form fields to empty
    scope.noteTitle = '';
    scope.noteBody = '';

  };

  // deletes note from the notesList in local storage
  scope.deleteNote = function (index) {

    // removes note from notesList
    scope.notesList.splice(index);
    localStorage.removeItem(index);

    // resets notesList in local storage
    localStorage.setItem('notes', JSON.stringify(scope.notesList));

  };

}]);

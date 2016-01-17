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

  var startingList = [
    {
      Note: {
        title: "Note 1",
        body: "Here is note 1."
      },
    },
    {
      Note: {
        title: "Note 2",
        body: "Here is note 2."
      }
    },
    {
      Note: {
        title: "Note 3",
        body: "Here is note 3."
      }
    }
  ];

  localStorage.setItem('notes', JSON.stringify(startingList)),

  scope.notesList = JSON.parse(localStorage.getItem('notes')),

  console.log(JSON.parse(localStorage.getItem('notes'))),

  scope.addNote = function (note) {
    localStorage.setItem('note', scope.note);
    scope.notesList.push({
      Note: {
        title: scope.noteTitle,
        body: scope.noteBody
      }
    });
    localStorage.setItem('notes', scope.NotesList);
    scope.noteTitle = '';
    scope.noteBody = '';
  }
}]);

'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:noteId', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$routeParams', '$location', function(scope, routeParams, location) {

  // Set noteId based on parameter passed in through the url
  scope.noteId = routeParams.noteId;

  // Get list of notes and find note based on noteID
  scope.notesList = JSON.parse(localStorage.getItem('notes'));
  scope.note = scope.notesList[scope.noteId];

  // Set the values in the form for the note
  scope.noteTitle = scope.note.Note.title;
  scope.noteBody = scope.note.Note.body;

  // Update note with new values and redirect to notes index page
  scope.updateNote = function (note, noteId) {

    // Grab new values for title and body
    note.Note.title = scope.noteTitle;
    note.Note.body = scope.noteBody;

    // Set new values for note object in local storage
    scope.notesList = (JSON.parse(localStorage.getItem('notes')));
    scope.notesList[scope.noteId] = note;
    console.log(scope.notesList);
    localStorage.setItem('notes', JSON.stringify(scope.notesList));

    // Redirect to notes index
    location.path('/view1');

  };
}]);

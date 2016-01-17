'use strict';

describe('myApp.note module', function() {

  beforeEach(module('myApp.note'));

  describe('note controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var noteCtrl = $controller('noteCtrl');
      expect(noteCtrl).toBeDefined();
    }));

  });
});
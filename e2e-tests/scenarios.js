'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /notes when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/notes");
  });


  describe('notes', function() {

    beforeEach(function() {
      browser.get('index.html#/notes');
    });


    it('should render notes when user navigates to /notes', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('note', function() {

    beforeEach(function() {
      browser.get('index.html#/note');
    });


    it('should render note when user navigates to /note', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

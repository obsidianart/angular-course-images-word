/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.picture1 = element(by.css('#picture1'))
  this.picture2 = element(by.css('#picture2'))
  this.picture3 = element(by.css('#picture3'))
  this.picture4 = element(by.css('#picture4'))

  this.getButtonByLetter = (letter) => element(by.buttonText('Save'));

  this.solutionInput = element(by.model('main.input.guess'))
  this.insertSolution = solution => {
    solution
      .split('')
      .forEach((letter) => {
        var letterButton = element(by.css(`[data-letter="${letter}"]`))
        letterButton.click()
      })
  }

  this.nextLevelButton = ()=> element(by.css('[ng-click="main.nextLevel()"]'))
  // this.jumbEl = element(by.css('.jumbotron'));
  // this.h1El = this.jumbEl.element(by.css('h1'));
  // this.imgEl = this.jumbEl.element(by.css('img'));
  // this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in main.awesomeThings'));
}

module.exports = new MainPage()

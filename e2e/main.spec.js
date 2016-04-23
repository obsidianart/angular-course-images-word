'use strict'

describe('The main view', function () {
  var page

  beforeEach(function () {
    browser.get('/index.html')
    page = require('./main.po')
  })

  it('should show 4 pictures', function() {
    expect(page.picture1.getAttribute('src')).toMatch('level1/1.jpg')
    expect(page.picture2.getAttribute('src')).toMatch('level1/2.jpg')
    expect(page.picture3.getAttribute('src')).toMatch('level1/3.jpg')
    expect(page.picture4.getAttribute('src')).toMatch('level1/4.jpg')
  })

  describe('When inserting the right solution',function(){
    beforeEach(function () {
      console.log("before inserting")
      page.insertSolution('sand')
    })
  

    it('should show the next level button', function () {
      expect(page.nextLevelButton().isDisplayed()).toBe(true)
    })

    describe('And clicking the next button',function(){
      beforeEach(function() {
        page.nextLevelButton().click()
      })

      it('should show the next level button', function () {
        expect(page.picture1.getAttribute('src')).toMatch('level2/1.jpg')
        expect(page.picture2.getAttribute('src')).toMatch('level2/2.jpg')
        expect(page.picture3.getAttribute('src')).toMatch('level2/3.jpg')
        expect(page.picture4.getAttribute('src')).toMatch('level2/4.jpg')
      })
    })
  })

})

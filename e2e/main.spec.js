'use strict'

let page

let checkImagesForLevel = level => {
  expect(page.picture1.getAttribute('src')).toMatch(`${level}/1.jpg`)
  expect(page.picture2.getAttribute('src')).toMatch(`${level}/2.jpg`)
  expect(page.picture3.getAttribute('src')).toMatch(`${level}/3.jpg`)
  expect(page.picture4.getAttribute('src')).toMatch(`${level}/4.jpg`)
}

describe('The main view', function () {
  beforeEach(function () {
    browser.get('/index.html')
    page = require('./main.po')
  })

  it('should show 4 pictures', function() {
    checkImagesForLevel('level1')
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

      it('should show the images for level 2', function () {
        checkImagesForLevel('level2')
      })
    })
  })

})

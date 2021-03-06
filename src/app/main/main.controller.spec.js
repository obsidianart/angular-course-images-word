describe('Main Game controller', () => {
  let vm
  let $scope
  const START_TIME = 1461421000000
  const LEVEL_1_SOLUTION = 'sand'

  beforeEach(angular.mock.module('angularCourseImagesWord'))

  beforeEach(inject(($controller, $rootScope, $state, toastr, GameLevels, $q) => {
    //spyOn(webDevTec, 'getTec').and.returnValue([{}, {}, {}, {}, {}])
    spyOn(toastr, 'info').and.callThrough()
    spyOn($state, 'go').and.callThrough()
    spyOn(Date, "now").and.returnValue(START_TIME);
    spyOn(GameLevels, "getLevel").and.callFake(function(){
      return $q.when({
        name: 'level1',
        correctSolution: 'sand',
        letters: 'esdawrnrgdop',
        next:2
      })
    })

    $scope = $rootScope.$new()

    vm = $controller('MainController',{
      $scope: $scope
    })

    $scope.$digest() //This digest allow the first promise call (the one which gets the level) to be resolved
  }))

  it('should start at level 1', () => {
    expect(vm.level.name).toEqual('level1')
  })

  it('should start the timer', () => {
    expect(vm.startTime).toEqual(START_TIME)
  })

  it('should set isCorrectGuess to false', () => {
    expect(vm.isCorrectGuess).toEqual(false)
  })

  describe('when inserting the correct answer', ()=>{
    beforeEach(()=>{
      vm.input.guess = LEVEL_1_SOLUTION
      $scope.$digest()
      //$scope.$apply(`main.input.guess = "${LEVEL_1_SOLUTION}"`) //Alternative solution
    })

    it('should set isCorrectGuess to true', () => {
      expect(vm.isCorrectGuess).toEqual(true)
    })

    describe('And calling the nextLevel function', ()=>{
      beforeEach(()=>{
        vm.nextLevel()
      })

      it('should go to the next level', inject(($state) => {
        expect($state.go).toHaveBeenCalledWith('home', {level:2})
        
      }))
    })

    
  })


  // it('should define animate class after delaying timeout', inject($timeout => {
  //   $timeout.flush()
  //   expect(vm.classAnimation).toEqual('rubberBand')
  // }))

  // it('should show a Toastr info and stop animation when invoke showToastr()', inject(toastr => {
  //   vm.showToastr()
  //   expect(toastr.info).toHaveBeenCalled()
  //   expect(vm.classAnimation).toEqual('')
  // }))

  // it('should define more than 5 awesome things', () => {
  //   expect(angular.isArray(vm.awesomeThings)).toBeTruthy()
  //   expect(vm.awesomeThings.length === 5).toBeTruthy()
  // })
})

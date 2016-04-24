export class MainController {
  constructor ($scope, $state, $http, $stateParams, GameLevels, toastr) {
    'ngInject';
    this.toastr = toastr
    this.$state = $state
    this.GameLevelsService = GameLevels

    this.level = {}
    this.input = {
      guess: ''
    }

    this.setUpLevel($stateParams.level)

    $scope.$watch(
      () => this.input.guess,
      guess => {
        if (this.isCorrectSolution(guess))
          this.passLevel()
      }
    )
  }

  isCorrectSolution(guess) {
    return guess == this.correctSolution
  }

  insertLetter(letter) {
    if (letter.used) return;
    if (this.input.guess.length >= this.correctSolution.length) return;

    letter.used = true
    this.input.guess += letter.char
  }

  rigthPadSpacesGuess() {
    if (!this.correctSolution) return ''

    let paddedGuess = this.input.guess
    while(paddedGuess.length < this.correctSolution.length)
      paddedGuess += '\u00A0'
    return paddedGuess
  }

  setUpLevel(level) {
    this.getLevel(level).then(()=>{
      this.input.guess = ''
      this.isCorrectGuess = false
      this.startTime = Date.now()
      this.letters = this.level
                         .letters
                         .split('')
                         .map(char => ({char, used:false}))
      this.correctSolution = this.level.correctSolution
    })
  }

  //Set the variable for the end of one level (winning screen etc)
  passLevel(){
    this.isCorrectGuess = true

    const MS_IN_1_SECONDS = 1000
    let elapsed = Date.now() - this.startTime
    let toSeconds = ms => (ms/MS_IN_1_SECONDS).toFixed(1)

    this.toastr.info(`You passed level ${this.level.name} in ${toSeconds(elapsed)} seconds`)
  }

  nextLevel() {
    if(!this.isCorrectSolution(this.input.guess)) return;

    if (this.level.next) {
      this.$state.go('home',{level:this.level.next})
    } else {
      this.$state.go('gameEnded')
    }
  }

  getLevel(level) {
    return this.GameLevelsService
               .getLevel(level)
               .then((level)=>{
                 this.level = level
               })
  }

}

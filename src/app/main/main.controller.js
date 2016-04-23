export class MainController {
  constructor ($scope, $state, toastr) {
    'ngInject';
    this.toastr = toastr
    this.$state = $state
    this.currentLevel = 1
    this.input = {
      guess: ''
    }
    this.startLevel()

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
    let paddedGuess = this.input.guess
    while(paddedGuess.length < this.correctSolution.length)
      paddedGuess += '\u00A0'
    return paddedGuess
  }

  //Reset variables to start a new level
  startLevel() {
    this.input.guess = ''
    this.isCorrectGuess = false
    this.startTime = Date.now()
    this.letters = this.getCurrentLevel()
                       .letters
                       .split('')
                       .map(char => {
                          return {char, used:false}
                        })
    this.correctSolution = this.getCurrentLevel().correctSolution
  }

  restartLevel(){
    return this.startLevel()
  }

  //Set the variable for the end of one level (winning screen etc)
  passLevel(){
    const MS_IN_1_SECONDS = 1000
    let elapsed = Date.now() - this.startTime
    let toSeconds = ms => (ms/MS_IN_1_SECONDS).toFixed(1)

    this.toastr.info("You passed level 1 in " + toSeconds(elapsed) + "s")
    this.isCorrectGuess = true
  }

  nextLevel() {
    if(!this.isCorrectSolution(this.input.guess)) return;
    
    this.currentLevel++
    if (this.getCurrentLevel()) {
      this.startLevel()
    } else {
      this.endGame()
    }
  }

  endGame() {
    this.$state.go('gameEnded')
  }

  getCurrentLevel() {
    const levels = {
      level1: {
        correctSolution: 'sand',
        letters: 'esdawrnrgdop'
      },
      level2: {
        correctSolution: 'fire',
        letters: 'nmqefdwrnrig'
      }
    }
    let newLevel = `level${this.currentLevel}`
    if (newLevel in levels) {
      return levels[newLevel]
    } else {
      return false
    }
  }

}

export class MainController {
  constructor ($scope, $timeout, $state, toastr) {
    'ngInject';
    this.toastr = toastr
    this.$state = $state
    this.currentLevel = 1
    this.startLevel()

    $scope.$watch("main.guess", guess => {
      if (guess == this.correctSolution)
        this.passLevel()
    })
  }

  //Reset variables to start a new level
  startLevel() {
    this.guess = ''
    this.isCorrectGuess = false
    this.startTime = Date.now()
    this.correctSolution = this.getCurrentLevel().correctSolution
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
        correctSolution: 'sand'
      },
      level2: {
        correctSolution: 'fire'
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

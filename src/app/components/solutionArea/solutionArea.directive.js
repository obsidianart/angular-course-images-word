export function solutionAreaDirective() {
  'ngInject'

  let directive = {
    restrict: 'E',
    scope: {
      solution: '=',
      letters: '=',
      guess: '='
    },
    templateUrl: 'app/components/solutionArea/solutionArea.html',
    controller: SolutionAreaController,
    controllerAs: 'vm',
    bindToController: true
  }

  return directive
}

class SolutionAreaController {
  constructor ($scope) {
    'ngInject'

    this.$scope = $scope
    this.parseLetters() 
  }

  parseLetters (letters) {
    this.parsedLetters = this.letters.split('').map(char => ({char, used:false}))
  }

  rigthPadSpacesGuess() {
    if (!this.solution) return ''

    let paddedGuess = this.guess
    while(paddedGuess.length < this.solution.length)
      paddedGuess += '\u00A0'
    return paddedGuess
  }

  insertLetter(letter) {
    if (letter.used) return;
    if (this.guess.length >= this.solution.length) return;

    letter.used = true
    this.guess += letter.char
  }

  restartLevel(){
    this.parseLetters()
    this.$scope.$emit('restart')
  }
}
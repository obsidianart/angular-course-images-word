export class MainController {
  constructor ($scope, $timeout, webDevTec, toastr) {
    'ngInject';

    this.guess = ''
    this.isCorrectSolution = false
    this.startTime = Date.now()

    $scope.$watch("main.guess", (newValue, oldValue)=>{
      let elapsed = ((Date.now() - this.startTime)/ 1000).toFixed(1)
      if (newValue == 'sabbia') {
        this.isCorrectSolution = true
        toastr.info("You passed level 1 in " + elapsed + "s")
      }
    })

    // this.awesomeThings = [];
    // this.classAnimation = '';
    // this.creationDate = 1461405922599;
    // this.toastr = toastr;

    // this.activate($timeout, webDevTec);
  }

  // activate($timeout, webDevTec) {
  //   this.getWebDevTec(webDevTec);
  //   $timeout(() => {
  //     this.classAnimation = 'rubberBand';
  //   }, 4000);
  // }

  // getWebDevTec(webDevTec) {
  //   this.awesomeThings = webDevTec.getTec();

  //   angular.forEach(this.awesomeThings, (awesomeThing) => {
  //     awesomeThing.rank = Math.random();
  //   });
  // }

  // showToastr() {
  //   this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
  //   this.classAnimation = '';
  // }
}

export class MainController {
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    this.guess = ''
    this.isCorrectSolution = ()=> this.guess === 'sabbia'
    
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

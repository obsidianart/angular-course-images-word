export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject'
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('gameEnded', {
      url: '/game-ended',
      templateUrl: 'app/gameEnded/gameEnded.html',
      controller: 'GameEndedController',
      controllerAs: 'gameEnded'
    })

  $urlRouterProvider.otherwise('/')
}

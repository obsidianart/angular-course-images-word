export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject'
  $stateProvider
    .state('home', {
      url: '/{level:[0-9]{1,2}}',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      params: {
        level: {
          value:'1'
        }
      }
    })
    .state('gameEnded', {
      url: '/game-ended',
      templateUrl: 'app/gameEnded/gameEnded.html',
      controller: 'GameEndedController',
      controllerAs: 'gameEnded'
    })

  $urlRouterProvider.otherwise('/')
}

export class GameLevelsService {
  constructor ($log, $http, $q) {
    'ngInject'

    this.$log = $log
    this.$http = $http
    this.$q = $q
    this.apiHost = 'http://localhost:3000/api/level'
  }

  getLevel(level=1) {
    return this.getLevelStatic(level)
    //If you are using the backend uncomment the following
    // return this
    //   .$http
    //   .get(`${this.apiHost }/${level}`)
    //   .then(response => {
    //     return response.data
    //   })
    //   .catch(response => {
    //     this.$log.error('XHR Failed for Levels. ', response)
    //   })
  }

  getLevelStatic(level) {
    const LEVELS=  [{
        name: 'level1',
        correctSolution: 'sand',
        letters: 'esdawrnrgdop',
        next:2
      },
      {
        name: 'level2',
        correctSolution: 'fire',
        letters: 'nmqefdwrnrig',
        next:false
      }]
    var defer = this.$q.defer()
    defer.resolve(Object.assign({},LEVELS[level-1]))
    return defer.promise
  }
}

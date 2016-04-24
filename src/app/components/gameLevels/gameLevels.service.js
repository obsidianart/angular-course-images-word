export class GameLevelsService {
  constructor ($log, $http) {
    'ngInject'

    this.$log = $log
    this.$http = $http
    this.apiHost = 'http://localhost:3000/api/level'
  }

  getLevel(level=1) {
    console.log("getting level")
    return this
      .$http
      .get(`${this.apiHost }/${level}`)
      .then(response => {
        return response.data
      })
      .catch(response => {
        this.$log.error('XHR Failed for Levels.')
      })
  }
}

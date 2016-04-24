/* global malarkey:false, moment:false */

import { config } from './index.config'
import { routerConfig } from './index.route'
import { runBlock } from './index.run'
import { MainController } from './main/main.controller'
import { GameEndedController } from './gameEnded/gameEnded.controller'
import { GameLevelsService } from '../app/components/gameLevels/gameLevels.service'
import { solutionAreaDirective } from '../app/components/solutionArea/solutionArea.directive'

angular.module('angularCourseImagesWord', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('GameLevels', GameLevelsService)
  .directive('solutionArea', solutionAreaDirective)
  .controller('MainController', MainController)
  .controller('GameEndedController', GameEndedController)

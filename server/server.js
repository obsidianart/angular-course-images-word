'use strict'

// call the packages we need
var express    = require('express')        // call express
var app        = express()                 // define our app using express
var bodyParser = require('body-parser')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 9000        // set our port


const GAME_LEVELS = [
  {
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
  }
]

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router()              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/level/:levelNumber', function(req, res) {
	let requestedLevel = parseInt(req.params.levelNumber)
	console.log("Requesting level ", requestedLevel)

	if (requestedLevel <= 0 || isNaN(requestedLevel)) {
    	return res.status(400).json({error: "levels start from 1 and are numeric"})
    }

    if (requestedLevel > GAME_LEVELS.length) {
    	return res.status(400).json({error: "level doesn't exist"})
    }

    res.json(GAME_LEVELS[requestedLevel - 1])   
})

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(port)
console.log('Magic happens on port ' + port)
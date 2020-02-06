const express = require('express')
const router = express.Router()
const log = require('simple-node-logger').createSimpleLogger()

router.get('/timeout/:timeout', (request, response) => {
  let timeoutMS = request.params.timeout
  setTimeout(function(){
    response.status(200).send(`{"status": "success", "data": "Response timeout ${timeoutMS}"}`)
  }, timeoutMS);
})

router.get('/499', (request, response) => {
  try {
    throw new Error('499 Error');
  } catch (ex) {
    response.status(499).send(`{"status": "error", "data": "499 Error!"}`)
    log.info('app 499 failure at ', new Date().toJSON());
  }
})

router.get('/500', (request, response) => {
  try {
    throw new Error('500 Error');
  } catch (ex) {
    response.status(500).send(`{"status": "error", "data": "500 Error!"}`)
    log.info('app 500 failure at ', new Date().toJSON());
  }
})

router.get('/504', (request, response) => {
  try {
    throw new Error('504 Error');
  } catch (ex) {
    response.status(504).send(`{"status": "error", "data": "504 Error!"}`)
    log.info('app 504 failure at ', new Date().toJSON());
  }
})

router.get('/largeresp', (request, response) => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var iterations = parseInt(Math.floor(Math.random() * 15) + 1);

  for (let i=0, len=possible.length; i<len; i++ ){
    text += possible + Math.random()
  }

  for (let i = 0; i < iterations; i++) {
    text += text
  }

  response.status(200).send(`{"status": "success", "data": "${text}"}`)
  log.info('largeresp at ', new Date().toJSON());
})

module.exports = router;

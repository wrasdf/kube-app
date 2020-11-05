const express = require('express')
const router = express.Router()
const log = require('simple-node-logger').createSimpleLogger()

router.get('/', (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.send(`
    <!doctype html>
    <html lang="">
    <head>
      <meta charset="utf-8">
      <title>Kube Demo App With Metrics</title>
    </head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style> body{padding: 20px} </style>
    <body>
      <h2> Kube Demo App With Metrics ------- ! </h2>
      <h2> Version v0.1.15 </h2>
      <ul>
        <li> <b>GET</b>      /metrics               --> will return prometheus nodejs metrics </li>
        <li> <b>GET</b>      /health                --> will retrun healthy status </li>
        <li> <b>GET</b>      /api/v1/500            --> will return 500 error </li>
        <li> <b>GET</b>      /api/v1/504            --> will return 504 error </li>
        <li> <b>GET</b>      /api/v1/499            --> will return 499 error </li>
        <li> <b>GET</b>      /api/v1/largeresp      --> will return largeresp </li>
        <li> <b>GET</b>      /s3/v1/list            --> list all the s3 bucket </li>
        <li> <b>POST</b>     /s3/v1/<bucket>        --> create s3 bucket in AWS </li>
        <li> <b>PUT</b>      /s3/v1/<bucket>/<key>  --> create key in s3 bucket </li>
        <li> <b>DELETE</b>   /s3/v1/<bucket>/<key>  --> delete key in s3 bucket </li>
        <li> <b>DELETE</b>   /s3/v1/<bucket>        --> delete s3 bucket in AWS </li>
      </ul>
    </body>
    </html>
    `)
  log.info('index page accepted at ', new Date().toJSON());
})

router.get('/health', (request, response) => {
  response.send('OK!');
  log.info('app healthy at ', new Date().toJSON());
})

module.exports = router;

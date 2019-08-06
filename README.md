### What's the app for testing kubernetes
- APIS in this app
  - GET     /metrics                --> will return prometheus nodejs metrics
  - GET     /health                 --> will retrun healthy status
  - GET     /api/v1/500             --> will return 500 error
  - GET     /api/v1/504             --> will return 504 error
  - GET     /api/v1/499             --> will return 499 error
  - GET     /api/v1/largeresp       --> will return largeresp
  - GET     /s3/v1/list             --> list all the s3 bucket
  - POST    /s3/v1/<bucket>         --> create s3 bucket in AWS
  - PUT     /s3/v1/<bucket>/<key>   --> create key in s3 bucket
  - DELETE  /s3/v1/<bucket>/<key>   --> delete key in s3 bucket
  - DELETE  /s3/v1/<bucket>         --> delete s3 bucket in AWS

### Shortcuts
- $ make sh
- $ make run
- $ make push-v0.1.9

#### Reference
- https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
- https://dev.to/blizzerand/deploying-an-express-application---6-best-practices-for-improving-security-5hmn
- https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/
- https://expressjs.com/en/advanced/best-practice-performance.html

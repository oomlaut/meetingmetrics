# Meeting Metrics

A Node.js app using [Express 4](http://expressjs.com/).

This application support the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

[![endorse](https://api.coderwall.com/oomlaut/endorsecount.png)](https://coderwall.com/oomlaut)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

    $ heroku git:clone -a meetingmetrics
    $ cd meetingmetrics
    $ npm install
    $ grunt

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

    $ heroku create
    $ git push heroku master
    $ heroku open

## Configuration

In order to enable server-side configuration via `bower` and `grunt`

    heroku config:add BUILDPACK_URL=https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git
    heroku labs:enable user-env-compile
    heroku config:set NODE_ENV=production

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

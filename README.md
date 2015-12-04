# ci-relay

> Tiny CI status aggregation service built on top of [ci-adapter][] and [ci-router][]

## Install

To install the required dependencies, you need `npm`:

```console
$ npm install
```

## Setup

Have a look at the [`config-example.json`](config-example.json) file. Copy it
to `config.json` and replace the defaults with something meaningful.

The default example configuration serves the CI status of:

- [Buildbot](http://buildbot.buildbot.net) on `/buildbot`
- [Jenkins](https://ci.jenkins-ci.org) on `/jenkins`
- [Travis-CI](https://travis-ci.org/travis-ci) on `/travis`

For detailed information on available adapter options refer to [ci-adapte][].


## Start

Once the configuration and dependencies are in place, just type:

```console
$ npm start
```

That's all!

[ci-adapter]: https://github.com/jpommerening/ci-adapter
[ci-router]: https://github.com/jpommerening/ci-router

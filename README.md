# Good Night Couch Side
## Table of contents
- [Installation](#installation)
- [Development](#development)
- [Code formatting and linting](#code-formatting-and-linting)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

## Installation

Before you get started make sure to have your local couchdb admin credentials (the ones that you need to log into Fauxton CouchDB at http://localhost:5984/_utils/#login) in place. For convenience create the file .env in the project root and add your credentials as COUCH_URL=http://admin:password@localhost:5984 there.

Clone the repo and run 

```bash
npm install
```

Run the app via
```bash
npm start
```
and have fun on [http://localhost:3000](http://localhost:3000).


## Development

How to name your supporting branch prefixes?   
- `feature/`  
- `bugfix/`  
- `release/`  
- `hotfix/`  
- `support/`   
Version tag prefix? [] 

### Node Environments and gncs Service URLs

- development: http://localhost:3000
- staging: https://stage.gncs.app
- production: https://gncs.app

### General dev guidelines

To report a bug or request a feature, please file a [new issue](https://github.com/GoodNightCouchSide/gncs/issues/new/choose). Please check current issues to see if someone has filed something similar.
To submit a patch, please create a [create a pull request](https://github.com/GoodNightCouchSide/gncs/pulls).

Make sure to use [Commit Message Conventions (ACMC)](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

## Code formatting and linting

To run the code formatting tool:

```bash
$ npm run format
```

This will cause [ESLint](https://eslint.org/) to automatically fix any code correctness issues.

To run the linting checks:

```bash
$ npm run lint
```

This will not attempt any automatic fixes, which is preferable during test runs.

## Testing

We are planning to test our app with Jest

## Deployment
## License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
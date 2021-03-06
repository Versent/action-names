# Standard Action Names for Flux

[ ![Codeship Status for Versent/action-names](https://codeship.com/projects/5a75b0f0-284e-0133-aab6-66f03b379c4a/status?branch=master)](https://codeship.com/projects/97650)

## Install

```
npm install action-names --save-dev
```

## Usage

```
var actionNames = require('action-names');

var names = actionNames('users');
```

`names` will contain an object:

```
{
  USERS_FETCH_START:   'USERS_FETCH_START',
  USERS_FETCH_SUCCESS: 'USERS_FETCH_SUCCESS',
  USERS_FETCH_ERROR:   'USERS_FETCH_ERROR',

  USERS_UPDATE_START:   'USERS_UPDATE_START',
  USERS_UPDATE_SUCCESS: 'USERS_UPDATE_SUCCESS',
  USERS_UPDATE_ERROR:   'USERS_UPDATE_ERROR',

  USERS_CREATE_START:   'USERS_CREATE_START',
  USERS_CREATE_SUCCESS: 'USERS_CREATE_SUCCESS',
  USERS_CREATE_ERROR:   'USERS_CREATE_ERROR',

  USERS_DELETE_START:   'USERS_DELETE_START',
  USERS_DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  USERS_DELETE_ERROR:   'USERS_DELETE_ERROR',

  // Object also contains aliases
  fetchStart:   'USERS_FETCH_START',
  fetchSuccess: 'USERS_FETCH_SUCCESS',
  fetchError:   'USERS_FETCH_ERROR',

  updateStart:   'USERS_UPDATE_START',
  updateSuccess: 'USERS_UPDATE_SUCCESS',
  updateError:   'USERS_UPDATE_ERROR',

  createStart:   'USERS_CREATE_START',
  createSuccess: 'USERS_CREATE_SUCCESS',
  createError:   'USERS_CREATE_ERROR',

  deleteStart:   'USERS_DELETE_START',
  deleteSuccess: 'USERS_DELETE_SUCCESS',
  deleteError:   'USERS_DELETE_ERROR',
}
```

## Config

This modules takes a second argument:

```js
var names = actionNames('users', config);
```

`config` is an object with the following options:

`config.addAlias` [true] adds the action aliases e.g. `fetchStart`

## Test

```
npm i
npm test
```

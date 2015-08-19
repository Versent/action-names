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
}
```

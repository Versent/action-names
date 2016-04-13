var test        = require('ava');
var actionNames = require('../index.js');

test('returns the action names', function(t) {

  var names = actionNames('users');

  t.is(names.USERS_FETCH_START,   'USERS_FETCH_START');
  t.is(names.USERS_FETCH_SUCCESS, 'USERS_FETCH_SUCCESS');
  t.is(names.USERS_FETCH_ERROR,   'USERS_FETCH_ERROR');

  t.is(names.USERS_UPDATE_START,   'USERS_UPDATE_START');
  t.is(names.USERS_UPDATE_SUCCESS, 'USERS_UPDATE_SUCCESS');
  t.is(names.USERS_UPDATE_ERROR,   'USERS_UPDATE_ERROR');

  t.is(names.USERS_CREATE_START,   'USERS_CREATE_START');
  t.is(names.USERS_CREATE_SUCCESS, 'USERS_CREATE_SUCCESS');
  t.is(names.USERS_CREATE_ERROR,   'USERS_CREATE_ERROR');

  t.is(names.USERS_DELETE_START,   'USERS_DELETE_START');
  t.is(names.USERS_DELETE_SUCCESS, 'USERS_DELETE_SUCCESS');
  t.is(names.USERS_DELETE_ERROR,   'USERS_DELETE_ERROR');

});

test('returns aliases', function(t) {
  var names = actionNames('users');

  t.is(names.fetchStart,   'USERS_FETCH_START');
  t.is(names.fetchSuccess, 'USERS_FETCH_SUCCESS');
  t.is(names.fetchError,   'USERS_FETCH_ERROR');

  t.is(names.updateStart,   'USERS_UPDATE_START');
  t.is(names.updateSuccess, 'USERS_UPDATE_SUCCESS');
  t.is(names.updateError,   'USERS_UPDATE_ERROR');

  t.is(names.createStart,   'USERS_CREATE_START');
  t.is(names.createSuccess, 'USERS_CREATE_SUCCESS');
  t.is(names.createError,   'USERS_CREATE_ERROR');

  t.is(names.deleteStart,   'USERS_DELETE_START');
  t.is(names.deleteSuccess, 'USERS_DELETE_SUCCESS');
  t.is(names.deleteError,   'USERS_DELETE_ERROR');
});

test('doesnt create aliases when addAlias=false', function(t) {
  var names = actionNames('users', {addAlias: false});

  t.falsy(names.fetchStart);  
});

test('throws if unexpected', function(t) {

  function withValid() {
    actionNames('users');
  }
  t.notThrows(withValid, 'doesnt throw');

  function withVoid() {
    actionNames(void 0);
  }
  t.throws(withVoid, /Expected resource/,'throws if undefined');

  function withEmpty() {
    actionNames('');
  }
  t.throws(withEmpty, /Expected resource/, 'throws if empty');

  function withEmpty2() {
    actionNames('  ');
  }
  t.throws(withEmpty2, /Expected resource/, 'throws if empty');
});


test('it handles different cases', function(t) {
  var names;

  names = actionNames('superUsers');
  t.is(names.fetchStart, 'SUPER_USERS_FETCH_START');

  names = actionNames('super-users');
  t.is(names.fetchStart, 'SUPER_USERS_FETCH_START');

  names = actionNames('super_users');
  t.is(names.fetchStart, 'SUPER_USERS_FETCH_START');

  names = actionNames('super users');
  t.is(names.fetchStart, 'SUPER_USERS_FETCH_START');
});

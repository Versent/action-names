var test        = require('tape-catch');
var actionNames = require('../index.js');

test('returns the action names', function(t) {

  var names = actionNames('users');

  t.equal(names.USERS_FETCH_START,   'USERS_FETCH_START');
  t.equal(names.USERS_FETCH_SUCCESS, 'USERS_FETCH_SUCCESS');
  t.equal(names.USERS_FETCH_ERROR,   'USERS_FETCH_ERROR');

  t.equal(names.USERS_UPDATE_START,   'USERS_UPDATE_START');
  t.equal(names.USERS_UPDATE_SUCCESS, 'USERS_UPDATE_SUCCESS');
  t.equal(names.USERS_UPDATE_ERROR,   'USERS_UPDATE_ERROR');

  t.equal(names.USERS_CREATE_START,   'USERS_CREATE_START');
  t.equal(names.USERS_CREATE_SUCCESS, 'USERS_CREATE_SUCCESS');
  t.equal(names.USERS_CREATE_ERROR,   'USERS_CREATE_ERROR');

  t.equal(names.USERS_DELETE_START,   'USERS_DELETE_START');
  t.equal(names.USERS_DELETE_SUCCESS, 'USERS_DELETE_SUCCESS');
  t.equal(names.USERS_DELETE_ERROR,   'USERS_DELETE_ERROR');

  t.end();

});

test('returns aliases', function(t) {
  var names = actionNames('users');

  t.equal(names.fetchStart,   'USERS_FETCH_START');
  t.equal(names.fetchSuccess, 'USERS_FETCH_SUCCESS');
  t.equal(names.fetchError,   'USERS_FETCH_ERROR');

  t.equal(names.updateStart,   'USERS_UPDATE_START');
  t.equal(names.updateSuccess, 'USERS_UPDATE_SUCCESS');
  t.equal(names.updateError,   'USERS_UPDATE_ERROR');

  t.equal(names.createStart,   'USERS_CREATE_START');
  t.equal(names.createSuccess, 'USERS_CREATE_SUCCESS');
  t.equal(names.createError,   'USERS_CREATE_ERROR');

  t.equal(names.deleteStart,   'USERS_DELETE_START');
  t.equal(names.deleteSuccess, 'USERS_DELETE_SUCCESS');
  t.equal(names.deleteError,   'USERS_DELETE_ERROR');

  t.end();
});

test('throws if unexpected', function(t) {

  function withValid() {
    actionNames('users');
  }
  t.doesNotThrow(withValid, 'doesnt throw');

  function withVoid() {
    actionNames(void 0);
  }
  t.throws(withVoid, 'throws if undefined');

  function withEmpty() {
    actionNames('');
  }
  t.throws(withEmpty, 'throws if empty');

  function withEmpty2() {
    actionNames('  ');
  }
  t.throws(withEmpty2, 'throws if empty');

  t.end();
});


test('it handles different cases', function(t) {
  var names;

  names = actionNames('superUsers');
  t.equal(names.fetchStart, 'SUPER_USERS_FETCH_START');

  names = actionNames('super-users');
  t.equal(names.fetchStart, 'SUPER_USERS_FETCH_START');

  names = actionNames('super_users');
  t.equal(names.fetchStart, 'SUPER_USERS_FETCH_START');

  names = actionNames('super users');
  t.equal(names.fetchStart, 'SUPER_USERS_FETCH_START');

  t.end();
});

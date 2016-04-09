var snakeCase = require('lodash.snakecase');
var trim      = require('lodash.trim');

function addGroup(resource, actionTypes, group, addAlias) {
  var upperResource = snakeCase(resource).toUpperCase();
  var upperGroup    = group.toUpperCase();

  var start        = upperResource + '_' + upperGroup + '_START';
  var success      = upperResource + '_' + upperGroup + '_SUCCESS';
  var error        = upperResource + '_' + upperGroup + '_ERROR';
  var startAlias   = group + 'Start';
  var successAlias = group + 'Success';
  var errorAlias   = group + 'Error';

  actionTypes[start]   = start;
  actionTypes[success] = success;
  actionTypes[error]   = error;
  
  if (addAlias === true) {
    actionTypes[startAlias] = start;
    actionTypes[successAlias] = success;
    actionTypes[errorAlias] = error;
  }
}

module.exports = function(resource, addAlias) {
  if (resource == null) throw new Error('Expected resource');
  if (addAlias == null) addAlias = true;

  resource = trim(resource);
  if (resource == '')   throw new Error('Expected resource');
  var actionTypes = {};

  addGroup(resource, actionTypes, 'fetch', addAlias);
  addGroup(resource, actionTypes, 'create', addAlias);
  addGroup(resource, actionTypes, 'update', addAlias);
  addGroup(resource, actionTypes, 'delete', addAlias);

  return actionTypes;
}

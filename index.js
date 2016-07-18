var snakeCase = require('lodash.snakecase');
var trim      = require('lodash.trim');

function addGroup(resource, actionTypes, group, config) {
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

  if (config.addAlias) {
    actionTypes[startAlias] = start;
    actionTypes[successAlias] = success;
    actionTypes[errorAlias] = error;
  }
}

module.exports = function(resource, config) {
  if (resource == null) throw new Error('Expected resource');
  config = config || {};
  if (config.addAlias == null) config.addAlias = true;

  resource = trim(resource);
  if (resource == '')   throw new Error('Expected resource');
  var actionTypes = {};

  addGroup(resource, actionTypes, 'fetch', config);
  addGroup(resource, actionTypes, 'create', config);
  addGroup(resource, actionTypes, 'update', config);
  addGroup(resource, actionTypes, 'delete', config);

  if (config.additionalActions instanceof Array) {
    config.additionalActions.forEach(function(action) {
      addGroup(resource, actionTypes, action, config)
    });
  }

  return actionTypes;
}

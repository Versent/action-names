function addGroup(resource, events, group) {
	var upperResource = resource.toUpperCase();
	var upperGroup    = group.toUpperCase();

	var start   = upperResource + '_' + upperGroup + '_START';
	var success = upperResource + '_' + upperGroup + '_SUCCESS';
	var error   = upperResource + '_' + upperGroup + '_ERROR';

	events[start]   = start;
	events[success] = success;
	events[error]   = error;
}

module.exports = function(resource) {
	const names = {};

	addGroup(resource, names, 'fetch');
	addGroup(resource, names, 'create');
	addGroup(resource, names, 'update');
	addGroup(resource, names, 'delete');

	return names;
}

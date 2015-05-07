function Class(funcs) {
	initializer = funcs.initialize;
	if (initializer !== undefined) {
		for(var key in funcs) {
			if (key != 'initialize') {
				initializer.prototype[key] = funcs[key];
			}
		}
		return initializer;
	}else {
		return function() {};
	}
}

module.exports = Class
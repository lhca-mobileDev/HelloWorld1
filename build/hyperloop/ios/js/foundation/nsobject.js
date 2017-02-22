/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2017 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$imports,
	$class;



/**
 * Foundation/
 * @class
 */
function NSObject (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer.$native ? pointer.$native : pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof NSObject)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	if (!pointer) {
		pointer = Hyperloop.createProxy({
			class: 'NSObject',
			alloc: true,
			init: 'init'
		});
	}
	if (pointer.$native) {
		this.$native = pointer.$native;
	} else {
		this.$native = pointer;
	}
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}

Object.defineProperty(NSObject, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});


Object.defineProperty(NSObject.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSObject, 'toString', {
	value: function () {
		return '[class NSObject]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSObject',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSObject, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSObject, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});



	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

module.exports = NSObject;

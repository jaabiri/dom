

var $ = function (selector) {
	if(!(this instanceof $)){
		return new $(selector);
	}
 var elements;
 if (typeof selector === 'string'){
	elements  = document.querySelectorAll(selector);
}else{
	elements = selector;
}

 for(var i = 0 ;i<elements.length;i++){
	 this[i]=elements[i];

 }
  this.length = elements.length;
	return this;
};

$.extend = function (target, object) {
	for (var prop in object) {

		if (object.hasOwnproperty(prop)) {
			target[prop] = object[prop];
		}
	}
	return target;
};

$.isArray = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';// Array.isArray([]);
}
$.isArrayLike = function (obj) {
	if (typeof obj.length === 'number') {
		if (obj.length === 0) {
			return true;
		} else if (obj.length > 0) {
			return (obj.length - 1) in obj;
		}
	} else {
		return false;
	}

}
$.each = function (collection, cb) {
	if ($.isArraylike(collection)) {
		for (var i = 0; i < collection.length; i++) {
			var value = collection[i];
			cb.call(value, i, value);
		}
	} else {
	      	for (var prop in collection) {
			if (collection.hasOwnProperty(prop)) {
				var val = collection[prop];
				cb.call(val, prop, val);
			}
		}

	}
}
//Array.from()
$.makeArray = function (arr) {
	var array = [];
	$.each(arr, function (i, value) {
		array.push(value);
	});
	return array;
}
$.proxy = function (fn, context) {
	return function () {
		fn.apply(context, arguments);
	}
}
/*var $ = function (selector) {
	var elements = document.querySelectorAll(selector)
	for (let i = 0; i < elements.length; i++) {
		this[i] = elements[i]
	}
	this.length = elements.length;
}*/
var dogs = new $('#breads li ');
dogs.html('<div>ALL DOGS</div>').html();

$.extend($.prototype, {
	html: function (newhtml) {
		if (arguments.length) {
			$.each(this, function (i, el) {
				el.innerHTML = newhtml;
			})
			return this;

		} else {
			return this[0].innerHTML;
		}
	},
	val: function ( newhtml) {
		if (arguments.length) {
			$.each(this, function (i, el) {
				el.value = newhtml;
			})
			return this;

		} else {
			return this[0].value;
		}
	}

	text: function (newtext) {
		if (arguments.length) {
		 return	$.each(this, function (i, el) {
				el.innerHTML = "";
				var text = document.creatTextNode(newtext);
				el.appendchild(text);
			})
	},
	find: function (selecteur) {
/**	return elements =	this.reduce(function (acc, value) {
		  var els=value.querySelectorAll(selecteur);
		  acc.push(els);
		  return acc;

	 }, []);*/
	 var elements = [];
	 $.each(this,function(i,el){
		 var els = el.querySelectorAll(selector);
		 [].push.apply(elements,els);
	 });
	 return $(elements);
	 },
	next: function () { },
	prev: function () { },
	parent: function () { },
	children: function () { },
	attr: function (attr, value) { },
	css: function (style, val) { },
	width: function () { },
	hide: function () { },
	show: function () { }
});

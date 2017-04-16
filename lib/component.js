var Component = function(obj = Object) {
	this.type = obj.type;
	this.element;
}

Component.prototype = {
	generate: () => {
		this.element = document.createElement(this.type);
	},
	append: parent => {
		parent.appendChild(this.element);
	}
}

exports.Component = Component;
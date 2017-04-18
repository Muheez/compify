function Component(obj) {
	this.type = obj["type"];
	this.styles = obj["styles"];
	this.innerText = obj["innerText"];
	this.element;
	this.styleString = "";

	this.generate();
	this.style();
	console.log(this.type);
}

Component.prototype = {
	generate: function() {
		this.element = document.createElement(this.type);
		if(this.innerText) {
			this.element.innerHTML = this.innerText;
		}
		console.log(this.element);
		console.log(this.type);
	},
	append: function(parent) {
		parent.appendChild(this.element);
	},
	style: function() {
		for(var style in this.styles) {
			this.styleString += style + ":" + this.styles[style] + ";";
		}
		for(var style in this.styles) {
			console.log(style)
			this.element.style = this.styleString;
		}
		console.log(this.styles);
	}
}

exports.Component = Component;
exports.componentProto = Component.prototype;
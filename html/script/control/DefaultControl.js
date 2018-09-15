TiandiMap.controls = {};

(function(){
	var DefaultControl = function(){};
	DefaultControl.prototype = T.extend(T.Control.prototype, {
		initialize: function() {
			this.setOptions({
				position: T_ANCHOR_TOP_RIGHT
			});
		},
		onAdd: function(map){
			this.show();
			console.log("added")
		},
		getContainer: function() {
			return document.createElement("div");
		}
	});
	
	TiandiMap.controls.DefaultControl = DefaultControl;
})();
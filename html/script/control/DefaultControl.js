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
			var container = document.createElement("div");
			container.style.cssText = "border: 1px solid #ccc; padding:5px;";
			
			var button = createButton("自定义控件","自定义控件","custom-control", container, "color:red");
			return container;
		}
	});
	
	function createButton(html, title, className, container, csstext) {
        var link = document.createElement("a");
        if (container) {
            container.appendChild(link);
        }
        link.innerHTML = html;
        link.title = title;
        link.classList.add(className);
        link.style.cssText = csstext;
        return link;
    }
	
	TiandiMap.controls.DefaultControl = DefaultControl;
})();
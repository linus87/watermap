var map;
var zoom = 12;
var shanghaiLngLat = new T.LngLat(121.47, 31.23);

function onLoad() {
	// create map instance
	map = new T.Map('mapDiv', {projection:'EPSG:4326'});
	// init map
	map.centerAndZoom(shanghaiLngLat, zoom);
	
	var marker = new TiandiMap.markers.DefaultMarker(shanghaiLngLat, {
	    title:"默认标记"
	});
	map.addOverLay(marker);
	
	var control = new TiandiMap.controls.DefaultControl();
	map.addControl(control);
	console.log(control.getContainer());
}

function displayControl() {
    
}
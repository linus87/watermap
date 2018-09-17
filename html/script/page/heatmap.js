var map;
var zoom = 4;
var shanghaiLngLat = new T.LngLat(121.47, 31.23);

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = citiesGeoMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                lat: geoCoord[1],
                lng: geoCoord[0],
                count: data[i].value
            });
        }
    }
    return res;
};
var points = convertData(data);

function onLoad() {
	// create map instance
	map = new T.Map('mapDiv', {projection:'EPSG:4326'});
	// init map
	map.centerAndZoom(shanghaiLngLat, zoom);
	
	var heatmapOverlay = new T.HeatmapOverlay({
        "radius": 30,
    });
    map.addOverLay(heatmapOverlay);
    heatmapOverlay.setDataSet({data: points, max: 300});
}

function displayControl() {
    
}
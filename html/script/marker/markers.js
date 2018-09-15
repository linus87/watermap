TiandiMap.markers = {};

TiandiMap.markers.DefaultMarker = function(lnglat, opts){
    var marker = new T.Marker(lnglat, opts);
    return marker;
}
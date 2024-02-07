require([
    "esri/views/MapView", 
    "esri/WebMap", 
    "esri/layers/FeatureLayer",
    "esri/widgets/Legend",
    "esri/widgets/LayerList",
    "esri/widgets/Search"
], function(MapView, WebMap, FeatureLayer, Legend, LayerList, Search) {
    const webmap = new WebMap({
        portalItem: {
            id: "630750de135f4a7fbd2acfc257ae0e2f" // ID of your existing WebMap
        }
    });

    // Assuming this is the "USA State Polygon" layer
    const usaStatePolygonLayer = new FeatureLayer({
        portalItem: {
            id: "placeholder-for-USA-State-Polygon-layer-ID" // Placeholder ID for the "USA State Polygon" layer
        }
    });

    // "USA Major Cities" layer
    const usaMajorCitiesLayer = new FeatureLayer({
        portalItem: {
            id: "5ef295577fbc4541990d180ba82c6547" // ID of the "USA Major Cities" layer
        }
    });

    const additionalLayer = new FeatureLayer({
        portalItem: {
            id: "662747c89e864d448b6060a206e0fc68" // ID of the additional layer (if this represents another relevant dataset)
        }
    });

    webmap.load().then(() => {
        webmap.add(usaStatePolygonLayer); // Add the "USA State Polygon" layer first
        webmap.add(usaMajorCitiesLayer); // Then add the "USA Major Cities" layer
        webmap.add(additionalLayer); // Finally, add any additional layers
    });

    const view = new MapView({
        container: "viewDiv", // Reference to the DOM node that will contain the map
        map: webmap // Reference to the WebMap object
    });

    // Create a legend widget instance
    const legend = new Legend({
        view: view // Reference to the MapView
    });

    // Add the legend widget to the view's UI
    view.ui.add(legend, "bottom-right");

    // Create a LayerList widget instance
    const layerList = new LayerList({
        view: view // Reference to the MapView
    });

    // Add the LayerList widget to the view's UI
    view.ui.add(layerList, "top-right");

    // Create a Search widget instance
    const search = new Search({
        view: view // Reference to the MapView
    });

    // Add the Search widget to the view's UI
    view.ui.add(search, "top-left");
});







require([
    "esri/views/MapView", 
    "esri/WebMap", 
    "esri/layers/FeatureLayer",
    "esri/widgets/Legend",
    "esri/widgets/LayerList",
    "esri/widgets/Search" // Import the Search widget
], function(MapView, WebMap, FeatureLayer, Legend, LayerList, Search) {
    const webmap = new WebMap({
        portalItem: {
            id: "630750de135f4a7fbd2acfc257ae0e2f" // ID of your existing WebMap
        }
    });

    const additionalLayer = new FeatureLayer({
        portalItem: {
            id: "662747c89e864d448b6060a206e0fc68" // ID of the new layer you want to add
        }
    });

    webmap.load().then(() => {
        webmap.add(additionalLayer); // Add the new layer after the WebMap has loaded
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

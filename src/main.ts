import Basemap from "esri/Basemap";
import Extent from "esri/geometry/Extent";
import MapImageLayer from "esri/layers/MapImageLayer";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import BasemapGallery from "esri/widgets/BasemapGallery";
import LocalBasemapsSource from "esri/widgets/BasemapGallery/support/LocalBasemapsSource";
import Expand from "esri/widgets/Expand";
import Home from "esri/widgets/Home";
import LayerList from "esri/widgets/LayerList";
import Search from "esri/widgets/Search";

/**
 * Extent of WA.
 * @see https://epsg.io/1416-area
 */
const waExtent = new Extent({
  xmin: -124.79,
  ymin: 45.54,
  xmax: -116.91,
  ymax: 49.05
});

const fcVectorBM = new Basemap({
  portalItem: {
    id: "2344ddba36c34418ba6b16971fad0208"
  }
});

const fcLayer = new MapImageLayer({
  portalItem: { id: "5fa0e9671d104edfadb7fa4e7f9ed17f" },
  title: "Functional Class"
});

const map = new EsriMap({
  basemap: fcVectorBM,
  layers: [fcLayer]
});

const view = new MapView({
  container: "viewDiv",
  extent: waExtent,
  map
});

const home = new Home({
  view
});

view.ui.add(home, "top-left");

const search = new Search({ view });
view.ui.add(search, "top-right");

// Get list of basemaps created from well known IDs.
const otherBasemaps = [
  "streets-vector",
  "streets-night-vector",
  "streets-navigation-vector",
  "streets-relief-vector",
  "dark-gray-vector",
  "gray-vector",
  "topo-vector",
  "hybrid"
].map(Basemap.fromId);

const bmGallery = new BasemapGallery({
  view,
  activeBasemap: fcVectorBM,
  source: new LocalBasemapsSource({
    basemaps: [fcVectorBM].concat(otherBasemaps)
  })
});

const bmgExpand = new Expand({
  content: bmGallery
});
view.ui.add(bmgExpand, "top-right");

const legendExpand = new Expand({
  content: new LayerList({
    view
  })
});

view.ui.add(legendExpand, "top-right");

mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmFuYXMiLCJhIjoiY2sybnRqODB5MHE5cjNibnozNnlndGEwcyJ9.oaxzA4cGRd_-3QgjdqKETg';

var filterGroup = document.getElementById('filter-group');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-2.967380, 56.464071],
    zoom: 13
});

map.on('load', function() {

  var places = {
      "type": "FeatureCollection",
      "features": [      {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-2.965719, 56.472823]
            },
            "properties": {
              "title": "Second-hand Furniture Shop",
              "icon": "art-gallery",
              "description" : "Marilyns at 36 Arklay Street"
        }
      },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[-2.968552,  56.464125]
    },
    "properties":{
      "title":"Second-hand Shop(consumer electronics)",
      "icon":"shop",
      "description" : "British Heart Foundation Furniture & Electrical"
    }
  },
  {
    "type":"Feature",
    "geometry":{
      "type":"Point",
       "coordinates": [-2.970359, 56.462163]
     },
     "properties":{
      "title":"Second-hand Shop (consumer electronics)",
      "icon": "shop",
      "description": "Right Buy U"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[-2.969335,  56.459281]
    },
    "properties":{
      "title":"Second-hand Shop (consumer electronics)",
      "icon":"shop",
      "description" : "Cash Converters"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[-3.009571, 56.472787]
    },
    "properties":{
      "title":"Second-hand Shop (consumer electronics)",
      "icon":"shop",
      "description" : "Cash Converters"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.970793, 56.464923]
    },
    "properties":{
      "title":"Second-hand Furniture Shop",
      "icon":"art-gallery",
      "description" : "Transform Furniture Ltd"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.955649,  56.468791]
    },
    "properties":{
      "title":"Second-hand Furniture Shop",
      "icon":"art-gallery",
      "description" : "A B S"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[  -2.957083, 56.471734]
    },
    "properties":{
      "title":"Second-hand Shop (consumer electronics)",
      "icon":"shop",
      "description" : "Deal Right - SecondHand Dealers"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.992320,  56.455948]
    },
    "properties":{
      "title":"Charity Shop",
      "icon":"clothing-store",
      "description" : "Shelter charity shop"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.971760,  56.466255]
    },
    "properties":{
      "title":"Charity Shop",
      "icon":"clothing-store",
      "description" : "New 4 U"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.971102, 56.461586]
    },
    "properties":{
      "title":"Second-hand Book Shop",
      "icon":"library",
      "description" : "Oxfam"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.985573,56.462545]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "Tayside Re-Users"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.980229,56.461863]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "Computer Recycling Services Ltd"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.967286,56.459958]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "CRNS Consortium"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.974797,56.469286]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "Cash4Clothes"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.908101,56.485632]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "Baldovie Recycling Centre"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.907897,56.485413]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "Waste Management Dundee"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.965679,56.475163]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "Sandeman street recycling centre"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.993875,56.465112]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "We-Pay (cash for clothes)"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -3.011352,56.473650]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "Recycle Scotland"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.993875,56.478118]
    },
    "properties":{
      "title":"Recycling Point",
      "icon":"marker",
      "description" : "We-Pay (cash for clothes)"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[ -2.971404, 56.461832]
    },
    "properties":{
      "title":"Charity Shop",
      "icon":"clothing-store",
      "description" : "Barnardo's"
    }
  },
  {
    "type":"Features",
    "geometry": {
      "type": "Point",
      "coordinates":[  -2.970642, 56.460872]
    },
    "properties":{
      "title":"Charity Shop",
      "icon":"clothing-store",
      "description" : "Chest Heart & Stroke Scotland"
    }
  },
    ]
  };
    map.addSource("places", {
        "type": "geojson",
        "data": places
    });

    places.features.forEach(function(feature) {
        var symbol = feature.properties['icon'];
        var title = feature.properties['title'];
        var layerID = 'poi-' + symbol;

        if (!map.getLayer(layerID)) {
            map.addLayer({
                "id":  layerID,
                "type": "symbol",
                "source": "places",
                "layout": {
                    "icon-image": symbol + "-15",
                    "icon-allow-overlap": true,
                    "text-field": "{description}",
                    "text-font": ["Roboto Regular"],
                    "text-offset": [0.6, 0.1],
                    "text-anchor": "left",
                },
                "filter": ["==","icon", symbol]
            });

            var input = document.createElement('input');
            input.type = 'checkbox';
            input.id = layerID;
            input.checked = true;
            filterGroup.appendChild(input);

            var label = document.createElement('label');
            label.setAttribute('for', layerID);
            label.textContent = title;
            filterGroup.appendChild(label);

            input.addEventListener('change', function(e) {
                map.setLayoutProperty(layerID, 'visibility',
                    e.target.checked ? 'visible' : 'none');
            });
          }
    });
  });
  map.addControl(new mapboxgl.NavigationControl());

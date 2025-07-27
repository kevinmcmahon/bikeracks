<template>
  <div ref="mapContainer" class="map-container" style="width: 100%; height: 400px;"></div>
</template>

<script>
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default {
    name: 'MapboxMap',
    props: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        },
        racks: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            map: null,
            markers: []
        };
    },
    mounted() {
        // MapLibre doesn't require an access token for non-Mapbox tiles
        // You can use OpenStreetMap or other free tile sources
        
        this.map = new maplibregl.Map({
            container: this.$refs.mapContainer,
            // Using OpenStreetMap tiles instead of Mapbox
            style: {
                version: 8,
                sources: {
                    'osm-tiles': {
                        type: 'raster',
                        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        tileSize: 256,
                        attribution: '© OpenStreetMap contributors'
                    }
                },
                layers: [{
                    id: 'osm-tiles',
                    type: 'raster',
                    source: 'osm-tiles',
                    minzoom: 0,
                    maxzoom: 19
                }]
            },
            center: [this.lng, this.lat],
            zoom: 16
        });

        this.addMarkers();
    },
    beforeUnmount() {
        if (this.map) {
            this.map.remove();
        }
    },
    watch: {
        lat() {
            this.updateMap();
        },
        lng() {
            this.updateMap();
        },
        racks() {
            this.addMarkers();
        }
    },
    methods: {
        updateMap() {
            if (this.map) {
                this.map.setCenter([this.lng, this.lat]);
                this.addMarkers();
            }
        },
        clearMarkers() {
            this.markers.forEach(marker => marker.remove());
            this.markers = [];
        },
        addMarkers() {
            this.clearMarkers();
            
            // Add center marker (user location)
            const centerMarker = new maplibregl.Marker({ color: '#41B6E6' })
                .setLngLat([this.lng, this.lat])
                .addTo(this.map);
            this.markers.push(centerMarker);
            
            // Add rack markers
            if (this.racks && this.racks.length > 0) {
                this.racks.forEach(rack => {
                    const marker = new maplibregl.Marker({ color: '#E4002B' })
                        .setLngLat([rack.longitude, rack.latitude])
                        .addTo(this.map);
                    this.markers.push(marker);
                });
            }
        }
    }
};
</script>

<style scoped>
.map-container {
    border-radius: 8px;
}
</style>

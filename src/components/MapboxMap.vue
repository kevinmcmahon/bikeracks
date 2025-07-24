<template>
  <div ref="mapContainer" class="map-container" style="width: 100%; height: 400px;"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

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
        mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API_KEY || 'your-mapbox-token';
        
        this.map = new mapboxgl.Map({
            container: this.$refs.mapContainer,
            style: process.env.VUE_APP_MAP_STYLE || 'mapbox://styles/mapbox/streets-v11',
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
            const centerMarker = new mapboxgl.Marker({ color: '#41b6e6' })
                .setLngLat([this.lng, this.lat])
                .addTo(this.map);
            this.markers.push(centerMarker);
            
            // Add rack markers
            if (this.racks && this.racks.length > 0) {
                this.racks.forEach(rack => {
                    const marker = new mapboxgl.Marker({ color: 'red' })
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

<template>
  <MglMap 
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    :zoom="16"
    :center="[this.lng, this.lat]">
        <p v-if="racks">
            <MglMarker :coordinates="[this.lng, this.lat]" color="blue" />
            <MglMarker v-for="rack in racks" v-bind:key="rack.id" :coordinates="rackCoordinates(rack)" color="red" />
        </p>
        <p v-else>
            <MglMarker :coordinates="[this.lng, this.lat]" color="red" />
        </p>        
  </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";

import { MglMap, MglMarker } from 'vue-mapbox'

export default {
    components: {
        MglMap,
        MglMarker
    }, 
    props: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        },
        racks: {
            type: Array
        }
    },
    methods: {
        rackCoordinates: function(rack) {
            return [rack.longitude, rack.latitude ];
        }
    },
    data() {
        return {
            accessToken: 'pk.eyJ1Ijoia2V2aW5tY21haG9uIiwiYSI6ImNrNGt0aWw2cDIzZmYzb3J2aTRnZTd4OHkifQ._d7t4x162q4vNa5jSLKx7g',
            mapStyle: 'mapbox://styles/kevinmcmahon/ck4kuagvo6lmu1cqwfxlyo55b',
            coordinates: [],
        };
    },
    created() {
        this.mapbox = Mapbox;
    }
};
</script>

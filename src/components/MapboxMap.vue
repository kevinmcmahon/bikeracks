<template>
  <MglMap 
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    :zoom="16"
    :center="[this.lng, this.lat]">
        <p v-if="racks">
            <MglMarker :coordinates="[this.lng, this.lat]" color="#41b6e6" />
            <MglMarker v-for="rack in racks" v-bind:key="rack.id" :coordinates="rackCoordinates(rack)" color="red" />
        </p>
        <p v-else>
            <MglMarker :coordinates="[this.lng, this.lat]" color="#e4002b" />
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
            accessToken: process.env.VUE_APP_MAPBOX_API_KEY,
            mapStyle: process.env.VUE_APP_MAP_STYLE,
            coordinates: [],
        };
    },
    created() {
        this.mapbox = Mapbox;
    }
};
</script>

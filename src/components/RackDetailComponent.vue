<template>
    <div>
        <v-card v-if="rack" class="mx-auto my-8" max-width="800px">
            <header class="d-flex justify-center py-2">
                <h1>{{ rack.address }}</h1>
            </header>
            <MapboxMapComponent
                v-bind:lat="rack.latitude"
                v-bind:lng="rack.longitude"
                style="width: 100%; height: 320px"
                class="px-5"
            >
            </MapboxMapComponent>
            <v-table class="elevation-1">
                <tbody>
                    <tr>
                        <td>Rack ID</td>
                        <td>{{ rack.rack_id }}</td>
                    </tr>
                    <tr>
                        <td>Ward</td>
                        <td>{{ rack.ward }}</td>
                    </tr>
                    <tr>
                        <td>Neighborhood</td>
                        <td>{{ rack.neighborhood }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </div>
</template>

<script>
import api from '../services/api';
import MapboxMapComponent from './MapboxMapComponent.vue';

export default {
    name: 'RackDetail',
    components: {
        MapboxMapComponent,
    },
    data: () => ({
        rack: null,
    }),
    mounted: async function () {
        // eslint-disable-next-line no-console
        this.getRack()
            .then((response) => {
                this.rack = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        getRack: async function () {
            // eslint-disable-next-line no-console
            return api.get(`/bikeracks/${this.$route.params.id}`);
        },
    },
};
</script>

<style scoped>
.details {
    margin: 50px auto;
}
</style>

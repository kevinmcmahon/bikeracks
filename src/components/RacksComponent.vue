<template>
    <div>
        <!-- Error State -->
        <v-card v-if="error" class="mx-auto my-8" max-width="1000" color="error">
            <v-card-text class="text-center">
                <h2 class="text-white">{{ error }}</h2>
                <v-btn @click="$router.push('/')" color="white" variant="outlined" class="mt-4">
                    Back to Search
                </v-btn>
            </v-card-text>
        </v-card>

        <!-- Loading State -->
        <v-card v-else-if="loading" class="mx-auto my-8" max-width="1000">
            <v-card-text class="text-center py-10">
                <div>Loading bike racks...</div>
            </v-card-text>
        </v-card>

        <!-- Results -->
        <v-card v-else-if="racks && racks.length > 0 && lat && lng" class="mx-auto my-8" max-width="1000">
            <header class="d-flex justify-center py-2">
                <h1>Closest Bike Racks</h1>
            </header>
            <MapboxMapComponent
                v-bind:lat="lat"
                v-bind:lng="lng"
                v-bind:racks="racks"
                style="width: 100%; height: 320px"
            >
            </MapboxMapComponent>
            <v-table class="py-5">
                <thead>
                    <tr>
                        <th id="distance" class="font-weight-bold headline text-center">
                            Distance (mi)
                        </th>
                        <th id="rack-id" class="font-weight-bold headline text-center">
                            Rack ID
                        </th>
                        <th id="address" class="font-weight-bold headline text-left">
                            Address
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in racks" :key="item.id" v-on:click="rackSelected(item)" style="cursor: pointer;">
                        <td class="headline text-center">{{ item.dist || 'N/A' }}</td>
                        <td class="headline text-center">{{ item.rack_id || 'N/A' }}</td>
                        <td class="headline text-left">{{ item.address || 'Address not available' }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </div>
</template>

<script>
import MapboxMapComponent from '@/components/MapboxMapComponent';
import api from '@/services/api';

export default {
    name: 'RacksComponent',
    components: {
        MapboxMapComponent,
    },
    data: () => ({
        racks: [],
        lat: null,
        lng: null,
        error: null,
        loading: false,
    }),
    mounted: function () {
        // Validate route parameters
        if (this.$route.query.address) {
            const address = this.$route.query.address.trim();
            if (!address || address.length < 3) {
                this.error = 'Please provide a valid address';
                return;
            }
            this.loading = true;
            this.getClosestRacksByAddress(address)
                .then(this.handleResponse)
                .catch(this.handleError);
        } else if (this.$route.query.lat && this.$route.query.lng) {
            const lat = parseFloat(this.$route.query.lat);
            const lng = parseFloat(this.$route.query.lng);
            
            if (!this.isValidLatitude(lat) || !this.isValidLongitude(lng)) {
                this.error = 'Please provide valid coordinates';
                return;
            }
            
            this.loading = true;
            this.getClosestRacks(lat, lng)
                .then(this.handleResponse)
                .catch(this.handleError);
        } else {
            this.error = 'Please provide either an address or coordinates';
        }
    },
    methods: {
        getClosestRacks: async function (lat, lng) {
            return api.get('/bikeracks?lat=' + lat + '&lng=' + lng);
        },
        getClosestRacksByAddress: async function (address) {
            return api.get('/bikeracks?address=' + encodeURIComponent(address));
        },
        rackSelected: async function (rack) {
            if (!rack || !rack.id) {
                console.error('Invalid rack selected');
                return;
            }
            this.$router.push({ path: `/bikeracks/${rack.id}` });
        },
        isValidLatitude: function (lat) {
            return !isNaN(lat) && lat >= -90 && lat <= 90;
        },
        isValidLongitude: function (lng) {
            return !isNaN(lng) && lng >= -180 && lng <= 180;
        },
        handleResponse: function (response) {
            this.loading = false;
            this.error = null;
            
            if (!response || !response.data) {
                this.error = 'Invalid response from server';
                return;
            }
            
            const { coordinates, racks } = response.data;
            
            if (!coordinates || !Array.isArray(racks)) {
                this.error = 'Invalid data format received';
                return;
            }
            
            this.lat = coordinates.latitude;
            this.lng = coordinates.longitude;
            this.racks = racks;
            
            if (racks.length === 0) {
                this.error = 'No bike racks found in this area';
            }
        },
        handleError: function (error) {
            this.loading = false;
            console.error('API Error:', error);
            
            if (error.response) {
                // Server responded with error status
                this.error = error.response.data?.message || 'Server error occurred';
            } else if (error.request) {
                // Request was made but no response received
                this.error = 'Unable to connect to server. Please check your internet connection.';
            } else {
                // Something else happened
                this.error = 'An unexpected error occurred';
            }
        },
    },
};
</script>

<style scoped></style>

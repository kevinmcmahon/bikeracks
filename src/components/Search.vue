<template>
    <form id="search">
        <v-container>
            <v-row>
            <v-text-field
                v-model="searchQuery"
                label="Enter a Chicago address ..."
                required
                ></v-text-field>
            </v-row>
            <v-row :class="`d-flex justify-center mb-6`">
                <v-btn class="ma-1" depressed large color="secondary" @click="searchByAddress()">Look Up Address</v-btn>
                <v-btn class="ma-1" depressed large color="secondary" @click="searchByLatLng()">Current Location</v-btn>
            </v-row>
        </v-container>
    </form>
</template>

<script>

    export default {
        data:  () => ({
            searchQuery: '',
        }),
        mounted () {
            
        },
        methods: {
            searchByLatLng: async function() {
                this.getLocation(position => { 
                    this.$router.push({ path: 'bikeracks', query: { lat: position.latitude, lng: position.longitude } });
                });
            },
            searchByAddress: async function() {
                this.$router.push({ path: 'bikeracks', query: { address: this.searchQuery }})
            },
             getLocation: function(callback) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                    position => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        callback({ latitude: lat, longitude: lng });
                    },
                    err => {
                        console.error(err);
                        callback(null, err);
                    });
                } else {
                    console.error("browser doesn't support geolocation");
                }
            }
        }
    }
</script>

<style>
    form {
		width:1000px;
        margin:50px auto;
    }
</style>

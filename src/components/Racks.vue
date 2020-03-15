<template>
    <div>
        <v-card v-if="racks && lat && lng"
            class="mx-auto my-8"
            max-width="1000">
            <header class="d-flex justify-center py-2" >
                <h1>Closest Bike Racks</h1>
            </header>
            <MapboxMap                
                v-bind:lat="lat"
                v-bind:lng="lng"
                v-bind:racks="racks"
                style="width:100%; height: 320px;">            
            </MapboxMap>
             <v-simple-table
                class="py-5 ">
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th id='distance' class="font-weight-bold headline text-center">Distance (mi)</th>
                        <th id='rack-id' class="font-weight-bold headline text-center">Rack ID</th>
                        <th id='address' class="font-weight-bold headline text-left">Address</th>
                    </tr>
                    </thead>
                    <tbody v-for="item in racks" :key="item.id" v-on:click="rackSelected(item)">
                    <tr>
                        <td class="headline text-center">{{ item.dist }}</td>
                        <td class="headline text-center">{{ item.rack_id }}</td>
                        <td class="headline text-left"> {{ item.address }}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </div>
</template>

<script>
    import api from '@/services/api';
    import MapboxMap from "@/components/MapboxMap";

    export default {
        name: "Racks",
        components: {
            MapboxMap
        },
        data:  () => ({
            racks: [],
            lat: null,
            lng: null
        }),
        mounted: function () {
            var promise;
            if(this.$route.query.address) {
                promise = this.getClosestRacksByAddress(this.$route.query.address);
            } else {
                promise = this.getClosestRacks(this.$route.query.lat,this.$route.query.lng);
            }
            promise.then(response =>  { 
                     const {coordinates, racks} = response.data;
                     this.lat = coordinates.latitude;
                     this.lng = coordinates.longitude;
                     this.racks = racks;
                }).catch( error => { console.error(error); });
        },
        methods: {
            getClosestRacks: async function (lat,lng) {
                return api.get('/bikeracks?lat='+lat+'&lng='+lng);
            },
            getClosestRacksByAddress: async function (address) {
                return api.get('/bikeracks?address='+address);
            },
            rackSelected: async function(rack) {
                this.$router.push({ path: `/bikeracks/${rack.id}`})
            }
        }
    }
</script>

<style scoped>
   
</style>

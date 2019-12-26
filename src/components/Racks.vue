<template>
    <div>
        <v-card
            class="mx-auto"
            max-width="1000">
            <header class="d-flex justify-center py-5" >
                <h1>Closest Bike Racks</h1>
            </header>
            <MapboxMap
                v-bind:lat="Number(this.$route.query.lat)"
                v-bind:lng="Number(this.$route.query.lng)"
                v-bind:racks="racks"
                style="width:100%;  height: 400px;"
                class="px-5">            
            </MapboxMap>
             <v-simple-table
                class="py-5">
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="font-weight-bold display-1 text-center">Distance</th>
                        <th class="font-weight-bold display-1 text-center">Rack ID</th>
                        <th class="font-weight-bold display-1 text-left">Address</th>
                    </tr>
                    </thead>
                    <tbody v-for="item in racks" :key="item.id" v-on:click="rackSelected(item)">
                    <tr>
                        <td class="display-1 text-center">{{ item.dist }}</td>
                        <td class="display-1 text-center">{{ item.rack_id }}</td>
                        <td class="display-1 text-left"> {{ item.address }}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </div>
</template>

<script>
    import api from '../services/api';
    import MapboxMap from "@/components/MapboxMap";

    export default {
        name: "Racks",
        components: {
            MapboxMap
        },
        data:  () => ({
            racks: []
        }),
        mounted: function () {
            this.getClosestRacks(this.$route.query.lat,this.$route.query.lng).then(response =>  this.racks = response.data).catch( error => { this.console.log(error); })
        },
        methods: {
            getClosestRacks: async function (lat,lng) {
                return api.get('/bikeracks?lat='+lat+'&lng='+lng);
            },
            rackSelected: async function(rack) {
                this.$router.push({ path: `/bikeracks/${rack.id}`})
            }
        }
    }
</script>

<style scoped>
   
</style>

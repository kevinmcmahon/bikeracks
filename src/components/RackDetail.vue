
<template>
    <div>
        <v-card
            class="mx-auto"
            max-width="1000">
            <header class="d-flex justify-center">
                <h1>{{ rack.address }}</h1>
            </header>
    
            <v-simple-table  class="elevation-1">
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
            </v-simple-table>
        </v-card>
    </div>
</template>

<script>
    import api from '../services/api';

    export default {
        data:  () => ({
            rack: {}
        }),
        created: function () {
            this.getRack();
        },
        methods: {
            getRack: async function () {
                api.get('/bikeracks/4783').then(response =>  this.rack = response.data).catch( error => { this.console.log(error); });
            }
        }
    }
</script>

<style scoped>
    .details {
        
        margin:50px auto;
    }
</style>

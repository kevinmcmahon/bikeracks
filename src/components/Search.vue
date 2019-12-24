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
                <v-btn class="ma-1" depressed large color="secondary">Look Up Address</v-btn>
                <v-btn class="ma-1" depressed large color="secondary">Current Location</v-btn>
            </v-row>
        </v-container>
    </form>
</template>

<script>
    import api from '../services/api';

    export default {
        data:  () => ({
            searchQuery: '',
            bikeracks: []
        }),
        mounted () {
            this.lookupAddress();
        },
        methods: {
            lookupAddress: async function () {
                api.get('/bikeracks?lat=42.0582138&lng=-87.70261699999999').then(response =>  this.bikeracks = response.data).catch( error => { this.console.log(error); });
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

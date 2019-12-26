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
                <v-btn class="ma-1" depressed large color="secondary" @click="displayResults()">Look Up Address</v-btn>
                <v-btn class="ma-1" depressed large color="secondary">Current Location</v-btn>
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
            displayResults: async function() {
                this.$router.push({ path: 'bikeracks', query: { lat: '41.878513', lng: '-87.636665' } })
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

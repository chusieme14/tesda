<template>
    <v-toolbar 
        prominent
        extended
        elevation="1"
    >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <div class="mx-auto company">
            navigation
        </div>
        <v-spacer></v-spacer>
        <div style="width:30%">
            <v-text-field
                dense
                hide-details
                prepend-inner-icon="mdi-magnify"
                style="width:100%"
                outlined
                rounded
            ></v-text-field>
        </div>
    </v-toolbar>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .company{
        position:absolute; 
        margin-top: 55px;
        min-width: 98vw;
        max-width: 98vw;
    }
</style>
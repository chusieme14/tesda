<template>
    <v-toolbar>
        <v-img
            max-height="70"
            max-width="100"
            src="images/logo/tesda_logo.png"
        ></v-img>
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
<template>
    <v-system-bar color="#FFFFFF" app height="60" class="elevation-0" style="z-index: 6;">
        <v-app-bar-nav-icon @click="isnav=!isnav"></v-app-bar-nav-icon>
        <div class="toggle-sidebar-wrapper">
            <div v-if="isnav" class="custom-navbar">
                <div class="custom-navbar-inside">
                    <v-btn class="mb-2">Home</v-btn>
                    <v-btn @mouseenter="iswho=true" class="mb-2">Who we are</v-btn>
                    <v-btn>Contact Us</v-btn>
                </div>
            </div>
            <div v-if="iswho" class="custom-navbar">
                <div class="custom-navbar-inside1">
                    <v-btn min-width=138 class="mb-2">Hermann Gmeiner</v-btn>
                    <v-btn min-width=138 class="mb-2">SOS</v-btn>
                    <v-btn min-width=138>TESDA</v-btn>
                </div>
            </div>
            <img src="images/logo/tesda_logo.png"
                style="height: 55px; margin-left: 10px"
                alt="Company Logo"
            />
        </div>
        <v-spacer></v-spacer>
        <div style="width:30%">
            <v-text-field
                dense
                hide-details
                prepend-inner-icon="mdi-magnify"
                single-line
                style="width:100%"
                outlined
                rounded
                label="Search courses"
            ></v-text-field>
        </div>
    </v-system-bar>
</template>

<script>
export default {
    data(){
        return{
            isnav:false,
            iswho:false
        }
    },
    watch:{
        
    }
}
</script>

<style scoped>
    .company{
        position:absolute;
        min-width: 98vw;
        max-width: 98vw;
    }
    .custom-navbar{
        position: absolute;
    }
    .custom-navbar-inside{
        display: flex;
        flex-direction: column;
        margin-top: 51px;
        margin-left: -31px;
    }
    .custom-navbar-inside1{
        position: absolute;
        flex-direction: column;
        margin-top: 96px;
        margin-left: 115px;
    }
</style>

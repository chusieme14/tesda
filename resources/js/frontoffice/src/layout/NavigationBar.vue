<template>
    <v-system-bar color="#FFFFFF" app height="60" class="elevation-0" style="z-index: 6;">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <div class="toggle-sidebar-wrapper">
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

        }
    }
}
</script>

<style scoped>
    .company{
        position:absolute;
        min-width: 98vw;
        max-width: 98vw;
    }
</style>

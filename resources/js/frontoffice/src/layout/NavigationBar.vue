<template>
    <v-system-bar color="#FFFFFF" app height="60" class="elevation-0" style="z-index: 6;">
        <v-app-bar-nav-icon @click="isnav=!isnav"></v-app-bar-nav-icon>
        <div class="toggle-sidebar-wrapper">
            <div v-if="isnav" class="custom-navbar">
                <div class="custom-navbar-inside">
                    <v-btn @mouseenter="iswho=false" @click="moveHome" class="mb-2">Home</v-btn>
                    <v-btn @mouseenter="iswho=true" class="mb-2">Who we are</v-btn>
                    <v-btn @click="moveContact" @mouseenter="iswho=false">Contact Us</v-btn>
                </div>
            </div>
            <div @mouseleave="iswho=false" v-if="iswho" class="custom-navbar">
                <div class="custom-navbar-inside1">
                    <v-btn @click="moveHermanProfile" min-width=138 class="mb-2">Hermann Gmeiner</v-btn>
                    <v-btn @click="moveSos" min-width=138 class="mb-2">SOS</v-btn>
                    <v-btn @click="moveTesda" min-width=138>TESDA</v-btn>
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
        <v-dialog
            v-model="iscontact"
            persistent
            max-width="600px"
        >
            <contact-form @close="iscontact=false"></contact-form>
        </v-dialog>
    </v-system-bar>
</template>

<script>
import ContactForm from '@front/pages/contact/index.vue'
export default {
    data(){
        return{
            isnav:false,
            iswho:false,
            iscontact:false,
            isdrawer:false
        }
    },
    watch:{
        
    },
    components:{
        ContactForm
    },
    methods:{

        moveHermanProfile(){
            // let routeData = this.$router.resolve({path : '/page/programme-fidelite'})
            this.close()
			window.open('https://www.hermanngmeineracademy.org/harvesting-world-map/asia/philippines/calbayog', '_blank');
            // this.$router.push({name:'herman-profile'})
        },
        moveSos(){
            // let routeData = this.$router.resolve({path : '/page/programme-fidelite'})
            this.close()
			window.open('https://www.sos-childrensvillages.org', '_blank');
            // this.$router.push({name:'herman-profile'})
        },
        moveTesda(){
            // let routeData = this.$router.resolve({path : '/page/programme-fidelite'})
            this.close()
			window.open('https://www.tesda.gov.ph', '_blank');
            // this.$router.push({name:'herman-profile'})
        },
        moveHome(){
            this.close()
            this.$router.push({name:'home'})
        },
        moveContact(){
            this.close()
            this.iscontact = true
        },

        close(){
            this.isnav = false
            this.iswho = false
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
    .custom-navbar{
        position: absolute;
        z-index: 1001 !important;
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
    .cus-row{
        margin-top: -20px;
    }
    .icon-p{
        cursor: pointer;
    }
</style>

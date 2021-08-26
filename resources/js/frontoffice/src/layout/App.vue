<template>
    <v-app>
        <div class="main-bg">
            <side-bar :drawer="drawer"></side-bar>
            <navigation-bar></navigation-bar>
            <main-content></main-content>
            <div class="footer d-flex">
                <div class="left-footer" style="position:fixed; bottom: 0; left: 0;">
                    <v-img
                        max-width="27vw"
                        src="images/logo/left_footer.png"
                    ></v-img>
                </div>
                <div class="right-footer" style="position:fixed; bottom: 0; right: 0; z-index: -1">
                    <v-img
                        max-width="80vw"
                        src="images/logo/right_footer.png"
                    ></v-img>
                </div>
            </div>
        </div>
    </v-app>
</template>
<script>
import navigationBar from './NavigationBar.vue'
import mainContent from './MainContent.vue'
import sideBar from './SideBar.vue'
export default {
    data(){
        return{
            drawer: true
        }
    },
    methods:{

    },
    computed:{

    },
    created(){

    },
    components:{
        navigationBar,
        mainContent,
        sideBar
    }
}
</script>

<style scoped>
    .main-bg{
        background: linear-gradient(to top right, #ccffff 25%, #ffffff 66%);
        height: 100vh;
        max-height: 100vh;
    }
    .footer{
        position: fixed;
        bottom: 0;
    }
</style>
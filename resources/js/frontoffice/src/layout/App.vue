<template>
    <v-app>
        <div class="main-bg">

        </div>
        <div>
            <!-- <side-bar :drawer="drawer"></side-bar> -->
            <navigation-bar></navigation-bar>
            <main-content></main-content>
            <div class="footer d-flex">
                <div class="left-footer">
                    <v-img
                        max-width="27vw"
                        src="images/logo/left_footer.png"
                    ></v-img>
                </div>
                <div class="right-footer">
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
        position: fixed;
        height: 100vh;
        width: 100vw;
    }
    .right-footer{
        position: absolute;
        bottom: 0px;
        right: 0px;
    }
    .left-footer{
        position: absolute;
        bottom: 0px;
        left: 0px;
        z-index: 1;
    }
</style>
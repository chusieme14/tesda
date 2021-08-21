<template>
    <v-app>
        <div class="main-bg">
            <navigation-bar></navigation-bar>
            <main-content></main-content>
        </div>
    </v-app>
</template>
<script>
import navigationBar from './NavigationBar.vue'
import mainContent from './MainContent.vue'
export default {
    data(){
        return{

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
        mainContent
    }
}
</script>

<style scoped>
    .main-bg{
        background: linear-gradient(to top right, #ccffff 25%, #ffffff 66%);
        height: 100vh;
        max-height: 100vh;
    }
</style>
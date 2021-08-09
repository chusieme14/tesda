<template>
    <v-app>
        <div class="d-flex class-main-container">
            <v-navigation-drawer
                class=" accent-4"
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                permanent
            >
                <v-list>
                    <v-list-item 
                        v-if="isSuperAdmin"
                        link
                        :class="getCurrentUrl == 'userlist' ? 'active' : ''"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-account-box</v-icon>
                        </v-list-item-icon>
                         
                        <router-link class="mt-2" tag="v-list-item-content" :to="{ name: 'userlist' }">
                            <p>Users</p>
                        </router-link>
                    </v-list-item>
                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-account-box"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>Appointments</v-list-item-title>
                        </template>

                        <v-list-item
                            v-for="(appt, index) in appointments" :key="index"
                            link
                            :class="getCurrentUrl == appt.name ? 'active' : ''"
                        >
                            <router-link class="pt2 class-sub-list" tag="v-list-item-content" :to="{ name: appt.name }">
                                <p>{{ appt.title }}</p>
                            </router-link>
                            <v-list-item-icon>
                                <v-icon :class="getCurrentUrl == appt.name ? 'active' : ''" v-text="appt.icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list>

                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn @click="logout" block color="primary">
                            Logout
                        </v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
            <div class="class-content">
                <router-view></router-view>
            </div>
        </div>
    </v-app>
</template>
<script>
import MainHeader from './header'
import Navbar from './navbar'
export default {
    components:{
        MainHeader,
        Navbar
    },
    data(){
        return{
            appointments: [
                { title: 'For approval', icon: 'mdi-view-dashboard', name:'waiting' },
                { title: 'Approved', icon: 'mdi-account-box', name:'approved' },
            ],
            isSuperAdmin:false,
        }
    },
    methods:{
        logout(){
            axios.get(`api/logout`).then(({data})=>{
                this.$router.push({name:'login'})
            })
        },
        getAuthuser(){
            axios.get(`/auth/user`).then(({data})=>{
                if(data.role_id == 1){
                    this.isSuperAdmin = true
                }
            })
      }
    },
    created(){
        this.getAuthuser();
    },
    computed:{
        getCurrentUrl() {
            let url = this.$route.fullPath;
            let parts = url.split("/");
            console.log(parts[2],"parts[2]")
            return parts[2];
        },
    }
}
</script>
<style lang="scss" scoped>
.v-application .primary--text {
    color:#070707 !important;
}
.class-main-container{
    height: 100%;
}
.class-content{
    margin: 40px;
    width: 85%;
}
.active {
	color: #070707 !important;
    background-color: rgb(146, 144, 144);
}
.class-title{
    margin-left: 65px;
}
.v-list-item__content {
    cursor: pointer;
}
.class-sub-list{
    align-items: center;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1;
    overflow: hidden;
    padding: 2px 0 !important;
    margin-top: 13px;
    margin-left: 62px;
}
</style>
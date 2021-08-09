<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
            width="700"
        >
            <create-form 
                @store = "store"
                @update = "update"
                :isupdate = "isupdate"
                :user = "selecteduser"
            ></create-form>
        </v-navigation-drawer>
        <v-card
          elevation="1"
        >
          <v-card-title>
            Active Users 
            <span class="ml-2"> 
                <v-btn fab
                    x-small color="white"
                    @click="selecteduser = [],isupdate = false,drawer = !drawer"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn> 
            </span>
          </v-card-title>
          <v-card-text>
            <v-simple-table
            >
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">
                        Lastname
                        </th>
                        <th class="text-left">
                        Firstname
                        </th>
                        <th class="text-left">
                        Department
                        </th>
                        <th class="text-left">
                        Email
                        </th>
                        <th class="text-left">
                        Username
                        </th>
                        <th class="text-left">
                        Role
                        </th>
                        <th class="text-center">
                        Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="user in users"
                        :key="user.id"
                    >
                        <td>{{ user.lastname}}</td>
                        <td>{{ user.firstname}}</td>
                        <td>{{ user.department.short_name}}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.role.name}}</td>
                        <td class="text-center">
                        <v-btn fab dark
                            x-small color="success"
                            @click="selecteduser = user,isupdate = true,drawer=true"
                        >
                            <v-icon dark> mdi-pencil </v-icon>
                        </v-btn>
                        <v-btn fab dark
                            x-small color="error"
                            @click="selecteduser = user,isremove = true"
                        >
                            <v-icon dark> mdi-delete </v-icon>
                        </v-btn>
                        </td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
        <v-dialog
            v-model="isremove"
            max-width="290"
        >
            <dialog-confirmation
                :user="selecteduser.email"
                @accept = "removeUser"
                @cancel = "cancel"
            >

            </dialog-confirmation>
        </v-dialog>
    </div>
</template>
<script>
import createForm from './form'
import DialogConfirmation from './dialog'
export default {
    components:{
        createForm,
        DialogConfirmation
    },
    data(){
        return{
            users:{},
            drawer:false,
            isremove:false,
            selecteduser:[],
            isupdate:false
        }
    },
    created(){
        this.getallactiveuser()
    },
    methods:{
        getallactiveuser(){
            axios.get('/admin/user/active').then(({data})=>{
                console.log(data)
                this.users = data
            })
        },
        removeUser(){
            let user_id = this.selecteduser.id
            axios.delete(`/admin/user/remove/${user_id}`).then(({data})=>{
                this.getallactiveuser()
                this.selecteduser = []
                this.isremove = false
                this.$toast.open({ message: `${this.selecteduser.email} was delete successfully`, position: 'top-right', type: "success", duration: 5000})
            })
        },
        cancel(){
            this.isremove = false
        },
        store(value){
            axios.post('/admin/add/user',{...value}).then(({data})=>{
                this.getallactiveuser()
                this.drawer = false
                this.$toast.open({ message: `${value.email} was added successfully`, position: 'top-right', type: "success", duration: 5000})
            })
        },
        update(value){
            axios.put('/admin/update/user',{...value}).then(({data})=>{
                this.getallactiveuser()
                this.drawer = false
                this.$toast.open({ message: `${value.email} was updated successfully`, position: 'top-right', type: "success", duration: 5000})
            })
        }
    }
}
</script>
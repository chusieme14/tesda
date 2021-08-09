<template>
    <div>
        <v-card class="mt-3">
            <v-card-title>Add User</v-card-title>
            <v-card-text>
                <v-container>
                    <v-layout wrap row>
                        <v-flex xs12 md6>
                            <v-label>Last name </v-label> <br>
                            <span style="color:red;">{{ errors.first('last name') }}</span>
                            <v-text-field
                                solo
                                dense
                                v-model="userDetails.lastname"
                                v-validate="'required'" 
                                name="last name"
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>First name </v-label> <br>
                            <span style="color:red;">{{ errors.first('first name') }}</span>
                            <v-text-field
                                solo
                                dense
                                v-model="userDetails.firstname"
                                v-validate="'required'" 
                                name="first name"
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Email </v-label> <br>
                            <span v-if="hasemail" style="color:red;">Email is already taken</span>
                            <span v-else style="color:red;">{{ errors.first('first name') }}</span>
                            <v-text-field
                                solo
                                dense
                                @keyup="checkEmail"
                                v-model="userDetails.email"
                                v-validate="'required'" 
                                name="email"
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Username </v-label> <br>
                            <span v-if="hasusername" style="color:red;">Username is already taken</span>
                            <span v-else style="color:red;">{{ errors.first('username') }}</span>
                            <v-text-field
                                solo
                                dense
                                @keyup="checkUsername"
                                v-model="userDetails.username"
                                v-validate="'required'" 
                                name="username"
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex v-if="isupdate" xs12 md6>
                            <v-label>Password </v-label> <br>
                            <v-text-field
                                solo
                                dense
                                v-model="userDetails.password"
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex v-else xs12 md6>
                            <v-label>Password </v-label> <br>
                            <span style="color:red;">{{ errors.first('password') }}</span>
                            <v-text-field
                                solo
                                dense
                                v-model="userDetails.password"
                                v-validate="'required'" 
                                name="password"
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Role </v-label> <br>
                            <span style="color:red;">{{ errors.first('role') }}</span>
                            <v-autocomplete
                                :items="roles"
                                item-text="name"
                                item-value="id"
                                solo
                                single-line
                                allow-overflow
                                dense
                                v-model="userDetails.role_id"
                                v-validate="'required'" 
                                name="role"
                            >
                            </v-autocomplete>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Department </v-label> <br>
                            <span style="color:red;">{{ errors.first('department') }}</span>
                            <v-autocomplete
                                :items="departments"
                                item-text="short_name"
                                item-value="id"
                                solo
                                single-line
                                allow-overflow
                                dense
                                v-model="userDetails.department_id"
                                v-validate="'required'" 
                                name="department"
                            >
                            </v-autocomplete>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                                
                <v-btn
                    v-if="!isupdate"
                    color="primary"
                    @click="store"
                    :disabled="hasemail||hasusername"
                >
                    Submit
                </v-btn>
                <v-btn
                    v-else
                    color="primary"
                    @click="update"
                    :disabled="hasemail||hasusername"
                >
                    Update
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    props:{
        isupdate:{
            type:Boolean
        },
        user:{
        }
    },
    data(){
        return{
            userDetails:[],
            departments:[],
            roles:[],
            hasusername:false,
            hasemail:false
        }
    },
    methods:{
        getAllDepartment(){
            axios.get('/admin/department/all').then(({data})=>{
                this.departments = data
            })
        },
        getAllRole(){
            axios.get('/admin/role/all').then(({data})=>{
                this.roles = data
            })
        },
        store(){
            this.$validator.validateAll().then( result =>{
                if(result){
                    this.$emit('store',this.userDetails)
                }
            })
        },
        update(){
            this.$emit('update',this.userDetails)
        },
        checkUsername(){
            if(this.userDetails.username){
                let username = this.userDetails.username
                axios.post(`/admin/check/username`,{username}).then(({data})=>{
                    if(data){
                        if(this.isupdate && this.userDetails.id == data.id){
                            this.hasusername = false
                        }else this.hasusername = true
                    }
                    else this.hasusername = false
                })
            }
        },
        checkEmail(){
            if(this.userDetails.email){
                let email = this.userDetails.email
                axios.post(`/admin/check/email`,{email}).then(({data})=>{
                    if(data){
                        if(this.isupdate && this.userDetails.id == data.id){
                            this.hasemail = false
                        }else this.hasemail = true
                    }
                    else this.hasemail = false
                })
            }
        }
    },
    watch:{
        user:{
            handler(val){
                if(!this.isupdate) return this.userDetails = []
                Object.assign(this.userDetails,val)
            },deep:true
        }
    },
    computed:{
       
    },
    created(){
        this.getAllDepartment()
        this.getAllRole()
    },
}
</script>
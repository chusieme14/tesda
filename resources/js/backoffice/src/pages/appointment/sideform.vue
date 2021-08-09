<template>
    <div>
        <v-card v-if="!isfetching" class="mt-3">
            <v-card-title>Move Appointment</v-card-title>
            <v-card-text>
                <v-container>
                    <v-layout wrap row>
                        <v-flex xs12 md6>
                            <v-label>Last name </v-label> <br>
                            <v-text-field
                                solo
                                dense
                                v-model="appointmentDetails.lname"
                                disabled
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>First name </v-label> <br>
                            <v-text-field
                                solo
                                dense
                                v-model="appointmentDetails.fname"
                                disabled
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Email </v-label> <br>
                            <v-text-field
                                solo
                                dense
                                v-model="appointmentDetails.email"
                                disabled
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Mobile number </v-label> <br>
                            <v-text-field
                                solo
                                dense
                                v-model="appointmentDetails.mobile_number"
                                disabled
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Person to Visit </v-label> <br>
                            <v-text-field
                                solo
                                dense
                                v-model="appointmentDetails.PTV"
                                disabled
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Department </v-label> <br>
                            <v-autocomplete
                                :items="departments"
                                item-text="short_name"
                                item-value="id"
                                solo
                                single-line
                                allow-overflow
                                @change="checkdata"
                                dense
                                v-model="appointmentDetails.department_id"
                            >
                            </v-autocomplete>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Appointment date </v-label> <br>
                            <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    solo
                                    dense
                                    readonly
                                    v-model="appointmentDetails.appt_date"
                                    v-validate="'required'" 
                                    name="appointment date"
                                    color="success"
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="appointmentDetails.appt_date"
                                no-title
                                @change="checkdata"
                                :min="appointment.appt_date"
                                @input="menu1 = false"
                            ></v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 md12>
                            <v-label>Reason <span>*</span></v-label>  <br>
                            <span style="color:red;">{{ errors.first('reason') }}</span>
                            <v-textarea
                                v-model="appointmentDetails.reason"
                                v-validate="'required'" 
                                name="reason"
                                solo
                                height=70
                                disabled
                            ></v-textarea>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                                
                <v-btn
                    color="primary"
                    @click="save"
                    :disabled="ischange"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    props:{
        appointment:{

        }
    },
    data(){
        return{
            menu1:false,
            appointmentDetails:[],
            mindate:new Date().toString(),
            isfetching:true,
            departments:[],
            ischange:true
        }
    },
    methods:{
        checkdata(){
            if(this.appointment.appt_date == this.appointmentDetails.appt_date && this.appointment.department_id == this.appointmentDetails.department_id)
                this.ischange = true
            else this.ischange = false
        },
        getAllDepartment(){
            axios.get('/admin/department/all').then(({data})=>{
                this.departments = data
            })
        },
        save(){
            if(this.appointment.appt_date != this.appointmentDetails.appt_date && this.appointment.department_id != this.appointmentDetails.department_id)
                this.appointmentDetails.both = true
            else{
                if(this.appointment.appt_date == this.appointmentDetails.appt_date && this.appointment.department_id != this.appointmentDetails.department_id)
                    this.appointmentDetails.isdepartment = true
                if(this.appointment.appt_date != this.appointmentDetails.appt_date && this.appointment.department_id == this.appointmentDetails.department_id)
                    this.appointmentDetails.isdate = true
            }
            this.$emit('update',this.appointmentDetails)
        }
    },
    created(){
        this.getAllDepartment()
    },
    computed:{
        noChanges(){
            if(this.appointment.appt_date == this.appointmentDetails.appt_date && this.appointment.department_id == this.appointmentDetails.department_id)
                return true
            else return false 
        }
    },
    watch:{
        appointment:{
            handler(value){
                this.appointmentDetails = []
                this.ischange = true
                Object.assign(this.appointmentDetails,value)
                this.isfetching = false
            },deep:true
        }
    },
}
</script>
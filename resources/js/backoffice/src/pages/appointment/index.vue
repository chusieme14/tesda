<template>
    <div>
        <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
              right
              width="700"
          >
            <side-form
              :appointment="selectedAppointment"
              @update = "update"
            >

            </side-form>
        </v-navigation-drawer>
        <v-card
          elevation="1"
          :loading="isprocessing"
        >
          <v-card-title>
            For Approval
          </v-card-title>
          <v-card-text>
            <v-simple-table
            >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Email
                </th>
                <th class="text-left">
                  Gender
                </th>
                <th class="text-left">
                  Mobile number
                </th>
                <th class="text-left">
                  Date
                </th>
                <th class="text-left">
                  Learn Number
                </th>
                <th class="text-left">
                  Regular
                </th>
                <th class="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in appointments"
                :key="item.id"
              >
                <td>{{ item.first_name + ' ' + item.last_name}}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.mobile_number }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.learn_number }}</td>
                <td>{{ item.isregular?true:false }}</td>
                <!-- <td class="text-center">{{ item.department.short_name }}</td> -->
                <td class="text-center">
                  <v-btn fab
                    x-small color="primary"
                    @click="accept(item)"
                    :disabled="isprocessing"
                  >
                    <v-icon >mdi-check</v-icon>
                  </v-btn>
                  <!-- <v-btn fab
                    x-small color="success"
                    :disabled="isprocessing"
                    @click="selectedAppointment = item ,drawer = true"
                  >
                    <v-icon> mdi-pencil </v-icon>
                  </v-btn> -->
                  <v-btn  fab
                    x-small color="error"
                    :disabled="isprocessing"
                    @click="selectedAppointment = item, isdelete = true"
                  >
                    <v-icon > mdi-delete </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
          </v-card-text>
        </v-card>
        <v-dialog
            v-model="isdelete"
            max-width="290"
        >

          <dialog-confirmation
            :email = "selectedAppointment.email"
            @cancel = "cancel"
            @accept = "confirm"
          >

          </dialog-confirmation>
        </v-dialog>
    </div>
</template>
<script>
import SideForm from './sideform'
import DialogConfirmation from '../user/dialog'
export default {
    components:{
      SideForm,
      DialogConfirmation
    },
    data () {
      return {
        isdelete:false,
        drawer:false,
        appointments: [],
        user:[],
        isfetching:true,
        selectedAppointment:[],
        isprocessing:false
      }
    },
    methods:{
      getAppointments(){
        this.isfetching = true
        axios.get(`/admin/pending/appointments/`).then(({data})=>{
          this.appointments = data
          this.isfetching = false
        })
      },
      getAuthuser(){
        axios.get(`/auth/user`).then(({data})=>{
          console.log(data,"user")
          this.user = data
          this.getAppointments()
        })
      },
      accept(value){
        this.isprocessing = true
        value.user_id = this.user.id
        let payload = value
        axios.put(`/admin/accept/${value.id}/appointment`).then(({data})=>{
          this.getAppointments()
          this.isprocessing = false
          this.$toast.open({ message: `Approved`, position: 'top-right', type: "success", duration: 5000})
        })
      },
      update(value){
        this.drawer = false
        this.isprocessing = true
        axios.put('/admin/move/appointment',{...value}).then(({data})=>{
          this.getAppointments()
          this.isprocessing = false
          this.$toast.open({ message: `Appointment of ${value.lname +' '+value.fname} is successfully moved`, position: 'top-right', type: "success", duration: 5000})
        })
      },
      cancel(){
        this.isdelete = false
      },
      confirm(){
        this.isdelete = false
        this.isprocessing = true
        axios.delete(`/admin/remove/appointment/${this.selectedAppointment.id}`).then(({data})=>{
          this.getAppointments()
          this.isprocessing = false
          this.$toast.open({ message: `Removed`, position: 'top-right', type: "success", duration: 5000})
        })
      }
    },
    created(){
      this.getAppointments()
    }
}
</script>
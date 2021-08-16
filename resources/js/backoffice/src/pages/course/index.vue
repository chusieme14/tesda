<template>
    <div>
        <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
              right
              width="700"
          >
            <!-- <side-form
              :appointment="selectedAppointment"
              @update = "update"
            >

            </side-form> -->
        </v-navigation-drawer>
        <v-card
          elevation="1"
          :loading="isprocessing"
        >
          <v-card-title>
            {{$route.name.charAt(0).toUpperCase() + $route.name.slice(1)}}
          </v-card-title>
          <v-card-text>
            <v-simple-table
            >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Course Code
                </th>
                <th class="text-left">
                  Course title
                </th>
                <th class="text-left">
                  Description
                </th>
                <th class="text-left">
                  Duration
                </th>
                <th class="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in courses"
                :key="item.id"
              >
                <td>{{ item.fname + ' ' + item.lname}}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.mobile_number }}</td>
                <td>{{ item.appt_date }}</td>
                <td class="text-center">
                  <v-btn fab
                    x-small color="primary"
                    @click="accept(item)"
                    :disabled="isprocessing"
                  >
                    <v-icon >mdi-check</v-icon>
                  </v-btn>
                  <v-btn fab
                    x-small color="success"
                    :disabled="isprocessing"
                    @click="selectedAppointment = item ,drawer = true"
                  >
                    <v-icon> mdi-pencil </v-icon>
                  </v-btn>
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
// import SideForm from './sideform'
import DialogConfirmation from '../user/dialog'
export default {
    components:{
    //   SideForm,
      DialogConfirmation
    },
    data () {
      return {
        isdelete:false,
        drawer:false,
        courses: [],
        user:[],
        isfetching:true,
        selectedAppointment:[],
        isprocessing:false
      }
    },
    methods:{
      getCourses(){
        this.isfetching = true
        axios.get(`/admin/ongoing/courses/${1}`).then(({data})=>{
            console.log(data,"jsdhjsdhjsdhjsdh")
          this.courses = data
          this.isfetching = false
        })
      },
      getAuthuser(){
        axios.get(`/auth/user`).then(({data})=>{
          console.log(data,"user")
          this.user = data
          this.getCourses()
        })
      },
      accept(value){
        this.isprocessing = true
        value.user_id = this.user.id
        let payload = value
        axios.put('/admin/accept/appointment',{...payload}).then(({data})=>{
          this.getCourses()
          this.isprocessing = false
          this.$toast.open({ message: `Appointment of ${payload.lname +' '+payload.fname} is successfully updated`, position: 'top-right', type: "success", duration: 5000})
        })
      },
      update(value){
        this.drawer = false
        this.isprocessing = true
        axios.put('/admin/move/appointment',{...value}).then(({data})=>{
          this.getCourses()
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
          this.getCourses()
          this.isprocessing = false
          this.$toast.open({ message: `Appointment of ${this.selectedAppointment.lname +' '+this.selectedAppointment.fname} is successfully removed`, position: 'top-right', type: "success", duration: 5000})
        })
      }
    },
    created(){
      this.getAuthuser()
    }
}
</script>
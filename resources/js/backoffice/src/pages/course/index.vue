<template>
    <div>
        <v-navigation-drawer
              v-model="isadd"
              absolute
              temporary
              right
              width="600"
          >
            <side-form
              :course="selectedAppointment"
              @update = "update"
              @create = "create"
            >

            </side-form>
        </v-navigation-drawer>
        <v-card
          elevation="1"
          :loading="isprocessing"
        >
          <v-card-title>
            {{$route.name.charAt(0).toUpperCase() + $route.name.slice(1)}}
            <v-spacer></v-spacer>
            <v-btn v-if="$route.name!='removed'" @click="selectedAppointment=[],isadd=true">Add Course</v-btn>
          </v-card-title>
          <v-card-text>
            <v-simple-table
            >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Thumbnail
                </th>
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
                <th class="text-left">
                  Slots
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
                <td style="cursor:pointer;"
                  @click="selectedAppointment = item ,selectedThumbnail=item.thumbnail, isthumbnail=true"
                >
                  <v-avatar>
                    <img
                      :src="item.thumbnail"
                      alt="John"
                    >
                  </v-avatar>
                </td>
                <td>{{ item.course_code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.durations }}</td>
                <td>{{ item.slots }}</td>
                <td class="text-center">
                  <v-btn fab
                    v-if="$route.name=='incoming'"
                    x-small color="primary"
                    @click="accept(item)"
                    :disabled="isprocessing"
                  >
                    <v-icon >mdi-check</v-icon>
                  </v-btn>
                  <v-btn fab
                    x-small color="success"
                    :disabled="isprocessing"
                    @click="selectedAppointment = item ,isadd = true"
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
            @cancel = "cancel"
            @accept = "confirm"
          >

          </dialog-confirmation>
        </v-dialog>
        <v-dialog
            v-model="isthumbnail"
            max-width="450"
        >
          <div class="main-dialog">
            <div class="dia-thumbnail">
              <img class="update-image" @click="triggerUpload()" :src="selectedThumbnail" alt="">
              <input ref="file_input" accept=".pdf, .jpg, .png " style="display: none" type="file" @change="uploadFile()">
            </div>
            <div class="dia-btn">
              <v-btn @click="updateThumbnail()">save</v-btn>
            </div>
          </div>
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
        courses: [],
        user:[],
        isfetching:true,
        selectedAppointment:[],
        isprocessing:false,
        isadd:false,
        status:0,
        isthumbnail:false,
        selectedThumbnail:'',
      }
    },
    watch: {
      '$route' (to, from) {
        if(this.$route.name=='ongoing') this.status = 1
        if(this.$route.name=='removed') this.status = 2
        if(this.$route.name=='incoming') this.status = 0
        this.getCourses()
        console.log(this.status,"jdgshjadgsjdg")
      }
    },
    mounted(){
        if(this.$route.name=='ongoing') this.status = 1
        if(this.$route.name=='removed') this.status = 2
        if(this.$route.name=='incoming') this.status = 0
        this.getCourses()
    }, 
    methods:{
      updateThumbnail(){
        this.selectedAppointment.thumbnail = this.selectedThumbnail
        axios.post(`/admin/update/course-thumbnail`,this.selectedAppointment).then(({data})=>{
          // this.getCourses()
          this.isfetching = false
          this.$toast.open({ message: `Thumbnail is successfully updated`, position: 'top-right', type: "success", duration: 5000})
        })
      },
      uploadFile() {
           let vm = this;

            if (this.$refs.file_input.files && this.$refs.file_input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function(x) {
                    vm.selectedThumbnail = x.target.result;
                }
                reader.readAsDataURL(this.$refs.file_input.files[0]); // convert to base64 string
            }
        },
        triggerUpload() {
            this.$refs.file_input.click()
        },
      create(value){
        this.isadd = false
        value.status = this.status
        console.log(value)
        axios.post(`/admin/add/course`,value).then(({data})=>{
          this.getCourses()
          this.isfetching = false
          this.$toast.open({ message: `Course is successfully added`, position: 'top-right', type: "success", duration: 5000})
        })
      },
      getCourses(){
        this.isfetching = true
        axios.get(`/admin/ongoing/courses/${this.status}`).then(({data})=>{
          console.log(data,"ahsdgasgdjhsgjd")
          this.courses = data
          this.isfetching = false
        })
      },
      getAuthuser(){
        axios.get(`/auth/user`).then(({data})=>{
          this.user = data
          this.getCourses()
        })
      },
      accept(value){
        this.isprocessing = true
        axios.put(`/admin/active/course/${value.id}`).then(({data})=>{
          this.getCourses()
          this.isprocessing = false
          this.$toast.open({ message: `Appointment of ${payload.lname +' '+payload.fname} is successfully updated`, position: 'top-right', type: "success", duration: 5000})
        })
      },
      update(value){
        this.isadd = false
        this.isprocessing = true
        axios.put(`/admin/update/course/${value.id}`,{...value}).then(({data})=>{
          this.getCourses()
          this.isprocessing = false
          this.$toast.open({ message: `Course is successfully update`, position: 'top-right', type: "success", duration: 5000})
        })
      },
      cancel(){
        this.isdelete = false
      },
      confirm(){
        this.isdelete = false
        this.isprocessing = true
        axios.delete(`/admin/remove/course/${this.selectedAppointment.id}`).then(({data})=>{
          this.getCourses()
          this.isprocessing = false
          this.$toast.open({ message: `Appointment of ${this.selectedAppointment.lname +' '+this.selectedAppointment.fname} is successfully removed`, position: 'top-right', type: "success", duration: 5000})
        })
      }
    }
}
</script>
<style scoped>
.dia-thumbnail{
  display: flex;
  justify-content: center;
  background-color: white;
  margin-bottom: 30px;
}
.dia-btn{
  display: flex;
  justify-content: flex-end;
}
.main-dialog{
  padding: 20px;
}
.update-image{
  cursor: pointer;
  object-fit: cover;
  max-height: 400px;
  max-width: 400px;
}
</style>
<template>
    <div>
        <v-card
          elevation="1"
        >
          <v-card-title>
            Approval
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
                  Mobile number
                </th>
                <th class="text-left">
                  Date
                </th>
                <th class="text-left">
                  Person to visit
                </th>
                <th class="text-left">
                  Department
                </th>
                <th>
                  approved by
                </th>
                <th>
                  Reason
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in appointments"
                :key="item.id"
              >
                <td>{{ item.fname + ' ' + item.lname}}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.mobile_number }}</td>
                <td>{{ item.appt_date }}</td>
                <td>{{ item.PTV }}</td>
                <td>{{ item.department.short_name }}</td>
                <td>{{item.user.firstname + ' ' + item.user.lastname}}</td>
                <td>
                 {{ item.reason }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
          </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data () {
      return {
        appointments: [],
        user:[],
        isfetching:true,
        selectedAppointment:[]
      }
    },
    methods:{
      getAppointments(){
        this.isfetching = true
        axios.get(`/admin/appointment/approved/${this.user.id}`).then(({data})=>{
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
        let payload = value
        axios.put('/admin/accept/appointment',{...payload}).then(({data})=>{
          this.getAppointments()
          this.$toast.open({ message: `Appointment of ${payload.lname +' '+payload.fname} is successfully updated`, position: 'top-right', type: "success", duration: 5000})
        })
      }
    },
    created(){
      this.getAuthuser()
    }
}
</script>
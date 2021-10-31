<template>
    <div>
        <v-card v-if="true" class="mt-3">
            <v-card-title>{{course?'Update':'Add'}} Course</v-card-title>
            <v-card-text>
                <v-container>
                    <v-layout wrap row>
                        <v-flex xs12 md6>
                            <v-label>Code</v-label>
                            <v-text-field
                                solo
                                dense
                                v-model="courseDetails.course_code"

                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Title </v-label>
                            <v-text-field
                                solo
                                dense
                                v-model="courseDetails.name"

                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Duration </v-label>
                            <v-text-field
                                solo
                                dense
                                v-model="courseDetails.durations"

                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-label>Slot </v-label>
                            <v-text-field
                                solo
                                dense
                                v-model="courseDetails.slots"
                                
                            >

                            </v-text-field>
                        </v-flex>
                        <v-flex md12>
                            <v-label> Description</v-label>
                            <v-textarea
                                solo
                                dense
                                v-model="courseDetails.description"

                            >

                            </v-textarea>
                        </v-flex>
                        <v-flex style="margin-top:-20px" md3>
                            <v-btn
                                v-if="!courseDetails.id"
                                color="blue-grey"
                                class="white--text"
                                @click="triggerUpload()"
                            >
                            Upload
                            <v-icon
                                right
                                dark
                            >
                                mdi-cloud-upload
                            </v-icon>
                            </v-btn>
                        <input ref="file_input" accept=".pdf, .jpg, .png " style="display: none" type="file" @change="uploadFile()">
                        </v-flex>
                        <v-flex v-if="isupload" style="margin-top:-20px" md9>
                            <p>{{courseDetails.logo_name}}</p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <p v-if="haserror" style="color:red; margin-top:17px;"> please fill up all field above </p>

                <v-btn
                    class="ml-2"
                    color="primary"
                    @click="save"
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
        course:{

        }
    },
    data(){
        return{
            haserror:false,
            menu1:false,
            courseDetails:{
            },
            mindate:new Date().toString(),
            isfetching:true,
            departments:[],
            ischange:true,
            photo:'',
            isupload:false
        }
    },
    methods:{
        uploadFile() {
           let vm = this;

            if (this.$refs.file_input.files && this.$refs.file_input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(x) {
                    vm.photo = x.target.result;
                    vm.courseDetails.thumbnail = x.target.result;

                }
                reader.readAsDataURL(this.$refs.file_input.files[0]); // convert to base64 string
                this.courseDetails.logo_name = this.$refs.file_input.files[0].name
                this.isupload = true
                console.log(this.courseDetails.logo_name,"this.courseDetails.logo_name")
            }
        },
        triggerUpload() {
            this.$refs.file_input.click()
        },
        checkdata(){
        },
        // getAllDepartment(){
        //     axios.get('/admin/department/all').then(({data})=>{
        //         this.departments = data
        //     })
        // },
        save(){
            if(!this.courseDetails.course_code || !this.courseDetails.name || !this.courseDetails.durations
            || !this.courseDetails.description) return this.haserror = true
            if(this.courseDetails.id){
                this.$emit('update',this.courseDetails)
                return
            }
            this.$emit('create',this.courseDetails)
        }
    },
    created(){
        // this.getAllDepartment()
    },
    computed:{
        noChanges(){
            if(this.course.appt_date == this.courseDetails.appt_date && this.course.department_id == this.courseDetails.department_id)
                return true
            else return false
        }

    },
    watch:{
        course:{
            handler(value){
                this.courseDetails = {}
                this.ischange = true
                Object.assign(this.courseDetails,value)
                this.isfetching = false
            },deep:true
        },
        courseDetails:{
            handler(){
                if(!this.courseDetails.course_code && !this.courseDetails.name && !this.courseDetails.durations
                    && !this.courseDetails.description && !this.courseDetails.thumbnail)
                        this.haserror = false
            },deep:true
        }
    },
}
</script>

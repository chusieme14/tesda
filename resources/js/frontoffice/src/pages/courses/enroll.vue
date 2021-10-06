<template>
<div class='section-1'>

  <div class="split left">
    <div class="inputs-1st-layer">
        <div class="first-row">
          <v-text-field
            v-model="payload.last_name"
            :rules="[rules.required, rules.counter]"
            label="Last Name"
            counter
            maxlength="20"
            outlined
          ></v-text-field>
        </div>
        <div class="first-row">
          <v-text-field
            v-model="payload.first_name"
            :rules="[rules.required, rules.counter]"
            label="First Name"
            counter
            maxlength="20"
            outlined
          ></v-text-field>
        </div>
        <div class="first-row">
          <v-text-field
            v-model="payload.middle_name"
            :rules="[rules.required, rules.counter]"
            label="Middle Name"
            counter
            maxlength="20"
            outlined
          ></v-text-field>
        </div>
  </div>
  <div class="inputs-1st-layer">
        <div class="second-row">
          <v-select
          v-model="payload.gender"
          :items="items"
          label="Gender"
          outlined
        ></v-select>
        </div>
        <div class="second-row">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="payload.birth_date"
                label="Birthday date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker
                v-model="payload.birth_date"
                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                min="1950-01-01"
            ></v-date-picker>
          </v-menu>
        </div>
      <div class="second-row">
          <v-text-field
            v-model="payload.age"
            :rules="[rules.required]"
            label="Age"
            outlined
          ></v-text-field>
        </div>
    </div>
    <div class="inputs-1st-layer">
        <div class="third-row">
          <v-text-field
            v-model="payload.nationality"
            :rules="[rules.required]"
            label="Nationality"
            counter
            maxlength="20"
            outlined
          ></v-text-field>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.birthplace"
            :rules="[rules.required]"
            label="Birthplace"
            outlined
          ></v-text-field>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.educational_attainment"
            :rules="[rules.required]"
            label="Educational Attainment"
            outlined
          ></v-text-field>
        </div>
  </div>
  <div class="inputs-1st-layer">
        <div class="third-row">
          <v-text-field
            v-model="payload.employment_type"
            :rules="[rules.required]"
            label="Employment Type"
            outlined
          ></v-text-field>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.employment_status"
            :rules="[rules.required]"
            label="Employment Status"
            outlined
          ></v-text-field>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.home_address"
            :rules="[rules.required]"
            label="Home Address"
            outlined
          ></v-text-field>
        </div>
  </div>
  </div>

<!-- RIGHT SECTION -->
  <div class="split right">
    <div class="inputs-1st-layer">
        <div class="third-row">
          <v-text-field
            v-model="payload.guardian_name"
            :rules="[rules.required, rules.counter]"
            label="Guardian Name"
            counter
            maxlength="20"
            outlined
          ></v-text-field>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.guardian_address"
            :rules="[rules.required, rules.counter]"
            label="Guardian Address"
            counter
            maxlength="20"
            outlined
          ></v-text-field>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.email"
            :rules="[rules.required, rules.email]"
            label="Email"
            outlined
          ></v-text-field>
        </div>
    </div>
    <div class="inputs-1st-layer">
        <div class="third-row">
          <v-text-field
            v-model="payload.mobile_number"
            :rules="[rules.counter]"
            label="Mobile Number"
            counter
            maxlength="11"
            outlined
          ></v-text-field>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.tel_phone_number"
            label="Telephone Number"
            outlined
          ></v-text-field>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.agreement"
            :rules="[rules.required]"
            label="Agreement"
            outlined
          ></v-text-field>
        </div>
    </div>
    <div class="inputs-1st-layer">
        <div class="third-row">
          <FormulateInput
              v-model="payload.photo"
              type="file"
              placeholder="Photo"
              validation="required"
              style="border:1px solid;"
          />
        </div>
        <div class="third-row">
          <v-select
          v-model="payload.isregular"
          :items="item2"
          label="Are you regular?"
          outlined
        ></v-select>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.applicant_classification"
            :rules="[rules.required]"
            label="Applicant Classification"
            outlined
          ></v-text-field>
        </div>
    </div>
    <div class="inputs-1st-layer">
        <div class="third-row">
          <v-text-field
            v-model="payload.course_qualification"
            :rules="[rules.required]"
            label="Course Qualification"
            outlined
          ></v-text-field>
        </div>
        <div class="third-row">
          <v-text-field
            v-model="payload.scholar_type"
            :rules="[rules.required]"
            label="Scholar Type"
            outlined
          ></v-text-field>
        </div>
    </div>
  </div>
  <div>
      <v-btn
        fab dark
        color="blue"
        @click="save()"> SUBMIT
      </v-btn>
  </div>
</div>

</template>

<script>
const VueFormulate = require('@braid/vue-formulate')
Vue.use(VueFormulate.default)
export default {
    data(){
        return{
            items:['Male', 'Female'],
            item2:['Yes', 'No'],
            payload:{
                learn_number:'',
                last_name:'',
                first_name:'',
                middle_name:'',
                gender:'',
                birth_date:'',
                age:'',
                nationality:'',
                birthplace:'',
                educational_attainment:'',
                employment_type:'',
                employment_status:'',
                employer_name:'',
                civil_status:'',
                home_address:'',
                guardian_name:'',
                guardian_address:'',
                email:'',
                mobile_number:'',
                tel_phone_number:'',
                agreement:'',
                photo:'',
                isregular:'',
                applicant_classification:'',
                course_qualification:'',
                scholar_type:'',
            },
            rules: {
              required: value => !!value || 'Required.',
              counter: value => value.length <= 20 || 'Max 20 characters',
              email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
              },
            activePicker: null,
            menu: false,
          }
        }
    },
  methods: {
    save(){
       axios.post('/api/enroll', this.payload).then(({data})=>{
                this.departments = data
            })
    },
  }
}

</script>

<style scoped>
 .section-1{
   margin-left: 1%;
   margin-right: 1%;
   background-color:white;
   padding: 2em;
   border: 1px solid #a8a8a8;
   border-radius: .5em;
   box-sizing: border-box;
   display: flex;
   justify-content: space-between;
   width: 98%;
 }
  .inputs, .first-row, .second-row, .third-row, .fourth-row, .fifth-row {
    margin: 5px 5px;
  }

  .first-row, .second-row, .third-row {
    margin: 15px 15px;
  }

 .controls {
  display: flex;
}

.radio {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 650px) {
  .inputs-1st-layer {
    display: flex;
  }
}

@media (min-width: 720px) {
  .inputs-1st-layer, .first-row {
    display: block;
  }
}

@media (min-width: 850px) {
  .inputs-1st-layer, .first-row {
    display: flex;
  }
  .inputs-1st-layer .formulate-input {
    margin-right: 1.5em;
  }
}
.inputs-1st-layer .formulate-input {
  margin-right: 2em;
  margin-bottom: 0;
}

strong {
  display: block;
  margin: 1em 0;
}

code {
  margin-top: 2em;
}
.split {
  height: 100%;
  width: 50%;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
}

.left {
  left: 0;
}

.right {
  right: 0;
}
</style>


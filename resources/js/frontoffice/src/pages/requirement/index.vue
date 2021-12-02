<template>
    <div>
        <v-card class="cus-card">
            <v-card-title>
                <v-spacer></v-spacer>
                <v-icon color="white" @click="$emit('close')" class="icon-p">mdi-window-close</v-icon>
            </v-card-title>
            <v-card-text>
                <h2 class="mb-2">No. of slots: {{courseDetails.slots}}</h2>
                <h2>List of Requirements</h2>
                <template v-for="requirement in requirements">
                    <h4>{{requirement}}</h4>
                </template>
                <p class="mt-3">
                    Scholarship Program
                </p>
                <v-btn @click="$router.push({name:'enroll'})" color="white" text width="100%"> CONTINUE </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            courseDetails:{},
            requirements:[]
        }
    },
    props:{
        course:{

        }
    },
    watch:{
        course:{
            handler(value){
                console.log(value,"couse new")
                Object.assign(this.courseDetails,value)
                this.requirements = value.requirements.split("\n")
                console.log(this.requirements,"this.requirements")
            },immediate:true
        },
    }
}
</script>
<style lang="scss" scoped>
    .cus-card{
        background: rgb(33, 122, 224);
        h2{
            font-size: 30px;
            margin-top: 10px;
            color: white;
        }
        h4{
            color: white;
            margin-left: 10px;
            font-size: 30px;
            margin-top: 15px;
        }
        p{
            color: white;
            font-size: 20px;
        }
    }
</style>
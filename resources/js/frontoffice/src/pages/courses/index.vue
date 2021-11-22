<template>
        <div style="padding: 20px" class="container-grid mt-2">
            <table style="width: 70%" class="center">
                <thead>
                    <tr>
                    <th class="text-left"> <h1>Program Title</h1> </th>
                    <th class="text-left"> <h1>Duration</h1> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in courses" :key="item.id" @click="getCourses">
                        <th class="text-left"> <h1 style="padding: 5px">
                                <v-avatar style="margin-right: 20px">
                                    <img
                                        :src="item.thumbnail"
                                    >
                                </v-avatar>
                            {{item.name + ' ' + item.course_code}}
                        </h1> </th>
                        <th class="text-left"> <h1 style="padding: 10px">{{item.durations + ' hours'}}</h1> </th>
                    </tr>
                </tbody>
            </table>
            <div style="height: 250px">

            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            isfetching: false,
            courses: false
        }
    },
    mounted() {
        this.getCourses()
    },
    methods: {
        getCourses(){

            this.isfetching = true
            axios.get(`/front/courses/${1}`).then(({data})=>{
                this.courses = data
                this.isfetching = false
                console.log(data)
            })
        },
    }
}
</script>

<style scoped>


    /* .container-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(70vw, 1fr));
        grid-auto-rows: 50px;
    } */
    .center {
        margin-left: auto;
        margin-right: auto;
    }

    /* .card-container:hover {
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        border: 1px solid #171d30;
    } */
</style>

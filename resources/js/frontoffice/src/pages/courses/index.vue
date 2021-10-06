<template>
    <div style="padding: 20px" class="fixed-container container-grid mt-2">
        <v-simple-table :color="transparent">
            <thead>
                <tr>
                <th class="text-center"></th>
                <th class="text-left"> <h1>Name</h1> </th>
                <th class="text-left"> <h1>Name</h1> </th>
                <th class="text-left"> <h1>Name</h1> </th>
                <th class="text-left"> <h1>Name</h1> </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in courses" :key="item.id" >
                <th class="text-center"></th>
                <th class="text-left"> <h1>Name</h1> </th>
                <th class="text-left"> <h1>Name</h1> </th>
                <th class="text-left"> <h1>Name</h1> </th>
                <th class="text-left"> <h1>Name</h1> </th>
                </tr>
            </tbody>
        </v-simple-table>
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


    .container-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(70vw, 1fr));
        grid-auto-rows: 50px;
    }
    .course-img{
        max-height: 200px;
        max-width: 50px;
    }
    .card-container {
        z-index: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* background: #171d30; */
        color: #263238;
        /* box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem; */
        height: 100%;
        width: 100%;
        border-radius: 4px;
        transition: all 500ms;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* opacity: 0.5; */
    }

    /* .card-container:hover {
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        border: 1px solid #171d30;
    } */
</style>

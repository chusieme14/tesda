<template>
    <div style="padding: 20px;" class="fixed-container container-grid">
         <div v-for="(course, id) in courses"  :key="id" class="card-container">
             {{id}}
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
    mounted(){
        this.getCourses
    },
    methods:{
        getCourses(){
            this.isfetching = true
            axios.get(`/admin/ongoing/courses/${1}`).then(({data})=>{
                this.courses = data
                this.isfetching = false
            })
        },
    }
}
</script>

<style scoped>

    .fixed-container{
        overflow: auto;
        overflow-x: hidden;
        min-height: 57vh;
        max-height: 57vh;
    }

    .container-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-auto-rows: 150px;
    }

    .card-container {
        z-index: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: #171d30;
        color: #f4f7fb;
        box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        transition: all 500ms;
        overflow: hidden;
        border: 1px solid #37474F;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.5;
    }
    
    /* .card-container:hover {
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        border: 1px solid #171d30;
    } */
</style>
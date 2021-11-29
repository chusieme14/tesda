<template>
    <div style="padding: 20px" class="container-grid mt-2">
        <v-card>
            <v-card-title>
                <h3>
                    Company Profile 
                </h3>
            </v-card-title>
            <v-card-text>
                <p class="text">
                    SOS Children’s Villages is an international non-government organization that provides alternative family based care for orphaned, abandoned and neglected children. It was founded by Hermann Gmeiner in 1949 in Imst, Austria. He was committed to helping children in need – children who had lost their homes, their security and their families as a result of the Second World War.  With the support of many donors and co-workers, our organization has grown to help children all over the world.  

                    We take action for children as an independent non-governmental social development organization. We respect varying religions and cultures, and we work in countries and communities where our mission can contribute to development. We work in the spirit of the United Nations Convention on the rights of Child and we promote these rights around the world.  
     
                    With the SOS Children’s Village concept, our organization pioneered a family approach to the long-term care of orphaned and abandoned children.
                </p>
            </v-card-text>
        </v-card>
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
    .text{
        font-size: 20px;
        line-height: 2;
        color: black;
    }
</style>

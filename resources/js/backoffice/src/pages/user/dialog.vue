<template>
    <div>
        <v-card>
            <v-card-title class="headline">
                Delete
            </v-card-title>

            <v-card-text>
                Are you sure you want to remove {{email}}?
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="green darken-1"
                text
                @click="cancel"
            >
                Disagree
            </v-btn>

            <v-btn
                color="green darken-1"
                text
                @click="accept"
            >
                Agree
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    props:{
        email:{
            type:String
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        accept(){
            this.$emit('accept')
        },
        cancel(){
            this.$emit('cancel')
        }
    },
    created(){

    }
}
</script>
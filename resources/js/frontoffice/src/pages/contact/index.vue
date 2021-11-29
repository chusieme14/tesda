<template>
    <v-card>
        <v-card-title>
            <span class="text-h5">Contact us</span>
            <v-spacer></v-spacer>
            <v-icon @click="$emit('close')" class="icon-p">mdi-window-close</v-icon>
        </v-card-title>
        <v-card-text>
        <v-container>
            <v-row>
                <v-col
                    cols="12"
                >
                    <label class="mb-1">Your name</label>
                    <v-text-field
                        solo
                        dense
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="cus-row">
                <v-col cols="12">
                    <label class="mb-1">Your email address</label>
                    <v-text-field
                        solo
                        dense
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="cus-row">
                <v-col cols="12">
                    <label class="mb-1">Your message</label>
                    <v-textarea
                        solo
                        dense
                        required
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row class="cus-row">
                <v-col cols="12">
                    <v-btn color="primary" height="38px" min-width="100%">Send Message</v-btn>
                </v-col>
            </v-row>
        </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data(){
        
    }
}
</script>
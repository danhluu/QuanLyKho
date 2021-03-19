<template>
  <v-dialog
      v-model="dialog"
      width="1000"
      
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          dark
          v-bind="attrs"
          v-on="on"
          class="mb-3 dark_navigation"
          height="40"
        >
          Thêm mới sản phẩm
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          THÔNG TIN SẢN PHẨM
          <v-btn class="btn_grey btn-close" 
                @click="dialog = false" 
                depressed
                height="50">
                <v-icon large class="black--text">mdi-close-thick</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text>
            
            <v-form class="mt-3">
                <v-layout row wrap justify-space-around>
                    <v-flex md5>
                        <v-text-field label="Title" autofocus>
                        </v-text-field>
                    </v-flex>
                    <v-flex md5 class="">
                        <v-text-field label="Title">
                        </v-text-field>
                    </v-flex>
                    <v-flex md5>
                        <v-text-field label="Title" autofocus>
                        </v-text-field>
                    </v-flex>
                    <v-flex md5 class="">
                        <v-text-field label="Title">
                        </v-text-field>
                    </v-flex>
                    <v-flex md5>
                        <v-text-field label="Title" autofocus>
                        </v-text-field>
                    </v-flex>
                    <v-flex md5 class="">
                        <v-text-field label="Title">
                        </v-text-field>
                    </v-flex>
                </v-layout>
            </v-form>
            
          
        </v-card-text>

        <v-divider class="mt-4"></v-divider>

        <v-card-actions class="">
            
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" height="50" width="100" depressed class="mr-3">Huỷ</v-btn>
          <v-btn
            @click="dialog = false"
            height="50"
            class="success white--text"
            width="100"
          >
            Thêm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,

        }
    }
}
</script>
<style scoped>
.btn-close{
    position: absolute;
    top: 0;
    right: 0;
}
</style>
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
            
            <v-form class="mt-3" ref="formValidate">
                <v-layout row wrap justify-space-around>
                    <v-flex md5 class="">
                        <v-text-field v-model="product.Name" label="Tên" required :rules="nameRules">
                        </v-text-field>
                    </v-flex>

                    <v-flex md5 class="">
                      <v-select
                      v-model="CategoryId"
                      :items="items"
                      item-text="Name"
                      item-value="id"
                      label="Select"
                      persistent-hint
                      return-object
                      single-line
                      required 
                      :rules="quantityRules"
                      ></v-select>
                    </v-flex>

                    <v-flex md5>
                        <v-text-field v-model="product.Quantity" required :rules="quantityRules" label="Số Lượng"  >
                        </v-text-field>
                    </v-flex>
                    
                    <v-flex md5 class="">
                        <v-text-field
                          label="Giá"
                          prefix="$"
                          v-model="product.Price"
                          required :rules="quantityRules"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md5>
                        <v-text-field v-model="product.Description"  label="Chi Tiết" >
                        </v-text-field>
                    </v-flex>
                    <v-flex md5 class="">
                        <v-text-field v-model="product.DisplayOrder" label="DisplayOrder">
                        </v-text-field>
                    </v-flex>
                    <v-flex md3 class="">
                        <v-file-input
                          truncate-length="10"
                          accept="image/png, image/jpeg, image/bmp"
                          placeholder="Chọn ảnh"
                          show-size
                          v-model="getImage" 
                          label="Hình Ảnh"
                        ></v-file-input>
                    </v-flex>
                </v-layout>
            </v-form>
            
          
        </v-card-text>

        <v-divider class="mt-4"></v-divider>

        <v-card-actions class="">
            
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" height="50" width="100" depressed class="mr-3">Huỷ</v-btn>
          <v-btn
            @click="saveProduct"
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
import { db } from '@/fireBase'
export default {
    data(){
        return{
           items: [

           ],
           CategoryId:"",
          code: '',
          dialog: false,
          getImage:{},
          nameRules: [
            v => !!v || 'Nhập tên',
            v => (v && v.length >= 2) || 'Tên ít nhất 2 ký tự',
          ],
          quantityRules: [
            v => !!v || 'Không được để trống',
          ],
          product:{
            CreatedDate: new Date(),
            Description:"",
            DisplayOrder:"",
            Image:"",
            ModifiedDate:"",
            Weight:"",
            ProductCategoryId:""
          }
        }
    },
    mounted(){
      this.created();
    },
    methods:{
      saveProduct(){
        if(this.$refs.formValidate.validate()){
          if(this.product.Quantity==null){
            this.product.Quantity=1;
          }
          if(this.getImage.name!=null)
            this.product.Image = this.getImage.name;
          if(this.CategoryId.id!=null){
            this.product.ProductCategoryId = this.CategoryId.id;
          }
          const pr = this.product;
          db.collection('Product').add(pr).then(
            () =>{
              console.log("added" )
              console.log(pr)
            }
          );
          this.dialog = false;
        }
        
      },
      async created(){
        let Product = await db.collection('ProductCategory').get('');
        let item = [];
        Product.forEach(doc =>{
          let appData = doc.data();
          appData.id = doc.id;
          item.push(appData);
        });
        this.items = item;
        console.log(this.items[0]);
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
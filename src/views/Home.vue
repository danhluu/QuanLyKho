<style scoped>
</style>

<template>
  <v-container>
    <v-card-title class="mb-5">
      DANH SÁCH SẢN PHẨM
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <AddProduct />
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      height="580"
      fixed-header
      :footer-props="{
        'items-per-page-options': [3,5, 10, 20, 50, 1000],
        showFirstLastPage: true,
        firstIcon: 'mdi-chevron-double-left',
        lastIcon: 'mdi-chevron-double-right',
        prevIcon: 'mdi-chevron-left',
        nextIcon: 'mdi-chevron-right',
           'items-per-page-text':'Số Sản Phẩm / Trang',
      }"
      :items-per-page="5"
      no-results-text="Không có"
    >
      <template  v-slot:item="{ item }">

        <tr @dblclick="rowClicked(item)" class="mb-3 body-1" style="">
          <td style="width:15%;"><img class="ma-2" style="width:100px;height:100px" :src="item.calories" alt=""></td>
          <td style="width:23%;">{{item.name}}</td>
          <td style="width:15%;">{{item.fat}}</td>
          <td style="width:15%;">{{item.carbs}}</td>
          <td style="width:10%;">{{item.protein}}</td>
          <td style="width:10%;">{{item.iron}}</td>
          <td style="width:12%;">
            <v-btn dark class="primary">Sửa</v-btn>
            <v-btn class="ml-2">Xoá</v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import AddProduct from "./AddProduct"
  export default {
    components:{
      // Edits,
      AddProduct
    },
    data () {
      return {
        selectedRows: [],
        search: '',
        headers: [
          { text: 'Hình Ảnh', value: 'calories', class:'text-lg-h6'},
          {
            text: 'Tên',
            align: 'start',
            // sortable: false,
            value: 'name',
            class:'text-lg-h6'
          },
          { text: 'Fat (g)', value: 'fat',class:'text-lg-h6' },
          { text: 'Carbs (g)', value: 'carbs' ,class:'text-lg-h6'},
          { text: 'Protein (g)', value: 'protein' ,class:'text-lg-h6'},
          { text: 'Iron (%)', value: 'iron' ,class:'text-lg-h6'},
          { text: 'Chức năng', value: 'option' ,class:'text-lg-h6'},
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 'https://upload.wikimedia.org/wikipedia/vi/d/d6/Itachi.jpg',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ốc vít',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }

    },
    methods:{
      rowClicked(row){
        console.log(row)
      },
    },
    computed:{
      pageTxt(){
        return this.$vuetify.dataFooter.pageText
      }
    }
  }
</script>
<style scoped>
td{
  border-left: 1px solid #e0e0e0;
  font-size:20px !important;
}
.v-data-footer__select{
  font-size: 30px !important;
}
h2{
  
}
</style>
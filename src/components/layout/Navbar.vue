<style scoped>
</style>

<template>
  <nav>
    <v-app-bar flat app class="tool_bar" height="50">
        <v-app-bar-nav-icon class="" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
            <span class="font-weight-light">quan ly </span>
            <span class="red--text"> kho</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="dark_navigation white--text">
        <v-list shaped>
            <v-subheader class="white--text">REPORTS</v-subheader>
            <v-list-item-group v-model="selectedItem">
                <v-list-item v-for="(item, i) in items" :key="i.text" router :to="item.route">
                    <v-list-item-icon>
                        <v-icon class="white--text" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text" v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
      
  </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: true,
            selectedItem: 0,
            items: [
                { text: 'Danh Sách Sản phẩm', icon: 'mdi-clock', route: "/" },
                { text: 'Danh Mục Sản Phẩm', icon: 'mdi-account', route: "/about" },
                { text: 'Conversions', icon: 'mdi-flag',route: "/ndl" },
                { text: 'Grids', icon: 'mdi-flag',route: "/grids" },
            ],
        }
    }
}
</script>

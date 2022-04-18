<template>
  <div id="app">
      <div class="w3-top">
      <div class="w3-bar w3-indigo" style="letter-spacing:4px;">
        <h5 class="w3-bar-item">Корзина</h5>
      </div>
      </div>
      <div class="w3-padding " style=";">
     
     <br><br>
     <el-row class="w3-margin-top">
        <el-col :sm="12" :md="12" :lg="24" class="" v-for="t of ShopCart" :key="t.id" style="margin:3px">
            <el-card style="font-size:10pt;height:250px">
               <el-col :span="12">
                  <img src="https://sibcolor.ru/upload/iblock/9c4/9c4fce96c48aa2e25ee44fe2a1494920.jpg" height="200px">   
               </el-col>
               <el-col :span="12" class="w3-padding">
                  <b>{{ t.tovar_name }}</b>
                  <br>
                  Количество: {{ t.tovar_col }}
                  <br>
                  <b class="w3-text-blue">{{ t.tovar_brend }}</b>
                  <br>
                  <el-row>
                      <button>
                          <i class="fa fa-minus"></i>   
                      </button>
                       <button>
                           <span class=""> {{ t.tovar_col }} </span>
                       </button>
                       <button>
                           <i class="fa fa-plus" ></i>   
                       </button>
                       
                  </el-row>
                  <el-button type="danger" class=" w3-margin-top" icon="fa fa-trash" @click="del(t)" plain></el-button>
               </el-col>
            </el-card> 
        </el-col>
        
     </el-row>
  
      </div>

     <el-drawer
  title="Добавить товар"
  :visible.sync="drawer"
  size="50%"
  :with-header="false">
  <div class="w3-padding">
      <h4>Добавить товар</h4>
      <el-select v-model="main_menu_id" placeholder="Выбрать категорию">
          <el-option v-for="m of Menu" :key="m.id" :label="m.name" :value="m.id"></el-option>
      </el-select> <br >
      <el-select class="w3-margin" v-model="tovar.tovar_menu_id" placeholder="Выбрать подкатегорию">
          <el-option v-for="m of MenuSecond" :key="m.id" :label="m.name" :value="m.id"></el-option>
      </el-select>
      <add-kraski :tovar="tovar">
      </add-kraski>
        
  </div>
</el-drawer> 
<el-drawer
  title="Добавить характеристики товара"
  :visible.sync="drawer2"
  size="50%"
  :with-header="false">
  <div class="w3-padding">
      <h4>Характеристики товара</h4>
      <fieldslist></fieldslist>        
  </div>
</el-drawer> 
  </div>
</template>

<script>
import AddKraski from '@/components/AddKraski.vue';
import fieldslist from '@/components/FieldsList.vue';
import {store} from '../store';

// import AddKraski from './components/AddKraski.vue';

export default {
  name: 'app',
  data(){
    return {
      tovar:{
        tovar_menu_id:'',
        tovar_name:'',
        tovar_brend:'',
        tovar_name_kraski:'',
        tovar_price:'',
        tovar_kod_kraski:'',
        tovar_col:'',
      },
      drawer:false,
      drawer2:false,
      main_menu_id:'',
      filter_sel:'',
      options: [{
          value: 'rP22mCVabKldDw5pqNN8',
          label: 'Автоэмали и краски',
          children: [
            {
            value: '1CGV2d4lcgSQJBPIEjGN',
            label: 'Акриловые',
            },
            {
            value: 'X66Umvw374W1Q6rWb7P3',
            label: 'Алкидные',
            },
            {
            value: 'wOwlKZ83bo8XUUiuT5Bj',
            label: 'Металлик',
            }
          ]
      },
      {
        value:"QgzEIoXY27R5tOp2rSdb",
        label:'Лаки',
        children:[
          {
            value: 'uxmD6iUYyOzu7q1SwsNl',
            label: '2К акриловые'
          },
          {
            value: 'ai80KVO6PfA9b4LEvhBF',
            label: 'Аэрозольные'
          },
          {
            value: 'XoDyuhI51u74sVrvH0cA',
            label: 'Изолятор'
          },
          {
            value: 'ujpmsLquBhxz9duvE19E',
            label: 'Эпоксидные'
          },
          {
            value: 'H5Zc5YJ8i5cJqtLMjGcu',
            label: 'По пластмассе'
          },
          
        ]  
      }

      
      
      
      ]     
    }
  },
  components:{
    AddKraski,fieldslist
  }
  ,
  computed:{
    
    ShopCart(){ return store.state.shopCart;},
    Menu(){ return store.state.menu;},
    MenuSecond(){ return store.state.menuSecond.filter((n)=>{ return n.mainM_id.match(this.main_menu_id) });},
    

  },
  methods:{
      del(t){
          console.log(t)
      },
     shop(t){
        
        console.log(t) 

        // store.dispatch('Shopping',t)
     },
     openModal(){
        this.drawer = true 
     },
      openModal2(){ this.drawer2 = true },
     deleteRow(index, td){
       console.log(index+','+td)
       store.dispatch("deleteFromTovar",index)    
     }
  }
  ,
  created(){
     store.dispatch("bindTovar");
     store.dispatch("bindMenu");
     store.dispatch("bindMenuSec");
  },
  watch:{
    filter_sel(to){
       console.log(to[1].toString())

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  padding-bottom: 50px;
}
</style>

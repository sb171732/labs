<template>
  <div class="home">
        
        <table class="w3-table">
               <tr>
                   <th>#</th> <th>fio</th> 
                   <th>Reged</th>
                   <th>Структура программы</th>
                   <th>Условный оператор </th>
                   <th>Оператор выбора</th>
                   <th>Цикл for</th>
                   <th>Массивы</th>
                   <th>#1</th>
                   <th>#2</th>
                   <th>#3</th>
                   <th>#4</th>
                   <th>#5</th>
                   <th>#6</th>
                   <th>#7</th>
                   <th>#8</th>
                   <th>#9</th>
                   <th>#10</th>
                   <th>#11</th>
                   <th>#12</th>
                   <th>#13</th>
                   <th>#14</th>
                   <th>#15</th>
                   <th>Зачет</th>
               </tr>
               <tr v-for="(s,index) of Group" :key="s.id">
                    <td>{{ index }} </td>
                    <td>{{ s.fio }} </td>
                    <td v-if="s.uid!=''"><i class="el-icon-success w3-text-green"></i> </td>
                    <td v-else> <i class="el-icon-remove w3-text-red"></i> </td>
                    
               </tr>
        </table>
         <el-drawer
  title="I am the title"
  :visible.sync="drawer"
  :with-header="false">
  <span>Hi there!</span>
</el-drawer>
  </div>
</template>

<script>
// @ is an alias to /src
import {store} from '../store'
export default {
      name: 'Home',
      data(){
          return {
                  checked:false,
                  drawer:false
          }
      },
      computed:{
          Group(){
            return store.state.group20A
          },
          // Test(){
          //   return store.state.test20a
          // },
        
      },
      methods:{
        getTestResult(uid,num){
           return this.Test.filter((n)=>{ return (n.uid.match(uid)&&(n.num.match(num))) })   
        } 
      },
      created(){
        store.dispatch("bindGroup20A");
        // store.dispatch("bindTest93");
    }
}
</script>
<style>
    .wd{
      width: 50px;
      
      transform:rotate(270deg)
    }
</style>
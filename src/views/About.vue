<template>
  <div class="home">
        
        <table class="w3-table">
               <tr>
                   <th>#</th> <th>fio</th> 
                   <th>Основы HTML / CSS</th>
                   <th>JS 1</th>
                   <th>JS 2</th>
                   <th>JS 3</th>
                   <th>JS 4</th>
                   <th>JS 5</th>
                   <th>JS 6</th>
                   <th>JS 7</th>
                   <th>PHP 1</th>
                   <th>PHP 2</th>
                   <th>PHP 3</th>
                   <th>Wordpress</th>
                   <th>Зачет</th>
               </tr>
               <tr v-for="(s,index) of Group" :key="s.id">
                    <td>{{ index }} </td>
                    <td>{{ s.fio }} </td>
                    
               </tr>
        </table>
  </div>
</template>

<script>
// @ is an alias to /src
import {store} from '../store'
export default {
      name: 'Home',
      data(){
          return {
                  checked:false
          }
      },
      computed:{
          Group(){
            return store.state.group93
          },
        
      },
      methods:{
        getPara(num,groupId,weekId){
           return this.Para.filter((n)=>{ return (n.num.match(num))&&(n.groupId.match(groupId))&&(n.weekId.match(weekId)) })   
        },
        getSubjects(id){
           return this.Subjects.filter((n)=>{ return n.id.match(id) })   
        } 
      },
      created(){
        store.dispatch("bindGroup93");
    }
}
</script>
<style>
    .wd{
      width: 50px;
      
      transform:rotate(270deg)
    }
</style>
<template>
  <div class="home">
        <table class="w3-table">
               <tr>
                   <th>#</th> <th>fio</th> 
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
                   <th>#16</th>
                   <th>#17</th>
                   <th>#18</th>
                   <th>#19</th>
                   <th>#20</th>
                   
                   <th>Зачет</th>
               </tr>
               <tr v-for="(s,index) of Group20A" :key="s.id">
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
     Group20A(){
       return store.state.group20A
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
     store.dispatch("bindGroup20A");
}
}
</script>
<style>
    .wd{
      width: 50px;
      
      transform:rotate(270deg)
    }
</style>
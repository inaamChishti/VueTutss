<template>
<h1 id="h1" >hi i am inaam's component {{ message }}22</h1>
<br>
<h1>email:{{ email }}</h1>
<br>
<h1>phone:{{ phone }}</h1>
<br>
<h1>name:{{ getName('naamu') }}</h1>
<br>
<h1>loc:{{ getLoc('').locName }} . LAT: {{ getLoc('').lat }}</h1>
<b></b>
<button v-on:click="test()">click me</button>
<input type="text" v-model="data"/>
{{ data }}
<br><br>
<br><br>
<input type="text" v-model="school" />
<br><br>
<input type="text" v-model="shiksha"/>
<br><br><br><br>
<button type="button" v-on:click="getVals()">get values</button>
<br><br><br><br>
<br><br><br><br>
<label for="java">java</label>
<input type="checkbox"  value="java"  id="java" v-model="tech">
<br>
<label for="php">php</label>
<input type="checkbox"   value="php" id="php" v-model="tech">
<br>
<label for="js">js</label>
<input type="checkbox"   value="js"  id="js" v-model="tech">
{{ tech }}

<br><br><br><br><br><br><br><br>
<label for="student">student</label>
<input type="radio" name="who"   value="student"  id="student" v-model="who">
<br>
<label for="job">job</label>
<input type="radio" name="who"   value="job"  id="job" v-model="who">
<br>
{{ who }}
<br><br><br>
<h1 v-if="isTrue === true">This is if condition</h1>
    <h1 v-else-if="isTrue === 'on'">Else if</h1>
    <h1 v-else>This is else condition</h1>
    <br>
    <button v-on:click="toggle">Toggle</button>
    <br>
    <li v-for="item in technology" :key="item.name"> 
        {{ item === 'java' ? 'Chishti' : item }}
    </li>
    <l1 v-for="item in users" :key="item.name"> 
        <p v-if="item.name === 'Inaam'">INAAM QADIR</p>
        <p v-else>{{ item.name }}</p>
        <p>{{ item.address }}</p>
        <p>{{ item.phone }}</p>
        
     </l1>
     <HelloWorld />
<MyNew message="this is msg" :technology="technology" :users="users" :toggle="toggle" />
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue';
import MyNew from '../components/MyNew.vue';

export default{
    name:'HelloInaam',
    components: {
        MyNew,
        HelloWorld, // Register ChildComponent
    },
    data()
    {
        return{
            technology: ['java','php','inaam'],  
          users: [{name: 'Inaam',address: 'faisal colony bahawalnagar',phone: '98280982'},{name:'haris' , address:'chishtian road bahawalnagar', phone: '908089'}],
            isTrue:true,
            who:[],
            tech:[],
            school: null,
            shiksha:null,
            data: 12,
            email:"inaam.chishti2@gmail.com",
            phone:"098098988",
            getName(a)
            {
                return a
            },
        }
    },
    methods:{
        toggle() {
      this.isTrue = this.isTrue === 'on' ? true : (this.isTrue === true ? false : 'on');
    },
        getVals()
        {
            alert(this.school);
        },
        getLoc()
        {
            return {
                lat:'0l878979',
                locName: "bahawalnagar",
            }
        },
        test()
        {
           this.data = this.data+1
        },
    },
  props:{
    message:String,
  },
}

</script>

<template>
  <router-link to="/footer">home</router-link>
  <router-link to="/login">login</router-link>
  <router-link to="/main">main</router-link>
  <router-view></router-view>
  <ChildComponent :getfun="getName" />
  <HelloWorld msg="Welcome a to Your Vue.js App"/>
  <HelloInaam message="sending msg from main app.vue file" />
  <CurrentComponent>
    <template v-slot:header>
      <h1>hiiii header</h1>
    </template>
    <template v-slot:footer>
      <h1>hiiii footer</h1>
    </template>
    
  </CurrentComponent>
    <ChildToParent :getFun="getCurrentNAme"/>
    <br>
    
<h1>this is proped<br>{{name}}</h1>
<br>
<br>

<!-- dynamic compinents -->
<button @click="tab = 'javaLang'">load java</button>
<button @click="tab = 'pythonLang'">load pythonLang</button>
<button @click="tab = 'phpLang'">load phpLang</button>
<component :is="tab"></component>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HelloInaam from './components/HelloInaam.vue';
import ChildComponent from './components/ChildComponent.vue';
import CurrentComponent from './components/CurrentComponent.vue';
import ChildToParent from './components/ChildToParent.vue';
import javaLang from "./components/javaLang.vue";
import pythonLang from "./components/pythonLang.vue";
import phpLang from "./components/phpLang.vue";




export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloInaam,
    ChildComponent,
    CurrentComponent,
    ChildToParent,
    javaLang,
    phpLang,
    pythonLang,

  },
  data()
    {
        return {name:'',
        tab:'javaLang',
         
        }
    },
  methods:{
    getName(name)
    {
      alert(name);
    },
    getCurrentNAme(a)
    {
      
      return this.name = a;
    }
  },
}
</script>



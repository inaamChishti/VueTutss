<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1> below is new component</h1>
    <br>
    <!-- <HelloInaam /> -->
    <p>
    </p>
  </div>
</template>

<script>
// import HelloInaam from '../components/HelloInaam.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    // HelloInaam,
  }
}
</script>




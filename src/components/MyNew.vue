<template>




    <h1 :class="{green:colorfull}">ok i am here</h1>
    <br>
    <button v-on:click="colorfull=!colorfull">change css</button>
    {{ message }}
   
    <li v-for="item in technology" :key="item">
                {{ item }}
            </li>

            <li v-for="item in users" :key="item.name">
                <p>
                    {{ item.name }}
                </p>
                <p>
                    {{ item.address }}
                </p>
                <p>
                    {{ item.phone }}
                </p>
            </li>

            <button v-on:click="toggle">toogle2</button>
           <p v-html="textt" style=""></p>
   
</template>
<script>
export default{
    name:'MyNew',
    data()
    {
        return{textt: '<h1>inaam chishtijsdnkn</h1>',colorfull:true,}    
    },
    props:{
        message:String,
        technology: Array,
        users: Object,
        toggle:Array
    },
}
</script>
<style scoped>
    .green{
        background-color: green;
    }
</style>
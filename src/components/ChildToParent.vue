<template>
    <h1>send data from child to parent</h1>
<button v-on:click="getFun(name)">click me</button>

</template>
<script>
export default{
    name:'ChildToParent',
    data()
    {
        return {name:'inaam',
           
        }
    },
    props:{
        getFun:Function,
    }
}
</script>
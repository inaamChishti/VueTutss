<template>
 <form>
    <input type="text" name="email" id="" placeholder="email" v-model="form.email">
    <br>
    <input type="password" name="password" id="" v-model="form.password">
    <br>
  {{ form }}
    </form>
    <button v-on:click="getVal">submit</button>
    <br>
<br>
<h1> hi i am child</h1>
<br>
<button v-on:click="newMth">send name</button>
<input type="text" name="" id="" v-model="myName" >
<br>
<input type="text" ref="nomi">
<button v-on:click="runFun">click me</button>


<br>
<h1> hi i am ref child</h1>s
<input type="text" name="name" ref="input" id="">
<input type="text" name="name" ref="inputs" id="">
<button v-on:click="getdata()">
    click me
</button>


</template>
<script>
export default{
    component:{
       name: 'ChildComponent',
    },
    data()
    {
        return {
            myName:null,
            form: {
                email: '',
                password: '',
            }
        }
    },
    props:{
        getfun: Function
    },
    methods:{
        getdata()
        {
           this.$refs.input.focus();
           this.$refs.inputs.focus();
           this.$refs.input.style.color="red";
           this.$refs.inputs.style.color="khaki";
        },
        newMth()
        {
            return this.getfun(this.myName);
        },
        runFun()
        {
             this.$refs.nomi.style.color="red";
             this.$refs.nomi.focus();
        },
        getVal()
        {
            console.log(this.form);
        }
    }
}
</script>
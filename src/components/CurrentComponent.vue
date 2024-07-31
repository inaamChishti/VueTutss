<template>
<h1>i am form new</h1>
{{ error }}
<li v-for="item in error" v-bind:key="item">
    <ul>{{ item }} not valid</ul>
</li>

<input type="text" name="email" id="" v-model="form.email" />
<input type="text" name="password" id="" v-model="form.password" />
<select v-model="form.country">
<option value="pak">pak</option>
<option value="USA">USA</option>
</select>
<label for="java">java</label>
<input type="checkbox" name="java" value="java" id="" v-model="form.technology">
<label for="php">php</label>
<input type="checkbox" name="php" value="php"  v-model="form.technology">

<label for="student">student</label>
<input type="radio" name="student" value="student" id="" v-model="form.who">
<label for="teacher">teacher</label>
<input type="radio" name="teacher" value="teacher"  v-model="form.who">

<button v-on:click="submit">submit</button>
<br>
<input type="text" name="" id="" v-model.number="module">
{{ module }}



<br>
<br>
<div>
<li v-bind="$attrs">inam</li>
<li v-bind="$attrs">haris</li>
<li>naveed</li>
</div>
<br>
{{ area*size }}
{{ getResult }}
<br>

{{ count }}
<button v-on:click="count=count+1">+</button>
<button v-on:click="count=count-1">-</button>

<header>
    <slot name="header"></slot>
</header>
<footer>
    <slot name="footer"></slot>
</footer>
</template>
<script>
export default{
    name:'CurrentComponent',
    data()
    {
        return{
            form: {
                email:'',
                password:'',
                country: '',
                technology: [],
                who: '',
            },
            error:[],
            module:'',

            area: 2,
            size: 2,
              count:0,
        }
    },
    methods:{
        submit()
        {
           for(const item in this.form)
           {    
            if(this.form[item] === "" || this.form[item].lenght===0)
            {
                this.error.push(item);
            }
           }
        }
    },
    computed:{
        getResult()
        {
            return (this.area*this.size);
        }
    },
    watch:
    {
        count(val,prev)
        {
            if(val>5 && val>prev )
            {
                alert('above five')
            }
           
        }
        
    }
   
}
</script>
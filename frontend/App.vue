<template>
    <div>
        <router-link to="/about">About</router-link>
        <h1>{{message}}</h1>
        <Home/>
        <router-view/>
    </div>
</template>
<script>
import Home from './components/Home.vue'

export default {
    
    name: 'app',
    components:{
        Home
    },
    data(){
        return {
            message: 'Hello World'
        }
    }
}
</script>

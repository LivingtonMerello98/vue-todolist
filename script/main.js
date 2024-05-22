'use strict'
console.log('sono connesso')

const { createApp } = Vue

createApp({
    data(){
        return{
           message : 'ciao',
        }
    },
    methods:{

    }
}).mount('#app')
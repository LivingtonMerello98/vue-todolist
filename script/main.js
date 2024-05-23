'use strict'
console.log('sono connesso')

const { createApp } = Vue

createApp({
    data() {
        return {
            taskList: [
                {
                    'to-do': 'portare fuori la spazzatura',
                    selected: false,
                },
                {
                    'to-do': 'stendere i panni',
                    selected: false,
                },
                {
                    'to-do': 'lavare i piatti',
                    selected: false,
                },
                {
                    'to-do': 'chiamare i genitori',
                    selected: false,
                },
                {
                    'to-do': 'prenotare vacanze',
                    selected: false,
                },
            ]
        }
    },
    methods: {
        removeTask(index) {
            this.taskList.splice(index,1);
        },
         addTask(){
             console.log('btn pressed');
             
             if (this.newTask.trim() !== '') { 
                this.taskList.push({ 'to-do': this.newTask }); 
                this.newTask = ''; 
            }

             this.taskList.push()
         }
    }
}).mount('#app');

'use strict'
console.log('sono connesso')

const { createApp } = Vue

createApp({
    data() {
        return {
            taskList: [
                {
                    'to-do': 'Preparare il report settimanale',
                    selected: false,
                },
                {
                    'to-do': 'Partecipare alla riunione di progetto',
                    selected: false,
                },
                {
                    'to-do': 'Rispondere alle email dei clienti',
                    selected: false,
                },
                {
                    'to-do': 'Aggiornare il sistema di gestione',
                    selected: false,
                },
                {
                    'to-do': 'Analizzare i dati delle vendite',
                    selected: false,
                }
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

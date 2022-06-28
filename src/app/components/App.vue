<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">HOME</a>
        </nav>
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="addTask">
                                <div class="form-group">
                                    <input type="text" v-model="task.question" placeholder="Ingresa la pregunta" class="form-control">
                                    <input type="number" v-model="task.answer" placeholder="Ingresa la opcion correcta" class="form-control">
                                    <input type="text" v-model="task.options1" placeholder="Ingrese las respuestas" class="form-control">
                                    <input type="text" v-model="task.options2" placeholder="Ingrese las respuestas" class="form-control">
                                    <input type="text" v-model="task.options3" placeholder="Ingrese las respuestas" class="form-control">
                                    <input type="text" v-model="task.options4" placeholder="Ingrese las respuestas" class="form-control">
                                    
                                    <button class="btn btn-primary btn-block">GUARDAR</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div class="col-md-7">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Preguntas</th>
                                <th>opcion</th>
                                <th>Respuestas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="task of tasks">
                                <td>{{task.question}}</td>
                                <td>{{task.answer}}</td>
                                <td>{{task.options1}}</td>
                                <td>{{task.options2}}</td>
                                <td>{{task.options3}}</td>
                                <td>{{task.options4}}</td>
                                <td>
                                    <button @click="deleteTask(task._id)" class="btn btn-danger">BORRAR</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div>
        <Quiz>quiz</Quiz>
    </div>
</template>
<script>


import App from './App.vue';
import Quiz from './Quiz.vue'
    class Task {
        constructor(question, answer, options1, options2, options3, options4){
            this.question = question;
            this.answer = answer;
            this.options1 = options1;
            this.options2 = options2;
            this.options3 = options3;
            this.options4 = options4;
        }
    }
    export default {
    data() {
        return {
            task: new Task(),
            tasks: []
        };
    },
    created() {
        this.getTask();
    },
    components: {
        Quiz
    },
    methods: {
        addTask() {
            fetch("/api/tareas", {
                method: "POST",
                body: JSON.stringify(this.task),
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                this.getTask();
            });
            this.task = new Task();
        },
        getTask() {
            fetch("/api/tareas")
                .then(res => res.json())
                .then(data => {
                this.tasks = data;
                console.log(this.tasks);
            });
        },
        deleteTask(id) {
            fetch("/api/tareas/" + id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                this.getTask();
            });
        }
    },
    
}
</script>
import Task from '../models/tasks.js';

const getAllTasks = function(req,res) { 
    res.send('all items from the file')
}

const postTask = async function (req,res) {
    const task = await Task.create(req.body).then(function () {
        console.log("success")
    }).catch(function (error) {
        console.log(error)
    })
    res.status(201).json({task})
}

 
const getSingleTask = function (req,res) {
    res.send('A single task from the file')
}

const updateTask = function (req,res) {
    res.send('Updating a task')
}

const deleteTask = function (req,res) {
    res.send('Delete a task')
}
export default {getAllTasks, postTask, getSingleTask, updateTask, deleteTask}
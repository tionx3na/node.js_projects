const getAllTasks = function(req,res) {
    res.send('all items from the file')
}

const postTask = function (req,res) {
    res.send('post request for a new task')
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
import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: String, 
    completed:Boolean,
})

const Task = mongoose.model('Task', TaskSchema)
export default Task
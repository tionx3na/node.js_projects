import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: {
        type:String,
        required:[true,"Name is needed!"],
        trim:true,
        maxlength:[10, "Name cannot be more than 50 characters long!"],
    }, 
    completed:{
        type:Boolean,
        default:false
    },
})

const Task = mongoose.model('Task', TaskSchema)
export default Task
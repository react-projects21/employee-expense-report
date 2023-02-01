import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employee_maintainanceSchema = new Schema({
    emp_no:{
        type: Number,
        required: true
    },

    emp_name:{
        type: String,
        required: true
    },
    emp_position:{
        type: String,
        required: true,
    },
    emp_manager:{
        type: String,
        required: true,
    },
    
    emp_department:{
        type: String,
        required: true,
    }
})

export default mongoose.model("employee_maintainance", employee_maintainanceSchema)
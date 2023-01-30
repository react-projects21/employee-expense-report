import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employee_detailSchema = new Schema({
    expense_id:{
        type: Number,
        required: true
    },
    notes:{
        type: String,
        required: true,
    },
    charge_type:{
        type: String,
        required: true,
    },
    start_date:{
        type: Date,
        required: true,
    },
    end_date:{
        type: Date,
        required: true,
    },
    submit_rep:{
        type: String,
        required: true,
    }
})

export default mongoose.model("employee-details", bookSchema)
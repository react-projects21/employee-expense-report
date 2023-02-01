import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const expenseDetailsSchema = new Schema ({
    serial_no:{
        type: Number,
        required: true
    },
    exp_id:{
        type: Number,
        required: true
    },
    e_date:{
        type: Date,
        default:Date.now(),
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    expense_type:{
        type: String,
        required: true,
    },
    mileage:{
        type: Number,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    charged_to_fourjs:{
        type: Number,
        required: true,
    },
    total_charge_to_fourjs:{
        type: Number,
        required: true,
    },
    total_paid_by_employee:{
        type: Number,
        required: true,
    },
    file_upload:{
        type: String,
        required: true,
    },
    view_file:{
        Type:String,
        data:Buffer
        
    }
})

export default mongoose.model("Expense Detail",expenseDetailsSchema);
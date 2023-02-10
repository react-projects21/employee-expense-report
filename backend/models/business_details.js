import mongoose from "mongoose";

const Schema = mongoose.Schema;

const business_detailSchema = new Schema({
    serial_number:{
        type: Number,
        required: true
    },

    exp_id:{
        type: Number,
        required: true
    },
    b_date:{
        type: Number,
        required: true,
    },
    b_amount:{
        type: Number,
        required: true,
    },
    
    name_or_comp_name:{
        type: String,
        required: true,
    },
    transaction:{
        type: String,
        required: true,
    }
})

export default mongoose.model("business_detail", business_detailSchema)
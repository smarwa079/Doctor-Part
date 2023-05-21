import { Schema, model } from "mongoose";

const departmentSchema = new Schema({
    
    Dept_code: {
        type: String,
        required: true,
    },

    Dept_name: {
        type: String,
        required: true,
    }
});

export default model('Department', departmentSchema);
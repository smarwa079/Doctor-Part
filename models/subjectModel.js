import { Schema, model } from "mongoose";

const subjectSchema = new Schema({

    Sub_code: {
        type: Number,
        required: true,
    },

    Sub_name: {
        type: String,
        required: true,
    },

    Department: {
        type: String,
        required: false,
        ref: 'Department'
    },
    Previous_requirement: {
        type: String,
        required: false,
    }
});

export default model('Subject', subjectSchema);
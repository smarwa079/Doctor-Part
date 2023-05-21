import { Schema, model } from "mongoose";

const doctorSchema = new Schema({

    Doc_code: {
        type: Number,
        required: true,
    },

    Doc_name: {
        type: String,
        required: true,
    },

    Doc_email: {
        type: String,
        required: true,
    },

    Doc_password: {
        type: String,
        required: true,
    }
});

export default model('Doctor', doctorSchema);
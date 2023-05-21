import { Schema, model } from "mongoose";

const doc_subjectSchema = new Schema({
    
    Doctor: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor'
    },

    Subject: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Subject'
    }
});

export default model('Doc_subject', doc_subjectSchema);
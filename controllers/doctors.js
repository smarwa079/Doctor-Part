import doctorModel from "../models/doctorModel.js"
import subjectModel from '../models/subjectModel.js'
import doc_subjectModel from "../models/doc_subjectModel.js";

export const getAllDoctors = async (request, response) => {

    const doctors = await doctorModel.find().lean();

    response.render('admin/allDoctors', { doctors })
}
export const create_doctor = (request, response) => {
    response.render('admin/addDoctor')
}

export const save_doctor = async (request, response) => {
    const { Doc_code, Doc_name, Doc_email, Doc_password } = request.body;

    if (Doc_code == "" || Doc_name == "" || Doc_email == "" || Doc_password == "") {

        alert("Please Enter The Whole Data ");
    } else {
        await doctorModel.create({
            Doc_code,
            Doc_name,
            Doc_email,
            Doc_password
        })
        response.redirect('/admin/getAllDoctors')
    }
}
export const test = (request, response) => {
    response.send('all is well')
}

export const editDoctor = async (request, response) => {
    const { _id } = request.params;

    const editFormDoctor = await doctorModel.findById(_id).lean();
    console.log(editDoctor)

    response.render('admin/editDoctor', { doctor: editFormDoctor })
}

export const updateDoctor = async (request, response) => {

    const { Doc_code, Doc_name, Doc_email, Doc_password } = request.body;
    console.log(Doc_code)

    if (Doc_code == "" || Doc_name == "" || Doc_email == "" || Doc_password == "") {
        alert("Please Enter The Whole Data ");
    } else {
        const { _id } = request.params;
        await doctorModel.findByIdAndUpdate(_id, { $set: { Doc_code, Doc_name, Doc_email, Doc_password } })
        response.redirect('/admin/getAllDoctors')
    }
}

export const deleteDoctor = async (request, response) => {
    const { _id } = request.params;
    await doctorModel.findByIdAndDelete(_id).lean();
    return response.redirect("/admin/getAllDoctors");
}

export const assignSubject = async (request, response) => {
    const { _id } = request.params;
    console.log(_id)
    const subjects = await subjectModel.find({}, { Sub_name: 1 }).lean();
    response.render('admin/assignForm', { _id, subjects })
}

export const saveAssignment = async (request, response) => {
    console.log(request.body);

    const { Doctor, Subject } = request.body;

    await doc_subjectModel.create({
        Doctor: Doctor,
        Subject: Subject
    })

    response.redirect('/admin/getAllDoctors')
}

export const getAssigned = async (request, response) => {
    const { _id } = request.params;
    const doctordetails = await doctorModel.findById(_id).lean();
    const doctorSubjects = await doc_subjectModel.find({ Doctor: _id }).populate('Subject').lean();
    console.log(doctordetails)
    console.log(doctorSubjects)
    response.render('admin/allAssignedSubjects', { doctordetails, doctorSubjects })
}

export const deleteAssigned = async (request, response) => {
    const { _id } = request.params;
    await doc_subjectModel.findByIdAndDelete(_id).lean();
    return response.redirect("/admin/allAssignedSubjects");
}

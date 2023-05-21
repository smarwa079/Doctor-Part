import subjectModel from "../models/subjectModel.js";

export const assign = async (request, response) => {
    
    const subjects  = await subjectModel.find({}, {Sub_name: 1}).lean();
    console.log(subjects)
    response.render('admin/doctorSubjects', {subjects})
}

export const save = async (request, response) =>{
    console.log(request.body)

    
    response.redirect('/admin/assignSubject')
}
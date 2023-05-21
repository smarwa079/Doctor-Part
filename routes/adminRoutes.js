import { Router } from "express";
import { assign, save } from "../controllers/subjects.js";
import { create_doctor, 
         getAllDoctors, 
         save_doctor, 
         editDoctor, 
         updateDoctor, 
         assignSubject, 
         saveAssignment, 
         getAssigned,
         deleteAssigned,
         deleteDoctor } from "../controllers/doctors.js"


const router = new Router();

//////////////////////////////////////////////////////////////////////////////

router.get('/getAllDoctors/:_id/edit', editDoctor);
router.put('/getAllDoctors/:_id', updateDoctor);

//////////////////////////////////////////////////////////////////////////////

router.get('/:_id/getAssigned', getAssigned)
router.get('/:_id/assignSubject', assignSubject)
router.post('/:_id/assignSubject', saveAssignment);

//////////////////////////////////////////////////////////////////////////////

router.delete('/:_id/deleteAssigned', deleteAssigned)

//////////////////////////////////////////////////////////////////////////////

router.get('/create_doctor', create_doctor);
router.get('/getAllDoctors', getAllDoctors);
router.post('/getAllDoctors', save_doctor);
router.delete("/:_id/deleteDoctor", deleteDoctor)

//////////////////////////////////////////////////////////////////////////////




export default router;
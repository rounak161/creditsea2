import { Router, Request, Response } from 'express';
import { Students } from '../model/students';

const router = Router();
let students: Students[] = [];

// Add your CRUD API implementation here
// Add student
router.post('/add', (req: Request, res: Response) => {
    const student: Students = {
        id: students.length + 1,
        name: req.body.name,
        schoolName: req.body.schoolName,
        class: req.body.class
    }
    students.push(student);
    res.status(201).json(student);
})

// Get student
router.get('/get', (req: Request, res: Response) => {
    if(students.length >= 1) {
        res.status(200).json(students)
    } else {
        res.status(200).json("no result available")
    }
})

// Update Student
router.put('/update/:id', (req: Request, res: Response) => {
    let student = students.find((x) => x.id === parseInt(req.params.id));

    if (!student) {
        res.status(404).json('Student not found');
    } else {
        student.name = req.body.name || student.name;
        student.schoolName = req.body.schoolName || student.schoolName;
        student.class = req.body.class || student.class;
    }

    res.status(201).json(student);
})

// Delete Student
router.delete('/delete/:id', (req: Request, res: Response) => {
    const index = students.findIndex((x) => x.id === parseInt(req.params.id));
  
    if (index === -1) {
      res.status(404).send('Student not found');
    } else {
      students.splice(index, 1);
      res.status(200).json('Student successfully deleted');
    }
  });

export default router;
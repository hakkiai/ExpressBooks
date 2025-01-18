const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', async (req, res) => {
    try {
        console.log('Received student data:', req.body);
        const student = await studentController.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        console.error('Student creation error:', error);
        res.status(400).json({ 
            message: error.message || 'Failed to create student',
            error: error.toString()
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const students = await studentController.getAllStudents();
        res.json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ 
            message: error.message || 'Failed to fetch students',
            error: error.toString()
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const student = await studentController.getStudentById(req.params.id);
        res.json(student);
    } catch (error) {
        console.error('Error fetching student:', error);
        if (error.message === 'Student not found') {
            res.status(404).json({ 
                message: 'Student not found',
                error: error.toString()
            });
        } else {
            res.status(500).json({ 
                message: 'Failed to fetch student',
                error: error.toString()
            });
        }
    }
});

router.put('/:id', async (req, res) => {
    try {
        const student = await studentController.updateStudent(req.params.id, req.body);
        res.json(student);
    } catch (error) {
        console.error('Error updating student:', error);
        if (error.message === 'Student not found') {
            res.status(404).json({ 
                message: 'Student not found',
                error: error.toString()
            });
        } else {
            res.status(400).json({ 
                message: error.message || 'Failed to update student',
                error: error.toString()
            });
        }
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await studentController.deleteStudent(req.params.id);
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        if (error.message === 'Student not found') {
            res.status(404).json({ 
                message: 'Student not found',
                error: error.toString()
            });
        } else {
            res.status(500).json({ 
                message: error.message || 'Failed to delete student',
                error: error.toString()
            });
        }
    }
});

module.exports = router;
const Student = require('../models/Student');

exports.createStudent = async (studentData) => {

    if (!studentData.name || !studentData.email) {
        throw new Error('Name and email are required');
    }

    const existingStudent = await Student.findOne({ email: studentData.email });
    if (existingStudent) {
        throw new Error('Email already exists');
    }

    const student = new Student(studentData);
    await student.save();
    return student;
};

exports.getAllStudents = async () => {
    return await Student.find();
};

exports.getStudentById = async (id) => {
    const student = await Student.findById(id);
    if (!student) {
        throw new Error('Student not found');
    }
    return student;
};

exports.updateStudent = async (id, updateData) => {
  
    if (!updateData.name && !updateData.email) {
        throw new Error('No update data provided');
    }


    const student = await Student.findById(id);
    if (!student) {
        throw new Error('Student not found');
    }

    if (updateData.email) {
        const existingStudent = await Student.findOne({ 
            email: updateData.email, 
            _id: { $ne: id } 
        });
        if (existingStudent) {
            throw new Error('Email already exists');
        }
    }

    const updatedStudent = await Student.findByIdAndUpdate(
        id, 
        updateData, 
        { new: true, runValidators: true }
    );

    return updatedStudent;
};

exports.deleteStudent = async (id) => {
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
        throw new Error('Student not found');
    }
    return student;
};
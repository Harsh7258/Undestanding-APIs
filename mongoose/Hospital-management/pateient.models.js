const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'error message']
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: [true, 'error message']
    },
    phone: {
        type: Number,
        required: [true, 'error message']
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O'],
        required: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    },
    medicalRecord: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'MedicalRecord'
    },
}, { timestamps: true });

const Patient = mongoose.models("Patient", patientSchema);

module.exports = Patient;
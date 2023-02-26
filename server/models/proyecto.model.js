const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    project: {
        type: String,
        minlength: [3, 'Minimo necesita 3 Caracteres'],
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    porgreso: {
        type: Boolean,
        default: false
    },
    complete: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
module.exports.Proyecto = mongoose.model('proyecto', ProjectSchema);


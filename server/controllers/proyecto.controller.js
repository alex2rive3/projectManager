const { Proyecto } = require("../models/proyecto.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProyecto = async (request, response) => {
    try {
        const res = await Proyecto.create(request.body);
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllProyecto = async (request, response) => {
    try {
        const res = await Proyecto.find({}).sort({ nombre: 1 })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.enProgreso = async (request, response) => {
    const { estado } = request.body
    try {
        const res = await Proyecto.findOneAndUpdate({ _id: request.params.id }, { $set: { "porgreso": estado } })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
module.exports.complete = async (request, response) => {
    const { estado } = request.body
    try {
        const res = await Proyecto.findOneAndUpdate({ _id: request.params.id }, { $set: { "complete": estado } })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteProyecto = async (request, response) => {
    try {
        const res = await Proyecto.deleteOne({ _id: request.params.id })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
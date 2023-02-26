const ProyectoController = require('../controllers/proyecto.controller');
module.exports = function (app) {
    app.get('/api', ProyectoController.index);
    app.post('/api/proyectos', ProyectoController.createProyecto);
    app.get('/api/proyectos', ProyectoController.getAllProyecto);
    // app.get('/api/proyectos/:id', ProyectoController.getProyecto);
    app.put('/api/proyectos/progreso/:id', ProyectoController.enProgreso);
    app.put('/api/proyectos/complete/:id', ProyectoController.complete);
    app.delete('/api/proyectos/:id', ProyectoController.deleteProyecto);
}

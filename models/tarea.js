const {v4: uuid} = require('uuid');

class Tarea{

    id = '';
    descripcion = '';
    completadoEn = null;


    constructor(desc) {

        this.id = uuid();
        this.descripcion = desc;

    }
}

module.exports = Tarea;
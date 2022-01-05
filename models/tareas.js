require('colors');

const Tarea = require('./tarea.js');

class Tareas{

    _listaTareas = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listaTareas).forEach(key => {
            const tarea = this._listaTareas[key];
            listado.push(tarea);
        });

        return listado
    }

    constructor(){
        this._listaTareas = {};
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc);
        this._listaTareas[tarea.id] = tarea;
    }

    //metodo para cargar las tareas

    cargarTareas(tareas = []){
        // [] => tarea1, tarea2, tarea3
        // [tarea1, tarea2, tarea3]
        // Object.keys(this._listaTareas).forEach(key => {
        //     const tarea = this_listaTareas[key];
        //     tareas.push(tarea);
        // });

        tareas.forEach(tarea => {
            this._listaTareas[tarea.id] = tarea;
        });

        console.log("Tareas cargadas");
    }

    // listar tareas
    // Completada: verde
    // Pendiente: rojo
    // 1. Descripcion de la tarea :: Completada|Pendiente

    listadoCompleto(){
        // const listado = []
        // Object.keys(this._listaTareas).forEach((key) => {
        //     const tarea = this._listaTareas[key];
        //     listado.push(tarea);
        // });

        console.log();
        
        this.listadoArr.forEach((tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${idx}. ${tarea.descripcion.white} :: ${estado}`);

            // if(tarea.completadoEn === null){
            //     console.log(`${idx} ${tarea.descripcion.white} :: ${'Pendiente'.red}`);
            // }else{ 
            //     console.log(`${idx} ${tarea.descripcion.white} :: ${'Completada'.green}`);
            // }
            //console.log(`${tarea.id.red}`);
            //console.log(`${tarea.descripcion.white} :: ${tarea.completadoEn.red}  :)`);
        });
    }

    borrarTarea(id = ''){

        if(this._listaTareas[id]){
            delete this._listaTareas[id];
        }
    }

    listarPendientesCompletadas(completadas=true){

        let contador = 0;
        this.listadoArr.forEach(tarea => {

            const {descripcion, completadoEn} = tarea;
            const estado = (completadoEn)
                            ? 'Completada'.green
                            : 'Pendiente'.red

            if(completadas){
                if(completadoEn){
                    contador += 1;
                    console.log(`${contador.toString().green}. ${tarea.descripcion.white} :: ${estado} ${tarea.completadoEn.green}`);
                }
            }else{
                if(!completadoEn){
                    contador += 1;
                    console.log(`${contador.toString().green}. ${tarea.descripcion.white} :: ${estado}`);
                }
            }

        });
    }

    toggleTareasCompletadas(ids = []){

        ids.forEach(id => {

            const tarea = this._listaTareas[id];

            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }

        });

        this.listadoArr.forEach(tarea => {

            if( !ids.includes(tarea.id)){
                this._listaTareas[tarea.id].completadoEn = null;
            }
        });

    }

}

module.exports = Tareas;
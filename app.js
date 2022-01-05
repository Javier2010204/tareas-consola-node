require('colors');


const {guardarDb, leerDb} = require('./helpers/ControladorDB');
const {
    inquirerMenu, 
    pausar,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoTareasChecklist
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

let opt = '';

const main = async() => {

    let tareas = new Tareas();

    const tareasDb = leerDb();

    if(tareasDb){
        //cargar tareas de la db
        tareas.cargarTareas(tareasDb);
    }

    //tareas._listaTareas[tarea.id] = tarea;


    do{
        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                const desc = await leerInput('Descripción de la tarea');
                tareas.crearTarea(desc);
            break;
            case '2':
               tareas.listadoCompleto();
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);
            break;
            case '5':
                const ids = await listadoTareasChecklist(tareas.listadoArr);
                tareas.toggleTareasCompletadas(ids);
            break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);

                if(id !== '0'){
                    const ok = await confirmar('Esta seguro que desea eliminar la tarea?');

                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada con exito');
                    }
                }

                //tareas.listadoTareasBorrar(id);
            break;
        }

        guardarDb(tareas.listadoArr);


        await pausar();
    }while(opt !== '0');

    // mostrarMenu();
    // pausa();

}

main();
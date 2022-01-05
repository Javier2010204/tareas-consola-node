const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Marcar tarea(s) como completada`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea(s)`
            },
            {
                value: '0',
                name: `${'0. Salir'.magenta} `
            }
        ]
    }
]

const inquirerMenu = async()=>{

    console.clear();
    console.log("=============================".green);
    console.log("    Seleccione una opción ".white);
    console.log("=============================\n".green);

    const {opcion} = await inquirer.prompt(preguntas);

    return(opcion);
}

const listadoTareasBorrar = async(tareas = [])=>{

    const choices = tareas.map((tarea, i) => {
        
        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0. '.green + 'Cancelar'.magenta
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            messages: 'Borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const listadoTareasChecklist = async(tareas = [])=>{

    const choices = tareas.map((tarea, i) => {
        
        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            messages: 'Seleccione',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(pregunta);
    return ids;
}

const leerInput = async(message) => {
    
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length == 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);

    return ok;

}

const pausar = async()=>{

    const question = [
        {
            type: "input",
            message: `Presiona ${'ENTER'.green} para continuar`,
            name: 'enter'
        }
    ]
    
    console.log('\n');
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pausar,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoTareasChecklist
}
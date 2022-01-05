// ESTE ARCHIVO FUE LA PRIMERA VERSION DEL MENU, SE SUSTITUYO EN EL ARCHIVO inquirer.js


// require('colors');

// // 2. stdin y stout
// // 3. pedir ingreso de valores

// const mostrarMenu = async()=>{

//     return new Promise(resolve => {
//         console.clear();
//         console.log("=============================".green);
//         console.log("    Seleccione una opción ".white);
//         console.log("=============================\n".green);

//         console.log(`${'1'.green} Crear tarea`);
//         console.log(`${'2'.green} Listar tareas`);
//         console.log(`${'3'.green} Listar tareas completadas`);
//         console.log(`${'4'.green} Listar tareas pendientes`);
//         console.log(`${'5'.green} Marcar como completada(s)`);
//         console.log(`${'6'.green} Borrar tarea(s)`);
//         console.log(`${'0'.green} ${'Salir'.magenta}`);

//         const readline = require('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });

//         readline.question('seleccione una opción \n', (opt)=>{
//             readline.close();
//             resolve(opt);
//         });
//     });
    
// }

// const pausa = ()=> {

//     return new Promise((resolve) => {
//         const readline = require('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
    
//         readline.question('presione ENTER para continuar', (opt)=>{
//             readline.close();
//             resolve();
//         });
//     });
// }

// module.exports = {
//     mostrarMenu,
//     pausa
// }
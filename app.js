const { filtrarPorEstado } = require('./funcionesDeTareas');
let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();        

        tareas.forEach((tarea, index) => {
            console.log((index + 1) +'. ' + tareas[index].titulo + ' - ' + tareas[index].estado);
        });
        
        console.log()

        break;

    case 'crear':

        let titulo = process.argv[3];
        let tarea ={

            titulo: titulo,
            estado: "Pendiente"           
        } 
        archivoTareas.guardarTarea(tarea);
        console.log(tarea.titulo + " " + tarea.estado);

    break;
    case 'filtrar':

        let estado = process.argv[3];

        let tareasFiltradas =  archivoTareas.filtrarPorEstado(estado);

        tareasFiltradas.forEach((tarea, index) => {
            console.log((index + 1) + " " + tarea.titulo);
        });
        

        
        
        
    
    break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}

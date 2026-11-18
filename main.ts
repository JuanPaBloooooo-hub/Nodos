import { ListaSimple } from "./ListaSimple";
import { Solicitud } from "./solicitud";

const lista = new ListaSimple<Solicitud>();

//Registrar solicitudes
lista.agregarFinal({
    folio:101,
    descripcion: 'No funciona el internet',
    prioridad:'Alta'
});

lista.agregarFinal({
    folio: 102,
    descripcion: 'Impresora dañada',
    prioridad: 'Media'
});

lista.agregarFinal({
    folio: 103,
    descripcion: 'Computadora lenta',
    prioridad: 'Baja'
});

//aqui mostramos las solicitudes
console.log('LISTA DE SOLICITUDES');
lista.recorrer();

//ejemplo buscando una solicitud
console.log('Buscar folio 102');
console.log(lista.buscar(102));

//Eliminar una solicitud 
console.log('ELIMINAR FOLIO 102');
console.log(lista.eliminar(102));

//Mostrar lista actualizada
console.log('LISTA ACTUALIZADA');
lista.recorrer();

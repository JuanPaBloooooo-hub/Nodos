import { createInterface } from 'node:readline/promises';
import { ListaSimple } from './ListaSimple';
import { Solicitud } from './solicitud';

const lista = new ListaSimple<Solicitud>();

// Sirve para escribir opciones y responder desde la terminal.
const teclado = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Como iniciamos con una lista vacía, el contador comienza en cero.
let cantidad = 0;

async function menu() {
    let opcion = '';

    do {
        console.log('\n===== GESTOR DE SOLICITUDES =====');
        console.log('1. Registrar solicitud');
        console.log('2. Consultar solicitud por folio');
        console.log('3. Listar solicitudes');
        console.log('4. Eliminar solicitud');
        console.log('5. Salir');

        opcion = (await teclado.question('Elige una opción: ')).trim();

        switch (opcion) {
            case '1': {
                const folio = Number(await teclado.question('Folio: '));

                if (!Number.isInteger(folio) || folio <= 0) {
                    console.log('Ingresa un folio numérico válido.');
                    break;
                }

                if (lista.buscar(folio) !== null) {
                    console.log('Ya existe una solicitud con ese folio.');
                    break;
                }

                const descripcion = (await teclado.question('Descripción: ')).trim();
                const prioridad = (await teclado.question('Prioridad (Alta, Media o Baja): ')).trim();

                if (descripcion === '' || prioridad === '') {
                    console.log('La descripción y la prioridad son obligatorias.');
                    break;
                }

                if (!['alta', 'media', 'baja'].includes(prioridad.toLowerCase())) {
                    console.log('La prioridad debe ser Alta, Media o Baja.');
                    break;
                }

                lista.agregarFinal({ folio, descripcion, prioridad });
                cantidad++;
                console.log('Solicitud registrada correctamente.');
                break;
            }

            case '2': {
                const folio = Number(await teclado.question('Folio que deseas buscar: '));
                const encontrada = lista.buscar(folio);

                if (encontrada === null) {
                    console.log('No se encontró ese folio.');
                } else {
                    console.log('Solicitud encontrada:', encontrada);
                }
                break;
            }

            case '3':
                console.log('\nLISTA DE SOLICITUDES');
                if (cantidad === 0) {
                    console.log('La lista está vacía.');
                } else {
                    lista.recorrer();
                }
                break;

            case '4': {
                const folio = Number(await teclado.question('Folio que deseas eliminar: '));

                if (lista.eliminar(folio)) {
                    cantidad--;
                    console.log('Solicitud eliminada correctamente.');
                } else {
                    console.log('No existe una solicitud con ese folio.');
                }
                break;
            }

            case '5':
                console.log('Programa finalizado.');
                break;

            default:
                console.log('Opción no válida. Intenta de nuevo.');
        }
    } while (opcion !== '5');

    teclado.close();
}

menu()
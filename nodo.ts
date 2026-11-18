export class Nodo<T> {
    constructor(
        public valor: T,
        public siguiente: Nodo<T> | null=null
    ){

    }
}
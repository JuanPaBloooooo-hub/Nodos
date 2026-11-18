import { Nodo } from "./nodo";

export class ListaSimple<T>{
    private cabeza: Nodo<T> | null= null;

    agregarInicio(valor:T):void{
        this.cabeza= new Nodo(valor,this.cabeza);
        }

    agregarFinal(valor:T):void{
        const nuevo = new Nodo(valor);

        if(this.cabeza === null){
            this.cabeza=nuevo;
            return;
        }

        let actual=this.cabeza;

        while(actual.siguiente != null){
            actual=actual.siguiente;
        }

        actual.siguiente=nuevo;

    }

    recorrer():void{
        let actual=this.cabeza;

        while(actual !=null){
            console.log(actual.valor);
            actual = actual.siguiente;
        }
    }

    buscar(folio:number): T | null {
        let actual=this.cabeza;

        while(actual !== null){
            const solicitud = actual.valor as {folio:number};

            if(solicitud.folio ===folio){
                return actual.valor;
            }
            actual=actual.siguiente;
        }
        return null;
    }

    eliminar(folio:number):boolean{
        if(this.cabeza===null)return false;

        if((this.cabeza.valor as {folio:number}).folio===folio){
            this.cabeza=this.cabeza.siguiente;
            return true;
        }
        let actual=this.cabeza;

        while(
            actual.siguiente !== null &&
            (actual.siguiente.valor as {folio:number}).folio !== folio
        ){
            actual= actual.siguiente;
        }

        if(actual.siguiente === null) return false;

        actual.siguiente= actual.siguiente.siguiente;
        return true;

    }
        
}

import { participante } from "./participante";

export class Sala {
    public id?:number
    public sala?: number
    public Ventrada?: number
    public disponible?: number
    public cantidad?: number
    public maximo?: number
    public fecha?: Date
    public fecha_sorteo?: Date
    public ganancia?:number
    public participantes:participante[]=[]
    constructor(){}
    setValues(item:any){
        this.id=item.id
        this.ganancia=item.ganancia
        this.sala=item.sala
        this.cantidad=item.cantidad
        this.Ventrada=item.Ventrada
        this.disponible=item.disponible
        this.maximo=item.maximo
        this.fecha=item.fecha
        this.fecha_sorteo=item.fecha_sorteo
        
    }
}


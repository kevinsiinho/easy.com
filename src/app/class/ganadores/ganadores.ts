export class Ganadores {
    
    public sorteo?: number
    public avatar!: string
    public id_user?: number
    public usuario?: string
    public fecha?: Date
    public numero!:number
    constructor(){}
    setValues(item:any){
        this.sorteo=item.sorteo
        this.avatar=item.avatar
        this.id_user=item.id_user
        this.usuario=item.usuario
        this.fecha=item.fecha
        this.numero=item.numero
    }
}

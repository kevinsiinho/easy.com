export class participante{
    
    public sorteo!:number
    public usuario!:string
    public avatar!:string
    public id_user?:number
    public numero?:number
        constructor(){}
    setValues(item:any){
        this.sorteo=item.sorteo
        this.usuario=item.usuario
        this.avatar=item.avatar
        this.id_user=item.id_user
        this.numero=item.numero
        
    }
}
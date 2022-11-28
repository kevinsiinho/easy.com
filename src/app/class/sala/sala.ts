export class Sala {

    public sala?: number
    public Ventrda?: number
    public disponible?: number
    public cantidad?: number
    public maximo?: number
    public fecha?: Date
    public fecha_sorteo?: Date

    constructor(sala:number,entrada:number,disp:number,max:number,fecha:Date,fsorteo:Date){
        this.sala=sala
        this.Ventrda=entrada
        this.disponible=disp
        this.maximo=max
        this.fecha=fecha
        this.fecha_sorteo=fsorteo
        
        class participantes{
            public id!:number
            public usuario!:string
            public img!:string
            constructor(id:number,user:string,img:string){
                this.id=id
                this.usuario=user
                this.img=img
                
            }
        }

    }
}


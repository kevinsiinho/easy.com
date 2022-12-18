export class Users {

    public tipoId!: string
    public id!: number 
    public nombre!: string
    public usuario!: string
    public celular!: number
    public email!: string
    public tipocuenta!: string
    public password!: string
    public avatar!: string
    public saldo!: number

    constructor(){}
    setValues(item:any){
        this.id=item.id
        this.tipoId=item.tipoId
        this.nombre=item.nombre
        this.usuario=item.usuario
        this.celular=item.celular
        this.email=item.email
        this.tipocuenta=item.tipocuenta
        this.password=item.password
        this.saldo=item.saldo
        this.avatar="assets/img1.jpg"
    }
}

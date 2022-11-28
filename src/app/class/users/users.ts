export class Users {

    public tipoId: string=""
    public Id?: number 
    public nombre: string =""
    public usuario: string =""
    public celular: string=""
    public email: string=""
    public tipocuenta: string=""
    public password: string=""
    public avatar: string=""
    public saldo: number=0 

    constructor(tipoId:string, Id: number,usuario:string, celular:string, email:string,tipocuenta:string,password:string,saldo:number){
        this.tipoId=tipoId
        this.Id=Id
        this.usuario=usuario
        this.celular=celular
        this.email=email
        this.tipocuenta=tipocuenta
        this.password=password
        this.saldo=saldo
        this.avatar="assets/img1.jpg"
    }
}

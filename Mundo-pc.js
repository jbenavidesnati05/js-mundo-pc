// ___________________CLASE DISPOSITIVO DE ENTRADA_____________________ 

class DispositivoEntrada{

    constructor(tipoEntrada,marca){

        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada = this.tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get marca(){
        return this._marca = marca; 
    }
    set marca(marca){
        this._marca = marca
    }

}
// ___________________CLASE RATON_____________________ 

class Raton extends DispositivoEntrada{
    static contadorRatones= 0; 
    constructor(tipoEntrada,marca){
        // super para llamar atributos de clase padre 
        super(tipoEntrada,marca)

        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton = idRaton;
    }
    toString(){
        return `Raton ==> idRaton: ${this._idRaton}, 
                tipoEntrada : ${this._tipoEntrada},
                marca: ${this._marca}`
    }
}

let raton1 = new Raton ("usb","hp");
console.log(raton1.toString());
let raton2 = new Raton ("bluetooth","acer");
console.log(raton2.toString());

// ___________________CLASE TECLADO____________________ 

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca)
        this._idTeclado = ++Teclado.contadorTeclados; 
    }
    get idTeclado(){
        return this._idTeclado = this.idTeclado;
    }
    toString(){
        return `Teclado==> idTeclado : ${this._idTeclado},
                TipoEntrada : ${this._tipoEntrada}
                marca : ${this._marca} `
    }
}

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log( teclado1.toString() );
console.log( teclado2.toString() );

// ___________________CLASE MONITOR____________________ 

class Monitor{
    static contadorMonitores = 0;
    constructor(marca,tamaño){
        this._idMonitor= ++ Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this.tamaño; 
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    
    toString(){

        return `Monitor==> idMonitor : ${this._idMonitor},
                marca: ${this._marca}, 
                tamaño : ${this._tamaño}`
    }
}

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log( monitor1.toString() );
console.log( monitor2.toString() );

// ___________________CLASE COMPUTADORA____________________ 

class Computadora{
    static contadorComputadoras = 0; 
    constructor(nombre,monitor, raton,teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;

        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString(){
        return `Computadora==> ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton}\n ${this._monitor}`
    }
}

let Computadora1 = new Computadora("HP",monitor1,raton1,teclado1);
console.log(Computadora1.toString());

let Computadora2 = new Computadora("armada",monitor2,raton2,teclado2);
console.log(Computadora2.toString());

// ___________________CLASE ORDEN____________________ 

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden (){
        return this._idOrden;
    }

    // CREAR METODO AGREGAR COMPUTADORA 
    agregarComputadora(Computadora){
        this._computadoras.push(Computadora);
    }
    mostrarOrden(){
        let computadoresOrden = " ";

        for(let Computadora of this._computadoras){
            computadoresOrden +=`\n ${Computadora}`
        }
        console.log(`Orden: ${this._idOrden}, computadoras: ${computadoresOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(Computadora1);
orden1.mostrarOrden();

let orden2 = new Orden()
orden2.agregarComputadora(Computadora2);
orden2.mostrarOrden();

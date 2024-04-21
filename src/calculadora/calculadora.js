class Calculadora {
    somar(primeiroNumero, segundoNumero){
        return primeiroNumero + segundoNumero;
    }

    dividir(primeiroNumero, segundoNumero){
        return primeiroNumero / segundoNumero;
    }

    subtrair(primeiroNumero, segundoNumero){
        return primeiroNumero - segundoNumero;
    }

    media(primeiroNumero, segundoNumero){
        return this.somar (primeiroNumero + segundoNumero) / 2;
    }

    static multiplicar(primeiroNumero, segundoNumero){
        return primeiroNumero * segundoNumero;
    }

}


module.exports ={
    Calculadora
}
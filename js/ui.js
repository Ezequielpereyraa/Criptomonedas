const resultado = document.querySelector('.mensajes');
/////////
class Interfaz {
  mostrarMensaje(mensaje, clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.textContent = mensaje;
    resultado.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 3000);
  }
  construirSelect() {
    cotizador.obtenerMonedas().then((monedas) => {
      Object.entries(monedas.Data).map((money) => {
        const option = document.createElement('option');
        option.value = money[1].Symbol;
        option.textContent = money[1].CoinName;
        document.querySelector('#criptomoneda').appendChild(option);
      });
      /*  for (const [key, value] of Object.entries(monedas.Data)) {
        console.log(value);
      } */
    });
  }
  // importar resultados
  mostrarResultado(resultado, moneda, cripto) {
    const resultadoAnterior = document.querySelector('#resultado > div');
    if (resultadoAnterior) {
      resultadoAnterior.remove()
    }
    const datosMoneda = resultado[cripto][moneda];
    let precio = datosMoneda.PRICE.toFixed(2)
    let cambioPor = datosMoneda.CHANGEPCTDAY.toFixed(2)
    let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR');
    let templateHTML = `
    <div class="card bg-warning">
      <div class="card-body text-light">
      <h2 class="card-title">Resultado:</h2>
      <p> Cotizacion de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${precio}</p>
      <p>Variacion ultimo dia: %${cambioPor}</p>
      <p>Ultima actualizacion fue ${actualizado}</p>
      </div>
    </div>
    `
    this.mostrarOcultarSpiner('block')
    setTimeout(() => {
      document.querySelector('#resultado').innerHTML = templateHTML;
      this.mostrarOcultarSpiner('none')
    }, 3000)
  }
  mostrarOcultarSpiner(vista) {
    const spiner = document.querySelector('.contenido-spinner');
    spiner.style.display = vista
  }
}

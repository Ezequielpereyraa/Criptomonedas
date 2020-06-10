const cotizador = new Api(
  '7914426df3f3df04af42d1309149e6c6e0822218b73159ac01fa40cf1da45a5a'
);
const mostrarMsj = new Interfaz(); // Leer Formulario
const formulario = document.querySelector('#formulario');
mostrarMsj.construirSelect();
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectMoneda = document.querySelector('#moneda').value;
  const selectCripto = document.querySelector('#criptomoneda').value;
  if (selectMoneda === '' && selectCripto === '') {
    mostrarMsj.mostrarMensaje(
      'Ambos campos obligatorios',
      'alert alert-danger text-center'
    );
  } else {
    cotizador.obtenerValores(selectMoneda, selectCripto).then((data) => {
      mostrarMsj.mostrarResultado(data.RAW, selectMoneda, selectCripto);
    });
  }
});

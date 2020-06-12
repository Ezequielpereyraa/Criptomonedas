import Interfaz from './interfaz.js';
//selected option and value
const interfaz = new Interfaz();
// function create options
interfaz.createOption();
//selected form
const form = document.querySelector('#formulario');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //selected option and value
  const moneySelect = document.querySelector('#moneda').value;
  const criptoSelect = document.querySelector('#criptomoneda').value
  // Validate Form
  if (moneySelect === '' && criptoSelect === '') {
    interfaz.showMessage('Ambos cambos son Obligatorios', 'alert alert-danger text-center');
  } else {
    interfaz.showResult(moneySelect, criptoSelect);
    interfaz.showSpiner('block')
  }
});



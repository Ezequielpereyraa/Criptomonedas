
import API from './api.js';
const key = '7914426df3f3df04af42d1309149e6c6e0822218b73159ac01fa40cf1da45a5a';
const cotizadorApi = new API(key);
const messageHtml = document.querySelector('.mensajes');
export default class Interfaz {
  showMessage(msg, clas) {
    const divMessage = document.createElement('div');
    divMessage.className = clas;
    divMessage.textContent = msg;
    messageHtml.appendChild(divMessage);
    setTimeout(() => {
      divMessage.remove()
    }, 3000)
  }
  createOption() {
    cotizadorApi.getMoney()
      .then((data) => {
        let resultData = data.Data;
        Object.entries(resultData).map((money) => {
          const option = document.createElement('option');
          option.textContent = money[1].FullName;
          option.value = money[1].Symbol;
          document.querySelector('#criptomoneda').appendChild(option)
        })
      })
  }
  showResult(moneySelect, criptoSelect) {
    const resulLast = document.querySelector('#resultado > div');
    if (resulLast) {
      resulLast.remove();
    }
    let resultHtml = '';
    cotizadorApi.getValue(moneySelect, criptoSelect)
      .then((data) => {
        Object.entries(data.RAW).map((datos) => {
          const money = datos[1][moneySelect];
          const precio = money.PRICE.toFixed(2);
          const actual = money.CHANGEPCTDAY.toFixed(2);
          resultHtml = `
          <div class="card bg-success">
          <div class="card-body text-light ">
          <h3 class=""card-title>Resultado:</h3>
          <p>Cotizacion de ${money.FROMSYMBOL} a moneda ${money.TOSYMBOL} es de $${precio} </p>
          <p>Ultima Actualizacion fue del ${actual}%</p>
          </div>
          </div>
          `;
          setTimeout(() => {
            document.querySelector('#resultado').innerHTML = resultHtml;
            this.showSpiner('none')
          }, 4000);
        })
      }
      )
  }
  showSpiner(state) {
    const contentSpiner = document.querySelector('.contenido-spinner');
    contentSpiner.style.display = state;
  }

}

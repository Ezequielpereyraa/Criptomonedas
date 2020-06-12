export default class API {
  constructor(apikey) {
    this.apikey = apikey;
  }
  async getMoney() {
    const urlMoney = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`);
    const money = await urlMoney.json();
    return money
  }
  async getValue(money, cripto) {
    const urlValue = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${money}&api_key=${this.apikey}`;
    const dataValue = await fetch(urlValue);
    const dataTotal = await dataValue.json();
    return dataTotal;
  }
}

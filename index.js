const axios = require("axios");

class EthereumGasPrice {
  constructor() {
    this.APIURL = "https://eth-gas-tracker.numairawan.com/api";
  }

  toWei(price) {
    return price * 1e9;
  }

  toHex(price, prefix = false) {
    const hex = price.toString(16);
    return prefix ? "0x" + hex : hex;
  }

  async fetchGasPrices() {
    try {
      const response = await axios.get(this.APIURL);
      if (response.status === 200 && response.data) {
        return response.data;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  getGasPrices() {
    return this.fetchGasPrices();
  }
}

module.exports = EthereumGasPrice;

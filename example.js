const EthereumGasPrice = require("./index");

const gasPriceTracker = new EthereumGasPrice();

(async () => {
  const gasPrices = await gasPriceTracker.getGasPrices();
  if (gasPrices) {
    console.log(gasPrices);
    // { safeGas: '7', proposeGas: '8', fastGas: '9' }
  } else {
    console.error("Failed to fetch gas prices.");
  }
})();

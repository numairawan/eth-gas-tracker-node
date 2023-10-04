<p align="center">
    <img src="https://raw.githubusercontent.com/NumairAwan/eth-gas-tracker-node/main/art/screenshot.png" width="600" alt="Eth Gas Tracker Nodejs">
    <p align="center">
        <a href="http://hits.dwyl.com/NumairAwan/eth-gas-tracker-node"><img alt="Total Hits" src="https://hits.dwyl.com/NumairAwan/eth-gas-tracker-node.svg?style=flat-square"></a>
        <a href="https://www.npmjs.com/package/eth-gas-tracker-node"><img alt="Downloads" src="https://img.shields.io/npm/dt/eth-gas-tracker-node"></a>
        <a href="https://www.npmjs.com/package/eth-gas-tracker-node"><img alt="Version" src="https://img.shields.io/npm/v/eth-gas-tracker-node?logo=npm&style=flat-square"></a>
        <a href="https://github.com/NumairAwan/eth-gas-tracker-node"><img alt="License" src="https://img.shields.io/github/license/numairawan/eth-gas-tracker-node"></a>
    </p>
</p>

------
**eth-gas-tracker-node** is a powerful nodejs module that provides developers with an effortless way to retrieve live Ethereum gas prices, empowering them to optimize transactions and smart contracts on the Ethereum network.

## Features

- 🚀 Retrieve live Ethereum gas prices with ease.
- ⛽️ Obtain up-to-date and accurate gas price data.
- 💪 Fine-tune transaction optimization based on real-time gas prices.
- 🤝 Seamless integration into existing projects.
- 📚 Comprehensive code examples for easy implementation.

## 📦 Install

```sh
npm i eth-gas-tracker-node
```

### Usage
To retrieve live Ethereum gas prices, follow these simple steps:

```js
const EthereumGasPrice = require('eth-gas-tracker-node');

const gasPriceTracker = new EthereumGasPrice();

// Using .then
gasPriceTracker.getGasPrices().then((gasPrices) => {
  if (gasPrices) {
    console.log(gasPrices);
  } else {
    console.error('Failed to fetch gas prices.');
  }
});

// Using await
(async () => {
  const gasPrices = await gasPriceTracker.getGasPrices();
  if (gasPrices) {
    console.log(gasPrices);
  } else {
    console.error('Failed to fetch gas prices.');
  }
})();
```

### Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests as well.

### License
This project is licensed under the **[MIT license](https://opensource.org/licenses/MIT)**.


## Connect with Me

Feel free to reach out to me for any project-related queries or collaborations. I'm always happy to connect and discuss ideas!

[<img align="left" alt="Telegram" width="32px" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" />](https://t.me/NumairAwan)
[<img align="left" alt="WhatsApp" width="32px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904" />](https://wa.me/+923164700904)


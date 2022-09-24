# bybit-tools

![Preview](https://github.com/RubyAquaMarine/bybit-tools/blob/master/screenshots/main-screen1.png?raw=true)

##### Features :

 - Including a webview to *your* tradingview chart, allowing you to use custom indicators
 - Generate scaled orders
 - Place laddered/limit/market orders
 - Preview stop loss cost / target profit gains
 - Bulk cancel orders
 - Show current open position (bug)
 - Risk management calculator

Bybit API key parameters : 

<img src="screenshots/bybit_key_parameters.png" width="300">

##### Troubleshooting :
If you're getting `invalid request, please check your timestamp and recv_window param` error, [resync your system clock](https://www.google.com/search?q=sync+system+clock&oq=sync+system+clock)

##### Build instructions :
```
npm install
npm run electron:build
npm run electron:build:mac
```

## AquaMarine Note Below
M1 chip requires  
- "electron": "^11.1.0"

# Bugs
the open positions api is probably calling the wrong endpoint ( old version)

# OpenPosition ???
- api issues? url , parsing? 
<open-position v-if="$bybitApi.openPosition && $ui.showOpenPosition"></open-position>
index.vue
<script src="./OpenPosition.js"></script>

# Tick size
figure out rounding based on the currentTickSize  

- formValidation.lowerPriceRules 

```

      let round = 0;
      let num = this.$bybitApi.currentTickSize;
        var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) { round = 0; }
        else{
          round = Math.max(
            0,
            // Number of digits right of decimal point.
            (match[1] ? match[1].length : 0)
            // Adjust for scientific notation.
            - (match[2] ? +match[2] : 0));
        }
      this.form.higherPrice = (price + range).toFixed(round);// update the values
      this.form.lowerPrice = price.toFixed(round);// update the values
    },
```

# v-select (currectSymbol)
- [ ] allow user to select any of the symbols : BTCUSD etc done,  Need to add new api for the BTCUSDt pairing
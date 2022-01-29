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





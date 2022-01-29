import TradingStops from './TradingStops';

export default {
  name: 'open-position',
  components: { TradingStops },
  props: [],
  data() {
    return {
      dialog: false,
      headers: [
        { text: 'Open Position', value: 'symbol' },
        { text: 'Qty', value: 'size' },
        { text: 'Value', value: 'position_value' },
        { text: 'Price', value: 'entry_price' },
        { text: 'Liq. Price', value: 'liq_price' },
        { text: 'Margin', value: 'position_margin' },
        { text: 'Leverage', value: 'leverage' },
        {
          text: 'Unrealized P&L', value: 'unrealised_pnl',
        },
        { text: 'Daily Realized P&L', value: 'realised_pnl' },
        { text: 'Daily Total (% of Account)', value: 'cum_realised_pnl' },
        { text: 'SL', value: 'stop_loss' },
        { text: 'TP', value: 'take_profit' },
        { text: 'TS', value: 'trailing_stop' },
      ],
    };
  },
  computed: {},
  mounted() {

  },
  methods: {
    dailyTotal(item) {
      return this.unrealised_pnl(item.entry_price, item.size, item.side) + item.realised_pnl;
    },
    unrealised_pnl(price, qty, side) {
      if (side === 'Buy') {
        return ((1 / price) - (1 / parseFloat(this.$bybitApi.lastPrice))) * qty;
      } else {
        return ((1 / parseFloat(this.$bybitApi.lastPrice) - (1 / price))) * qty;
      }
    },
  },
};

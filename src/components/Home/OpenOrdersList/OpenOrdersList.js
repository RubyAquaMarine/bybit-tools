export default {
  name: 'open-orders-list',
  components: {},
  props: [],
  data() {
    return {
      headers: [
        {text: 'Side', value: 'side'},
        {text: 'Qty', value: 'qty'},
        {text: 'Price', value: 'price'},
        {text: 'Order', value: 'order_type'},
        {text: 'Type', value: 'time_in_force'},
     //   {text: 'Updated At', value: 'updated_at'},
        {text: 'Close', value: 'cancel'},
      ]
    };
  },
  computed: {},
  mounted() {
  
  },
  methods: {
    sum : function(items, prop){
      return items.reduce( function(a, b){
        return a + b[prop];
      }, 0);
    }
  },
};

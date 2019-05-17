import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' 
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';


Vue.use(Vuetify)
Vue.config.productionTip = false;


new Vue({
  render: h => h(App)
}).$mount("#app");


delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({

  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')

});



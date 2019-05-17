<template>
  <div class="col-sm-12 text-center">
    <v-container align-center>
      <h2>Haz clic para seleccionar un pais</h2>
      <br>
      <select v-model="select">
        <option
          v-for="country in countries"
          :key="country.id"
          :value="{ id: country.id, text: country.name }"
        >{{country.name}}</option>
      </select>

      <div v-for="country in countries" :key="country.id">
        <div v-if="select.text === country.name">
          <br>
          <h3>Capital: {{country.capital}}</h3>

          <h3>Poblacion: {{country.population}}</h3>

          <h3>Bandera:</h3>

          <img :src="country.flag" width="350px">
          <br>

          <div id="map" class="map">
            <l-map :zoom="zoom" :center="latLng(country.latlng[0],country.latlng[1])">
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
              <l-marker :lat-lng="latLng(country.latlng[0],country.latlng[1])"></l-marker>
            </l-map>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import axios from "axios";
export default {
  data() {
    return {
      select: "",
      countries: [],
      zoom: 13,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },

  created() {
    var that = this;
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        that.countries = res.data;
        console.log(res.data);
      })
      .catch(error => console.log(error));
  },

  methods: {
    latLng: function(lat, log) {
      return L.latLng(lat, log);
    }
  }
};
</script>


 <style scoped>
h3 {
  color: black;
}

h2 {
  color: SteelBlue;
}

#app {
  background-color: beige;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 90px;
}

.center{
  align-content: center;
}

.map {
  height: 600px;
  width: 1000px;
  align-content: center;
}
</style>




































































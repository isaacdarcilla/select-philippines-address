<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="select-philippines-address demo"/>
    <select @change="handleProvince">
      <option disabled selected>Select Region</option>
      <option v-for="region in regions" :value="region.region_code" :key="region.region_code">{{
          region.region_name
        }}
      </option>
    </select>
    <br/><br/>
    <select @change="handleCity">
      <option disabled selected>Select Province</option>
      <option v-for="province in provinces" :value="province.province_code" :key="province.province_code">
        {{ province.province_name }}
      </option>
    </select>
    <br/><br/>
    <select @change="handleBarangay">
      <option disabled selected>Select City</option>
      <option v-for="city in cities" :value="city.city_code" :key="city.city_code">{{ city.city_name }}</option>
    </select>
    <br/><br/>
    <select @change="barangaysChange">
      <option disabled selected>Select Barangay</option>
      <option v-for="barangay in barangays" :value="barangay.brgy_code" :key="barangay.brgy_code">{{
          barangay.brgy_name
        }}
      </option>
    </select>
    <br/><br/>
    <p>{{ barangay }}, {{ city }}, {{ province }}, {{ region }}</p>
    <br/>
    <a href="https://github.com/isaacdarcilla/select-philippines-address">select-philippines-address by Isaac</a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// eslint-disable-next-line no-unused-vars
import {regions, provinces, cities, barangays} from 'select-philippines-address';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      regions: [],
      provinces: [],
      cities: [],
      barangays: [],
      region: null,
      province: null,
      city: null,
      barangay: null,
    }
  },
  created() {
    regions().then(response => {
      this.regions = response;
    });
  },
  methods: {
    handleProvince(e) {
      this.region = e.target.selectedOptions[0].text;
      provinces(e.target.value).then(response => {
        this.provinces = response;
      });
    },
    handleCity(e) {
      this.province = e.target.selectedOptions[0].text;
      cities(e.target.value).then(response => {
        this.cities = response;
      });
    },
    handleBarangay(e) {
      this.city = e.target.selectedOptions[0].text;
      barangays(e.target.value).then(response => {
        this.barangays = response;
      });
    },
    barangaysChange(e) {
      this.barangay = e.target.selectedOptions[0].text;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

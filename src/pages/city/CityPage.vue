<template>
  <div>
    <CityHeader />
    <CitySearch :cities="cities" />
    <CityList
      :city="city"
      :hot-cities="hotCities"
      :cities="cities"
      :letter="letter"
    />
    <CityAlphabet :cities="cities" @letter-change="handleLetterChange" />
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/CityHeader.vue";
import CitySearch from "./components/CitySearch.vue";
import CityList from "./components/CityList.vue";
import CityAlphabet from "./components/CityAlphabet.vue";
export default {
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data() {
    return {
      city: "",
      hotCities: [],
      cities: {},
      letter: "",
    };
  },
  methods: {
    async getCityInfo() {
      const { data } = await axios("mock/city.json");
      if (data.ret && data.data) {
        const res = data.data;
        this.city = res.city;
        this.hotCities = res.hotCities;
        this.cities = res.cities;
      } else console.log("Failed to fetch city data.");
    },
    handleLetterChange(letter) {
      this.letter = letter;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<template>
  <div>
    <CityHeader />
    <CitySearch />
    <CityList />
    <CityAlphabet />
  </div>
</template>

<script>
import CityHeader from "./components/CityHeader.vue";
import CitySearch from "./components/CitySearch.vue";
import CityList from "./components/CityList.vue";
import CityAlphabet from "./components/CityAlphabet.vue";
export default {
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
};
</script>

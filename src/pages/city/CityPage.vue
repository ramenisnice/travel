<template>
  <div>
    <CityHeader />
    <CitySearch />
  </div>
</template>

<script>
import CityHeader from "./components/CityHeader.vue";
import CitySearch from "./components/CitySearch.vue";
export default {
  components: { CityHeader, CitySearch },
};
</script>

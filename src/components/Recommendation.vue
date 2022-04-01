<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >recommendations :-)</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 py-3 px-5">
          <div
            class="title2"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <span>Korea Software HRD Center is an academy training center for training software professionals in cooperation with Korea International Cooperation Agency(KOICA) and Webcash in April, 2013 in Phnom Penh, Cambodia.</span>
          </div>
          <div
            class="title3 float-right py-2 pl-5"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
          
            <span>Address: #12, St 323, Sangkat Boeung Kak II, Khan Toul Kork, Phnom Penh, Cambodia.</span
            >
          </div>
        </div>
          <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 py-3 px-5">
          <div
            class="title2"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <img :src="data" width="50%"/>

             
          </div>
          <div
            class="title3 float-right py-2 pl-5"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Recommendation",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      data: info.chhinghior_aba,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  text-align: justify;
}

.title3 {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 400;
  text-align: right;
}
</style>

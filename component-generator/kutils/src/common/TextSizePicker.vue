<template>
  <div class="">
      <select name="text-picker" id="text-picker" v-model="textSize" class="p-2 w-64 text-lg focus:outline-none focus:ring-4 bg-white border focus:bg-gray-50">
          <option value="text-xs">text-xs</option>
          <option value="text-sm">text-sm</option>
          <option value="text-base" selected>text-base</option>
          <option value="text-lg">text-lg</option>
          <option value="text-2xl">text-2xl</option>
          <option value="text-3xl">text-3xl</option>
          <option value="text-4xl">text-4xl</option>
          <option value="text-5xl">text-5xl</option>
          <option value="text-6xl">text-6xl</option>
          <option value="text-7xl">text-7xl</option>
          <option value="text-8xl">text-8xl</option>
          <option value="text-9xl">text-9xl</option>
      </select>
  </div>
</template>

<script>
export default {
    name:'TextSizePicker',
    data(){
        return {
            textSize:"text-base",
        }
    },
    watch:{
        textSize(newVal){
            this.$emit('setTextSize',newVal)
        }
    }
}
</script>

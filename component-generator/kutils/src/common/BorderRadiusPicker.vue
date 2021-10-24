<template>
  <div class="">
      <select name="border-radius-picker" id="border-radius-picker" v-model="borderRadius" class="p-2 w-64 text-lg focus:outline-none focus:ring-4 bg-white border focus:bg-gray-50" placeholder="Border kenar ayarını seçiniz.">
        <option value="rounded-none">rounded-none</option>
        <option value="rounded-sm">rounded-sm</option>
        <option value="rounded">rounded</option>
        <option value="rounded-md">rounded-md</option>
        <option value="rounded-lg">rounded-lg</option>
        <option value="rounded-xl">rounded-xl</option>
        <option value="rounded-2xl">rounded-2xl</option>
        <option value="rounded-3xl">rounded-3xl</option>
      </select>
  </div>
</template>

<script>
export default {
    name:'BorderRadiusPicker',
    data(){
        return {
            borderRadius:"rounded-lg",
        }
    },
    watch:{
        borderRadius(newVal){
            this.$emit('setBorderRadius',newVal)
        }
    }
}
</script>

<template>
  <div class="">
      <select name="font-family-picker" id="font-family-picker" v-model="fontFamily" class="p-2 w-64 text-lg focus:outline-none focus:ring-4 bg-white border focus:bg-gray-50" placeholder="Bir font tipi seçiniz.">
          <option value="font-serif" class="font-serif">font-serif</option>
          <option value="font-mono" class="font-mono">font-mono</option>
          <option value="font-sans" class="font-serif">font-sans</option>
      </select>
  </div>
</template>

<script>
export default {
    name:'FontPicker',
    data(){
        return {
            fontFamily:"font-sans",
        }
    },
    watch:{
        fontFamily(newVal){
            this.$emit('setFontFamily',newVal)
        }
    }
}
</script>

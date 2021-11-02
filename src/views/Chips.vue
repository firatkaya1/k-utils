<template>
  <div class="flex flex-col px-4 lg:px-2 mt-24 lg:mt-24 text-justify mb-48 xl:w-1/2 lg:w-1/2 2xl:w-2/5 w-full mx-auto">
      <h1 class="font-bold text-xl">Chips</h1>
      <p>Bu alanda görmüş olduğunuz chipsleri kopyalarak kendi projelerinize ekleyebilirsiniz.</p>
      <p>Bu özellik, vuetify projesindeki chips'lerden baz alınarak eklenmiştir.</p>
      <ChipsExamples/>
  </div>
</template>

<script>
import ChipsExamples from '../components/ChipsExamples.vue'

export default {
    name:"Button",
    components: { ChipsExamples },
}
</script>

<style>

</style>
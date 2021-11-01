<template>
  <div class="container mx-auto flex flex-col px-2 mt-4 w-full">
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
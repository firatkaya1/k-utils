<template>
  <div class="flex flex-col px-4 lg:px-2 mt-24 lg:mt-24 text-justify mb-48 xl:w-1/2 lg:w-1/2 2xl:w-2/5 w-full mx-auto">
      <h1 class="font-bold text-xl">Buttons</h1>
      <p>Bu alanda görmüş olduğunuz alertleri kopyalarak kendi projelerinize ekleyebilirsiniz.</p>
      <ButtonExamples/>
  </div>
</template>

<script>
import ButtonExamples from '../components/ButtonExamples.vue'

export default {
    name:"Button",
    components: { ButtonExamples },
}
</script>

<style>

</style>
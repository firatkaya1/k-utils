<template>
  <div class="flex flex-col px-2 mt-4 w-full">
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
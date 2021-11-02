<template>
  <div class="flex flex-col px-4 lg:px-2 mt-24 lg:mt-24 text-justify mb-48 xl:w-1/2 lg:w-1/2 2xl:w-2/5 w-full mx-auto">
      <h1 class="font-bold text-xl">Progress</h1>
      <p>Bu alanda görmüş olduğunuz progress barları kopyalarak kendi projelerinize ekleyebilirsiniz.</p>
      <ProgressExamples/>
  </div>
</template>

<script>
import ProgressExamples from '../components/ProgressExamples.vue'

export default {
    name:"Button",
    components: { ProgressExamples },
}
</script>

<style>

</style>
<template>
  <div class="flex flex-col px-2 mt-4 w-full">
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
<template>
  <div class="flex flex-col px-2 mt-4 w-full">
      <h1 class="font-bold text-xl">Alert</h1>
      <p>Bu alanda görmüş olduğunuz alertleri kopyalarak kendi projelerinize ekleyebilirsiniz.</p>
      <AlertExamples/>
  </div>
</template>

<script>
import AlertExamples from '../components/AlertExamples.vue'

export default {
    name:"Alert",
    components: { AlertExamples },
}
</script>

<style>

</style>
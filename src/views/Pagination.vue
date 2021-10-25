<template>
  <div class="flex flex-col px-2 mt-4 w-full">
      <h1 class="font-bold text-xl">Pagination</h1>
      <p>Bu alanda görmüş olduğunuz sayfalaştırılmaları kopyalarak kendi projelerinize ekleyebilirsiniz.</p>
      <PaginationExamples/>
  </div>
</template>

<script>
import PaginationExamples from '../components/PaginationExamples.vue'

export default {
    name:"Alert",
    components: { PaginationExamples },
}
</script>

<style>

</style>
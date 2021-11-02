<template>
  <div class="flex flex-col px-4 lg:px-2 mt-24 lg:mt-24 text-justify mb-48 xl:w-1/2 lg:w-1/2 2xl:w-2/5 w-full mx-auto">
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
<template>
  <div class="flex flex-col px-4 lg:px-2 mt-24 lg:mt-24 text-justify mb-48 xl:w-1/2 lg:w-1/2 2xl:w-2/5 w-full mx-auto">
      <h1 class="font-bold text-xl">List Groups</h1>
      <p class="mb-24">Liste gruplarını kullanarak esnek bir şekilde tekrarlı elementleri listeleyeblirsiniz.</p>
      <ListgroupExamples/>
  </div>
</template>

<script>
import ListgroupExamples from '../components/ListgroupExamples.vue'

export default {
    name:"Button",
    components: { ListgroupExamples },
}
</script>

<style>

</style>
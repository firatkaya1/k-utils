<template>
  <div class="flex flex-col px-4 lg:px-2 mt-24 lg:mt-24 text-justify mb-48 xl:w-1/2 lg:w-1/2 2xl:w-2/5 w-full mx-auto">
      <h1 class="font-bold text-xl">Navbars</h1>
      <p>Aşağıda örneklerde navbarları kullanabilirsiniz. Unutmadan, aşağıdaki navbarları etkin bir şekilde kullanabilmek için <span class="text-red-600"> Javascript </span> kullanmanız gerekmektedir.</p>
      <NavbarExamples/>
  </div>
</template>

<script>
import NavbarExamples from '../components/NavbarExamples.vue'

export default {
    name:"Button",
    components: { NavbarExamples },
}
</script>

<style>

</style>
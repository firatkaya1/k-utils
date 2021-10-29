<template>
  <div class="flex flex-col px-2 mt-4 w-full">
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
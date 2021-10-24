<template>
    <div class="flex w-96 border-r fixed top-0 left-0 h-screen p-4 font-mono flex flex-col">
      <h1 class="font-bold text-2xl"> K-Utils </h1>
      <hr>
      <ul class="list-inside list-disc bg-rose-200 space-y-2 mt-4 cursor-pointer ">
        <li>Başlamadan Önce</li>
        <li class="text-blue-500">Badge</li>
        <li>Alerts</li>
      </ul>
    </div>
</template>

<script>
export default {
    name:'Menu'
}
</script>

<style lang="postcss" scoped>
.active {
  @apply text-blue-500
}
li {
  @apply hover:text-blue-500 transition duration-300
}
</style>
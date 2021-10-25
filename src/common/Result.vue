<template>
    
  <div class="h-24 bg-gray-700 text-yellow-300 text-sm mt-8 flex justify-center rounded shadow font-mono">
       <div class="my-auto">
           {{result}}
       </div>
  </div>
</template>

<script>
export default {
    name:'Result',
    props:{
        result:{
            type:String,
            default:''
        }
    },
}
</script>

<style>

</style>
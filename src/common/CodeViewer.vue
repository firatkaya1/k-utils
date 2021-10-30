<template>
  <div class="flex flex-col fixed bottom-0 left-0 right-0 h-1/3 border- z-50 bg-gray-800">
        <div class="flex flex-row h-8 w-full bg-gray-900 border-b border-gray-600 text-white justify-between px-12">
            <h1 class="font-bold text-lg self-center uppercase tracking-widest"> Alert </h1>
            <h1 class="font-bold text-lg self-center  tracking-wider"> </h1>
            <div class="self-center">
                menu
            </div>
        </div>

        <pre v-highlightjs="codes" class="w-1/2 mx-auto border-l border-r border-gray-900 text-xs">
            <code class="language-html">  </code>
        </pre>
       
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'CodeViewer',
    methods:{
        ...mapGetters('config',['getDetail'])
    },  
    computed:{
        codes(){
            return this.getDetail()?.body?.replaceAll(">",">\n")
        }
    }
}
</script>

<style>
pre,code {
    margin-top: 0!important;
    padding-top:0!important;
    height: 100%!important;
    box-sizing: border-box;
    background-color: #1F2937!important;
}
code {
    white-space: pre-wrap!important;
}


</style>
<template>
  <div class="fixed bottom-0 left-0 right-0 h-1/3 border-t z-50 bg-gray-800">
        <pre v-highlightjs="codes" class="w-1/2 mx-auto border border-gray-900 text-sm">
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
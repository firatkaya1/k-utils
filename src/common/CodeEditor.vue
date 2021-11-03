<template>
  <div class="flex flex-col fixed top-0 left-0 right-0 lg:h-2/3 h-1/2 border- z-50 bg-white" v-if="isOpen ">
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'CodeEditor',
    methods:{
        ...mapGetters('config',['getCodeEditorOpen'])
    },
    computed:{
        isOpen(){
            return this.getCodeEditorOpen()
        }
    }
}
</script>

<style>

</style>
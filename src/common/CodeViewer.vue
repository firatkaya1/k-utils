<template>
  <div class="flex flex-col fixed bottom-0 left-0 right-0 lg:h-1/3 h-1/2 border- z-50 bg-gray-800" v-if="isOpen">
        <div class="flex flex-row h-8 w-full bg-gray-900 border-b border-gray-600 text-white justify-between px-12 ">
            <h1 class="font-bold text-lg self-center uppercase tracking-widest"> {{title}} </h1>
            <h1 class="font-bold text-lg self-center  tracking-wider"> </h1>
            <div class="self-center hover:bg-white hover:text-gray-800" @click="close">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>

        <pre v-highlightjs="codes" class="lg:w-3/4 w-full px-4 border-l border-r border-gray-900 text-xs">
            <code class="language-html">  </code>
        </pre>

        <div class="absolute lg:top-10 bottom-0  right-20 w-96 h-24 flex flex-col">
            <div class="flex flex-row space-x-6">
                <button class="px-6 py-2 text-white border border-white rounded focus:outline-none hover:bg-white hover:text-gray-900 tracking-widest uppercase font-mono">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </button>
                <button class="px-6 py-2 text-white border border-white rounded focus:outline-none hover:bg-white hover:text-gray-900 tracking-widest uppercase font-mono w-48" @click="copyToClipboard">
                    Kopyala
                </button>
                <button class="px-6 py-2 text-white border border-white rounded focus:outline-none hover:bg-white hover:text-gray-900 tracking-widest uppercase font-mono">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
            <div class="w-full mt-4">
                <button class="px-6 py-2 text-white border border-white rounded focus:outline-none hover:bg-white hover:text-gray-900 tracking-widest uppercase font-mono w-full" @click="updateCodeEditorStatus" v-if="!editMode">
                    Düzenle
                </button>
                <button class="px-6 py-2 text-white border border-white rounded focus:outline-none hover:bg-white hover:text-gray-900 tracking-widest uppercase font-mono w-full" @click="updateCodeEditorStatus" v-if="editMode">
                    Düzenlemeyi Kapat
                </button>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name:'CodeViewer',
    methods:{
        ...mapGetters('config',['getDetail','getCodeEditorOpen']),
        ...mapMutations('config',['updateDetailStatus','updateCodeEditorStatus']),
        ...mapMutations('notification',['pushNotification']),
        copyToClipboard(){
            navigator.clipboard.writeText(this.getDetail()?.body?.replaceAll(">",">\n"));
            this.pushNotification({ message:"Kopyalandı.",type:"success"})
        },
        close(){
            this.updateDetailStatus()
            if(this.editMode){
                this.updateCodeEditorStatus()
            }
        }
    },  
    computed:{
        title(){
            return this.getDetail()?.title
        },
        codes(){
            return this.getDetail()?.body?.replaceAll(">",">\n")
        },
        isOpen(){
            return this.getDetail()?.isOpen
        },
        editMode(){
            return this.getCodeEditorOpen()
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
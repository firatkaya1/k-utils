<template>
  <div class="flex flex-row w- fixed top-0 left-0 right-0 lg:h-2/3 h-1/2 border- z-50 bg-white border-8 border-green-600 bg-gray-800 divided-x" v-if="isOpen ">
    <pre class="flex flex-row w-1/3 p-2  whitespace-pre	focus:outline-none p-2" v-highlightjs="codes"  id="txt" contenteditable="true"  @input="changeText($event,$event.keyCode)">
        <code class="language-html w-full focus:outline-none"> 
            {{codes}}     
        </code>
    </pre>
    <div class="w-2/3 border-l p-2 flex justify-center ">
        <div class="self-center" v-html="codes">
                
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'CodeEditor',
    data(){
        return {
            codes:"<button>test</button>"
        }
    },
    methods:{
        ...mapGetters('config',['getCodeEditorOpen']),
        changeText(e){
            this.codes = e.target.innerText
            e.preventDefault()
            e.target.focus()
            var range,selection;
            if(document.createRange)
            {   
                range = document.createRange();
                range.selectNodeContents(document.getElementById("txt"));
                range.collapse(false);
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            }
            else if(document.selection)//IE 8 and lower
            { 
                range = document.body.createTextRange();
                range.moveToElementText(document.getElementById("txt"));
                range.collapse(false);
                range.select();
            }
        
        },
        preventEnter(keyCode){
            console.log("code :",keyCode)
        }
      
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
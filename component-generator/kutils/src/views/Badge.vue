<template>
  <div class="flex flex-col px-2 mt-4 w-full">
      <h1 class="font-bold text-xl">Badge Generator</h1>
      <div>
          Bu alanda kendinize ait özel bir badge üretebilirsiniz.
      </div>
      <div class="flex justify-center mt-24 border h-48 ">
           <div :class="classValue">
                badge
            </div>
      </div>
      <ColorPicker v-bind:title="'Background Color'" @setColor="setBackgroundColor"/>
      <ColorPicker v-bind:title="'Text Color'" @setColor="setTextColor"/>
      <ColorPicker v-bind:title="'Border Color'" @setColor="setBorderColor"/>

  </div>
</template>

<script>
import ColorPicker from '../common/ColorPicker.vue'
export default {
  components: { ColorPicker },
    name:"Badge",
    data(){
        return {
            borderColor:'',
            textColor:'',
            backgroundColor:'',
        }
    },
    methods:{
        setBorderColor(color){
            this.borderColor = color
        },
        setTextColor(color){
            this.textColor = color
        },
        setBackgroundColor(color){
            this.backgroundColor = color
        }
    },
    computed:{
        classValue(){
            return 'w-16 h-6 bg-'+this.backgroundColor+' rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center my-auto text-'+this.textColor+' border border-'+this.borderColor
        }
    }
}
</script>

<style>

</style>
<template>
  <div class="flex flex-col px-2 mt-4 w-full">
      <h1 class="font-bold text-xl">Badge Generator</h1>
      <div class="mb-24">
          Bu alanda kendinize ait özel bir badge üretebilirsiniz.
      </div>
        <div class="flex flex-row lg:space-x-4 space-y-2 flex-wrap">
            <TextSizePicker @setTextSize="setTextSize" />
            <FontPicker @setFontFamily="setFontFamily" />
            <BorderRadiusPicker @setBorderRadius="setBorderRadius"  />
        </div>
      <div class="flex justify-center border mt-4 h-48 ">
           <div :class="classValue">
                badge
            </div>
      </div>
      <ColorPicker title="Background Color" @setColor="setBackgroundColor"/>
      <ColorPicker title="Text Color" @setColor="setTextColor"/>
      <ColorPicker title="Border Color" @setColor="setBorderColor"/>
      <Result :result="classValue" />
      <BadgeExamples />
  </div>
</template>

<script>
import BadgeExamples from '../components/BadgeExamples.vue'
export default {
    name:"Badge",
    components:{BadgeExamples},
    data(){
        return {
            borderColor:'black',
            textColor:'black',
            backgroundColor:'bg-white',
            textSize:'text-base',
            fontFamily:'font-mono',
            borderRadius:'rounded-lg'
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
        },
        setTextSize(textSize){
            this.textSize = textSize
        },
        setFontFamily(fontFamily){
            this.fontFamily = fontFamily
        },
        setBorderRadius(borderRadius){
            this.borderRadius = borderRadius
        }
    },
    computed:{
        classValue(){
            return ' bg-'+this.backgroundColor+'  px-5 py-0.5 inline-block text-center my-auto text-'+this.textColor+' border border-'+this.borderColor + " "+this.textSize+ " "+this.fontFamily + " " + this.borderRadius
         }
    }
}
</script>

<style>

</style>
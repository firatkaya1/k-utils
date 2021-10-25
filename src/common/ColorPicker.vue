<template>
    <div class="flex  justify-between">
        <div class="my-2 ml-2 font-bold">
            {{title}}: {{color}} {{isHoverActive}}
        </div>
        <div class="flex my-auto" >
            <input type="radio" :id="yesId" :name="'isHoverActive'+yesId" value="true" v-model="isHoverActive"  class="my-auto">
            <label :for="yesId">Yes</label>
            <input type="radio" :id="noId" :name="'isHoverActive'+yesId" value="false" v-model="isHoverActive" class="my-auto ml-4" >
            <label :for="noId" >No</label>
        </div>
    </div>

  <div class="flex flex-row" >
      <div class="bg-gray-50 w-6 h-12 cursor-pointer" @click="setColor('gray-50')" @mouseover="setHoverColor('gray-50')"></div>
      <div class="bg-gray-100 w-6 h-12 cursor-pointer" @click="setColor('gray-100')" @mouseover="setHoverColor('gray-100')" ></div>
      <div class="bg-gray-200 w-6 h-12 cursor-pointer" @click="setColor('gray-200')" @mouseover="setHoverColor('gray-200')" ></div>
      <div class="bg-gray-300 w-6 h-12 cursor-pointer" @click="setColor('gray-300')" @mouseover="setHoverColor('gray-300')" ></div>
      <div class="bg-gray-400 w-6 h-12 cursor-pointer" @click="setColor('gray-400')" @mouseover="setHoverColor('gray-400')" ></div>
      <div class="bg-gray-500 w-6 h-12 cursor-pointer" @click="setColor('gray-500')" @mouseover="setHoverColor('gray-500')" ></div>
      <div class="bg-gray-600 w-6 h-12 cursor-pointer" @click="setColor('gray-600')" @mouseover="setHoverColor('gray-600')" ></div>
      <div class="bg-gray-700 w-6 h-12 cursor-pointer" @click="setColor('gray-700')" @mouseover="setHoverColor('gray-700')" ></div>
      <div class="bg-gray-800 w-6 h-12 cursor-pointer" @click="setColor('gray-800')" @mouseover="setHoverColor('gray-800')" ></div>
      <div class="bg-gray-900 w-6 h-12 cursor-pointer" @click="setColor('gray-900')" @mouseover="setHoverColor('gray-900')" ></div>

      <div class="bg-red-50 w-6 h-12 cursor-pointer" @click="setColor('red-50')" @mouseover="setHoverColor('red-100')" ></div>
      <div class="bg-red-100 w-6 h-12 cursor-pointer" @click="setColor('red-100')" @mouseover="setHoverColor('red-200')" ></div>
      <div class="bg-red-200 w-6 h-12 cursor-pointer" @click="setColor('red-200')" @mouseover="setHoverColor('red-300')" ></div>
      <div class="bg-red-300 w-6 h-12 cursor-pointer" @click="setColor('red-300')" @mouseover="setHoverColor('red-400')" ></div>
      <div class="bg-red-400 w-6 h-12 cursor-pointer" @click="setColor('red-400')" @mouseover="setHoverColor('red-500')" ></div>
      <div class="bg-red-500 w-6 h-12 cursor-pointer" @click="setColor('red-500')" @mouseover="setHoverColor('red-600')" ></div>
      <div class="bg-red-600 w-6 h-12 cursor-pointer" @click="setColor('red-600')" @mouseover="setHoverColor('red-700')" ></div>
      <div class="bg-red-700 w-6 h-12 cursor-pointer" @click="setColor('red-700')" @mouseover="setHoverColor('red-800')" ></div>
      <div class="bg-red-800 w-6 h-12 cursor-pointer" @click="setColor('red-800')" @mouseover="setHoverColor('red-900')" ></div>
      <div class="bg-red-900 w-6 h-12 cursor-pointer" @click="setColor('red-900')" @mouseover="setHoverColor('red-900')" ></div>

      <div class="bg-yellow-50 w-6 h-12 cursor-pointer" @click="setColor('yellow-50')" @mouseover="setHoverColor('yellow-50')" ></div>
      <div class="bg-yellow-100 w-6 h-12 cursor-pointer" @click="setColor('yellow-100')" @mouseover="setHoverColor('yellow-100')" ></div>
      <div class="bg-yellow-200 w-6 h-12 cursor-pointer" @click="setColor('yellow-200')" @mouseover="setHoverColor('yellow-200')" ></div>
      <div class="bg-yellow-300 w-6 h-12 cursor-pointer" @click="setColor('yellow-300')" @mouseover="setHoverColor('yellow-300')" ></div>
      <div class="bg-yellow-600 w-6 h-12 cursor-pointer" @click="setColor('yellow-400')" @mouseover="setHoverColor('yellow-400')" ></div>
      <div class="bg-yellow-500 w-6 h-12 cursor-pointer" @click="setColor('yellow-500')" @mouseover="setHoverColor('yellow-500')" ></div>
      <div class="bg-yellow-600 w-6 h-12 cursor-pointer" @click="setColor('yellow-600')" @mouseover="setHoverColor('yellow-600')" ></div>
      <div class="bg-yellow-700 w-6 h-12 cursor-pointer" @click="setColor('yellow-700')" @mouseover="setHoverColor('yellow-700')" ></div>
      <div class="bg-yellow-800 w-6 h-12 cursor-pointer" @click="setColor('yellow-800')" @mouseover="setHoverColor('yellow-800')" ></div>
      <div class="bg-yellow-900 w-6 h-12 cursor-pointer" @click="setColor('yellow-900')" @mouseover="setHoverColor('yellow-900')" ></div>

      <div class="bg-green-50 w-6 h-12 cursor-pointer" @click="setColor('green-50')" @mouseover="setHoverColor('green-50')" ></div>
      <div class="bg-green-100 w-6 h-12 cursor-pointer" @click="setColor('green-100')" @mouseover="setHoverColor('green-100')" ></div>
      <div class="bg-green-200 w-6 h-12 cursor-pointer" @click="setColor('green-200')" @mouseover="setHoverColor('green-200')" ></div>
      <div class="bg-green-300 w-6 h-12 cursor-pointer" @click="setColor('green-300')" @mouseover="setHoverColor('green-300')" ></div>
      <div class="bg-green-400 w-6 h-12 cursor-pointer" @click="setColor('green-400')" @mouseover="setHoverColor('green-400')" ></div>
      <div class="bg-green-500 w-6 h-12 cursor-pointer" @click="setColor('green-500')" @mouseover="setHoverColor('green-500')" ></div>
      <div class="bg-green-600 w-6 h-12 cursor-pointer" @click="setColor('green-600')" @mouseover="setHoverColor('green-600')" ></div>
      <div class="bg-green-700 w-6 h-12 cursor-pointer" @click="setColor('green-700')" @mouseover="setHoverColor('green-700')" ></div>
      <div class="bg-green-800 w-6 h-12 cursor-pointer" @click="setColor('green-800')" @mouseover="setHoverColor('green-800')" ></div>
      <div class="bg-green-900 w-6 h-12 cursor-pointer" @click="setColor('green-900')" @mouseover="setHoverColor('green-900')" ></div>

      <div class="bg-blue-50 w-6 h-12 cursor-pointer" @click="setColor('blue-50')" @mouseover="setHoverColor('blue-50')" ></div>
      <div class="bg-blue-100 w-6 h-12 cursor-pointer" @click="setColor('blue-100')" @mouseover="setHoverColor('blue-100')" ></div>
      <div class="bg-blue-200 w-6 h-12 cursor-pointer" @click="setColor('blue-200')" @mouseover="setHoverColor('blue-200')" ></div>
      <div class="bg-blue-300 w-6 h-12 cursor-pointer" @click="setColor('blue-300')" @mouseover="setHoverColor('blue-300')" ></div>
      <div class="bg-blue-400 w-6 h-12 cursor-pointer" @click="setColor('blue-400')" @mouseover="setHoverColor('blue-400')" ></div>
      <div class="bg-blue-500 w-6 h-12 cursor-pointer" @click="setColor('blue-500')" @mouseover="setHoverColor('blue-500')" ></div>
      <div class="bg-blue-600 w-6 h-12 cursor-pointer" @click="setColor('blue-600')" @mouseover="setHoverColor('blue-600')" ></div>
      <div class="bg-blue-700 w-6 h-12 cursor-pointer" @click="setColor('blue-700')" @mouseover="setHoverColor('blue-700')" ></div>
      <div class="bg-blue-800 w-6 h-12 cursor-pointer" @click="setColor('blue-800')" @mouseover="setHoverColor('blue-800')" ></div>
      <div class="bg-blue-900 w-6 h-12 cursor-pointer" @click="setColor('blue-900')" @mouseover="setHoverColor('blue-900')" ></div>

      <div class="bg-indigo-50 w-6 h-12 cursor-pointer" @click="setColor('indigo-50')" @mouseover="setHoverColor('indigo-50')" ></div>
      <div class="bg-indigo-100 w-6 h-12 cursor-pointer" @click="setColor('indigo-100')" @mouseover="setHoverColor('indigo-100')" ></div>
      <div class="bg-indigo-200 w-6 h-12 cursor-pointer" @click="setColor('indigo-200')" @mouseover="setHoverColor('indigo-200')" ></div>
      <div class="bg-indigo-300 w-6 h-12 cursor-pointer" @click="setColor('indigo-300')" @mouseover="setHoverColor('indigo-300')" ></div>
      <div class="bg-indigo-400 w-6 h-12 cursor-pointer" @click="setColor('indigo-400')" @mouseover="setHoverColor('indigo-400')" ></div>
      <div class="bg-indigo-500 w-6 h-12 cursor-pointer" @click="setColor('indigo-500')" @mouseover="setHoverColor('indigo-500')" ></div>
      <div class="bg-indigo-600 w-6 h-12 cursor-pointer" @click="setColor('indigo-600')" @mouseover="setHoverColor('indigo-600')" ></div>
      <div class="bg-indigo-700 w-6 h-12 cursor-pointer" @click="setColor('indigo-700')" @mouseover="setHoverColor('indigo-700')" ></div>
      <div class="bg-indigo-800 w-6 h-12 cursor-pointer" @click="setColor('indigo-800')" @mouseover="setHoverColor('indigo-800')" ></div>
      <div class="bg-indigo-900 w-6 h-12 cursor-pointer" @click="setColor('indigo-900')" @mouseover="setHoverColor('indigo-900')" ></div>

      <div class="bg-purple-50 w-6 h-12 cursor-pointer" @click="setColor('purple-50')" @mouseover="setHoverColor('purple-50')" ></div>
      <div class="bg-purple-100 w-6 h-12 cursor-pointer" @click="setColor('purple-100')" @mouseover="setHoverColor('purple-100')" ></div>
      <div class="bg-purple-200 w-6 h-12 cursor-pointer" @click="setColor('purple-200')" @mouseover="setHoverColor('purple-200')" ></div>
      <div class="bg-purple-300 w-6 h-12 cursor-pointer" @click="setColor('purple-300')" @mouseover="setHoverColor('purple-300')" ></div>
      <div class="bg-purple-400 w-6 h-12 cursor-pointer" @click="setColor('purple-400')" @mouseover="setHoverColor('purple-400')" ></div>
      <div class="bg-purple-500 w-6 h-12 cursor-pointer" @click="setColor('purple-500')" @mouseover="setHoverColor('purple-500')" ></div>
      <div class="bg-purple-600 w-6 h-12 cursor-pointer" @click="setColor('purple-600')" @mouseover="setHoverColor('purple-600')" ></div>
      <div class="bg-purple-700 w-6 h-12 cursor-pointer" @click="setColor('purple-700')" @mouseover="setHoverColor('purple-700')" ></div>
      <div class="bg-purple-800 w-6 h-12 cursor-pointer" @click="setColor('purple-800')" @mouseover="setHoverColor('purple-800')" ></div>
      <div class="bg-purple-900 w-6 h-12 cursor-pointer" @click="setColor('purple-900')" @mouseover="setHoverColor('purple-900')" ></div>

      <div class="bg-pink-50 w-6 h-12 cursor-pointer" @click="setColor('pink-50')" @mouseover="setHoverColor('pink-50')" ></div>
      <div class="bg-pink-100 w-6 h-12 cursor-pointer" @click="setColor('pink-100')" @mouseover="setHoverColor('pink-100')" ></div>
      <div class="bg-pink-200 w-6 h-12 cursor-pointer" @click="setColor('pink-200')" @mouseover="setHoverColor('pink-200')" ></div>
      <div class="bg-pink-300 w-6 h-12 cursor-pointer" @click="setColor('pink-300')" @mouseover="setHoverColor('pink-300')" ></div>
      <div class="bg-pink-400 w-6 h-12 cursor-pointer" @click="setColor('pink-400')" @mouseover="setHoverColor('pink-400')" ></div>
      <div class="bg-pink-500 w-6 h-12 cursor-pointer" @click="setColor('pink-500')" @mouseover="setHoverColor('pink-500')" ></div>
      <div class="bg-pink-600 w-6 h-12 cursor-pointer" @click="setColor('pink-600')" @mouseover="setHoverColor('pink-600')" ></div>
      <div class="bg-pink-700 w-6 h-12 cursor-pointer" @click="setColor('pink-700')" @mouseover="setHoverColor('pink-700')" ></div>
      <div class="bg-pink-800 w-6 h-12 cursor-pointer" @click="setColor('pink-800')" @mouseover="setHoverColor('pink-800')" ></div>
      <div class="bg-pink-900 w-6 h-12 cursor-pointer" @click="setColor('pink-900')" @mouseover="setHoverColor('pink-900')" ></div>
  </div>
</template>

<script>
export default {
    name:'ColorPicker',
    emits:['setColor'],
    props:['title'],
    data(){
        return {
            color:'bg-gray-50',
            isHoverActive:false,
            yesId:Math.random(),
            noId:Math.random()
        }
    },
    methods:{
        setColor(val){
            this.color = val
            this.$emit('setColor',this.color)
        },
        setHoverColor(val){
            if(this.isHoverActive === 'true'){
                this.$emit('setColor',this.color)
                this.color = val
            }
               
        }
    }
}
</script>

<style>

</style>
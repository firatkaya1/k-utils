<template>
    <div class="container mx-auto flex flex-col space-y-12">
    <h1 class="font-bold text-xl">Basic</h1>
    <div class="flex flex-row flex-wrap justify-center">
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-gray-800 m-4" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">An item</li>
            <li class="px-4 py-1.5">A second item</li>
            <li class="px-4 py-1.5">A third item</li>
            <li class="px-4 py-1.5">A fourth item</li>
            <li class="px-4 py-1.5">And a fifth one</li>
        </ul>
       <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-gray-800 m-4 text-gray-600 divide-gray-600 border-gray-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">An item</li>
            <li class="px-4 py-1.5">A second item</li>
            <li class="px-4 py-1.5">A third item</li>
            <li class="px-4 py-1.5">A fourth item</li>
            <li class="px-4 py-1.5">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-red-800 m-4 text-red-600 divide-red-600 border-red-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">An item</li>
            <li class="px-4 py-1.5">A second item</li>
            <li class="px-4 py-1.5">A third item</li>
            <li class="px-4 py-1.5">A fourth item</li>
            <li class="px-4 py-1.5">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-red-800 m-4 text-red-600 divide-red-600 border-red-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">An item</li>
            <li class="px-4 py-1.5">A second item</li>
            <li class="px-4 py-1.5">A third item</li>
            <li class="px-4 py-1.5">A fourth item</li>
            <li class="px-4 py-1.5">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-green-800 m-4 text-green-600 divide-green-600 border-green-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">An item</li>
            <li class="px-4 py-1.5">A second item</li>
            <li class="px-4 py-1.5">A third item</li>
            <li class="px-4 py-1.5">A fourth item</li>
            <li class="px-4 py-1.5">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-blue-800 m-4 text-blue-600 divide-blue-600 border-blue-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">An item</li>
            <li class="px-4 py-1.5">A second item</li>
            <li class="px-4 py-1.5">A third item</li>
            <li class="px-4 py-1.5">A fourth item</li>
            <li class="px-4 py-1.5">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-indigo-800 m-4 text-indigo-600 divide-indigo-600 border-indigo-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">An item</li>
            <li class="px-4 py-1.5">A second item</li>
            <li class="px-4 py-1.5">A third item</li>
            <li class="px-4 py-1.5">A fourth item</li>
            <li class="px-4 py-1.5">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-pink-800 m-4 text-pink-600 divide-pink-600 border-pink-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">An item</li>
            <li class="px-4 py-1.5">A second item</li>
            <li class="px-4 py-1.5">A third item</li>
            <li class="px-4 py-1.5">A fourth item</li>
            <li class="px-4 py-1.5">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-purple-800 m-4 text-purple-600 divide-purple-600 border-purple-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">An item</li>
            <li class="px-4 py-1.5">A second item</li>
            <li class="px-4 py-1.5">A third item</li>
            <li class="px-4 py-1.5">A fourth item</li>
            <li class="px-4 py-1.5">And a fifth one</li>
        </ul>
    </div>
    <h1 class="font-bold text-xl">Basic with Hover</h1>
    <div class="flex flex-row flex-wrap justify-center">
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-gray-800 m-4" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">An item</li>
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A second item</li>
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A third item</li>
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A fourth item</li>
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">And da fifth one</li>
        </ul>
       <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-gray-800 m-4 text-gray-600 divide-gray-600 border-gray-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">An item</li>
            <li class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">A second item</li>
            <li class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">A third item</li>
            <li class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">A fourth item</li>
            <li class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-red-800 m-4 text-red-600 divide-red-600 border-red-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">An item</li>
            <li class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">A second item</li>
            <li class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">A third item</li>
            <li class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">A fourth item</li>
            <li class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-green-800 m-4 text-green-600 divide-green-600 border-green-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">An item</li>
            <li class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">A second item</li>
            <li class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">A third item</li>
            <li class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">A fourth item</li>
            <li class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-blue-800 m-4 text-blue-600 divide-blue-600 border-blue-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">An item</li>
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A second item</li>
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A third item</li>
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A fourth item</li>
            <li class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-indigo-800 m-4 text-indigo-600 divide-indigo-600 border-indigo-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">An item</li>
            <li class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">A second item</li>
            <li class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">A third item</li>
            <li class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">A fourth item</li>
            <li class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-pink-800 m-4 text-pink-600 divide-pink-600 border-pink-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">An item</li>
            <li class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">A second item</li>
            <li class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">A third item</li>
            <li class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">A fourth item</li>
            <li class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</li>
        </ul>
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-purple-800 m-4 text-purple-600 divide-purple-600 border-purple-600" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">An item</li>
            <li class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">A second item</li>
            <li class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">A third item</li>
            <li class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">A fourth item</li>
            <li class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</li>
        </ul>
    </div>
    <h1 class="font-bold text-xl">Basic with Links</h1>
    <div class="flex flex-row flex-wrap justify-center">
        <div class="flex flex-col w-96 border rounded-md divide-y-2 text-gray-800 m-4" @click="openCodeViewer($event)">
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">An item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A second item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A third item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A fourth item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">And da fifth one</a>
        </div>
       <div class="flex flex-col w-96 border rounded-md divide-y-2 text-gray-800 m-4 text-gray-600 divide-gray-600 border-gray-600" @click="openCodeViewer($event)">
            <a href="#" class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">An item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">A second item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">A third item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">A fourth item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-gray-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</a>
        </div>
        <div class="flex flex-col w-96 border rounded-md divide-y-2 text-red-800 m-4 text-red-600 divide-red-600 border-red-600" @click="openCodeViewer($event)">
            <a href="#" class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">An item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">A second item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">A third item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">A fourth item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-red-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</a>
        </div>
        <div class="flex flex-col w-96 border rounded-md divide-y-2 text-green-800 m-4 text-green-600 divide-green-600 border-green-600" @click="openCodeViewer($event)">
            <a href="#" class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">An item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">A second item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">A third item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">A fourth item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-green-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</a>
        </div>
        <div class="flex flex-col w-96 border rounded-md divide-y-2 text-blue-800 m-4 text-blue-600 divide-blue-600 border-blue-600" @click="openCodeViewer($event)">
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">An item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A second item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A third item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">A fourth item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</a>
        </div>
        <div class="flex flex-col w-96 border rounded-md divide-y-2 text-indigo-800 m-4 text-indigo-600 divide-indigo-600 border-indigo-600" @click="openCodeViewer($event)">
            <a href="#" class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">An item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">A second item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">A third item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">A fourth item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</a>
        </div>
        <div class="flex flex-col w-96 border rounded-md divide-y-2 text-pink-800 m-4 text-pink-600 divide-pink-600 border-pink-600" @click="openCodeViewer($event)">
            <a href="#" class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">An item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">A second item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">A third item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">A fourth item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-pink-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</a>
        </div>
        <div class="flex flex-col w-96 border rounded-md divide-y-2 text-purple-800 m-4 text-purple-600 divide-purple-600 border-purple-600" @click="openCodeViewer($event)">
            <a href="#" class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">An item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">A second item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">A third item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">A fourth item</a>
            <a href="#" class="px-4 py-1.5 hover:bg-purple-500 hover:text-white cursor-pointer transition duration-200">And a fifth one</a>
        </div>
    </div>
    <h1 class="font-bold text-xl">With Badges</h1>
    <div class="flex flex-row flex-wrap justify-center">
        <ul class="flex flex-col w-96 border rounded-md divide-y-2 text-gray-800 m-4" @click="openCodeViewer($event)">
            <li class="px-4 py-1.5">
                An item  
                <span class="text-white px-2 py-0.5 text-center rounded-full text-xs bg-blue-600 font-bold float-right"> 14 </span>  
            </li>
            <li class="px-4 py-1.5">
                A second item 
                <span class="text-white px-2 py-0.5 text-center rounded-full text-xs bg-blue-600 font-bold float-right"> 2 </span>  
            </li>
            <li class="px-4 py-1.5">
                A third item
                <span class="text-white px-2 py-0.5 text-center rounded-full text-xs bg-blue-600 font-bold float-right"> 196 </span>  
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:'ListgroupExamples',
    methods:{
        ...mapMutations('config',['setDetail']),
        openCodeViewer(event){
            this.setDetail(event.currentTarget.outerHTML)
        }
    }
}
</script>

<style>

</style>
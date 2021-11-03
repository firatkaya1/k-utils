<template>
    <div class="container lg:mx-auto mt-24">
        <div class="flex lg:flex-col flex-row flex-wrap space-y-5 mb-48">
            <!-- Button primary -->
            <div class="flex flex-wrap lg:flex-nowrap justify-between w-full space-x-4">
                <!-- Button primary -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)" class="px-1 py-0.5 bg-blue-500 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-blue-500 text-sm no-underline select-none text-center leading-6 font-normal	align-middle rounded-md text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-blue-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-blue-500 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        Submit-lg
                    </button>
                </div>
                <!-- Button outline primary -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-white border border-blue-500  text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-blue-500 hover:text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-white border border-blue-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-blue-500 hover:text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-white border border-blue-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-blue-500 hover:text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-white border border-blue-500 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-blue-500 hover:text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        Submit-lg
                    </button>
                </div>
            </div>
            <!-- Button secondary -->
            <div class="flex flex-wrap lg:flex-nowrap justify-between w-full space-x-4">
                <!-- Button secondary -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-gray-500 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-white focus:outline-none hover:bg-gray-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-gray-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-white focus:outline-none hover:bg-gray-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-gray-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none hover:bg-gray-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-gray-500 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-white focus:outline-none hover:bg-gray-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-lg
                    </button>
                </div>
                <!-- Button outline secondary -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-white border border-gray-500 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-gray-600 hover:text-white focus:outline-none hover:bg-gray-500 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-white border border-gray-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-gray-600 hover:text-white focus:outline-none hover:bg-gray-500 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-white border border-gray-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-gray-600 hover:text-white focus:outline-none hover:bg-gray-500 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-white border border-gray-500 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-gray-600 hover:text-white focus:outline-none hover:bg-gray-500 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-lg
                    </button>
                </div>
            </div>

            <!-- Button success -->
            <div class="flex flex-wrap lg:flex-nowrap justify-between w-full space-x-4">
                <!-- Button success -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-green-500 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-white focus:outline-none hover:bg-green-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-green-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-white focus:outline-none hover:bg-green-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-green-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none hover:bg-green-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-green-500 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-white focus:outline-none hover:bg-green-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Submit-lg
                    </button>
                </div>
                <!-- Button outline success -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-white border border-green-500 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-green-500 hover:text-white focus:outline-none hover:bg-green-600 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-white border border-green-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-green-500 hover:text-white focus:outline-none hover:bg-green-600 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-white border border-green-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-green-500 hover:text-white focus:outline-none hover:bg-green-600 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-white border border-green-500 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-green-500 hover:text-white focus:outline-none hover:bg-green-600 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Submit-lg
                    </button>
                </div>
            </div>
            
            <!-- Button danger -->
            <div class="flex flex-wrap lg:flex-nowrap justify-between w-full space-x-4">
                <!-- Button danger -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-red-600 text-xs no-underline select-none text-center leading-6 font-normal	align-middle rounded text-white focus:outline-none hover:bg-red-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-red-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-red-600 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-white focus:outline-none hover:bg-red-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-red-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-red-600 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none hover:bg-red-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-red-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-red-600 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-white focus:outline-none hover:bg-red-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-red-200 inline-block">
                        Submit-lg
                    </button>
                </div>
                <!-- Button outline danger -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-white border border-red-500 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-red-500 hover:text-white focus:outline-none hover:bg-red-600 transition duration-300 shadow-lg focus:ring-4 focus:ring-red-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-white border border-red-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-red-500 hover:text-white focus:outline-none hover:bg-red-600 transition duration-300 shadow-lg focus:ring-4 focus:ring-red-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-white border border-red-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-red-500 hover:text-white focus:outline-none hover:bg-red-600 transition duration-300 shadow-lg focus:ring-4 focus:ring-red-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-white border border-red-500 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-red-500 hover:text-white focus:outline-none hover:bg-red-600 transition duration-300 shadow-lg focus:ring-4 focus:ring-red-200 inline-block">
                        Submit-lg
                    </button>
                </div>
            </div>

            <!-- Button yellow -->
            <div class="flex flex-wrap lg:flex-nowrap justify-between w-full space-x-4">
                <!-- Button yellow -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-yellow-400 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-black focus:outline-none hover:bg-yellow-300 transition duration-300 shadow-lg focus:ring-4 focus:ring-yellow-400 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-yellow-400 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-black focus:outline-none hover:bg-yellow-300 transition duration-300 shadow-lg focus:ring-4 focus:ring-yellow-400 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-yellow-400 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-black focus:outline-none hover:bg-yellow-300 transition duration-300 shadow-lg focus:ring-4 focus:ring-yellow-400 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-yellow-400 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-black focus:outline-none hover:bg-yellow-300 transition duration-300 shadow-lg focus:ring-4 focus:ring-yellow-400 inline-block">
                        Submit-lg
                    </button>
                </div>
                <!-- Button outline danger -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-white border border-yellow-400 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-yellow-500 hover:text-black focus:outline-none hover:bg-yellow-400 transition duration-300 shadow-lg focus:ring-4 focus:ring-yellow-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-white border border-yellow-400 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-yellow-500 hover:text-black focus:outline-none hover:bg-yellow-400 transition duration-300 shadow-lg focus:ring-4 focus:ring-yellow-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-white border border-yellow-400 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-yellow-500 hover:text-black focus:outline-none hover:bg-yellow-400 transition duration-300 shadow-lg focus:ring-4 focus:ring-yellow-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-white border border-yellow-400 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-yellow-500 hover:text-black focus:outline-none hover:bg-yellow-400 transition duration-300 shadow-lg focus:ring-4 focus:ring-yellow-200 inline-block">
                        Submit-lg
                    </button>
                </div>
            </div>

            <!-- Button info -->
            <div class="flex flex-wrap lg:flex-nowrap justify-between w-full space-x-4">
                <!-- Button info -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-indigo-500 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-white focus:outline-none hover:bg-indigo-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-400 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-indigo-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-white focus:outline-none hover:bg-indigo-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-400 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-indigo-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none hover:bg-indigo-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-400 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-indigo-500 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-white focus:outline-none hover:bg-indigo-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-400 inline-block">
                        Submit-lg
                    </button>
                </div>
                <!-- Button outline info -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-white border border-indigo-400 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-indigo-500 hover:text-black focus:outline-none hover:bg-indigo-400 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-white border border-indigo-400 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-indigo-500 hover:text-black focus:outline-none hover:bg-indigo-400 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-white border border-indigo-400 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-indigo-500 hover:text-black focus:outline-none hover:bg-indigo-400 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-white border border-indigo-400 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-indigo-500 hover:text-black focus:outline-none hover:bg-indigo-400 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-200 inline-block">
                        Submit-lg
                    </button>
                </div>
            </div>

            <!-- Button light -->
            <div class="flex flex-wrap lg:flex-nowrap justify-between w-full space-x-4">
                <!-- Button light -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-gray-50 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-black focus:outline-none hover:bg-gray-100 transition duration-300 shadow-sm focus:ring-4 focus:ring-gray-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-gray-50 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-black focus:outline-none hover:bg-gray-100 transition duration-300 shadow-md focus:ring-4 focus:ring-gray-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-gray-50 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-black focus:outline-none hover:bg-gray-100 transition duration-300 shadow-md focus:ring-4 focus:ring-gray-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-gray-50 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-black focus:outline-none hover:bg-gray-100 transition duration-300 shadow-md focus:ring-4 focus:ring-gray-200 inline-block">
                        Submit-lg
                    </button>
                </div>
                <!-- Button outline light -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-white border border-gray-200 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-gray-500 hover:text-black focus:outline-none hover:bg-gray-100 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-200 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-white border border-gray-200 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-gray-500 hover:text-black focus:outline-none hover:bg-gray-100 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-200 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-white border border-gray-200 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-gray-500 hover:text-black focus:outline-none hover:bg-gray-100 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-200 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-white border border-gray-200 text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-gray-500 hover:text-black focus:outline-none hover:bg-gray-100 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-200 inline-block">
                        Submit-lg
                    </button>
                </div>
            </div>

            <!-- Button black -->
            <div class="flex flex-wrap lg:flex-nowrap justify-between w-full space-x-4">
                <!-- Button black -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-black text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-white focus:outline-none transition duration-300 shadow-sm focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-black text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-white focus:outline-none transition duration-300 shadow-md focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-black text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none transition duration-300 shadow-md focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-black text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-white focus:outline-none transition duration-300 shadow-md focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-lg
                    </button>
                </div>
                <!-- Button outline black -->
                <div class="flex lg:block lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0">
                    <button @click="copyToClipboard($event)"  class="px-1 py-0.5 bg-white border border-black text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-black hover:text-white hover:bg-black focus:outline-none transition duration-300 shadow-sm focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-xs
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-3 py-1.5 bg-white border border-black text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-black hover:text-white hover:bg-black focus:outline-none transition duration-300 shadow-md focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-sm
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-4 py-2 bg-white border border-black text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-black hover:text-white hover:bg-black focus:outline-none transition duration-300 shadow-md focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-md
                    </button>
        
                    <button @click="copyToClipboard($event)"  class="px-6 py-3 bg-white border border-black text-lg  no-underline select-none text-center leading-6 font-normal align-middle rounded-lg  text-black hover:text-white hover:bg-black focus:outline-none transition duration-300 shadow-md focus:ring-4 focus:ring-gray-400 inline-block">
                        Submit-lg
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name:'ButtonExample',
    methods:{
        ...mapMutations('config',['setDetail']),
        copyToClipboard(event){
            this.setDetail({body:event.currentTarget.outerHTML,title:'Buttons'})
        }
    }

}
</script>

<style>

</style>
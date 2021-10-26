<template>
    <div class="container mx-auto mt-12">
        <div class="flex lg:flex-row flex-col">
            <!--Alert Bootstrap-->
            <div class="flex flex-col space-y-8  w-1/2">
                <!--Alert Gray-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-gray-200 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert red-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-red-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert Yellow-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-yellow-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert green-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-green-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert blue-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-blue-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert indigo-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-indigo-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert purple-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-purple-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert pink-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-pink-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
            <!--Alert Bootstrap-->
            <div class="flex flex-col space-y-8  w-1/2">
                <!--Alert Gray-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-gray-200 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert red-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-red-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert Yellow-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-yellow-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert green-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-green-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert blue-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-blue-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert indigo-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-indigo-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert purple-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-purple-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!--Alert pink-->
                <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-pink-200" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p class="text-justify px-4 mr-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <!-- Tailwind Alert -->
        <div class="flex lg:flex-row flex-col my-24">
            <div class="flex lg:flex-row flex-col space-y-8 w-1/2">
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-gray-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold">Attention needed</h1>
                        <p class="text-justify text-gray-700 font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusamus quos iure architecto autem accusantium, laborum laboriosam maiores porro temporibus natus quae facilis tempore doloremque! Ea veritatis excepturi ab possimus!
                        </p>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-red-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold">Attention needed</h1>
                        <p class="text-justify text-gray-700 font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusamus quos iure architecto autem accusantium, laborum laboriosam maiores porro temporibus natus quae facilis tempore doloremque! Ea veritatis excepturi ab possimus!
                        </p>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-yellow-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold">Attention needed</h1>
                        <p class="text-justify text-gray-700 font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusamus quos iure architecto autem accusantium, laborum laboriosam maiores porro temporibus natus quae facilis tempore doloremque! Ea veritatis excepturi ab possimus!
                        </p>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-green-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold">Attention needed</h1>
                        <p class="text-justify text-gray-700 font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusamus quos iure architecto autem accusantium, laborum laboriosam maiores porro temporibus natus quae facilis tempore doloremque! Ea veritatis excepturi ab possimus!
                        </p>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-blue-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold">Attention needed</h1>
                        <p class="text-justify text-gray-700 font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusamus quos iure architecto autem accusantium, laborum laboriosam maiores porro temporibus natus quae facilis tempore doloremque! Ea veritatis excepturi ab possimus!
                        </p>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-indigo-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold">Attention needed</h1>
                        <p class="text-justify text-gray-700 font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusamus quos iure architecto autem accusantium, laborum laboriosam maiores porro temporibus natus quae facilis tempore doloremque! Ea veritatis excepturi ab possimus!
                        </p>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-purple-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold">Attention needed</h1>
                        <p class="text-justify text-gray-700 font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusamus quos iure architecto autem accusantium, laborum laboriosam maiores porro temporibus natus quae facilis tempore doloremque! Ea veritatis excepturi ab possimus!
                        </p>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-pink-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold">Attention needed</h1>
                        <p class="text-justify text-gray-700 font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusamus quos iure architecto autem accusantium, laborum laboriosam maiores porro temporibus natus quae facilis tempore doloremque! Ea veritatis excepturi ab possimus!
                        </p>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-8 w-1/2">
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-gray-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold text-gray-700">There were 2 errors with your submission.</h1>
                        <ul class="list-inside list-disc px-2 mt-2 text-gray-600 ml-2">
                            <li>Your password must be at least 8 characters.</li>
                            <li>Your username must be at least 15 characters.</li>
                        </ul>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert red -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-red-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold text-red-700">There were 2 errors with your submission.</h1>
                        <ul class="list-inside list-disc px-2 mt-2 text-red-600 ml-2">
                            <li>Your password must be at least 8 characters.</li>
                            <li>Your username must be at least 15 characters.</li>
                        </ul>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert yellow -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-yellow-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold text-yellow-700">There were 2 errors with your submission.</h1>
                        <ul class="list-inside list-disc px-2 mt-2 text-yellow-600 ml-2">
                            <li>Your password must be at least 8 characters.</li>
                            <li>Your username must be at least 15 characters.</li>
                        </ul>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert green -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-green-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold text-green-700">There were 2 errors with your submission.</h1>
                        <ul class="list-inside list-disc px-2 mt-2 text-green-600 ml-2">
                            <li>Your password must be at least 8 characters.</li>
                            <li>Your username must be at least 15 characters.</li>
                        </ul>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert blue -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-blue-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold text-blue-700">There were 2 errors with your submission.</h1>
                        <ul class="list-inside list-disc px-2 mt-2 text-blue-600 ml-2">
                            <li>Your password must be at least 8 characters.</li>
                            <li>Your username must be at least 15 characters.</li>
                        </ul>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert indigo -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-indigo-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold text-indigo-700">There were 2 errors with your submission.</h1>
                        <ul class="list-inside list-disc px-2 mt-2 text-indigo-600 ml-2">
                            <li>Your password must be at least 8 characters.</li>
                            <li>Your username must be at least 15 characters.</li>
                        </ul>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert purple -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-purple-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold text-purple-700">There were 2 errors with your submission.</h1>
                        <ul class="list-inside list-disc px-2 mt-2 text-purple-600 ml-2">
                            <li>Your password must be at least 8 characters.</li>
                            <li>Your username must be at least 15 characters.</li>
                        </ul>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <!-- Alert pink -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-pink-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col mr-auto px-4">
                        <h1 class="font-bold text-pink-700">There were 2 errors with your submission.</h1>
                        <ul class="list-inside list-disc px-2 mt-2 text-pink-600 ml-2">
                            <li>Your password must be at least 8 characters.</li>
                            <li>Your username must be at least 15 characters.</li>
                        </ul>
                    </div>
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex lg:flex-row flex-col my-24">
            <div class="flex lg:flex-row flex-col space-y-8 w-1/2">
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-gray-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col px-4">
                        <h1 class="font-bold text-gray-700">Order completed.</h1>
                        <p class="text-sm text-gray-700 mt-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores placeat laudantium soluta voluptatibus, esse sint provident, quod consequatur ex sit, dolores veritatis? Iure, explicabo at debitis reprehenderit nulla aliquam.</p>
                        <div class="flex space-x-4 text-sm mt-4">
                            <a href="#" class="font-semibold hover:underline transition duration-300 hover:text-gray-700">View Status</a>
                            <a href="#" class="font-semibold hover:underline transition duration-300 hover:text-gray-700">Dismiss</a>
                        </div>
                    </div>
                </div>
                <!-- Alert red -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-red-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col px-4">
                        <h1 class="font-bold text-red-700">Order completed.</h1>
                        <p class="text-sm text-red-700 mt-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores placeat laudantium soluta voluptatibus, esse sint provident, quod consequatur ex sit, dolores veritatis? Iure, explicabo at debitis reprehenderit nulla aliquam.</p>
                        <div class="flex space-x-4 text-sm mt-4">
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-red-500 hover:text-red-700">View Status</a>
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-red-500 hover:text-red-700">Dismiss</a>
                        </div>
                    </div>
                </div>
                <!-- Alert yellow -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-yellow-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col px-4">
                        <h1 class="font-bold text-yellow-700">Order completed.</h1>
                        <p class="text-sm text-yellow-700 mt-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores placeat laudantium soluta voluptatibus, esse sint provident, quod consequatur ex sit, dolores veritatis? Iure, explicabo at debitis reprehenderit nulla aliquam.</p>
                        <div class="flex space-x-4 text-sm mt-4">
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-yellow-500 hover:text-yellow-700">View Status</a>
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-yellow-500 hover:text-yellow-700">Dismiss</a>
                        </div>
                    </div>
                </div>
                <!-- Alert green -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-green-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col px-4">
                        <h1 class="font-bold text-green-700">Order completed.</h1>
                        <p class="text-sm text-green-700 mt-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores placeat laudantium soluta voluptatibus, esse sint provident, quod consequatur ex sit, dolores veritatis? Iure, explicabo at debitis reprehenderit nulla aliquam.</p>
                        <div class="flex space-x-4 text-sm mt-4">
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-green-500 hover:text-green-700">View Status</a>
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-green-500 hover:text-green-700">Dismiss</a>
                        </div>
                    </div>
                </div>
                <!-- Alert blue -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-blue-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col px-4">
                        <h1 class="font-bold text-blue-700">Order completed.</h1>
                        <p class="text-sm text-blue-700 mt-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores placeat laudantium soluta voluptatibus, esse sint provident, quod consequatur ex sit, dolores veritatis? Iure, explicabo at debitis reprehenderit nulla aliquam.</p>
                        <div class="flex space-x-4 text-sm mt-4">
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-blue-500 hover:text-blue-700">View Status</a>
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-blue-500 hover:text-blue-700">Dismiss</a>
                        </div>
                    </div>
                </div>
                <!-- Alert indigo -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-indigo-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col px-4">
                        <h1 class="font-bold text-indigo-700">Order completed.</h1>
                        <p class="text-sm text-indigo-700 mt-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores placeat laudantium soluta voluptatibus, esse sint provident, quod consequatur ex sit, dolores veritatis? Iure, explicabo at debitis reprehenderit nulla aliquam.</p>
                        <div class="flex space-x-4 text-sm mt-4">
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-indigo-500 hover:text-indigo-700">View Status</a>
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-indigo-500 hover:text-indigo-700">Dismiss</a>
                        </div>
                    </div>
                </div>
                <!-- Alert purple -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-purple-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col px-4">
                        <h1 class="font-bold text-purple-700">Order completed.</h1>
                        <p class="text-sm text-purple-700 mt-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores placeat laudantium soluta voluptatibus, esse sint provident, quod consequatur ex sit, dolores veritatis? Iure, explicabo at debitis reprehenderit nulla aliquam.</p>
                        <div class="flex space-x-4 text-sm mt-4">
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-purple-500 hover:text-purple-700">View Status</a>
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-purple-500 hover:text-purple-700">Dismiss</a>
                        </div>
                    </div>
                </div>
                <!-- Alert pink -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-pink-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col px-4">
                        <h1 class="font-bold text-pink-700">Order completed.</h1>
                        <p class="text-sm text-pink-700 mt-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores placeat laudantium soluta voluptatibus, esse sint provident, quod consequatur ex sit, dolores veritatis? Iure, explicabo at debitis reprehenderit nulla aliquam.</p>
                        <div class="flex space-x-4 text-sm mt-4">
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-pink-500 hover:text-pink-700">View Status</a>
                            <a href="#" class="font-semibold hover:underline transition duration-300 text-pink-500 hover:text-pink-700">Dismiss</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-8 w-1/2">
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-gray-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto   " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-gray-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <a href="#" class="text-sm text-gray-500 my-auto px-2 hover:underline hover:text-gray-800 transition duration-300">Details</a>
                </div>
                <!-- Alert red -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-red-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-red-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <a href="#" class="text-sm text-red-500 my-auto px-2 hover:underline hover:text-red-800 transition duration-300">Details</a>
                </div>
                <!-- Alert yellow -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-yellow-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-yellow-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <a href="#" class="text-sm text-yellow-500 my-auto px-2 hover:underline hover:text-yellow-800 transition duration-300">Details</a>
                </div>
                <!-- Alert green -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-green-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-green-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <a href="#" class="text-sm text-green-500 my-auto px-2 hover:underline hover:text-green-800 transition duration-300">Details</a>
                </div>
                <!-- Alert blue -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-blue-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-blue-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <a href="#" class="text-sm text-blue-500 my-auto px-2 hover:underline hover:text-blue-800 transition duration-300">Details</a>
                </div>
                <!-- Alert indigo -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-indigo-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-indigo-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <a href="#" class="text-sm text-indigo-500 my-auto px-2 hover:underline hover:text-indigo-800 transition duration-300">Details</a>
                </div>
                <!-- Alert purple -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-purple-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-purple-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <a href="#" class="text-sm text-purple-500 my-auto px-2 hover:underline hover:text-purple-800 transition duration-300">Details</a>
                </div>
                <!-- Alert pink -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-pink-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-pink-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <a href="#" class="text-sm text-pink-500 my-auto px-2 hover:underline hover:text-pink-800 transition duration-300">Details</a>
                </div>

                <div class="w-full border"></div>
                <!-- Alert tick with dismiss -->
                <!-- Alert Gray -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-gray-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-gray-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert red -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-red-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-red-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert yellow -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-yellow-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-yellow-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert green -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-green-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-green-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert blue -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-blue-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-blue-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert indigo -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-indigo-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-indigo-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert purple -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-purple-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-purple-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert pink -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-pink-100 " style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-pink-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex lg:flex-row flex-col mb-24">
            <div class="flex lg:flex-row flex-col space-y-8 w-1/2">
                <div class="flex flex-row h-auto px-2 py-4 rounded bg-gray-100 border-l-8 border-gray-700" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-gray-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert red -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-red-100 border-l-8 border-red-700" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-red-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert yellow -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-yellow-100 border-l-8 border-yellow-700" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-yellow-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert green -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-green-100 border-l-8 border-green-700" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-green-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert blue -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-blue-100 border-l-8 border-blue-700" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-blue-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert indigo -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-indigo-100 border-l-8 border-indigo-700" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-indigo-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert purple -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-purple-100 border-l-8 border-purple-700" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-purple-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- Alert pink -->
                <div class="flex flex-row h-auto px-2 py-4 rounded  bg-pink-100 border-l-8 border-pink-700" style="width: 36rem;" @click="copyToClipboard($event.target.className)">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-sm text-pink-700 mt-1 ml-4 mr-auto">A new software update is available. See what's new in versiyon 2.0.4</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 my-auto hover:text-gray-800 transition duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name:'AlertExamples',
    methods:{
        ...mapMutations('notification',['pushNotification']),
        copyToClipboard(className){
            navigator.clipboard.writeText(className);
            this.pushNotification({ message:"Kopyalandı.",type:"success"})
        }
    }
}
</script>

<style>

</style>
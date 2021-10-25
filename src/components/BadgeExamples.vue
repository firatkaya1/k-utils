<template>
 <div class="container mx-auto mt-24 ">
        <div class="flex flex-col">
            <!-- Badge default-->
        <div class="text-2xl border-t-4 font-bold font-mono py-4 mt-4">Badges</div>
        <div class="flex flex-col">
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="font-bold text-lg my-4">Badge xs</div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-50 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-50 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-50 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-50 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-50 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-50 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-50 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-50 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-100 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-100 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-100 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-100 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-100 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-100 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-100 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-100 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-200 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-200 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-200 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-200 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-200 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-200 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-200 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-200 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-300 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-300 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-300 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-300 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-300 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-300 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-300 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-300 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-400 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-400 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-400 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-400 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-400 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-400 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-400 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-400 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-500 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-500 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-500 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-500 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-500 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-500 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-500 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-500 border rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-600 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-600 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-600 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-600 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-600 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-600 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-600 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-600 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-700 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-700 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-700 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-700 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-700 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-700 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-700 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-700 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-800 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-800 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-800 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-800 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-800 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-800 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-800 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-800 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-900 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-900 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-900 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-900 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-900 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-900 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-900 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-900 border text-white rounded-full px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="font-bold text-lg my-4">Badge sm</div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-50 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-100 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-200 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-300 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-400 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-500 border rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-600 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-700 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-800 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-900 border text-white rounded-full px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
        </div>
        <div class="flex flex-col">
                <div class="font-bold text-lg my-4">Badge base</div>
                <div class="flex flex-col">
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-50 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-50 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-50 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-50 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-50 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-50 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-50 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-50 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-100 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-100 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-100 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-100 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-100 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-100 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-100 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-100 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-200 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-200 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-200 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-200 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-200 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-200 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-200 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-200 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-300 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-300 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-300 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-300 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-300 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-300 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-300 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-300 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-400 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-400 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-400 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-400 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-400 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-400 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-400 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-400 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-500 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-500 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-500 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-500 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-500 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-500 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-500 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-500 border rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-600 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-600 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-600 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-600 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-600 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-600 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-600 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-600 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-700 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-700 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-700 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-700 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-700 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-700 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-700 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-700 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-800 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-800 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-800 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-800 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-800 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-800 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-800 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-800 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-900 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-900 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-900 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-900 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-900 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-900 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-900 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-900 border text-white rounded-full px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="font-bold text-lg my-4">Badge lg</div>
                <div class="flex flex-col">
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-50 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-50 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-50 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-50 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-50 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-50 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-50 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-50 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-100 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-100 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-100 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-100 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-100 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-100 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-100 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-100 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-200 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-200 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-200 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-200 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-200 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-200 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-200 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-200 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-300 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-300 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-300 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-300 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-300 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-300 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-300 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-300 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-400 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-400 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-400 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-400 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-400 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-400 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-400 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-400 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-500 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-500 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-500 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-500 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-500 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-500 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-500 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-500 border rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-600 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-600 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-600 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-600 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-600 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-600 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-600 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-600 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-700 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-700 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-700 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-700 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-700 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-700 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-700 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-700 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-800 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-800 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-800 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-800 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-800 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-800 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-800 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-800 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-900 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-900 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-900 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-900 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-900 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-900 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-900 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-900 border text-white rounded-full px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                </div>
            </div>
        <div class="text-2xl border-t-4 font-bold font-mono py-4 mt-4">Normal Badgeds</div>
        <div class="flex flex-col">
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4">
                <div class="w-auto bg-gray-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
            <div class="flex flex-row flex-nowrap space-x-4 my-4">
                <div class="w-auto bg-gray-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-red-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-yellow-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-green-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-blue-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-indigo-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-purple-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
                <div class="w-auto bg-pink-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                    Badge
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-col">
                <div class="font-bold text-lg my-4">Badge xs</div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-50 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-50 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-50 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-50 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-50 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-50 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-50 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-50 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-100 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-100 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-100 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-100 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-100 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-100 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-100 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-100 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-200 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-200 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-200 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-200 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-200 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-200 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-200 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-200 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-300 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-300 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-300 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-300 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-300 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-300 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-300 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-300 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-400 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-400 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-400 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-400 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-400 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-400 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-400 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-400 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-500 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-500 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-500 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-500 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-500 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-500 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-500 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-500 border rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-600 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-600 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-600 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-600 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-600 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-600 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-600 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-600 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-700 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-700 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-700 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-700 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-700 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-700 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-700 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-700 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-800 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-800 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-800 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-800 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-800 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-800 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-800 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-800 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-900 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-900 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-900 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-900 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-900 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-900 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-900 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-900 border text-white rounded-md px-2 py-0.5 text-xs font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="font-bold text-lg my-4">Badge sm</div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-50 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-100 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-200 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-300 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-400 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-500 border rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-600 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-700 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4">
                    <div class="w-auto bg-gray-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-800 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
                <div class="flex flex-row flex-nowrap space-x-4 my-4">
                    <div class="w-auto bg-gray-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-red-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-yellow-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-green-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-blue-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-indigo-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-purple-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                    <div class="w-auto bg-pink-900 border text-white rounded-md px-2 py-0.5 text-sm font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                        Badge
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-col">
                <div class="font-bold text-lg my-4">Badge base</div>
                <div class="flex flex-col">
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-50 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-50 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-50 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-50 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-50 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-50 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-50 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-50 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-100 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-100 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-100 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-100 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-100 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-100 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-100 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-100 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-200 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-200 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-200 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-200 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-200 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-200 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-200 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-200 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-300 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-300 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-300 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-300 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-300 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-300 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-300 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-300 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-400 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-400 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-400 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-400 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-400 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-400 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-400 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-400 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-500 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-500 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-500 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-500 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-500 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-500 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-500 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-500 border rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-600 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-600 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-600 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-600 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-600 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-600 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-600 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-600 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-700 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-700 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-700 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-700 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-700 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-700 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-700 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-700 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-800 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-800 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-800 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-800 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-800 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-800 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-800 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-800 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-900 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-900 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-900 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-900 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-900 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-900 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-900 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-900 border text-white rounded-md px-2 py-0.5 text-base font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="font-bold text-lg my-4">Badge lg</div>
                <div class="flex flex-col">
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-50 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-50 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-50 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-50 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-50 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-50 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-50 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-50 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-100 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-100 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-100 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-100 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-100 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-100 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-100 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-100 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-200 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-200 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-200 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-200 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-200 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-200 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-200 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-200 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-300 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-300 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-300 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-300 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-300 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-300 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-300 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-300 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-400 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-400 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-400 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-400 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-400 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-400 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-400 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-400 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-500 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-500 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-500 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-500 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-500 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-500 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-500 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-500 border rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-600 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-600 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-600 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-600 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-600 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-600 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-600 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-600 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-700 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-700 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-700 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-700 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-700 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-700 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-700 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-700 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4">
                        <div class="w-auto bg-gray-800 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-800 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-800 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-800 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-800 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-800 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-800 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-800 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                    <div class="flex flex-row flex-nowrap space-x-4 my-4">
                        <div class="w-auto bg-gray-900 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-red-900 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-yellow-900 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-green-900 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-blue-900 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-indigo-900 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-purple-900 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                        <div class="w-auto bg-pink-900 border text-white rounded-md px-2 py-0.5 text-lg font-mono inline-block text-center" @click="copyToClipboard($event.target.className)">
                            Badge
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name:'BadgeExamples',
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
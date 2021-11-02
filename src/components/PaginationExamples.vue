<template>
   <div class="container mx-auto mt-24 ">
        <div class="flex flex-col space-y-6">
            <!-- Active element : shadow text-blue-600 bg-gray-100-->
            <span class="font-bold text-lg">Border Previous-Next</span>
            <nav class="block">
                <ul class="flex justify-center">
                    <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                    <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                    <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                    <li class="px-4 py-2 border text-blue-600 text-blue-400 bg-gray-100 hover:bg-gray-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                    <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                    <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                    <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">Next</a></li>
                </ul>
            </nav>
            <nav class="block">
                <ul class="flex justify-center font-medium">
                    <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-blue-500 bg-white hover:text-blue-600 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">1</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white cursor-pointer hover:text-blue-500"><a href="#">2</a></li>
                    <li class="px-4 py-2 border border-blue-600 cursor-pointer text-blue-500"><a href="#">3</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">4</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">5</a></li>
                    <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-blue-500 bg-white hover:text-blue-600 transition duration-300 cursor-pointer"><a href="#">Next</a></li>
                </ul>
            </nav>
            <span class="font-bold text-lg">Border Up</span>
            <nav class="block">
                <ul class="flex justify-center">
                    <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                    <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                    <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                    <li class="px-4 py-2 border text-blue-600 text-blue-400 bg-gray-100 hover:bg-gray-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                    <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                    <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                    <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-blue-600 hover:text-blue-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                </ul>
            </nav>
            <nav class="block">
                <ul  class="flex justify-center font-medium">
                    <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-blue-500 bg-white hover:text-blue-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">1</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white cursor-pointer hover:text-blue-500"><a href="#">2</a></li>
                    <li class="px-4 py-2 border border-blue-600 cursor-pointer text-blue-500"><a href="#">3</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">4</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">5</a></li>
                    <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-blue-500 bg-white hover:text-blue-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                </ul>
            </nav>
            <span class="font-bold text-lg">Border With Colors</span>
            <div class="flex flex-wrap space-y-4 lg:space-x-4 justify-center lg:justify-start">
                <nav class="block mt-4 lg:ml-4">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-gray-500 bg-white hover:text-gray-600 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border hover:border-gray-500 bg-white hover:text-gray-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-gray-500 bg-white cursor-pointer hover:text-gray-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-gray-600 cursor-pointer text-gray-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-gray-500 bg-white hover:text-gray-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-gray-500 bg-white hover:text-gray-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-gray-500 bg-white hover:text-gray-600 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-red-500 bg-white hover:text-red-600 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border hover:border-red-500 bg-white hover:text-red-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-red-500 bg-white cursor-pointer hover:text-red-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-red-600 cursor-pointer text-red-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-red-500 bg-white hover:text-red-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-red-500 bg-white hover:text-red-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-red-500 bg-white hover:text-red-600 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-yellow-500 bg-white hover:text-yellow-600 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border hover:border-yellow-500 bg-white hover:text-yellow-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-yellow-500 bg-white cursor-pointer hover:text-yellow-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-yellow-600 cursor-pointer text-yellow-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-yellow-500 bg-white hover:text-yellow-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-yellow-500 bg-white hover:text-yellow-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-yellow-500 bg-white hover:text-yellow-600 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-green-500 bg-white hover:text-green-600 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border hover:border-green-500 bg-white hover:text-green-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-green-500 bg-white cursor-pointer hover:text-green-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-green-600 cursor-pointer text-green-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-green-500 bg-white hover:text-green-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-green-500 bg-white hover:text-green-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-green-500 bg-white hover:text-green-600 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-indigo-500 bg-white hover:text-indigo-600 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border hover:border-indigo-500 bg-white hover:text-indigo-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-indigo-500 bg-white cursor-pointer hover:text-indigo-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-indigo-600 cursor-pointer text-indigo-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-indigo-500 bg-white hover:text-indigo-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-indigo-500 bg-white hover:text-indigo-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-indigo-500 bg-white hover:text-indigo-600 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-purple-500 bg-white hover:text-purple-600 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border hover:border-purple-500 bg-white hover:text-purple-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-purple-500 bg-white cursor-pointer hover:text-purple-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-purple-600 cursor-pointer text-purple-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-purple-500 bg-white hover:text-purple-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-purple-500 bg-white hover:text-purple-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-purple-500 bg-white hover:text-purple-600 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-pink-500 bg-white hover:text-pink-600 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border hover:border-pink-500 bg-white hover:text-pink-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-pink-500 bg-white cursor-pointer hover:text-pink-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-pink-600 cursor-pointer text-pink-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-pink-500 bg-white hover:text-pink-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-pink-500 bg-white hover:text-pink-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-pink-500 bg-white hover:text-pink-600 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
            </div>
            <div class="flex flex-wrap space-y-4 lg:space-x-4 justify-center lg:justify-start">
                <nav class="block mt-4 lg:ml-4">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-gray-600 text-gray-400 bg-gray-100 hover:bg-gray-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-red-600 text-red-400 bg-red-100 hover:bg-red-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-yellow-600 text-yellow-400 bg-yellow-100 hover:bg-yellow-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">Next</a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-blue-600 text-blue-400 bg-blue-100 hover:bg-blue-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">Next</a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-indigo-600 text-indigo-400 bg-indigo-100 hover:bg-indigo-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-purple-600 text-purple-400 bg-purple-100 hover:bg-purple-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">Next </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">Previous</a></li>
                        <li class="px-4 py-2 border text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-pink-600 text-pink-400 bg-pink-100 hover:bg-pink-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
            <div class="flex flex-wrap space-y-4 lg:space-x-4 justify-center lg:justify-start">
                <nav class="block mt-4 lg:ml-4">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-gray-500 bg-white hover:text-gray-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border hover:border-gray-500 bg-white hover:text-gray-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-gray-500 bg-white cursor-pointer hover:text-gray-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-gray-600 cursor-pointer text-gray-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-gray-500 bg-white hover:text-gray-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-gray-500 bg-white hover:text-gray-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-gray-500 bg-white hover:text-gray-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-red-500 bg-white hover:text-red-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border hover:border-red-500 bg-white hover:text-red-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-red-500 bg-white cursor-pointer hover:text-red-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-red-600 cursor-pointer text-red-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-red-500 bg-white hover:text-red-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-red-500 bg-white hover:text-red-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-red-500 bg-white hover:text-red-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-yellow-500 bg-white hover:text-yellow-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border hover:border-yellow-500 bg-white hover:text-yellow-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-yellow-500 bg-white cursor-pointer hover:text-yellow-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-yellow-600 cursor-pointer text-yellow-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-yellow-500 bg-white hover:text-yellow-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-yellow-500 bg-white hover:text-yellow-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-yellow-500 bg-white hover:text-yellow-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-green-500 bg-white hover:text-green-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border hover:border-green-500 bg-white hover:text-green-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-green-500 bg-white cursor-pointer hover:text-green-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-green-600 cursor-pointer text-green-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-green-500 bg-white hover:text-green-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-green-500 bg-white hover:text-green-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-green-500 bg-white hover:text-green-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-indigo-500 bg-white hover:text-indigo-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border hover:border-indigo-500 bg-white hover:text-indigo-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-indigo-500 bg-white cursor-pointer hover:text-indigo-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-indigo-600 cursor-pointer text-indigo-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-indigo-500 bg-white hover:text-indigo-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-indigo-500 bg-white hover:text-indigo-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-indigo-500 bg-white hover:text-indigo-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-purple-500 bg-white hover:text-purple-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border hover:border-purple-500 bg-white hover:text-purple-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-purple-500 bg-white cursor-pointer hover:text-purple-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-purple-600 cursor-pointer text-purple-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-purple-500 bg-white hover:text-purple-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-purple-500 bg-white hover:text-purple-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-purple-500 bg-white hover:text-purple-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex font-medium">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-pink-500 bg-white hover:text-pink-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border hover:border-pink-500 bg-white hover:text-pink-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border hover:border-pink-500 bg-white cursor-pointer hover:text-pink-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border border-pink-600 cursor-pointer text-pink-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border hover:border-pink-500 bg-white hover:text-pink-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border hover:border-pink-500 bg-white hover:text-pink-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-pink-500 bg-white hover:text-pink-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
            </div>
            <div class="flex flex-wrap space-y-4 lg:space-x-4 justify-center lg:justify-start">
                <nav class="block mt-4 lg:ml-4">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-gray-600 text-gray-400 bg-gray-100 hover:bg-gray-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-gray-600 hover:text-gray-400 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-red-600 text-red-400 bg-red-100 hover:bg-red-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-red-600 hover:text-red-400 bg-white hover:bg-red-100 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-yellow-600 text-yellow-400 bg-yellow-100 hover:bg-yellow-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-yellow-600 hover:text-yellow-400 bg-white hover:bg-yellow-100 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-blue-600 text-blue-400 bg-blue-100 hover:bg-blue-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-blue-600 hover:text-blue-400 bg-white hover:bg-blue-100 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-indigo-600 text-indigo-400 bg-indigo-100 hover:bg-indigo-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-indigo-600 hover:text-indigo-400 bg-white hover:bg-indigo-100 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-purple-600 text-purple-400 bg-purple-100 hover:bg-purple-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-purple-600 hover:text-purple-400 bg-white hover:bg-purple-100 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <ul class="flex justify-center">
                        <li class="px-4 py-2 border rounded-bl-md rounded-tl-md text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">2</a></li>
                        <li class="px-4 py-2 border text-pink-600 text-pink-400 bg-pink-100 hover:bg-pink-100 transition duration-300 cursor-pointer shadow"><a href="#">3</a></li>
                        <li class="px-4 py-2 border text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border rounded-br-md rounded-tr-md text-pink-600 hover:text-pink-400 bg-white hover:bg-pink-100 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
            </div>
            <span class="font-bold text-lg">Border Start & End</span>
            <nav class="inline-block ">
                <ul class="flex justify-start font-medium">
                    <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-blue-500 bg-white hover:text-blue-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">1</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white cursor-pointer hover:text-blue-500"><a href="#">2</a></li>
                    <li class="px-4 py-2 border border-blue-600 cursor-pointer text-blue-500"><a href="#">3</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">4</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">5</a></li>
                    <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-blue-500 bg-white hover:text-blue-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                </ul>
            </nav>
            <nav class="inline-block">
                <ul class="flex justify-end font-medium">
                    <li class="px-4 py-2 border rounded-bl-md rounded-tl-md hover:border-blue-500 bg-white hover:text-blue-600 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">1</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white cursor-pointer hover:text-blue-500"><a href="#">2</a></li>
                    <li class="px-4 py-2 border border-blue-600 cursor-pointer text-blue-500"><a href="#">3</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">4</a></li>
                    <li class="px-4 py-2 border hover:border-blue-500 bg-white hover:text-blue-500 cursor-pointer"><a href="#">5</a></li>
                    <li class="px-4 py-2 border rounded-br-md rounded-tr-md hover:border-blue-500 bg-white hover:text-blue-600 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                </ul>
            </nav>
            <span class="font-bold text-lg">Border Up</span>
            <nav class="block">
                <div class="w-full border-b-2 relative"></div>
                <ul class="flex justify-center font-normal space-x-2 ">
                    <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                    <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 cursor-pointer"><a href="#">1</a></li>
                    <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white cursor-pointer hover:text-blue-500 text-gray-500"><a href="#">2</a></li>
                    <li class="px-4 py-2 border-t-2 border-white border-blue-600 cursor-pointer text-blue-500"><a href="#">3</a></li>
                    <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 cursor-pointer"><a href="#">4</a></li>
                    <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 cursor-pointer"><a href="#">5</a></li>
                    <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                </ul>
            </nav>
            <nav class="block">
                <div class="w-full border-b-2 relative"></div>
                <ul class="flex justify-center font-normal space-x-2 ">
                    <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                    <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 cursor-pointer"><a href="#">1</a></li>
                    <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white cursor-pointer hover:text-blue-500 text-gray-500"><a href="#">2</a></li>
                    <li class="px-4 py-2 border-t-4 border-white border-blue-600 cursor-pointer text-blue-500"><a href="#">3</a></li>
                    <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 cursor-pointer"><a href="#">4</a></li>
                    <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 cursor-pointer"><a href="#">5</a></li>
                    <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-gray-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                </ul>
            </nav>
            <span class="font-bold text-lg">Border Up With Colors</span>
            <div class="flex flex-col space-y-12">
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-2 border-white hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-gray-500 hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-gray-500 bg-white cursor-pointer hover:text-gray-500 text-gray-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-2 border-white border-gray-600 cursor-pointer text-gray-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-2 border-white hover:border-red-500 bg-white hover:text-red-500 text-red-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-red-500 hover:border-red-500 bg-white hover:text-red-500 text-red-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-red-500 bg-white cursor-pointer hover:text-red-500 text-red-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-2 border-white border-red-600 cursor-pointer text-red-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-red-500 bg-white hover:text-red-500 text-red-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-red-500 bg-white hover:text-red-500 text-red-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-red-500 bg-white hover:text-red-500 text-red-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-2 border-white hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-yellow-500 hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-yellow-500 bg-white cursor-pointer hover:text-yellow-500 text-yellow-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-2 border-white border-yellow-600 cursor-pointer text-yellow-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-2 border-white hover:border-green-500 bg-white hover:text-green-500 text-green-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-green-500 hover:border-green-500 bg-white hover:text-green-500 text-green-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-green-500 bg-white cursor-pointer hover:text-green-500 text-green-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-2 border-white border-green-600 cursor-pointer text-green-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-green-500 bg-white hover:text-green-500 text-green-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-green-500 bg-white hover:text-green-500 text-green-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-green-500 bg-white hover:text-green-500 text-green-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white cursor-pointer hover:text-blue-500 text-blue-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-2 border-white border-blue-600 cursor-pointer text-blue-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-2 border-white hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-indigo-500 hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-indigo-500 bg-white cursor-pointer hover:text-indigo-500 text-indigo-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-2 border-white border-indigo-600 cursor-pointer text-indigo-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-2 border-white hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-purple-500 hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-purple-500 bg-white cursor-pointer hover:text-purple-500 text-purple-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-2 border-white border-purple-600 cursor-pointer text-purple-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-2 border-white hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-pink-500 hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-pink-500 bg-white cursor-pointer hover:text-pink-500 text-pink-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-2 border-white border-pink-600 cursor-pointer text-pink-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-2 border-white hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
            </div>
            <div class="flex flex-col space-y-12 mt-12">
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-4 border-white hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-gray-500 hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-gray-500 bg-white cursor-pointer hover:text-gray-500 text-gray-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-4 border-white border-gray-600 cursor-pointer text-gray-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-gray-500 bg-white hover:text-gray-500 text-gray-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-4 border-white hover:border-red-500 bg-white hover:text-red-500 text-red-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-red-500 hover:border-red-500 bg-white hover:text-red-500 text-red-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-red-500 bg-white cursor-pointer hover:text-red-500 text-red-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-4 border-white border-red-600 cursor-pointer text-red-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-red-500 bg-white hover:text-red-500 text-red-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-red-500 bg-white hover:text-red-500 text-red-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-red-500 bg-white hover:text-red-500 text-red-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-4 border-white hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-yellow-500 hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-yellow-500 bg-white cursor-pointer hover:text-yellow-500 text-yellow-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-4 border-white border-yellow-600 cursor-pointer text-yellow-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-yellow-500 bg-white hover:text-yellow-500 text-yellow-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-4 border-white hover:border-green-500 bg-white hover:text-green-500 text-green-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-green-500 hover:border-green-500 bg-white hover:text-green-500 text-green-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-green-500 bg-white cursor-pointer hover:text-green-500 text-green-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-4 border-white border-green-600 cursor-pointer text-green-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-green-500 bg-white hover:text-green-500 text-green-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-green-500 bg-white hover:text-green-500 text-green-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-green-500 bg-white hover:text-green-500 text-green-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white cursor-pointer hover:text-blue-500 text-blue-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-4 border-white border-blue-600 cursor-pointer text-blue-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-blue-500 bg-white hover:text-blue-500 text-blue-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-4 border-white hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-indigo-500 hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-indigo-500 bg-white cursor-pointer hover:text-indigo-500 text-indigo-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-4 border-white border-indigo-600 cursor-pointer text-indigo-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-indigo-500 bg-white hover:text-indigo-500 text-indigo-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-4 border-white hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-purple-500 hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-purple-500 bg-white cursor-pointer hover:text-purple-500 text-purple-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-4 border-white border-purple-600 cursor-pointer text-purple-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-purple-500 bg-white hover:text-purple-500 text-purple-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
                <nav class="block">
                    <div class="w-full border-b-2 relative"></div>
                    <ul class="flex justify-center font-normal space-x-2 ">
                        <li class="px-4 py-2 border-t-4 border-white hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 transition duration-300 cursor-pointer"><a href="#">«</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-pink-500 hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 cursor-pointer"><a href="#">1</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-pink-500 bg-white cursor-pointer hover:text-pink-500 text-pink-500"><a href="#">2</a></li>
                        <li class="px-4 py-2 border-t-4 border-white border-pink-600 cursor-pointer text-pink-500"><a href="#">3</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 cursor-pointer"><a href="#">4</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 cursor-pointer"><a href="#">5</a></li>
                        <li class="px-4 py-2 border-t-4 border-white hover:border-pink-500 bg-white hover:text-pink-500 text-pink-500 transition duration-300 cursor-pointer"><a href="#">» </a></li>
                    </ul>
                </nav>
            </div>
            <div class="h-96 w-full"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'PaginationExamples'
}
</script>

<style>

</style>
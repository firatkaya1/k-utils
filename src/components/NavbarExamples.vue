<template>
  <div>
      <div class="container mx-auto mt-8 flex flex-col space-y-12 mb-48">
        <!-- Bootstrap tabanlı fakat TailwindCSS kullanılarak oluşturulan örnekler -->
        <nav class="flex lg:flex-row flex-col w-full bg-gray-100 px-6 py-3 lg:rounded border" @click="copyToClipboard($event)">
            <div class="flex flex-row justify-between w-full">

                <a class="flex text-lg font-bold my-auto" href="#">
                    <img src="@/assets/K.png" class="w-8 h-8" alt="">
                    <span class="whitespace-nowrap lg:hidden block ml-4 my-auto lg:hidden"> Title Of Company </span>
                </a>

                <!-- Butonumuz. 2 adet ikon bulunuyor. Üsteki ikon hamburger menuyu alttaki icon ise X işaretini temsil ediyor. v-if,ng-if gibi seçeneklerle bunu kontrol edebilirsiniz.  -->
                <button class="border lg:hidden" v-on:click="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>     
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>       
                <div class="lg:flex lg:flex-row flex-grow w-full lg:justify-between hidden" id="desktop-menu">
                    <ul class="lg:flex uppercase lg:space-x-4 lg:ml-8 transition  duration-300">
                        <li class="my-auto hover:text-blue-500">
                            <a aria-current="page" href="#">Home</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">Contact</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">About Us</a>
                        </li>
                    </ul>

                    <!-- Desktop görünümlerde arama alanı -->
                    <form class="flex space-x-3">
                        <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                        <button class="px-3 py-1.5 border border-green-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded text-green-500 hover:text-white focus:outline-none hover:bg-green-600 transition duration-300 shadow focus:ring-4 focus:ring-green-200 inline-block">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <!-- Sadece mobil ekranlarda gözükür. v-if, ng-if gibi seçeneklerle açık kapalı durumuna getirerek canlılık katabilirsiniz.  -->
            <div class="flex flex-col w-full mt-4 lg:hidden" name="navbar-anim" v-if="showNavbar" id="mobile-menu">
                <ul class="flex flex-col uppercase space-y-2">
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200">
                        <a aria-current="page" href="#">Home</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200">
                        <a href="#">About Us</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <!-- Mobil görünümlerde arama alanı -->
                <form class="flex space-x-3 mt-6 justify-center">
                    <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                    <button class="px-3 py-1.5 border border-green-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded text-green-500 hover:text-white focus:outline-none hover:bg-green-600 transition duration-300 shadow focus:ring-4 focus:ring-green-200 inline-block">
                        Search
                    </button>
                </form>
            </div>
        </nav>

        <nav class="flex lg:flex-row flex-col w-full bg-black px-6 py-3 lg:rounded border" @click="copyToClipboard($event)">
            <div class="flex flex-row justify-between w-full">

                <a class="flex text-lg font-bold my-auto" href="#">
                    <img src="@/assets/K-C.png" class="w-8 h-8" alt="">
                    <span class="whitespace-nowrap lg:hidden block ml-4 my-auto lg:hidden text-white"> Title Of Company </span>
                </a>

                <!-- Butonumuz. 2 adet ikon bulunuyor. Üsteki ikon hamburger menuyu alttaki icon ise X işaretini temsil ediyor. v-if,ng-if gibi seçeneklerle bunu kontrol edebilirsiniz.  -->
                <button class="border text-white lg:hidden" v-on:click="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>     
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>       
                <div class="lg:flex lg:flex-row flex-grow w-full lg:justify-between hidden" id="desktop-menu">
                    <ul class="lg:flex mr-auto uppercase lg:space-x-4 lg:ml-8 text-white">
                        <li class="my-auto hover:text-blue-500">
                            <a aria-current="page" href="#">Home</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">Contact</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">About Us</a>
                        </li>
                    </ul>

                    <!-- Desktop görünümlerde arama alanı -->
                    <form class="flex space-x-3">
                        <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                        <button class="px-4 py-2 bg-green-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none hover:bg-green-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <!-- Sadece mobil ekranlarda gözükür. v-if, ng-if gibi seçeneklerle açık kapalı durumuna getirerek canlılık katabilirsiniz.  -->
            <div class="flex flex-col w-full mt-4 lg:hidden" name="navbar-anim" v-if="showNavbar" id="mobile-menu">
                <ul class="flex flex-col uppercase space-y-2 text-white">
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a aria-current="page" href="#">Home</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">About Us</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <!-- Mobil görünümlerde arama alanı -->
                <form class="flex space-x-3 mt-6 justify-center">
                    <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                    <button class="px-4 py-2 bg-green-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded  text-white focus:outline-none hover:bg-green-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Search
                    </button>
                </form>
            </div>
        </nav>

        <nav class="flex lg:flex-row flex-col w-full bg-red-300 px-6 py-3 lg:rounded border" @click="copyToClipboard($event)">
            <div class="flex flex-row justify-between w-full">

                <a class="flex text-lg font-bold my-auto" href="#">
                    <img src="@/assets/K-C.png" class="w-8 h-8" alt="">
                    <span class="whitespace-nowrap lg:hidden block ml-4 my-auto lg:hidden text-white"> Title Of Company </span>
                </a>

                <!-- Butonumuz. 2 adet ikon bulunuyor. Üsteki ikon hamburger menuyu alttaki icon ise X işaretini temsil ediyor. v-if,ng-if gibi seçeneklerle bunu kontrol edebilirsiniz.  -->
                <button class="border text-white lg:hidden" v-on:click="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>     
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>       
                <div class="lg:flex lg:flex-row flex-grow w-full lg:justify-between hidden" id="desktop-menu">
                    <ul class="lg:flex mr-auto uppercase lg:space-x-4 lg:ml-8 text-white">
                        <li class="my-auto hover:text-blue-500">
                            <a aria-current="page" href="#">Home</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">Contact</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">About Us</a>
                        </li>
                    </ul>

                    <!-- Desktop görünümlerde arama alanı -->
                    <form class="flex space-x-3">
                        <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                        <button class="px-4 py-2 bg-red-600 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none hover:bg-red-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-red-200 inline-block">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <!-- Sadece mobil ekranlarda gözükür. v-if, ng-if gibi seçeneklerle açık kapalı durumuna getirerek canlılık katabilirsiniz.  -->
            <div class="flex flex-col w-full mt-4 lg:hidden" name="navbar-anim" v-if="showNavbar" id="mobile-menu">
                <ul class="flex flex-col uppercase space-y-2 text-white">
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a aria-current="page" href="#">Home</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">About Us</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <!-- Mobil görünümlerde arama alanı -->
                <form class="flex space-x-3 mt-6 justify-center">
                    <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                    <button class="px-4 py-2 bg-green-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded  text-white focus:outline-none hover:bg-green-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Search
                    </button>
                </form>
            </div>
        </nav>

        <nav class="flex lg:flex-row flex-col w-full bg-green-300 px-6 py-3 lg:rounded border" @click="copyToClipboard($event)">
            <div class="flex flex-row justify-between w-full">

                <a class="flex text-lg font-bold my-auto" href="#">
                    <img src="@/assets/K-C.png" class="w-8 h-8" alt="">
                    <span class="whitespace-nowrap lg:hidden block ml-4 my-auto lg:hidden text-white"> Title Of Company </span>
                </a>

                <!-- Butonumuz. 2 adet ikon bulunuyor. Üsteki ikon hamburger menuyu alttaki icon ise X işaretini temsil ediyor. v-if,ng-if gibi seçeneklerle bunu kontrol edebilirsiniz.  -->
                <button class="border text-white lg:hidden" v-on:click="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>     
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>       
                <div class="lg:flex lg:flex-row flex-grow w-full lg:justify-between hidden" id="desktop-menu">
                    <ul class="lg:flex mr-auto uppercase lg:space-x-4 lg:ml-8 text-white">
                        <li class="my-auto hover:text-blue-500">
                            <a aria-current="page" href="#">Home</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">Contact</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">About Us</a>
                        </li>
                    </ul>

                    <!-- Desktop görünümlerde arama alanı -->
                    <form class="flex space-x-3">
                        <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                        <button class="px-4 py-2 bg-green-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded text-white focus:outline-none hover:bg-green-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <!-- Sadece mobil ekranlarda gözükür. v-if, ng-if gibi seçeneklerle açık kapalı durumuna getirerek canlılık katabilirsiniz.  -->
            <div class="flex flex-col w-full mt-4 lg:hidden" name="navbar-anim" v-if="showNavbar" id="mobile-menu">
                <ul class="flex flex-col uppercase space-y-2 text-white">
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a aria-current="page" href="#">Home</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">About Us</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <!-- Mobil görünümlerde arama alanı -->
                <form class="flex space-x-3 mt-6 justify-center">
                    <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                    <button class="px-4 py-2 bg-green-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded  text-white focus:outline-none hover:bg-green-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-green-200 inline-block">
                        Search
                    </button>
                </form>
            </div>
        </nav>

        <nav class="flex lg:flex-row flex-col w-full bg-blue-300 px-6 py-3 lg:rounded border" @click="copyToClipboard($event)">
            <div class="flex flex-row justify-between w-full">

                <a class="flex text-lg font-bold my-auto" href="#">
                    <img src="@/assets/K-C.png" class="w-8 h-8" alt="">
                    <span class="whitespace-nowrap lg:hidden block ml-4 my-auto lg:hidden text-white"> Title Of Company </span>
                </a>

                <!-- Butonumuz. 2 adet ikon bulunuyor. Üsteki ikon hamburger menuyu alttaki icon ise X işaretini temsil ediyor. v-if,ng-if gibi seçeneklerle bunu kontrol edebilirsiniz.  -->
                <button class="border text-white lg:hidden" v-on:click="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>     
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>       
                <div class="lg:flex lg:flex-row flex-grow w-full lg:justify-between hidden" id="desktop-menu">
                    <ul class="lg:flex mr-auto uppercase lg:space-x-4 lg:ml-8 text-white">
                        <li class="my-auto hover:text-blue-500">
                            <a aria-current="page" href="#">Home</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">Contact</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">About Us</a>
                        </li>
                    </ul>

                    <!-- Desktop görünümlerde arama alanı -->
                    <form class="flex space-x-3">
                        <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                        <button class="px-4 py-2 bg-blue-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <!-- Sadece mobil ekranlarda gözükür. v-if, ng-if gibi seçeneklerle açık kapalı durumuna getirerek canlılık katabilirsiniz.  -->
            <div class="flex flex-col w-full mt-4 lg:hidden" name="navbar-anim" v-if="showNavbar" id="mobile-menu">
                <ul class="flex flex-col uppercase space-y-2 text-white">
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a aria-current="page" href="#">Home</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">About Us</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <!-- Mobil görünümlerde arama alanı -->
                <form class="flex space-x-3 mt-6 justify-center">
                    <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                    <button class="px-4 py-2 bg-blue-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded-md  text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        Search
                    </button>
                </form>
            </div>
        </nav>

        <nav class="flex lg:flex-row flex-col w-full bg-indigo-300 px-6 py-3 lg:rounded border" @click="copyToClipboard($event)">
            <div class="flex flex-row justify-between w-full">

                <a class="flex text-lg font-bold my-auto" href="#">
                    <img src="@/assets/K-C.png" class="w-8 h-8" alt="">
                    <span class="whitespace-nowrap lg:hidden block ml-4 my-auto lg:hidden text-white"> Title Of Company </span>
                </a>

                <!-- Butonumuz. 2 adet ikon bulunuyor. Üsteki ikon hamburger menuyu alttaki icon ise X işaretini temsil ediyor. v-if,ng-if gibi seçeneklerle bunu kontrol edebilirsiniz.  -->
                <button class="border text-white lg:hidden" v-on:click="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>     
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>       
                <div class="lg:flex lg:flex-row flex-grow w-full lg:justify-between hidden" id="desktop-menu">
                    <ul class="lg:flex mr-auto uppercase lg:space-x-4 lg:ml-8 text-white">
                        <li class="my-auto hover:text-blue-500">
                            <a aria-current="page" href="#">Home</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">Contact</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">About Us</a>
                        </li>
                    </ul>

                    <!-- Desktop görünümlerde arama alanı -->
                    <form class="flex space-x-3">
                        <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                        <button class="px-4 py-2 bg-indigo-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded text-white focus:outline-none hover:bg-indigo-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-400 inline-block">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <!-- Sadece mobil ekranlarda gözükür. v-if, ng-if gibi seçeneklerle açık kapalı durumuna getirerek canlılık katabilirsiniz.  -->
            <div class="flex flex-col w-full mt-4 lg:hidden" name="navbar-anim" v-if="showNavbar" id="mobile-menu">
                <ul class="flex flex-col uppercase space-y-2 text-white">
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a aria-current="page" href="#">Home</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">About Us</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <!-- Mobil görünümlerde arama alanı -->
                <form class="flex space-x-3 mt-6 justify-center">
                    <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                    <button class="px-4 py-2 bg-indigo-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded  text-white focus:outline-none hover:bg-indigo-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-400 inline-block">
                        Search
                    </button>
                </form>
            </div>
        </nav>

        <nav class="flex lg:flex-row flex-col w-full bg-gray-800 px-6 py-3 lg:rounded border" @click="copyToClipboard($event)">
            <div class="flex flex-row justify-between w-full">

                <a class="flex text-lg font-bold my-auto" href="#">
                    <img src="@/assets/K-C.png" class="w-8 h-8" alt="">
                    <span class="whitespace-nowrap lg:hidden block ml-4 my-auto lg:hidden text-white"> Title Of Company </span>
                </a>

                <!-- Butonumuz. 2 adet ikon bulunuyor. Üsteki ikon hamburger menuyu alttaki icon ise X işaretini temsil ediyor. v-if,ng-if gibi seçeneklerle bunu kontrol edebilirsiniz.  -->
                <button class="border text-white lg:hidden" v-on:click="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>     
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>       
                <div class="lg:flex lg:flex-row flex-grow w-full lg:justify-between hidden" id="desktop-menu">
                    <ul class="lg:flex mr-auto uppercase lg:space-x-4 lg:ml-8 text-white">
                        <li class="my-auto hover:text-blue-500">
                            <a aria-current="page" href="#">Home</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">Contact</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">About Us</a>
                        </li>
                    </ul>

                    <!-- Desktop görünümlerde arama alanı -->
                    <form class="flex space-x-3">
                        <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                        <button class="px-4 py-2 bg-gray-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded text-white focus:outline-none hover:bg-gray-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-400 inline-block">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <!-- Sadece mobil ekranlarda gözükür. v-if, ng-if gibi seçeneklerle açık kapalı durumuna getirerek canlılık katabilirsiniz.  -->
            <div class="flex flex-col w-full mt-4 lg:hidden" name="navbar-anim" v-if="showNavbar" id="mobile-menu">
                <ul class="flex flex-col uppercase space-y-2 text-white">
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a aria-current="page" href="#">Home</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">About Us</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200 hover:text-black">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <!-- Mobil görünümlerde arama alanı -->
                <form class="flex space-x-3 mt-6 justify-center">
                    <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                    <button class="px-4 py-2 bg-gray-500 text-base  no-underline select-none text-center leading-6 font-normal align-middle rounded  text-white focus:outline-none hover:bg-gray-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-indigo-400 inline-block">
                        Search
                    </button>
                </form>
            </div>
        </nav>

        <nav class="flex lg:flex-row flex-col w-full bg-gray-100 px-6 py-3 lg:rounded border" @click="copyToClipboard($event)"  >
            <div class="flex flex-row justify-between w-full">

                <a class="flex text-lg font-bold my-auto" href="#">
                    <img src="@/assets/K.png" class="w-8 h-8" alt="">
                    <span class="whitespace-nowrap lg:hidden block ml-4 my-auto lg:hidden"> Title Of Company </span>
                </a>

                <!-- Butonumuz. 2 adet ikon bulunuyor. Üsteki ikon hamburger menuyu alttaki icon ise X işaretini temsil ediyor. v-if,ng-if gibi seçeneklerle bunu kontrol edebilirsiniz.  -->
                <button class="border lg:hidden" v-on:click="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>     
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="showNavbar">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>       
                <div class="lg:flex lg:flex-row flex-grow w-full lg:justify-between hidden" id="desktop-menu">
                    <ul class="lg:flex uppercase lg:space-x-4 lg:ml-8 transition  duration-300">
                        <li class="my-auto hover:text-blue-500">
                            <a aria-current="page" href="#">Home</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">Contact</a>
                        </li>
                        <li class="my-auto hover:text-blue-500">
                            <a href="#">About Us</a>
                        </li>
                    </ul>

                    <!-- Desktop görünümlerde arama alanı -->
                    <div class="flex flex-row space-x-4">
                        <button class="px-1 py-0.5 border border-blue-500  text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-blue-500 hover:text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button class="px-1 py-0.5 bg-white border border-gray-500 text-xs no-underline select-none text-center leading-6	font-normal	align-middle rounded text-gray-600 hover:text-white focus:outline-none hover:bg-gray-500 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Sadece mobil ekranlarda gözükür. v-if, ng-if gibi seçeneklerle açık kapalı durumuna getirerek canlılık katabilirsiniz.  -->
            <div class="flex flex-col w-full mt-4 lg:hidden" name="navbar-anim" v-if="showNavbar" id="mobile-menu">
                <ul class="flex flex-col uppercase space-y-2">
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200">
                        <a aria-current="page" href="#">Home</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200">
                        <a href="#">About Us</a>
                    </li>
                    <li class="p-2 rounded my-auto font-sans hover:bg-gray-200">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <!-- Mobil görünümlerde arama alanı -->
                <form class="flex space-x-3 mt-6 justify-center">
                    <button class="flex justify-center w-1/2 px-3 py-1.5 bg-white border border-blue-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded-md text-blue-500 hover:text-white focus:outline-none hover:bg-blue-700 transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-200 inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-2"> Settings </span>
                    </button>
                    <button class="flex justify-center px-3 py-1.5 bg-white border border-gray-500 w-1/2 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded text-gray-600 hover:text-white focus:outline-none hover:bg-gray-500 transition duration-300 shadow-lg focus:ring-4 focus:ring-gray-400 inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span class="ml-2"> Notification </span>
                    </button>
                </form>
            </div>
        </nav>
        

      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:'Navbar',
    data(){
        return {
            showNavbar:false
        }
    },
    methods:{
        ...mapMutations('config',['setDetail']),
        copyToClipboard(event){
            this.setDetail(event.currentTarget.outerHTML)
        },
        openMenu(){
            this.showNavbar = !this.showNavbar
        }

    }
}
</script>

<style lang="postcss" scoped>


@media only screen and (max-width: 600px) {
  .navbar-menu {
        display: none;
    }
    #toggle1:checked ~ .navbar-menu {
        display: flex;
    }
}
</style>
<template>
  <div>
      <div class="container mx-auto mt-8">
        <nav class="flex flex-row w-full bg-gray-100 px-6 py-3 rounded border mt-24">
            <div class="flex flex-row justify-between w-full">
                <a class="flex text-lg font-bold my-auto" href="#">
                    <span class="whitespace-nowrap lg:hidden block ml-4 my-auto lg:hidden"> Title Of Company </span>
                </a>
                <input type="checkbox" id="toggle1" class="hidden">
                <label for="toggle1" class="lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 focus:text-blue-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>     
                </label>         
                <div class="lg:flex flex-col flex-grow w-full navbar-menu lg:justify-between">
                    <ul class="lg:flex mr-auto uppercase lg:space-x-4 lg:ml-8">
                        <li class="my-auto">
                            <a aria-current="page" href="#">Home</a>
                        </li>
                        <li class="my-auto">
                            <a href="#">Link</a>
                        </li>
                        <li class="my-auto">
                            <a href="#">Link</a>
                        </li>
                        <li class="my-auto">
                            <a href="#">Link</a>
                        </li>
                    </ul>
                    <form class="flex space-x-3">
                        <input type="text" placeholder="Search" class=" focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                        <button class="px-3 py-1.5 border border-green-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded text-green-500 hover:text-white focus:outline-none hover:bg-green-600 transition duration-300 shadow focus:ring-4 focus:ring-green-200 inline-block">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@media only screen and (max-width: 600px) {
  .navbar-menu {
        display: none;
    }
    #toggle1:checked ~ .navbar-menu {
        display: flex;
    }
}
</style>
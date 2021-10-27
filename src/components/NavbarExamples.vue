<template>
  <div>
      <div class="container mx-auto mt-8">
        <div class="flex flex-row w-full bg-gray-100 px-6 py-3 justify-between rounded border">
            <a href="#" class="flex flex-row space-x-4"> <img src="@/assets/K.png" class="w-8 h-8" alt="">
                <span class="font-bold uppercase my-auto text-lg"> TITLE</span>
            </a>
            <div class="lg:flex flex-row space-x-8 my-auto h-1/2 text-gray-800 uppercase hidden">
                <a href="#" class="hover:text-blue-600 self-center"> Home </a>
                <a href="#" class="hover:text-blue-600 self-center"> About Us </a>
                <a href="#" class="hover:text-blue-600 self-center"> Contact </a>
                <a href="#" class="hover:text-blue-600 self-center"> Download </a>
            </div>
            <div class="lg:flex flex-row space-x-4 hidden">
                <input type="text" placeholder="Search" class="focus:outline-none focus:ring-4 bg-white px-3 py-1.5 font-normal	border border-gray-300 rounded transition duration-300 appearance-none	placeholder-gray-500">
                <button class="px-3 py-1.5 border border-green-500 text-sm no-underline select-none text-center leading-6	font-normal	align-middle rounded text-green-500 hover:text-white focus:outline-none hover:bg-green-600 transition duration-300 shadow focus:ring-4 focus:ring-green-200 inline-block">
                    Search
                </button>
            </div>
                <input type="checkbox" id="scales" name="scales">
                <label for="scales" class="navbar-toggle-cbox lg:hiddesn" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 focus:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg> 
                </label>
               
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

#navbar-toggle-cbox:checked ~ .collapse {
    display: block;
}

/* the checkbox used only internally; don't display it */
#navbar-toggle-cbox {
  display:none
}

</style>
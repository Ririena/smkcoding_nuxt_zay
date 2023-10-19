<template class="scroll-smooth">
    <header class="w-full border-b border-slate-200 py-6 bg-slate-200 scroll-smooth shadow-lg">
        <div class="container">
            <div class="flex justify-between items-center">
                <div>
                    <NuxtLink to="" class="text-3xl font-mono ml-4">DUIVION</NuxtLink>
                </div>
                <nav class="flex items-center gap-7 mr-7">
                    <NuxtLink to="/home" class="text-base hover:text-2xl active:text-red-500 ">Home</NuxtLink>
                    <NuxtLink to="/about" class="text-base hover:text-2xl active:text-blue-400">About</NuxtLink>
                    <NuxtLink to="/sign" class="text-base hover:text-2xl">Sign Up</NuxtLink>
                </nav>
            </div>
        </div>
    </header>
    
</template>

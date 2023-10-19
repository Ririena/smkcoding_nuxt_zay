<template>
    <section>
        <Header />
        <slot />
        
        <Footer/>
    </section>
</template>

<script>
export default {
    setup() {
        definePageMeta({
            layout: 'alternate-layout'
       });
    }
}
</script>

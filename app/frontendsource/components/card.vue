//html
<template>
    <div class="card">
        {{card.name}}
    </div>
</template>


// JS
<script>
    
export default {

    name: "Card",
    props:["card"],

}

</script>


// CSS
<style scoped lang="scss">
    
    .card{
        @apply bg-gray-100 mb-2 rounded-sm px-2 py-2; 
    }

</style>
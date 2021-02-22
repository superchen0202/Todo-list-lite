<!-- html -->
<template>

    <div class="list">
        
        <h2 class="header">{{list.name}}</h2>
        
        <div class="deck">
            <Card v-for="card in list.cards" :card="card" :key="card.id"></Card>
        </div>
    </div>

</template>

<!-- JS -->
<script>

import Card from "components/card";

export default{
    
    name: "list",
    props: ["list"],

    components:{
        Card: Card,
    }

}

</script>

<!-- CSS -->
<style scoped lang="scss">
        
    .list{
        @apply bg-gray-300 mx-2 w-64 rounded text-center px-3 py-2 
    }

    .header{
        @apply font-thin
    }

    .deck{
        @apply mt-2;
    }
 
</style>
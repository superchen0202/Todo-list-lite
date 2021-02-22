<!-- html -->
<template>
      
  <div class="list">
    <h2 class="header">{{list.name}}</h2>
  </div>

</template>

<!-- JS -->
<script>

    export default{
        name: "list",
        props: ["list"]
    }
    
</script>

<!-- CSS
 -->
<style scoped lang="scss">

    div{
        
        .list{
            @apply bg-gray-300 mx-2 w-64 rounded text-center
        }

        .header{
            @apply px-3 py-2 font-thin
        }


    }

 
</style>
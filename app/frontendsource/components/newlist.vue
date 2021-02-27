<template>
    <div class="container">
        
        <button class="new_button">
            <i class="fas fa-plus"></i> 新增其它列表
        </button>
        
        <input type="text" class="list_name" placeholder="列表標題">
        <button class="button create_button">建立</button>
        <button class="button cancel_button">取消</button>
    </div>

</template>


<script>
export default {

    name:"Newlist",
    
}
</script>



<style scoped lang="scss">

    .new_button {
        @apply font-bold w-full text-left;

        &:focus {
            @apply outline-none;
        }
    }

    .list_name {
        @apply rounded w-full px-3 py-2 mb-2;

        &:focus {
            @apply outline-none;
        }
    }

    .button {
        @apply px-3 py-1 rounded font-bold text-sm;

        &:focus {
            @apply outline-none;
        }
    }

    .create_button {
        @apply bg-gray-400;
    }

    .cancel_button {
        @apply bg-white;
    }

    .container {
        @apply bg-gray-300 px-3 py-2 mx-2 w-64 h-full rounded flex-none;
    }

</style>
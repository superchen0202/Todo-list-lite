//html
<template>

  <div>

    <div class="card">
      {{ card.name }}
    </div>

    <div class="dialog" v-if="true">

      <div class="inner">
        
        <a href="#" class="closeButton"><i class="fas fa-times"></i></a>
        <textarea class="content" v-model="card.name"></textarea>
        <button class="updateButton">更新</button>

      </div>
    </div>

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

    .card {
        @apply bg-gray-100 mb-2 rounded-sm px-2 py-2 cursor-pointer;
    }

    .dialog {
        
        background-color: rgba(0, 0, 0, 0.7);
        @apply fixed w-full h-full top-0 left-0 flex items-center justify-center;

        .inner {
           
            @apply bg-white flex flex-col px-6 py-2;
            width: 700px;

            .closeButton {
                @apply text-gray-800 text-right;
            }

            .content {
                @apply px-2 py-2 border border-gray-300 mt-2;

                &:focus {
                    @apply outline-none;
                }
            }

            .updateButton {
                @apply bg-gray-400 px-3 py-2 mt-2 rounded;

                &:focus {
                    @apply outline-none;
                }
            }
        }
    }

</style>
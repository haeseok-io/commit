<template>
    <div class="relative w-30">
        <button
            type="button"
            class="flex items-center justify-between w-full border border-gray-200 bg-white px-2 transition hover:bg-gray-50"
            :size="sizeClass.button"
            @click="isOpen = !isOpen"
        >
            <span>{{ selected.label }}</span>
            <ChevronDown />
        </button>

        <Transition
            enter-active-class="transition duration-150"
            enter-from-class="opacity-0 translate-y-1"  
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
        >
            <ul
                v-if="isOpen"
                class="absolute right-0 z-20 mt-2 w-full overflow-hidden border border-gray-200 bg-white p-1 shadow-lg"
                :class="sizeClass.menu"
            >
                <li v-for="option in options" :key="option.value">
                    <button type="button" class="flex w-full items-center px-3 py-2 text-gray-700 transition hover:bg-gray-100" @click="selectOption(option)">
                        <span>{{ option.label }}</span>
                    </button>
                </li>
            </ul>
        </Transition>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { ChevronDown, Check } from '@lucide/vue'

    const isOpen = ref(false)
    const emit = defineEmits(['change'])

    const props = defineProps({
        options: { type: Array, default: () => []},
        selected: { type: Object, default: null },
        size: { type: String, default: 'md'}
    })

    const sizeClass = computed(() => {
        const size = {
            sm: { button: 'h-8 px-3 text-sm', menu: 'text-sm' },
            md: { button: 'h-10 px-4 text-sm', menu: 'text-sm' },
            lg: { button: 'h-12 px-5 text-base', menu: 'text-base' }
        }

        return size[props.size]
    })


    const selectOption = option => {
        emit('change', option)
        isOpen.value = false
    }

</script>
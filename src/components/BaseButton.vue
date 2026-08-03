<template>
    <button
        :class="[
            'rounded-lg transition font-medium cursor-pointer',
            themeClass,
            sizeClass,
            {
                'opacity-50 cursor-not-allowed': disabled || loading
            }
        ]"
        @click="handleClick"
    >
        <slot />
    </button>
</template>

<script setup>
    import { computed } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const emit = defineEmits(['click'])
    const props = defineProps({
        theme: {
            type: String,
            defaults: 'primary'
        },
        size: {
            type: String,
            defaults: 'm'
        },
        disabled: {
            type: Boolean,
            defaults: false
        },
        loading: {
            type: Boolean,
            defaults: false
        },
        to: {
            type: String,
            defaults: null
        }
    })

    // 버튼의 색상 테마를 지정
    const themeClass = computed(() => {
        switch(props.theme) {
            case 'transparent':
                return 'bg-transparent bd-none'
            case 'line':
                return 'bg-white bd-black'
                break;
            default: 
                return 'bg-sky-500 text-white hover:bg-sky-600'
        }
    })

    // 버튼의 사이즈를 지정
    const sizeClass = computed(() => {
        switch(props.size) {
            default:
                return 'px-3 py-1'
        }
    })

    // 버튼 클릭 핸들러
    const handleClick = event => {
        if( props.disabled || props.loading ) return

        // to 파라미터가 있을경우 라우터 이동 처리
        if( props.to ) {
            router.push(props.to)
        }

        // to 파라미터가 없을 경우 기존 이벤트 발생
        emit('click', event);
    }
</script>
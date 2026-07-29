<template>
    <ul>
        <PostCard 
            v-for="data in datas"
            :key="data.id"
            :data="data"
        />
    </ul>
</template>

<script setup>
    import PostCard from './PostCard.vue'

    const datas = [
        {
            id: 1,
            thumbnail: '',
            subject: '테스트 제목1111',
            details: '이건 테스트 입니다. 1번 글 입니다.',
            date: '',
            comment: 3,
            user: {
                thumbnail: '',
                nickname: ''
            },
            like: 10
        },
        {
            id: 2,
            thumbnail: '',
            subject: '테스트 222222',
            details: '이건 테스트 입니다. 2번 글 입니다!!!',
            date: '',
            comment: 2,
            user: {
                thumbnail: '',
                nickname: ''
            },
            like: 2
        }
    ]
</script>
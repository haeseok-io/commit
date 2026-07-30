<template>
    <ul class="grid grid-cols-4 gap-x-8 gap-y-8">
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
            thumbnail: 'https://placehold.co/300x200',
            subject: '테스트 제목1111',
            details: '이건 테스트 입니다. 1번 글 입니다.',
            date: '2026-07-01 15:44:52',
            comment: 3,
            user: {
                thumbnail: 'https://placehold.co/100x100',
                nickname: '테스트 유저'
            },
            like: 10
        },
        {
            id: 2,
            thumbnail: 'https://placehold.co/300x200',
            subject: '테스트 222222',
            details: '이건 테스트 입니다. 2번 글 입니다!!!',
            date: '2026-07-10 16:33:52',
            comment: 2,
            user: {
                thumbnail: 'https://placehold.co/100x100',
                nickname: '테스트 유저2'
            },
            like: 2
        },
        {
            id: 2,
            thumbnail: 'https://placehold.co/300x200',
            subject: '테스트 222222',
            details: '이건 테스트 입니다. 2번 글 입니다!!!',
            date: '2026-07-10 16:33:52',
            comment: 2,
            user: {
                thumbnail: 'https://placehold.co/100x100',
                nickname: '테스트 유저2'
            },
            like: 2
        },
        {
            id: 2,
            thumbnail: 'https://placehold.co/300x200',
            subject: '테스트 222222',
            details: '이건 테스트 입니다. 2번 글 입니다!!!',
            date: '2026-07-10 16:33:52',
            comment: 2,
            user: {
                thumbnail: 'https://placehold.co/100x100',
                nickname: '테스트 유저2'
            },
            like: 2
        },
        {
            id: 2,
            thumbnail: 'https://placehold.co/300x200',
            subject: '테스트 222222',
            details: '이건 테스트 입니다. 2번 글 입니다!!!',
            date: '2026-07-10 16:33:52',
            comment: 2,
            user: {
                thumbnail: 'https://placehold.co/100x100',
                nickname: '테스트 유저2'
            },
            like: 2
        }
    ]
</script>
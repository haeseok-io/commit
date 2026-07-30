<template>
    <main class="main">
        <div class="home__toolbar flex justify-between mb-5">
            <nav class="home__tabs">
                <ul class="home__tab-list flex">
                    <li v-for="(tab, index) in tabs" :key="tab.key" class="flex items-center px-3 py-4" :class="tab.key===activeTab ? 'text-black' : 'text-gray-400'">
                        <component :is="tab.icon" :size="20" />
                        <span class="ml-2 text-lg">{{ tab.name }}</span>
                    </li>
                </ul>
            </nav>

            <div class="home__sort">
                <SortDropdown :options="sortOption" :selected="sortSelected" size="sm" @change="changeSort"/>
            </div>
        </div>
        <PostCardList />
    </main>
</template>

<script setup>
    import { ref } from 'vue'
    import PostCardList from '@/components/PostCardList.vue'
    import SortDropdown from '@/components/SortDropdown.vue'
    import { Clock, TrendingUp, Rss } from "lucide-vue-next"

    // 탭 관련 설정
    const activeTab = ref('latest')
    const tabs = [
        { key: "latest", name: "최신", icon: Clock },
        { key: "pupular", name: "인기", icon: TrendingUp },
        { key: "feed", name: "피드", icon: Rss }
    ]

    // 정렬 관련 설정
    const sortOption = [
        { value: "today", label: "오늘" },
        { value: "weed", label: "이번주" },
        { value: "month", label: "이번달" },
        { value: "year", label: "올해" }
    ]

    const sortSelected = ref(sortOption[0])
    const changeSort = value => {
        sortSelected.value = value
    }
</script>
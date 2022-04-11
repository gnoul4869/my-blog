<template>
    <div class="tag">
        <h1>#{{ tag }}</h1>
        <div v-if="taggedPosts.length" class="layout">
            <PostList :posts="taggedPosts" />
            <TagCloud :posts="posts" />
        </div>
        <div v-else>
            <Spinner />
        </div>
        <div v-if="error">{{ error }}</div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from '@vue/runtime-core';
import getPosts from '@/composables/getPosts';
import PostList from '@/components/PostList.vue';
import TagCloud from '@/components/TagCloud.vue';
import Spinner from '@/components/Spinner.vue';

export default {
    components: { PostList, Spinner, TagCloud },
    setup() {
        const route = useRoute();
        let { tag } = route.params;

        const { posts, error, load } = getPosts();

        load();

        const taggedPosts = computed(() => posts.value.filter((post) => post.tags.includes(tag)));

        return { tag, posts, error, load, taggedPosts };
    },
};
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>

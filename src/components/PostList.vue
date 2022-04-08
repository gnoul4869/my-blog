<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['posts'],
};
</script>

<style></style>

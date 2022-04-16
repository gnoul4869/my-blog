<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
        <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
        <button @click="handleClick" class="delete">Delete</button>
    </div>
    <div v-else>
        <Spinner />
    </div>
</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { doc, deleteDoc } from '@firebase/firestore';
import { firestore } from '@/firebase/config';

export default {
    components: { Spinner },
    props: ['id'],
    setup(props) {
        const route = useRoute();
        const router = useRouter();
        const { id } = route.params;
        const { post, error, load } = getPost(id);

        load();

        const handleClick = async () => {
            try {
                await deleteDoc(doc(firestore, 'posts', id));
                router.push({ name: 'Home' });
            } catch (error) {
                console.error(error);
            }
        };

        return { post, error, handleClick };
    },
};
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
}

button.delete {
    margin-top: 40px;
    font-size: 15px;
    cursor: pointer;
}
</style>

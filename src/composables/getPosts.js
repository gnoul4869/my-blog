import { ref } from '@vue/reactivity';

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            // Similate delay
            await new Promise((resolve) => setTimeout(resolve, 200));

            let data = await fetch('http://localhost:3000/posts');
            if (!data.ok) {
                throw Error('No data available');
            }
            posts.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { posts, error, load };
};

export default getPosts;

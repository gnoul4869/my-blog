import { ref } from '@vue/reactivity';
import { collection, getDocs, query, orderBy } from '@firebase/firestore';
import { firestore } from '@/firebase/config';

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const postsCollection = collection(firestore, 'posts');
            const postsQuery = query(postsCollection, orderBy('createdAt', 'desc'));
            const res = await getDocs(postsQuery);
            res.docs.forEach((doc) => posts.value.push({ ...doc.data(), id: doc.id }));
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { posts, error, load };
};

export default getPosts;

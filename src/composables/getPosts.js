import { ref } from '@vue/reactivity';
import { collection, getDocs } from '@firebase/firestore';
import { firestore } from '@/firebase/config';

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const res = await getDocs(collection(firestore, 'posts'));
            res.docs.forEach((doc) => posts.value.push({ ...doc.data(), id: doc.id }));
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { posts, error, load };
};

export default getPosts;

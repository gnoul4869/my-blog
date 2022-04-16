import { ref } from 'vue';
import { doc, getDoc } from '@firebase/firestore';
import { firestore } from '@/firebase/config';

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            let res = await getDoc(doc(firestore, 'posts', id));

            if (!res.exists()) {
                throw Error('Post not found');
            }

            post.value = { ...res.data(), id: res.id };
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { post, error, load };
};

export default getPost;

import {ItemApp, ItemCvs, User} from "@/models/user";
import {UpdatePostsFunction} from "@/models/api";

export const handleDeleting = async (post_id: string, post: (ItemApp | ItemCvs)[], updatePosts: UpdatePostsFunction, user: User, haveToBeUpdated: string) => {
    try {
        const newArr = post.filter(item => item.id !== post_id);
        const id: string = user.id || ''
        await updatePosts({id, newArr, haveToBeUpdated});
        alert(`${post_id} deleted successfully!`);
    } catch (error) {
        alert(`Failed to delete ${post_id}, cause of ${error}`);
    }
}

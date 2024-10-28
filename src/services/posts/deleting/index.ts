import {ItemApp, ItemCvs, User} from "@/models/user";
import {UpdatePostsFunction} from "@/models/api";
import {updateApplications} from "@/store/reducers/auth/authSlice.ts";
import { Dispatch } from "react";
import { UnknownAction } from "redux";

export const handleDeleting = async (
    post_id: string,
    post: (ItemApp | ItemCvs)[],
    updatePosts: UpdatePostsFunction,
    user: User,
    dispatch: Dispatch<UnknownAction>,
    haveToBeUpdated: string
) => {
    try {
        const newArr = post.filter(item => item.id !== post_id);
        const id: string = user.id
        await updatePosts({id, newArr, haveToBeUpdated});
        dispatch(updateApplications(newArr))
        alert(`${post_id} deleted successfully!`);
    } catch (error) {
        alert(`Failed to delete ${post_id}, cause of ${error}`);
    }
}

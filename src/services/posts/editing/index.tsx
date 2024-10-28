import React from "react";
import { UpdatePostsFunction } from "@/models/api";
import { ItemApp, ItemCvs } from "@/models/user";


export const handleEditing = async (
    e: React.FormEvent,
    updatePosts: UpdatePostsFunction,
    user_id: string,
    haveToBeUpdated: string,
    handleEditingPosts: () => (ItemApp | ItemCvs)[]
) => {
    e.preventDefault();
    try {
        const newArr = handleEditingPosts()
        await updatePosts({id: user_id, newArr, haveToBeUpdated});
        alert("success");
    } catch (error) {
        alert(`Failure, cause of ${error}`);
    }
}

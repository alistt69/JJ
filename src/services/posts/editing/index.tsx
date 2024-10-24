import React from "react";
import {ItemApp, ItemCvs, User} from "@/models/user";
import {UpdatePostsFunction} from "@/models/api";


export const handleEditing = async (
    e: React.FormEvent,
    post_id: string,
    post: (ItemApp | ItemCvs)[],
    newSalary: string,
    newProfession: string,
    newDescription: string,
    newLocation: string,
    updatePosts: UpdatePostsFunction,
    setObjCopy: (arg: object) => void,
    setEditMode: (arg: (prev: boolean) => boolean) => void,
    user: User
    ) => {
    e.preventDefault();
    try {
        const newArr = post.map(item => {
            if (item.id === post_id) {
                return {
                    ...item,
                    name: newProfession,
                    description: newDescription,
                    salary: newSalary,
                    location: newLocation
                };
            }
            return item;
        })

        const id: string = user.id || ''
        await updatePosts({id, newArr, haveToBeUpdated: "applications"});
        setObjCopy({
            name: newProfession,
            description: newDescription,
            salary: newSalary,
            location: newLocation
        })
        setEditMode(prev => !prev);
        alert(`Application ${post_id} updated successfully!`);
    } catch (error) {
        alert(`Failed to update application ${post_id}, cause of ${error}`);
    }
}
import React, { Dispatch } from "react";
import {ItemApp, ItemCvs, User} from "@/models/user";
import {UpdatePostsFunction} from "@/models/api";
import { UnknownAction } from "redux";
import { updateApplications } from "@/store/reducers/auth/authSlice.ts";

type FirstObject = {
    profession: string;
    name: string;
    description: string;
    salary: string;
    location: string;
};

type SecondObject = {
    name: string;
    description: string;
    salary: string;
    location: string;
};

type CombinedObject = FirstObject | SecondObject;

export const handleEditing = async (
    e: React.FormEvent,
    post_id: string,
    post: (ItemApp | ItemCvs)[],
    newName: string,
    newProfession: string,
    newSalary: string,
    newDescription: string,
    newLocation: string,
    updatePosts: UpdatePostsFunction,
    setObjCopy: Dispatch<CombinedObject>,
    setEditMode: (arg: (prev: boolean) => boolean) => void,
    user: User,
    haveToBeUpdated: string,
    dispatch: Dispatch<UnknownAction>,
    handleEditing1: any

    ) => {
    e.preventDefault();
    try {
        /*const newArr = post.map(item => {
            if (item.id === post_id) {
                if (haveToBeUpdated === "applications") {
                    console.log('1')
                    return {
                        ...item,
                        name: newProfession,
                        description: newDescription,
                        salary: newSalary,
                        location: newLocation
                    };
                } else {
                    return {
                        ...item,
                        profession: newProfession,
                        name: newName,
                        description: newDescription,
                        salary: newSalary,
                        location: newLocation
                    };
                }
            }
            return item;
        })*/

        const newArr = handleEditing1()
        const id: string = user.id
        await updatePosts({id, newArr, haveToBeUpdated});
        if (haveToBeUpdated === "applications") {
            setObjCopy({
                name: newProfession,
                description: newDescription,
                salary: newSalary,
                location: newLocation
            })
        } else {
            setObjCopy({
                profession: newProfession,
                name: newName,
                description: newDescription,
                salary: newSalary,
                location: newLocation
            })
        }

        setEditMode(prev => !prev);
        alert(`${post_id} updated successfully!`);
    } catch (error) {
        alert(`Failed to update ${post_id}, cause of ${error}`);
    }
}
import { useUserInit } from "@/hooks/init";
import { useGetCvsByAuthorQuery } from "@/api/posts";
import { useEffect } from "react";

export const useGettingUserCvs = () => {

    const user = useUserInit()

    const { data: cvs, refetch } = useGetCvsByAuthorQuery(user.id, {
        skip: user.id.length === 0,
    });

    useEffect(() => {
        refetch()
    }, [user, refetch]);

    return cvs || [];
}
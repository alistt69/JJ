import { useGetApplicationByAuthorQuery } from "@/api/posts";
import { useUserInit } from "@/hooks/init";
import { useEffect } from "react";


export const useGettingUserApplications = () => {

    const user = useUserInit()

    const { data: applications, refetch } = useGetApplicationByAuthorQuery(user.id, {
        skip: user.id.length === 0,
    });

    useEffect(() => {
        refetch()
    }, [user, refetch]);

    return applications || [];
}
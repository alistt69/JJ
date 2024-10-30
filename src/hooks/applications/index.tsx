import { useUserInit } from "@/hooks/init";
import { useGetApplicationByAuthorQuery } from "@/api/posts";

export const useGettingUserApplications = () => {

    const user = useUserInit()

    const { data: applications } = useGetApplicationByAuthorQuery(user.id, {
        skip: user.id.length === 0,
    });

    return applications;
}
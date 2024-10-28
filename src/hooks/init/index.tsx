import { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks";

export const useUserInit = () => {
    return useAppSelector((state: RootState) => state.auth.user);
}

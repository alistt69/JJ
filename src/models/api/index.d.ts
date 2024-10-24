import {ItemApp, ItemCvs, User} from "@/models/user";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

export type UpdatePostsFunction = (arg: { id: string; newArr: (ItemApp | ItemCvs)[], haveToBeUpdated: string}) => Promise<{ data: User; error?: undefined; } | { data?: undefined; error: FetchBaseQueryError | SerializedError; }>;
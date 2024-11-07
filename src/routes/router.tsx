import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { paths } from "./routes.ts";
import RootLayout from "@/layouts/root";
import AuthPage from "@/pages/auth";
import MainLayout from "@/layouts/main";
import Home from "@/pages/main/home";
import JobsLayout from "@/layouts/jobs";
import LikedLayout from "@/layouts/liked";
import Help from "@/pages/main/help";
import About from "@/pages/main/about";
import Applications from "@/pages/main/jobs/applications";
import Cvs from "@/pages/main/jobs/cvs";
import ApplicationsLiked from "../pages/main/liked/applications";
import CvsLiked from "../pages/main/liked/cvs";
import ErrorPage from "@/pages/error";
import PostsLayout from "@/layouts/posts";
import MyCvs from "@/pages/main/posts/cvs";
import MyApplications from "@/pages/main/posts/applications";
import Upload from "@/pages/main/posts/upload";
import ProtectedRoute from "@/routes/protection.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>

            <Route index element={<AuthPage />} />
            <Route path={paths.MAIN} element={
                <ProtectedRoute>
                    <MainLayout />
                </ProtectedRoute>
            }>

                <Route index element={<Home />} />
                <Route path={paths.MYPOSTS} element={<PostsLayout />}>

                    <Route path={paths.CVS} element={<MyCvs />} />
                    <Route path={paths.APPLICATIONS} element={<MyApplications />} />
                    <Route path={paths.UPLOAD} element={<Upload />} />

                </Route>
                <Route path={paths.JOBS} element={<JobsLayout />}>

                    <Route path={paths.APPLICATIONS} element={<Applications />} />
                    <Route path={paths.CVS} element={<Cvs />} />

                </Route>
                <Route path={paths.LIKED} element={<LikedLayout />}>

                    <Route path={paths.APPLICATIONS} element={<ApplicationsLiked />} />
                    <Route path={paths.CVS} element={<CvsLiked />} />

                </Route>
                <Route path={paths.HELP} element={<Help />} />
                <Route path={paths.ABOUT} element={<About />} />

            </Route>

        </Route>
    )
)

export default router;

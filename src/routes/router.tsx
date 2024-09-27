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
import Vacancies from "@/pages/main/jobs/vacancies";
import Employees from "@/pages/main/jobs/employees";
import VacanciesLiked from "@/pages/main/liked/vacancies";
import EmployeesLiked from "@/pages/main/liked/employees";
import ErrorPage from "@/pages/error";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>

            <Route index element={<AuthPage />} />
            <Route path={paths.MAIN} element={<MainLayout />}>

                <Route path={paths.HOME} element={<Home />} />
                <Route path={paths.JOBS} element={<JobsLayout />}>
                    <Route path={paths.VACANCIES} element={<Vacancies />} />
                    <Route path={paths.EMPLOYEES} element={<Employees />} />

                </Route>
                <Route path={paths.LIKED} element={<LikedLayout />}>

                    <Route path={paths.VACANCIES} element={<VacanciesLiked />} />
                    <Route path={paths.EMPLOYEES} element={<EmployeesLiked />} />

                </Route>
                <Route path={paths.HELP} element={<Help />} />
                <Route path={paths.ABOUT} element={<About />} />

            </Route>

        </Route>
    )
)

export default router;
